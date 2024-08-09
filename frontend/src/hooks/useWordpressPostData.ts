import { useEffect, useMemo, useState } from "react"
import { useProcessWordpressPostData } from "./useProcessWordpressPostData"
import { useTimer } from "./utilities/useTimer"
import { WordpressClient } from "../types/wordpressTypes/WorpressClient"
import { WordpressPost } from "../types/wordpressTypes/wordpressPost"
import { WordpressCategory } from "../types/wordpressTypes/wordPressCategories"
import { WordpressKabelkrantCategory } from "../types/wordpressTypes/wordpresskabelkrantCategory"

export function useWordpressPostData(omroep: string | undefined){
    const [wordpressPosts, setWordpressPosts] = useState<(WordpressPost | null)[]>([])
    const [wordpressCategories, setWordpressCategories] = useState<WordpressCategory[]>([])
    const [wordpressKabelkrantCategories, setKabelkrantCategories] = useState<WordpressKabelkrantCategory[]>([])


    const { resetAndStartTimer, stopTimer }= useTimer(false, ()=>{
        loadPosts()
    },900000,"postdata")

    const filteredWordpressPosts = useMemo( ()=>wordpressPosts.filter(post => post != null) as WordpressPost[], [wordpressPosts]) 
    const { posts,categories,kabelkrantCategories } = useProcessWordpressPostData(filteredWordpressPosts,wordpressCategories, wordpressKabelkrantCategories)

    function loadPosts(){
        const wordpressClient = new WordpressClient();
        console.log("Loading posts")
        // Create all the promises
        const baseQuery = {"tv-filter": "true"}
        const omroepQuery: {omroep: string} |{} = omroep ? {"omroep": omroep} : {}
        const query = {...baseQuery,...omroepQuery}
        wordpressClient.post()
            .find(new URLSearchParams(query)).then(result =>{
                setWordpressPosts(result)
            });
        wordpressClient.postCategory().dangerouslyFindAll()
            .then(result =>{
                setWordpressCategories(result)
            });
        wordpressClient.kabelkrantCategorie().dangerouslyFindAll()
            .then(result =>{
                setKabelkrantCategories(result)
            })
    }


    useEffect(() => {
        loadPosts()
        resetAndStartTimer()
        return () => {
            stopTimer()
        }
    },[])

    return { posts, categories, kabelkrantCategories, wordpressKabelkrantCategories}
}