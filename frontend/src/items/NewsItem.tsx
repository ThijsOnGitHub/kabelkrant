import {FC, useCallback, useContext, useEffect, useState} from "react";
import {NewsSlide} from "../component/slides/NewsSlide";
import {PostSlide} from "../types/transformedType";
import {ImageSlide} from "../component/slides/ImageSlide";
import { useTimer } from "../hooks/utilities/useTimer";
import { NextPrevContext } from "../context/nextContext";


interface NewsItemsProps {
    post: PostSlide
    prevSlide: () => void
    nextSlide: () => void
}

export const NewsItem: FC<NewsItemsProps> = ({post, prevSlide,...props}) => {
    const [currentPost,setCurrentPost] = useState(post)
    const [showImage,setShowImage] = useState(post.postImage.length > 0)
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
        if(post.postImage.length == 0) {
            prevSlide()
            return
        }
        if(!showImage){
            setShowImage(true)
            PrevNextContext.setNext(()=>{nextImage()})
            return
        }
        if(imageIndex == 0) {
            prevSlide()
            return
        }
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
            setShowImage(false)
            setCurrentPost(post)
        }
        setNext()
        setPrev()
    },[post])

    function setNext(){
        PrevNextContext.setNext(()=>{
            console.log("newitem next")
            nextImage()
        })
    }

    function setPrev(){
        PrevNextContext.setPrev(()=>{
            prevImage()
        })
    }

    useEffect(() => {
        setNext()
    },[nextImage])

    useEffect(() => {
        setPrev()
    },[prevImage])


    return showImage ?
        <ImageSlide backgroundImageURL={post.postImage[imageIndex]} title={post.titleOnlyFirstImage && imageIndex > 0 ? "" :post.title } setPrevNext={false} /> :
        <NewsSlide backgroundImage={currentPost.categoryImage ?? "white"} subject={currentPost.category?.subject} duration={currentPost.length} title={currentPost.title ?? ""} text={currentPost.content ?? ""} onBack={prevImage} onCompleted={nextSlide} />

}