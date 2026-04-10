import * as React from "react";
import styles from "./about6.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

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
                availableTypes: ["image", "video", "icon"],
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
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
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
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const hasValidButtons = buttons.some((button) => this.castToString(button.text));

        const showTextContainer = leftTextStr || rightTextStr;
        const singleText = (leftTextStr && !rightTextStr) || (!leftTextStr && rightTextStr);
        const showTopContainer = subTitleStr || titleStr;
        const showBottomContainer = (signature) || nameStr;
        const showContentContainer = showTopContainer || showTextContainer || showBottomContainer || hasValidButtons;

        const subTitleType = Base.getSectionSubTitleType();

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showContentContainer && (
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                            {showTopContainer && (
                                <Base.VerticalContent
                                    className={this.decorateCSS(
                                        "top-container"
                                    )}>
                                    {subTitleStr && (
                                        <Base.SectionSubTitle
                                            className={this.decorateCSS("subtitle")}>
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
                                </Base.VerticalContent>
                            )}
                            {showTextContainer && (
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
                            {hasValidButtons && (
                                <div className={this.decorateCSS("buttons-container")}>
                                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                        if (!this.castToString(button.text)) return null;

                                        return (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                            {showBottomContainer && (
                                <Base.VerticalContent className={this.decorateCSS(
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
                                </Base.VerticalContent>
                            )}
                        </Base.VerticalContent>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default About6;