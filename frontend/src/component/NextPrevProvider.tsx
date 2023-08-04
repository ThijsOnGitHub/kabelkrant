import { FC, ReactElement, useState } from "react";
import { NextPrevContext } from "../context/nextContext";


export interface useNextPrevHookProps {
    children: ReactElement,
    autoGoNextDefault?: boolean
}

export const NextPrevProvider: FC<useNextPrevHookProps> = ({children, autoGoNextDefault= true}) => {
    const [next, setNext] = useState<() => void>(() => {console.log("next not set")})
    const [prev, setPrev] = useState<() => void>(() => {console.log("prev not set")})
    const [autoGoNext, setAutoGoNext] = useState(autoGoNextDefault)

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