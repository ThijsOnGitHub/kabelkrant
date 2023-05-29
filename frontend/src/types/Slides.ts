import {WPMedia} from "wordpress-api-client";
import {PostSlide} from "./transformedType";
import {WPPost} from "../wordpress-package";

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

export type globalSlideData = {
    menuOrder: number
    hasTimespan: boolean
    timespan: {
        days: string,
        hours: string
        fromDate: null | string
        toDate: null | string
    }    
}

export type Slide = (ImageSlide | PostBlockSlide | TextSlide | VoidSlide)

export type WPSlide = WPPost<{
    type: SlideTypes,
    [SlideTypes.POSTBLOCK]: {
        category: number[],
        standardLength: number
        standardImageLength: number
        mixSlides: boolean
    }
    [SlideTypes.IMAGE]: {
        images: number[],
        text: string,
        textOnlyFirstImage: boolean,
        length: number
    }
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
} & globalSlideData>