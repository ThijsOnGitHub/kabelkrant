import { useEffect, useState } from "react";
import { getImageUrlByBaseUrl } from "../context/imageContext";
import { transFormWordpressCategory, transformWordpressKabelkrantCategory, transformWordpressPostToPostSlidePreprocessed } from "../functions/transformFunctions";
import { KabelkrantCategory, PostCategory, PostSlidePreprocessed, } from "../types/transformedType";
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories";
import { WordpressKabelkrantCategory } from "../types/wordpressTypes/wordpresskabelkrantCategory";
import { RequiredWordpressPost, WordpressPost } from "../types/wordpressTypes/wordpressPost";

export function useProcessWordpressPostData(wordPressPosts: RequiredWordpressPost[], wordPressCategories: RequiredWordpressCategory[], wordpressKabelkrantCategories: WordpressKabelkrantCategory[] ) {
    const [posts, setPosts] = useState<PostSlidePreprocessed[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])
    const [kabelkrantCategories, setKabelkrantCategories] = useState<KabelkrantCategory[]>([])


    async function processPosts(){
        // Format all the categories
        const catergories: [number,PostCategory][] = await Promise.all(wordPressCategories.map((category)=>transFormWordpressCategory(category)))
        const kabelkrantCategories = await Promise.all(wordpressKabelkrantCategories.map(category => transformWordpressKabelkrantCategory(category,getImageUrlByBaseUrl)))

        // Create an object of the categories
        //const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  wordPressPosts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts =  await Promise.all(correctPosts.map((post)=>transformWordpressPostToPostSlidePreprocessed(post,kabelkrantCategories,getImageUrlByBaseUrl)))

        // Update all properties
        setPosts(transformedPosts)
        setCategories(catergories.map(category => category[1]))
        setKabelkrantCategories(kabelkrantCategories)
    }

    useEffect(()=>{
        processPosts()
    },[wordPressPosts,wordPressCategories])

    return { processPosts, posts, categories, kabelkrantCategories}
}
