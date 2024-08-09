import {createContext} from "react";
import {WPMedia} from "../wordpress-package";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import axios from "axios";

export type getImageMediaObject = (ids: number) => Promise<WPMedia | null>
export interface ImageContextType{
    getImageMediaObject: getImageMediaObject
    getImageUrl: (imageId:number) => Promise<string>
}

async function getImageMediaObject(imageId:number){
    const wordPressClient = new WordpressClient()
    return (await wordPressClient.media().find(imageId))[0]
}

export async function getImageUrlByBaseUrl(imageId:number, cacheObject: {[key:number]:string} = {}, setCacheObject: (cacheObject: {[key:number]:string})=>void = ()=>{}){
    // add no cors to the request
    console.log(cacheObject)
    if(cacheObject.hasOwnProperty(imageId)){
        return cacheObject[imageId]
    }
    let imageUrl = import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId
    console.log(import.meta.env.VITE_CACHE_IMAGES)
    if(import.meta.env.VITE_CACHE_IMAGES === "true"){
        try{
            const result = await axios.get(import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId,{
                responseType: 'arraybuffer',
            })
            console.log(result)
            let blob = new Blob(
                [result.data], 
                { type: result.headers['content-type'] }
            )
            let image = window.URL.createObjectURL(blob)
            
            imageUrl = image
        }catch(e){
        }
    } else {
        // preload the image
        const image = new Image()
        image.src = imageUrl
    }
    setCacheObject({...cacheObject, [imageId]: imageUrl})
    return imageUrl
}


export const ImageContext = createContext<ImageContextType>(
    {
        getImageMediaObject,
        getImageUrl: async (id)=>getImageUrlByBaseUrl(id)
    }

)