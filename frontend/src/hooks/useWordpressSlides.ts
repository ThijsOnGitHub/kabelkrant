import {useContext, useEffect, useState} from "react";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import {PostCategory, PostSlideWithoutLength} from "../types/transformedType";
import {useTimer} from "./utilities/useTimer";
import {ImageSlide, Slide, SlideTypes, TextSlide, WPSlide, globalSlideData} from "../types/Slides";
import {ImageContext} from "../context/imageContext";
import _ from "lodash";
import { useProcessWordpressPostData } from "./useProcessWordpressPostData";
import { useProcessWordpressSlides } from "./useProcessWordpressSlides";



export function useWordpressSlides(posts: PostSlideWithoutLength[], categories: PostCategory[]){
    const [wpSlides, setWpSlides] = useState<WPSlide[]>([])

    const {resetAndStartTimer,stopTimer} =  useTimer(120, ()=> {
        loadSlides()
        resetAndStartTimer()
    }, 900000,"slides")

    const {slides} = useProcessWordpressSlides(posts,categories,wpSlides)

    const {getImageMediaObject,getImageUrl:getImages} = useContext(ImageContext)

    async function loadSlides(){
        const wordpressClient = new WordpressClient();
        const slides = await wordpressClient.slide().dangerouslyFindAll(new URLSearchParams({"order":"asc", "orderby": "menu_order"}))
        setWpSlides(slides)
    }

    

    useEffect(()=>{
        loadSlides()
        resetAndStartTimer()
        return () => {
            stopTimer()
        }
    },[])

    return {slides}
}
