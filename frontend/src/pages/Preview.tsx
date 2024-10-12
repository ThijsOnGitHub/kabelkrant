import { useContext, useEffect, useMemo, useState } from "react";
import { FitToScreen } from "../component/slideUtilities/fitToScreen";
import { NextPrevButtonsBar } from "../component/utilities/NextPrevButtonsBar";
import { NextPrevContext } from "../context/nextContext";
import { renderSlide } from "../functions/renderSlide";
import { useProcessWordpressPostData } from "../hooks/useProcessWordpressPostData";
import { useProcessWordpressSlides } from "../hooks/useProcessWordpressSlides";
import { useWordpressPostData } from "../hooks/useWordpressPostData";
import { SlideTypes, WPSlide } from "../types/Slides";
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories";
import { RequiredWordpressPost } from "../types/wordpressTypes/wordpressPost";

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
    const PrevNextContext = useContext(NextPrevContext)

    const {wordpressKabelkrantCategories} = useWordpressPostData('')
    const {posts} = useProcessWordpressPostData(postObject, wordpressKabelkrantCategories)
    const sideProgram: WPSlide[] = useMemo(() => ([{
        menu_order:1,
        acf: {
            menuOrder: 1,
            hasTimespan: false,
            type: SlideTypes.POSTBLOCK,
            postblock:{
                category: [data?.post.acf.tv_settings.category[0] ?? 0],
                mixSlides: false,
                standardImageLength: 5,
                standardLength: 30
            },
            fromDate: null,
            toDate: null
        }
    }] ),[data])
    const {slides} = useProcessWordpressSlides(posts,sideProgram) 

    function procesMessage(e:MessageEvent){
        const message = e.data as MessageData
        console.log("incomming data iframe", message)
        if(message.type === MessageType.NEW_DATA){
            setData(message.data)
        }
    }

    function readyForMessage(){
        console.log("ready for message")
        window.parent.postMessage({type: "send_message"}, "*")
    }

    useEffect(()=>{
        PrevNextContext.setAutoGoNext(false)
        readyForMessage()
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
            <NextPrevButtonsBar/>
            
        </div>
    )
}