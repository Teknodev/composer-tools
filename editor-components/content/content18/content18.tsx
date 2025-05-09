import * as React from "react";
import styles from "./content18.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

class Content18 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "image",
            key: "bgImage",
            displayer: "Background Image",
            value: "https://media-hosting.imagekit.io/7f30160e25db4eaa/2.png?Expires=1841393288&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1USxrh5u-ox2-aetiBNC69LxS-g4XW8KabxU5~s3eGrVkcfzaA8M3AsAHQX34s~qkGnPWbYjvA5sR9fdakwqLWGrAgD142TUsXVXXD8UL7g4JmZiOI6SSK0uNS5LeLnxDSUIZqNCl6L6YRv3QU75gPf-wqPnoDjsRCI~y5qJcJBa0ZgOLs6nu6t30dAxvwK~QXVm5VpNM3F0OvlEawuD8lfozNtAzA97xQb1ll1JdgwvD~-ZfLcCjkI~iIMcLgdK~m5y31YGqyMqw19XMjA9LgFPkP7QxmfTImd1DVfYuiqzqZzMpbvK8GC1kYe3gmnMvT60dNjIYyOXSfzqvUZTpw__"
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
        return "Content 18";
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
        const showBottomContainer = this.castToString(signature) || this.castToString(name);
        const showContentContainer = showTopContainer || showTextContainer || showBottomContainer;

        const subTitleType = Base.getSectionSubTitleType();
        const alignmentValue = Base.getContentAlignment();

        return (
            <Base.Container className={`${this.decorateCSS("container")} `} style={{
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
                                        <Base.SectionSubTitle className={`${subTitleType === "badge"
                                            ? this.decorateCSS("sub-title-badge")
                                            : this.decorateCSS("sub-title")
                                            }`}>
                                            {subTitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {this.castToString(title) && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {title}
                                        </Base.SectionTitle>
                                    )}
                                </div>
                            )}

                            {showTextContainer && (
                                <div
                                    className={this.decorateCSS(
                                        bgImage ? "text-container-with-bg" : "text-container"
                                    )}
                                >
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
                                <div
                                    className={this.decorateCSS(
                                        bgImage ? "bottom-container-with-bg" : "bottom-container"
                                    )}
                                >
                                    {signature && (
                                        <div className={this.decorateCSS("signature")}>
                                            <img src={signature} alt="" />
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

export default Content18;