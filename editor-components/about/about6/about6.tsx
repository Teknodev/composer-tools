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
                availableTypes: ["image"],
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
        const subTitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const leftText = this.getPropValue("leftText");
        const rightText = this.getPropValue("rightText");
        const signature = this.getPropValue("signature");
        const name = this.getPropValue("name");

        const showTextContainer = this.castToString(leftText) || this.castToString(rightText);
        const showTopContainer = this.castToString(subTitle) || this.castToString(title);
        const showBottomContainer = (signature) || this.castToString(name);
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
                                    {this.castToString(subTitle) && (
                                        <Base.SectionSubTitle
                                            className={`${subTitleType === "badge"
                                                ? this.decorateCSS("subtitle-badge")
                                                : this.decorateCSS("subtitle")
                                                } `}>
                                            {subTitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {this.castToString(title) && (
                                        <Base.SectionTitle
                                            className={`${this.decorateCSS("title")} 
                                            `}>
                                            {title}
                                        </Base.SectionTitle>
                                    )}
                                </div>
                            )}
                    {showContentContainer && showTextContainer && (
                                <div
                                    className={this.decorateCSS(
                                        "text-container"
                                    )}>
                                    {this.castToString(leftText) && (
                                        <Base.SectionDescription className={this.decorateCSS("left-text")}>
                                            {leftText}
                                        </Base.SectionDescription>
                                    )}
                                    {this.castToString(rightText) && (
                                        <Base.SectionDescription className={this.decorateCSS("right-text")}>
                                            {rightText}
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
                                    {this.castToString(name) && (
                                        <Base.P className={this.decorateCSS("name")}>
                                            {name}
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