import {FC, forwardRef, useImperativeHandle, useRef} from "react";
import styles from './TextBlock.module.scss'

export interface TextBlockProps{
    title?: string
    content: string
}

export interface TextBlockRef{
    title: HTMLDivElement | null
    content: HTMLDivElement | null
    parent: HTMLDivElement | null
}


export const TextBlock = forwardRef<TextBlockRef,TextBlockProps>((props, ref) => {
    const title = useRef<HTMLDivElement>(null)
    const content = useRef<HTMLDivElement>(null)
    const parent = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref,() => ({
        title: title.current,
        content: content.current,
        parent: parent.current
    }))

    return <div ref={parent} className={styles.textBlock}>
        <div ref={title} className={styles.title}>{props.title}</div>
        <div ref={content} className={styles.content} dangerouslySetInnerHTML={{__html: props.content}}></div>
    </div>
})