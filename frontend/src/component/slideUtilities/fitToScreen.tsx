import {FC, ReactNode, useEffect, useRef, useState} from "react";

export interface FitToScreenProps {
    children: ReactNode
    baseWidth: number
    baseHeight: number
    element?: HTMLElement | "container"
    rerender?: boolean
}

export const FitToScreen: FC<FitToScreenProps> = ({rerender = true,...props}) => {
    const [zoom, setZoom] = useState<number>(1)
    const element = useRef<HTMLDivElement>(null)

    function setZoomCorrect(){
        let width = window.innerWidth
        let height = window.innerHeight
        if(props.element == "container"){
            width = element.current?.clientWidth ?? width
            height = element.current?.clientHeight ?? height
        }else if(props.element != null){
            width = props.element.clientWidth
            height = props.element.clientHeight
        }
        //const zoom = Math.min(width/props.baseWidth, height/props.baseHeight)
        const zoom = width/props.baseWidth
        console.log("zoom",width,props.baseWidth,element.current?.clientWidth,element.current?.clientHeight, zoom)
        setZoom(parseFloat(zoom.toFixed(2)) )
    }

    useEffect(() => {
        setZoomCorrect()
        if(rerender){
            console.log("rerender")
            window.addEventListener("resize", setZoomCorrect)
            return () => {
                window.removeEventListener("resize", setZoomCorrect)
            }
        }
    },[])

    return <div  ref={element} style={{zoom:zoom,width:"100%",height:"100%"}}>
        {props.children}
    </div>
}