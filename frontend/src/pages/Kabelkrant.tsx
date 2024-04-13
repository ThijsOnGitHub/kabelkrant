import {FC, useEffect, useState} from "react";
import {useWordpressPostData} from "../hooks/useWordpressPostData";
import {NewsItem} from "../items/NewsItem";
import {useWordpressSlides} from "../hooks/useWordpressSlides";
import {ImageSlide} from "../component/slides/ImageSlide";
import {PostBlockSlide} from "../component/slides/PostBlockSlide";
import { Slide, SlideTypes} from "../types/Slides";
import { getDate, getDay, getHours } from "date-fns";
import { FitToScreen } from "../component/slideUtilities/fitToScreen";
import { renderSlide } from "../functions/renderSlide";
import { useParams, useSearchParams } from "react-router-dom";

export interface TextBlockSlideProps {

}

export function filterSlides(slides: Slide[], date: Date){
    return slides
    //Filter if slide are in the current hour
    .filter((slide) => {
        if(slide.toDate != null && new Date(slide.toDate).getTime() < date.getTime()) return false;
        if(slide.fromDate != null && new Date(slide.fromDate).getTime() > date.getTime()) return false;
        if(!slide.hasTimespan) return true;
        return slide.timespan.days.includes(getDay(date).toString()) && slide.timespan.hours.includes(getHours(date).toString())
    })
}
export const Kabelkrant: FC<TextBlockSlideProps> = (props) => {
    let [searchParams] = useSearchParams()
    const [index,setIndex] = useState<number>(0)
    const {posts,categories} = useWordpressPostData(searchParams.get("omroep") ?? undefined)
    const {slides} = useWordpressSlides(posts, categories)


    const [currentSlides,setCurrentSlides] = useState(filterSlides(slides,new Date()))
    const [currentSlide,setCurrentSlide] = useState(currentSlides[index])
    const [isPaused,setIsPaused] = useState(false)


    function updateCurrentItem(index:number) {
        if(index == 0){
            const filteredSlides = filterSlides(slides, new Date())
            setCurrentSlides(filteredSlides)
            setCurrentSlide(filteredSlides[index])
            return
        }
        setCurrentSlide(currentSlides[index])
    }

    function nextSlide() {
        if(currentSlides.length < 2){
            setIsPaused(true)
        }
        setIndex((index)=>(index+1)%currentSlides.length)
    }

    useEffect(() => {
        updateCurrentItem(index)
    }, [index])

    useEffect(() => {
        if(currentSlides.length < 2 ){
            setCurrentSlides(filterSlides(slides, new Date()))
            updateCurrentItem(index)
        }
        if(currentSlides.length > 1 && isPaused){
            setIsPaused(false)
            nextSlide()
        }
    }, [slides])



    return<FitToScreen baseWidth={1920} baseHeight={1080}>
        {currentSlide ? renderSlide(currentSlide,nextSlide) : <div style={{color: "white"}}>Loading... </div>}
    </FitToScreen>
    
}