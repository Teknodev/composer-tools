import * as React from "react";
import styles from "./about4.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

class About4 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "WHAT WE DO"
        })
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Unique, truly responsive and an functional Website that impress."
        })
        this.addProp({
            type: "string",
            key: "leftText",
            displayer: "Left Text",
            value: "In a word, the whale was seized and sold, and his Grace in the Duke of Wellington received the money. Thinking that abis viewed in some particular lights, the case might by ai bare a possibility in some small degree be deemed, undere the offs circumstances, a rather hard one, an honest mans clergyman ofi the town addressed a note to. In a word, the whale was seized and sold, and his Grace the Duke of"
        })
        this.addProp({
            type: "string",
            key: "rightText",
            displayer: "Right Text",
            value: "In a word, the whale was seized and sold, and his Grace in the Duke of Wellington received the money. Thinking that abis viewed in some particular lights, the case might by ai bare a possibility in some small degree be deemed, undere the offs circumstances, a rather hard one, an honest mans clergyman ofi the town addressed a note to. In a word, the whale was seized and sold, and his Grace the Duke of"
        })
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Read More", "", null, null, "Link"),
            ],
        });
    }

    static getName(): string {
        return "About 4";
    }

    render() {

        const subTitleStr = this.castToString(this.getPropValue("subtitle"));
        const titleStr = this.castToString(this.getPropValue("title"));
        const leftTextStr = this.castToString(this.getPropValue("leftText"));
        const rightTextStr = this.castToString(this.getPropValue("rightText"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((button) => this.castToString(button.text));
        const singleText = (leftTextStr && !rightTextStr) || (!leftTextStr && rightTextStr);

        const showContent = subTitleStr || titleStr || leftTextStr || rightTextStr || hasValidButtons;
        const showTextContainer = leftTextStr || rightTextStr;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showContent && (
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                            {subTitleStr && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {this.getPropValue("subtitle")}
                                </Base.SectionSubTitle>
                            )}
                            {titleStr && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}
                            {showTextContainer && (
                                <div className={`${this.decorateCSS("text-container")} ${singleText && this.decorateCSS("single-text")}`}>
                                    {leftTextStr && (
                                        <Base.SectionDescription className={this.decorateCSS("left-text")}>
                                            {this.getPropValue("leftText")}
                                        </Base.SectionDescription>
                                    )}
                                    {rightTextStr && (
                                        <Base.SectionDescription className={this.decorateCSS("right-text")}>
                                            {this.getPropValue("rightText")}
                                        </Base.SectionDescription>
                                    )}
                                </div>
                            )}

                            {hasValidButtons && (
                                <div className={this.decorateCSS("buttons-container")}>
                                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                        if (!this.castToString(button.text)) return null;

                                        return (
                                            <ComposerLink key={index} path={button.url}>
                                                <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }

}

export default About4;