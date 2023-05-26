import { useState } from 'react'
import './style/global.scss'
import {Kabelkrant} from "./pages/Kabelkrant";
import {FitToScreen} from "./component/slideUtilities/fitToScreen";
import {getImageUrlByBaseUrl, ImageContext} from './context/imageContext';
import {WPMedia} from "./wordpress-package";

function App() {
    const [count, setCount] = useState(0)

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

    const imageContext: ImageContext = {
        async getImageMediaObject(imageId:number){
            return {
                source_url: import.meta.env.VITE_API_URL+ "?attachment_id=" + imageId,
                id: imageId
            } as WPMedia
        },
        getImageUrl: (id:number) => getImageUrlByBaseUrl(id,cashedImages,setCashedImages)
    }


  return (
      <ImageContext.Provider value={imageContext}>
          <FitToScreen baseWidth={1920} baseHeight={1080}>
            <Kabelkrant />
          </FitToScreen>
      </ImageContext.Provider>
  )
}

export default App
