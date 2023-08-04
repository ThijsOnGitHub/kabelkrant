import { FC, useContext } from "react";
import { NextPrevContext } from "../../context/nextContext";

export interface NextPrevBarProps {
}

export const NextPrevButtonsBar : FC<NextPrevBarProps> = (props) => {
    const {next,prev} = useContext(NextPrevContext)

    return <div className="next-prev-buttons__container">
        <button className="button" onClick={prev}>{"<"}</button>
        <button className="button" onClick={next}>{">"}</button>
    </div>
}