import { useState } from "react"
import { WPMedia } from "wordpress-api-client"
import { ImageContext, ImageContextType, getImageUrlByBaseUrl } from "../../context/imageContext"

export function ImageContextProvider(props: {children: React.ReactNode}){
    const [cashedImages,setCashedImages] = useState<{[key:string]:string}>({})

    /*async function getImage(imageId:number){
        if(cashedImages.hasOwnProperty(imageId)){
            return cashedImages[imageId]
        }
        const wordPressClient = new WordpressClient()
        const image = (await wordPressClient.media().find(imageId))[0]
        if(image != null){
            setCashedImages((indexedImages) => ({...indexedImages,[imageId]:image}))
        }
        return image
    }*/

    const imageContext: ImageContextType = {
        async getImageMediaObject(imageId:number){
            return {
                source_url: import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId,
                id: imageId
            } as WPMedia
        },
        getImageUrl: (id:number) => getImageUrlByBaseUrl(id,cashedImages,setCashedImages)
    }

    return <ImageContext.Provider value={imageContext}>
        {props.children}
    </ImageContext.Provider>
}