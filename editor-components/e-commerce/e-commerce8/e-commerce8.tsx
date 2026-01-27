import React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce8.module.scss";
import { BaseECommerce, TypeMediaInputValue } from "composer-tools/editor-components/EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { CurrencyCode, getCurrencyInfo } from "composer-tools/utils/currency";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface BottomLabelItem {
    cardLabel: React.JSX.Element;
}

interface ProductCard {
    cardLeftText: React.JSX.Element;
    cardImage: TypeMediaInputValue;
    hoverImage: TypeMediaInputValue;
    line: boolean;
    BottomLabels: BottomLabelItem[];
    enableLabelSeparator: boolean;
    labelSeparatorIcon: TypeMediaInputValue;
    BottomRatingLabel: React.JSX.Element;
    bottomIcon: TypeMediaInputValue;
    productTitle: React.JSX.Element;
    priceSuffix: React.JSX.Element;
    enablePriceSeparator: boolean;
    priceSeparatorIcon: TypeMediaInputValue;
    cost: { value: React.JSX.Element; currency: CurrencyCode };
    navigateTo: string;
}

class ECommerce8 extends BaseECommerce {
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
            value: "Luxury Yacht rental in Dubai"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: ""
        });

        this.addProp({
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "View All", "", null, null, "Link"),
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
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "Premium",
                        },
                        {
                            type: "media",
                            key: "cardImage",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf857f959f6002d7e4972?alt=media",
                            },
                        },
                        {
                            type: "media",
                            key: "hoverImage",
                            displayer: "Hover Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf8e8f959f6002d7e4ab6?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "line",
                            displayer: "Line",
                            value: true,
                        },
                        {
                            type: "array",
                            key: "BottomLabels",
                            displayer: "Bottom Items",
                            value: [
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "10 Guests",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "2 Cabins",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "42 Length",
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "BottomRatingLabel",
                            displayer: "Rating Label",
                            value: "5/5",
                        },
                        {
                            type: "media",
                            key: "bottomIcon",
                            displayer: "Rating Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "LiaStarSolid",
                            },
                        },
                        {
                            type: "string",
                            key: "productTitle",
                            displayer: "Product Title",
                            value: "Arya",
                        },
                        {
                            type: "boolean",
                            key: "enableLabelSeparator",
                            displayer: "Label Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "labelSeparatorIcon",
                            displayer: "Label Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "string",
                            key: "priceSuffix",
                            displayer: "Price Suffix",
                            value: "hour",
                        },
                        {
                            type: "boolean",
                            key: "enablePriceSeparator",
                            displayer: "Price Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "priceSeparatorIcon",
                            displayer: "Price Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "2000", currency: "USD" },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "Premium",
                        },
                        {
                            type: "media",
                            key: "cardImage",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf87ef959f6002d7e49bf?alt=media",
                            },
                        },
                        {
                            type: "media",
                            key: "hoverImage",
                            displayer: "Hover Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf905f959f6002d7e4af9?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "line",
                            displayer: "Line",
                            value: true,
                        },
                        {
                            type: "array",
                            key: "BottomLabels",
                            displayer: "Bottom Items",
                            value: [
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "10 Guests",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "3 Cabins",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "45 Length",
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "BottomRatingLabel",
                            displayer: "Rating Label",
                            value: "5/5",
                        },
                        {
                            type: "media",
                            key: "bottomIcon",
                            displayer: "Rating Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "LiaStarSolid",
                            },
                        },
                        {
                            type: "string",
                            key: "productTitle",
                            displayer: "Product Title",
                            value: "Cali",
                        },
                        {
                            type: "boolean",
                            key: "enableLabelSeparator",
                            displayer: "Label Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "labelSeparatorIcon",
                            displayer: "Label Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "string",
                            key: "priceSuffix",
                            displayer: "Price Suffix",
                            value: "hour",
                        },
                        {
                            type: "boolean",
                            key: "enablePriceSeparator",
                            displayer: "Price Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "priceSeparatorIcon",
                            displayer: "Price Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "1500", currency: "USD" },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "Premium",
                        },
                        {
                            type: "media",
                            key: "cardImage",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf919f959f6002d7e4b58?alt=media",
                            },
                        },
                        {
                            type: "media",
                            key: "hoverImage",
                            displayer: "Hover Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf95cf959f6002d7e4bda?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "line",
                            displayer: "Line",
                            value: true,
                        },
                        {
                            type: "array",
                            key: "BottomLabels",
                            displayer: "Bottom Items",
                            value: [
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "27 Guests",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "3 Cabins",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "74 Length",
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "BottomRatingLabel",
                            displayer: "Rating Label",
                            value: "5/5",
                        },
                        {
                            type: "media",
                            key: "bottomIcon",
                            displayer: "Rating Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "LiaStarSolid",
                            },
                        },
                        {
                            type: "string",
                            key: "productTitle",
                            displayer: "Product Title",
                            value: "Jude",
                        },
                        {
                            type: "boolean",
                            key: "enableLabelSeparator",
                            displayer: "Label Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "labelSeparatorIcon",
                            displayer: "Label Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "string",
                            key: "priceSuffix",
                            displayer: "Price Suffix",
                            value: "hour",
                        },
                        {
                            type: "boolean",
                            key: "enablePriceSeparator",
                            displayer: "Price Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "priceSeparatorIcon",
                            displayer: "Price Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "5000", currency: "USD" },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "Premium",
                        },
                        {
                            type: "media",
                            key: "cardImage",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf975f959f6002d7e4c21?alt=media",
                            },
                        },
                        {
                            type: "media",
                            key: "hoverImage",
                            displayer: "Hover Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695cf986f959f6002d7e4c5b?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "line",
                            displayer: "Line",
                            value: true,
                        },
                        {
                            type: "array",
                            key: "BottomLabels",
                            displayer: "Bottom Items",
                            value: [
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "21 Guests",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "3 Cabins",
                                        },
                                    ]
                                },
                                {
                                    type: "object",
                                    key: "BottomLabelItem",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel",
                                            displayer: "Label",
                                            value: "64 Length",
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "BottomRatingLabel",
                            displayer: "Rating Label",
                            value: "5/5",
                        },
                        {
                            type: "media",
                            key: "bottomIcon",
                            displayer: "Rating Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "LiaStarSolid",
                            },
                        },
                        {
                            type: "string",
                            key: "productTitle",
                            displayer: "Product Title",
                            value: "Julia",
                        },
                        {
                            type: "boolean",
                            key: "enableLabelSeparator",
                            displayer: "Label Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "labelSeparatorIcon",
                            displayer: "Label Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "string",
                            key: "priceSuffix",
                            displayer: "Price Suffix",
                            value: "hour",
                        },
                        {
                            type: "boolean",
                            key: "enablePriceSeparator",
                            displayer: "Price Separator",
                            value: true,
                        },
                        {
                            type: "media",
                            key: "priceSeparatorIcon",
                            displayer: "Price Separator Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "RxSlash",
                            },
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "3000", currency: "USD" },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ]
                },
            ]
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 4,
        });
    }

    static getName(): string {
        return "E-Commerce 8";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const enableOverlay = this.getPropValue("enableOverlay");
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const cards = this.castToObject<ProductCard[]>("cards") || [];
        const itemCount = this.getPropValue("itemCount");
        const hasContent = subtitle || title || description || visibleButtons.length > 0;

        const renderButtons = (isMobile: boolean) => (
            <div className={this.decorateCSS(isMobile ? "button-container-mobile" : "button-container")}>
                {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item.text);
                    return buttonTextExist && (
                        <ComposerLink key={`button-${index}`} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                            </Base.Button>
                        </ComposerLink>
                    );
                })}
            </div>
        );

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <div className={this.decorateCSS("top-header")}>
                            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                            </Base.VerticalContent>
                            {visibleButtons.length > 0 && renderButtons(false)}
                        </div>
                    )}
                    {cards.length > 0 && (
                        <Base.ListGrid
                            className={this.decorateCSS("card-wrapper")}
                            gridCount={{ pc: itemCount, tablet: 2, phone: 1 }}
                        >
                            {cards.map((card: ProductCard, cardIndex: number) => {
                                const cardLeftText = this.castToString(card.cardLeftText);
                                const cardImage = card.cardImage;
                                const hoverImage = card.hoverImage;
                                const hasCardImage = cardImage && "url" in cardImage && !!cardImage.url;
                                const hasHoverImage = hoverImage && "url" in hoverImage && !!hoverImage.url;
                                const displayImage = hasCardImage ? cardImage : (hasHoverImage ? hoverImage : null);
                                const displayHoverImage = hasCardImage && hasHoverImage ? hoverImage : null;
                                const bottomLabelsArray = card.BottomLabels || [];
                                const ratingLabel = this.castToString(card.BottomRatingLabel);
                                const ratingIcon = card.bottomIcon;
                                const isRatingImage = ratingIcon && "type" in ratingIcon && ratingIcon.type === "image";
                                const productTitle = this.castToString(card.productTitle);
                                const priceSuffix = this.castToString(card.priceSuffix);
                                const enableLabelSeparator = card.enableLabelSeparator;
                                const labelSeparatorIcon = card.labelSeparatorIcon;
                                const isLabelSeparatorImage = labelSeparatorIcon && "type" in labelSeparatorIcon && labelSeparatorIcon.type === "image";
                                const enablePriceSeparator = card.enablePriceSeparator;
                                const priceSeparatorIcon = card.priceSeparatorIcon;
                                const isPriceSeparatorImage = priceSeparatorIcon && "type" in priceSeparatorIcon && priceSeparatorIcon.type === "image";
                                const cost = card.cost;
                                const navigateTo = card.navigateTo;
                                const hasBottomLabels = bottomLabelsArray.length > 0;
                                const hasRating = ratingLabel || ratingIcon;

                                if (!displayImage && !cardLeftText && !productTitle && !cost?.value) return null;

                                return (
                                    <div key={cardIndex} className={this.decorateCSS("card-container")}>
                                        <ComposerLink path={navigateTo} isFullWidth={true}>
                                            <div className={`${this.decorateCSS("image-container")} ${displayHoverImage && this.decorateCSS("has-hover")}`}>
                                                {displayImage && (
                                                    <div className={this.decorateCSS("image-wrapper")}>
                                                        <Base.Media
                                                            value={displayImage}
                                                            className={this.decorateCSS("image")}
                                                        />
                                                        {displayHoverImage && (
                                                            <Base.Media
                                                                value={displayHoverImage}
                                                                className={this.decorateCSS("hover-image")}
                                                            />
                                                        )}
                                                        {enableOverlay && (
                                                            <div className={this.decorateCSS("overlay")}></div>
                                                        )}
                                                    </div>
                                                )}

                                                {cardLeftText && (
                                                    <div className={this.decorateCSS("badge")}>
                                                        <Base.P className={this.decorateCSS("badge-text")}>
                                                            {card.cardLeftText}
                                                        </Base.P>
                                                    </div>
                                                )}
                                            </div>
                                        </ComposerLink>
                                        <div className={this.decorateCSS("text-container")}>
                                            {(hasBottomLabels || hasRating) && (
                                                <div className={this.decorateCSS("labels-rating-row")}>
                                                    {hasBottomLabels && (
                                                        <div className={this.decorateCSS("labels-container")}>
                                                            {bottomLabelsArray.map((labelItem: BottomLabelItem, labelIndex: number) => {
                                                                const labelText = this.castToString(labelItem.cardLabel);
                                                                const isLast = labelIndex === bottomLabelsArray.length - 1;
                                                                return labelText && (
                                                                    <React.Fragment key={labelIndex}>
                                                                        <div className={this.decorateCSS("label-item")}>
                                                                            <Base.P className={this.decorateCSS("label-text")}>{labelItem.cardLabel}</Base.P>
                                                                        </div>
                                                                        {!isLast && enableLabelSeparator && (
                                                                            <Base.Media
                                                                                value={labelSeparatorIcon}
                                                                                className={`${this.decorateCSS("label-separator")} ${isLabelSeparatorImage && this.decorateCSS("is-image")}`}
                                                                            />
                                                                        )}
                                                                    </React.Fragment>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                    {hasRating && (
                                                        <div className={this.decorateCSS("rating-container")}>
                                                            <div className={this.decorateCSS("rating-item")}>
                                                                {ratingLabel && (
                                                                    <Base.P className={this.decorateCSS("rating-label")}>
                                                                        {card.BottomRatingLabel}
                                                                    </Base.P>
                                                                )}
                                                                {ratingIcon && (
                                                                    <Base.Media
                                                                        value={ratingIcon}
                                                                        className={`${this.decorateCSS("rating-icon")} ${isRatingImage && this.decorateCSS("is-image")}`}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {card.line && (<div className={this.decorateCSS("line")}></div>)}
                                            {productTitle && (
                                                <Base.H6 className={this.decorateCSS("product-title")}>
                                                    {card.productTitle}
                                                </Base.H6>
                                            )}
                                            {cost?.value && (
                                                <div className={this.decorateCSS("price-row")}>
                                                    <div className={this.decorateCSS("price")}>
                                                        <Base.P className={this.decorateCSS("currency-symbol")}>
                                                            {getCurrencyInfo(cost.currency)?.symbol}
                                                        </Base.P>
                                                        <Base.P className={this.decorateCSS("value")}>
                                                            {cost.value}
                                                        </Base.P>
                                                    </div>
                                                    {priceSuffix && (
                                                        <div className={this.decorateCSS("price-suffix-container")}>
                                                            {enablePriceSeparator && (
                                                                <Base.Media
                                                                    value={priceSeparatorIcon}
                                                                    className={`${this.decorateCSS("separator-icon")} ${isPriceSeparatorImage && this.decorateCSS("is-image")}`}
                                                                />
                                                            )}
                                                            <Base.P className={this.decorateCSS("price-suffix")}>
                                                                {card.priceSuffix}
                                                            </Base.P>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                    )}
                    {visibleButtons.length > 0 && renderButtons(true)}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ECommerce8;