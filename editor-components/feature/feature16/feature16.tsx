import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature16.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Feature16 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Our Features"
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "We provide more than crypto"

        })     

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: ""

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
                    type: "media",
                    key: "topLeftSideImage",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image","icon"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/crypto-icon.png"
                    }
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
                    type: "media",
                    key: "bottomLeftSideImage",
                    displayer: "Left Side Bottom Media",
                    additionalParams: {
                         availableTypes: ["image","video"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/mobile-2.png"
                    }
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
                    type: "media",
                    key: "topRightSideImage",
                    displayer: "Media",
                    additionalParams: {
                         availableTypes: ["image","icon"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/wallet-icon.png"
                    }
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
                    type: "media",
                    key: "topRightSide2Image",
                    displayer: "Media",
                    additionalParams: {
                         availableTypes: ["image","icon"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/protect-icon.png"
                    }
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
                    type: "media",
                    key: "middleRightSideImage",
                    displayer: "Media",
                    additionalParams: {
                         availableTypes: ["image","video"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/support-icon.png"
                    }
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
                    type: "media",
                    key: "middleRightSide2Image",
                    displayer: "Media",
                    additionalParams: {
                         availableTypes: ["image","icon"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/chart-icon.png"
                    }
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
                    type: "media",
                    key: "bottomRightSideImage",
                    displayer: "Media",
                    additionalParams: {
                         availableTypes: ["image","icon"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/buy-icon.png"
                    }
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
                    type: "media",
                    key: "bottomRightSide2Image",
                    displayer: "Media",
                    additionalParams: {
                    availableTypes: ["image", "icon"],
                    },
                    value: {
                        type: "image",
                        url: "https://templatekit.reavation.com/bitree/wp-content/uploads/sites/11/2024/03/real-time-icon.png"
                    }
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
        return "Feature 16";
    }

    renderCard(cardData, prefix, isAlone = false) {
        const className = `${this.decorateCSS("card")} ${isAlone ? this.decorateCSS("single-card") : ""}`;
        const hasTitle = this.castToString(cardData[`${prefix}Title`]);
        const hasDescription = this.castToString(cardData[`${prefix}Description`]);
        const hasTextContent = hasTitle || hasDescription;

        return (
            <Base.VerticalContent className={className} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                {cardData[`${prefix}Image`] && (
                    <div className={this.decorateCSS("card-image")}>
                        <Base.Media value={cardData[`${prefix}Image`]} className={this.decorateCSS("image")} />
                    </div>
                )}
                {hasTextContent && (
                    <div className={this.decorateCSS("card-text-container")}>
                        {hasTitle && (
                            <Base.H4 className={this.decorateCSS("card-title")}>
                                {cardData[`${prefix}Title`]}
                            </Base.H4>
                        )}
                        {hasDescription && (
                            <Base.P className={this.decorateCSS("card-description")}>
                                {cardData[`${prefix}Description`]}
                            </Base.P>
                        )}
                    </div>
                )}
            </Base.VerticalContent>
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

        const description = this.castToString(this.getPropValue("description"));

        const hasTopLeftContent = topLeftSide.visibility && (
            this.castToString(topLeftSide.topLeftSideTitle) || 
            this.castToString(topLeftSide.topLeftSideDescription) || 
            topLeftSide.topLeftSideImage?.url
        );
        
        const hasBottomLeftContent = bottomLeftSide.visibility && (
            this.castToString(bottomLeftSide.bottomLeftSideTitle) || 
            this.castToString(bottomLeftSide.bottomLeftSideDescription) || 
            bottomLeftSide.bottomLeftSideImage?.url
        );

        const hasTopRightContent = topRightSide.visibility && (
            this.castToString(topRightSide.topRightSideTitle) || 
            this.castToString(topRightSide.topRightSideDescription) || 
            topRightSide.topRightSideImage?.url
        );

        const hasTopRight2Content = topRightSide2.visibility && (
            this.castToString(topRightSide2.topRightSide2Title) || 
            this.castToString(topRightSide2.topRightSide2Description) || 
            topRightSide2.topRightSide2Image?.url
        );

        const hasMiddleRightContent = middleRightSide.visibility && (
            this.castToString(middleRightSide.middleRightSideTitle) || 
            this.castToString(middleRightSide.middleRightSideDescription) || 
            middleRightSide.middleRightSideImage?.url
        );

        const hasMiddleRight2Content = middleRightSide2.visibility && (
            this.castToString(middleRightSide2.middleRightSide2Title) || 
            this.castToString(middleRightSide2.middleRightSide2Description) || 
            middleRightSide2.middleRightSide2Image?.url
        );

        const hasBottomRightContent = bottomRightSide.visibility && (
            this.castToString(bottomRightSide.bottomRightSideTitle) || 
            this.castToString(bottomRightSide.bottomRightSideDescription) || 
            bottomRightSide.bottomRightSideImage?.url
        );

        const hasBottomRight2Content = bottomRightSide2.visibility && (
            this.castToString(bottomRightSide2.bottomRightSide2Title) || 
            this.castToString(bottomRightSide2.bottomRightSide2Description) || 
            bottomRightSide2.bottomRightSide2Image?.url
        );

        const renderLeftSide = hasTopLeftContent || hasBottomLeftContent;

        const renderRightSide = hasTopRightContent || hasTopRight2Content || hasMiddleRightContent || 
                               hasMiddleRight2Content || hasBottomRightContent || hasBottomRight2Content;

        const topRowVisible = hasTopRightContent || hasTopRight2Content;
        const middleRowVisible = hasMiddleRightContent || hasMiddleRight2Content;
        const bottomRowVisible = hasBottomRightContent || hasBottomRight2Content;

        const visibleRowCount = [topRowVisible, middleRowVisible, bottomRowVisible].filter(Boolean).length;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header-container")}>
                        {this.castToString(this.getPropValue("subtitle")) &&
                            <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                                {this.getPropValue("subtitle")}
                            </Base.SectionSubTitle>}
                        {this.castToString(this.getPropValue("title")) && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {this.getPropValue("title")}
                            </Base.SectionTitle>
                        )}
                        {description && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>
                    <div className={this.decorateCSS("side-container")}>
                        {renderLeftSide && (
                            <div className={this.decorateCSS("left-side")}>
                                {hasTopLeftContent && (
                                    <div className={this.decorateCSS("top-left-side")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                                        {this.renderCard(topLeftSide, "topLeftSide", !hasBottomLeftContent)}
                                    </div>
                                )}
                                {hasBottomLeftContent && (
                                    <div className={this.decorateCSS("bottom-left-side")}>
                                        <div className={this.decorateCSS("bottom-left-side-card")}>
                                            {(this.castToString(bottomLeftSide.bottomLeftSideTitle) || this.castToString(bottomLeftSide.bottomLeftSideDescription)) && (
                                                <div className={this.decorateCSS("bottom-left-side-card-text-container")}>
                                                    {this.castToString(bottomLeftSide.bottomLeftSideTitle) && (
                                                        <Base.H4 className={this.decorateCSS("bottom-left-side-card-title")}>
                                                            {bottomLeftSide.bottomLeftSideTitle}
                                                        </Base.H4>
                                                    )}
                                                    {this.castToString(bottomLeftSide.bottomLeftSideDescription) && (
                                                        <Base.P className={this.decorateCSS("bottom-left-side-card-description")}>
                                                            {bottomLeftSide.bottomLeftSideDescription}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            )}
                                            {bottomLeftSide.bottomLeftSideImage?.url && (
                                                <div className={this.decorateCSS("bottom-left-side-card-image-container")}>
                                                    <Base.Media value={bottomLeftSide.bottomLeftSideImage} className={this.decorateCSS("bottom-left-side-card-image")} />
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
                                        {hasTopRightContent && this.renderCard(topRightSide, "topRightSide", !hasTopRight2Content)}
                                        {hasTopRight2Content && this.renderCard(topRightSide2, "topRightSide2", !hasTopRightContent)}
                                    </div>
                                )}
                                {middleRowVisible && (
                                    <div className={this.decorateCSS("bottom-right-side-container")}>
                                        {hasMiddleRightContent && this.renderCard(middleRightSide, "middleRightSide", !hasMiddleRight2Content)}
                                        {hasMiddleRight2Content && this.renderCard(middleRightSide2, "middleRightSide2", !hasMiddleRightContent)}
                                    </div>
                                )}
                                {bottomRowVisible && (
                                    <div className={this.decorateCSS("bottom-right-side-container-2")}>
                                        {hasBottomRightContent && this.renderCard(bottomRightSide, "bottomRightSide", !hasBottomRight2Content)}
                                        {hasBottomRight2Content && this.renderCard(bottomRightSide2, "bottomRightSide2", !hasBottomRightContent)}
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