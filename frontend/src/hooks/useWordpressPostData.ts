import { useEffect, useState } from "react"
import { useProcessWordpressPostData } from "./useProcessWordpressPostData"
import { useTimer } from "./utilities/useTimer"
import { WordpressClient } from "../types/wordpressTypes/WorpressClient"
import { WordpressPost } from "../types/wordpressTypes/wordpressPost"
import { WordpressCategory } from "../types/wordpressTypes/wordPressCategories"

export function useWordpressPostData(){
    const [wordpressPosts, setWordpressPosts] = useState<(WordpressPost | null)[]>([])
    const [wordpressCategories, setWordpressCategories] = useState<WordpressCategory[]>([])


    const { resetAndStartTimer:resetTimer, stopTimer }= useTimer(120, ()=>{
        loadPosts()
        resetTimer()
    },900000,"postdata")

    const filteredWordpressPosts = useMemo( ()=>wordpressPosts.filter(post => post != null) as WordpressPost[], [wordpressPosts]) 
    const { posts,categories} = useProcessWordpressPostData(filteredWordpressPosts,wordpressCategories)

    function loadPosts(){
        const wordpressClient = new WordpressClient();
        // Create all the promises
        wordpressClient.post()
            .find(new URLSearchParams({"tv-filter": "true"})).then(result =>{
                setWordpressPosts(result)
            });
        wordpressClient.postCategory().dangerouslyFindAll()
            .then(result =>{
                setWordpressCategories(result)
            });
    }


    useEffect(() => {
        loadPosts()
        resetTimer()
        return () => {
            stopTimer()
        }
    },[])

    return { posts, categories}
}