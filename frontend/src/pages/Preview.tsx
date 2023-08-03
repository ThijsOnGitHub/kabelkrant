import { useContext, useEffect, useMemo, useState } from "react";
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories";
import { RequiredWordpressPost } from "../types/wordpressTypes/wordpressPost";
import { useProcessWordpressPostData } from "../hooks/useProcessWordpressPostData";
import { renderSlide } from "../functions/renderSlide";
import { useProcessWordpressSlides } from "../hooks/useProcessWordpressSlides";
import { FitToScreen } from "../component/slideUtilities/fitToScreen";
import { SlideTypes, WPSlide } from "../types/Slides";
import { NextPrevContext } from "../context/nextContext";

export interface PreviewProps {
}

export enum MessageType {
    NEW_DATA = "new_preview_data",
}

export interface NewData {
    type: MessageType.NEW_DATA,
    data: {
        category: RequiredWordpressCategory,
        post: RequiredWordpressPost 
    }
}

export type MessageData = NewData

export function Preview(props: PreviewProps) {
    const [data, setData] = useState<NewData['data']>()
    const postObject = useMemo(()=> data?.post != null ? [data.post] : [],[data]) 
    const catObject = useMemo(()=> data?.category != null ? [data.category] : [],[data])
    const PrevNextContext = useContext(NextPrevContext)

    const {posts,categories} = useProcessWordpressPostData(postObject,catObject)
    const sideProgram: WPSlide[] = useMemo(() => ([{
        menu_order:1,
        acf: {
            menuOrder: 1,
            hasTimespan: false,
            type: SlideTypes.POSTBLOCK,
            postblock:{
                category: [data?.post.acf.tv_settings.category ?? 0],
                mixSlides: false,
                standardImageLength: 5,
                standardLength: 30
            },
            fromDate: null,
            toDate: null
        }
    }] ),[data])
    const {slides} = useProcessWordpressSlides(posts,categories,sideProgram )

    function procesMessage(e:MessageEvent){
        const message = e.data as MessageData
        if(message.type === MessageType.NEW_DATA){
            setData(message.data)
        }
    }

    useEffect(()=>{
        PrevNextContext.setAutoGoNext(false)
        window.addEventListener("message", procesMessage)
        return () => {
            window.removeEventListener("message", procesMessage)
        }
    },[])

    if(data == null || slides[0] == null){
        return <div style={{color: "white"}}>Geen data</div>
    }


    return (    
        <div>
            <FitToScreen baseHeight={1080} baseWidth={1920} >
                {renderSlide(slides[0])}
            </FitToScreen>
            <div style={{display:"flex", justifyContent: "space-between", alignContent: "center", margin: "2px 10px"}}>
                <button onClick={PrevNextContext.prev}>{"<"}</button>
                <button onClick={PrevNextContext.next}>{">"}</button>
            </div>
            
        </div>
    )
}