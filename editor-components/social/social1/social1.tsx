import * as React from "react";
import { BaseSocial, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./social1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type CardItem = {
    items: ItemType[]
}
type ItemType = {
    media: TypeMediaInputValue,
    name: React.JSX.Element,
    text: React.JSX.Element
    icon: TypeMediaInputValue,
    url: string,
}

class Social1 extends BaseSocial {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        })
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Join the community"
        })
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Discover what our community has to say about their BlinkPage experience."
        })
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            value: [
                INPUTS.BUTTON("button", "Button", "GitHub discussions", "", "", "", "Tertiary"),
                INPUTS.BUTTON("button", "Button", "Discord", "", "", "", "Tertiary"),
            ],
        });
        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "array",
                            key: "items",
                            displayer: "Items",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790ceccd61bca002cb54e20?alt=media&timestamp=1742997958593" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Clover Ruth" },
                                        { type: "string", key: "text", displayer: "Text", value: "BlinkPage has completely changed our workflow. The real-time capabilities and seamless integration with our existing stack made it a no-brainer for our team. We've seen a 40% increase in developer productivity since switching over." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790cd32d61bca002cb54d47?alt=media&timestamp=1742997958593" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Sarah Brown" },
                                        { type: "string", key: "text", displayer: "Text", value: "Great experience overall! Highly recommended for scaling startups." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "array",
                            key: "items",
                            displayer: "Items",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6799df51d61bca002cb826eb?alt=media&timestamp=1742997958593" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Jacklyn Mia" },
                                        { type: "string", key: "text", displayer: "Text", value: "The documentation is top-notch and the community is very helpful. I was able to get my MVP up and running in just a few days." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e6c8a3fb049c002cc4b4a4?alt=media" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Lachlan Linnette" },
                                        { type: "string", key: "text", displayer: "Text", value: "Simple, powerful, and effective. The best backend-as-a-service I've used in years. It handles everything from auth to storage with ease." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "array",
                            key: "items",
                            displayer: "Items",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67a9d2166341de002b7b7fd0?alt=media&timestamp=1742997958593" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Jaykyn Kaleigh" },
                                        { type: "string", key: "text", displayer: "Text", value: "Amazing service! It's rare to find a tool that delivers on all its promises so effectively." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a86fb049c002cc41c55?alt=media&timestamp=1742998151797" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Mary Johnson" },
                                        { type: "string", key: "text", displayer: "Text", value: "The transition was smoother than expected. We were worried about data migration but the tools provided made it seamless. Our entire database was migrated in under an hour." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "array",
                            key: "items",
                            displayer: "Items",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a3cfb049c002cc41bc7?alt=media&timestamp=1742998077864" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Kristen Gertie" },
                                        { type: "string", key: "text", displayer: "Text", value: "Excellent platform. Easy to pick up." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e6c925fb049c002cc4b4cb?alt=media" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "McKinney" },
                                        { type: "string", key: "text", displayer: "Text", value: "Highly recommended for any serious project. The tooling is mature, the API is clean, and the overall developer experience is genuinely one of the best I've encountered. We've shipped three major features in the time it would have taken us to set up our old stack." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "array",
                            key: "items",
                            displayer: "Items",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1742998125897" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "James Pearce" },
                                        { type: "string", key: "text", displayer: "Text", value: "I've tried many alternatives, but this one stands out for its performance and reliability. Our site loads 2x faster now." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        { type: "media", key: "media", displayer: "Media", value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e6c969fb049c002cc4b4d7?alt=media" }, additionalParams: { availableTypes: ["image", "icon"] } },
                                        { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "MdNavigateNext" }, additionalParams: { availableTypes: ["icon", "image"] } },
                                        { type: "string", key: "name", displayer: "Name", value: "Olivia Davis" },
                                        { type: "string", key: "text", displayer: "Text", value: "Great support team and very active community. Any issues we had were resolved in minutes." },
                                        { type: "page", key: "url", displayer: "Navigate To", value: "" },
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]

        })
        this.addProp({
            type: "boolean",
            key: "gradient",
            displayer: "Gradient",
            value: true
        })
        this.addProp(INPUTS.SLIDER_SETTINGS("sliderSettings", "Slider Settings", {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 1,
        }));
        this.setComponentState("slider-ref", React.createRef());
    }

    static getName(): string {
        return "Social 1";
    }

    transformSliderValues = (sliderProps: any[]): any => {
        const flatObject: Record<string, any> = {};
        sliderProps.forEach((prop: any) => { flatObject[prop.key] = prop.value; });
        return flatObject;
    };

    render() {
        const sliderSettings = this.transformSliderValues(this.getPropValue("sliderSettings"));
        const sliderRef = this.getComponentState("slider-ref");

        const settings = {
            ...sliderSettings,
            cssEase: "linear",
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        const titleExist = this.castToString(this.getPropValue("title"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const cardItems = this.castToObject<CardItem[]>("cards") || [];
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasValidButtons = buttons?.some((btn) => {
            const textExist = this.castToString(btn.text);
            const iconValue = btn.icon as TypeMediaInputValue | string;
            const iconExist = typeof iconValue === "string" ? iconValue : (iconValue?.name || iconValue?.url);
            return !!(textExist || iconExist);
        });
        const hasAnyHeader = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const allItems: ItemType[] = (cardItems || []).flatMap((card) => card?.items || []);
        const mobileSettings = {
            ...sliderSettings,
            cssEase: "linear",
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "50px",
            responsive: [],
        };

        const renderCardItem = (item: ItemType, index: number) => {
            const nameExist = this.castToString(item.name);
            const textExist = this.castToString(item.text);
            const hasAnyContent = item.url || (item.icon as any) || nameExist || item.media || textExist;
            if (!hasAnyContent) return null;
            return (
                <ComposerLink key={index} path={item.url}>
                    <div className={this.decorateCSS("card-container")}>
                        {(item.icon || item.media || nameExist) && (
                            <div className={this.decorateCSS("card-upper")}>
                                {(item.icon || item.media) && (
                                    <div className={this.decorateCSS("image-icon-container")}>
                                        {item.icon && (
                                            <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                                        )}
                                        {item.media && (
                                            <Base.Media value={item.media} className={`${this.decorateCSS("image")} ${item.media.type === "icon" ? this.decorateCSS("is-icon") : ""}`} />
                                        )}
                                    </div>
                                )}
                                {nameExist && (
                                    <Base.P className={this.decorateCSS("name")}>{item.name}</Base.P>
                                )}
                            </div>
                        )}
                        {textExist && (
                            <Base.P className={this.decorateCSS("comment")}>{item.text}</Base.P>
                        )}
                    </div>
                </ComposerLink>
            );
        };

        return (
            <div className={`${this.decorateCSS("wrapper")} ${!hasAnyHeader && this.decorateCSS("no-header")}`}>
                <Base.Container className={`${this.decorateCSS("container")} ${(cardItems?.length > 0) && this.decorateCSS("container-with-cards")}`}>
                    {hasAnyHeader && (
                        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${this.decorateCSS("alignment-center")}`}>
                            <Base.VerticalContent className={this.decorateCSS("upper-content")}>
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
                                            const iconValue = item.icon as TypeMediaInputValue | string;
                                            const iconExist = typeof iconValue === "string" ? iconValue : (iconValue?.name || iconValue?.url);

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
                                                                    value={typeof iconValue === "string" ? { type: "icon", name: iconValue } : iconValue}
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
                        </Base.MaxContent>
                    )}
                </Base.Container>
                {(cardItems?.length > 0) && (
                    <div className={`${this.decorateCSS("slider-parent")} ${this.decorateCSS("desktop-slider")}`}>
                        <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={sliderRef}>
                            {cardItems.map((item, index: number) => (
                                <div key={index} className={this.decorateCSS("cards")}>
                                    <div className={this.decorateCSS("cards-wrapper")}>
                                        {item.items.map((cardItem: ItemType, i: number) => renderCardItem(cardItem, i))}
                                    </div>
                                </div>
                            ))}
                        </ComposerSlider>
                    </div>
                )}
                {(allItems?.length > 0) && (
                    <div className={`${this.decorateCSS("slider-parent")} ${this.decorateCSS("mobile-slider")}`}>
                        <ComposerSlider {...mobileSettings} className={this.decorateCSS("carousel")}>
                            {allItems.map((item: ItemType, index: number) => (
                                <div key={index} className={this.decorateCSS("cards")}>
                                    <div className={this.decorateCSS("cards-wrapper")}>
                                        {renderCardItem(item, index)}
                                    </div>
                                </div>
                            ))}
                        </ComposerSlider>
                    </div>
                )}
                {this.getPropValue("gradient") && (
                    <div className={this.decorateCSS("gradient")}></div>
                )}
            </div>
        );
    }
}

export default Social1;
