import { createContext } from "react";

export interface NextPrevContext {  
    next: () => void;
    prev: () => void;
    setNext: (next: () => void) => void;
    setPrev: (prev: () => void) => void;
    autoGoNext: boolean,
    setAutoGoNext: React.Dispatch<React.SetStateAction<boolean>>
}

function logNotConnected(){
    console.log("no context provider")
}

export const NextPrevContext = createContext<NextPrevContext>({
    next: logNotConnected,
    prev: logNotConnected,
    setNext: logNotConnected,
    setPrev: logNotConnected,
    autoGoNext: true,
    setAutoGoNext: logNotConnected
});