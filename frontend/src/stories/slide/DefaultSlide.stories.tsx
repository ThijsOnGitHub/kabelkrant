import {BaseSlide, BaseSlideProps, BaseSlideRef} from "../../component/baseSlides/BaseSlide";
import {Story, StoryFn, StoryObj} from "@storybook/react";
import {TextBlock, TextBlockProps, TextBlockRef} from "../../component/slideBlocks/TextBlock";
import {compile, convert} from "html-to-text";
import {createElement, createRef, useEffect, useState} from "react";
import {
    measureTextHeight,
    paginateByBoundingElement,
    paginateTextByElement,
    paginateTextBySize
} from "../../functions/splitText";
import styles from "../../component/slideBlocks/TextBlock.module.scss";

export default {
    component: BaseSlide
}

export const Default: StoryObj<BaseSlideProps> = {

    args:{
        subject:{
            subject: 'Nu op tv',
            icon: 'tv'
        },
        backgroundImage: '/watertoren-schoonhoven.png',
        percentageDone: 50
    },
    decorators: [
        (Story) =>
            <div style={{zoom: 0.50}}>
                <Story/>
            </div>
    ]
}


export const WithContentText : StoryObj<BaseSlideProps & TextBlockProps> =  {
    render: (args) => {
        return <div style={{zoom:0.5}}>
            <BaseSlide {...args}>
                <TextBlock title={args.title} content={args.content}/>
            </BaseSlide>
        </div>
    },
    args: {
        subject: {
            subject: 'Nu op tv',
            icon: 'tv'
        },
        backgroundImage: '/watertoren-schoonhoven.png',
        percentageDone: 50,
        title: 'De titel',
        content: 'De content'
    }
}

const newText = convert(JSON.parse(`"<p><img decoding=\\"async\\" loading=\\"lazy\\" class=\\"alignnone size-full wp-image-83154\\" src=\\"http://www.rtvkrimpenerwaard.nl/site/wp-content/uploads/2022/12/Kick-Off-Stem-van-de-Krimpenerwaard.jpeg\\" alt=\\"\\" width=\\"1600\\" height=\\"720\\" /></p>\\n<p><strong>KRIMPENERWAARD – Wie wordt de ‘Stem van de Waard’? Na een eerste selectieronde zijn er 24 kandidaten over. Zij gaan vanaf eind januari de uitdaging aan. Wekelijks bieden <em>Het Kontakt </em>en <em>RTV Krimpenerwaard</em> een nadere kennismaking met een aantal deelnemers aan deze talentenjacht.</strong></p>\\n<p><em>Naam: Gera Brand<br />\\nLeeftijd: 27 jaar<br />\\nWoonplaats: Streefkerk<br />\\nBeroep: zelfstandig interieurontwerper</em></p>\\n<p><img decoding=\\"async\\" loading=\\"lazy\\" class=\\"alignnone size-full wp-image-84056\\" src=\\"http://www.rtvkrimpenerwaard.nl/site/wp-content/uploads/2023/01/gera.jpg\\" alt=\\"\\" width=\\"728\\" height=\\"404\\" /></p>\\n<p class=\\"st-swap-parent st-swap--active\\">Gera is sinds een jaar of acht ‘serieus met muziek bezig’: “Zo ben ik sinds een jaar zangeres van een Rotterdamse rockband, waarmee ik lekker veel mee optreed.” Zelf luistert ze graag naar artiesten/bands als Anouk, Fleetwood Mac, Pearl Jam, Dire Straits, Avril Lavigne, Bastille en Bløf.</p>\\n<p>Het mooiste concert waar ze ooit bij is geweest was ‘by far’ die van Fleetwood Mac op Rock Werchter (België): “Ik heb gehuild, gedanst en alles meegezongen. Toch jammer dat ik nu al weet dat ik het beste concert van mijn leven al heb meegemaakt.”</p>\\n<p>De vlotgebekte Streefkerkse doet mee aan de Stem van de Waard om zichzelf uit te dagen met een ander genre dan ze normaal zou zingen. “Rock heeft mijn passie, maar ik wil toch ook wel eens weten of iets anders me ook ligt. Rustige ingetogen muziek misschien, zoals van Adele. En andere muziekliefhebbers ontmoeten, daar sta ik ook altijd wel voor open. Vandaar dat ik de knoop heb doorgehakt en graag meedoe. Ik heb er zin in.”</p>\\n<p>Ze heeft zich het zingen zelf aangeleerd. “Ik heb een stuk of vijf zanglessen gehad, dat was het wel.” Gera heeft verder geen grote dromen als artiest, ofzo: “Gewoon lekker zo vaak mogelijk op de planken staan met toffe muzikanten en een publiek dat het naar zijn zin heeft. Daar doe ik het voor.”</p>\\n<p class=\\"st-swap-parent st-swap--active\\">Gera was laatst te gast in de studio van RTV Krimpenerwaard. Daar trad ze op tijdens de Kerstmarathon. De video kunt u hieronder bekijken.</p>\\n<p><em>Foto&#8217;s: Janet de Graas</em></p>\\n<div class=\\"epyt-video-wrapper\\"><iframe  data-ep-a=\\"bounceIn\\"  style=\\"display: block; margin: 0px auto;\\"  id=\\"_ytid_82523\\"  width=\\"480\\" height=\\"270\\"  data-origwidth=\\"480\\" data-origheight=\\"270\\" data-ep-src=\\"https://www.youtube.com/embed/F1VT23Qza_M?enablejsapi=1&autoplay=0&cc_load_policy=0&cc_lang_pref=&iv_load_policy=1&loop=0&modestbranding=0&rel=0&fs=1&playsinline=1&autohide=2&theme=dark&color=red&controls=1&\\" class=\\"__youtube_prefs__  no-lazyload\\" title=\\"Kerstmarathon 2022 - Stem van de Waard - Gera Brand\\"  allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen data-no-lazy=\\"1\\" data-skipgform_ajax_framebjll=\\"\\"></iframe></div>\\n"`))
    .replaceAll(/\[.*?\]/g, '').trim()
    .replace(/\n\s*\n/g, '\n\n')

export const TextWebsiteMessage : StoryObj<BaseSlideProps & TextBlockProps & {index: number}> =  {
    render: (args) => {
        const textBlockRef = createRef<TextBlockRef>()
        const [content,setContent] = useState<string>('')

        useEffect(() => {
            if(textBlockRef.current?.content) {
                const height = measureTextHeight(args.title ?? '', "1400px", {},styles.title)
                const array = paginateTextBySize(1400, 1020-height,{}, styles.content)(args.content)
                setContent(array[args.index])
            }
        },[textBlockRef])

        return <div style={{zoom:0.5}}>
            <BaseSlide  {...args}>
                <TextBlock ref={textBlockRef} content={content} title={args.title} />
            </BaseSlide>
        </div>
    },
    args: {
        subject: {
            subject: 'Nieuws',
            icon: 'newspaper'
        },
        index: 0,
        backgroundImage: '/watertoren-schoonhoven.png',
        percentageDone:50,
        title: 'Vaccineren tegen zes soorten kanker in Schoonhoven',
        content: newText
    }
}
