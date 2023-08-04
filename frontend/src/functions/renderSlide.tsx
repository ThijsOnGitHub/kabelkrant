import { ImageSlide } from "../component/slides/ImageSlide"
import { PostBlockSlide } from "../component/slides/PostBlockSlide"
import { NewsItem } from "../items/NewsItem"
import { Slide, SlideTypes } from "../types/Slides"

export const renderSlide = (slide: Slide, onComplete: ()=> void = ()=>{}, onPrevSlide: ()=>void = ()=>{}) => {
    switch (slide.type) {
        case SlideTypes.POSTBLOCK:
            return <PostBlockSlide posts={slide.slides} onCompleted={onComplete} />
        case SlideTypes.IMAGE:
            return <ImageSlide title={slide.text} backgroundImageURL={slide.imageUrl} length={slide.length} onNext={onComplete} />
        case SlideTypes.TEXT_SLIDE:
            return <NewsItem post={slide} nextSlide={onComplete} prevSlide={onPrevSlide} />
        case SlideTypes.VOID:
            return  <div style={{ color: "black" }}> </div>
    }
}
