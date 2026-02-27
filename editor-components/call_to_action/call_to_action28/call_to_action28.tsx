import * as React from "react";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action28.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
    media: TypeMediaInputValue;
    overlay: boolean;
}

class CallToAction28 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

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
                        availableTypes: ["image", "icon", "video"],
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
            value: "Ready to dive in? Start Your Trial Today",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Let's Start", "", null, null, "Black"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 28";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const imageProps = this.castToObject<Background>("image");
        const media = imageProps?.media;
        const mediaOverlay = imageProps?.overlay;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content")}>
                        {media && (
                            <div className={this.decorateCSS("media-wrapper")}>
                                <div className={this.decorateCSS("media-container")}>
                                    <Base.Media
                                        value={media}
                                        className={`${this.decorateCSS("media")} ${media.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                                    />
                                    {mediaOverlay && (
                                        <div className={this.decorateCSS("media-overlay")} />
                                    )}
                                </div>
                            </div>
                        )}
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
                                    (item: INPUTS.CastedButton, index: number) =>
                                        this.castToString(item.text) && (
                                            <ComposerLink key={index} path={item.url}>
                                                <Base.Button
                                                    buttonType={item.type}
                                                    className={this.decorateCSS("button")}
                                                >
                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                        {item.text}
                                                    </Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        )
                                )}
                            </div>
                        )}
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction28;
