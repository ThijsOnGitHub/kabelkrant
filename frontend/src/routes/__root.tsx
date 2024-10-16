import { Outlet, createRootRoute } from '@tanstack/react-router'
import { OmroepContextProvider } from '../component/contextProviders/OmroepContextProvider'


export function RootComponent() {
  return (
    <OmroepContextProvider>
      <Outlet />
    </OmroepContextProvider>
  )
}


function notFoundComponent() {
  return (
    <div className="text-white">
      Geen omroep geselecteerd
    </div>
  )
}

export const Route = createRootRoute({
  notFoundComponent,
    component: () => (
      <RootComponent />
    ),
})
