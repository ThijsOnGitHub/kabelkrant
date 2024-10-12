import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import { NextPrevProvider } from './component/contextProviders/NextPrevProvider';
import { ImageContextProvider } from './component/contextProviders/imageContextProvider';
import './style/global.scss';
import { WordpressClient } from './types/wordpressTypes/WorpressClient';
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

export const wordpressClient = new WordpressClient();
// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


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
            <TanStackRouterDevtools router={router} />
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
