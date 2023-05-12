import {ACFPost, WordpressPost} from "../types/wordpressTypes/wordpressPost";
import {PostCategory, PostSlide, PostSlideWithoutLength} from "../types/transformedType";
import {convert} from "html-to-text";
import {useEffect, useState} from "react";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import {random} from "lodash";
import {useTimer} from "./utilities/useTimer";
import {ACFCategory} from "../types/wordpressTypes/wordPressCategories";
import {WPCategory, WPPost} from "../wordpress-package";
import {IndexedMedia} from "../types/Slides";

function transFormWordpressCategory(category:WPCategory<ACFCategory>, imagesIndexed: IndexedMedia){
        // Check if the category has an image
        const imageIds = (category.acf?.tv_background ?? [])
        const images = imageIds.map(id => imagesIndexed[id])
        const imageUrls = images.map(image => image?.source_url).filter(image => image != undefined) as string[]
        return [category.id,{
            id: category.id,
            subject:{
                subject: category.name,
                icon: category.acf?.icon
            },
            image: imageUrls
        }] as [number,PostCategory]
}

function transformWordpressPost(post:  WPPost<ACFPost>,categoriesObject: {[p: string]: PostCategory}, imagesIndexed: IndexedMedia): PostSlideWithoutLength{
        const category = categoriesObject[post.acf.tv_settings.category]
        let imageUrl = ""
        if(category.image != undefined && category.image.length > 0){
            imageUrl = category.image[random(0,category.image.length-1)]
        }
        var postImageUrl = ""
        if(imagesIndexed.hasOwnProperty(post.acf.tv_settings.images)){
            postImageUrl = (imagesIndexed[post.acf.tv_settings.images]?.media_details as any).sizes.full.source_url as string ?? ""
        }

        return {
            categoryId: post.acf.tv_settings.category ?? -1,
            content: post.acf.tv_settings.text,
            title: convert(post.title.rendered),
            postImage: postImageUrl,
            length: post.acf.tv_settings.length,
            categoryImage: imageUrl,
        }
}

export function useWordpressPostData() {
    const [posts, setPosts] = useState<PostSlideWithoutLength[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])
    const [indexedMedia, setIndexedMedia] = useState<IndexedMedia>({})
    //Update the posts every 10 seconds
    const { resetAndStartTimer:resetTimer, stopTimer }= useTimer(10, ()=>{
        loadPosts()
        resetTimer()
    },1000,"postdata")
    const wordpressClient = new WordpressClient();

    async function loadPosts(){
        // Create all the promises
        const postsPromise = wordpressClient.post().find(new URLSearchParams({"tv-filter": "true"}));
        const categoriesPromise = wordpressClient.postCategory().dangerouslyFindAll();
        const imagesPromise = wordpressClient.media().find()

        // Wait for all the promises to resolve
        const [posts,categories,images]  = await Promise.all([postsPromise,categoriesPromise,imagesPromise])

        // Create an index of the images
        const imagesIndexed: IndexedMedia = Object.fromEntries(images.map(image => [image?.id,image]))|| {}

        // Format all the categories
        const catergories: [number,PostCategory][] = categories.map((category)=>transFormWordpressCategory(category,imagesIndexed))

        // Create an object of the categories
        const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  posts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts = correctPosts.map((post)=>transformWordpressPost(post,categoriesObject,imagesIndexed))

        // Update all properties
        setIndexedMedia(imagesIndexed)
        setPosts(transformedPosts.sort((a,b) => a.categoryId - b.categoryId))
        setCategories(catergories.map(category => category[1]))
    }

    useEffect(() => {
        resetTimer()
        loadPosts()
        return () => {
            stopTimer()
        }
    },[])

    return {posts, categories, indexedMedia}
}