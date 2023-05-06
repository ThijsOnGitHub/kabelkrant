import axios from "axios";
import {WordpressPost} from "../types/wordpressTypes/wordpressPost";
import {PostCategory, PostSlide} from "../types/transformedType";
import {convert} from "html-to-text";
import {useEffect, useState} from "react";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import {random} from "lodash";
import {WPMedia} from "wordpress-api-client";
import {useTimer} from "./utilities/useTimer";

export function useWordpressData() : {posts: PostSlide[], categories: PostCategory[]} {
    const [posts, setPosts] = useState<PostSlide[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])
    //Update the posts every 10 seconds
    const [seconds, resetTimer ]= useTimer(10, ()=>{
        loadPosts()
        resetTimer()
    },1000)
    const wordpressClient = new WordpressClient();


    async function loadPosts(){
        const postsPromise = wordpressClient.post().find(new URLSearchParams({"tv-filter": "true"}));
        const categoriesPromise = wordpressClient.postCategory().dangerouslyFindAll();
        const imagesPromise = wordpressClient.media().find()
        const [posts,categories,images]  = await Promise.all([postsPromise,categoriesPromise,imagesPromise])

        const imagesIndexed: {[key:string]:WPMedia} = Object.fromEntries(images.map(image => [image?.id,image]))|| {}

        const catergories: [number,PostCategory][] = await Promise.all(categories.map<Promise<[number,PostCategory]>>(async category => {
            // Check if the category has an image
            const imageIds = (category.acf?.tv_background ?? [])
            const images = await wordpressClient.media().find(undefined,...imageIds)
            const imageUrls = images.map(image => image?.source_url).filter(image => image != undefined) as string[]
            return [category.id,{
                id: category.id,
                subject:{
                    subject: category.name,
                    icon: "tv"
                },
                image: imageUrls
            }]
        }))

        const categoriesObject = Object.fromEntries(catergories);
        const correctPosts=  posts.filter(post => post!= null) as unknown as WordpressPost[]
        const transformedPosts = await Promise.all(correctPosts.map<Promise<PostSlide>>(async (post) => {

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
                catergoryId: post.categories ?? [],
                content: post.acf.tv_settings.text,
                title: convert(post.title.rendered),
                postImage: postImageUrl,
                length: typeof post.acf.tv_settings.length === "number" ? post.acf.tv_settings.length : 5 ,
                catergoryImage: imageUrl,
            }
        }))
        setPosts(transformedPosts.sort((a,b) => a.catergoryId[0] - b.catergoryId[0]))
        setCategories(catergories.map(category => category[1]))
    }

    useEffect(() => {
        resetTimer()
        loadPosts()
    },[])

    return {posts, categories}
}