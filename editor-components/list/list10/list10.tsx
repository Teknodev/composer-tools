import * as React from "react";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
    image: TypeMediaInputValue;
    badge: React.JSX.Element;
    description: React.JSX.Element;
    bottomText: React.JSX.Element;
    url: string;
};

class List10 extends BaseList {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Latest updates",
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "The Latest Updates News & Blog",
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
                            key: "image",
                            displayer: "Image",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f2703b007002cc7f55e?alt=media",
                            },
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                        },
                        {
                            type: "string",
                            key: "badge",
                            displayer: "Badge",
                            value: "All News",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Antenna Promises New era For Satellite Communication",
                        },
                        {
                            type: "string",
                            key: "bottomText",
                            displayer: "Bottom Text",
                            value: "March 18,2022",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
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
                            key: "image",
                            displayer: "Image",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f6f03b007002cc7f56e?alt=media",
                            },
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                        },
                        {
                            type: "string",
                            key: "badge",
                            displayer: "Badge",
                            value: "All News",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Antenna Promises New era For Satellite Communication",
                        },
                        {
                            type: "string",
                            key: "bottomText",
                            displayer: "Bottom Text",
                            value: "March 18,2022",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
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
                            key: "image",
                            displayer: "Image",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b351ed03b007002cc7f6d9?alt=media",
                            },
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                        },
                        {
                            type: "string",
                            key: "badge",
                            displayer: "Badge",
                            value: "All News",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Antenna Promises New era For Satellite Communication",
                        },
                        {
                            type: "string",
                            key: "bottomText",
                            displayer: "Bottom Text",
                            value: "March 18,2022",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Navigate To",
                            value: "",
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
                selectItems: ["animate1", "animate2", "animate3", "animate4"]
            }
        });
    }
    static getName(): string {
        return "List 10";
    }

    render() {
        const cards = this.castToObject<Card[]>("cards");
        const title = this.getPropValue("title");
        const subtitle = this.getPropValue("subtitle");
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
                    </Base.VerticalContent>
                    <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount"), tablet: Math.min(3, this.getPropValue("itemCount")) }}
                        className={this.decorateCSS("cards-grid")}
                    >
                        {cards.map((card: Card, index: number) => {
                            const badgeExist = this.castToString(card.badge);
                            const descExist = this.castToString(card.description);
                            const bottomTextExist = this.castToString(card.bottomText);
                            const imageExist = !!card.image;
                            if (!badgeExist && !descExist && !bottomTextExist && !imageExist) return null;

                            return (
                                <ComposerLink key={index} path={card.url}>
                                    <div
                                        className={this.decorateCSS("card")}
                                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                                    >
                                        {badgeExist && (
                                            <Base.P className={this.decorateCSS("badge")}>
                                                {card.badge}
                                            </Base.P>
                                        )}
                                        <div className={this.decorateCSS("image-container")}>
                                            {card.image && (
                                                <Base.Media
                                                    className={this.decorateCSS("image")}
                                                    value={card.image}
                                                />
                                            )}
                                            {imageOverlay && (
                                                <div className={this.decorateCSS("overlay")} />
                                            )}
                                        </div>
                                        <div className={this.decorateCSS("image-spacer")}></div>
                                        {descExist && (
                                            <Base.H3 className={this.decorateCSS("description")}>
                                                {card.description}
                                            </Base.H3>
                                        )}
                                        {bottomTextExist && (
                                            <Base.P className={this.decorateCSS("bottom-text")}>
                                                {card.bottomText}
                                            </Base.P>
                                        )}
                                    </div>
                                </ComposerLink>
                            );
                        })}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default List10;
