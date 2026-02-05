import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature43.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonTypeObj = {
    text: React.JSX.Element;
    icon: TypeMediaInputValue;
    url: string;
    type: TypeButton;
}

type CardTypeObj = {
    image: TypeMediaInputValue;
    enableOverlay: boolean;
    cardSubtitle: React.JSX.Element;
    cardTitle: React.JSX.Element;
    cardDescription: React.JSX.Element;
    button: ButtonTypeObj;
    rowReverse: boolean;
}

class Feature43 extends BaseFeature {
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
            value: "Everything you need to deploy your app"
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698309f72631ba002cff368a?alt=media",
                                type: "image",
                            },
                            additionalParams: { availableTypes: ["image", "video"] }
                        },
                        {
                            type: "boolean",
                            key: "enableOverlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Card Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Perfect Design"
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Card Description",
                            value: "Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies impactful experiences."
                        },
                        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
                        {
                            type: "boolean",
                            key: "rowReverse",
                            displayer: "Row Reverse",
                            value: false,
                        },
                    ]
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69830a1a2631ba002cff36b0?alt=media",
                                type: "image",
                            },
                            additionalParams: { availableTypes: ["image", "video"] }
                        },
                        {
                            type: "boolean",
                            key: "enableOverlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Card Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Ultra Responsive"
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Card Description",
                            value: "Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies impactful experiences."
                        },
                        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
                        {
                            type: "boolean",
                            key: "rowReverse",
                            displayer: "Row Reverse",
                            value: true,
                        },
                    ]
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69830a782631ba002cff36e6?alt=media",
                                type: "image",
                            },
                            additionalParams: { availableTypes: ["image", "video"] }
                        },
                        {
                            type: "boolean",
                            key: "enableOverlay",
                            displayer: "Overlay",
                            value: false,
                        },
                        {
                            type: "string",
                            key: "cardSubtitle",
                            displayer: "Card Subtitle",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Card Title",
                            value: "Free Test-Drive"
                        },
                        {
                            type: "string",
                            key: "cardDescription",
                            displayer: "Card Description",
                            value: "Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies impactful experiences."
                        },
                        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
                        {
                            type: "boolean",
                            key: "rowReverse",
                            displayer: "Row Reverse",
                            value: false,
                        },
                    ]
                },
            ]
        });
    }

    static getName(): string {
        return "Feature 43";
    }

    render() {
        const cards = this.castToObject<CardTypeObj[]>("cards") || [];
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const hasContent = subtitle || title || description || visibleButtons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("text-content")}>
                            {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                            {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                            {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
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
                        </Base.VerticalContent>
                    )}
                    {cards.length > 0 && (
                        <div className={this.decorateCSS("card-wrapper")}>
                            {cards.map((card: CardTypeObj, index: number) => {
                                const cardSubtitleExist = this.castToString(card.cardSubtitle);
                                const cardTitleExist = this.castToString(card.cardTitle);
                                const cardDescriptionExist = this.castToString(card.cardDescription);
                                const hasImage = !!(card.image && 'url' in card.image && card.image.url);
                                const buttonTextExist = this.castToString(card.button?.text);
                                const hasButton = buttonTextExist;

                                return (
                                    <div
                                        key={index}
                                        className={`${this.decorateCSS("card-content")} ${(card.rowReverse !== undefined ? card.rowReverse : index % 2 !== 0) && this.decorateCSS("row-reverse")}`}
                                    >
                                        {hasImage && (
                                            <div className={`${this.decorateCSS("image-wrapper")} ${!(cardTitleExist || cardDescriptionExist || cardSubtitleExist) && this.decorateCSS("full-width")}`}>
                                                <Base.Media
                                                    value={card.image}
                                                    className={this.decorateCSS("card-image")}
                                                />
                                                {card.enableOverlay && (
                                                    <div className={this.decorateCSS("overlay")}></div>
                                                )}
                                            </div>
                                        )}
                                        {(cardTitleExist || cardDescriptionExist || cardSubtitleExist) && (
                                            <Base.VerticalContent className={`${this.decorateCSS("text-wrapper")} ${!hasImage && this.decorateCSS("no-image")}`}>
                                                {cardSubtitleExist && (
                                                    <Base.H5 className={this.decorateCSS("card-subtitle")}>{card.cardSubtitle}</Base.H5>
                                                )}
                                                {cardTitleExist && (
                                                    <Base.H4 className={this.decorateCSS("card-title")}>{card.cardTitle}</Base.H4>
                                                )}
                                                {cardDescriptionExist && (
                                                    <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>
                                                )}
                                                {hasButton && (
                                                    <div className={this.decorateCSS("card-button-container")}>
                                                        <ComposerLink path={card.button?.url || ""}>
                                                            <Base.Button buttonType={card.button?.type} className={this.decorateCSS("card-button")}>
                                                                {buttonTextExist && <Base.P className={this.decorateCSS("card-button-text")}>{card.button.text}</Base.P>}
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    </div>
                                                )}
                                            </Base.VerticalContent>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature43;