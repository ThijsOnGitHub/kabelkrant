import {WPCategory} from "../../wordpress-package";

export interface ACFCategory {
    tv_background: number[]
}

export type WordpressCategory = WPCategory<ACFCategory>