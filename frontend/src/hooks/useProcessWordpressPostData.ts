import { useEffect, useState } from "react";
import { getImageUrlByBaseUrl } from "../context/imageContext";
import { transformWordpressKabelkrantCategory, transformWordpressPostToPostSlidePreprocessed } from "../functions/transformFunctions";
import { PostSlidePreprocessed } from "../types/transformedType";
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories";
import { WordpressKabelkrantCategory } from "../types/wordpressTypes/wordpresskabelkrantCategory";
import { RequiredWordpressPost, WordpressPost } from "../types/wordpressTypes/wordpressPost";

export function useProcessWordpressPostData(wordPressPosts: RequiredWordpressPost[], wordpressKabelkrantCategories: WordpressKabelkrantCategory[] ) {
    const [posts, setPosts] = useState<PostSlidePreprocessed[]>([])


    async function processPosts(){
        // Format all the categories
        const kabelkrantCategories = await Promise.all(wordpressKabelkrantCategories.map(category => transformWordpressKabelkrantCategory(category,getImageUrlByBaseUrl)))
        // Create an object of the categories
        //const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  wordPressPosts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts =  await Promise.all(correctPosts.map((post)=>transformWordpressPostToPostSlidePreprocessed(post,kabelkrantCategories,getImageUrlByBaseUrl)))
        // Update all properties
        setPosts(transformedPosts)
    }

    useEffect(()=>{
        processPosts()
    },[wordPressPosts])

    return { processPosts, posts}
}
