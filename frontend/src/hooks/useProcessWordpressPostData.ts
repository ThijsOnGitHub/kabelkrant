import { RequiredWordpressPost, WordpressPost} from "../types/wordpressTypes/wordpressPost";
import {PostCategory,  PostSlideWithoutLength} from "../types/transformedType";
import {useEffect, useState } from "react";
import {getImageUrlByBaseUrl } from "../context/imageContext";
import { transFormWordpressCategory, transformWordpressPost } from "../functions/transformFunctions";
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories";

export function useProcessWordpressPostData(wordPressPosts: RequiredWordpressPost[], wordPressCategories: RequiredWordpressCategory[] ) {
    const [posts, setPosts] = useState<PostSlideWithoutLength[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])


    async function processPosts(){
        // Format all the categories
        const catergories: [number,PostCategory][] = await Promise.all(wordPressCategories.map((category)=>transFormWordpressCategory(category,getImageUrlByBaseUrl)))

        // Create an object of the categories
        const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  wordPressPosts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts =  await Promise.all(correctPosts.map((post)=>transformWordpressPost(post,categoriesObject,getImageUrlByBaseUrl)))

        // Update all properties
        setPosts(transformedPosts.sort((a,b) => a.categoryId - b.categoryId))
        setCategories(catergories.map(category => category[1]))
    }

    useEffect(()=>{
        processPosts()
    },[wordPressPosts,wordPressCategories])

    return { processPosts, posts, categories}
}
