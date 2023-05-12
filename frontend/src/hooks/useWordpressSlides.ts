import {useEffect, useState} from "react";
import {WordpressClient, WPSlide} from "../types/wordpressTypes/WorpressClient";
import {PostCategory, PostSlide, PostSlideWithoutLength} from "../types/transformedType";
import {WPMedia} from "wordpress-api-client";
import {useTimer} from "./utilities/useTimer";

export type IndexedMedia = {[key:string]:WPMedia}

export enum SlideTypes{
    IMAGE="image",
    POSTBLOCK = "postblock"
}
export interface ImageSlide{
    type: SlideTypes.IMAGE
    imageUrl: string[]
    length: number
}

export interface PostBlockSlide{
    type: SlideTypes.POSTBLOCK
    categoryId: number[]
    slides: PostSlide[]
}
export type Slide = ImageSlide | PostBlockSlide

export function useWordpressSlides(images: IndexedMedia,posts: PostSlideWithoutLength[],categories: PostCategory[]){
    const [slides, setSlides] = useState<Slide[]>([])
    const [wpSlides, setWpSlides] = useState<WPSlide[]>([])
    const {resetAndStartTimer} =  useTimer(10, loadSlides, 10000)

    async function loadSlides(){
        const wordpressClient = new WordpressClient();
        const slides = await wordpressClient.slide().dangerouslyFindAll(new URLSearchParams({"order":"asc", "orderby": "menu_order"}))
        console.log("Loading slides", slides )
        setWpSlides(slides)
        resetAndStartTimer()
    }

    function updateSlides(){
        const processedSlides =wpSlides.map<Slide>(slide => {
            const acfSlide = slide.acf
            if(acfSlide.type === SlideTypes.IMAGE){
                return {
                    type: SlideTypes.IMAGE,
                    imageUrl: acfSlide[SlideTypes.IMAGE].images.map(id => images[id]?.source_url).filter(url => url != undefined) as string[],
                    length: acfSlide[SlideTypes.IMAGE].length
                }
            }
            return {
                type: SlideTypes.POSTBLOCK,
                categoryId: acfSlide[SlideTypes.POSTBLOCK].category,
                slides: posts
                    .filter(post => acfSlide[SlideTypes.POSTBLOCK].category.includes(post.catergoryId))
                    .map(post => ({
                        ...post,
                        length:typeof post.length === "number" ? post.length :acfSlide[SlideTypes.POSTBLOCK].standardLength,
                        category: categories.find(category => category.id === post.catergoryId) as PostCategory
                    })),
            }
        })
        console.log("slides",processedSlides)
        setSlides(processedSlides.filter(slide => (slide.type === SlideTypes.IMAGE && slide.imageUrl.length >0) || (slide.type === SlideTypes.POSTBLOCK && slide.slides.length > 0)))
    }

    useEffect(()=>{
        loadSlides()
        resetAndStartTimer()
    },[])

    useEffect(()=>{
        updateSlides()
    },[wpSlides,images,posts,categories])

    return {slides}
}