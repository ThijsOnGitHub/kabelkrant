import {WordpressPost} from "./wordpressPost";
import WpApiClient, {DefaultEndpoint, DefaultEndpointWithRevision} from "../../wordpress-package";
import {RequiredWordpressCategory, WordpressCategory} from "./wordPressCategories";
import {WPSlide} from "../Slides";
import { WordpressKabelkrantCategory, WordpressKabelkrantCategoryACF } from "./wordpresskabelkrantCategory";

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

    public kabelkrantCategorie(): DefaultEndpointWithRevision<WordpressKabelkrantCategory> {
        return this.addPostType<WordpressKabelkrantCategory>("wp/v2/kabelkrant-categorie", true)
    }

    postCategory<P = WordpressCategory>(): DefaultEndpoint<P> {
        return super.postCategory<P>();
    }

}