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

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Sign Up Online", null, null, null, "White")
            ]
        })

        this.addProp({
            type: "object",
            key: "mediaGroup",
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
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/699d5727771c03002cc70a03?alt=media"
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                }
            ]
        });

    }

    static getName(): string {
        return "Call To Action 34";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const isColored = this.getPropValue("isBackgroundColored");
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasLeftContent = subtitle || title || description || buttons.length > 0;

        const mediaGroup = this.castToObject<any>("mediaGroup");
        const media = mediaGroup.media;
        const showOverlay = mediaGroup.overlay;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("card-wrapper")} ${isColored ? this.decorateCSS("colored") : ""} ${!media ? this.decorateCSS("no-media") : ""}`}>
                        {hasLeftContent && (
                            <div className={`${this.decorateCSS("left-column")} ${isColored ? this.decorateCSS("colored") : ""} ${!media ? this.decorateCSS("no-media") : ""}`}>
                                <Base.VerticalContent>
                                    {subtitle && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {subtitle}
                                        </Base.SectionSubTitle>
                                    )}

                                    {title && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}
                                        >
                                            {title}
                                        </Base.SectionTitle>
                                    )}

                                    {description && (
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {description}
                                        </Base.SectionDescription>
                                    )}

                                    {buttons.length > 0 && (
                                        <div className={this.decorateCSS("button-container")}>
                                            {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                                return (button.text || button.icon) && (
                                                    <ComposerLink key={index} path={button.url}>

                                                        <Base.Button
                                                            className={this.decorateCSS("button")}
                                                            buttonType={button.type}
                                                        >
                                                            {button.text && (
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


                                </Base.VerticalContent>
                            </div>
                        )}

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
