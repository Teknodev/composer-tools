import * as React from "react";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action32.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
    media: TypeMediaInputValue;
    overlay: boolean;
}

class CallToAction32 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "enable_card",
            displayer: "Colored Background",
            value: true,
        });

        this.addProp({
            type: "object",
            key: "image",
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
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                },
            ],
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
            value: "Try BlinkPage",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Credibly innovate granular internal or \"organic\" sources whereas high standards in web-readiness.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Get Started", "", "FaArrowRight", null, "White"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 32";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enable_card = this.getPropValue("enable_card");

        const imageProps = this.castToObject<Background>("image");
        const media = imageProps?.media;
        const mediaOverlay = imageProps?.overlay;

        const hasLeftContent = subtitle || title || description || buttons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("card")} ${enable_card ? this.decorateCSS("active") : ""}`}>
                        <Base.VerticalContent className={this.decorateCSS("content-wrapper")}>
                            {hasLeftContent && (
                                <Base.VerticalContent className={this.decorateCSS("left-column")}>
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
                                    {buttons.length > 0 && (
                                        <div className={this.decorateCSS("button-container")}>
                                            {buttons.map(
                                                (item: INPUTS.CastedButton, index: number) => {
                                                    const buttonText = this.castToString(item.text);
                                                    const iconExist = item.icon && item.icon.name;

                                                    if (!buttonText && !iconExist) return null;

                                                    return (
                                                        <ComposerLink key={index} path={item.url}>
                                                            <Base.Button
                                                                buttonType={item.type}
                                                                className={this.decorateCSS("button")}
                                                            >
                                                                {buttonText && (
                                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                                        {item.text}
                                                                    </Base.P>
                                                                )}
                                                                {iconExist && (
                                                                    <Base.Media
                                                                        className={this.decorateCSS("button-icon")}
                                                                        value={item.icon}
                                                                    />
                                                                )}
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    );
                                                }
                                            )}
                                        </div>
                                    )}
                                </Base.VerticalContent>
                            )}

                            {media && (
                                <div className={this.decorateCSS("media-column")}>
                                    <div className={this.decorateCSS("media-container")}>
                                        <Base.Media
                                            value={media}
                                            className={this.decorateCSS("media")}
                                        />
                                        {mediaOverlay && (
                                            <div className={this.decorateCSS("media-overlay")} />
                                        )}
                                    </div>
                                </div>
                            )}
                        </Base.VerticalContent>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction32;
