import './style/global.scss'
import {Kabelkrant} from "./pages/Kabelkrant";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Preview } from './pages/Preview';
import { NextPrevProvider } from './component/contextProviders/NextPrevProvider';
import { ImageContextProvider } from './component/contextProviders/imageContextProvider';
import { OmroepContextProvider } from './component/contextProviders/OmroepContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


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
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <NextPrevProvider>
            <ImageContextProvider>
                <OmroepContextProvider>
                    <RouterProvider router={router}/>
                </OmroepContextProvider>
            </ImageContextProvider>
        </NextPrevProvider>
    </QueryClientProvider>
  )

}

export default App
