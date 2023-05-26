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

export interface ImageSlide {
    type: SlideTypes.IMAGE
    imageUrl: string
    length: number
}

export interface PostBlockSlide {
    type: SlideTypes.POSTBLOCK
    categoryId: number[]
    slides: PostSlide[]
}
export type TextSlide = PostSlide &  {
    type: SlideTypes.TEXT_SLIDE
}

export type VoidSlide = {
    type: SlideTypes.VOID
}

export type Slide = ImageSlide | PostBlockSlide | TextSlide | VoidSlide

export type WPSlide = WPPost<{
    type: SlideTypes,
    [SlideTypes.POSTBLOCK]: {
        category: number[],
        standardLength: number
        standardImageLength: number
    }
    [SlideTypes.IMAGE]: {
        images: number[],
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
    hasTimespan: boolean
    timespan: {
        startTime: string,
        endTime: string,
        days: string[]
    }
        
}>