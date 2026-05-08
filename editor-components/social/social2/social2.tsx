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
                                    availableTypes: ["video"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6d9fb049c002cc73345?alt=media&timestamp=1744369370862",
                                },
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "🍀Acne safe skincare routine with CHANDO Himalaya Toner - Himalayan Essence Toner Essence - Rejuvenation Repairing Essence Cream - Time Frozen Aging Resistance Activating Essence Cream"
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
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
                                    availableTypes: ["video"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f762fb049c002cc73423?alt=media&timestamp=1744369509310",
                                },
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: ""
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
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
                                    availableTypes: ["video"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f93240fb049c002cc77162?alt=media&timestamp=1744384580236",
                                },
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "Skincare Over 40: Achieve Porcelain Skin with This 3-Step Routine ft. Chando Himalaya! Want flawless, porcelain-like skin like the girls on Douyin? While we can’t be them, we can definitely get our skin looking and feeling just as smooth! Thanks to Chando Himalaya and its star ingredient HiMurchaSin, glowing skin is as easy as 1, 2, 3! @chandohimalaya_official #SkincareOver40 #PorcelainSkin #DouyinBeauty #ChandoHimalaya #GlassSkinGoals #AntiAgingRoutine #FlawlessSkin Comment SHOP below to receive a DM with the link to shop this post on my LTK ⬇ https://liketk.it/4UMpx #ltkbeauty #ltkstyletip #ltkover40"
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
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
                                    availableTypes: ["video"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f737fb049c002cc733e0?alt=media&timestamp=1744369466179",
                                },
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "One drop to zap that fatigue from your skin! Try CHANDO's Himalaya 3-step routine and let Himalayan yeast transform you from saggy to sassy! 🍃#chandohimalaya #FindYourBeauty #fallskincare #HiMurchaSin"
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
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
                                    availableTypes: ["video"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6f7fb049c002cc73356?alt=media&timestamp=1744369401737",
                                },
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: "Just tried the CHANDO Himalaya Green Tea Purifying Mask! 🧖‍♀️ It's so relaxing, even your hubby is considering a spa day. Who knew green tea could be this persuasive? #chandohimalaya #FindYourBeauty #fallskincare"
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
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
                                    availableTypes: ["video"],
                                },
                                value: {
                                    type: "video",
                                    url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f931e6fb049c002cc770d6?alt=media&timestamp=1744384488435",
                                },
                            },
                            {
                                type: "string",
                                key: "description",
                                displayer: "Description",
                                value: ""
                            },
                            {
                                type: "boolean",
                                key: "overlay",
                                displayer: "Overlay",
                                value: false
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
                    type: "boolean",
                    key: "videoIframe",
                    displayer: "Video Iframe",
                    value: true
                },
                {
                    type: "icon",
                    key: "playIcon",
                    displayer: "Play Icon",
                    value: "FaPlay"
                },
                {
                    type: "icon",
                    key: "nextArrow",
                    displayer: "Next Arrow",
                    value: "IoIosArrowForward"
                },
                {
                    type: "icon",
                    key: "prevArrow",
                    displayer: "Prev Arrow",
                    value: "IoIosArrowBack"
                },
            ]
        });
        this.addProp({
            type: "object",
            key: "share",
            displayer: "Share",
            value: [
                {
                    type: "icon",
                    key: "closeIcon",
                    displayer: "Close Icon",
                    value: "IoCloseOutline"
                },
                {
                    type: "icon",
                    key: "shareIcon",
                    displayer: "Share Icon",
                    value: "RiShareForwardLine"
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
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        }));

        this.setComponentState("intervalId", 0);
        this.setComponentState("slider-ref", React.createRef());
        this.setComponentState("sliderRefOverlay", React.createRef());
        this.setComponentState("videoActive", false);
        this.setComponentState("selectedVideo", 0);
        this.setComponentState("shareContainerActive", false)
        this.setComponentState("slideToShow", 5);
        this.setComponentState("containerRef", React.createRef())
        this.setComponentState("width", 0);
        this.setComponentState("videoRefs", React.createRef());
        this.getComponentState("videoRefs").current = [];
        this.setComponentState("activeIndexRef", React.createRef());
        this.setComponentState("activeVideoIndex", 0);

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

            let newSlideToShow = 5;
            if (boundingClient.width < 400) {
                newSlideToShow = 1;
            } else if (boundingClient.width < 1000) {
                newSlideToShow = 2;
            }

            this.setComponentState("slideToShow", newSlideToShow);
        });
        this.setComponentState("observer", observer);
        observer.observe(container);


        const sliderItems = this.getPropValue("sliderItems") || [];

        const activeIndexRef = this.getComponentState("activeIndexRef");
        if (activeIndexRef) {
            activeIndexRef.current = -1;
        }

        const interval = setInterval(() => {
            if (!activeIndexRef) return;

            const current = activeIndexRef.current || 0;
            const next = (current + 1) % sliderItems.length;
            activeIndexRef.current = next;

            const sliderRef = this.getComponentState("slider-ref");
            const currentIndex = this.getComponentState("activeVideoIndex") || 0;
            const nextIndex = (currentIndex + 1) % sliderItems.length;
            this.setComponentState("activeVideoIndex", nextIndex);
            sliderRef.current.slickGoTo(Math.max((this.getComponentState("activeVideoIndex") - (this.getComponentState("slideToShow") - 1)), 0));

            setTimeout(() => {
                const nextSlide = document.querySelector(`.slick-slide.slick-active [data-video-index="${next}"]`) as HTMLVideoElement;
                const currentSlide = document.querySelector(`.slick-slide.slick-active [data-video-index="${current}"]`) as HTMLVideoElement;
                if (nextSlide !== null) {
                    nextSlide.play();
                }
                if (currentSlide) {
                    currentSlide.pause();
                    currentSlide.currentTime = 0;
                }
            }, 100);

        }, 5000);

        this.setComponentState("intervalId", interval);
    }



    onComponentWillUnmount() {
        const observer = this.getComponentState("observer");
        if (observer) observer.disconnect();
        const interval = this.getComponentState("intervalId");
        if (interval) {
            clearInterval(interval);
        }
    }
    handleRightArrowClick = () => {
        const sliderRef = this.getComponentState("slider-ref");
        const slider = sliderRef.current;
        const currentSlide = slider.innerSlider.state.currentSlide;
        const totalSlides = slider.innerSlider.props.children.length;
        const slidesToShow = slider.innerSlider.props.slidesToShow;

        if (currentSlide >= totalSlides - slidesToShow) {
            slider.slickGoTo(0);
        } else {
            slider.slickNext();
        }
    };

    handleLeftArrowClick = () => {
        const sliderRef = this.getComponentState("slider-ref");
        const slider = sliderRef.current;
        const currentSlide = slider.innerSlider.state.currentSlide;
        const totalSlides = slider.innerSlider.props.children.length;
        const slidesToShow = slider.innerSlider.props.slidesToShow;

        if (currentSlide === 0) {
            slider.slickGoTo(totalSlides - slidesToShow);
        } else {
            slider.slickPrev();
        }
    };

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
        const sliderItems = this.castToObject<SlideItems[]>("sliderItems") || [];
        const sliderRef = this.getComponentState("slider-ref");
        const selectedIndex = this.getComponentState("selectedVideo") || 0;


        const sliderSettings = this.transformSliderValues(this.getPropValue("sliderSettings"));

        const settings = {
            ...sliderSettings,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
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
        const titleExist = this.castToString(this.getPropValue("title"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasValidButtons = buttons.some((btn) => {
            const textExist = this.castToString(btn.text);
            const iconExist = btn.icon && this.castToString((btn.icon as any).name);
            return !!(textExist || iconExist);
        });

        return (
            <div className={this.decorateCSS("social2-root")}>
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
                                    <div className={this.decorateCSS("button-container")}>
                                        {buttons.map((item: INPUTS.CastedButton, index: number) => {
                                            const textExist = this.castToString(item.text);
                                            const iconExist = item.icon && this.castToString((item.icon as any).name);
                                            if (!textExist && !iconExist) return null;
                                            return (
                                                <div className={this.decorateCSS("button-wrapper")} key={index}>
                                                    <ComposerLink path={item.url}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            {textExist && (
                                                                <div className={this.decorateCSS("button-text")}>
                                                                    {item.text}
                                                                </div>
                                                            )}
                                                            {iconExist && (
                                                                <Base.Icon
                                                                    name={item.icon}
                                                                    propsIcon={{
                                                                        className: this.decorateCSS("button-icon"),
                                                                    }}
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
                                                {item.media?.url && (
                                                    <video
                                                        key={`video-${index}`}
                                                        id={`video-${index}`}
                                                        data-video-index={index}
                                                        muted={true}
                                                        playsInline
                                                        loop
                                                        preload="auto"
                                                        className={this.decorateCSS("video")}
                                                        src={item.media.url}
                                                    />
                                                )}
                                                {item.overlay && (
                                                    <div className={this.decorateCSS("overlay-item")} />
                                                )}
                                                {player.playIcon && (
                                                    <div className={this.decorateCSS("icon-container")} onClick={() => { this.handleVideoPlay(index) }}>
                                                        <Base.Icon name={player.playIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </ComposerSlider>
                                {(player.nextArrow || player.prevArrow) && (
                                    <div className={this.decorateCSS("arrows")}>
                                        {player.nextArrow && (
                                            <Base.Icon name={player.nextArrow} propsIcon={{ className: this.decorateCSS("next-arrow"), onClick: () => { this.handleRightArrowClick() } }} />
                                        )}
                                        {player.prevArrow && (
                                            <Base.Icon name={player.prevArrow} propsIcon={{ className: this.decorateCSS("prev-arrow"), onClick: () => { this.handleLeftArrowClick() } }} />
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </Base.MaxContent>
                    {player.videoIframe && this.getComponentState("videoActive") && sliderItems[selectedIndex] && (
                        <Base.Overlay isVisible={true} className={this.decorateCSS("overlay")} onClick={() => this.handleVideoClose()}>
                            <div className={this.decorateCSS("modal-wrapper")} onClick={(e) => e.stopPropagation()}>
                                <div className={this.decorateCSS("video-container")}>
                                    {sliderItems[selectedIndex].media?.url && (
                                        <video
                                            key={`${sliderItems[selectedIndex].media.url}-${selectedIndex}`}
                                            autoPlay={true}
                                            muted={false}
                                            playsInline
                                            loop
                                            controls
                                            className={this.decorateCSS("selected-video")}
                                            src={sliderItems[selectedIndex].media.url}
                                        />
                                    )}
                                    {this.castToString(sliderItems[selectedIndex].description) && (
                                        <div className={this.decorateCSS("video-text-container")}>
                                            <div className={this.decorateCSS("video-text")}>
                                                {sliderItems[selectedIndex].description}
                                            </div>
                                        </div>
                                    )}
                                    {share.closeIcon && (
                                        <div className={this.decorateCSS("close-icon-container")}>
                                            <Base.Icon name={share.closeIcon} propsIcon={{ className: this.decorateCSS("close-icon"), onClick: () => this.handleVideoClose() }}></Base.Icon>
                                        </div>
                                    )}
                                    {share.shareIcon && (
                                        <div className={this.decorateCSS("share-icon-container")}>
                                            <Base.Icon name={share.shareIcon} propsIcon={{ className: this.decorateCSS("share-icon"), onClick: () => this.handleShareOpen() }}></Base.Icon>
                                        </div>
                                    )}
                                    {(this.castToString(share.shareTitle) || share.closeIcon || (sliderItems[selectedIndex]?.socialIcons?.length > 0)) && (
                                        <div className={`${this.decorateCSS("share-wrapper")} ${this.getComponentState("shareContainerActive") && this.decorateCSS("active")}`}>
                                            <div className={this.decorateCSS("share-popup-container")}>
                                                {(this.castToString(share.shareTitle) || share.closeIcon) && (
                                                    <div className={this.decorateCSS("share-popup-upper")}>
                                                        {this.castToString(share.shareTitle) && (
                                                            <div className={this.decorateCSS("share-popup-title")}>{share.shareTitle}</div>
                                                        )}
                                                        {share.closeIcon && (
                                                            <div className={this.decorateCSS("share-popup-close")} onClick={() => this.handleShareClose()}>
                                                                <Base.Icon name={share.closeIcon} propsIcon={{ className: this.decorateCSS("share-close-icon") }}></Base.Icon>
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
                                    <div className={this.decorateCSS("modal-prev")} onClick={() => this.setComponentState("selectedVideo", (selectedIndex - 1 + sliderItems.length) % sliderItems.length)}>
                                        <Base.Icon name={player.prevArrow} propsIcon={{ className: this.decorateCSS("modal-arrow-icon") }} />
                                    </div>
                                )}
                                {player.nextArrow && (
                                    <div className={this.decorateCSS("modal-next")} onClick={() => this.setComponentState("selectedVideo", (selectedIndex + 1) % sliderItems.length)}>
                                        <Base.Icon name={player.nextArrow} propsIcon={{ className: this.decorateCSS("modal-arrow-icon") }} />
                                    </div>
                                )}
                            </div>
                        </Base.Overlay>
                    )}
                </Base.Container>
                {(this.getComponentState("videoActive") && !player.videoIframe) && sliderItems[selectedIndex] && (
                    <Base.Overlay isVisible={true} className={this.decorateCSS("base-overlay")} onClick={() => this.handleVideoClose()}>
                        <div className={this.decorateCSS("modal-wrapper")} onClick={(e) => e.stopPropagation()}>
                            <div className={this.decorateCSS("video-container")}>
                                {sliderItems[selectedIndex].media?.url && (
                                    <video
                                        key={`${sliderItems[selectedIndex].media.url}-${selectedIndex}`}
                                        autoPlay={true}
                                        muted={false}
                                        playsInline
                                        loop
                                        controls
                                        className={this.decorateCSS("selected-video")}
                                        src={sliderItems[selectedIndex].media.url}
                                    />
                                )}
                                {this.castToString(sliderItems[selectedIndex].description) && (
                                    <div className={this.decorateCSS("video-text-container")}>
                                        <div className={this.decorateCSS("video-text")}>
                                            {sliderItems[selectedIndex].description}
                                        </div>
                                    </div>
                                )}
                                {share.closeIcon && (
                                    <div className={this.decorateCSS("close-icon-container")}>
                                        <Base.Icon name={share.closeIcon} propsIcon={{ className: this.decorateCSS("close-icon"), onClick: () => this.handleVideoClose() }}></Base.Icon>
                                    </div>
                                )}
                                {share.shareIcon && (
                                    <div className={this.decorateCSS("share-icon-container")}>
                                        <Base.Icon name={share.shareIcon} propsIcon={{ className: this.decorateCSS("share-icon"), onClick: () => this.handleShareOpen() }}></Base.Icon>
                                    </div>
                                )}
                                {(this.castToString(share.shareTitle) || share.closeIcon || (sliderItems[selectedIndex]?.socialIcons?.length > 0)) && (
                                    <div className={`${this.decorateCSS("share-wrapper")} ${this.getComponentState("shareContainerActive") && this.decorateCSS("active")}`}>
                                        <div className={this.decorateCSS("share-popup-container")}>
                                            {(this.castToString(share.shareTitle) || share.closeIcon) && (
                                                <div className={this.decorateCSS("share-popup-upper")}>
                                                    {this.castToString(share.shareTitle) && (
                                                        <div className={this.decorateCSS("share-popup-title")}>{share.shareTitle}</div>
                                                    )}
                                                    {share.closeIcon && (
                                                        <div className={this.decorateCSS("share-popup-close")} onClick={() => this.handleShareClose()}>
                                                            <Base.Icon name={share.closeIcon} propsIcon={{ className: this.decorateCSS("share-close-icon") }}></Base.Icon>
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
                                <div className={this.decorateCSS("modal-prev")} onClick={() => this.setComponentState("selectedVideo", (selectedIndex - 1 + sliderItems.length) % sliderItems.length)}>
                                    <Base.Icon name={player.prevArrow} propsIcon={{ className: this.decorateCSS("modal-arrow-icon") }} />
                                </div>
                            )}
                            {player.nextArrow && (
                                <div className={this.decorateCSS("modal-next")} onClick={() => this.setComponentState("selectedVideo", (selectedIndex + 1) % sliderItems.length)}>
                                    <Base.Icon name={player.nextArrow} propsIcon={{ className: this.decorateCSS("modal-arrow-icon") }} />
                                </div>
                            )}
                        </div>
                    </Base.Overlay>
                )}
            </div>
        );
    }
}

export default Social2;
