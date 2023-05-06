
import {WordpressPost} from "./wordpressPost";
import WpApiClient, {DefaultEndpoint, DefaultEndpointWithRevision, WPCategory, WPPost} from "../../wordpress-package";
import {WordpressCategory} from "./wordPressCategories";

export class WordpressClient extends WpApiClient{
    constructor() {
        super("http://localhost");
    }

    post<P = WordpressPost>(): DefaultEndpointWithRevision<P> {
        return super.post<P>()
    }

    postCategory<P = WordpressCategory>(): DefaultEndpoint<P> {
        return super.postCategory<P>();
    }

}