import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";

import {useWordpressData} from "../hooks/useWordpressData";
import {NewsItem} from "../items/NewsItem";

export interface KabelkrantProps {

}

export const Kabelkrant: FC<KabelkrantProps> = (props) => {
    const [index,setIndex] = useState<number>(0)
    const {posts,categories} = useWordpressData()
    const [currentPosts,setCurrentPosts] = useState(posts)
    const [currentCategories,setCurrentCategories] = useState(categories)
    const [currentPost,setCurrentPost] = useState(currentPosts[index])
    const [currentCategory,setCurrentCategory] = useState(categories.find(category => category.id === currentPost?.catergoryId[0]))

    const [isFirstUpdate,setIsFirstUpdate] = useState(true)

    function updateCurrentItem(index:number) {
        if(index == 0){
            setCurrentPosts(posts)
            setCurrentCategories(categories)

            setCurrentPost(posts[index])
            setCurrentCategory(categories.find(category => category.id === posts[index].catergoryId[0]))
            return
        }
        setCurrentPost(currentPosts[index])
        setCurrentCategory(currentCategories.find(category =>  category.id === currentPosts[index].catergoryId[0]))
    }

    function nextSlide() {
        setIndex((index)=>(index+1)%currentPosts.length)
    }

    useEffect(() => {
        updateCurrentItem(index)
    }, [index,currentPosts,currentCategories])

    useEffect(() => {
        if(categories.length > 0 && posts.length > 0  && isFirstUpdate){
            setCurrentPosts(posts)
            setCurrentCategories(categories)
            setIsFirstUpdate(false)
        }
    }, [posts,categories])

    return (currentPost && currentCategory) ? <NewsItem item={{post:currentPost,category:currentCategory}} nextSlide={nextSlide} />:<div style={{color:"white"}}>Loading... {JSON.stringify(currentPost)} {!!currentPost} {JSON.stringify(currentCategory)} {!!currentCategory}</div>
}