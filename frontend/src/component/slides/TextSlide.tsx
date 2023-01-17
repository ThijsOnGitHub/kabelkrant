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
    const [content,setContent] = useState<string>('')
    const [index,setIndex] = useState<number>(0)
    const [contentArray,setContentArray] = useState<string[]>([])
    const [timeoutValue,setTimeoutValue] = useState<NodeJS.Timeout>()

    function loadNextPage() {
        setTimeoutValue(setTimeout(() => {
            console.log(index,contentArray.length,index < contentArray.length)
            if(index < contentArray.length-1) {
                setIndex(index + 1)
                baseSlideRef.current?.resetTimer()
            } else {
                props.onCompleted()
            }
        },props.seconds * 1000))
    }

    useEffect(() => {
        if(textBlockRef.current?.content) {
            const height = measureTextHeight(title ?? '', "1400px", {},styles.title)
            const array = paginateTextBySize(1400, 1020-height,{}, styles.content)(text)
            setContentArray(array)
            loadNextPage()
        }
    },[textBlockRef.current?.content])

    useEffect(() => {
        clearTimeout(timeoutValue)
        loadNextPage()
    },[index])

    return <BaseSlide ref={baseSlideRef} {...props}>
        <TextBlock ref={textBlockRef} content={contentArray[index]} title={title}/>
    </BaseSlide>
})