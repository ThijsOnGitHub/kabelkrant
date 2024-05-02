import {FC, forwardRef, useImperativeHandle, useRef} from "react";
import styles from './TextBlock.module.scss'
import {AnimatePresence, motion} from "framer-motion";

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
        <AnimatePresence mode={"wait"} initial={true}>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}

                key={props.content}
                ref={content} 
                className={styles.content} 
                dangerouslySetInnerHTML={{__html: props.content}}
            />
        </AnimatePresence>
    </div>
})