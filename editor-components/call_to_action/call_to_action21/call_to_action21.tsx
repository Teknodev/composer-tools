import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action21.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction21 extends BaseCallToAction {
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
            value: "Quickly See Which Card Offers The Lowest rates",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value:
                "Capitalize on low hanging fruit to identify a value added activity to beta test with additional from DevOps.",
        });

        this.addProp({
            type: "boolean",
            key: "enable_card",
            displayer: "Colored Background",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Start Now", "", null, null, "White"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 21";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enable_card = this.getPropValue("enable_card");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div
                        className={`${this.decorateCSS("card")} ${enable_card && this.decorateCSS("has-background")}`}
                    >
                        <Base.VerticalContent className={this.decorateCSS("card-content")}>
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
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction21;
