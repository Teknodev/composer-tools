import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce8.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { getCurrencyInfo } from "composer-tools/utils/currency";

interface ProductCard {
    cardTitle: React.JSX.Element;
    cost: { value: React.JSX.Element; };
    cardLeftText: React.JSX.Element;
    navigateTo: string;
}

class ECommerce8 extends BaseECommerce {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "array",
            key: "productCards",
            displayer: "Product Cards",
            value: [
                {
                    type: "object",
                    key: "productCard",
                    displayer: "Product Card",
                    value: [
                        {
                            type: "string",
                            key: "cardLeftText",
                            displayer: "Badge Text",
                            value: "20% Off",
                        },
                        {
                            type: "media",
                            key: "cardImage",
                            displayer: "Card Media",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-600x728.jpg",
                            },
                        },
                        {
                            type: "array",
                            key: "BottomLabels",
                            displayer: "Bottom Items",
                            value: [
                                {
                                    type: "object",
                                    key: "BottomLabelText",
                                    displayer: "Bottom Item",
                                    value: [
                                        {
                                            type: "string",
                                            key: "cardLabel1",
                                            displayer: "Label",
                                            value: "Add to Cart",
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: "array",
                            key: "BottomRatings",
                            displayer: "Bottom Ratings",
                            value: [
                                {
                                    type: "object",
                                    key: "BottomRating",
                                    displayer: "Bottom Rating",
                                    value: [
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
                                                name: "RxHeartFilled",
                                            },
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            type: "string",
                            key: "cardTitle",
                            displayer: "Title",
                            value: "/ hour",
                        },
                        {
                            type: "currency",
                            key: "cost",
                            displayer: "Cost",
                            value: { value: "120", currency: "USD" },
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
    }

    static getName(): string {
        return "E-Commerce 8";
    }

    render() {
        const productCards = this.castToObject<ProductCard[]>("productCards") || [];
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {productCards.slice(0, this.getComponentState("imageCount")).map((productCard: any, cardIndex: number) => {
                        return (
                            <div key={cardIndex} className={this.decorateCSS("card-container")}>
                                <ComposerLink path={productCard.navigateTo} isFullWidth={true}>
                                    <div className={this.decorateCSS("image-container")}>

                                        <div className={this.decorateCSS("image-1-container")}>
                                            {productCard.cardImage && (
                                                <Base.Media
                                                    value={productCard.cardImage}
                                                    className={this.decorateCSS("image")}
                                                />
                                            )}
                                        </div>

                                        <div className={this.decorateCSS("image-text-left")}>
                                            {this.castToString(productCard.cardLeftText) && (
                                                <Base.P className={this.decorateCSS("cardLeftText")}>
                                                    {productCard.cardLeftText}
                                                </Base.P>
                                            )}
                                        </div>

                                        <div className={this.decorateCSS("image-right-side")}>
                                            {productCard.BottomLabels?.map((labelGroup: any, index: number) => (
                                                labelGroup.BottomLabelText?.map((item: any, subIndex: number) => (
                                                    <div
                                                        key={`${index}-${subIndex}`}
                                                        className={`${this.decorateCSS("right-side-items")} animate__animated animate__fadeInRight`}
                                                        style={{ animationDelay: `${subIndex * 0.08}s` }}
                                                    >
                                                        <Base.P className={this.decorateCSS("card-right-text")}>
                                                            {item.cardLabel1}
                                                        </Base.P>
                                                    </div>
                                                ))
                                            ))}
                                        </div>

                                    </div>
                                </ComposerLink>

                                <div className={this.decorateCSS("text-container")}>

                                    {this.castToString(productCard.cardTitle) && (
                                        <Base.H5 className={this.decorateCSS("title")}>
                                            {productCard.cardTitle}
                                        </Base.H5>
                                    )}

                                    {productCard.cost?.value && (
                                        <div className={this.decorateCSS("price")}>
                                            <Base.H4 className={this.decorateCSS("value")}>
                                                {productCard.cost.value}
                                            </Base.H4>
                                            <Base.H4 className={this.decorateCSS("currency-code")}>
                                                {getCurrencyInfo(productCard.cost.currency)?.symbol}
                                            </Base.H4>
                                        </div>
                                    )}
                                    {productCard.BottomRatings?.length > 0 && (
                                        <div className={this.decorateCSS("rating-container")}>
                                            {productCard.BottomRatings.map((ratingGroup: any, rIndex: number) =>
                                                ratingGroup.BottomRating?.map((rating: any, subRIndex: number) => (
                                                    <div key={`${rIndex}-${subRIndex}`} className={this.decorateCSS("rating-item")}>
                                                        {rating.bottomIcon && (
                                                            <Base.Media
                                                                value={rating.bottomIcon}
                                                                className={this.decorateCSS("rating-icon")}
                                                            />
                                                        )}
                                                        {this.castToString(rating.BottomRatingLabel) && (
                                                            <Base.P className={this.decorateCSS("rating-label")}>
                                                                {rating.BottomRatingLabel}
                                                            </Base.P>
                                                        )}
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ECommerce8;