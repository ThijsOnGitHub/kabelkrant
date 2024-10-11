import {SubjectProps} from "../component/slideUtilities/Subject";



export interface PostSlide {
    title: string,
    content: string,
    postImage: string[],
    titleOnlyFirstImage: boolean;
    length: number,
    categoryImage:string,
    categoryId: number,
    category:  KabelkrantCategory,
    imageLength: number,
    endDate?: Date,
}

export type PostSlideWithoutLength = Omit<PostSlide, 'length' | 'category' | 'imageLength'> & {length: string | number, imageLength: (string | number)} 

export interface PostCategory {
    id: number
}


export interface KabelkrantCategory {
    id: number,
    subject?: SubjectProps,
    images: string[]
}