import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action31.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

class CallToAction31 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "coloredBackground",
            displayer: "Colored Background",
            value: true
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
            value: "Use one tool instead of five.<br> Save your time with BlinkPage.",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "object",
            key: "media",
            displayer: "Media",
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
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/699c5a24771c03002cc6b0ca?alt=media",
                    }
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false
                }
            ]
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON(
                    "button",
                    "Button",
                    "Get Started",
                    null,
                    null,
                    null,
                ),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 31";
    }

    render() {
        const media = this.castToObject<any>("media");
        const mediaData = media.media;
        const overlay = media.overlay;
        const alignment = Base.getContentAlignment();
        const coloredBackground = this.getPropValue("coloredBackground");
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasButtons = buttons.some(btn => btn.text || btn.icon);
        const hasHeaderContent = subtitle || title || description || hasButtons;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!coloredBackground ? this.decorateCSS("no-card") : ""} ${!mediaData?.url ? this.decorateCSS("no-media") : ""}`}>
                <Base.MaxContent className={`${this.decorateCSS("max-content")} ${!hasHeaderContent ? this.decorateCSS("no-header") : ""}`}>
                    {hasHeaderContent && (
                        <div className={`${this.decorateCSS("header-row")} ${!hasButtons ? this.decorateCSS("no-buttons") : ""} ${alignment === "center" ? this.decorateCSS("mobile-center") : ""}`}>
                            <div className={this.decorateCSS("text-column")}>
                                <Base.VerticalContent>
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
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                </Base.VerticalContent>
                            </div>
                            {hasButtons && (
                                <div className={this.decorateCSS("button-column")}>
                                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                        const castText = this.castToString(button.text);

                                        if (!castText && !button.icon) {
                                            return null;
                                        }
                                        return (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button
                                                    className={this.decorateCSS("button")}
                                                    buttonType={button.type}
                                                >
                                                    {button.icon && (
                                                        <Base.Media
                                                            value={typeof button.icon === "object" ? (button.icon as any) : { type: "icon", name: button.icon as any }}
                                                            className={this.decorateCSS("button-icon")}
                                                        />
                                                    )}
                                                    {castText && (
                                                        <Base.P className={this.decorateCSS("button-text")}>
                                                            {button.text}
                                                        </Base.P>
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    {mediaData?.url && (
                        <div className={this.decorateCSS("media-wrapper")}>
                            <Base.Media
                                value={mediaData}
                                className={this.decorateCSS("media")}
                            />
                            {overlay && <div className={this.decorateCSS("overlay")} />}
                        </div>
                    )}

                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction31;