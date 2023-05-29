import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";
import {PostSlide} from "../types/transformedType";
import {ImageSlide} from "../component/slides/ImageSlide";


interface NewsItemsProps {
    post: PostSlide

    nextSlide: () => void
}

export const NewsItem: FC<NewsItemsProps> = ({post,...props}) => {
    const [currentPost,setCurrentPost] = useState(post)
    const [showImage,setShowImage] = useState(false)

    function nextSlide() {
        setShowImage(false)
        props.nextSlide()
    }


    useEffect(() => {
        if(!showImage) return
        const timeout = setTimeout(() => {
            setShowImage(false)
            setCurrentPost(post)
        },post.imageLength * 1000)
        return ()=>{
            setCurrentPost(post)
            setShowImage(false)
            clearTimeout(timeout)
        } 
    },[showImage])

    useEffect(() => {
        if(post.postImage != ""){
            setShowImage(true)
        }else{
            setCurrentPost(post)
        }
    },[post])


    return showImage ?
        <ImageSlide backgroundImageURL={post.postImage} title={post.title} /> :
        <NewsSlide backgroundImage={currentPost.categoryImage ?? "white"} subject={currentPost.category?.subject} duration={currentPost.length} title={currentPost.title ?? ""} text={currentPost.content ?? ""} onCompleted={nextSlide} />

}