import {useEffect, useState} from "react";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import {PostCategory, PostSlideWithoutLength} from "../types/transformedType";
import {useTimer} from "./utilities/useTimer";
import {IndexedMedia, Slide, SlideTypes, TextSlide, WPSlide} from "../types/Slides";
import {convert} from "html-to-text";

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
            if(acfSlide.type === SlideTypes.TEXT_SLIDE){
                const textSlide = acfSlide[SlideTypes.TEXT_SLIDE]
                console.log(images[textSlide.backgroundImage]?.source_url ?? "")
                const res: TextSlide = {
                    type: SlideTypes.TEXT_SLIDE,
                        title: textSlide.title,
                    length: textSlide.length,
                    categoryImage: images[textSlide.backgroundImage]?.source_url ?? "" ,
                    category: {
                        id: 0,
                        subject: {
                            subject: textSlide.category.text,
                            icon: textSlide.category.icon
                        },
                        image: []
                    },
                    content: textSlide.text,
                    postImage: "",
                    categoryId: 0,
                }
                return res
            }
            return {
                type: SlideTypes.POSTBLOCK,
                categoryId: acfSlide[SlideTypes.POSTBLOCK].category,
                slides: posts
                    .filter(post => acfSlide[SlideTypes.POSTBLOCK].category.includes(post.categoryId))
                    .map(post => ({
                        ...post,
                        length:typeof post.length === "number" ? post.length :acfSlide[SlideTypes.POSTBLOCK].standardLength,
                        category: categories.find(category => category.id === post.categoryId) as PostCategory
                    })),
            }
        })
        console.log("slides",processedSlides)
        setSlides(processedSlides.filter(slide =>
            (slide.type === SlideTypes.IMAGE && slide.imageUrl.length >0) ||
            (slide.type === SlideTypes.POSTBLOCK && slide.slides.length > 0) || (slide.type === SlideTypes.TEXT_SLIDE) ))
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