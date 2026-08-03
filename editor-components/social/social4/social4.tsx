import { BaseSocial, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./social4.module.scss"
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "../../../custom-hooks/input-templates";
import React from "react";
import { FaLessThanEqual } from "react-icons/fa";
import { TbRubberStamp } from "react-icons/tb";

type CardItem = {
    mediaItems: MediaItem[],
    likeCount: React.JSX.Element,
    commentCount: React.JSX.Element,
    description: React.JSX.Element,
    url: string,
    videoIconActive: boolean,
    imageIconActive: boolean,
    name: React.JSX.Element,
    profileMedia: TypeMediaInputValue,
    socialIcon: TypeMediaInputValue,
    button: INPUTS.CastedButton;
    date: React.JSX.Element;
    overlay: boolean;
}

type MediaItem = {
    media: TypeMediaInputValue
}

class Social4 extends BaseSocial {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Follow us on Instagram",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, "", "Primary"),
            ],
        });
        this.addProp({
            type: "object",
            key: "pagination",
            displayer: "Settings",
            value: [
                {
                    type: "number",
                    key: "initialCount",
                    displayer: "Image Count Initial",
                    value: 10
                },
                {
                    type: "number",
                    key: "rowCount",
                    displayer: "Count in a row",
                    value: 5
                },
                {
                    type: "number",
                    key: "moreCount",
                    displayer: "More Image Count",
                    value: 5
                }
            ]
        })
        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));
        this.addProp({
            type: "array",
            key: "cardItems",
            displayer: "Card Items",
            value: [
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "mediaItem",
                                    displayer: "Media Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fec5bf76cc002cc3bca5?alt=media&timestamp=1744961224764" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "7.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "3.200"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "There’s something magical about sailing. The sound of waves against the hull, the wind filling the sails, and the horizon stretching endlessly ahead. It’s not just a sport — it’s freedom, adventure, and peace all at once. Whether you're navigating calm waters or riding the ocean breeze, sailing reminds us to slow down, breathe, and embrace the journey — not just the destination. Here’s to salty air, sun-kissed skin, and the endless blue. 🌤️ #SailingLife #OceanVibes #WindAndWaves #FreedomAtSea"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ce95243504dd002c5d0939?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "12/11/2024",

                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801ffc5bf76cc002cc3bd38?alt=media&timestamp=1744961479941" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "9.450"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "2.530"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Every street has a story. 🚶‍♂️🛣️.  From early morning footsteps to late-night lights, streets carry the rhythm of everyday life. Look closer — there’s magic in the ordinary. #StreetVibes #CityLife #EverydayStories"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67cb0f22fe2b08002d44d96d?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "12/10/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fdd7bf76cc002cc3bbab?alt=media&timestamp=1744960987167" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "12.300"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "1.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Architecture is where history meets imagination. 🏛️✈️. Every building tells a story — of culture, time, and vision. Wandering through unfamiliar streets, discovering hidden architectural gems, reminds us why we travel: to be inspired. Sometimes it’s not the destination, but the details that take your breath away. #ArchitecturalWonders #TravelMoments #DesignInspiration #Wanderlust"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67c94af4fe2b08002d430306?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "12/12/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fe14bf76cc002cc3bbdc?alt=media&timestamp=1744961046618" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801fe45bf76cc002cc3bc1c?alt=media&timestamp=1744961097553" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                }
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "6.900"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "13.100"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "In black and white, the city speaks louder. 🖤🏙️. No colors, no distractions — just shadows, lights, and lines. A different kind of beauty hides in monochrome: raw, timeless, and honest. Every skyline tells a silent story. #BlackAndWhiteCity #UrbanMood #MonochromeMagic #CitySilhouettes"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67c94b07fe2b08002d43030d?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801ff32bf76cc002cc3bcea?alt=media&timestamp=1744961331979" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "200"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Lost in the magic of Cappadocia. 🎈🧡"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67aca1d16341de002b7f73d2?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802001fbf76cc002cc3bd55?alt=media&timestamp=1744961569247" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "13.400"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "1.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Flavors of Asia in every bite. 🍜🌶️🥢. From spicy street food to delicate dumplings — Asian cuisine is a journey for the senses. #AsianFoodLovers #TasteOfAsia #FoodieAdventure #SpiceAndSoul"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd84fb049c002cc6ffab?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6801ff06bf76cc002cc3bce4?alt=media&timestamp=1744961288526" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "23.980"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "9.400"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "The ocean doesn’t ask for attention — it takes it. 🌊💙. Endless, powerful, and deeply calming. Where the waves speak louder than words.#OceanVibes #SeaLover #BlueEscape #WavesAndWhispers"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744799202064" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802012fbf76cc002cc3bdbd?alt=media&timestamp=1744961841826" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020154bf76cc002cc3bdc1?alt=media&timestamp=1744961878598" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802017abf76cc002cc3bdd2?alt=media&timestamp=1744961916904" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "2.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "1.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "In black and white, emotions have no place to hide. 🎞️🖤"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd53fb049c002cc6ff96?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020059bf76cc002cc3bd6b?alt=media&timestamp=1744961627435" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "7.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "7.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Where the earth whispers and the soul listens. 🌿🍃.  Nature doesn’t rush, yet everything gets done. Breathe in peace, exhale the noise. #NatureLovers #IntoTheWild #GreenEscape #SoulfulScenes"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f3bd46fb049c002cc5ead5?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020086bf76cc002cc3bd6f?alt=media&timestamp=1744961672471" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "7.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "4.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a86fb049c002cc41c55?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680201efbf76cc002cc3be21?alt=media&timestamp=1744962032906" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "90.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "4.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Proin vel purus eu enim porttitor dictum a ac orci. Cras a magna eget tortor malesuada scelerisque. Aenean sagittis tortor et purus efficitur, nec venenatis justo gravida. Aliquam eget felis non enim egestas vulputate. Nulla in lorem purus."
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: true
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a3cfb049c002cc41bc7?alt=media&timestamp=1744960949771" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020242bf76cc002cc3be29?alt=media&timestamp=1744962116673" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802025bbf76cc002cc3be2e?alt=media&timestamp=1744962141453" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "590"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "210"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Curabitur sed nibh sit amet arcu malesuada viverra. Nam ac felis eget ligula volutpat condimentum. Nulla vitae nisi ligula. Suspendisse potenti. Fusce auctor fringilla mi at dictum. Aenean interdum mauris ut felis efficitur, sed congue orci elementum. Donec at neque erat."
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67a9d2166341de002b7b7fd0?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680202cbbf76cc002cc3be97?alt=media&timestamp=1744962253596" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "100.200"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "23.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Ut consectetur felis vel ante tempus, et vulputate felis fermentum. "
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6799df51d61bca002cb826eb?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680203b3bf76cc002cc3bfb6?alt=media&timestamp=1744962485711" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020402bf76cc002cc3c0e2?alt=media&timestamp=1744962564042" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020426bf76cc002cc3c14b?alt=media&timestamp=1744962602646" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68020448bf76cc002cc3c19c?alt=media&timestamp=1744962633978" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "71.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "17.500"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Duis vel lacinia tortor. Nam cursus, dui et posuere venenatis, risus erat vehicula odio, sed blandit enim nisl in felis. "
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790cd32d61bca002cb54d47?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
                {
                    type: "object",
                    key: "cardItem",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "array",
                            key: "mediaItems",
                            displayer: "Media Items",
                            value: [
                                {
                                    type: "object",
                                    key: "imageItem",
                                    displayer: "Image Item",
                                    value:
                                        [
                                            {
                                                type: "media",
                                                key: "media",
                                                displayer: "Media",
                                                value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6802049ebf76cc002cc3c251?alt=media&timestamp=1744962720101" },
                                                additionalParams: { availableTypes: ["image", "video"] }
                                            },
                                        ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "likeCount",
                            displayer: "Like Count",
                            value: "9.500"
                        },
                        {
                            type: "string",
                            key: "commentCount",
                            displayer: "Comment Count",
                            value: "3.200"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Aenean tincidunt lacus quis lacus tincidunt, sit amet facilisis libero luctus."
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: ""
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "boolean",
                            key: "videoIconActive",
                            displayer: "Video Icon Active",
                            value: false
                        },
                        {
                            type: "boolean",
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
                            type: "media",
                            key: "profileMedia",
                            displayer: "Media",
                            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790ceccd61bca002cb54e20?alt=media&timestamp=1744960949770" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },
                        {
                            type: "media",
                            key: "socialIcon",
                            displayer: "Social Icon",
                            value: { type: "icon", name: "FaInstagram" },
                            additionalParams: { availableTypes: ["icon", "image"] }
                        },

                        INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link"),
                        {
                            type: "string",
                            key: "date",
                            displayer: "Date",
                            value: "01/01/2024",
                        }
                    ]
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "icons",
            displayer: "Icons",
            value: [
                {
                    type: "media",
                    key: "videoIcon",
                    displayer: "Video Icon",
                    value: { type: "icon", name: "FaVideo" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                },
                {
                    type: "media",
                    key: "imageIcon",
                    displayer: "Image Icon",
                    value: { type: "icon", name: "GrGallery" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                },
                {
                    type: "media",
                    key: "likeIcon",
                    displayer: "Like Icon",
                    value: { type: "icon", name: "SlHeart" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                },
                {
                    type: "string",
                    key: "likeText",
                    displayer: "Like Text",
                    value: "likes"
                },
                {
                    type: "media",
                    key: "commentIcon",
                    displayer: "Comment Icon",
                    value: { type: "icon", name: "TfiComment" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                },
                {
                    type: "media",
                    key: "shareIcon",
                    displayer: "Share Icon",
                    value: { type: "icon", name: "RiShareForwardLine" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                },
                {
                    type: "string",
                    key: "shareText",
                    displayer: "Share Text",
                    value: "Share"
                },
                {
                    type: "media",
                    key: "closeIcon",
                    displayer: "Close Icon",
                    value: { type: "icon", name: "IoMdClose" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                }
            ]
        })
        this.setComponentState("postOverlayActive", false)
        this.setComponentState("selectedPost", 0);
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
    handleCloseOverlay = () => {
        this.setComponentState("postOverlayActive", false);
    }
    handleButtonClick = (e: React.MouseEvent) => {
        const pagination = this.castToObject<any>("pagination");
        const cardItems = this.castToObject<CardItem[]>("cardItems");
        const imageCount = this.getComponentState("imageCount");

        if (imageCount < cardItems.length) {
            if (e && e.preventDefault) e.preventDefault();
            this.setComponentState(
                "moreImages",
                this.getComponentState("moreImages") + pagination.moreCount
            );
        }
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
        const pagination = this.castToObject<any>("pagination");
        const icons = this.castToObject<any>("icons");
        const cardItems = this.castToObject<CardItem[]>("cardItems");
        let postRefs = this.getComponentState("postRefs");

        if (!postRefs || postRefs.length !== cardItems.length) {
            postRefs = cardItems.map(() => React.createRef<HTMLDivElement>());
            this.setComponentState("postRefs", postRefs);
        }
        if (this.getComponentState("imageCount") != pagination.initialCount + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", pagination.initialCount + this.getComponentState("moreImages"));

        const titleExist = this.castToString(this.getPropValue("title"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => {
            const textExist = this.castToString(btn.text);
            const iconExist = btn.icon && this.castToString((btn.icon as any).name);
            return !!(textExist || iconExist);
        });

        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>(
            "button"
        );

        return (
            <Base.Container className={this.decorateCSS("container")}>
                    <Base.MaxContent className={this.decorateCSS("max-content")}>
                        {(titleExist ||
                            subtitleExist ||
                            descriptionExist ||
                            hasValidButtons) && (
                                <Base.VerticalContent
                                    className={this.decorateCSS("upper-container")}
                                >
                                    {subtitleExist && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleExist && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionExist && (
                                        <Base.SectionDescription
                                            className={this.decorateCSS("description")}
                                        >
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                    {hasValidButtons && (
                                        <div className={this.decorateCSS("button-container")}>
                                                    {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                                        const textExist = this.castToString(item.text);
                                                        const iconExist =
                                                            item.icon && this.castToString((item.icon as any).name);
                                                        if (!textExist && !iconExist) return null;
                                                        return (
                                                            <ComposerLink key={index} path={item.url}>
                                                                <Base.Button
                                                                    buttonType={item.type}
                                                                    className={this.decorateCSS("button")}
                                                                >
                                                                    {textExist && (
                                                                        <Base.P className={this.decorateCSS("button-text")}>
                                                                            {item.text}
                                                                        </Base.P>
                                                                    )}
                                                                    {iconExist && (
                                                                        <Base.Media
                                                                            value={item.icon!}
                                                                            className={this.decorateCSS("button-icon")}
                                                                        />
                                                                    )}
                                                                </Base.Button>
                                                            </ComposerLink>
                                                        );
                                                    })}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                            )}

                        <Base.ListGrid gridCount={{ pc: pagination.rowCount, tablet: pagination.rowCount, phone: 2 }} className={this.decorateCSS("gallery-grid")}>
                            {cardItems.slice(0, this.getComponentState("imageCount")).map((item: CardItem, index: number) => {
                                const firstMedia = item.mediaItems[0]?.media;
                                const isVideo = firstMedia?.type === "video" && (firstMedia as any)?.url;
                                const isImage = firstMedia?.type === "image" && (firstMedia as any)?.url;

                                return (
                                    <div className={this.decorateCSS("gallery-item")} key={index}>
                                        {isImage && (
                                            <div className={this.decorateCSS("image-container")}>
                                                <Base.Media value={firstMedia} className={this.decorateCSS("gallery-image")} />
                                                {item.overlay && (
                                                    <div className={this.decorateCSS("overlay-item")} />
                                                )}
                                            </div>
                                        )}
                                        {isVideo && (
                                            <div className={this.decorateCSS("video-container")}>
                                                <Base.Media value={firstMedia} controls={false} className={this.decorateCSS("gallery-video")} />
                                                {item.overlay && (
                                                    <div className={this.decorateCSS("overlay-item")} />
                                                )}
                                            </div>
                                        )}
                                        {((icons.videoIcon && isVideo && item.videoIconActive) || (icons.imageIcon && !isVideo && item.imageIconActive)) && (
                                            <div className={this.decorateCSS("icon-container")}>
                                                {(icons.videoIcon && isVideo && item.videoIconActive) && (<Base.Media value={icons.videoIcon} className={`${this.decorateCSS("indicator-icon")} ${icons.videoIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />)}
                                                {(icons.imageIcon && !isVideo && item.imageIconActive) && (<Base.Media value={icons.imageIcon} className={`${this.decorateCSS("indicator-icon")} ${icons.imageIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />)}
                                            </div>
                                        )}
                                        <div className={this.decorateCSS("overlay")} onClick={() => this.handleClickItem(index)}>
                                            <div className={this.decorateCSS("content-container")}>
                                                {(icons.likeIcon || this.castToString(item.likeCount) || icons.commentIcon || this.castToString(item.commentCount)) && (
                                                    <div className={this.decorateCSS("like-and-commnet-container")}>
                                                        {(icons.likeIcon || this.castToString(item.likeCount)) && (
                                                            <div className={this.decorateCSS("like-container")}>
                                                                {icons.likeIcon && (<Base.Media value={icons.likeIcon} className={`${this.decorateCSS("like-icon")} ${icons.likeIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />)}
                                                                {this.castToString(item.likeCount) && (<Base.P className={this.decorateCSS("like-number")}>{item.likeCount}</Base.P>)}
                                                            </div>
                                                        )}
                                                        {(icons.commentIcon || this.castToString(item.commentCount)) && (
                                                            <div className={this.decorateCSS("comment-container")}>
                                                                {icons.commentIcon && (<Base.Media value={icons.commentIcon} className={`${this.decorateCSS("comment-icon")} ${icons.commentIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />)}
                                                                {this.castToString(item.commentCount) && (<Base.P className={this.decorateCSS("comment-number")}>{item.commentCount}</Base.P>)}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                {this.castToString(item.description) && (<Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                        {this.castToString(button.text) && (
                            <div className={this.decorateCSS("button-wrapper")}>
                                <ComposerLink path={this.getComponentState("imageCount") < cardItems.length ? "" : button.url}>
                                    <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                                        {this.castToString(button.text) && (
                                            <Base.P className={this.decorateCSS("button-text")}>
                                                {button.text}
                                            </Base.P>
                                        )}
                                    </Base.Button>
                                </ComposerLink>
                            </div>
                        )}
                    </Base.MaxContent>
                <Base.Overlay className={`${this.decorateCSS("post-overlay")} ${this.getComponentState("postOverlayActive") && this.decorateCSS("active")}`} isVisible={true}>
                    {titleExist && (
                        <div className={this.decorateCSS("mobile-ovelay-title-container")}>
                            <Base.H5 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H5>
                        </div>
                    )}
                    {(cardItems.length > 0) && (
                        <div className={this.decorateCSS("slider-wrapper")}>
                            {cardItems.map((item: CardItem, index: number) => {
                                const profileMediaValue = typeof item.profileMedia === "string" && item.profileMedia
                                    ? { type: "image", url: item.profileMedia as string }
                                    : item.profileMedia;
                                const firstMedia = item.mediaItems[0]?.media;
                                const isVideo = item.mediaItems.length === 1 && firstMedia?.type === "video" && (firstMedia as any)?.url;

                                return (
                                    <div className={this.decorateCSS("post-container")}
                                        key={index}
                                        ref={postRefs[index]}>
                                        <div className={this.decorateCSS("upper-container")}>
                                            {(profileMediaValue || this.castToString(item.name)) && (
                                                <div className={this.decorateCSS("left-container")}>
                                                    {profileMediaValue && (
                                                        <div className={this.decorateCSS("profile-image-container")}>
                                                            <ComposerLink path={item.url}>
                                                                <Base.Media className={this.decorateCSS("profile-image")} value={profileMediaValue} />
                                                            </ComposerLink>
                                                        </div>
                                                    )}
                                                    {this.castToString(item.name) && (
                                                        <ComposerLink path={item.url}>
                                                            <Base.P className={this.decorateCSS("name")}>{item.name}</Base.P>
                                                        </ComposerLink>

                                                    )}
                                                </div>
                                            )}
                                            {(this.castToString(item.button.text) || item.socialIcon) && (
                                                <div className={this.decorateCSS("right-container")}>
                                                    {this.castToString(item.button.text) && (
                                                        <ComposerLink path={item.button.url}>
                                                            <div className={this.decorateCSS("button-container")}>
                                                                <Base.Button buttonType={item.button.type} className={this.decorateCSS("follow-button")}>{item.button.text}</Base.Button>
                                                            </div>
                                                        </ComposerLink>
                                                    )}
                                                    {item.socialIcon && (
                                                        <ComposerLink path={item.url}>
                                                            <Base.Media value={item.socialIcon} className={`${this.decorateCSS("social-icon")} ${item.socialIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                                        </ComposerLink>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        {isVideo && (
                                            <div className={this.decorateCSS("post-video-container")}>
                                                <Base.Media value={firstMedia} controls autoPlay={true} muted className={this.decorateCSS("video")} />
                                            </div>
                                        )}
                                        {(!isVideo && item.mediaItems.length > 0) && (
                                            <div className={this.decorateCSS("post-image-container")}>
                                                <ComposerSlider {...settingsCard} className={this.decorateCSS("post-slider")}>
                                                    {item.mediaItems.map((mediaItem: MediaItem, mIndex: number) => {
                                                        if (!(mediaItem.media as any)?.url) return null;
                                                        return (
                                                            <Base.Media key={mIndex} value={mediaItem.media} className={this.decorateCSS("image")} />
                                                        )
                                                    })
                                                    }
                                                </ComposerSlider>
                                            </div>
                                        )}
                                        <div className={this.decorateCSS("bottom-container")}>
                                            {(this.castToString(item.likeCount) || this.castToString(icons.likeText) || icons.shareIcon || this.castToString(icons.shareText)) && (
                                                <div className={this.decorateCSS("like-and-share-container")}>
                                                    {(this.castToString(item.likeCount) || this.castToString(icons.likeText)) && (
                                                        <div className={this.decorateCSS("like-part")}>
                                                            {this.castToString(item.likeCount) && (<Base.P className={this.decorateCSS("like-count")}>{item.likeCount}</Base.P>)}
                                                            {this.castToString(icons.likeText) && (<Base.P className={this.decorateCSS("like-text")}>{icons.likeText}</Base.P>)}
                                                        </div>
                                                    )}
                                                    {(icons.shareIcon || this.castToString(icons.shareText)) && (
                                                        <ComposerLink path={item.url}>
                                                            <div className={this.decorateCSS("share-part")}>
                                                                {icons.shareIcon && (
                                                                    <div className={this.decorateCSS("share-icon-container")}>
                                                                        <Base.Media value={icons.shareIcon} className={`${this.decorateCSS("share-icon")} ${icons.shareIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                                                    </div>
                                                                )}
                                                                {this.castToString(icons.shareText) && (<Base.P className={this.decorateCSS("share-text")}>{icons.shareText}</Base.P>)}
                                                            </div>
                                                        </ComposerLink>

                                                    )}
                                                </div>
                                            )}
                                            {(this.castToString(item.name) || this.castToString(item.description)) && (
                                                <div className={this.decorateCSS("name-and-description")}>
                                                    <div className={this.decorateCSS("full-text")}>
                                                        {this.castToString(item.name) && (<Base.P className={this.decorateCSS("name")}>{item.name}</Base.P>)}
                                                        {this.castToString(item.description) && (<Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>)}
                                                    </div>
                                                </div>
                                            )}
                                            {this.castToString(item.date) && (
                                                <div className={this.decorateCSS("date-container")}>
                                                    <Base.P className={this.decorateCSS("date")}>{item.date}</Base.P>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                    {icons.closeIcon && (
                        <div className={this.decorateCSS("icon-container")}>
                            <div className={this.decorateCSS("close-icon")} onClick={() => this.handleCloseOverlay()}>
                                <Base.Media value={icons.closeIcon} className={`${this.decorateCSS("close-icon-item")} ${icons.closeIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                            </div>
                        </div>
                    )}
                </Base.Overlay>
        </Base.Container>
        );
    }
}

export default Social4;
