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
        if(currentPost.postImage != ""){
            setShowImage(true)
            setTimeout(() => {
                setShowImage(false)
                setCurrentPost(post)
            },post.length * 1000)
        }else{
            setCurrentPost(post)
        }
    },[currentPost])


    return showImage ?
        <ImageSlide backgroundImageURL={currentPost.postImage} title={currentPost.title} /> :
        <NewsSlide backgroundImage={post.catergoryImage ?? "white"} subject={post.category?.subject ?? {
        subject: "Nieuws",
        icon: "tv"
    }} duration={post.length} title={post.title ?? ""} text={post.content ?? ""} onCompleted={nextSlide} />

}