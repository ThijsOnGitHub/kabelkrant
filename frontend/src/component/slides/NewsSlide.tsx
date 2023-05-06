import {TextSlide, TextSlideProps} from "./TextSlide";
import {FC, useCallback, useEffect, useState} from "react";
import {BREAK_TYPE, measureTextHeight, paginateTextBySize} from "../../functions/splitText";
import styles from "../slideBlocks/TextBlock.module.scss";
import {useTimer} from "../../hooks/utilities/useTimer";

export type NewsSlideProps= Omit<TextSlideProps,'seconds'> & {
    onCompleted: () => void
}

export const NewsSlide: FC<NewsSlideProps> = ({title,text,...props}) => {
    const [index,setIndex] = useState<number>(0)
    const [contentArray,setContentArray] = useState<string[]>([])


    const nextSlide = () => {
        if(index < contentArray.length-1) {
            setIndex((index)=>index + 1)
            resetTimer()
        } else {
            props.onCompleted()
        }
    }

    const [seconds,resetTimer] = useTimer(props.duration,nextSlide)

    useEffect(() => {
        console.log("update text")
        const height = measureTextHeight(title ?? '', "1000px", {},styles.title)
        const array = paginateTextBySize(1000, 770-height,{}, styles.content,BREAK_TYPE.SENTENCE)(text)
        resetTimer()
        setIndex(0)
        setContentArray(array)
    },[text])


    return <div>
        <div style={{position:"absolute", left:1645,top: 900, zIndex:1}} className={"content-text"} >{index+1}/{contentArray.length}</div>
        <TextSlide {...{...props, title, text}} seconds={seconds} duration={props.duration} text={contentArray[index]}/>
    </div>
}