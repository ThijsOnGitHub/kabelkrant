import { PostSlide } from "../../types/transformedType";
import { FC, useEffect, useState } from "react";
import { NewsItem } from "../../items/NewsItem";
import { SlideTransition } from "../animations/SlideTransition";

export interface TextBlockSlideProps {
    posts: PostSlide[]
    onCompleted: () => void
}

export const PostBlockSlide: FC<TextBlockSlideProps> = ({ posts, onCompleted }) => {
    const [currentPost, setCurrentPost] = useState<PostSlide>(posts[0])
    const [index, setIndex] = useState<number>(0)

    function nextSlide() {
        if (index < posts.length - 1) {
            setIndex(index + 1)
            setCurrentPost(posts[index + 1])
            return
        }
        onCompleted()
    }

    function prevSlide() {
        if (index == 0) return
        setIndex(index - 1)
        setCurrentPost(posts[index - 1])
    }

    useEffect(() => {
        setIndex(0)
        setCurrentPost(posts[0])
    }, [posts])

    return <SlideTransition  divKey={JSON.stringify(currentPost)}>
        <NewsItem key={currentPost.title} post={currentPost} nextSlide={nextSlide} prevSlide={prevSlide} />
    </SlideTransition> 
            



}