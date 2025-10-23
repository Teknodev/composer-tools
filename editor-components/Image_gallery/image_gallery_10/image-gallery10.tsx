import * as React from "react";
import styles from "./image-gallery10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseImageGallery } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type CardType = {
    title: React.ReactNode;
    image: string;
    text: string;
    link: string;
    cardLink: string;
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
            type: "boolean",
            key: "showAnimateText",
            displayer: "Show Animate Text",
            value: true,
        })
        this.addProp({
            type: "array",
            key: "animate-texts",
            displayer: "Animate Texts",
            value: [
                {
                    type: "object",
                    key: "animate-text",
                    displayer: "Animate Text",
                    value: [
                        {
                            type: "string",
                            key: "animateText",
                            displayer: "Animate Text",
                            value: "feel safe",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "animate-text",
                    displayer: "Animate Text",
                    value: [
                        {
                            type: "string",
                            key: "animateText",
                            displayer: "Animate Text",
                            value: "passionate",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "animate-text",
                    displayer: "Animate Text",
                    value: [
                        {
                            type: "string",
                            key: "animateText",
                            displayer: "Animate Text",
                            value: "delighted",
                        },
                    ]
                }
            ],
        });
        this.addProp({
            type: "array",
            key: "card-items",
            displayer: "Card Items",
            value: [
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-16-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-21-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-27-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-18-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-23-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-25-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-6-1000x1000.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-19-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "page",
                            key: "cardLink",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "Navigate To",
                            value: "",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Background Image",
                            value: {
                                type: "image",
                                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-22-768x768.jpg",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
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
        const animateTexts = this.castToObject<AnimateTexts[]>("animate-texts");
        const texts = animateTexts?.map((item: AnimateTexts) => item.animateText) || [];

        this.setComponentState("texts", texts);
        this.setComponentState("currentIndex", 0);
        this.setComponentState("currentText", texts.length > 0 ? texts[0] : "");
        this.startAnimationInterval();
    }

    onComponentDidUpdate() {
        const animateTexts = this.castToObject<AnimateTexts[]>("animate-texts");
        const newTexts = animateTexts?.map((item: AnimateTexts) => item.animateText) || [];
        const currentTexts = this.getComponentState("texts") as string[];

        const textsChanged = JSON.stringify(newTexts) !== JSON.stringify(currentTexts);

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

    render() {
        const cardList = this.castToObject<CardType[]>("card-items");
        const title = this.castToString(this.getPropValue("title"));
        const currentText = this.getComponentState("currentText");
        const showAnimateText = this.getPropValue("showAnimateText");

        return (
            <Base.Container
                className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(title || this.castToString(this.getPropValue("subtitle"))) && (
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
                                        {this.castToString(currentText)}
                                    </div>
                                )}
                            </Base.SectionTitle>}
                        </Base.VerticalContent>
                    )}
                    {
                        cardList.length > 0 && (
                            <Base.ListGrid
                                className={this.decorateCSS("grid")}
                                gridCount={{ pc: this.getPropValue("itemCount") }}>
                                {cardList.map((cardItem: any, index: number) => (
                                    <ComposerLink path={cardItem.cardLink} isFullWidth={true}>
                                        <div className={this.decorateCSS("item-box")} key={index}>
                                            <div className={this.decorateCSS("item-container")}
                                                style={{ backgroundImage: `url(${cardItem.image.url})` }}>
                                                <div className={this.decorateCSS("overlay-content")}>
                                                    {this.castToString(cardItem.title) && (
                                                        <Base.H4
                                                            className={this.decorateCSS("card-title")}>
                                                            {cardItem.title}
                                                        </Base.H4>
                                                    )}
                                                    {this.castToString(cardItem.text) && (
                                                        <ComposerLink
                                                            path={cardItem.link}>
                                                            <Base.H3
                                                                className={this.decorateCSS("card-text")}>
                                                                {cardItem.text}
                                                            </Base.H3>
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