import {WPCategory} from "../../wordpress-package";

export interface ACFCategory {
    tv_background: number[]
    icon: string
}

export type WordpressCategory = WPCategory<ACFCategory>