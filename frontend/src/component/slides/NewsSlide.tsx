import {TextSlide, TextSlideProps, TextSlideRef} from "./TextSlide";
import {FC, useCallback, useContext, useEffect, useRef, useState} from "react";
import {BREAK_TYPE, measureTextHeight, paginateTextBySize} from "../../functions/splitText";
import styles from "../slideBlocks/TextBlock.module.scss";
import {useTimer} from "../../hooks/utilities/useTimer";
import { NextPrevContext } from "../../context/nextContext";

export type NewsSlideProps= Omit<TextSlideProps,'seconds'> & {
    onCompleted: () => void
    onBack?: () => void
}

export const NewsSlide: FC<NewsSlideProps> = ({title,text,...props}) => {
    const [index,setIndex] = useState<number>(0)
    const [contentArray,setContentArray] = useState<string[]>([])

    const textSlideRef = useRef<TextSlideRef>(null)
    const PrevNextContext = useContext(NextPrevContext)

    const nextSlide = useCallback(() => {
        if(index < contentArray.length-1) {
            setIndex((index)=>index + 1)
            if(PrevNextContext.autoGoNext) { resetTimer() }
        } else {
            props.onCompleted()
        }
    },[index,contentArray])

    const prevSlide = useCallback(() => {
        if(index > 0) {
            setIndex((index)=>index - 1)
        } else {
            props.onBack?.()
        }
    },[index])


    const {seconds, resetAndStartTimer:resetTimer} = useTimer(props.duration,nextSlide)



    useEffect(() => {
        PrevNextContext.setNext(()=>{
            console.log("next NewsSlide")
            nextSlide()
        })
    },[nextSlide])

    useEffect(() => {
        PrevNextContext.setPrev(()=>{
            console.log("prev NewsSlide")
            prevSlide()
        })
    },[prevSlide])
    

    function setHeight(){
        // Check if fonts are loaded
        const width = 1250
        const parent = textSlideRef.current?.parent
        // get the height of the parent without padding
        const parentComputedStyle = window.getComputedStyle(parent ?? document.body)
        const parentHeight = ((parent?.clientHeight ?? 20) - parseFloat(parentComputedStyle.paddingTop) - parseFloat(parentComputedStyle.paddingBottom) )
        const titleHeight = measureTextHeight(title, width+"px", {}, styles.title)
        const height = parentHeight - titleHeight // measureTextHeight(title ?? '', "1000px", {},styles.title)
        const array = paginateTextBySize(width ?? 1000, height,{color:"white"}, styles.content,BREAK_TYPE.SENTENCE)(text,title)
        if(PrevNextContext.autoGoNext) resetTimer()
        setIndex(0)
        setContentArray(array)
    }
    /*

        */
    useEffect(() => {
        setHeight()
        document.fonts.ready.then(() => {
            setHeight()
        })
    },[text])


    return <div style={{position:"relative"}}>
        <div style={{position:"absolute", left:1755,top: 960, zIndex:1}} className={"small-content-text"} >{index+1}/{contentArray.length}</div>
        <TextSlide ref={textSlideRef} {...{...props, title, text}} seconds={seconds} duration={props.duration} text={contentArray[index]}/>
    </div>
}