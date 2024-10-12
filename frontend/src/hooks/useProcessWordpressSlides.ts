import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../context/imageContext";
import { transformPostSlidePreproccedSlideToPostSlide } from "../functions/transformFunctions";
import { ImageSlide, Slide, SlideTypes, TextSlide, WPSlide, globalSlideData, globalTimespanObject } from "../types/Slides";
import { PostSlidePreprocessed } from "../types/transformedType";

export function getGlobalSlideData(slide: WPSlide): globalSlideData{
    let timespanObject: globalTimespanObject = {
        hasTimespan: false
    }
    if(slide.acf.hasTimespan){
        timespanObject = {
            hasTimespan: true,
            timespan: slide.acf.timespan
        }
    }
    return {
        menuOrder: slide.menu_order as number,
        fromDate: slide.acf.fromDate,
        toDate: slide.acf.toDate,
        ...timespanObject
    }
}

export function useProcessWordpressSlides(posts: PostSlidePreprocessed[], wpSlides: WPSlide[]){
    const [slides, setSlides] = useState<Slide[]>([])

    const {getImageUrl:getImages} = useContext(ImageContext)

    async function updateSlides(){
        const processedSlides =await Promise.all(wpSlides.map<Promise<Slide[]> >( async slide => {
            const acfSlide = slide.acf
            if(acfSlide.type === SlideTypes.IMAGE){
                const text =  acfSlide[SlideTypes.IMAGE].text
                return (await Promise.all(acfSlide[SlideTypes.IMAGE].images.map<Promise<ImageSlide>>( async (image,index) => ({
                    type: SlideTypes.IMAGE,
                    imageUrl: await getImages(image) ?? "",
                    text: acfSlide[SlideTypes.IMAGE].textOnlyFirstImage ? index === 0 ? text : "" : text,
                    length:  acfSlide[SlideTypes.IMAGE].length,
                    ...getGlobalSlideData(slide)
                }))))
                .filter(slide => slide.imageUrl !== "")
            }
            if(acfSlide.type === SlideTypes.TEXT_SLIDE){
                const textSlide = acfSlide[SlideTypes.TEXT_SLIDE]
                const res: TextSlide = {
                    type: SlideTypes.TEXT_SLIDE,
                    title: textSlide.title,
                    length: textSlide.length,
                    imageLength: 0,
                    categoryImage:  await getImages(textSlide.backgroundImage) ?? "" ,
                    category: {
                        id: 0,
                        subject: textSlide.showCategory ? {
                            subject: textSlide.category.text,
                            icon: textSlide.category.icon
                        } : undefined,
                        images: []
                    },
                    content: textSlide.text,
                    postImage: [],
                    titleOnlyFirstImage: false,
                    categoryId: 0,
                    ...getGlobalSlideData(slide)
                }
                return [res]
            }
            const resPosts = posts
            .filter(post => acfSlide[SlideTypes.POSTBLOCK].category.some(blockCategory => post.cateogries.map(i => i.categoryId).includes(blockCategory)))
            .map(post => {
                return transformPostSlidePreproccedSlideToPostSlide(post,acfSlide[SlideTypes.POSTBLOCK].category,acfSlide[SlideTypes.POSTBLOCK].standardImageLength,acfSlide[SlideTypes.POSTBLOCK].standardLength)})
            
            return [{
                type: SlideTypes.POSTBLOCK,
                categoryId: acfSlide[SlideTypes.POSTBLOCK].category,
                slides: _.shuffle(resPosts),
                ...getGlobalSlideData(slide)
            }]
        }))
        setSlides(processedSlides.flat().filter(slide =>
            (slide.type === SlideTypes.IMAGE && slide.imageUrl.length >0) ||
            (slide.type === SlideTypes.POSTBLOCK && slide.slides.length > 0) || (slide.type === SlideTypes.TEXT_SLIDE) ).sort((a,b) => a.menuOrder - b.menuOrder))
    }

    useEffect(()=>{
        updateSlides()
    },[wpSlides,posts])

    return {slides}
}
