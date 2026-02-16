import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action25.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class CallToAction25Page extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        })

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
            value: "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Download", "", null, null, "White"),
            ],
        });

        this.addProp({
            type: "media",
            key: "button-icon",
            displayer: "Button Icon",
            additionalParams: {
                availableTypes: ["icon"],
            },
            value: {
                type: "icon",
                name: "IoArrowDown",
            },
        });


    }

    static getName(): string {
        return "Call To Action 25";
    }

    render() {

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content")}>


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
                                                    <Base.Media value={this.getPropValue("button-icon")} className={this.decorateCSS("button-icon")}></Base.Media>
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

export default CallToAction25Page;