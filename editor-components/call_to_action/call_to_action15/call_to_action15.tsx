import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action15.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction15 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Have Any Project?"
        });
        this.addProp({
            type: "string",
            key: "titlePrimary",
            displayer: "Title Primary",
            value: "Lets Talk",
        });
        this.addProp({
            type: "string",
            key: "titleHighlight",
            displayer: "Title Highlight",
            value: " & Grow Your Business",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "We're ready to help you. Our expert is here, just send a message."
        });
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Black")
            ]
        });
    }

    static getName(): string {
        return "Call To Action 15";
    }
    render() {
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const titlePrimary = this.castToString(this.getPropValue("titlePrimary"));
        const titleHighlight = this.castToString(this.getPropValue("titleHighlight"));
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("header")}>
                        {this.castToString(this.getPropValue("subtitle")) && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {this.getPropValue("subtitle")}
                            </Base.SectionSubTitle>
                        )}
                        {(titlePrimary || titleHighlight) && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                <span className={this.decorateCSS("title-primary")}>
                                    {titlePrimary}
                                </span>
                                <span className={this.decorateCSS("title-highlight")}>
                                    {titleHighlight}
                                </span>
                            </Base.SectionTitle>
                        )}
                        {this.castToString(this.getPropValue("description")) && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {this.getPropValue("description")}
                            </Base.SectionDescription>
                        )}
                    </Base.VerticalContent>
                    {visibleButtons.length > 0 && (
                        <div className={this.decorateCSS("button-container")}>
                            {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                                return this.castToString(item.text) && (
                                    <ComposerLink key={`button-${index}`} path={item.url}>
                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default CallToAction15;