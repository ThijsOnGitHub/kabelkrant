import './style/global.scss'
import { Kabelkrant } from "./pages/Kabelkrant";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Preview } from './pages/Preview';
import { NextPrevProvider } from './component/contextProviders/NextPrevProvider';
import { ImageContextProvider } from './component/contextProviders/imageContextProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BaseLayout } from './pages/baseLayout/baseLayout';
import { WordpressClient } from './types/wordpressTypes/WorpressClient';
import React from 'react';

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

export const wordpressClient = new WordpressClient();

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

function App() {
    const [showDevtools, setShowDevtools] = React.useState(false)
    React.useEffect(() => {
        // @ts-expect-error
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])

    return (
        <>
            {showDevtools && (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            )}
            <ReactQueryDevtools />
            <NextPrevProvider>
                <ImageContextProvider>
                    <RouterProvider router={router} />
                </ImageContextProvider>
            </NextPrevProvider>
        </>
    )

}

export default App
