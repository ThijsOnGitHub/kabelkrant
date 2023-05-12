import {SubjectProps} from "../component/slideUtilities/Subject";



export interface PostSlide {
    title: string,
    content: string,
    postImage: string,
    length: number,
    categoryImage:string,
    categoryId: number,
    category: PostCategory
}

export type PostSlideWithoutLength = Omit<PostSlide, 'length' | 'category'> & {length: string | number}

export interface PostCategory {
    id: number,
    subject?: SubjectProps,
    image: string[]
}