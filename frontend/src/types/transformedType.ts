import {SubjectProps} from "../component/slideUtilities/Subject";

export interface PostSlide {
    title: string,
    content: string,
    catergoryId: number[],
}

export interface PostCategory {
    id: number,
    subject: SubjectProps,
    image: string
}