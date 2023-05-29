import {ACFPost, WordpressPost} from "../types/wordpressTypes/wordpressPost";
import {PostCategory, PostSlide, PostSlideWithoutLength} from "../types/transformedType";
import {convert} from "html-to-text";
import {useContext, useEffect, useState} from "react";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import {random} from "lodash";
import {useTimer} from "./utilities/useTimer";
import {ACFCategory} from "../types/wordpressTypes/wordPressCategories";
import {WPCategory, WPMedia, WPPost} from "../wordpress-package";
import {IndexedMedia} from "../types/Slides";
import {getImageUrlByBaseUrl, ImageContext} from "../context/imageContext";

async function transFormWordpressCategory(category:WPCategory<ACFCategory>, getImages: (ids: number) => Promise<string>): Promise<[number, PostCategory]>{
        // Check if the category has an image
        const imageIds = (category.acf?.tv_background ?? [])
        const images = await Promise.all(imageIds.map(async (id) => getImages(id)))
        const imageUrls = images.map(image => image).filter(image => image != undefined) as string[]
        return [category.id,{
            id: category.id,
            subject:{
                subject: category.name,
                icon: category.acf?.icon
            },
            image: imageUrls
        }] as [number,PostCategory]
}

async function transformWordpressPost(post:  WPPost<ACFPost>,categoriesObject: {[p: string]: PostCategory}, getImages:(ids: number) => Promise<string> ): Promise<PostSlideWithoutLength>{
        const category = categoriesObject[post.acf.tv_settings.category]
        let imageUrl = ""
        if(category.image != undefined && category.image.length > 0){
            imageUrl = category.image[random(0,category.image.length-1)]
        }

        var postImageUrl =typeof post.acf.tv_settings.images == "number" ?  await getImages(post.acf.tv_settings.images) ?? "" : ""

        return {
            categoryId: post.acf.tv_settings.category ?? -1,
            content: post.acf.tv_settings.text,
            title: post.acf.tv_settings.title != "" ? post.acf.tv_settings.title : convert(post.title.rendered),
            postImage: postImageUrl,
            length: post.acf.tv_settings.length,
            categoryImage: imageUrl,
            imageLength: post.acf.tv_settings.imageLength,
            endDate: post.acf.tv_settings.end_date ? new Date(post.acf.tv_settings.end_date) : undefined
        }
}

export function useWordpressPostData() {
    const [posts, setPosts] = useState<PostSlideWithoutLength[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])
    //Update the posts every 10 seconds
    const { resetAndStartTimer:resetTimer, stopTimer }= useTimer(120, ()=>{
        loadPosts()
        resetTimer()
    },120000,"postdata")
    const wordpressClient = new WordpressClient();
    const getImages = useContext(ImageContext)

    async function loadPosts(){
        // Create all the promises
        const postsPromise = wordpressClient.post().find(new URLSearchParams({"tv-filter": "true"}));
        const categoriesPromise = wordpressClient.postCategory().dangerouslyFindAll();

        // Wait for all the promises to resolve
        const [posts,categories]  = await Promise.all([postsPromise,categoriesPromise])


        // Format all the categories
        const catergories: [number,PostCategory][] = await Promise.all(categories.map((category)=>transFormWordpressCategory(category,getImageUrlByBaseUrl)))

        // Create an object of the categories
        const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  posts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts =  await Promise.all(correctPosts.map((post)=>transformWordpressPost(post,categoriesObject,getImageUrlByBaseUrl)))

        // Update all properties
        setPosts(transformedPosts.sort((a,b) => a.categoryId - b.categoryId))
        setCategories(catergories.map(category => category[1]))
    }

    useEffect(() => {
        loadPosts()
        resetTimer()
        return () => {
            stopTimer()
        }
    },[])

    return {posts, categories}
}