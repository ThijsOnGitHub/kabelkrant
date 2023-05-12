import {forwardRef, useImperativeHandle, useRef} from "react";
import {BaseSlide, BaseSlideProps, BaseSlideRef} from "./baseSlides/BaseSlide";
import {TextBlock,  TextBlockRef} from "../slideBlocks/TextBlock";

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

    useImperativeHandle(ref,() => ({
        content: textBlockRef.current?.content ?? null,
        title: textBlockRef.current?.title ?? null,
    }))

    return <BaseSlide ref={baseSlideRef} {...props} percentageDone={seconds/duration * 100}>
        <TextBlock ref={textBlockRef} content={text} title={title}/>
    </BaseSlide>
})