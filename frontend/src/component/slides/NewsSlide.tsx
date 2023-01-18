import {TextSlide, TextSlideProps} from "./TextSlide";
import {FC, useEffect, useState} from "react";
import {BREAK_TYPE, measureTextHeight, paginateTextBySize} from "../../functions/splitText";
import styles from "../slideBlocks/TextBlock.module.scss";

export type NewsSlideProps= TextSlideProps

export const NewsSlide: FC<NewsSlideProps> = ({title,text,...props}) => {
    const [index,setIndex] = useState<number>(0)
    const [contentArray,setContentArray] = useState<string[]>([])

    function nextSlide() {
        if(index < contentArray.length-1) {
            setIndex(index + 1)
        } else {
            props.onCompleted()
        }
    }

    useEffect(() => {
        setIndex(0)
        const height = measureTextHeight(title ?? '', "1100px", {},styles.title)
        const array = paginateTextBySize(1000, 770-height,{}, styles.content,BREAK_TYPE.SENTENCE)(text)
        setContentArray(array)
        console.log(array)
    },[title,text])


    return <div>
        <div style={{position:"absolute", left:1645,top: 900, zIndex:1}} className={"content-text"} >{index+1}/{contentArray.length}</div>
        <TextSlide {...{...props, title, text}} onCompleted={nextSlide} text={contentArray[index]}/>
    </div>
}