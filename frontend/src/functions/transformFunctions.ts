import { convert } from "html-to-text"
import { random, sample } from "lodash"
import { KabelkrantCategory, PostCategory, PostSlideWithoutLength } from "../types/transformedType"
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories"
import { RequiredWordpressPost } from "../types/wordpressTypes/wordpressPost"
import { WordpressKabelkrantCategory } from "../types/wordpressTypes/wordpresskabelkrantCategory"

export async function transFormWordpressCategory(category:RequiredWordpressCategory): Promise<[number, PostCategory]>{
    return [category.id,{
        id: category.id,
    }] as [number,PostCategory]
}

export async function transformWordpressPost(post:  RequiredWordpressPost,categoriesObject: {[p: string]: PostCategory}, kabelkrantCategories: KabelkrantCategory[], getImages:(ids: number) => Promise<string> ): Promise<PostSlideWithoutLength>{
    const acfFields = post.acf  
    const kabelkrantCategory = kabelkrantCategories.find(i => i.id == acfFields.tv_settings.category[0])
    let imageUrl = ""
    if(kabelkrantCategory?.images != undefined && kabelkrantCategory.images.length > 0){
        imageUrl = sample(kabelkrantCategory.images) ?? ""
    }

    let postImageUrl =typeof acfFields.tv_settings.images == "string" || acfFields.tv_settings.images === false  ? []  : await Promise.all(acfFields.tv_settings.images.map(async image => await getImages(image)))   ?? "" 

  
    return {
        categoryId: acfFields.tv_settings.category[0] ?? -1,
        content: acfFields.tv_settings.text,
        title: acfFields.tv_settings.title != "" ? acfFields.tv_settings.title : convert(post.title.rendered),
        postImage: postImageUrl,
        length: acfFields.tv_settings.length === false ? "" : acfFields.tv_settings.length ,
        categoryImage: imageUrl,
        titleOnlyFirstImage: acfFields.tv_settings.titleOnlyFirstImage,
        imageLength: acfFields.tv_settings.imageLength === false ? "" : acfFields.tv_settings.imageLength,
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