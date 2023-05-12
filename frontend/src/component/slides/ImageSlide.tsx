import "./ImageSlide.scss"
import RTVLogo from "../../assets/rtvLogoK.svg"
import {useEffect} from "react";
import {useTimer} from "../../hooks/utilities/useTimer";
export interface ImageSlideProps {
    backgroundImageURL: string
    title: string
    length?: number
    showText?: boolean
    onCompleted?: () => void
}
export const ImageSlide: React.FC<ImageSlideProps> = ({backgroundImageURL,title,onCompleted,length,showText=true, ...props}) => {

    const {resetAndStartTimer}=  useTimer(length ?? 0,onCompleted)

    useEffect(() => {
        resetAndStartTimer()
    },[backgroundImageURL,title,length])

    return (
        <div className="image-slide" style={{backgroundImage:`url(${backgroundImageURL})`}}>
            { showText &&
                <div className="image-slide__text-bar">
                    <img className="image-slide__text-bar-image" src={RTVLogo}/>
                    <div className="image-slide__text-bar-text">{title}</div>
                </div>
            }
        </div>
    )
}

