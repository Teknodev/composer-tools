import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature49.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
    title: string;
    icon: TypeMediaInputValue;
    description: string;
    button?: ButtonTypeObj
}
type ButtonTypeObj = {
    text: string;
    url: string;
    type: TypeButton;
}

class Feature49 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        })
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Services We Provide",
        })
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts.",
        })
        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [{
                type: "object",
                key: "card",
                displayer: "Card",
                value: [
                    {
                        type: "media",
                        key: "icon",
                        displayer: "Icon",
                        additionalParams: {
                            availableTypes: ["icon", "image"]
                        },
                        value: {
                            type: "icon",
                            name: "FaCode"
                        },
                    },
                    {
                        type: "string",
                        key: "title",
                        displayer: "Title",
                        value: "Web Development",
                    },
                    {
                        type: "string",
                        key: "description",
                        displayer: "Description",
                        value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                    },
                    INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
                ]
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
                        additionalParams: {
                            availableTypes: ["icon", "image"]
                        },
                        value: {
                            type: "icon",
                            name: "FaBullhorn"
                        }
                    },
                    {
                        type: "string",
                        key: "title",
                        displayer: "Title",
                        value: "Digital Marketing",
                    },
                    {
                        type: "string",
                        key: "description",
                        displayer: "Description",
                        value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
                    },
                    INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
                ]
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
                        additionalParams: {
                            availableTypes: ["icon", "image"]
                        },
                        value: {
                            type: "icon",
                            name: "FaSearch"
                        }
                    },
                    {
                        type: "string",
                        key: "title",
                        displayer: "Title",
                        value: "Search Engine Optimization"
                    },
                    {
                        type: "string",
                        key: "description",
                        displayer: "Description",
                        value: "Completely iterate covalent strategic theme areas via accurate e-markets."
                    },
                    INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
                ]
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
                        additionalParams: {
                            availableTypes: ["icon", "image"]
                        },
                        value: {
                            type: "icon",
                            name: "AiFillLike"
                        }
                    },
                    {
                        type: "string",
                        key: "title",
                        displayer: "Title",
                        value: "Social Media Marketing"
                    },
                    {
                        type: "string",
                        key: "description",
                        displayer: "Description",
                        value: "Completely iterate covalent strategic theme areas via accurate e-markets."
                    },
                    INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
                ]
            }
            ],
        })


        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
        });


        this.addProp({
            type: "boolean",
            key: "iconBackground",
            displayer: "Icon Background",
            additionalParams: {
                availableTypes: ["icon", "image"]
            },
            value: true,
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        })
    }


    static getName(): string {
        return "Feature 49";
    }

    render() {

        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons");
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const itemCount = this.getPropValue("itemCount");
        const hasTextContent = subtitle || title || description;
        const hasContent = hasTextContent || (buttons && buttons.length > 0);
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={`${this.decorateCSS("max-content")} ${!hasTextContent ? this.decorateCSS("no-text-content") : ""}`}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("text-content")}>
                            {subtitle && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {title && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                            {description && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                        </Base.VerticalContent>
                    )}
                    {cards?.length > 0 && (
                        <Base.ListGrid className={this.decorateCSS("cards-container")} gridCount={{ pc: itemCount || 4, tablet: 2, phone: 1 }}>
                            {cards.map((card: Card, index: number) => {
                                const titleExist = !!this.castToString(card.title);
                                const descExist = !!this.castToString(card.description);
                                const iconExist = !!card.icon;
                                const iconBackground = this.getPropValue("iconBackground");
                                const buttonExist = card.button && this.castToString(card.button.text);
                                const onlyButton = !iconExist && !titleExist && !descExist && buttonExist;
                                return (iconExist || titleExist || descExist || buttonExist) && (
                                    <div key={index} className={`${this.decorateCSS("card")} ${onlyButton ? this.decorateCSS("only-button") : ""}`}>
                                        {iconExist && (
                                        <div className={`${this.decorateCSS("icon-container")} ${iconBackground ? this.decorateCSS("with-background") : this.decorateCSS("no-background")}`}>
                                            <Base.Media value={card.icon} className={this.decorateCSS("card-icon")} />
                                        </div>
                                    )}
                                        <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                            {titleExist && (
                                                <Base.H4 className={this.decorateCSS("card-title")}>
                                                    {card.title}
                                                </Base.H4>
                                            )}
                                            {descExist && (
                                                <Base.P className={this.decorateCSS("card-description")}>
                                                    {card.description}
                                                </Base.P>
                                            )}
                                        </Base.VerticalContent>
                                        {card.button && this.castToString(card.button.text) && (
                                            <ComposerLink path={card.button.url}>
                                                <Base.Button buttonType={card.button.type} className={this.decorateCSS("card-button")}>
                                                    <Base.P className={this.decorateCSS("card-button-text")}>{card.button.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        )}
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                    )}
                    {visibleButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {visibleButtons.map((item: ButtonTypeObj, index: number) => {
                                return this.castToString(item.text) && (
                                    <ComposerLink key={`button-${index}`} path={item.url}>
                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container >
        );
    }
}

export default Feature49;