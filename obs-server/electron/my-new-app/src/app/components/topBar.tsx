import { FC } from "react";
import tvLogo from '../assets/tvLogo.svg'

export interface TopBarProps {
}

export const TopBar: FC<TopBarProps> = () => {
    return <div className="top-bar__container">
        <img className="top-bar__logo" src={tvLogo}/>
        <div className="top-bar__text">Kabelkrant manager</div>
    </div>
}