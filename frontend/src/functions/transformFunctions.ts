import { convert } from "html-to-text"
import { random } from "lodash"
import { PostCategory, PostSlideWithoutLength } from "../types/transformedType"
import { RequiredWordpressCategory } from "../types/wordpressTypes/wordPressCategories"
import { RequiredWordpressPost } from "../types/wordpressTypes/wordpressPost"

export async function transFormWordpressCategory(category:RequiredWordpressCategory, getImages: (ids: number) => Promise<string>): Promise<[number, PostCategory]>{
    // Check if the category has an image
    const imageIds = (category.acf?.tv_background ?? [])
    const images = await Promise.all(imageIds.map(async (id) => getImages(id)))
    const imageUrls = images.map(image => image).filter(image => image != undefined) as string[]
    return [category.id,{
        id: category.id,
        subject:{
            subject: category.name,
            icon: category.acf?.icon
        },
        image: imageUrls
    }] as [number,PostCategory]
}

export async function transformWordpressPost(post:  RequiredWordpressPost,categoriesObject: {[p: string]: PostCategory}, getImages:(ids: number) => Promise<string> ): Promise<PostSlideWithoutLength>{
    const acfFields = post.acf  
    const category = categoriesObject[acfFields.tv_settings.category]
    let imageUrl = ""
    if(category?.image != undefined && category.image.length > 0){
        imageUrl = category.image[random(0,category.image.length-1)]
    }

    let postImageUrl =typeof acfFields.tv_settings.images == "string" ? []  : await Promise.all(acfFields.tv_settings.images.map(async image => await getImages(image)))   ?? "" 

  
    return {
        categoryId: acfFields.tv_settings.category ?? -1,
        content: acfFields.tv_settings.text,
        title: acfFields.tv_settings.title != "" ? acfFields.tv_settings.title : convert(post.title.rendered),
        postImage: postImageUrl,
        length: acfFields.tv_settings.length,
        categoryImage: imageUrl,
        titleOnlyFirstImage: acfFields.tv_settings.titleOnlyFirstImage,
        imageLength: acfFields.tv_settings.imageLength,
        endDate: acfFields.tv_settings.end_date ? new Date(acfFields.tv_settings.end_date) : undefined
    }
}