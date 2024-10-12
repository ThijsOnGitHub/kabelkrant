import { useContext, useMemo } from "react";
import { OmroepContext, OmroepContextType } from "../../context/omroepContext";
import { useQuery } from "@tanstack/react-query";
import { ImageContext } from "../../context/imageContext";
import { fetchOmroep } from "../../functions/fetchFunctions/fetchOmroep";
import { useParams } from "react-router-dom";

interface OmroepContextProviderProps {
    children: React.ReactNode;
}


export function OmroepContextProvider({ children }: OmroepContextProviderProps) {
    let {omroep} = useParams<{omroep:string}>()
    const imageContext = useContext(ImageContext)
    const omroepFetchedData = useQuery({
        queryKey: ['omroepData', omroep],
        queryFn: async () => fetchOmroep(omroep ?? '')
    })
    const omroepLogo = useQuery({
        queryKey: ['omroepLogo', omroepFetchedData.data?.acf.kabelkrant_logo],
        queryFn: async () => imageContext.getImageUrl(omroepFetchedData.data?.acf.kabelkrant_logo || 0)
    })
    const omroepTitleBarLogo = useQuery({
        queryKey: ['omroepTitleBarLogo', omroepFetchedData.data?.acf.kabelkrant_title_bar],
        queryFn: async () => imageContext.getImageUrl(omroepFetchedData.data?.acf.kabelkrant_title_bar || 0)
    })

    
    
    const omroepData: OmroepContextType = useMemo(() => ({
            logo: omroepLogo.data || '',
            titleBarLogo: omroepTitleBarLogo.data || '',
            accentColor: omroepFetchedData.data?.acf.kabelkrant_accent_color || '#000000'
    }), [omroepFetchedData, omroepLogo]);

    return (
        <div style={{ "--color-accent": omroepData.accentColor } as any}>
            <OmroepContext.Provider value={omroepData}>
                {children}
            </OmroepContext.Provider>
        </div>
    )
}