import {createContext} from "react";
import {IndexedMedia} from "../types/Slides";
import {WPMedia} from "../wordpress-package";
import {WordpressClient} from "../types/wordpressTypes/WorpressClient";

export interface ImageContextProps {
    getImages(ids: number[]): WPMedia[]

}

export const ImageContext = createContext<(ids: number) => Promise<(WPMedia<unknown> | null)> >(
    async function getImage(imageId:number){
        const wordPressClient = new WordpressClient()
        return (await wordPressClient.media().find(imageId))[0]
    }
)