import * as React from "react";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list10.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
            key: "section-subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "The Latest Updates News & Blog",
        });
        this.addProp({
            type: "string",
            key: "sideText",
            displayer: "Text",
            value: "Discover AI-Enhanced Visual Stories",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
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
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f2703b007002cc7f55e?alt=media",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "string",
                            key: "badge",
                            displayer: "Text",
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
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f6f03b007002cc7f56e?alt=media",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "string",
                            key: "badge",
                            displayer: "Text",
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
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b351ed03b007002cc7f6d9?alt=media",
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "string",
                            key: "badge",
                            displayer: "Text",
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
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1"],
            additionalParams: {
                selectItems: ["animate1", "animate2", "animate3", "animate4"]
            }
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "List 10";
    }

    render() {
        const titleExist = this.castToString(this.getPropValue("title"));
        const sectionSubtitleExist = this.castToString(this.getPropValue("section-subtitle"));
        const subtitleExist = this.castToString(this.getPropValue("sideText"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const imageOverlay = this.getPropValue("overlay");
        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const alignment = Base.getContentAlignment();

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${this.decorateCSS(alignment)}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(sectionSubtitleExist || subtitleExist || titleExist || descriptionExist) && (
                        <div className={this.decorateCSS("up-page")}>
                            {sectionSubtitleExist && (
                                <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>
                                    {this.getPropValue("section-subtitle")}
                                </Base.SectionSubTitle>
                            )}

                            <div className={this.decorateCSS("title-row")}>
                                {titleExist && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}
                                {subtitleExist && (
                                    <Base.H5 className={this.decorateCSS("subtitle")}>
                                        {this.getPropValue("sideText")}
                                    </Base.H5>
                                )}
                            </div>
                            {descriptionExist && (
                                <Base.SectionDescription className={this.decorateCSS("up-description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                        </div>
                    )}
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
                                                <span className={this.decorateCSS("badge-text")}>{card.badge}</span>
                                            </Base.P>
                                        )}
                                        <div className={this.decorateCSS("image-container")}>
                                            {imageExist && (
                                                <Base.Media
                                                    className={this.decorateCSS("image")}
                                                    value={card.image}
                                                />
                                            )}
                                            {imageOverlay && (
                                                <div className={this.decorateCSS("overlay")} />
                                            )}
                                        </div>
                                        <div className={this.decorateCSS("image-spacer")} />
                                        {descExist && (
                                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                                {card.description}
                                            </Base.SectionDescription>
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

                    <div className={this.decorateCSS("button-wrapper")}>
                        {buttons.map((item: INPUTS.CastedButton, index: number) => {
                            const buttonText = this.castToString(item.text);
                            const iconExist = item.icon && item.icon.name;
                            if (!buttonText && !iconExist) return null;
                            return (
                                <ComposerLink key={index} path={item.url}>
                                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                        {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                        {iconExist && <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />}
                                    </Base.Button>
                                </ComposerLink>
                            );
                        })}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default List10;
