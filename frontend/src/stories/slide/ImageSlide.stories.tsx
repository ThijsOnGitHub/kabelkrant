import {ImageSlide, ImageSlideProps} from "../../component/slides/ImageSlide";
import {StoryObj} from "@storybook/react";
import {ZoomDeclarator} from "../../../.storybook/ZoomDeclarator";

export default {
    component: ImageSlide
}

export const Default : StoryObj<ImageSlideProps> = {
    args: {
        backgroundImageURL : "https://www.rtvkrimpenerwaard.nl/site/wp-content/uploads/2023/05/20230506_095711-2.jpg",
        title: "Dit is een test"
    },
    decorators: [
        ZoomDeclarator
    ]
}