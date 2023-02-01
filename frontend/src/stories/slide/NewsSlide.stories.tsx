import {NewsSlide, NewsSlideProps} from "../../component/slides/NewsSlide";
import {StoryObj} from "@storybook/react";
import {Scaler} from "../../component/slideUtilities/scaler";

export default {
    component: NewsSlide,
}



export const Default: StoryObj<NewsSlideProps> = {
    args: {
        title: "This is a title",
        text: "KRIMPENERWAARD – Wie wordt de ‘Stem van de Waard’? Na een eerste selectieronde\n" +
            "zijn er 24 kandidaten over. Zij gaan vanaf eind januari de uitdaging aan.\n" +
            "Wekelijks bieden Het Kontakt en RTV Krimpenerwaard een nadere kennismaking met\n" +
            "een aantal deelnemers aan deze talentenjacht.\n" +
            "\n" +
            "Naam: Gera Brand\n" +
            "Leeftijd: 27 jaar\n" +
            "Woonplaats: Streefkerk\n" +
            "Beroep: zelfstandig interieurontwerper\n" +
            "\n" +
            "Gera is sinds een jaar of acht ‘serieus met muziek bezig’: “Zo ben ik sinds een\n" +
            "jaar zangeres van een Rotterdamse rockband, waarmee ik lekker veel mee optreed.”\n" +
            "Zelf luistert ze graag naar artiesten/bands als Anouk, Fleetwood Mac, Pearl Jam,\n" +
            "Dire Straits, Avril Lavigne, Bastille en Bløf.\n" +
            "\n" +
            "Het mooiste concert waar ze ooit bij is geweest was ‘by far’ die van Fleetwood\n" +
            "Mac op Rock Werchter (België): “Ik heb gehuild, gedanst en alles meegezongen.\n" +
            "Toch jammer dat ik nu al weet dat ik het beste concert van mijn leven al heb\n" +
            "meegemaakt.”\n" +
            "\n" +
            "De vlotgebekte Streefkerkse doet mee aan de Stem van de Waard om zichzelf uit te\n" +
            "dagen met een ander genre dan ze normaal zou zingen. “Rock heeft mijn passie,\n" +
            "maar ik wil toch ook wel eens weten of iets anders me ook ligt. Rustige\n" +
            "ingetogen muziek misschien, zoals van Adele. En andere muziekliefhebbers\n" +
            "ontmoeten, daar sta ik ook altijd wel voor open. Vandaar dat ik de knoop heb\n" +
            "doorgehakt en graag meedoe. Ik heb er zin in.”\n" +
            "\n" +
            "Ze heeft zich het zingen zelf aangeleerd. “Ik heb een stuk of vijf zanglessen\n" +
            "gehad, dat was het wel.” Gera heeft verder geen grote dromen als artiest, ofzo:\n" +
            "“Gewoon lekker zo vaak mogelijk op de planken staan met toffe muzikanten en een\n" +
            "publiek dat het naar zijn zin heeft. Daar doe ik het voor.”\n" +
            "\n" +
            "Gera was laatst te gast in de studio van RTV Krimpenerwaard. Daar trad ze op\n" +
            "tijdens de Kerstmarathon. De video kunt u hieronder bekijken.\n" +
            "\n" +
            "Foto’s: Janet de Graas",
        duration: 10,
        backgroundImage: "/watertoren-schoonhoven.png",
        subject: {
            subject: "Nieuws",
            icon: "newspaper",
        }
    },
    argTypes:{
        onCompleted: {action: "completed"}
    },
    decorators: [
        (Story) => <Scaler scale={0.5}><Story/></Scaler>
    ]
}