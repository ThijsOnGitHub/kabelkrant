import {FC, useState} from "react";
import {Slides, SlideType} from "../../types/Slides";
import {useSlides} from "../../hooks/useSlides";

export interface ContentManagerProps{

}


export const ContentManager: FC<ContentManagerProps> = (props) => {
    const index = useState<number>(0)
    const slides = useSlides()


    return <div></div>
}