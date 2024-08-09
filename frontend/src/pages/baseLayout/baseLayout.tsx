import { Outlet, useOutlet } from "react-router-dom";
import { OmroepContextProvider } from "../../component/contextProviders/OmroepContextProvider";

export function BaseLayout() {
    const outlet = useOutlet()
    
    if(outlet == null) {
        return <div className="text-white">
            Geen omroep geselecteerd
        </div>
    }

    return (
        <OmroepContextProvider>
            <Outlet />
        </OmroepContextProvider>
    )
}