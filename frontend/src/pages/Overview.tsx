import { FC, useMemo, useState } from "react"
import { useWordpressPostData } from "../hooks/useWordpressPostData"
import { useWordpressSlides } from "../hooks/useWordpressSlides"
import { SlideTypes } from "../types/Slides"
import { PostBlockSlide } from "../component/slides/PostBlockSlide"
import { ImageSlide } from "../component/slides/ImageSlide"
import { NewsItem } from "../items/NewsItem"
import { FitToScreen } from "../component/slideUtilities/fitToScreen"
import { filterSlides } from "./Kabelkrant"
import { format } from "date-fns"

export interface OverviewProps {
}

export const Overview: FC<OverviewProps> = (props) => {
    const { posts, categories } = useWordpressPostData()
    const { slides } = useWordpressSlides(posts, categories)
    const [date, setDate] = useState(new Date())

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


    function translateTypes(type: SlideTypes){
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

    return (
        <div>
            <div style={{background: "white", padding: 20}}>
                <div>Filters</div>
                <label>Date: <input type="datetime-local" value={format(date,"yyyy-MM-dd")+"T"+format(date,"kk:mm")} onChange={e =>setDate(new Date(e.target.value))}  /></label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 30 }}>
                {filteredSlides.map((slide) => {
                    console.log("Rendering slide", slide)
                    let element = <div></div>
                    switch (slide.type) {
                        case SlideTypes.POSTBLOCK:
                            element = <PostBlockSlide posts={slide.slides} onCompleted={() => { }} />
                            break;
                        case SlideTypes.IMAGE:
                            element = <ImageSlide title={""} showText={false} backgroundImageURL={slide.imageUrl} length={slide.length} onCompleted={() => { }} />
                            break;
                        case SlideTypes.TEXT_SLIDE:
                            element = <NewsItem post={slide} nextSlide={() => { }} />
                            break;
                        case SlideTypes.VOID:
                            element = <div style={{ color: "black" }}> </div>
                            break;
                    }
                    return <div style={{overflow: "hidden", background: "white", color: "black",borderRadius: 10,width: 340}}> 
                        <div style={{ background: "black"  }}>
                            <FitToScreen rerender={false} element={"container"} baseHeight={1080} baseWidth={1920}  >{
                                element
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