import * as React from "react";
import { BaseContent, BaseList } from "../../EditorComponent";
import styles from "./list10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
    image: string;
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
            key: "title",
            displayer: "Title",
            value: "The Latest Updates News & Blog",
        });
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Discover AI-Enhanced Visual Stories",
        });

        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f2703b007002cc7f55e?alt=media",
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
                            displayer: "Card Url",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f6f03b007002cc7f56e?alt=media",
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
                            displayer: "Card Url",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b351ed03b007002cc7f6d9?alt=media",
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
                            displayer: "Card Url",
                            value: "",
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item count in a row",
            value: 3,
            max: 4,
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

        const isTitleExist = this.castToString(this.getPropValue("title"));
        const isSubtitleExists = this.castToString(this.getPropValue("subtitle"));

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(isSubtitleExists || isTitleExist) && (
                        <div className={`${this.decorateCSS("up-page")} ${styles[Base.getContentAlignment()]} ${styles[Base.getViewType()]}`}>
                            {isTitleExist && (
                                <Base.H1 className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.H1>
                            )}
                            {isSubtitleExists && (
                                <Base.H2 className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.H2>
                            )}
                        </div>
                    )}
                    <Base.ListGrid
                        gridCount={{ pc: this.getPropValue("itemCount"), tablet: 1 }}
                        className={this.decorateCSS("cards-box")}
                    >
                        {cards.map((card: Card, index: number) => {
                            const descExist = this.castToString(card.description);
                            const bottomTextExist = this.castToString(card.bottomText);

                            return (
                                <ComposerLink key={index} path={card.url}>
                                    <div
                                        className={this.decorateCSS("card")}
                                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                                    >
                                        <div className={this.decorateCSS("badge")}>
                                            {card.badge}
                                        </div>
                                        <div className={this.decorateCSS("image-div")}>
                                            {card.image && (
                                                <img
                                                    className={this.decorateCSS("image")}
                                                    src={card.image}
                                                    alt={card.image}
                                                />
                                            )}
                                        </div>
                                        <div className={styles["gap"]}></div>
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
