import * as React from "react";
import { BaseSocial, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./social2.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type SlideItems = {
    media: TypeMediaInputValue;
    description: React.JSX.Element
    socialIcons: SocialIcon[]
    overlay: boolean;
}

type SocialIcon = {
    icon: TypeMediaInputValue;
    url: string
}

class Social2 extends BaseSocial {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "SHOP THE FEED"
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: ""
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
            type: "array",
            key: "sliderItems",
            displayer: "Slider Items",
            value: [
                {
                    type: "object",
                    key: "Slider Item",
                    displayer: "Slider Item",
                    value:
                        [
                            {
                                type: "media",
                                key: "media",
                                displayer: "Media",
                                additionalParams: {
                                    availableTypes: ["video", "image"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6d9fb049c002cc73345?alt=media&timestamp=1744369370862",
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "🍀Acne safe skincare routine with CHANDO Himalaya Toner - Himalayan Essence Toner Essence - Rejuvenation Repairing Essence Cream - Time Frozen Aging Resistance Activating Essence Cream"
                            },
                            {
                                type: "array",
                                key: "socialIcons",
                                displayer: "Social Icons",
                                value: [
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "RiFacebookFill"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "ImLinkedin2"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "SiWhatsapp"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "FaTwitter"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                },
                {
                    type: "object",
                    key: "Slider Item",
                    displayer: "Slider Item",
                    value:
                        [
                            {
                                type: "media",
                                key: "media",
                                displayer: "Media",
                                additionalParams: {
                                    availableTypes: ["video", "image"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f762fb049c002cc73423?alt=media&timestamp=1744369509310",
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: ""
                            },
                            {
                                type: "array",
                                key: "socialIcons",
                                displayer: "Social Icons",
                                value: [
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "RiFacebookFill"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "ImLinkedin2"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "SiWhatsapp"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "FaTwitter"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                },
                {
                    type: "object",
                    key: "Slider Item",
                    displayer: "Slider Item",
                    value:
                        [
                            {
                                type: "media",
                                key: "media",
                                displayer: "Media",
                                additionalParams: {
                                    availableTypes: ["video", "image"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f93240fb049c002cc77162?alt=media&timestamp=1744384580236",
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "Skincare Over 40: Achieve Porcelain Skin with This 3-Step Routine ft. Chando Himalaya! Want flawless, porcelain-like skin like the girls on Douyin? While we can’t be them, we can definitely get our skin looking and feeling just as smooth! Thanks to Chando Himalaya and its star ingredient HiMurchaSin, glowing skin is as easy as 1, 2, 3! @chandohimalaya_official #SkincareOver40 #PorcelainSkin #DouyinBeauty #ChandoHimalaya #GlassSkinGoals #AntiAgingRoutine #FlawlessSkin Comment SHOP below to receive a DM with the link to shop this post on my LTK ⬇ https://liketk.it/4UMpx #ltkbeauty #ltkstyletip #ltkover40"
                            },
                            {
                                type: "array",
                                key: "socialIcons",
                                displayer: "Social Icons",
                                value: [
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "RiFacebookFill"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "ImLinkedin2"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "SiWhatsapp"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "FaTwitter"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                },
                {
                    type: "object",
                    key: "Slider Item",
                    displayer: "Slider Item",
                    value:
                        [
                            {
                                type: "media",
                                key: "media",
                                displayer: "Media",
                                additionalParams: {
                                    availableTypes: ["video", "image"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f737fb049c002cc733e0?alt=media&timestamp=1744369466179",
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "One drop to zap that fatigue from your skin! Try CHANDO's Himalaya 3-step routine and let Himalayan yeast transform you from saggy to sassy! 🍃#chandohimalaya #FindYourBeauty #fallskincare #HiMurchaSin"
                            },
                            {
                                type: "array",
                                key: "socialIcons",
                                displayer: "Social Icons",
                                value: [
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "RiFacebookFill"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "ImLinkedin2"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "SiWhatsapp"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "FaTwitter"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                },
                {
                    type: "object",
                    key: "Slider Item",
                    displayer: "Slider Item",
                    value:
                        [
                            {
                                type: "media",
                                key: "media",
                                displayer: "Media",
                                additionalParams: {
                                    availableTypes: ["video", "image"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6f7fb049c002cc73356?alt=media&timestamp=1744369401737",
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "Just tried the CHANDO Himalaya Green Tea Purifying Mask! 🧖‍♀️ It's so relaxing, even your hubby is considering a spa day. Who knew green tea could be this persuasive? #chandohimalaya #FindYourBeauty #fallskincare"
                            },
                            {
                                type: "array",
                                key: "socialIcons",
                                displayer: "Social Icons",
                                value: [
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "RiFacebookFill"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "ImLinkedin2"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "SiWhatsapp"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "FaTwitter"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                },
                {
                    type: "object",
                    key: "Slider Item",
                    displayer: "Slider Item",
                    value:
                        [
                            {
                                type: "media",
                                key: "media",
                                displayer: "Media",
                                additionalParams: {
                                    availableTypes: ["video", "image"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f931e6fb049c002cc770d6?alt=media&timestamp=1744384488435",
                                },
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: ""
                            },
                            {
                                type: "array",
                                key: "socialIcons",
                                displayer: "Social Icons",
                                value: [
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "RiFacebookFill"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            },
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "ImLinkedin2"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "SiWhatsapp"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                    {
                                        type: "object",
                                        key: "socialIcon",
                                        displayer: "Social Icon",
                                        value: [
                                            {
                                                type: "media",
                                                key: "icon",
                                                displayer: "Icon",
                                                value: {
                                                    type: "icon",
                                                    name: "FaTwitter"
                                                },
                                                additionalParams: {
                                                    availableTypes: ["icon", "image"],
                                                }
                                            },
                                            {
                                                type: "page",
                                                key: "url",
                                                displayer: "Navigate To",
                                                value: ""
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "player",
            displayer: "Player",
            value: [
                {
                    type: "media",
                    key: "playIcon",
                    displayer: "Play Icon",
                    value: { type: "icon", name: "FaPlay" },
                    additionalParams: { availableTypes: ["icon", "image"] }
                },
            ]
        });
        this.addProp({
            type: "object",
            key: "share",
            displayer: "Share",
            value: [
                {
                    type: "media",
                    key: "closeIcon",
                    displayer: "Close Icon",
                    value: { type: "icon", name: "IoCloseOutline" },
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
                    key: "shareTitle",
                    displayer: "Share Popup Title",
                    value: "Share"
                },
            ]
        });

        this.addProp(INPUTS.SLIDER_SETTINGS("sliderSettings", "Slider Settings", {
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        }));

        this.setComponentState("slider-ref", React.createRef());
        this.setComponentState("sliderRefOverlay", React.createRef());
        this.setComponentState("videoActive", false);
        this.setComponentState("selectedVideo", 0);
        this.setComponentState("shareContainerActive", false)
        this.setComponentState("containerRef", React.createRef())
        this.setComponentState("width", 0);
        this.setComponentState("videoRefs", React.createRef());
        this.getComponentState("videoRefs").current = [];

    }

    static getName(): string {
        return "Social 2";
    }

    transformSliderValues = (sliderProps: any[]): any => {
        const flatObject: Record<string, any> = {};
        sliderProps.forEach((prop: any) => { flatObject[prop.key] = prop.value; });
        return flatObject;
    };

    onComponentDidMount() {
        const containerRef = this.getComponentState("containerRef");
        const container = containerRef.current;
        if (!container) return;

        const boundingClient = container.getBoundingClientRect();
        this.setComponentState("width", boundingClient.width);

        const observer = new ResizeObserver(() => {
            const boundingClient = container.getBoundingClientRect();
            this.setComponentState("width", boundingClient.width);
        });
        this.setComponentState("observer", observer);
        observer.observe(container);
    }



    onComponentWillUnmount() {
        const observer = this.getComponentState("observer");
        if (observer) observer.disconnect();
    }
    handleVideoPlay = (index: number) => {
        this.setComponentState("selectedVideo", index);
        this.setComponentState("videoActive", true);
    }
    handleVideoClose = () => {
        this.setComponentState("videoActive", false)
    }
    handleShareOpen = () => {
        this.setComponentState("shareContainerActive", true)
    }
    handleShareClose = () => {
        this.setComponentState("shareContainerActive", false)
    }
    handleVideoRefs = (el: any, index: number) => {
        const videoRefs = this.getComponentState("videoRefs");
        if (videoRefs?.current) {
            videoRefs.current[index] = el;
        }
    }
    render() {
        const sliderItems = (this.castToObject<SlideItems[]>("sliderItems") || []).filter(item => item.media?.url);
        const sliderRef = this.getComponentState("slider-ref");
        const selectedIndex = this.getComponentState("selectedVideo") || 0;


        const sliderSettings = this.transformSliderValues(this.getPropValue("sliderSettings"));
        const configuredSlidesToShow = sliderSettings.slidesToShow || 5;
        const effectiveSlidesToShow = Math.min(sliderItems.length, configuredSlidesToShow);

        const settings = {
            ...sliderSettings,
            slidesToShow: effectiveSlidesToShow,
            infinite: sliderItems.length > configuredSlidesToShow,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: Math.min(sliderItems.length, 1),
                        slidesToScroll: 1,
                    },
                },
            ],
        };


        const settingsVideo = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            initialSlide: selectedIndex,

        };
        const player = this.castToObject<any>("player") || {};
        const share = this.castToObject<any>("share") || {};
        const alignment = Base.getContentAlignment();
        const titleExist = this.castToString(this.getPropValue("title"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasValidButtons = buttons.some((btn) => {
            const textExist = this.castToString(btn.text);
            const iconValue = btn.icon as TypeMediaInputValue | string;
            const iconExist = typeof iconValue === "string" ? iconValue : (iconValue?.name || iconValue?.url);
            return !!(textExist || iconExist);
        });

        return (
            <Base.Container className={this.decorateCSS("container")} id={"container"}  >
                    <Base.MaxContent className={this.decorateCSS("max-content")}>
                        {(titleExist || subtitleExist || descriptionExist) && (
                            <Base.VerticalContent className={this.decorateCSS("upper-container")}>
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
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}
                                {hasValidButtons && (
                                    <div className={`${this.decorateCSS("button-container")} ${alignment === "center" ? this.decorateCSS("center") : ""}`}>
                                        {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                            const textExist = this.castToString(item.text);
                                            const iconExist = item.icon && this.castToString((item.icon as any).name);
                                            if (!textExist && !iconExist) return null;
                                            return (
                                                <div className={this.decorateCSS("button-wrapper")} key={index}>
                                                    <ComposerLink path={item.url}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            {textExist && (
                                                                <Base.P className={this.decorateCSS("button-text")}>
                                                                    {item.text}
                                                                </Base.P>
                                                            )}
                                                            {iconExist && (
                                                                <Base.Media
                                                                    value={typeof item.icon === "string" ? { type: "icon", name: item.icon } : item.icon}
                                                                    className={this.decorateCSS("button-icon")}
                                                                />
                                                            )}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </Base.VerticalContent>
                        )}
                        {(sliderItems?.length > 0) && (
                            <div className={this.decorateCSS("slider-container")} ref={this.getComponentState("containerRef")}>
                                <ComposerSlider {...settings} ref={sliderRef} key={this.getComponentState("selectedVideo")} className={this.decorateCSS("slider")}>
                                    {sliderItems.map((item, index: number) => {
                                        return (
                                            <div key={index} className={this.decorateCSS("slider-item")}>
                                                <div className={this.decorateCSS("media-container")}>
                                                    {item.media?.url && (
                                                        <Base.Media value={{ ...item.media, settings: { ...(item.media.settings || {}), controls: false } }} className={this.decorateCSS("video")} />
                                                    )}
                                                    {item.overlay && (
                                                        <div className={this.decorateCSS("overlay-item")} />
                                                    )}
                                                </div>
                                                {player.playIcon && (
                                                    <div className={this.decorateCSS("icon-container")} onClick={() => { this.handleVideoPlay(index) }}>
                                                        <Base.Media value={player.playIcon} className={`${this.decorateCSS("icon")} ${player.playIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </ComposerSlider>
                            </div>
                        )}
                    </Base.MaxContent>
                    {this.getComponentState("videoActive") && sliderItems[selectedIndex] && (
                        <Base.Overlay isVisible={true} className={this.decorateCSS("overlay")} onClick={() => this.handleVideoClose()}>
                                <div className={this.decorateCSS("video-container")} onClick={(e) => e.stopPropagation()}>
                                    {sliderItems[selectedIndex].media?.url && (
                                        <Base.Media value={sliderItems[selectedIndex].media} className={this.decorateCSS("selected-video")} />
                                    )}
                                    {this.castToString(sliderItems[selectedIndex].description) && (
                                        <div className={this.decorateCSS("video-text-container")}>
                                            <Base.P className={this.decorateCSS("video-text")}>
                                                {sliderItems[selectedIndex].description}
                                            </Base.P>
                                        </div>
                                    )}
                                    {share.closeIcon && (
                                        <div className={this.decorateCSS("close-icon-container")} onClick={() => this.handleVideoClose()}>
                                            <Base.Media value={share.closeIcon} className={`${this.decorateCSS("close-icon")} ${share.closeIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                        </div>
                                    )}
                                    {share.shareIcon && (
                                        <div className={this.decorateCSS("share-icon-container")} onClick={() => this.handleShareOpen()}>
                                            <Base.Media value={share.shareIcon} className={`${this.decorateCSS("share-icon")} ${share.shareIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                        </div>
                                    )}
                                    {(this.castToString(share.shareTitle) || share.closeIcon || (sliderItems[selectedIndex]?.socialIcons?.length > 0)) && (
                                        <div className={`${this.decorateCSS("share-wrapper")} ${this.getComponentState("shareContainerActive") && this.decorateCSS("active")}`}>
                                            <div className={this.decorateCSS("share-popup-container")}>
                                                {(this.castToString(share.shareTitle) || share.closeIcon) && (
                                                    <div className={this.decorateCSS("share-popup-upper")}>
                                                        {this.castToString(share.shareTitle) && (
                                                            <Base.P className={this.decorateCSS("share-popup-title")}>{share.shareTitle}</Base.P>
                                                        )}
                                                        {share.closeIcon && (
                                                            <div className={this.decorateCSS("share-popup-close")} onClick={() => this.handleShareClose()}>
                                                                <Base.Media value={share.closeIcon} className={`${this.decorateCSS("share-close-icon")} ${share.closeIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                {sliderItems[selectedIndex]?.socialIcons?.length > 0 &&
                                                    <div className={this.decorateCSS("social-icons-container")}>
                                                        {sliderItems[selectedIndex].socialIcons.map((social, socialIndex) => {
                                                            if (!social.icon) return null;
                                                            return (
                                                                <ComposerLink key={socialIndex} path={social.url}>
                                                                    <div className={this.decorateCSS("social-icons")}>
                                                                        <Base.Media value={social.icon} className={this.decorateCSS("social-icon")} />
                                                                    </div>
                                                                </ComposerLink>
                                                            )
                                                        })}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {player.prevArrow && (
                                    <div className={this.decorateCSS("modal-prev")} onClick={(e) => { e.stopPropagation(); this.setComponentState("selectedVideo", (selectedIndex - 1 + sliderItems.length) % sliderItems.length); }}>
                                        <Base.Media value={player.prevArrow} className={`${this.decorateCSS("modal-arrow-icon")} ${player.prevArrow.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                    </div>
                                )}
                                {player.nextArrow && (
                                    <div className={this.decorateCSS("modal-next")} onClick={(e) => { e.stopPropagation(); this.setComponentState("selectedVideo", (selectedIndex + 1) % sliderItems.length); }}>
                                        <Base.Media value={player.nextArrow} className={`${this.decorateCSS("modal-arrow-icon")} ${player.nextArrow.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                    </div>
                                )}
                        </Base.Overlay>
                    )}
                </Base.Container>
        );
    }
}

export default Social2;
