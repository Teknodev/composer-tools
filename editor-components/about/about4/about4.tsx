import * as React from "react";
import styles from "./about4.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";


class About4 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subTitle",
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
    }

  static getName(): string {
    return "About 4";
  }

    render() {

        const subTitle = this.getPropValue("subTitle");
        const title = this.getPropValue("title");
        const leftText = this.getPropValue("leftText");
        const rightText = this.getPropValue("rightText");

        const showContent = this.castToString(subTitle) || this.castToString(title) || this.castToString(leftText) || this.castToString(rightText);
        const showTextContainer = this.castToString(leftText) || this.castToString(rightText);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showContent && (
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                            {this.castToString(subTitle) && (
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                    {subTitle}
                                </Base.SectionSubTitle>
                            )}
                            {this.castToString(title) && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {title}
                                </Base.SectionTitle>
                            )}
                            {showTextContainer && (
                                <div className={this.decorateCSS("text-container")}>
                                    {this.castToString(leftText) && (
                                        <Base.SectionDescription className={this.decorateCSS("left-text")}>
                                            {leftText}
                                        </Base.SectionDescription>
                                    )}
                                    {this.castToString(rightText) && (
                                        <Base.SectionDescription className={this.decorateCSS("right-text")}>
                                            {rightText}
                                        </Base.SectionDescription>
                                    )}
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