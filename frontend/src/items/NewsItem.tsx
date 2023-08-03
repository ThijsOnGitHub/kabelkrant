import {FC, useCallback, useContext, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";
import {PostSlide} from "../types/transformedType";
import {ImageSlide} from "../component/slides/ImageSlide";
import { useTimer } from "../hooks/utilities/useTimer";
import { set } from "lodash";
import { NextPrevContext } from "../context/nextContext";


interface NewsItemsProps {
    post: PostSlide

    nextSlide: () => void
}

export const NewsItem: FC<NewsItemsProps> = ({post,...props}) => {
    const [currentPost,setCurrentPost] = useState(post)
    const [showImage,setShowImage] = useState(false)
    const [imageIndex,setImageIndex] = useState(0)

    const PrevNextContext = useContext(NextPrevContext)

    function nextSlide() {
        setShowImage(false)
        props.nextSlide()
    }

    const nextImage = useCallback(() => {
        if(imageIndex < post.postImage.length-1){
            setImageIndex(imageIndex+1)
            if(PrevNextContext.autoGoNext) resetTimer()
            return
        }
        setShowImage(false)
        setCurrentPost(post)
    },[imageIndex])

    const {seconds, resetAndStartTimer:resetTimer} = useTimer(post.imageLength,nextImage,post.imageLength)

    const prevImage = useCallback(()=>{
        console.log("prev image")
        if(!showImage){
            setShowImage(true)
            return
        }
        if(imageIndex == 0) {return}
        setImageIndex(imageIndex-1)
    },[imageIndex,showImage])

    useEffect(() => {
        if(post.postImage.length){
            setShowImage(true)
            setImageIndex(0)
            if(PrevNextContext.autoGoNext){
                resetTimer()
            }           
        }else{
            setCurrentPost(post)
        }
    },[post])

    useEffect(() => {
        PrevNextContext.setNext(()=>{
            nextImage()
        })
    },[nextImage])

    useEffect(() => {
        PrevNextContext.setPrev(()=>{
            prevImage()
        })
    },[prevImage])


    return showImage ?
        <ImageSlide backgroundImageURL={post.postImage[imageIndex]} title={post.titleOnlyFirstImage && imageIndex > 0 ? "" :post.title } setPrevNext={false} /> :
        <NewsSlide backgroundImage={currentPost.categoryImage ?? "white"} subject={currentPost.category?.subject} duration={currentPost.length} title={currentPost.title ?? ""} text={currentPost.content ?? ""} onBack={prevImage} onCompleted={nextSlide} />

}