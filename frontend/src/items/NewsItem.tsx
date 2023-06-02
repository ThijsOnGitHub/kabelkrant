import {FC, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";
import {PostSlide} from "../types/transformedType";
import {ImageSlide} from "../component/slides/ImageSlide";
import { useTimer } from "../hooks/utilities/useTimer";
import { set } from "lodash";


interface NewsItemsProps {
    post: PostSlide

    nextSlide: () => void
}

export const NewsItem: FC<NewsItemsProps> = ({post,...props}) => {
    const [currentPost,setCurrentPost] = useState(post)
    const [showImage,setShowImage] = useState(false)
    const [imageIndex,setImageIndex] = useState(0)
    const {seconds, resetAndStartTimer:resetTimer} = useTimer(post.imageLength,nextImage,post.imageLength)

    function nextSlide() {
        setShowImage(false)
        props.nextSlide()
    }

    function nextImage() {
        if(imageIndex < post.postImage.length-1){
            setImageIndex(imageIndex+1)
            resetTimer()
            return
        }
        setShowImage(false)
        setCurrentPost(post)
    }

    useEffect(() => {
        if(post.postImage.length){
            setShowImage(true)
            setImageIndex(0)
            resetTimer()
        }else{
            setCurrentPost(post)
        }
    },[post])


    return showImage ?
        <ImageSlide backgroundImageURL={post.postImage[imageIndex]} title={post.titleOnlyFirstImage && imageIndex > 0 ? "" :post.title } /> :
        <NewsSlide backgroundImage={currentPost.categoryImage ?? "white"} subject={currentPost.category?.subject} duration={currentPost.length} title={currentPost.title ?? ""} text={currentPost.content ?? ""} onCompleted={nextSlide} />

}