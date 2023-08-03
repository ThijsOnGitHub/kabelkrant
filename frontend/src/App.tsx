import { useState } from 'react'
import './style/global.scss'
import {Kabelkrant} from "./pages/Kabelkrant";
import {getImageUrlByBaseUrl, ImageContext} from './context/imageContext';
import {WPMedia} from "./wordpress-package";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Preview } from './pages/Preview';
import { NextPrevProvider } from './component/NextPrevProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Kabelkrant />

    },
    {
        path: '/overview',
        element: <Overview />
    },
    {
        path: '/preview',
        element: <Preview />
    }
])

function App() {
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
    <NextPrevProvider>
        <ImageContext.Provider value={imageContext}>
            <RouterProvider router={router}/>
        </ImageContext.Provider>
    </NextPrevProvider>
  )

}

export default App
