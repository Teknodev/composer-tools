import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action31.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

class CallToAction31Page extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "<span style='color: var(--composer-primary-color)'>Use one tool instead of five.</span><br> Save your time with Impreza."
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "",
        });


        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "media",
            key: "media",
            displayer: "Media",
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/699c5a24771c03002cc6b0ca?alt=media",
            }
        });

        this.addProp({
            type: "boolean",
            key: "isActive",
            displayer: "Active",
            value: true
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
                    "",
                    "",
                    null,
                )
            ],
        });
    }

    static getName(): string {
        return "Call To Action 31";
    }

    render() {
        if (!this.getPropValue("isActive")) return null;

        const media = this.getPropValue("media");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>

                    <div className={this.decorateCSS("header-row")}>
                        <div className={this.decorateCSS("text-column")}>
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
                        </div>
                        <div className={this.decorateCSS("button-column")}>
                            {this.castToObject<INPUTS.CastedButton[]>("buttons").map(
                                (button: INPUTS.CastedButton, index: number) =>
                                    this.castToString(button.text) && (
                                        <ComposerLink key={index} path={button.url}>

                                            <Base.Button
                                                className={this.decorateCSS("button")}
                                                buttonType={button.type}>

                                                <Base.P className={this.decorateCSS("button-text")}>
                                                    {button.text}
                                                </Base.P>
                                            </Base.Button>
                                        </ComposerLink>
                                    )
                            )}
                        </div>
                    </div>

                    {media && (
                        <div className={this.decorateCSS("media-wrapper")}>
                            <Base.Media
                                value={media}
                                className={this.decorateCSS("media")}
                            />
                            <div className={this.decorateCSS("overlay")} />
                        </div>
                    )}

                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction31Page;
