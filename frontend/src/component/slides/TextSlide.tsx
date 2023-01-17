import {FC, forwardRef} from "react";
import {BaseSlide, BaseSlideProps} from "../baseSlides/BaseSlide";
import {TextBlock, TextBlockProps, TextBlockRef} from "../slideBlocks/TextBlock";

export type TextSlideProps = Omit<BaseSlideProps,'children'> & TextBlockProps

export type TextSlideRef = TextBlockRef

export const TextSlide = forwardRef<TextSlideRef,TextSlideProps>((props,ref) => {
    return <BaseSlide {...props}>
        <TextBlock ref={ref} {...props}/>
    </BaseSlide>
})