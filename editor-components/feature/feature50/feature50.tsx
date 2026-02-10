import * as React from "react";
import styles from "./feature50.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Card = {
    media: TypeMediaInputValue;
    subtitle: Element;
    title: Element;
    description: Element;
    buttons: {
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Digital Products"
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
                            key: "description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "buttons",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Interactive Design"
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
                            key: "description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "buttons",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Design Systems"
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
                            key: "description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "buttons",
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
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Visual Identity"
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
                            key: "description",
                            displayer: "Description",
                            value: ""
                        },
                        {
                            type: "array",
                            key: "buttons",
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
        const itemsPerRow = Number(this.getPropValue("itemsPerRow")) || 2;
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
                        gridCount={{ pc: itemsPerRow || 2, tablet: 2, phone: 1 }}
                        className={this.decorateCSS("cards-grid")}
                    >
                        {cards?.map((card: Card, index: number) => (
                            <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                                <div className={this.decorateCSS("card-content")}>
                                    {this.castToString(card.subtitle) && (
                                        <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                            {card.subtitle}
                                        </Base.H6>
                                    )}

                                    {this.castToString(card.title) && (
                                        <Base.H4 className={this.decorateCSS("card-title")}>
                                            {card.title}
                                        </Base.H4>
                                    )}

                                    {this.castToString(card.description) && (
                                        <Base.P className={this.decorateCSS("card-description")}>
                                            {card.description}
                                        </Base.P>
                                    )}

                                    {card.buttons && card.buttons.length > 0 && (
                                        <div className={this.decorateCSS("card-buttons")}>
                                            {card.buttons.map((button, btnIndex) => (
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
                                </div>

                                {card.media && (
                                    <div className={this.decorateCSS("media-wrapper")}>
                                        <Base.Media 
                                            value={card.media}
                                            className={this.decorateCSS("media")}
                                        />
                                    </div>
                                )}
                            </Base.VerticalContent>
                        ))}
                    </Base.ListGrid>

                    {primaryButtons && primaryButtons.filter(b => this.castToString(b.text)).length > 0 && (
                        <div className={this.decorateCSS("primary-buttons-container")}>
                            {primaryButtons.map((button, index) => (
                                this.castToString(button.text) && (
                                    <ComposerLink key={index} path={button.url}>
                                        <Base.Button
                                            buttonType={button.type}
                                            className={this.decorateCSS("primary-button")}
                                        >
                                            <Base.P className={this.decorateCSS("primary-button-text")}>
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
