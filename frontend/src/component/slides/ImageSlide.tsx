import "./ImageSlide.scss"
import RTVLogo from "../../assets/rtvLogoK.svg"
import {useContext, useEffect} from "react";
import {useTimer} from "../../hooks/utilities/useTimer";
import { NextPrevContext } from "../../context/nextContext";
import { set } from "lodash";
export interface ImageSlideProps {
    backgroundImageURL: string
    title: string
    length?: number
    setPrevNext?: boolean
    onNext?: () => void
    onPrev?: () => void
}
export const ImageSlide: React.FC<ImageSlideProps> = ({backgroundImageURL,title,onNext,length,setPrevNext = true, ...props}) => {
    const PrevNextContext = useContext(NextPrevContext)

    const {resetAndStartTimer}=  useTimer(length ?? 0,onNext)

    useEffect(() => {
        if(PrevNextContext.autoGoNext){
            resetAndStartTimer()
        }
        if(setPrevNext){
            PrevNextContext.setNext(() =>  {
                console.log("Image next")
                if(onNext != null){
                    onNext()
                }
            })
        }
    },[backgroundImageURL,title,length])

    return (
        <div className="image-slide" style={{backgroundImage:`url(${backgroundImageURL})`}}>
            { title != "" &&
                <div className="image-slide__text-bar">
                    <img className="image-slide__text-bar-image" src={RTVLogo}/>
                    <div className="image-slide__text-bar-text">{title}</div>
                </div>
            }
        </div>
    )
}

