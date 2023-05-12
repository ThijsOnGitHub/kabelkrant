
import {WordpressPost} from "./wordpressPost";
import WpApiClient, {DefaultEndpoint, DefaultEndpointWithRevision, WPCategory, WPPost} from "../../wordpress-package";
import {WordpressCategory} from "./wordPressCategories";
import {SlideTypes} from "../../hooks/useWordpressSlides";

export type WPSlide = WPPost<{
    type: SlideTypes,
    [SlideTypes.POSTBLOCK]: {
        category: number[],
        standardLength: number
    }
    [SlideTypes.IMAGE]: {
        images: number[],
        length: number
    }
}>

export class WordpressClient extends WpApiClient{
    constructor() {
        super("http://localhost");
    }

    post<P = WordpressPost>(): DefaultEndpointWithRevision<P> {
        return super.post<P>()
    }

    public slide(): DefaultEndpointWithRevision<WPSlide> {
        return this.addPostType<WPSlide>("wp/v2/slides", true)
    }

    postCategory<P = WordpressCategory>(): DefaultEndpoint<P> {
        return super.postCategory<P>();
    }

}