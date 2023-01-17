import {TextSlideProps} from "../component/slides/TextSlide";

export enum SlideType {
    TEXTSLIDE = 'textSlide',
}

export type TextSlideType = TextSlideProps & {type: SlideType.TEXTSLIDE}

export type Slides = TextSlideType