import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action31.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class CallToAction31Page extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        });

        this.addProp({
            type: "boolean",
            key: "enable_card",
            displayer: "Enable Card",
            value: true
        });

        this.addProp({
            type: "image",
            key: "media",
            displayer: "Media",
            value: "https://storage.googleapis.com/composer-4c632.appspot.com/v1/composer/666/695/1722923982855-man-standing-on-rock-3000x2000.jpeg"
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true
        });

        this.addProp({
            type: "number",
            key: "overlay_opacity",
            displayer: "Overlay Opacity (0-1)",
            value: 0.2
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "What Are You Waiting For?",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Download", "", "IoArrowDown", null, "White"),
            ],
        });

    }

    static getName(): string {
        return "Call To Action 31";
    }

    render() {

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={`${this.decorateCSS("content")} ${this.getPropValue("enable_card") ? this.decorateCSS("with-card") : ""}`}>

                        {this.castToString(this.getPropValue("media")) && (
                            <div className={this.decorateCSS("media-wrapper")}>
                                <Base.Media
                                    value={this.getPropValue("media")}
                                    className={this.decorateCSS("media")}
                                />
                                {this.getPropValue("overlay") && (
                                    <div
                                        className={this.decorateCSS("overlay")}
                                        style={{ opacity: this.getPropValue("overlay_opacity") }}
                                    ></div>
                                )}
                            </div>
                        )}

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

                        {this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0 && (
                            <div className={this.decorateCSS("button-container")}>
                                {this.castToObject<INPUTS.CastedButton[]>("buttons").map(
                                    (button: INPUTS.CastedButton, index: number) =>
                                        this.castToString(button.text) && (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                                                    {button.icon && (
                                                        <Base.Media value={button.icon as any} className={this.decorateCSS("button-icon")}></Base.Media>
                                                    )}
                                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
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

export default CallToAction31Page;
