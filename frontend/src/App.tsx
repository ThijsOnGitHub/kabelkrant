import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import React, { Suspense } from 'react';
import { NextPrevProvider } from './component/contextProviders/NextPrevProvider';
import { ImageContextProvider } from './component/contextProviders/imageContextProvider';
import './style/global.scss';
import { WordpressClient } from './types/wordpressTypes/WorpressClient';

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
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
            <Suspense>
                <TanStackRouterDevtools  router={router} />
            </Suspense>
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
