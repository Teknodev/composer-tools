import * as React from "react";
import styles from "./image-gallery10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseImageGallery } from "../../EditorComponent";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type CardType = {
    card_subtitle: React.ReactNode;
    card_item_title: React.ReactNode;
    image: string;
    text: string;
    link: string;
    overlay: boolean;
    url: string;
    textUrl: string;
};

type AnimateTexts = {
    animateText: string;
}

class ImageGallery10 extends BaseImageGallery {

    private intervalId: NodeJS.Timeout | null = null;

    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Our Projects",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "We are creative agency that specializes in making customers",
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
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
        this.addProp({
            type: "object",
            key: "animatedText",
            displayer: "Animated Text",
            value: [
                {
                    type: "boolean",
                    key: "showAnimateText",
                    displayer: "Show",
                    value: true,
                },
                {
                    type: "array",
                    key: "animate-texts",
                    displayer: "Texts",
                    value: [
                        {
                            type: "object",
                            key: "animate-text",
                            displayer: "Text",
                            value: [
                                {
                                    type: "string",
                                    key: "animateText",
                                    displayer: "Text",
                                    value: "Feel safe",
                                },
                            ]
                        },
                        {
                            type: "object",
                            key: "animate-text",
                            displayer: "Text",
                            value: [
                                {
                                    type: "string",
                                    key: "animateText",
                                    displayer: "Text",
                                    value: "Passionate",
                                },
                            ]
                        },
                        {
                            type: "object",
                            key: "animate-text",
                            displayer: "Text",
                            value: [
                                {
                                    type: "string",
                                    key: "animateText",
                                    displayer: "Text",
                                    value: "Delighted",
                                },
                            ]
                        }
                    ],
                },
            ],
        });
        this.addProp({
            type: "array",
            key: "card-items",
            displayer: "Gallery",
            value: [
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-16-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-21-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-27-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-18-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-23-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-25-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-6-1000x1000.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-19-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card",
                    value: [
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "card_item_title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Description",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "textUrl",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-22-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "boolean",
                            key: "active",
                            displayer: "Active",
                            value: false,
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "object",
            key: "countSettings",
            displayer: "Count Settings",
            value: [
                {
                    type: "number",
                    key: "itemCount",
                    displayer: "Item Count in a Row",
                    value: 3
                },
            ]
        });

        this.setComponentState("texts", []);
        this.setComponentState("currentIndex", 0);
        this.setComponentState("currentText", "");
    }

    private clearAnimationInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private startAnimationInterval() {
        this.clearAnimationInterval();

        const texts = this.getComponentState("texts") as string[];
        if (!texts || texts.length === 0) return;

        this.intervalId = setInterval(() => {
            const currentIndex = this.getComponentState("currentIndex") as number;
            const nextIndex = (currentIndex + 1) % texts.length;

            this.setComponentState("currentIndex", nextIndex);
            this.setComponentState("currentText", texts[nextIndex]);
        }, 4000);
    }

    componentDidMount() {
        const texts = this.getAnimateTexts();

        this.setComponentState("texts", texts);
        this.setComponentState("currentIndex", 0);
        this.setComponentState("currentText", texts.length > 0 ? texts[0] : "");
        this.startAnimationInterval();
    }

    onComponentDidUpdate() {
        const newTexts = this.getAnimateTexts();
        const currentTexts = this.getComponentState("texts") as string[];

        const toPlain = (list: any[]) => (list || []).map((text: any) => this.castToString(text));
        const textsChanged = JSON.stringify(toPlain(newTexts)) !== JSON.stringify(toPlain(currentTexts));

        if (textsChanged) {
            this.clearAnimationInterval();

            const newCurrentText = newTexts.length > 0 ? newTexts[0] : "";

            this.setComponentState("texts", newTexts);
            this.setComponentState("currentIndex", 0);
            this.setComponentState("currentText", newCurrentText);

            this.startAnimationInterval();
        }
    }

    onComponentWillUnmount() {
        this.clearAnimationInterval();
    }

    static getName(): string {
        return "Image Gallery 10";
    }
    getAnimatedText(): { showAnimateText: boolean; "animate-texts": AnimateTexts[] } {
        return this.castToObject<{ showAnimateText: boolean; "animate-texts": AnimateTexts[] }>("animatedText");
    }
    getAnimateTexts() {
        const items = (this.getAnimatedText()["animate-texts"] || []) as any[];
        return items
            .map((item: any) => (typeof item?.getPropValue === "function" ? item.getPropValue("animateText") : item?.animateText))
            .filter((text: any) => this.castToString(text));
    }
    getCountSettings(): { itemCount: number } {
        return this.castToObject<{ itemCount: number }>("countSettings");
    }

    render() {
        const cardList = this.castToObject<CardType[]>("card-items");
        const title = this.castToString(this.getPropValue("title"));
        const currentText = this.getComponentState("currentText");
        const showAnimateText = this.getAnimatedText().showAnimateText;
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));

        return (
            <Base.Container
                className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(title || this.castToString(this.getPropValue("subtitle")) || description || hasButtons) && (
                        <Base.VerticalContent className={this.decorateCSS("header-wrapper")}>
                            {this.castToString(this.getPropValue("subtitle")) && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {title && <Base.SectionTitle className={this.decorateCSS("title-content")}>
                                <div className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </div>
                                {showAnimateText && currentText && (
                                    <div className={this.decorateCSS("animated-text")}>
                                        {currentText}
                                    </div>
                                )}
                            </Base.SectionTitle>}
                            {description && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                            {hasButtons && (
                                <div className={this.decorateCSS("button-container")}>
                                    {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                                        <ComposerLink key={index} path={button.url}>
                                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                            </Base.Button>
                                        </ComposerLink>
                                    ))}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    {
                        cardList.length > 0 && (
                            <Base.ListGrid
                                className={this.decorateCSS("grid")}
                                gridCount={{ pc: this.getCountSettings().itemCount, tablet: 3 }}>
                                {cardList.map((cardItem: any, index: number) => (
                                    <ComposerLink path={cardItem.url} isFullWidth={true}>
                                        <div className={this.decorateCSS("item-box")} key={index}>
                                            <div className={this.decorateCSS("item-container")}>
                                                <div className={this.decorateCSS("background-media")}>
                                                    <div className={this.decorateCSS("background-media-inner")}>
                                                        <Base.Media value={cardItem.image} className={this.decorateCSS("background-media-element")} />
                                                    </div>
                                                    {cardItem.overlay && <div className={this.decorateCSS("media-overlay")} />}
                                                </div>
                                                <div className={`${this.decorateCSS("overlay-content")} ${cardItem.active ? this.decorateCSS("active") : ""}`}>
                                                    {this.castToString(cardItem.card_subtitle) && (
                                                        <Base.P className={this.decorateCSS("card-subtitle")}>
                                                            {cardItem.card_subtitle}
                                                        </Base.P>
                                                    )}
                                                    {this.castToString(cardItem.card_item_title) && (
                                                        <Base.H6
                                                            className={this.decorateCSS("card-title")}>
                                                            {cardItem.card_item_title}
                                                        </Base.H6>
                                                    )}
                                                    {this.castToString(cardItem.text) && (
                                                        <ComposerLink
                                                            path={cardItem.textUrl}>
                                                            <div className={this.decorateCSS("card-text-wrapper")}>
                                                                <Base.H5
                                                                    className={this.decorateCSS("card-text")}>
                                                                    {cardItem.text}
                                                                </Base.H5>
                                                                <div className={this.decorateCSS("card-text-line")} />
                                                            </div>
                                                        </ComposerLink>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </ComposerLink>
                                ))}
                            </Base.ListGrid>
                        )
                    }
                </Base.MaxContent >
            </Base.Container >
        );
    }
}

export default ImageGallery10;