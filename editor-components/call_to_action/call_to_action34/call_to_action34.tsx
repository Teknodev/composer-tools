import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action34.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class CallToAction34Page extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "isBackgroundColored",
            displayer: "Colored Background",
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
            value: "Special gifts for your loved ones",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "You can purchase ready-made gift certificates for any amount and any service",
        });

        // this.addProp(INPUTS.BUTTON("button", "Button", "Sign Up Online", "", null, null, "Primary"));


        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Sign Up Online", "", null, null, "Primary")
            ]
        })

        this.addProp({
            type: "object",
            key: "mediaGroup",
            displayer: "Media Settings",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image", "video"],
                    },
                    value: {
                        type: "image",
                        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: true,
                }
            ]
        });

        this.addProp({
            type: "select",
            key: "subtitleType",
            displayer: "Subtitle Type",
            value: "line",
            additionalParams: {
                selectItems: ["default", "line", "badge"]
            }
        });
    }

    static getName(): string {
        return "Call To Action 34";
    }

    render() {
        const isColored = this.getPropValue("isBackgroundColored");
        const subtitleType = this.getPropValue("subtitleType");
        const currentSubtitleType = isColored && subtitleType === "badge" ? "default" : subtitleType;
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const mediaGroup = this.castToObject<any>("mediaGroup");
        const media = mediaGroup.media;
        const showOverlay = mediaGroup.overlay;
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("card-wrapper")} ${isColored ? this.decorateCSS("colored") : ""}`}>
                        <div className={`${this.decorateCSS("left-column")} ${isColored ? this.decorateCSS("colored") : ""}`}>
                            <Base.VerticalContent>
                                {this.castToString(this.getPropValue("subtitle")) && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}
                                        subtitleType={currentSubtitleType}>
                                        {this.getPropValue("subtitle")}
                                    </Base.SectionSubTitle>
                                )}

                                {this.castToString(this.getPropValue("title")) && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}

                                {this.castToString(this.getPropValue("description")) && (
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}

                                {buttons.length > 0 && (
                                    <div className={this.decorateCSS("button-container")}>
                                        {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                            return (this.castToString(button.text) || button.icon) && (
                                                <ComposerLink key={index} path={button.url}>
                                                    <div className={this.decorateCSS("button")}>
                                                        {this.castToString(button.text) && (
                                                            <Base.P className={this.decorateCSS("button-text")}>
                                                                {button.text}
                                                            </Base.P>
                                                        )}
                                                    </div>
                                                </ComposerLink>
                                            );
                                        })}
                                    </div>
                                )}


                            </Base.VerticalContent>
                        </div>

                        {media?.url && (
                            <div className={this.decorateCSS("right-column")}>
                                <div className={this.decorateCSS("media-container")}>
                                    {showOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                    <Base.Media
                                        value={media}
                                        className={this.decorateCSS("media")}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction34Page;
