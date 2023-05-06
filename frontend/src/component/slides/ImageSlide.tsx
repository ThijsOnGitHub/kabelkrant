import "./ImageSlide.scss"
import RTVLogo from "../../assets/rtvLogoK.svg"
export interface ImageSlideProps {
    backgroundImageURL: string
    title: string
}
export const ImageSlide: React.FC<ImageSlideProps> = ({backgroundImageURL,title, ...props}) => {
    return (
        <div className="image-slide" style={{backgroundImage:`url(${backgroundImageURL})`}}>
            <div className="image-slide__text-bar">
                <img className="image-slide__text-bar-image" src={RTVLogo}/>
                <div className="image-slide__text-bar-text">{title}</div>
            </div>
        </div>
    )
}

