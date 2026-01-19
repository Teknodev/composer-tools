import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection3 extends BaseIntroSection {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Media",
            additionalParams: { availableTypes: ["image", "video"] },
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691c5ca53596a1002b2a1afc?alt=media",
            },
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false
        });

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
            value: "Everything You Need to Run Your Websites"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: ""
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Start Now", "", null, null, "Primary")
            ],
        });

        this.addProp({
            type: "string",
            key: "label1",
            displayer: "Label 1",
            value: "First 30 days for free."
        });

        this.addProp({
            type: "string",
            key: "label2",
            displayer: "Label 2",
            value: "No credit card required."
        });
    }

    static getName(): string {
        return "Intro Section 3";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const image = this.getPropValue("image");
        const isImageExist = !!image?.url;
        const enableOverlay = this.getPropValue("overlay");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const label1 = this.castToString(this.getPropValue("label1"));
        const label2 = this.castToString(this.getPropValue("label2"));
        const hasTitleGroup = label1 || label2;
        const hasContent = subtitle || title || description || visibleButtons.length > 0 || hasTitleGroup;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                            {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                            {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                            {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                            {(visibleButtons.length > 0 || hasTitleGroup) && (
                                <div className={this.decorateCSS("button-group-container")} data-has-buttons={visibleButtons.length > 0}>
                                    {visibleButtons.length > 0 && (
                                        <Base.Row className={this.decorateCSS("button-container")}>
                                            {buttons.map((item, index) => {
                                                const buttonText = this.castToString(item.text || "");
                                                const buttonUrl = item.url || "#";
                                                return buttonText && (
                                                    <ComposerLink key={`dw-btn-${index}`} path={buttonUrl}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </Base.Row>
                                    )}
                                    {hasTitleGroup && (
                                        <div className={this.decorateCSS("label-group")}>
                                            {label1 && <Base.P className={this.decorateCSS("label1")}>{this.getPropValue("label1")}</Base.P>}
                                            {label2 && <Base.P className={this.decorateCSS("label2")}>{this.getPropValue("label2")}</Base.P>}
                                        </div>
                                    )}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    {isImageExist && (
                        <div className={this.decorateCSS("image-content")}>
                            <Base.Media value={image} className={this.decorateCSS("image")} />
                            {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default IntroSection3;