import {FC, useEffect, useState} from "react";
import axios from "axios";
import {WordpressPosts} from "../types/wordpressTypes/wordpressPosts";
import {WordpressCategories} from "../types/wordpressTypes/wordPressCategories";
import {PostCategory, PostSlide} from "../types/transformedType";
import {NewsSlide} from "../component/slides/NewsSlide";
import {convert} from "html-to-text";

export interface KabelkrantProps {

}

export const Kabelkrant: FC<KabelkrantProps> = (props) => {
    const [index,setIndex] = useState<number>(0)

    const [posts, setPosts] = useState<PostSlide[]>([])
    const [categories, setCategories] = useState<PostCategory[]>([])

    function nextSlide() {
        setIndex((index)=> (index+1)%posts.length)
    }

    async function loadPosts(){
        const posts = await axios.get<WordpressPosts[]>("https://www.rtvkrimpenerwaard.nl/site/wp-json/wp/v2/posts")
        const categories = await axios.get<WordpressCategories[]>("https://www.rtvkrimpenerwaard.nl/site/wp-json/wp/v2/categories")
        const catergories: PostCategory[] = categories.data.map<PostCategory>(category => {
            return {
                id: category.id,
                subject:{
                    subject: category.name,
                    icon: "tv"
                },
                image: '/watertoren-schoonhoven.png'
            }
        })
        const transformedPosts: PostSlide[] = posts.data.map(post => {
            console.log(post.content.rendered)
            return {
                catergoryId: post.categories,
                content: convert(post.content.rendered).replaceAll(/\[.*?\]/g, '').trim().replace(/\n\s*\n/g, '\n\n'),
                title: convert(post.title.rendered),
            }
        })
        setPosts(transformedPosts)
        setCategories(catergories)

    }

    useEffect(() => {
        loadPosts()
    },[])

    const currentPost = posts[index]
    const currentCategory = categories.find(category => category.id === currentPost?.catergoryId[0])

    return (currentPost && currentCategory) ? <NewsSlide backgroundImage={currentCategory?.image ?? "white"} subject={currentCategory?.subject ?? {
        subject: "Nieuws",
        icon: "tv"
    }} seconds={20} title={currentPost.title ?? ""} text={currentPost.content ?? ""} onCompleted={nextSlide} />:<div>Loading...</div>
}