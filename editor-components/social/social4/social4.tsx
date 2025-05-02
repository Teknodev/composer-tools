import { BaseSocial } from "composer-tools/editor-components/EditorComponent";
import styles from "./social4.module.scss"
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import React from "react";
import { FaLessThanEqual } from "react-icons/fa";
import { TbRubberStamp } from "react-icons/tb";

type CardItem ={
    videoUrl: React.JSX.Element,
    imageItems: ImageItem[],
    likeCount: number,
    commentCount: number,
    description: React.JSX.Element,
    url: string,
    videoIconActive: boolean,
    imageIconActive : boolean,
    name: React.JSX.Element,
    porfileImage: string,
    socialIcon: string,
    button: INPUTS.CastedButton;
    date: string;
}
type ImageItem={
    image : string
}

class Social4 extends BaseSocial {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
        type: "string",
        key:"title",
        displayer: "Title",
        value: "Follow us on Instagram"
    })
    this.addProp({
        type: "number",
        key: "initialCount",
        displayer:"Image Count Initial",
        value:10
    })
    this.addProp({
        type: "number",
        key:"rowCount",
        displayer: "Count in a row",
        value:5
    })
    this.addProp({
        type: "number",
        key:"moreCount",
        displayer:"More Image Count",
        value:5
    })
    this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));
    this.addProp({
        type: "array",
        key: "cardItems",
        displayer: "Card Items",
        value:[
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fec5bf76cc002cc3bca5?alt=media&timestamp=1744961224764"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            }
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 3.200
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "There’s something magical about sailing. The sound of waves against the hull, the wind filling the sails, and the horizon stretching endlessly ahead. It’s not just a sport — it’s freedom, adventure, and peace all at once. Whether you're navigating calm waters or riding the ocean breeze, sailing reminds us to slow down, breathe, and embrace the journey — not just the destination. Here’s to salty air, sun-kissed skin, and the endless blue. 🌤️ #SailingLife #OceanVibes #WindAndWaves #FreedomAtSea"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "TheVibeExplorer"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ce95243504dd002c5d0939?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },
            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "12/11/2024",
                additionalParams:{
                    mode: "date",
                }
                                
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801ffc5bf76cc002cc3bd38?alt=media&timestamp=1744961479941"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            }
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 9.450
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 2.530
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Every street has a story. 🚶‍♂️🛣️.  From early morning footsteps to late-night lights, streets carry the rhythm of everyday life. Look closer — there’s magic in the ordinary. #StreetVibes #CityLife #EverydayStories"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "UrbanDreamer_"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67cb0f22fe2b08002d44d96d?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "12/10/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fdd7bf76cc002cc3bbab?alt=media&timestamp=1744960987167"
                            }
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 12.300
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 1.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Architecture is where history meets imagination. 🏛️✈️. Every building tells a story — of culture, time, and vision. Wandering through unfamiliar streets, discovering hidden architectural gems, reminds us why we travel: to be inspired. Sometimes it’s not the destination, but the details that take your breath away. #ArchitecturalWonders #TravelMoments #DesignInspiration #Wanderlust"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "PixelPursuit"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67c94af4fe2b08002d430306?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "12/12/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fe14bf76cc002cc3bbdc?alt=media&timestamp=1744961046618"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fe45bf76cc002cc3bc1c?alt=media&timestamp=1744961097553"
                            },
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 6.900
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 13.100
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "In black and white, the city speaks louder. 🖤🏙️. No colors, no distractions — just shadows, lights, and lines. A different kind of beauty hides in monochrome: raw, timeless, and honest. Every skyline tells a silent story. #BlackAndWhiteCity #UrbanMood #MonochromeMagic #CitySilhouettes"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "GlimmerAndGrit"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67c94b07fe2b08002d43030d?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801ff32bf76cc002cc3bcea?alt=media&timestamp=1744961331979"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 200
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Lost in the magic of Cappadocia. 🎈🧡"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "LunaVibes_"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67aca1d16341de002b7f73d2?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802001fbf76cc002cc3bd55?alt=media&timestamp=1744961569247"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 13.400
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 1.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Flavors of Asia in every bite. 🍜🌶️🥢. From spicy street food to delicate dumplings — Asian cuisine is a journey for the senses. #AsianFoodLovers #TasteOfAsia #FoodieAdventure #SpiceAndSoul"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "WanderingSoul_23"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd84fb049c002cc6ffab?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801ff06bf76cc002cc3bce4?alt=media&timestamp=1744961288526"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 23.980
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 9.400
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "The ocean doesn’t ask for attention — it takes it. 🌊💙. Endless, powerful, and deeply calming. Where the waves speak louder than words.#OceanVibes #SeaLover #BlueEscape #WavesAndWhispers"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "StarryHorizon_"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744799202064"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802012fbf76cc002cc3bdbd?alt=media&timestamp=1744961841826"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020154bf76cc002cc3bdc1?alt=media&timestamp=1744961878598"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802017abf76cc002cc3bdd2?alt=media&timestamp=1744961916904"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 2.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 1.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "In black and white, emotions have no place to hide. 🎞️🖤"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "VelvetEchoes"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd53fb049c002cc6ff96?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020059bf76cc002cc3bd6b?alt=media&timestamp=1744961627435"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 7.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Where the earth whispers and the soul listens. 🌿🍃.  Nature doesn’t rush, yet everything gets done. Breathe in peace, exhale the noise. #NatureLovers #IntoTheWild #GreenEscape #SoulfulScenes"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "DaydreamingVibes"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f3bd46fb049c002cc5ead5?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020086bf76cc002cc3bd6f?alt=media&timestamp=1744961672471"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 4.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "InfiniteWanderer"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a86fb049c002cc41c55?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680201efbf76cc002cc3be21?alt=media&timestamp=1744962032906"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 90.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 4.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Proin vel purus eu enim porttitor dictum a ac orci. Cras a magna eget tortor malesuada scelerisque. Aenean sagittis tortor et purus efficitur, nec venenatis justo gravida. Aliquam eget felis non enim egestas vulputate. Nulla in lorem purus."
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "CosmicChaser_"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a3cfb049c002cc41bc7?alt=media&timestamp=1744960949771"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020242bf76cc002cc3be29?alt=media&timestamp=1744962116673"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802025bbf76cc002cc3be2e?alt=media&timestamp=1744962141453"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 590
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 210
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Curabitur sed nibh sit amet arcu malesuada viverra. Nam ac felis eget ligula volutpat condimentum. Nulla vitae nisi ligula. Suspendisse potenti. Fusce auctor fringilla mi at dictum. Aenean interdum mauris ut felis efficitur, sed congue orci elementum. Donec at neque erat."
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "DreamscapeSeeker"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67a9d2166341de002b7b7fd0?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680202cbbf76cc002cc3be97?alt=media&timestamp=1744962253596"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 100.200
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 23.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Ut consectetur felis vel ante tempus, et vulputate felis fermentum. "
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "CrystalVibes_"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6799df51d61bca002cb826eb?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680203b3bf76cc002cc3bfb6?alt=media&timestamp=1744962485711"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020402bf76cc002cc3c0e2?alt=media&timestamp=1744962564042"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020426bf76cc002cc3c14b?alt=media&timestamp=1744962602646"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020448bf76cc002cc3c19c?alt=media&timestamp=1744962633978"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 71.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 17.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Duis vel lacinia tortor. Nam cursus, dui et posuere venenatis, risus erat vehicula odio, sed blandit enim nisl in felis. "
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "NeonExplorer"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790cd32d61bca002cb54d47?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802049ebf76cc002cc3c251?alt=media&timestamp=1744962720101"
                            },
                        ]
                    },
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 9.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 3.200
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Aenean tincidunt lacus quis lacus tincidunt, sit amet facilisis libero luctus."
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: false
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: true
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "EchoingWaves"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790ceccd61bca002cb54e20?alt=media&timestamp=1744960949770"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
            {
                type: "dateTime",
                key: "date",
                displayer: "Date",
                value: "01/01/2024",
                additionalParams:{
                    mode: "date",
                }
            }
            ]

        },
        ]
    })
    this.addProp({
        type: "icon",
        key: "videoIcon",
        displayer: "Video Icon",
        value: "FaVideo"
    })
    this.addProp({
        type: "icon",
        key: "imageIcon",
        displayer: "Image Icon",
        value: "GrGallery"
    })
    this.addProp({
        type: "icon",
        key: "likeIcon",
        displayer: "Like Icon",
        value:"SlHeart"
    })
    this.addProp({
        type: "string",
        key:"likeText",
        displayer: "Like Text",
        value: "likes"
    })
    this.addProp({
        type: "icon",
        key: "commentIcon",
        displayer: "Comment Icon",
        value:"TfiComment"
    })
    this.addProp({
        type: "icon",
        key: "shareIcon",
        displayer: "Share Icon",
        value:"RiShareForwardLine"
    })
    this.addProp({
        type: "string",
        key:"shareText",
        displayer: "Share Text",
        value: "Share"
    })
    this.addProp({
        type: "icon",
        key: "closeIcon",
        displayer:"Close Icon",
        value: "IoMdClose"
    })
    this.setComponentState("postOverlayActive",false)
    this.setComponentState("selectedPost",0);
    this.setComponentState("moreImages", 0);
  }

  static getName(): string {
    return "Social 4";
  }
  handleClickItem = (index: number) => {
    this.setComponentState("postOverlayActive", true);
    this.setComponentState("selectedPost", index);
  
    const postRefs = this.getComponentState("postRefs");
    const ref = postRefs?.[index];
  
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  handleCloseOverlay = () =>{
    this.setComponentState("postOverlayActive", false);
  }
  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("moreCount"))

};

  
  render() {
    const settingsCard = {
        dots: false,
        infinite: true,        
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    };
    const cardItems = this.castToObject<CardItem[]>("cardItems");
    let postRefs = this.getComponentState("postRefs");
    
    if (!postRefs || postRefs.length !== cardItems.length) {
      postRefs = cardItems.map(() => React.createRef<HTMLDivElement>());
      this.setComponentState("postRefs", postRefs);
    }
    if (this.getComponentState("imageCount") != this.getPropValue("initialCount") + this.getComponentState("moreImages"))
        this.setComponentState("imageCount", this.getPropValue("initialCount") + this.getComponentState("moreImages"));
    
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    return (
        <>
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        {isTitleExist && (
        <div className={this.decorateCSS("title-container")}>
            <Base.H1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H1>
        </div>
        )}

                        <Base.ListGrid gridCount={{ pc: this.getPropValue("rowCount") ,tablet: 3}} className={this.decorateCSS("gallery-grid")}>
                            {cardItems.slice(0, this.getComponentState("imageCount")).map((item: CardItem, index: number) => {
                                return (
                                    <div className={this.decorateCSS("gallery-item")} key={index}>
                                        {(item.imageItems.length>0 && !this.castToString(item.videoUrl) && item.imageItems[0].image) && 
                                        <div className={this.decorateCSS("image-container")}>
                                            <img src={item.imageItems[0].image} alt={item.imageItems[0].image} className={this.decorateCSS("gallery-image")}/>
                                        </div>
                                        }
                                        {this.castToString(item.videoUrl) && (
                                        <div className={this.decorateCSS("video-container")}>
                                            <video src={this.castToString(item.videoUrl)} controls={false} className={this.decorateCSS("gallery-video")}/>
                                        </div>
                                         )}
                                        <div className={this.decorateCSS("icon-container")}>
                                            {(this.getPropValue("videoIcon") && this.castToString(item.videoUrl) && item.videoIconActive) && (<ComposerIcon name={this.getPropValue("videoIcon")} propsIcon={{className:this.decorateCSS("icon")}}></ComposerIcon>)}
                                            {(this.getPropValue("imageIcon") && item.imageItems.length > 1) && (<ComposerIcon name={this.getPropValue("imageIcon")} propsIcon={{className:this.decorateCSS("icon")}}></ComposerIcon>)}
                                        </div>
                                        <div className={this.decorateCSS("overlay")} onClick={() => this.handleClickItem(index)}>
                                        <div className={this.decorateCSS("content-container")}>
                                            {(this.getPropValue("likeIcon") || item.likeCount || this.getPropValue("commentIcon") || item.commentCount) && (
                                            <div className={this.decorateCSS("like-and-commnet-container")}>
                                            {(this.getPropValue("likeIcon") || item.likeCount) && (
                                            <div className={this.decorateCSS("like-container")}>
                                                {this.getPropValue("likeIcon") && (<ComposerIcon name={this.getPropValue("likeIcon")} propsIcon={{className: this.decorateCSS("like-icon")}}></ComposerIcon>)}
                                                {item.likeCount && (<div className={this.decorateCSS("like-number")}>{item.likeCount}</div>)}
                                            </div>
                                            )}
                                            {(this.getPropValue("commentIcon") || item.commentCount) && (
                                            <div className={this.decorateCSS("comment-container")}>
                                                {this.getPropValue("commentIcon") && (<ComposerIcon name={this.getPropValue("commentIcon")} propsIcon={{className: this.decorateCSS("comment-icon")}}></ComposerIcon>)}
                                                {item.commentCount && (<div className={this.decorateCSS("comment-number")}>{item.commentCount}</div>)}
                                            </div>
                                            )}
                                            </div>
                                            )}
                                            {this.castToString(item.description) && (<div className={this.decorateCSS("description")}>{item.description}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                   {(this.getComponentState("imageCount") < cardItems.length) && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                                {button.text}
                            </Base.Button>
                        </div>
                    )}
        </Base.MaxContent>
      </Base.Container>
      <Base.Overlay className ={`${this.decorateCSS("post-overlay")} ${this.getComponentState("postOverlayActive") && this.decorateCSS("active")}`} isVisible={true }>
        {isTitleExist && (
            <div className={this.decorateCSS("mobile-ovelay-title-container")}>
                <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
            </div>
        )}
        {(cardItems.length>0) && (
        <div className={this.decorateCSS("slider-wrapper")}>
        {cardItems.map((item: CardItem , index: number) => {
            return(
                <div className={this.decorateCSS("post-container")}
                key={index}
                ref={postRefs[index]}>
                    <div className={this.decorateCSS("upper-container")}>
                        {(item.porfileImage || this.castToString(item.name)) && (
                            <div className={this.decorateCSS("left-container")}>
                            {item.porfileImage && (
                                <div className={this.decorateCSS("profile-image-container")}>
                                    <ComposerLink path={item.url}>
                                        <img className={this.decorateCSS("profile-image")} src={item.porfileImage}></img>
                                    </ComposerLink>
                                </div>
                            )}
                            {this.castToString(item.name) && (
                                <ComposerLink path={item.url}>
                                    <div className={this.decorateCSS("name")}>{item.name}</div>  
                                </ComposerLink>
                                
                            )}
                            </div>
                        )}
                        <div className={this.decorateCSS("right-container")}>
                            <ComposerLink path={item.button.url}>
                                <div className={this.decorateCSS("button-container")}>
                                    <Base.Button buttonType={item.button.type}>{item.button.text}</Base.Button>
                                </div>
                            </ComposerLink>
                            {item.socialIcon && (
                                <ComposerLink path={item.url}>
                                    <ComposerIcon name={item.socialIcon} propsIcon={{className: this.decorateCSS("socail-icon")}}></ComposerIcon>
                                </ComposerLink>
                            )}
                        </div>
                    </div>
                    {this.castToString(item.videoUrl) && (
                    <div className={this.decorateCSS("post-video-container")}>
                        <video src={this.castToString(item.videoUrl)} controls autoPlay={true} muted className={this.decorateCSS("video")}></video>
                    </div>
                    )}
                    {(item.imageItems.length > 0 && !this.castToString(item.videoUrl)) && (
                        <div className={this.decorateCSS("post-image-container")}>
                        <ComposerSlider {...settingsCard}>
                        {item.imageItems.map((item: ImageItem, index: number) =>{
                            return(
                                <img src={item.image} alt={item.image} className={this.decorateCSS("image")}/>
                            )
                        })
                        }
                        </ComposerSlider>
                        </div>
                    )} 
                    <div className={this.decorateCSS("bottom-container")}>
                        {(item.likeCount || this.castToString(this.getPropValue("likeText")) || this.getPropValue("shareIcon") || this.castToString(this.getPropValue("shareText"))) && (
                        <div className={this.decorateCSS("like-and-share-container")}>
                            {(item.likeCount || this.castToString(this.getPropValue("likeText"))) && (
                            <div className={this.decorateCSS("like-part")}>
                                {item.likeCount && (<div className={this.decorateCSS("like-count")}>{item.likeCount}</div>)}
                                {this.castToString(this.getPropValue("likeText")) && (<div className={this.decorateCSS("like-text")}>{this.getPropValue("likeText")}</div>)}
                            </div>
                            )}
                            {(this.getPropValue("shareIcon") || this.castToString(this.getPropValue("shareText"))) && (
                            <ComposerLink path={item.url}>
                                <div className={this.decorateCSS("share-part")}>
                                {this.getPropValue("shareIcon") && (
                                <div className={this.decorateCSS("share-icon-container")}>
                                    <ComposerIcon name={this.getPropValue("shareIcon")} propsIcon={{className: this.decorateCSS("share-icon")}}></ComposerIcon>
                                </div>
                                )}
                                {this.castToString(this.getPropValue("shareText")) &&(<div className={this.decorateCSS("share-text")}>{this.getPropValue("shareText")}</div>   )}
                                </div> 
                            </ComposerLink>

                            )}
                        </div>
                        )}
                        {(this.castToString(item.name) || this.castToString(item.description)) && (
                        <div className={this.decorateCSS("name-and-description")}>
                            <div className={this.decorateCSS("full-text")}>
                            {this.castToString(item.name) && (<div className={this.decorateCSS("name")}>{item.name} </div>)}
                            {this.castToString(item.description) && (<div className={this.decorateCSS("description")}>{item.description}</div>)}
                            </div>
                        </div>
                        )}
                        {item.date && (
                        <div className={this.decorateCSS("date-container")}>
                            <div className={this.decorateCSS("date")}>{item.date}</div>
                        </div>
                        )}
                    </div>
                </div>   
            )
        })}
        </div>
        )}
        {this.getPropValue("closeIcon") && (
            <div className={this.decorateCSS("icon-container")}>
                <div className={this.decorateCSS("close-icon")}>
                    <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("icon"),onClick: () => this.handleCloseOverlay()}}></ComposerIcon>
                </div>
            </div>
        )}
      </Base.Overlay>
        </>

    );
  }
}

export default Social4;
