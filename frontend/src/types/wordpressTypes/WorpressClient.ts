import {WordpressPost} from "./wordpressPost";
import WpApiClient, {DefaultEndpoint, DefaultEndpointWithRevision} from "../../wordpress-package";
import {WordpressCategory} from "./wordPressCategories";
import {WPSlide} from "../Slides";

export class WordpressClient extends WpApiClient{
    constructor() {
        super(import.meta.env.VITE_API_URL as string);
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