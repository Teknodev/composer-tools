import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection4 extends BaseIntroSection {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "cover-image",
            displayer: "Image",
            value: {
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69367c26496aa1002ca9a73c?alt=media",
                type: "image",
            },
            additionalParams: { availableTypes: ["image", "video"] }
        })

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
        });

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
            value: "Online University of In-Demand Professions",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value:
                "Objectively innovate empowered manufactured products whereas parallel platforms.",
        });

        this.addProp({
            type: "string",
            key: "label",
            displayer: "Label",
            value:
                "OUR COURSES",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Business", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Programming", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Marketing", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Design", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "Intro Section 4";
    }

    render() {
        const coverImage = this.getPropValue("cover-image");
        const buttonItem = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const subtitle = this.castToString(this.getPropValue("subtitle")) || "";
        const title = this.castToString(this.getPropValue("title")) || "";
        const description = this.castToString(this.getPropValue("description")) || "";
        const label = this.castToString(this.getPropValue("label")) || "";
        const hasMedia = !!coverImage?.url;
        const enableOverlay = hasMedia && this.getPropValue("overlay");
        const hasContent = subtitle || title || description || label || buttonItem.length > 0;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${hasMedia ? this.decorateCSS("has-media") : this.decorateCSS("no-media")}`}>
                {hasMedia && (
                    <div className={this.decorateCSS("background-container")}>
                        <Base.Media
                            value={coverImage}
                            className={this.decorateCSS("background-media")}
                        />
                        {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
                    </div>
                )}
                {hasContent && (
                    <Base.MaxContent className={this.decorateCSS("content")}>
                        <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                            {subtitle && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {title && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                            {description && (
                                <Base.SectionDescription
                                    className={this.decorateCSS("description")}
                                >
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                            {label && (
                                <Base.H6 className={this.decorateCSS("label")}>
                                    {this.getPropValue("label")}
                                </Base.H6>
                            )}
                            {buttonItem.length > 0 && (
                                <Base.Row className={this.decorateCSS("button-container")}>
                                    {buttonItem.map(
                                        (buttonObj, index: number) => {
                                            const buttonText = this.castToString(buttonObj.text);
                                            return buttonText && (
                                                <ComposerLink key={index} path={buttonObj.url}>
                                                    <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                                                        <Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>
                                                    </Base.Button>
                                                </ComposerLink>
                                            );
                                        }
                                    )}
                                </Base.Row>
                            )}
                        </Base.VerticalContent>
                    </Base.MaxContent>
                )}
            </Base.Container>
        )
    }
}

export default IntroSection4;