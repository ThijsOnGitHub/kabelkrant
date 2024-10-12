import { SubjectProps } from "../component/slideUtilities/Subject";



export interface PostSlide {
    title: string,
    content: string,
    postImage: string[],
    titleOnlyFirstImage: boolean;
    length: number,
    categoryId: number,
    category:  KabelkrantCategory,
    categoryImage:string,
    imageLength: number,
    endDate?: Date,
}

export type PostSlideCategory = {
    categoryId: number,
    category: KabelkrantCategory,
    categoryImage: string
}

export type PostSlidePreprocessed = Omit<PostSlide, 'categoryId' | 'category' | 'categoryImage' | 'imageLength' | 'lenght'> & {
    cateogries: PostSlideCategory[]
    length?: number,
    imageLength?: number
}
export interface PostCategory {
    id: number
}


export interface KabelkrantCategory {
    id: number,
    subject?: SubjectProps,
    images: string[]
}