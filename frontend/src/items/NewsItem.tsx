import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";
import {PostCategory, PostSlide} from "../types/transformedType";
import {ImageSlide} from "../component/slides/ImageSlide";
import {useTimer} from "../hooks/utilities/useTimer";


interface NewsItemsProps {
    item: {
        post: PostSlide
        category: PostCategory
    }
    nextSlide: () => void
}

export const NewsItem: FC<NewsItemsProps> = ({item,...props}) => {
    const [currentItem,setCurrentItem] = useState(item)
    const {post,category} = currentItem
    const {post:currentPost,category:currentCategory} = item
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
                setCurrentItem(item)
            },item.post.length * 1000)
        }else{
            setCurrentItem(item)
        }
    },[currentPost])


    return showImage ?
        <ImageSlide backgroundImageURL={currentPost.postImage} title={currentPost.title} /> :
        <NewsSlide backgroundImage={post.catergoryImage ?? "white"} subject={category?.subject ?? {
        subject: "Nieuws",
        icon: "tv"
    }} duration={post.length} title={post.title ?? ""} text={post.content ?? ""} onCompleted={nextSlide} />

}