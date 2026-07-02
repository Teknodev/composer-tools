import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./pricing-table16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardFeatureItem = {
    text: React.JSX.Element;
    icon: TypeMediaInputValue;
};

type CardItem = {
    cardSubtitle: React.JSX.Element;
    cardTitle: React.JSX.Element;
    cardDescription: React.JSX.Element;
    cardPrice: React.JSX.Element;
    cardDuration: React.JSX.Element;
    cardInfo: React.JSX.Element;
    cardFeature: CardFeatureItem[];
    button: INPUTS.CastedButton;
};

type BottomCardItem = {
    bottomIcon: TypeMediaInputValue;
    bottomSubtitle: React.JSX.Element;
    bottomTitle: React.JSX.Element;
    bottomDescription: React.JSX.Element;
    button: INPUTS.CastedButton;
};

interface PricingTableSettings {
    itemCount: number;
    bottomItemCount: number;
}

class PricingTable16 extends BasePricingTable {
    constructor(props?: TypeUsableComponentProps[]) {
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
            value: "Select the Best Solution",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });

        this.addProp({
            type: "array",
            key: "card",
            displayer: "Card",
            value: [
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "Standard" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "For websites under <span style='color: var(--composer-primary-color)'>1,000</span> pages" },
                        { type: "string", key: "cardPrice", displayer: "Price", value: "$490" },
                        { type: "string", key: "cardDuration", displayer: "Duration", value: "/year" },
                        { type: "string", key: "cardInfo", displayer: "Info", value: "No credit card required" },
                        {
                            type: "array",
                            key: "cardFeature",
                            displayer: "Feature",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature Item",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "" } },
                                        { type: "string", key: "text", displayer: "Text", value: "" },
                                    ],
                                },
                            ],
                        },
                        INPUTS.BUTTON("button", "Button", "START 7-DAY TRIAL", "", null, null, "Primary"),
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "Large" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "For websites under <span style='color: var(--composer-primary-color)'>10,000</span> pages" },
                        { type: "string", key: "cardPrice", displayer: "Price", value: "$1,490" },
                        { type: "string", key: "cardDuration", displayer: "Duration", value: "/year" },
                        { type: "string", key: "cardInfo", displayer: "Info", value: "No credit card required" },
                        {
                            type: "array",
                            key: "cardFeature",
                            displayer: "Feature",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "" } },
                                        { type: "string", key: "text", displayer: "Text", value: "" },
                                    ],
                                },
                            ],
                        },
                        INPUTS.BUTTON("button", "Button", "START 7-DAY TRIAL", "", null, null, "Primary"),
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "Huge" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "For websites under <span style='color: var(--composer-primary-color)'>100,000</span> pages" },
                        { type: "string", key: "cardPrice", displayer: "Price", value: "$5,490" },
                        { type: "string", key: "cardDuration", displayer: "Duration", value: "/year" },
                        { type: "string", key: "cardInfo", displayer: "Info", value: "No credit card required" },
                        {
                            type: "array",
                            key: "cardFeature",
                            displayer: "Feature",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "" } },
                                        { type: "string", key: "text", displayer: "Text", value: "" },
                                    ],
                                },
                            ],
                        },
                        INPUTS.BUTTON("button", "Button", "START 7-DAY TRIAL", "", null, null, "Primary"),
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "cardTitle", displayer: "Title", value: "Enterprise" },
                        { type: "string", key: "cardDescription", displayer: "Description", value: "" },
                        { type: "string", key: "cardPrice", displayer: "Price", value: "" },
                        { type: "string", key: "cardDuration", displayer: "Duration", value: "" },
                        { type: "string", key: "cardInfo", displayer: "Info", value: "Starts at $990/mo" },
                        {
                            type: "array",
                            key: "cardFeature",
                            displayer: "Feature",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                                        { type: "string", key: "text", displayer: "Text", value: "No page limit" },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                                        { type: "string", key: "text", displayer: "Text", value: "Single-Sign-On" },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                                        { type: "string", key: "text", displayer: "Text", value: "Custom terms" },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Feature",
                                    value: [
                                        { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                                        { type: "string", key: "text", displayer: "Text", value: "Testing account" },
                                    ],
                                },
                            ],
                        },
                        INPUTS.BUTTON("button", "Button", "CONTACT US", "", null, null, "Primary"),
                    ],
                },
            ],
        });

        this.addProp({
            type: "array",
            key: "bottomCard",
            displayer: "Bottom Card",
            value: [
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        { type: "media", key: "bottomIcon", displayer: "Icon", additionalParams: { availableTypes: ["icon", "image"] }, value: { type: "icon", name: "MdOutlineAccountBalanceWallet" } },
                        { type: "string", key: "bottomSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "bottomTitle", displayer: "Title", value: "Receive up to $5,000 in Tax Credit with our company" },
                        { type: "string", key: "bottomDescription", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop." },
                        INPUTS.BUTTON("button", "Button", "LEARN MORE", "", null, null, "Link"),
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        { type: "media", key: "bottomIcon", displayer: "Icon", additionalParams: { availableTypes: ["icon", "image"] }, value: { type: "icon", name: "HiUsers" } },
                        { type: "string", key: "bottomSubtitle", displayer: "Subtitle", value: "" },
                        { type: "string", key: "bottomTitle", displayer: "Title", value: "Our partners get all premium addons for all plans!" },
                        { type: "string", key: "bottomDescription", displayer: "Description", value: "Bring to the table win-win survival strategies to ensure proactive domination." },
                        INPUTS.BUTTON("button", "Button", "LEARN MORE", "", null, null, "Link"),
                    ],
                },
            ],
        });

        this.addProp({
            type: "object",
            key: "settings",
            displayer: "Settings",
            value: [
                {
                    type: "number",
                    key: "itemCount",
                    displayer: "Card Item Count in a Row",
                    value: 4,
                },
                {
                    type: "number",
                    key: "bottomItemCount",
                    displayer: "Bottom Item Count in a Row",
                    value: 2,
                },
            ],
        });
    }

    static getName(): string {
        return "Pricing 16";
    }

    render(): React.ReactNode {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const cards = this.castToObject<CardItem[]>("card");
        const bottomCards = this.castToObject<BottomCardItem[]>("bottomCard");
        const settings = this.castToObject<PricingTableSettings>("settings") || { itemCount: 4, bottomItemCount: 2 };
        const showHeader = subtitle || title || description || visibleButtons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showHeader && (
                        <Base.VerticalContent className={this.decorateCSS("header")}>
                            {subtitle && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>
                            )}
                            {title && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                            )}
                            {description && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
                            )}   {visibleButtons.length > 0 && (
                                <div className={this.decorateCSS("button-container")}>
                                    {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
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
                        </Base.VerticalContent>
                    )}

                    {cards.length > 0 && (
                        <Base.ListGrid
                            gridCount={{ pc: settings.itemCount, tablet: 2, phone: 1 }}
                            className={this.decorateCSS("cards-row")}
                        >
                            {cards.map((item, index) => {
                                const cardSubtitleExist = this.castToString(item.cardSubtitle);
                                const cardTitleExist = this.castToString(item.cardTitle);
                                const cardDescriptionExist = this.castToString(item.cardDescription);
                                const cardPriceExist = this.castToString(item.cardPrice);
                                const cardDurationExist = this.castToString(item.cardDuration);
                                const cardInfoExist = this.castToString(item.cardInfo);

                                const buttonTextExist = this.castToString(item.button?.text);
                                const buttonIconExist = item.button?.icon && item.button?.icon?.name;
                                const buttonImageExist = item.button?.image && item.button?.image?.url;
                                const buttonExist = buttonTextExist || buttonIconExist || buttonImageExist;

                                const filteredFeatures = Array.isArray(item.cardFeature)
                                    ? item.cardFeature.filter((feature) => {
                                        const textExist = this.castToString(feature.text);
                                        const iconExist = feature.icon && (typeof feature.icon === "object" ? feature.icon.name || feature.icon.url : true);
                                        return textExist || iconExist;
                                    })
                                    : [];

                                const hasContent =
                                    cardSubtitleExist ||
                                    cardTitleExist ||
                                    cardDescriptionExist ||
                                    cardPriceExist ||
                                    cardDurationExist ||
                                    cardInfoExist ||
                                    filteredFeatures.length > 0 ||
                                    buttonExist;

                                if (!hasContent) return null;

                                return (
                                    <div key={`card-${index}`} className={this.decorateCSS("card")}>
                                        <Base.VerticalContent className={this.decorateCSS("card-top")}>
                                            {cardSubtitleExist && <Base.H6 className={this.decorateCSS("card-subtitle")}>{item.cardSubtitle}</Base.H6>}
                                            {cardTitleExist && <Base.H5 className={this.decorateCSS("card-title")}>{item.cardTitle}</Base.H5>}
                                            {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{item.cardDescription}</Base.P>}

                                            {(cardPriceExist || cardDurationExist) && (
                                                <div className={this.decorateCSS("card-price-row")}>
                                                    {cardPriceExist && <Base.H4 className={this.decorateCSS("card-price")}>{item.cardPrice}</Base.H4>}
                                                    {cardDurationExist && <Base.P className={this.decorateCSS("card-duration")}>{item.cardDuration}</Base.P>}
                                                </div>
                                            )}

                                            {filteredFeatures.length > 0 && (
                                                <div className={this.decorateCSS("card-features")}>
                                                    {filteredFeatures.map((feature, featureIndex) => {
                                                        const textExist = this.castToString(feature.text);
                                                        const iconExist = feature.icon && (typeof feature.icon === "object" ? feature.icon.name || feature.icon.url : true);

                                                        return (
                                                            <div key={`feature-${index}-${featureIndex}`} className={this.decorateCSS("feature-item")}>
                                                                {iconExist && <Base.Media value={feature.icon} className={this.decorateCSS("feature-icon")} />}
                                                                {textExist && <Base.P className={this.decorateCSS("feature-text")}>{feature.text}</Base.P>}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </Base.VerticalContent>

                                        <Base.VerticalContent className={this.decorateCSS("card-bottom")}>
                                            {cardInfoExist && <Base.P className={this.decorateCSS("card-info")}>{item.cardInfo}</Base.P>}

                                            {buttonExist && (
                                                <div className={this.decorateCSS("card-buttons-container")}>
                                                    <ComposerLink path={item?.button?.url}>
                                                        {item?.button?.image && item?.button?.image?.url ? (
                                                            <div className={this.decorateCSS("card-button-element")}>
                                                                <div className={this.decorateCSS("card-button")}>
                                                                    <Base.Media value={item?.button?.image} className={this.decorateCSS("card-button-image")} />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <Base.Button buttonType={item.button?.type} className={this.decorateCSS("card-button")}>
                                                                {item.button?.icon && item.button?.icon?.name && (<Base.Media value={item.button?.icon} className={this.decorateCSS("button-icon")} />)}
                                                                {this.castToString(item.button?.text) && <Base.P className={this.decorateCSS("button-text")}>{item.button?.text}</Base.P>}
                                                            </Base.Button>
                                                        )}
                                                    </ComposerLink>
                                                </div>
                                            )}
                                        </Base.VerticalContent>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                    )}

                    {bottomCards.length > 0 && (
                        <Base.ListGrid
                            gridCount={{ pc: settings.bottomItemCount, tablet: 2, phone: 1 }}
                            className={this.decorateCSS("bottom-cards-row")}
                        >
                            {bottomCards.map((card, index) => {
                                const iconExist = card.bottomIcon && (typeof card.bottomIcon === "object" ? card.bottomIcon.name || card.bottomIcon.url : true);
                                const subtitleExist = this.castToString(card.bottomSubtitle);
                                const titleExist = this.castToString(card.bottomTitle);
                                const descExist = this.castToString(card.bottomDescription);

                                const buttonTextExist = this.castToString(card.button?.text);
                                const buttonIconExist = card.button?.icon && card.button?.icon?.name;
                                const buttonImageExist = card.button?.image && card.button?.image?.url;
                                const buttonExist = buttonTextExist || buttonIconExist || buttonImageExist;

                                const cardContentExist = iconExist || subtitleExist || titleExist || descExist || buttonExist;

                                if (!cardContentExist) return null;

                                return (
                                    <div key={`bottom-card-${index}`} className={this.decorateCSS("bottom-card")}>
                                        {iconExist && (
                                            <div className={this.decorateCSS("bottom-card-left")}>
                                                <Base.Media value={card.bottomIcon} className={this.decorateCSS("bottom-icon")} />
                                            </div>
                                        )}

                                        <Base.VerticalContent className={this.decorateCSS("bottom-card-right")}>
                                            {subtitleExist && <Base.H6 className={this.decorateCSS("bottom-subtitle")}>{card.bottomSubtitle}</Base.H6>}
                                            {titleExist && <Base.H5 className={this.decorateCSS("bottom-title")}>{card.bottomTitle}</Base.H5>}
                                            {descExist && <Base.P className={this.decorateCSS("bottom-description")}>{card.bottomDescription}</Base.P>}
                                            {buttonExist && (
                                                <div className={this.decorateCSS("bottom-buttons-container")}>
                                                    <ComposerLink path={card?.button?.url}>
                                                        {card?.button?.image && card?.button?.image?.url ? (
                                                            <div className={this.decorateCSS("bottom-button-element")}>
                                                                <div className={this.decorateCSS("bottom-button")}>
                                                                    <Base.Media value={card?.button?.image} className={this.decorateCSS("bottom-button-image")} />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <Base.Button buttonType={card.button?.type === "Bare" || !card.button?.type ? "Link" : card.button.type} className={this.decorateCSS("bottom-button")}>
                                                                {card.button?.icon && card.button?.icon?.name && (<Base.Media value={card.button?.icon} className={this.decorateCSS("button-icon")} />)}
                                                                {this.castToString(card.button?.text) && <Base.P className={this.decorateCSS("button-text")}>{card.button?.text}</Base.P>}
                                                            </Base.Button>
                                                        )}
                                                    </ComposerLink>
                                                </div>
                                            )}
                                        </Base.VerticalContent>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default PricingTable16;
