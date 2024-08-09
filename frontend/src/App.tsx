import './style/global.scss'
import {Kabelkrant} from "./pages/Kabelkrant";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Preview } from './pages/Preview';
import { NextPrevProvider } from './component/contextProviders/NextPrevProvider';
import { ImageContextProvider } from './component/contextProviders/imageContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BaseLayout } from './pages/baseLayout/baseLayout';


const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: '/:omroep',
                element: <Kabelkrant />
        
            },
            {
                path: '/:omroep/overview',
                element: <Overview />
            },
            {
                path: '/preview',
                element: <Preview />
            }
        ]
    }
])
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <NextPrevProvider>
            <ImageContextProvider>
                <RouterProvider router={router}/>
            </ImageContextProvider>
        </NextPrevProvider>
    </QueryClientProvider>
  )

}

export default App
