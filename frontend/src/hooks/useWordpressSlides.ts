import {useEffect, useState} from "react";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import {PostCategory, PostSlideWithoutLength} from "../types/transformedType";
import {useTimer} from "./utilities/useTimer";
import {ImageSlide, IndexedMedia, Slide, SlideTypes, TextSlide, WPSlide} from "../types/Slides";

export function useWordpressSlides(images: IndexedMedia,posts: PostSlideWithoutLength[],categories: PostCategory[]){
    const [slides, setSlides] = useState<Slide[]>([])
    const [wpSlides, setWpSlides] = useState<WPSlide[]>([])
    const {resetAndStartTimer,stopTimer} =  useTimer(10, ()=> {
        loadSlides()
        resetAndStartTimer()
    }, 10000,"slides")

    async function loadSlides(){
        const wordpressClient = new WordpressClient();
        const slides = await wordpressClient.slide().dangerouslyFindAll(new URLSearchParams({"order":"asc", "orderby": "menu_order"}))
        setWpSlides(slides)
    }

    function updateSlides(){
        const processedSlides =wpSlides.map<Slide[]>(slide => {
            const acfSlide = slide.acf
            if(acfSlide.type === SlideTypes.IMAGE){
                return acfSlide[SlideTypes.IMAGE].images.map<ImageSlide>(image => ({
                    type: SlideTypes.IMAGE,
                    imageUrl: images[image]?.source_url ?? "",
                    length: acfSlide[SlideTypes.IMAGE].length
                }))
                .filter(slide => slide.imageUrl !== "")
            }
            if(acfSlide.type === SlideTypes.TEXT_SLIDE){
                const textSlide = acfSlide[SlideTypes.TEXT_SLIDE]
                const res: TextSlide = {
                    type: SlideTypes.TEXT_SLIDE,
                    title: textSlide.title,
                    length: textSlide.length,
                    categoryImage: images[textSlide.backgroundImage]?.source_url ?? "" ,
                    category: {
                        id: 0,
                        subject: textSlide.showCategory ? {
                            subject: textSlide.category.text,
                            icon: textSlide.category.icon
                        } : undefined,
                        image: []
                    },
                    content: textSlide.text,
                    postImage: "",
                    categoryId: 0,
                }
                return [res]
            }
            return [{
                type: SlideTypes.POSTBLOCK,
                categoryId: acfSlide[SlideTypes.POSTBLOCK].category,
                slides: posts
                    .filter(post => acfSlide[SlideTypes.POSTBLOCK].category.includes(post.categoryId))
                    .map(post => ({
                        ...post,
                        length:typeof post.length === "number" ? post.length :acfSlide[SlideTypes.POSTBLOCK].standardLength,
                        category: categories.find(category => category.id === post.categoryId) as PostCategory
                    })),
            }]
        })
        console.log("slides",processedSlides)
        setSlides(processedSlides.flat().filter(slide =>
            (slide.type === SlideTypes.IMAGE && slide.imageUrl.length >0) ||
            (slide.type === SlideTypes.POSTBLOCK && slide.slides.length > 0) || (slide.type === SlideTypes.TEXT_SLIDE) ))
    }

    useEffect(()=>{
        loadSlides()
        resetAndStartTimer()
        return () => {
            stopTimer()
        }
    },[])

    useEffect(()=>{
        updateSlides()
    },[wpSlides,images,posts,categories])

    return {slides}
}