import * as React from "react";
import styles from "./content14.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";


class Content14 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subTitle",
            displayer: "Sub Title",
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
            key: "text",
            displayer: "Text",
            value: "In a word, the whale was seized and sold, and his Grace in the Duke of Wellington received the money. Thinking that abis viewed in some particular lights, the case might by ai bare a possibility in some small degree be deemed, undere the offs circumstances, a rather hard one, an honest mans clergyman ofi the town addressed a note to. In a word, the whale was seized and sold, and his Grace the Duke of In a word, the whale was seized and sold, and his Grace in the Duke of Wellington received the money. Thinking that abis viewed in some particular lights, the case might by ai bare a possibility in some small degree be deemed, undere the offs circumstances, a rather hard one, an honest mans clergyman ofi the town addressed a note to. In a word, the whale was seized and sold, and his Grace the Duke of"
        })
    }

    static getName(): string {
        return "Content 14";
    }

    render() {

        const subTitleExist = this.getPropValue("subTitle");
        const titleExist = this.getPropValue("title");
        const textExist = this.getPropValue("text");

        const showContent = this.castToString(subTitleExist) || this.castToString(titleExist) || this.castToString(textExist);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showContent && (
                        <div className={this.decorateCSS("content")}>
                            {this.castToString(subTitleExist) && (
                                <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                                    {subTitleExist}
                                </Base.SectionSubTitle>
                            )}
                            {this.castToString(titleExist) && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {titleExist}
                                </Base.SectionTitle>
                            )}
                            {this.castToString(textExist) && (
                                <Base.SectionDescription className={this.decorateCSS("text-container")}>
                                    {textExist}
                                </Base.SectionDescription>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }

}

export default Content14;