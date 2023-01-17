import styles from './BaseSlide.module.scss'
import {FC, forwardRef, ReactElement, ReactNode, useEffect, useImperativeHandle, useRef, useState} from "react";
import {Subject, SubjectProps} from "../slideUtilities/Subject";
import {useCurrentTime} from "../../hooks/utilities/useCurrentTime";
import {Bar} from "../slideUtilities/bar";
import {useTimePercentage} from "../../hooks/utilities/useTimePercentage";

export interface BaseSlideProps {
    backgroundImage:string
    subject: SubjectProps
    seconds: number
    children?: ReactNode
}

export interface BaseSlideRef {
    resetTimer: () => void
    contentRef: React.RefObject<HTMLDivElement>
}

// eslint-disable-next-line react/display-name
export const BaseSlide = forwardRef<BaseSlideRef,BaseSlideProps>((props, ref) => {
    const backgroundStyle ={backgroundImage: `url(${props.backgroundImage})`}
    const currentTime = useCurrentTime()
    const [progres,reset] = useTimePercentage(props.seconds);
    const contentRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref,() => {
        return {
            resetTimer: () => reset(),
            contentRef
        }
    })

    return (
        <div className={styles.slide} style={backgroundStyle} >
            <div className={styles.sideBar}>
                <img className={styles.logo} src="/logo/logoBig.svg" alt="Next.js" />
                <Subject subject={props.subject.subject} icon={props.subject.icon} />
                <div className={styles.sideBarBottom}>
                    <div className={styles.sideBarBottomBar}><Bar percentage={progres}/></div>
                    <div ref={contentRef} className={styles.sideBarBottomTime}>{currentTime.toLocaleTimeString('NL-nl',{hour:"2-digit",minute:"2-digit"})}</div>
                </div>
            </div>
            <div className={styles.body}>
                {props.children}
            </div>
        </div>
    )
})

/*
<div
                    style={{
                    position: 'absolute',
                    left : x,
                    top: y,
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                        userSelect: 'none',
                        resize: 'both',
                        overflow:'auto'
                }}
                    draggable={true}
                    onDragStart={(eDown) =>{
                        eDown.preventDefault()

                        document.onmousemove = (e) => {
                            if(e.clientX > 0 && e.clientY > 0) {
                                // correct by the place of grabbing
                                setX(e.clientX * (1 / scale) )
                                setY(e.clientY * (1 / scale))
                            }
                        }

                        eDown.currentTarget.ondragend = () => {
                            document.onmousemove = null
                            eDown.currentTarget.ondragend = null
                        }
                    }}

                >Test</div>
 */