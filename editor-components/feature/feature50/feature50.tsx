import * as React from "react";
import styles from "./feature50.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Card = {
    media: TypeMediaInputValue;
    card_subtitle: Element;
    card_title: Element;
    card_description: Element;
    overlay: boolean;
    card_buttons: {
        type: TypeButton;
        text: Element;
        url: string;
    }[];
};

type PrimaryButton = {
    type: TypeButton;
    text: Element;
    url: string;
}[];

class Feature50 extends BaseFeature {
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
            value: "What We Do"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: ""
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
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "card_title",
                            displayer: "Title",
                            value: "Digital Products"
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "FaRulerCombined"
                            }
                        },
                        {
                            type: "string",
                            key: "card_description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "card_buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
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
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "card_title",
                            displayer: "Title",
                            value: "Interactive Design"
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "FaBullseye"
                            }
                        },
                        {
                            type: "string",
                            key: "card_description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "card_buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
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
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "card_title",
                            displayer: "Title",
                            value: "Design Systems"
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "FaLayerGroup"
                            }
                        },
                        {
                            type: "string",
                            key: "card_description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "card_buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
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
                            type: "string",
                            key: "card_subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "card_title",
                            displayer: "Title",
                            value: "Visual Identity"
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        },
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "FaMagic"
                            }
                        },
                        {
                            type: "string",
                            key: "card_description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "card_buttons",
                            displayer: "Buttons",
                            value: [
                                INPUTS.BUTTON("button", "Button", "", "", null, null, "Link")
                            ]
                        }
                    ]
                }
            ]
        });

        this.addProp({
            type: "number",
            key: "itemsPerRow",
            displayer: "Item Count in a Row",
            value: 2
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
            ]
        });
    }

    static getName(): string {
        return "Feature 50";
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const itemsPerRow = this.getPropValue("itemsPerRow") ?? 2;
        const cards = this.castToObject<Card[]>("cards");
        const primaryButtons = this.castToObject<PrimaryButton>("buttons");

        const hasHeaderContent = this.castToString(subtitle) || this.castToString(title) || this.castToString(description);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasHeaderContent && (
                        <Base.VerticalContent className={`${this.decorateCSS("header-section")}`}>
                            {this.castToString(subtitle) && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {subtitle}
                                </Base.SectionSubTitle>
                            )}
                            
                            {this.castToString(title) && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {title}
                                </Base.SectionTitle>
                            )}
                            
                            {this.castToString(description) && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {description}
                                </Base.SectionDescription>
                            )}
                        </Base.VerticalContent>
                    )}

                    <Base.ListGrid
                        gridCount={{ pc: itemsPerRow, tablet: 2, phone: 1 }}
                        className={this.decorateCSS("cards-grid")}
                    >
                        {cards?.map((card: Card, index: number) => {
                            const isImageMedia = card.media && (card.media as any).type === "image";

                            return (
                            <Base.Card key={index} className={this.decorateCSS("card-shell")}>
                            <Base.VerticalContent className={this.decorateCSS("card")}>
                                <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                    {this.castToString(card.card_subtitle) && (
                                        <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                            {card.card_subtitle}
                                        </Base.H6>
                                    )}

                                    {this.castToString(card.card_title) && (
                                        <Base.H4 className={this.decorateCSS("card-title")}>
                                            {card.card_title}
                                        </Base.H4>
                                    )}

                                    {this.castToString(card.card_description) && (
                                        <Base.P className={this.decorateCSS("card-description")}>
                                            {card.card_description}
                                        </Base.P>
                                    )}

                                    {card.card_buttons && card.card_buttons.length > 0 && (
                                        <div className={this.decorateCSS("card-buttons")}>
                                            {card.card_buttons.map((button, btnIndex) => (
                                                this.castToString(button.text) && (
                                                    <Base.Button
                                                        className={this.decorateCSS("card-button")}
                                                        key={btnIndex}
                                                        buttonType={button.type}
                                                    >
                                                        <ComposerLink path={button.url}>
                                                            <Base.P className={this.decorateCSS("card-button-text")}>
                                                                {button.text}
                                                            </Base.P>
                                                        </ComposerLink>
                                                    </Base.Button>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </Base.VerticalContent>

                                {card.media && (
                                    <div className={this.decorateCSS("media-wrapper")}>
                                        <Base.Media 
                                            value={card.media}
                                            className={`${this.decorateCSS("media")} ${isImageMedia ? this.decorateCSS("media-image") : ""}`}
                                        />
                                        {card.overlay && isImageMedia && (
                                            <div className={this.decorateCSS("overlay")}></div>
                                        )}
                                    </div>
                                )}
                            </Base.VerticalContent>
                            </Base.Card>
                        )})}
                    </Base.ListGrid>

                    {primaryButtons && primaryButtons.filter(b => this.castToString(b.text)).length > 0 && (
                        <div className={this.decorateCSS("buttons-container")}>
                            {primaryButtons.map((button, index) => (
                                this.castToString(button.text) && (
                                    <ComposerLink key={index} path={button.url}>
                                        <Base.Button
                                            buttonType={button.type}
                                            className={this.decorateCSS("button")}
                                        >
                                            <Base.P className={this.decorateCSS("button-text")}>
                                                {button.text}
                                            </Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                )
                            ))}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature50;
