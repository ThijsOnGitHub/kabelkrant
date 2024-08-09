import { WPPost } from "wordpress-api-client"

export interface WordpressKabelkrantCategoryACF {
    tv_background: number[]
    icon: string
    display_name: string
}

export type WordpressKabelkrantCategory = WPPost<WordpressKabelkrantCategoryACF>