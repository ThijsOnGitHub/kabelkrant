import { FC, ReactElement, useState } from "react";
import { NextPrevContext } from "../context/nextContext";


export interface useNextPrevHookProps {
    children: ReactElement[] | ReactElement,
    defaultAutoGoNext?: boolean
}

export const NextPrevProvider: FC<useNextPrevHookProps> = ({children,defaultAutoGoNext = true}) => {
    const [next, setNext] = useState<() => void>(() => {console.log("next not set")})
    const [prev, setPrev] = useState<() => void>(() => {console.log("prev not set")})
    const [autoGoNext, setAutoGoNext] = useState(defaultAutoGoNext)

    function setNextFunction(next: () => void) {
        setNext(() => next)
    }

    function setPrevFunction(prev: () => void) {
        setPrev(() => prev)
    }

    return <NextPrevContext.Provider value={{next, prev, setNext: setNextFunction, setPrev: setPrevFunction, autoGoNext, setAutoGoNext}}>
        {children}
    </NextPrevContext.Provider>
}