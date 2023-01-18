import {FC, ReactNode, useEffect, useState} from "react";

export interface FitToScreenProps {
    children: ReactNode
    baseWidth: number
    baseHeight: number
}

export const FitToScreen: FC<FitToScreenProps> = (props) => {
    const [zoom, setZoom] = useState<number>(1)

    function setZoomCorrect(){
        const width = window.innerWidth
        const height = window.innerHeight
        //const zoom = Math.min(width/props.baseWidth, height/props.baseHeight)
        const zoom = width/props.baseWidth
        setZoom(zoom)
    }

    useEffect(() => {
        setZoomCorrect()
        window.addEventListener("resize", setZoomCorrect)
        return () => {
            window.removeEventListener("resize", setZoomCorrect)
        }
    })

    return <div style={{zoom:zoom}}>
        {props.children}
    </div>
}