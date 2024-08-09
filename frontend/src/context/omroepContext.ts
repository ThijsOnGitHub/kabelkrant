import { createContext } from "react";

export type OmroepContextType = {
    logo: string;
    accentColor: string;
}

export const OmroepContext = createContext<OmroepContextType>({
    logo: '',
    accentColor: ''
});