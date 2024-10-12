import { getDay, getHours } from "date-fns";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlideTransition } from "../component/animations/SlideTransition";
import { FitToScreen } from "../component/slideUtilities/fitToScreen";
import { renderSlide } from "../functions/renderSlide";
import { useWordpressPostData } from "../hooks/useWordpressPostData";
import { useWordpressSlides } from "../hooks/useWordpressSlides";
import { Slide } from "../types/Slides";

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
    let {omroep} = useParams<{omroep:string}>()
    const [index,setIndex] = useState<number>(0)
    const {posts} = useWordpressPostData(omroep)
    const {slides} = useWordpressSlides(omroep, posts)


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


    return <FitToScreen baseWidth={1920} baseHeight={1080}>
        <SlideTransition type="fade" divKey={JSON.stringify(currentSlide)}>
            {currentSlide ? renderSlide(currentSlide,nextSlide) : <div style={{color: "white"}}>Loading... </div>}
        </SlideTransition>
    </FitToScreen>
    
}