import {createRef, FC, forwardRef, useEffect, useRef, useState} from "react";
import {BaseSlide, BaseSlideProps, BaseSlideRef} from "../baseSlides/BaseSlide";
import {TextBlock, TextBlockProps, TextBlockRef} from "../slideBlocks/TextBlock";
import {measureTextHeight, paginateTextBySize} from "../../functions/splitText";
import styles from "../slideBlocks/TextBlock.module.scss";
import {useTimer} from "../../hooks/utilities/useTimer";

export type TextSlideProps = Omit<BaseSlideProps,'children'| 'percentageDone'> &{
    title: string
    text: string
    duration: number
    onCompleted: () => void
}

export type TextSlideRef = TextBlockRef

export const TextSlide = forwardRef<TextSlideRef,TextSlideProps>(({title,text,duration,...props},ref) => {
    const textBlockRef = useRef<TextBlockRef>(null)
    const baseSlideRef = useRef<BaseSlideRef>(null)

    const [seconds,resetTimer] = useTimer(duration,props.onCompleted)

    useEffect(() => {
        resetTimer()
        console.log("Slide reset")
    },[title,text])

    return <BaseSlide ref={baseSlideRef} {...props} percentageDone={seconds/duration * 100}>
        <TextBlock ref={textBlockRef} content={text} title={title}/>
    </BaseSlide>
})