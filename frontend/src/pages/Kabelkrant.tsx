import {FC, useEffect, useState} from "react";
import {useWordpressPostData} from "../hooks/useWordpressPostData";
import {NewsItem} from "../items/NewsItem";
import {useWordpressSlides} from "../hooks/useWordpressSlides";
import {ImageSlide} from "../component/slides/ImageSlide";
import {PostBlockSlide} from "../component/slides/PostBlockSlide";
import {Slide, SlideTypes} from "../types/Slides";

export interface TextBlockSlideProps {

}

export const Kabelkrant: FC<TextBlockSlideProps> = (props) => {
    const [index,setIndex] = useState<number>(0)
    const {posts,categories,indexedMedia} = useWordpressPostData()
    const {slides} = useWordpressSlides(indexedMedia,posts,categories)

    const [currentSlides,setCurrentSlides] = useState(slides)
    const [currentSlide,setCurrentSlide] = useState(currentSlides[index])
    const [isPaused,setIsPaused] = useState(false)


    function updateCurrentItem(index:number) {
        if(index == 0){
            setCurrentSlides(slides)
            setCurrentSlide(slides[index])
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
            setCurrentSlides(slides)
            updateCurrentItem(index)
        }
        if(currentSlides.length > 1 && isPaused){
            setIsPaused(false)
            nextSlide()
        }
    }, [slides])

    function renderCorrectSlide(slide: Slide): JSX.Element {
        switch (slide.type) {
            case SlideTypes.POSTBLOCK:
                return <PostBlockSlide posts={slide.slides} onCompleted={nextSlide}/>
            case SlideTypes.IMAGE:
                return <ImageSlide title={""} showText={false}  backgroundImageURL={slide.imageUrl} length={slide.length} onCompleted={nextSlide}/>
            case SlideTypes.TEXT_SLIDE:
                return <NewsItem post={slide} nextSlide={nextSlide} />
            case SlideTypes.VOID:
                return <div style={{color: "black"}}> </div>
        }
    }

    return currentSlide ? renderCorrectSlide(currentSlide) : <div style={{color: "white"}}>Loading... </div>
}