import * as React from "react";
import styles from "./about6.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

class About6 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "CHOCO LOVE"
        })
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "ABOUT US"
        })
        this.addProp({
            type: "string",
            key: "leftText",
            displayer: "Left Text",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ullamco laboris nisi ut a Excepteur."
        })
        this.addProp({
            type: "string",
            key: "rightText",
            displayer: "Right Text",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ullamco laboris nisi ut."
        })
        this.addProp({
            type: "media",
            key: "signature",
            displayer: "Media",
            additionalParams: {
                availableTypes: ["image", "video"],
            },
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68ee2800c3c1b5002c3ba970?alt=media&timestamp=1760438283526"
            }
        })
        this.addProp({
            type: "string",
            key: "name",
            displayer: "Name",
            value: "Maria T. Jones"
        })
    }

    static getName(): string {
        return "About 6";
    }

    render() {
        const subTitleStr = this.castToString(this.getPropValue("subtitle"));
        const titleStr = this.castToString(this.getPropValue("title"));
        const leftTextStr = this.castToString(this.getPropValue("leftText"));
        const rightTextStr = this.castToString(this.getPropValue("rightText"));
        const signature = this.getPropValue("signature");
        const nameStr = this.castToString(this.getPropValue("name"));

        const leftExists = leftTextStr;
        const rightExists = rightTextStr;
        const showTextContainer = leftTextStr || rightTextStr;
        const singleText = (leftTextStr && !rightTextStr) || (!leftTextStr && rightTextStr);
        const showTopContainer = subTitleStr || titleStr;
        const showBottomContainer = (signature) || nameStr;
        const showContentContainer = showTopContainer || showTextContainer || showBottomContainer;

        const subTitleType = Base.getSectionSubTitleType();

        return (
            <Base.Container className={`${this.decorateCSS("container")} `}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showContentContainer && showTopContainer && (
                        <div
                            className={this.decorateCSS(
                                "top-container"
                            )}>
                            {subTitleStr && (
                                <Base.SectionSubTitle
                                    className={`${subTitleType === "badge"
                                        ? this.decorateCSS("subtitle-badge")
                                        : this.decorateCSS("subtitle")
                                        } `}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {titleStr && (
                                <Base.SectionTitle
                                    className={`${this.decorateCSS("title")} 
                                            `}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                        </div>
                    )}
                    {showContentContainer && showTextContainer && (
                        <div
                            className={`${this.decorateCSS("text-container")} ${singleText && this.decorateCSS("single-text")}`}>
                            {leftTextStr && (
                                <Base.SectionDescription className={this.decorateCSS("left-text")}>
                                    {this.getPropValue("leftText")}
                                </Base.SectionDescription>
                            )}
                            {rightTextStr && (
                                <Base.SectionDescription className={this.decorateCSS("right-text")}>
                                    {this.getPropValue("rightText")}
                                </Base.SectionDescription>
                            )}
                        </div>
                    )}
                    {showContentContainer && showBottomContainer && (
                        <div className={this.decorateCSS(
                            "bottom-container"
                        )}>
                            {signature && (
                                <div className={this.decorateCSS("signature")}>
                                    <Base.Media
                                        value={this.getPropValue("signature")}
                                        className={this.decorateCSS("signature-image")}
                                    />
                                </div>
                            )}
                            {nameStr && (
                                <Base.P className={this.decorateCSS("name")}>
                                    {this.getPropValue("name")}
                                </Base.P>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default About6;