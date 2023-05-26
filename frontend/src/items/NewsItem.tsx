import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";
import {PostCategory, PostSlide} from "../types/transformedType";
import {ImageSlide} from "../component/slides/ImageSlide";
import {useTimer} from "../hooks/utilities/useTimer";


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
        console.log("currentPost",currentPost)
        if(post.postImage != ""){
            setShowImage(true)
            setTimeout(() => {
                setShowImage(false)
                setCurrentPost(post)
            },post.imageLength * 1000)
        }else{
            setCurrentPost(post)
        }
    },[post])


    return showImage ?
        <ImageSlide backgroundImageURL={post.postImage} title={post.title} /> :
        <NewsSlide backgroundImage={post.categoryImage ?? "white"} subject={post.category?.subject} duration={post.length} title={post.title ?? ""} text={post.content ?? ""} onCompleted={nextSlide} />

}