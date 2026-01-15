import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature41.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

type Card = {
    icon: TypeMediaInputValue;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

class Feature41 extends BaseFeature {
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
            value: "Our Advantages"
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
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "MdRocketLaunch"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Smooth Start"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Distinctively exploit optimal alignments for intuitive bandwidth."
                        }
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
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "FaIdCardAlt"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Card Membership"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Distinctively exploit optimal alignments for intuitive bandwidth."
                        }
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
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "HiCurrencyDollar"
                            }
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Invest Any Amount"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Distinctively exploit optimal alignments for intuitive bandwidth."
                        }
                    ]
                },
            ]
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });
    }

    static getName(): string {
        return "Feature 41";
    }

    render() {
        const cards = this.castToObject<Card[]>("cards");
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const alignment = Base.getContentAlignment();
        const hasContent = subtitle || title || description;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("text-content")} data-alignment={alignment}>
                            {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                            {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                            {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                        </Base.VerticalContent>
                    )}
                    {cards?.length > 0 && (
                        <Base.ListGrid
                            className={this.decorateCSS("card-container")}
                            gridCount={{ pc: this.getPropValue("itemCount") || 3, tablet: 3, phone: 1 }}
                        >
                            {cards.map((card: Card, index: number) => {
                                const titleExist = !!this.castToString(card.title);
                                const descExist = !!this.castToString(card.description);
                                const isImage = card.icon?.type === "image";
                                const itemCount = this.getPropValue("itemCount") || 3;
                                const isLastInRow = (index + 1) % itemCount === 0;

                                return (!titleExist && !descExist && !card.icon) || (
                                    <div
                                        key={index}
                                        className={`${this.decorateCSS("card-wrapper")} ${isLastInRow && this.decorateCSS("last-in-row")}`}
                                    >
                                        {card.icon &&
                                            <Base.Media value={card.icon} className={`${this.decorateCSS("card-icon")} ${isImage && this.decorateCSS("is-image")}`} />
                                        }
                                        {(titleExist || descExist) &&
                                            <div className={this.decorateCSS("card-content")}>
                                                {titleExist && <Base.H4 className={this.decorateCSS("card-title")}>{card.title}</Base.H4>}
                                                {descExist && <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>}
                                            </div>
                                        }
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
            </Base.Container>
        );
    }
}

export default Feature41;