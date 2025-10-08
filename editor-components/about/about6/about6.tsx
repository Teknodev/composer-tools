import * as React from "react";
import styles from "./about6.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

class About6 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "image",
            key: "bgImage",
            displayer: "Background Image",
            value: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747148312/uploads/1747148311367-Ads%C3%84%C2%B1z_tasar%C3%84%C2%B1m_%2818%29.png.png"
        })
        this.addProp({
            type: "string",
            key: "subTitle",
            displayer: "Sub Title",
            value: "CHOCO LOVE"
        })
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "ABOUT US"
        })
        this.addProp({
            type: "string",
            key: "text1",
            displayer: "Text",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ullamco laboris nisi ut a Excepteur."
        })
        this.addProp({
            type: "string",
            key: "text2",
            displayer: "Text 2",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ullamco laboris nisi ut."
        })
        this.addProp({
            type: "image",
            key: "signature",
            displayer: "Signature",
            value: "https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/01/h1-author-img2.png"
        })
        this.addProp({
            type: "string",
            key: "name",
            displayer: "Name",
            value: "Maria T. Jones"
        })
    }

  static getName(): string {
    return "About 6";
  }

    render() {
        const bgImage = this.getPropValue("bgImage");
        const subTitle = this.getPropValue("subTitle");
        const title = this.getPropValue("title");
        const text1 = this.getPropValue("text1");
        const text2 = this.getPropValue("text2");
        const signature = this.getPropValue("signature");
        const name = this.getPropValue("name");

        const showTextContainer = this.castToString(text1) || this.castToString(text2);
        const showTopContainer = this.castToString(subTitle) || this.castToString(title);
        const showBottomContainer = (signature) || this.castToString(name);
        const showContentContainer = showTopContainer || showTextContainer || showBottomContainer;

        const subTitleType = Base.getSectionSubTitleType();

        return (
            <Base.Container className={`${this.decorateCSS("container")} `}
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showContentContainer && (
                        <div className={this.decorateCSS("content")}>
                            {showTopContainer && (
                                <div
                                    className={this.decorateCSS(
                                        bgImage ? "top-container-with-bg" : "top-container"
                                    )}>
                                    {this.castToString(subTitle) && (
                                        <Base.SectionSubTitle
                                            className={`${subTitleType === "badge"
                                                ? this.decorateCSS("sub-title-badge")
                                                : this.decorateCSS("sub-title")
                                                } ${bgImage ? this.decorateCSS("sub-title-with-bg") : ""}`}>
                                            {subTitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {this.castToString(title) && (
                                        <Base.SectionTitle
                                            className={`${this.decorateCSS("title")} 
                                            ${bgImage ? this.decorateCSS("title-with-bg") : ""}`}>
                                            {title}
                                        </Base.SectionTitle>
                                    )}
                                </div>
                            )}

                            {showTextContainer && (
                                <div
                                    className={this.decorateCSS(
                                        bgImage ? "text-container-with-bg" : "text-container"
                                    )}>
                                    {this.castToString(text1) && (
                                        <div className={this.decorateCSS("text-1")}>
                                            {text1}
                                        </div>
                                    )}
                                    {this.castToString(text2) && (
                                        <div className={this.decorateCSS("text-2")}>
                                            {text2}
                                        </div>
                                    )}
                                </div>
                            )}
                            {showBottomContainer && (
                                <div className={this.decorateCSS(
                                    bgImage ? "bottom-container-with-bg" : "bottom-container"
                                )}>
                                    {signature && (
                                        <div className={this.decorateCSS("signature")}>
                                            <img src={signature} alt={signature} className={this.decorateCSS("signature-image")} />
                                        </div>
                                    )}
                                    {this.castToString(name) && (
                                        <div className={this.decorateCSS("name")}>
                                            {name}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default About6;