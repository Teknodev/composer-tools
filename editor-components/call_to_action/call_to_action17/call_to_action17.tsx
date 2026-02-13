import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action17.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction17 extends BaseCallToAction {
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
            value: "In my projects I strive to create perfect interiors.",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "I believe that personal approach is the only way that helps to create houses, offices, open spaces, that contain everything you need and meet your expectations.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "See My Portfolio", "", null, null, "Primary")],
        });

    }
    static getName(): string {
        return "Call To Action 17";
    }
    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const hasContent = subtitleExist || titleExist || descriptionExist;
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={this.decorateCSS("header")}>
                            {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                            {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                            {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                        </Base.VerticalContent>
                    )}
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

export default CallToAction17;