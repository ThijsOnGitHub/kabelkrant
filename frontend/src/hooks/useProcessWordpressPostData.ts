import { RequiredWordpressPost, WordpressPost} from "../types/wordpressTypes/wordpressPost";
import {KabelkrantCategory, PostCategory,  PostSlideWithoutLength} from "../types/transformedType";
import {useEffect, useState } from "react";
import {getImageUrlByBaseUrl } from "../context/imageContext";
import { transFormWordpressCategory, transformWordpressKabelkrantCategory, transformWordpressPost } from "../functions/transformFunctions";
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories";
import { WordpressKabelkrantCategory } from "../types/wordpressTypes/wordpresskabelkrantCategory";
import { ka } from "date-fns/locale";
import { set } from "lodash";

export function useProcessWordpressPostData(wordPressPosts: RequiredWordpressPost[], wordPressCategories: RequiredWordpressCategory[], wordpressKabelkrantCategories: WordpressKabelkrantCategory[] ) {
    const [posts, setPosts] = useState<PostSlideWithoutLength[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])
    const [kabelkrantCategories, setKabelkrantCategories] = useState<KabelkrantCategory[]>([])


    async function processPosts(){
        // Format all the categories
        const catergories: [number,PostCategory][] = await Promise.all(wordPressCategories.map((category)=>transFormWordpressCategory(category)))
        const kabelkrantCategories = await Promise.all(wordpressKabelkrantCategories.map(category => transformWordpressKabelkrantCategory(category,getImageUrlByBaseUrl)))

        // Create an object of the categories
        const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  wordPressPosts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts =  await Promise.all(correctPosts.map((post)=>transformWordpressPost(post,categoriesObject,kabelkrantCategories,getImageUrlByBaseUrl)))

        // Update all properties
        setPosts(transformedPosts.sort((a,b) => a.categoryId - b.categoryId))
        setCategories(catergories.map(category => category[1]))
        setKabelkrantCategories(kabelkrantCategories)
    }

    useEffect(()=>{
        processPosts()
    },[wordPressPosts,wordPressCategories])

    return { processPosts, posts, categories, kabelkrantCategories}
}
