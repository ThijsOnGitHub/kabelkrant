import { createContext } from "react";

export type OmroepContextType = {
    logo: string;
    titleBarLogo: string;
    accentColor: string;
}

export const OmroepContext = createContext<OmroepContextType>({
    logo: '',
    titleBarLogo: '',
    accentColor: ''
});