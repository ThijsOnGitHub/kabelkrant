import {createContext} from "react";
import {WPMedia} from "../wordpress-package";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";
import axios from "axios";

export type getImageMediaObject = (ids: number) => Promise<WPMedia | null>
export interface ImageContext{
    getImageMediaObject: getImageMediaObject
    getImageUrl: (imageId:number) => Promise<string>
}

async function getImageMediaObject(imageId:number){
    const wordPressClient = new WordpressClient()
    return (await wordPressClient.media().find(imageId))[0]
}

export async function getImageUrlByBaseUrl(imageId:number, cacheObject: {[key:number]:string} = {}, setCacheObject: (cacheObject: {[key:number]:string})=>void = ()=>{}){
    console.log(import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId)
    // add no cors to the request
    if(cacheObject.hasOwnProperty(imageId)){
        return cacheObject[imageId]
    }
    let imageUrl = ""
    try{
        const result = await axios.get(import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId,{
            responseType: 'arraybuffer',
        })
        let blob = new Blob(
            [result.data], 
            { type: result.headers['content-type'] }
          )
          let image = window.URL.createObjectURL(blob)
        
        imageUrl = image
    }catch(e){
        imageUrl = import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId
    }
    setCacheObject({...cacheObject, [imageId]: imageUrl})
    return imageUrl
}


export const ImageContext = createContext<ImageContext>(
    {
        getImageMediaObject,
        getImageUrl: async (id)=>getImageUrlByBaseUrl(id)
    }

)