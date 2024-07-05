import { useState } from 'react'
import './style/global.scss'
import {Kabelkrant} from "./pages/Kabelkrant";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Preview } from './pages/Preview';
import { NextPrevProvider } from './component/contextProviders/NextPrevProvider';
import { ImageContextProvider } from './component/contextProviders/imageContextProvider';

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
  return (
    <NextPrevProvider>
        <ImageContextProvider>
            <RouterProvider router={router}/>
        </ImageContextProvider>
    </NextPrevProvider>
  )

}

export default App
