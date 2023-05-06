import {TextSlideProps} from "../component/slides/TextSlide";

export enum SlideType {
    TEXTSLIDE = 'default',
    IMAGE = 'image',
}

export type TextSlideType = TextSlideProps & {type: SlideType.TEXTSLIDE}

export type Slides = TextSlideType