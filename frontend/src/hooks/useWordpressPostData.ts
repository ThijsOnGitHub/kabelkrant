import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { wordpressClient } from "../App"
import { WordpressPost } from "../types/wordpressTypes/wordpressPost"
import { useProcessWordpressPostData } from "./useProcessWordpressPostData"

const refreshInterval = 1000 * 60 * 5


export function useWordpressPostData(omroep: string | undefined){

    const baseQuery = useMemo(() => ({"tv-filter": "true"}) , [])
    const omroepQuery: {omroep: string} |{} = omroep ? {"omroep": omroep} : {}
    const query = useMemo(() => ({...baseQuery,...omroepQuery}), [baseQuery, omroepQuery]) 

    
    const {data: wordpressPosts} = useQuery({
        queryKey: ["posts", {omroep}],
        queryFn: async () => {
            return wordpressClient
            .post()
            .find(new URLSearchParams(query))
        },
        initialData: [],
        refetchInterval: refreshInterval
    })

    const {data: wordpressCategories} = useQuery({
        queryKey: ["categories",{omroep}],
        queryFn: async () => {
            return  wordpressClient.postCategory().dangerouslyFindAll()
        },
        initialData: [],
        refetchInterval: refreshInterval
    })

    const {data: wordpressKabelkrantCategories} = useQuery({
        queryKey: ["kabelkrantCategories",{omroep}],
        queryFn: async () => {
            return  wordpressClient.kabelkrantCategorie().dangerouslyFindAll()
        },
        initialData: [],
        refetchInterval: refreshInterval
    })

    const filteredWordpressPosts = useMemo( ()=>wordpressPosts.filter(post => post != null) as WordpressPost[], [wordpressPosts]) 
    const { posts,categories,kabelkrantCategories } = useProcessWordpressPostData(filteredWordpressPosts,wordpressCategories, wordpressKabelkrantCategories)


    return { posts, categories, kabelkrantCategories, wordpressKabelkrantCategories}
}