import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FeatureItem = {
    text: string;
    icon: TypeMediaInputValue;
};

type CardContent = {
    cardSubtitle: string;
    cardTitle: string;
    cardPrice: string;
    cardDescription: string;
    cardButton: INPUTS.CastedButton;
    cardFeatures: FeatureItem[];
};

class PricingTable13 extends BasePricingTable {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Service Licenses",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
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
                        { type: "string", key: "cardPrice", displayer: "Card Price", value: "$7.99" },
                        { type: "string", key: "cardSubtitle", displayer: "Card Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Card Title", value: "Extended License" },
                        { type: "string", key: "cardDescription", displayer: "Card Description", value: "" },
                        {
                            type: "array",
                            key: "cardFeatures",
                            displayer: "Card Features",
                            value: [
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Functionality" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Design" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Limits" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Support" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                            ]
                        },
                        INPUTS.BUTTON("cardButton", "Card Button", "Buy Now", "", null, null, "Primary"),
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        { type: "string", key: "cardPrice", displayer: "Card Price", value: "$3.99" },
                        { type: "string", key: "cardSubtitle", displayer: "Card Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Card Title", value: "Basic License" },
                        { type: "string", key: "cardDescription", displayer: "Card Description", value: "" },
                        {
                            type: "array",
                            key: "cardFeatures",
                            displayer: "Card Features",
                            value: [
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Functionality" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Design" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Limits" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                                {
                                    type: "object", key: "feature-item", displayer: "Feature Item", value: [
                                        { type: "string", key: "text", displayer: "Text", value: "Support" },
                                        {
                                            type: "media",
                                            key: "icon",
                                            displayer: "Icon",
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                            value: {
                                                type: "icon",
                                                name: "GoDotFill",
                                            },
                                        },
                                    ]
                                },
                            ]
                        },
                        INPUTS.BUTTON("cardButton", "Card Button", "Buy Now", "", null, null, "Primary"),
                    ],
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "itemCountInARow",
            displayer: "Item Count in a Row",
            value: 3,
        });
    }

    static getName(): string {
        return "Pricing 13";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));

        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

        const cards = this.castToObject<CardContent[]>("cards");
        const itemCountInARow = this.getPropValue("itemCountInARow") || 3;

        const hasLeftSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid
                        gridCount={{ pc: itemCountInARow, tablet: 3, phone: 1 }}
                        className={this.decorateCSS("cards-grid")}
                    >
                        {hasLeftSection && (
                            <Base.VerticalContent className={this.decorateCSS("left-column")}>
                                {subtitleExist && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                        {this.getPropValue("subtitle")}
                                    </Base.SectionSubTitle>
                                )}
                                {titleExist && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}
                                {descriptionExist && (
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}
                                {hasValidButtons && (
                                    <div className={this.decorateCSS("button-container")}>
                                        {buttons.filter((btn) => this.castToString(btn.text)).map((item: INPUTS.CastedButton, index: number) => (
                                            <ComposerLink key={index} path={this.castToString(item.url)}>
                                                <Base.Button buttonType={this.castToString(item.type)} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                        {item.text}
                                                    </Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        ))}
                                    </div>
                                )}
                            </Base.VerticalContent>
                        )}

                        {cards.map((cardItem, idx) => {
                            if (!cardItem) return null;

                            const cardSubtitleExist = this.castToString(cardItem?.cardSubtitle);
                            const cardTitleExist = this.castToString(cardItem?.cardTitle);
                            const cardPriceExist = this.castToString(cardItem?.cardPrice);
                            const cardDescriptionExist = this.castToString(cardItem?.cardDescription);
                            const cardFeatures = Array.isArray(cardItem?.cardFeatures) ? cardItem.cardFeatures : [];
                            const cardButton = cardItem?.cardButton;
                            const hasValidCardButton = cardButton && this.castToString(cardButton.text);

                            const hasContent = cardSubtitleExist || cardTitleExist || cardPriceExist || cardDescriptionExist || (cardFeatures.length > 0) || hasValidCardButton;

                            return hasContent && (
                                <div key={idx} className={this.decorateCSS("card")}>
                                    <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                        {cardPriceExist && (
                                            <div className={this.decorateCSS("card-price-row")}>
                                                <Base.H2 className={this.decorateCSS("card-price")}>
                                                    {cardItem.cardPrice}
                                                </Base.H2>
                                            </div>
                                        )}
                                        {cardSubtitleExist && (
                                            <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                                {cardItem.cardSubtitle}
                                            </Base.H6>
                                        )}
                                        {cardTitleExist && (
                                            <Base.H5 className={this.decorateCSS("card-title")}>
                                                {cardItem.cardTitle}
                                            </Base.H5>
                                        )}
                                        {cardDescriptionExist && (
                                            <Base.P className={this.decorateCSS("card-description")}>
                                                {cardItem.cardDescription}
                                            </Base.P>
                                        )}
                                        {cardFeatures.length > 0 && (
                                            <div className={this.decorateCSS("card-features")}>
                                                {cardFeatures.map((feature: FeatureItem, fIdx: number) => {
                                                    const featureText = this.castToString(feature?.text);
                                                    if (!featureText) return null;
                                                    return (
                                                        <Base.P
                                                            key={fIdx}
                                                            className={this.decorateCSS("feature-item")}
                                                        >
                                                            {feature.icon && (
                                                                <Base.Media value={feature.icon} className={this.decorateCSS("feature-icon")} />
                                                            )}
                                                            {featureText}
                                                        </Base.P>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </Base.VerticalContent>
                                    {hasValidCardButton && (
                                        <div className={this.decorateCSS("card-button-wrapper")}>
                                            <ComposerLink path={this.castToString(cardButton.url)} className={this.decorateCSS("card-button-link")}>
                                                <Base.Button
                                                    buttonType={this.castToString(cardButton.type)}
                                                    className={this.decorateCSS("card-button")}
                                                >
                                                    <Base.P className={this.decorateCSS("card-button-text")}>
                                                        {this.castToString(cardButton.text)}
                                                    </Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default PricingTable13;