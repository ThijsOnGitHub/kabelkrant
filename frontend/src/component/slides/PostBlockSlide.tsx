import {PostSlide} from "../../types/transformedType";
import {FC, useEffect, useState} from "react";
import {NewsItem} from "../../items/NewsItem";

export interface TextBlockSlideProps {
    posts: PostSlide[]
    onCompleted: () => void
}

export const PostBlockSlide: FC<TextBlockSlideProps> = ({posts,onCompleted}) => {
    const [currentPost,setCurrentPost] = useState<PostSlide>(posts[0])
    const [index,setIndex] = useState<number>(0)

    function nextSlide() {
        if(index < posts.length-1){
            setIndex(index+1)
            setCurrentPost(posts[index+1])
            return
        }
        onCompleted()
    }

    useEffect(() => {
        setIndex(0)
        setCurrentPost(posts[0])
    }, [posts])

    return <NewsItem post={currentPost} nextSlide={nextSlide} />
}