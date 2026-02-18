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
            type: "image",
            key: "media",
            displayer: "Media",
            value: "null"
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false
        });

        this.addProp({
            type: "boolean",
            key: "isActive",
            displayer: "Active",
            value: true
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Use one tool instead of five.",
        });

        this.addProp({
            type: "string",
            key: "title2",
            displayer: "Title 2",
            value: "lorem ipsum dolor sit of five guys.",
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
                INPUTS.BUTTON(
                    "button",
                    "Button",
                    "Get Started",
                    "",
                    "",
                    null,
                    "White"
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
        const overlay = this.getPropValue("overlay");

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

                            {this.castToString(this.getPropValue("title2")) && (
                                <Base.SectionTitle className={this.decorateCSS("title2")}>
                                    {this.getPropValue("title2")}
                                </Base.SectionTitle>
                            )}

                            {this.castToString(this.getPropValue("description")) && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}
                        </div>

                        {media && (
                            <div className={this.decorateCSS("media-wrapper")}>
                                <Base.Media
                                    value={media}
                                    className={this.decorateCSS("media")}
                                />
                                {overlay && (
                                    <div className={this.decorateCSS("overlay")} />
                                )}
                            </div>
                        )}

                        {this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0 && (
                            <div className={this.decorateCSS("button-column")}>
                                {this.castToObject<INPUTS.CastedButton[]>("buttons").map(
                                    (button: INPUTS.CastedButton, index: number) =>
                                        this.castToString(button.text) && (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button
                                                    className={this.decorateCSS("button")}
                                                    buttonType={button.type}
                                                >
                                                    {button.icon && (
                                                        <Base.Media
                                                            value={button.icon as any}
                                                            className={this.decorateCSS("button-icon")}
                                                        />
                                                    )}
                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                        {button.text}
                                                    </Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        )
                                )}
                            </div>
                        )}
                    </div>

                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction31Page;
