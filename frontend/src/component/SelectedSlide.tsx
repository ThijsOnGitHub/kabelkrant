import { renderSlide } from "../functions/renderSlide"
import { translateTypes } from "../pages/Overview"
import { Slide, SlideTypes } from "../types/Slides"
import { FitToScreen } from "./slideUtilities/fitToScreen"

export interface selectedSlideProps {
    slide: Slide
    onClose: () => void
}


export const SelectedSlide: React.FC<selectedSlideProps> = ({ slide, onClose }) => {

    const renderData = () => {
        switch (slide.type) {
            case SlideTypes.POSTBLOCK:
                return <div>
                    Type: {translateTypes(slide.type)}
                    <br />
                    Aantal NiewsItems: {slide.slides.length}
                    NiewsItems:
                    <ul>
                        {slide.slides.map((newsItem) => {
                            return <li> {newsItem.title}
                                <ul>
                                    <li>Categorie: {newsItem.category.subject?.subject}</li>
                                    {newsItem.endDate ? <li>Eind datum: {newsItem.endDate.toLocaleDateString()}</li> : null}
                                    {newsItem.postImage ? [<li>Afbeelding lengte: {newsItem.imageLength} Seconden </li>,<li>Afbeelding: {newsItem.postImage}</li>] : null}
                                    <li>Lengte: {newsItem.length} Seconden</li>
                                </ul>
                            </li>
                        })}
                    </ul>
                </div>
            case SlideTypes.IMAGE:
                return <div>
                    Type: {translateTypes(slide.type)}
                    <br />
                    Afbeelding: {slide.imageUrl}
                    <br />
                    Lengte: {slide.length} Seconden
                </div>
            case SlideTypes.TEXT_SLIDE:
                return <div>
                    Type: {translateTypes(slide.type)}
                    <br />
                    Titel: {slide.title}
                    <br />
                    Tekst: {slide.content}
                    <br />
                    Categorie: {slide.category?.subject?.subject}
                    <br />
                    Lengte: {slide.length} Seconden
                    <br />
                    Eind datum: {slide.endDate?.toLocaleDateString()}
                </div>
        }
    }

        

    return (
        <div>
            <div style={{ background: "white" }}>
                {renderData()}
                <button onClick={onClose}>Terug</button>
            </div>
            <FitToScreen baseHeight={1080} baseWidth={1920}>
                {renderSlide(slide, ()=>{})}
            </FitToScreen>
        </div>
    )
}