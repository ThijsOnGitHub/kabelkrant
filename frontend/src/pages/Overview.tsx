import { FC, useMemo, useState } from "react"
import { useWordpressPostData } from "../hooks/useWordpressPostData"
import { useWordpressSlides } from "../hooks/useWordpressSlides"
import { Slide, SlideTypes } from "../types/Slides"
import { FitToScreen } from "../component/slideUtilities/fitToScreen"
import { filterSlides } from "./Kabelkrant"
import { format } from "date-fns"
import { SelectedSlide } from "../component/SelectedSlide"
import { renderSlide } from "../functions/renderSlide"
import { NextPrevContext } from "../context/nextContext"
import { NextPrevProvider } from "../component/contextProviders/NextPrevProvider"

export interface OverviewProps {
}



export function translateTypes(type: SlideTypes){
    switch(type){
        case SlideTypes.POSTBLOCK:
            return "Nieuws Items"
        case SlideTypes.IMAGE:
            return "Afbeelding"
        case SlideTypes.TEXT_SLIDE:
            return "Tekst Dia"
        case SlideTypes.VOID:
            return "Void" 
    }
}

export const Overview: FC<OverviewProps> = (props) => {
    const { posts, categories } = useWordpressPostData()
    const { slides } = useWordpressSlides(posts, categories)
    const [date, setDate] = useState(new Date())
    const [selectedSlide, setSelectedSlide] = useState<Slide | null>()


    const filteredSlides = useMemo( ()=> filterSlides(slides, date).map((slide) => {
      if(slide.type === SlideTypes.POSTBLOCK){
        return {
          ...slide,
          slides: slide.slides.filter((slide) => {
            if(!slide?.endDate) return true
            return slide.endDate.getTime() > date.getTime()
          })
        }
      }
      return slide
    }).filter(item => {
        if(!(item.type === SlideTypes.POSTBLOCK)) return true
        return item.slides.length > 0

    }),[slides,date])


    if(selectedSlide != null){
        return <NextPrevProvider autoGoNextDefault={false}>
            <SelectedSlide slide={selectedSlide} onClose={() => setSelectedSlide(null)} />
        </NextPrevProvider>
        
    }

    return (
        <div>
            <div style={{background: "white", padding: 20}}>
                <div>Filters</div>
                <label>Date: <input type="datetime-local" value={format(date,"yyyy-MM-dd")+"T"+format(date,"kk:mm")} onChange={e =>setDate(new Date(e.target.value))}  /></label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 30 }}>
                {filteredSlides.map((slide) => {
                    return <div style={{overflow: "hidden", background: "white", color: "black",borderRadius: 10,width: 340, cursor: "pointer"}} onClick={()=>setSelectedSlide(slide)}> 
                        <div style={{ background: "black",  }} >
                            <FitToScreen rerender={false} element={"container"} baseHeight={1080} baseWidth={1920}  >{
                                renderSlide(slide, () => {})
                            }</FitToScreen>
                        </div>
                        <div style={{padding: 10}}>
                            Type: {translateTypes(slide.type)}
                            {
                                slide.type === SlideTypes.POSTBLOCK ?
                                <ul>{slide.slides.map(item => <li><strong>{item.category.subject?.subject}</strong>: {item.title} </li>)}</ul>: ""
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}