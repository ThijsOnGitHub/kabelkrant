import {createRef, FC, forwardRef, useEffect, useRef, useState} from "react";
import {BaseSlide, BaseSlideProps, BaseSlideRef} from "../baseSlides/BaseSlide";
import {TextBlock, TextBlockProps, TextBlockRef} from "../slideBlocks/TextBlock";
import {measureTextHeight, paginateTextBySize} from "../../functions/splitText";
import styles from "../slideBlocks/TextBlock.module.scss";

export type TextSlideProps = Omit<BaseSlideProps,'children'> &{
    title: string
    text: string
    onCompleted: () => void
}

export type TextSlideRef = TextBlockRef

export const TextSlide = forwardRef<TextSlideRef,TextSlideProps>(({title,text,...props},ref) => {
    const textBlockRef = useRef<TextBlockRef>(null)
    const baseSlideRef = useRef<BaseSlideRef>(null)
    const [timeoutValue,setTimeoutValue] = useState<NodeJS.Timeout>()

    useEffect(() => {
        baseSlideRef.current?.resetTimer()
        clearTimeout(timeoutValue)

        const timeout = setTimeout(() => {
            props.onCompleted()
        },props.seconds * 1000)

        setTimeoutValue(timeout)
        return () => clearTimeout(timeout)
    },[title,text])

    return <BaseSlide ref={baseSlideRef} {...props}>
        <TextBlock ref={textBlockRef} content={text} title={title}/>
    </BaseSlide>
})