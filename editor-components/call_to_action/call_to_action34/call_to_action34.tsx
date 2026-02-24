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
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "TRY BLINKPAGE",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Elevate your web presence with a professionally designed theme that fits all your needs.",
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "Sing Up Online", "", null, null, "Primary"));

        this.addProp({
            type: "media",
            key: "media",
            displayer: "Media",
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/699d5727771c03002cc70a03?alt=media",
            },
        });

        this.addProp({
            type: "boolean",
            key: "isBackgroundColored",
            displayer: "Colored Background",
            value: true,
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
        });
    }

    static getName(): string {
        return "Call To Action 34";
    }

    render() {
        const button = this.castToObject<INPUTS.CastedButton>("button");
        const isColored = this.getPropValue("isBackgroundColored");
        const showOverlay = this.getPropValue("overlay");
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("card-wrapper")}>
                        <div className={`${this.decorateCSS("left-column")} ${isColored ? this.decorateCSS("colored") : ""}`}>
                            <Base.VerticalContent>
                                {this.castToString(this.getPropValue("subtitle")) && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
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

                                {(this.castToString(button.text) || button.icon) && (
                                    <div className={this.decorateCSS("button-container")}>
                                        <ComposerLink path={button.url}>
                                            <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                                                {this.castToString(button.text) && (
                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                        {button.text}
                                                    </Base.P>
                                                )}
                                            </Base.Button>
                                        </ComposerLink>
                                    </div>
                                )}
                            </Base.VerticalContent>
                        </div>

                        {this.getPropValue("media")?.url && (
                            <div className={this.decorateCSS("right-column")}>
                                <div className={this.decorateCSS("media-container")}>
                                    {showOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                    <Base.Media
                                        value={this.getPropValue("media")}
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
