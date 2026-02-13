import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action24.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction24 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "enable_card",
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
            value: "Ready to dive in? Start Your Trial Today",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Join thousands of satisfied customers who trust us with their business needs.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Get Started Now", "", "FaArrowRight", null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 24";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enable_card = this.getPropValue("enable_card");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {enable_card && (
                    <div className={this.decorateCSS("background-top")}></div>
                )}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("card-container")}>
                        <div className={`${this.decorateCSS("card")} ${enable_card && this.decorateCSS("has-background")}`}>
                            <Base.VerticalContent className={this.decorateCSS("card-content")}>
                                {subtitle && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                        {subtitle}
                                    </Base.SectionSubTitle>
                                )}
                                {title && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
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
                                        {buttons.map(
                                            (item: INPUTS.CastedButton, index: number) => {
                                                const buttonText = this.castToString(item.text);
                                                const iconExist = (item.icon as any)?.name;

                                                if (!buttonText && !iconExist) return null;

                                                return (
                                                    <ComposerLink key={index} path={item.url}>
                                                        <Base.Button
                                                            buttonType={item.type}
                                                            className={this.decorateCSS("button")}
                                                        >
                                                            {buttonText && (
                                                                <Base.P className={this.decorateCSS("button-text")}>
                                                                    {buttonText}
                                                                </Base.P>
                                                            )}
                                                            {iconExist && (
                                                                <Base.Media
                                                                    className={this.decorateCSS("button-icon")}
                                                                    value={item.icon as any}
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
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction24;
