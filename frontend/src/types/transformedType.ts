import {SubjectProps} from "../component/slideUtilities/Subject";



export interface PostSlide {
    title: string,
    content: string,
    postImage: string[],
    titleOnlyFirstImage: boolean;
    featuredImage?: string,
    length: number,
    categoryImage:string,
    categoryId: number,
    category: PostCategory
    imageLength: number,
    endDate?: Date,
}

export type PostSlideWithoutLength = Omit<PostSlide, 'length' | 'category' | 'imageLength'> & {length: string | number, imageLength: (string | number)} 

export interface PostCategory {
    id: number,
    subject?: SubjectProps,
    image: string[]
}