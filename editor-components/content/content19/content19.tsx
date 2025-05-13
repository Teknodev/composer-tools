import * as React from "react";
import styles from "./content19.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

class Content19 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "leftSideSubTitle",
            displayer: "Left Side Sub Title",
            value: "GANACHE"
        })
        this.addProp({
            type: "string",
            key: "leftSideTitle",
            displayer: "Left Side Title",
            value: "CREATION"
        })
        this.addProp({
            type: "string",
            key: "leftSideText",
            displayer: "Left Side Text",
            value: "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et."
        })
        this.addProp({
            type: "string",
            key: "leftNavigateText",
            displayer: "Left Navigate Text",
            value: "READ MORE"
        })
        this.addProp({
            type: "page",
            key: "leftNavigateTo",
            displayer: "Navigate To",
            value: ""
        })
        this.addProp({
            type: "icon",
            key: "leftNavigateIcon",
            displayer: "Icon",
            value: "BsArrowRight"
        })
        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
            value: "https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/02/h2-img-1-729x1024.png"
        })
        this.addProp({
            type: "string",
            key: "rightSideSubTitle",
            displayer: "Right Side Sub Title",
            value: "SWEET"
        })
        this.addProp({
            type: "string",
            key: "rightSideTitle",
            displayer: "Right Side Title",
            value: "MASTERPIECES"
        })
        this.addProp({
            type: "string",
            key: "rightSideText",
            displayer: "Right Side Text",
            value: "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et."
        })
        this.addProp({
            type: "string",
            key: "rightNavigateText",
            displayer: "Right Navigate Text",
            value: "READ MORE"
        })
        this.addProp({
            type: "page",
            key: "rightNavigateTo",
            displayer: "Navigate To",
            value: ""
        })
        this.addProp({
            type: "icon",
            key: "rightNavigateIcon",
            displayer: "Icon",
            value: "BsArrowRight"
        })
        this.addProp({
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1", "animate2"],
            additionalParams: {
                selectItems: ["animate1", "animate2"]
            }
        });
    }

    static getName(): string {
        return "Content 19";
    }

    render() {
        const leftSideSubTitle = this.getPropValue("leftSideSubTitle");
        const leftSideTitle = this.getPropValue("leftSideTitle");
        const leftSideText = this.getPropValue("leftSideText");

        const rightNavigateText = this.getPropValue("rightNavigateText");
        const rightNavigateTo = this.getPropValue("rightNavigateTo");
        const rightNavigateIcon = this.getPropValue("rightNavigateIcon");
        const rightNavigateContainer = this.castToString(rightNavigateText) || (rightNavigateIcon);

        const leftNavigateText = this.getPropValue("leftNavigateText");
        const leftNavigateTo = this.getPropValue("leftNavigateTo");
        const leftNavigateIcon = this.getPropValue("leftNavigateIcon");
        const leftNavigateContainer = this.castToString(leftNavigateText) || (leftNavigateIcon);

        const image = this.getPropValue("image");

        const rightSideSubTitle = this.getPropValue("rightSideSubTitle");
        const rightSideTitle = this.getPropValue("rightSideTitle");
        const rightSideText = this.getPropValue("rightSideText");

        const showLeftSide = this.castToString(leftSideSubTitle) || this.castToString(leftSideTitle) || this.castToString(leftSideText) || leftNavigateContainer;
        const showRightSide = this.castToString(rightSideSubTitle) || this.castToString(rightSideTitle) || this.castToString(rightSideText) || rightNavigateContainer;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showLeftSide && (
                        <div className={this.decorateCSS("side-container")}>
                            <div className={this.decorateCSS("side-container-wrap")}>
                                <div className={this.decorateCSS("side")}>
                                    {this.castToString(leftSideSubTitle) && (
                                        <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                                            {leftSideSubTitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {this.castToString(leftSideTitle) && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {leftSideTitle}
                                        </Base.SectionTitle>
                                    )}
                                    {this.castToString(leftSideText) && (
                                        <Base.SectionDescription className={this.decorateCSS("text")}>
                                            {leftSideText}
                                        </Base.SectionDescription>
                                    )}
                                    {leftNavigateContainer && (
                                        <ComposerLink
                                            path={leftNavigateTo}>
                                            <div className={this.decorateCSS("navigate-container")}
                                                data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                                                {this.castToString(leftNavigateText) && (
                                                    <div className={this.decorateCSS("navigate-text")}>
                                                        {leftNavigateText}
                                                    </div>
                                                )}
                                                {rightNavigateIcon && (
                                                    <ComposerIcon
                                                        name={leftNavigateIcon}
                                                        propsIcon={{
                                                            className: this.decorateCSS("left-navigate-icon"),
                                                        }}>
                                                    </ComposerIcon>
                                                )}
                                            </div>
                                        </ComposerLink>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {image && (
                        <div className={this.decorateCSS("middle-container")}
                            data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                            <div className={this.decorateCSS("middle-container-wrap")}>
                                <div className={this.decorateCSS("middle")}>
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                    )}
                    {showRightSide && (
                        <div className={this.decorateCSS("side-container")}>
                            <div className={this.decorateCSS("side-container-wrap")}>
                                <div className={this.decorateCSS("side")}>
                                    {this.castToString(rightSideSubTitle) && (
                                        <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                                            {rightSideSubTitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {this.castToString(rightSideTitle) && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {rightSideTitle}
                                        </Base.SectionTitle>
                                    )}
                                    {this.castToString(rightSideText) && (
                                        <Base.SectionDescription className={this.decorateCSS("text")}>
                                            {rightSideText}
                                        </Base.SectionDescription>
                                    )}
                                    {rightNavigateContainer && (
                                        <ComposerLink
                                            path={rightNavigateTo}>
                                            <div className={this.decorateCSS("navigate-container")}
                                                data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                                                {this.castToString(rightNavigateText) && (
                                                    <div className={this.decorateCSS("navigate-text")}>
                                                        {rightNavigateText}
                                                    </div>
                                                )}
                                                {rightNavigateIcon && (
                                                    <ComposerIcon
                                                        name={rightNavigateIcon}
                                                        propsIcon={{
                                                            className: this.decorateCSS("right-navigate-icon"),
                                                        }}>
                                                    </ComposerIcon>
                                                )}
                                            </div>
                                        </ComposerLink>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container >
        )
    }
}

export default Content19;