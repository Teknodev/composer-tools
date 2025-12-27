import * as React from "react";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list9.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Card = {
    icon: TypeMediaInputValue;
    image: TypeMediaInputValue;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

class List9 extends BaseList {
    constructor(props?: any) {
        super(props, styles);
        
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Smart solutions",
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "What we offer",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
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
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "LiaBicycleSolid",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "CREATE AMAZING DESING WITH MINT THEME",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a5?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaDog",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "WE CRAFT BEAUTIFUL & AWESOME THEMES",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a4?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "FaHtml5",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "READY TO START YOUR NEXT WEB PROJECT NOW?",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a3?alt=media&timestamp=1719561551671",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            value: {
                                type: "icon",
                                name: "RiPaintBrushFill",
                            },
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "WE BELIEVE IN THE POWER OF GREAT DESIGN",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "Creating a higher spacing for people through a unique campaigns.",
                        },
                        {
                            type: "media",
                            key: "image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a6?alt=media&timestamp=1719561551671",
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
            value: 4,
            max: 4,
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1"],
            additionalParams: {
                selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
            }
        });
    }

    static getName(): string {
        return "List 9";
    }

    render() {
        const cards = this.castToObject<Card[]>("cards");
        const title = this.getPropValue("title");
        const subtitle = this.getPropValue("subtitle");
        const description = this.getPropValue("description");
        const imageOverlay = this.getPropValue("overlay");
        
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header")}>
                        {this.castToString(subtitle) && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {subtitle}
                            </Base.SectionSubTitle>
                        )}
                        {this.castToString(title) && (
                            <Base.SectionTitle className={this.decorateCSS("header-title")}>
                                {title}
                            </Base.SectionTitle>
                        )}
                        {this.castToString(description) && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>
                    
                </Base.MaxContent>
                <Base.ListGrid
                    gridCount={{ pc: this.getPropValue("itemCount"), tablet: 4, phone: 1 }}
                    className={this.decorateCSS("grid-container")}
                >
                    {cards.map(
                        (card: Card, indexCard: number) => (
                            <div
                                key={indexCard}
                                className={this.decorateCSS("card")}
                                data-animation={this.getPropValue("hoverAnimation").join(" ")}
                                tabIndex={0}
                            >
                                <div className={this.decorateCSS("image-container")}>
                                    {card.image && (
                                        <Base.Media
                                            className={`${this.decorateCSS("image")} ${this.decorateCSS("media-el")}`}
                                            value={card.image}
                                        />
                                    )}
                                    {imageOverlay && (
                                        <div className={this.decorateCSS("overlay")} />
                                    )}
                                </div>
                                <Base.VerticalContent
                                    className={this.decorateCSS("card-content")}
                                >
                                    {card.icon && (
                                        <Base.Media
                                            value={card.icon}
                                            className={`${this.decorateCSS("icon")} ${this.decorateCSS("media-el")}`}
                                        />
                                    )}
                                    {this.castToString(card.title) && (
                                        <Base.H4 className={this.decorateCSS("card-title")}>
                                            {card.title}
                                        </Base.H4>
                                    )}
                                        <Base.SectionDescription className={this.decorateCSS("card-description")}>
                                            {card.description}
                                        </Base.SectionDescription>
                                </Base.VerticalContent>
                            </div>
                        )
                    )}
                </Base.ListGrid>
            </Base.Container>
        );
    }
}

export default List9;
