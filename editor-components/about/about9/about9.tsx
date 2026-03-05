import * as React from "react";
import styles from "./about9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseAbout } from "composer-tools/editor-components/EditorComponent";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class About9 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

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
            value: "DIGITAL EXPERIENCE WITH DESIGN AND TECHNOLOGY."
        })
        this.addProp({
            type: "media",
            key: "image1",
            displayer: "First Media",
            additionalParams: {
                availableTypes: ["image", "video"],
            },
            value: {
                type: "image",
                url: "https://html-roof.jrstudio.com.co/img/general/image-01.jpg"
            }
        })
        this.addProp({
            type: "media",
            key: "image2",
            displayer: "Second Media",
            additionalParams: {
                availableTypes: ["image", "video"],
            },
            value: {
                type: "image",
                url: "https://html-roof.jrstudio.com.co/img/general/image-02.jpg"
            }
        })

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "string",
            key: "text1",
            displayer: "First Text",
            value: "Completely network collaborative web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Ratione atque dolorum nostrum a est voluptatibus."
        })
        this.addProp({
            type: "string",
            key: "text2",
            displayer: "Second Text",
            value: "web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Quickly promote sticky testing procedures before unique process improvements."
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "About 9";
    }

    render() {
        const titleStr = this.castToString(this.getPropValue("title"));
        const subtitleStr = this.castToString(this.getPropValue("subtitle"));
        const text1Str = this.castToString(this.getPropValue("text1"));
        const text2Str = this.castToString(this.getPropValue("text2"));
        const image1 = this.getPropValue("image1");
        const image2 = this.getPropValue("image2");
        const overlay = this.getPropValue("overlay") as boolean;
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const hasValidButtons = buttons.some((button) => this.castToString(button.text));
        const hasImage1 = !!image1?.url;
        const hasImage2 = !!image2?.url;
        const hasImages = hasImage1 || hasImage2;
        const showTopContainer = titleStr || hasImages;
        const showBottomContainer = text1Str || text2Str || hasValidButtons;
        const showSideContainer = showTopContainer || showBottomContainer;

        const alignmentValue = Base.getContentAlignment();

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showSideContainer && (
                        <div className={`${this.decorateCSS("side-container")} ${hasImages && this.decorateCSS("with-image")} ${alignmentValue === "center" && this.decorateCSS("center")}`}>
                            {showTopContainer && (
                                <div className={this.decorateCSS("top-container")}>
                                    <Base.VerticalContent className={this.decorateCSS("title-container")}>
                                        {subtitleStr && (
                                            <div className={this.decorateCSS("subtitle-wrapper")}>
                                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                                    {this.getPropValue("subtitle")}
                                                </Base.SectionSubTitle>
                                            </div>
                                        )}
                                        {titleStr && (
                                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                                {this.getPropValue("title")}
                                            </Base.SectionTitle>
                                        )}
                                    </Base.VerticalContent>
                                    {image1?.url && (
                                        <div className={this.decorateCSS("image-1")}>
                                            <Base.Media value={image1} className={this.decorateCSS("image")} />
                                            {overlay && <div className={this.decorateCSS("overlay")} />}
                                        </div>
                                    )}
                                    {image2?.url && (
                                        <div className={this.decorateCSS("image-2")}>
                                            <Base.Media value={image2} className={this.decorateCSS("image")} />
                                            {overlay && <div className={this.decorateCSS("overlay")} />}
                                        </div>
                                    )}
                                </div>
                            )}
                            {showBottomContainer && (
                                <div className={this.decorateCSS("bottom-container")}>
                                    {text1Str && (
                                        <Base.P className={this.decorateCSS("text-1")}>
                                            {this.getPropValue("text1")}
                                        </Base.P>
                                    )}
                                    {text2Str && (
                                        <Base.P className={this.decorateCSS("text-2")}>
                                            {this.getPropValue("text2")}
                                        </Base.P>
                                    )}
                                </div>
                            )}

                            {hasValidButtons && (
                                <div className={`${this.decorateCSS("buttons-container")} ${alignmentValue === "center" && !hasImages ? this.decorateCSS("center") : ""}`}>
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
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default About9;