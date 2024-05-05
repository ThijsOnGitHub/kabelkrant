import {FC, forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import styles from './TextBlock.module.scss'
import {AnimatePresence, motion, usePresence} from "framer-motion";

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

    const [isPresent, safeToRemove] = usePresence()

    const transitionDurationInMs = 200

    useEffect(() => {
        !isPresent && setTimeout(safeToRemove, transitionDurationInMs)
    }, [isPresent])

    useImperativeHandle(ref,() => ({
        title: title.current,
        content: content.current,
        parent: parent.current
    }))

    return <div ref={parent} className={styles.textBlock}>
        <motion.div   
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: transitionDurationInMs/1000}}
                ref={title} className={styles.title}>{props.title}</motion.div>
        <motion.div animate={{opacity: 1}} transition={{duration: transitionDurationInMs/1000}} exit={{opacity: 0}} >
            <AnimatePresence key={props.title} mode={"wait"} initial={true}>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: transitionDurationInMs/1000}}
                    key={props.content}
                    ref={content} 
                    className={styles.content} 
                    dangerouslySetInnerHTML={{__html: props.content}}
                />
            </AnimatePresence>
        </motion.div>
        
    </div>
})