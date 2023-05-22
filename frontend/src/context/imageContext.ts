import {createContext} from "react";
import {WPMedia} from "../wordpress-package";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";


export type getImageMediaObject = (ids: number) => Promise<WPMedia | null>
export interface ImageContext{
    getImageMediaObject: getImageMediaObject
    getImageUrl: (imageId:number) => Promise<string>
}

async function getImageMediaObject(imageId:number){
    const wordPressClient = new WordpressClient()
    return (await wordPressClient.media().find(imageId))[0]
}

export function getImageUrlByBaseUrl(imageId:number){
    return import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId
}


export const ImageContext = createContext<ImageContext>(
    {
        getImageMediaObject,
        getImageUrl: async (id)=>getImageUrlByBaseUrl(id)
    }

)