import {ACFCategory} from "./wordPressCategories";
import {WPPost} from "wordpress-api-client";

export interface ACFPost {
    show_on_tv: boolean;
    tv_settings:{
        title: string;
        category: number
        end_date: string;
        images: number | string;
        length: number | string;
        text: string;
        imageLength: number | string;
    }
}
export type WordpressPost = WPPost<ACFPost>;
