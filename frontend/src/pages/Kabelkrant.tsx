import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";

import {useWordpressData} from "../hooks/useWordpressData";
import {NewsItem} from "../items/NewsItem";

export interface KabelkrantProps {

}

export const Kabelkrant: FC<KabelkrantProps> = (props) => {
    const [index,setIndex] = useState<number>(0)
    const {posts,categories} = useWordpressData()
    const [firstUpdate,setFirstUpdate] = useState<boolean>(true)
    const [currentPost,setCurrentPost] = useState(posts[index])
    const [currentCategory,setCurrentCategory] = useState(categories.find(category => category.id === currentPost?.catergoryId[0]))

    function updateCurrentItem(index:number) {
        setCurrentPost(posts[index])
        setCurrentCategory(categories.find(category => category.id === posts[index].catergoryId[0]))
    }

    function nextSlide() {
        setIndex((index)=>{
                const newIndex = (index+1)%posts.length
                updateCurrentItem(newIndex)
                return newIndex
        })
    }

    useEffect(() => {
        updateCurrentItem(index)
    },[posts,categories])

    return (currentPost && currentCategory) ? <NewsItem item={{post:currentPost,category:currentCategory}} nextSlide={nextSlide} />:<div style={{color:"white"}}>Loading...</div>
}