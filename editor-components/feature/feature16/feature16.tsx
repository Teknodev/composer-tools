import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature16.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Feature16 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "heading",
            displayer: "Heading",
            value: "Our Features"
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "We provide more than crypto"

        })
        this.addProp({
            type: "object",
            key: "topLeftSide",
            displayer: "Left Side Top Card",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "topLeftSideImage",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/crypto-icon.png"
                },
                {
                    type: "string",
                    key: "topLeftSideTitle",
                    displayer: "Title",
                    value: "Crypto Trading Platform"
                },
                {
                    type: "string",
                    key: "topLeftSideDescription",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing elit. Excepteur sint occaecat cupidatat non proident."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "bottomLeftSide",
            displayer: "Left Side Bottom Card",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "bottomLeftSideImage",
                    displayer: "Left Side Bottom Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/mobile-2.png"
                },
                {
                    type: "string",
                    key: "bottomLeftSideTitle",
                    displayer: "Title",
                    value: "Mobile App Friendly"
                },
                {
                    type: "string",
                    key: "bottomLeftSideDescription",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "topRightSide",
            displayer: "Right Side Top Card 1",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "topRightSideImage",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/wallet-icon.png"
                },
                {
                    type: "string",
                    key: "topRightSideTitle",
                    displayer: "Title",
                    value: "Secure Wallet"
                },
                {
                    type: "string",
                    key: "topRightSideDescription",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "topRightSide2",
            displayer: "Right Side Top Card 2",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "topRightSide2Image",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/protect-icon.png"
                },
                {
                    type: "string",
                    key: "topRightSide2Title",
                    displayer: "Title",
                    value: "Fully Protection"
                },
                {
                    type: "string",
                    key: "topRightSide2Description",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "middleRightSide",
            displayer: "Right Side Middle Card 1",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "middleRightSideImage",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/support-icon.png"
                },
                {
                    type: "string",
                    key: "middleRightSideTitle",
                    displayer: "Title",
                    value: "Currency Support"
                },
                {
                    type: "string",
                    key: "middleRightSideDescription",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "middleRightSide2",
            displayer: "Right Side Middle Card 2",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "middleRightSide2Image",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/chart-icon.png"
                },
                {
                    type: "string",
                    key: "middleRightSide2Title",
                    displayer: "Title",
                    value: "Trading Charts"
                },
                {
                    type: "string",
                    key: "middleRightSide2Description",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "bottomRightSide",
            displayer: "Right Side Bottom Card 1",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "bottomRightSideImage",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/buy-icon.png"
                },
                {
                    type: "string",
                    key: "bottomRightSideTitle",
                    displayer: "Title",
                    value: "Buy & Sell Coin"
                },
                {
                    type: "string",
                    key: "bottomRightSideDescription",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "object",
            key: "bottomRightSide2",
            displayer: "Right Side Bottom Card 2",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true
                },
                {
                    type: "image",
                    key: "bottomRightSide2Image",
                    displayer: "Image",
                    value: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/real-time-icon.png"
                },
                {
                    type: "string",
                    key: "bottomRightSide2Title",
                    displayer: "Title",
                    value: "Real Time Trading"
                },
                {
                    type: "string",
                    key: "bottomRightSide2Description",
                    displayer: "Description",
                    value: "Lorem ipsum dolor sit amet consectet adipiscing."
                },
            ]
        })
        this.addProp({
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1"],
            additionalParams: {
                selectItems: ["animate1"]
            }
        });
    }

    static getName(): string {
        return "Future16";
    }

    renderCard(cardData, prefix, isAlone = false) {
        const className = `${this.decorateCSS("card")} ${isAlone ? this.decorateCSS("single-card") : ""}`;

        return (
            <div className={className} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                {cardData[`${prefix}Image`] && (
                    <div className={this.decorateCSS("card-image")}>
                        <img src={cardData[`${prefix}Image`]} alt="Content" />
                    </div>
                )}
                <div className={this.decorateCSS("card-text-container")}>
                    {cardData[`${prefix}Title`] && (
                        <div className={this.decorateCSS("card-title")}>
                            {cardData[`${prefix}Title`]}
                        </div>
                    )}
                    {cardData[`${prefix}Description`] && (
                        <div className={this.decorateCSS("card-description")}>
                            {cardData[`${prefix}Description`]}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    render() {
        const topLeftSide = this.castToObject<any>("topLeftSide")
        const bottomLeftSide = this.castToObject<any>("bottomLeftSide");
        const topRightSide = this.castToObject<any>("topRightSide");
        const topRightSide2 = this.castToObject<any>("topRightSide2");
        const bottomRightSide = this.castToObject<any>("bottomRightSide");
        const bottomRightSide2 = this.castToObject<any>("bottomRightSide2");
        const middleRightSide = this.castToObject<any>("middleRightSide");
        const middleRightSide2 = this.castToObject<any>("middleRightSide2");

        const renderLeftSide = topLeftSide.visibility || bottomLeftSide.visibility;

        const renderRightSide =
            topRightSide.visibility ||
            topRightSide2.visibility ||
            bottomRightSide.visibility ||
            bottomRightSide2.visibility ||
            middleRightSide.visibility ||
            middleRightSide2.visibility;

        const topRowVisible = topRightSide.visibility || topRightSide2.visibility;
        const middleRowVisible = middleRightSide.visibility || middleRightSide2.visibility;
        const bottomRowVisible = bottomRightSide.visibility || bottomRightSide2.visibility;

        const visibleRowCount = [topRowVisible, middleRowVisible, bottomRowVisible].filter(Boolean).length;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("header-container")}>
                        <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                            {this.castToString(this.getPropValue("heading")) && (
                                <div className={this.decorateCSS("heading")}>
                                    {this.getPropValue("heading")}
                                </div>
                            )}
                        </Base.SectionSubTitle>
                        {this.castToString(this.getPropValue("title")) && (
                            <Base.SectionTitle className={this.decorateCSS("title-container")}>
                                <div className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </div>
                            </Base.SectionTitle>
                        )}
                    </div>
                    <div className={this.decorateCSS("side-container")}>
                        {renderLeftSide && (
                            <div className={this.decorateCSS("left-side")}>
                                {topLeftSide.visibility && (
                                    <div className={this.decorateCSS("top-left-side")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                                        {topLeftSide.visibility && this.renderCard(topLeftSide, "topLeftSide", !bottomLeftSide.visibility)}
                                    </div>
                                )}
                                {bottomLeftSide.visibility && (
                                    <div className={this.decorateCSS("bottom-left-side")}>
                                        <div className={this.decorateCSS("bottom-left-side-card")}>
                                            <div className={this.decorateCSS("bottom-left-side-card-text-container")}>
                                                {bottomLeftSide.bottomLeftSideTitle && (
                                                    <div className={this.decorateCSS("bottom-left-side-card-title")}>
                                                        {bottomLeftSide.bottomLeftSideTitle}
                                                    </div>
                                                )}
                                                {bottomLeftSide.bottomLeftSideDescription && (
                                                    <div className={this.decorateCSS("bottom-left-side-card-description")}>
                                                        {bottomLeftSide.bottomLeftSideDescription}
                                                    </div>
                                                )}
                                            </div>
                                            {bottomLeftSide.bottomLeftSideImage && (
                                                <div className={this.decorateCSS("bottom-left-side-card-image")}>
                                                    <img src={bottomLeftSide.bottomLeftSideImage} alt="Content" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {renderRightSide && (
                            <div className={`${this.decorateCSS("right-side")} ${this.decorateCSS("rows-" + visibleRowCount)}`}>
                                {topRowVisible && (
                                    <div className={this.decorateCSS("top-right-side-container")}>
                                        {topRightSide.visibility && this.renderCard(topRightSide, "topRightSide", !topRightSide2.visibility)}
                                        {topRightSide2.visibility && this.renderCard(topRightSide2, "topRightSide2", !topRightSide.visibility)}
                                    </div>
                                )}
                                {middleRowVisible && (
                                    <div className={this.decorateCSS("bottom-right-side-container")}>
                                        {middleRightSide.visibility && this.renderCard(middleRightSide, "middleRightSide", !middleRightSide2.visibility)}
                                        {middleRightSide2.visibility && this.renderCard(middleRightSide2, "middleRightSide2", !middleRightSide.visibility)}
                                    </div>
                                )}
                                {bottomRowVisible && (
                                    <div className={this.decorateCSS("bottom-right-side-container-2")}>
                                        {bottomRightSide.visibility && this.renderCard(bottomRightSide, "bottomRightSide", !bottomRightSide2.visibility)}
                                        {bottomRightSide2.visibility && this.renderCard(bottomRightSide2, "bottomRightSide2", !bottomRightSide.visibility)}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </Base.MaxContent >
            </Base.Container >
        )
    }
}

export default Feature16;