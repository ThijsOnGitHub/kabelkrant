import {WPMedia} from "wordpress-api-client";
import {PostSlide} from "./transformedType";
import {WPPost} from "../wordpress-package";
import {WordpressPost} from "./wordpressTypes/wordpressPost";

export type IndexedMedia = { [key: string]: WPMedia }

export enum SlideTypes {
    IMAGE = "image",
    POSTBLOCK = "postblock",
    TEXT_SLIDE = "textSlide"
}

export interface ImageSlide {
    type: SlideTypes.IMAGE
    imageUrl: string[]
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

export type Slide = ImageSlide | PostBlockSlide | TextSlide

export type WPSlide = WPPost<{
    type: SlideTypes,
    [SlideTypes.POSTBLOCK]: {
        category: number[],
        standardLength: number
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
        text: string;
        title: string;
    }
}>