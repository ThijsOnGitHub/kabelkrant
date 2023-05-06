import {createRef, FC, forwardRef, useEffect, useRef, useState} from "react";
import {BaseSlide, BaseSlideProps, BaseSlideRef} from "./baseSlides/BaseSlide";
import {TextBlock, TextBlockProps, TextBlockRef} from "../slideBlocks/TextBlock";
import {useTimer} from "../../hooks/utilities/useTimer";

export type TextSlideProps = Omit<BaseSlideProps,'children'| 'percentageDone'> &{
    title: string
    text: string
    duration: number,
    seconds: number,
}

export type TextSlideRef = TextBlockRef

export const TextSlide = forwardRef<TextSlideRef,TextSlideProps>(({title,text,duration,seconds,...props},ref) => {
    const textBlockRef = useRef<TextBlockRef>(null)
    const baseSlideRef = useRef<BaseSlideRef>(null)

    return <BaseSlide ref={baseSlideRef} {...props} percentageDone={seconds/duration * 100}>
        <TextBlock ref={textBlockRef} content={text} title={title}/>
    </BaseSlide>
})