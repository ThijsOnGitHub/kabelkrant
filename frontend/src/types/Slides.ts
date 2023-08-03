import {WPMedia} from "wordpress-api-client";
import {PostSlide} from "./transformedType";

export type IndexedMedia = { [key: string]: WPMedia }

export enum SlideTypes {
    IMAGE = "image",
    POSTBLOCK = "postblock",
    TEXT_SLIDE = "textSlide",
    VOID = "void"
}

export type  ImageSlide = {
    type: SlideTypes.IMAGE
    imageUrl: string
    text: string
    length: number
} & globalSlideData

export type  PostBlockSlide = {
    type: SlideTypes.POSTBLOCK
    categoryId: number[]
    slides: PostSlide[]
} & globalSlideData

export type TextSlide = PostSlide &  {
    type: SlideTypes.TEXT_SLIDE
} & globalSlideData

export type VoidSlide = {
    type: SlideTypes.VOID
} & globalSlideData


type timespanObject = {
    days: string,
    hours: string
}

export type globalTimespanObject = ( {hasTimespan: true, timespan: timespanObject} | {hasTimespan: false, timespan?: timespanObject})

export type globalSlideData = {
    menuOrder: number
    fromDate: null | string
    toDate: null | string
} & globalTimespanObject


export type Slide = (ImageSlide | PostBlockSlide | TextSlide | VoidSlide)

export type WPPostBlockSlide = {
    type: SlideTypes.POSTBLOCK,
    [SlideTypes.POSTBLOCK]: {
        category: number[],
        standardLength: number
        standardImageLength: number
        mixSlides: boolean
    }
}

export type WPImageSlide = {
    type: SlideTypes.IMAGE,
    [SlideTypes.IMAGE]: {
        images: number[],
        text: string,
        textOnlyFirstImage: boolean,
        length: number
    }
}

export type WPTextSlide = {
    type: SlideTypes.TEXT_SLIDE,
    [SlideTypes.TEXT_SLIDE]: {
        backgroundImage: number,
        showCategory: boolean,
        category: {
            icon: string,
            text: string
        }
        length: number
        imageLength: number
        text: string;
        title: string;
    }  
}

export type WPSlidesTypes = WPPostBlockSlide | WPImageSlide | WPTextSlide

export type WPSlide = {acf:WPSlidesTypes & globalSlideData, menu_order: number}