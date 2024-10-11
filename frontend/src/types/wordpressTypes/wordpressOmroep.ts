import { WPPost } from "wordpress-api-client";


export type WordpressOmroepAcfFields = {
    "kabelkrant_logo": number,
    kabelkrant_title_bar: number
    "kabelkrant_accent_color": string
}

export type WordpressOmroep = WPPost<WordpressOmroepAcfFields>