import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list9.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
    icon: string;
    image: string;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

class List9 extends BaseList {
    constructor(props?: any) {
        super(props, styles);
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
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "LiaBicycleSolid",
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
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a5?alt=media&timestamp=1719561551671",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "FaDog",
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
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a4?alt=media&timestamp=1719561551671",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "FaHtml5",
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
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a3?alt=media&timestamp=1719561551671",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "RiPaintBrushFill",
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
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b814bd2970002c6285a6?alt=media&timestamp=1719561551671",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item count in a row",
            value: 4,
            max: 4,
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
        return (
            <Base.Container isFull={true} className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount") }}
                        className={this.decorateCSS("grid-container")}
                    >
                        {this.castToObject<Card[]>("cards").map(
                            (card: Card, indexCard: number) => (
                                <div
                                    key={indexCard}
                                    className={this.decorateCSS("card")}
                                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                                >
                                    <div className={this.decorateCSS("image-container")}>
                                        {card.image && (
                                            <img
                                                className={this.decorateCSS("image")}
                                                src={card.image}
                                                alt={card.image}
                                            />
                                        )}

                                    </div>
                                    <Base.VerticalContent
                                        className={this.decorateCSS("little-container")}
                                    >
                                        {card.icon && (
                                            <ComposerIcon
                                                name={card.icon}
                                                propsIcon={{ className: this.decorateCSS("icon") }}
                                            />
                                        )}
                                        {this.castToString(card.title) && (
                                            <Base.H2 className={this.decorateCSS("title")}>
                                                {card.title}
                                            </Base.H2>
                                        )}
                                        {this.castToString(card.description) && (
                                            <Base.P className={this.decorateCSS("description")}>
                                                {card.description}
                                            </Base.P>
                                        )}
                                    </Base.VerticalContent>
                                </div>
                            )
                        )}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default List9;
