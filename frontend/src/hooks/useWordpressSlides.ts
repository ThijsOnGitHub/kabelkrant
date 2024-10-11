import { useQuery } from "@tanstack/react-query";
import { wordpressClient } from "../App";
import { KabelkrantCategory, PostCategory, PostSlideWithoutLength } from "../types/transformedType";
import { useProcessWordpressSlides } from "./useProcessWordpressSlides";



export function useWordpressSlides(omroepSlug:string | undefined ,posts: PostSlideWithoutLength[], categories: PostCategory[], kabelkrantCategories: KabelkrantCategory[]){

    const {data: wpSlides} = useQuery({
        queryKey: ["slides", {omroepSlug}],
        queryFn: async () => {
            return wordpressClient.slide().dangerouslyFindAll(new URLSearchParams({"order":"asc", "orderby": "menu_order", "omroep": omroepSlug ?? ""}))
        },
        initialData: [],
        refetchInterval: 900000
    })
    
    const {slides} = useProcessWordpressSlides(posts,categories,kabelkrantCategories,wpSlides)

    return {slides}
}
