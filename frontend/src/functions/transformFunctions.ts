import { convert } from "html-to-text"
import { sample } from "lodash"
import { KabelkrantCategory, PostCategory, PostSlide, PostSlidePreprocessed } from "../types/transformedType"
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories"
import { RequiredWordpressPost } from "../types/wordpressTypes/wordpressPost"
import { WordpressKabelkrantCategory } from "../types/wordpressTypes/wordpresskabelkrantCategory"

export async function transFormWordpressCategory(category:RequiredWordpressCategory): Promise<[number, PostCategory]>{
    return [category.id,{
        id: category.id,
    }] as [number,PostCategory]
}


export function transformPostSlidePreproccedSlideToPostSlide(preproccesedSlide: PostSlidePreprocessed, possibleCategories: number[], imageLength: number, textlength: number): PostSlide {
    const intersectedCategories = preproccesedSlide.cateogries.filter(category => possibleCategories.includes(category.categoryId))
    const category = intersectedCategories.length > 0 ? intersectedCategories[0] : preproccesedSlide.cateogries[0]

    return {
        ...preproccesedSlide,
        length: preproccesedSlide.length ?? textlength,
        imageLength: preproccesedSlide.imageLength ?? imageLength,
        ...category
    }
}

export async function transformWordpressPostToPostSlidePreprocessed(post: RequiredWordpressPost, kabelkrantCategories: KabelkrantCategory[], getImages:(ids: number) => Promise<string> ): Promise<PostSlidePreprocessed>{
    const acfFields = post.acf  

    const categories = acfFields.tv_settings.category.map(categoryId => {
        return {
            categoryId: categoryId,
            category: kabelkrantCategories.find(i => i.id == categoryId) as KabelkrantCategory,
            categoryImage: sample(kabelkrantCategories.find(i => i.id == categoryId)?.images) ?? ""
        }
    })

    let postImageUrl =typeof acfFields.tv_settings.images == "string" || acfFields.tv_settings.images === false  ? []  : await Promise.all(acfFields.tv_settings.images.map(async image => await getImages(image)))   ?? "" 


    return {
        cateogries: categories,
        content: acfFields.tv_settings.text,
        title: acfFields.tv_settings.title != "" ? acfFields.tv_settings.title : convert(post.title.rendered),
        postImage: postImageUrl,
        length: acfFields.tv_settings.length === false ? 0 : Number(acfFields.tv_settings.length),
        imageLength: acfFields.tv_settings.imageLength === false ? 0 : Number(acfFields.tv_settings.imageLength),
        titleOnlyFirstImage: acfFields.tv_settings.titleOnlyFirstImage,
        endDate: acfFields.tv_settings.end_date ? new Date(acfFields.tv_settings.end_date) : undefined,
    }
}

export async function transformWordpressKabelkrantCategory(category: WordpressKabelkrantCategory, getImages:(ids: number) => Promise<string> ): Promise<KabelkrantCategory>{

    return {
        id: category.id,
        images: await Promise.all(category.acf.tv_background.map(async image => await getImages(image))),
        subject: {
            subject: category.acf.display_name,
            icon: category.acf.icon
        }
    }
    
}