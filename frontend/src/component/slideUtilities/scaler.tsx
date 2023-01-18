import {FC, ReactNode} from "react";

export interface ScalerProps {
    scale: number
    children: ReactNode
}

export const Scaler: FC<ScalerProps>= (props) => {
    return (
        <div style={{zoom: props.scale}}>
            {props.children}
        </div>
    )
}