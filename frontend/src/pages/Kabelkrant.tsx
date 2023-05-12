import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";

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


    function updateCurrentItem(index:number) {
        if(index == 0){
            setCurrentSlides(slides)
            setCurrentSlide(slides[index])
            return
        }
        setCurrentSlide(currentSlides[index])
    }

    function nextSlide() {
        setIndex((index)=>(index+1)%currentSlides.length)
    }

    useEffect(() => {
        updateCurrentItem(index)
    }, [index])

    useEffect(() => {
        if(currentSlides.length < 1 ){
            setCurrentSlides(slides)
            updateCurrentItem(index)
        }
    }, [slides])

    function renderCorrectSlide(slide: Slide): JSX.Element {
        switch (slide.type) {
            case SlideTypes.POSTBLOCK:
                return <PostBlockSlide posts={slide.slides} onCompleted={nextSlide}/>
            case SlideTypes.IMAGE:
                return <ImageSlide title={""} showText={false}  backgroundImageURL={slide.imageUrl[0]} length={slide.length} onCompleted={nextSlide}/>
            case SlideTypes.TEXT_SLIDE:
                return <NewsItem post={slide} nextSlide={nextSlide} />
        }
    }

    return currentSlide ? renderCorrectSlide(currentSlide) : <div style={{color: "white"}}>Loading... </div>
}