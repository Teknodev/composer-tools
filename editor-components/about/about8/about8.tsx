import * as React from "react";
import styles from "./about8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseAbout } from "composer-tools/editor-components/EditorComponent";

class About8 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "DIGITAL EXPERIENCE WITH DESIGN AND TECHNOLOGY."
        })
        this.addProp({
            type: "media",
            key: "image1",
            displayer: "First Image",
            additionalParams: {
                availableTypes: ["image"],
            },
            value: {
                type: "image",
                url: "https://html-roof.jrstudio.com.co/img/general/image-01.jpg"
            }
        })
        this.addProp({
            type: "media",
            key: "image2",
            displayer: "Second Image",
            additionalParams: {
                availableTypes: ["image"],
            },
            value: {
                type: "image",
                url: "https://html-roof.jrstudio.com.co/img/general/image-02.jpg"
            }
        })
        
        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });
        
        this.addProp({
            type: "string",
            key: "text1",
            displayer: "First Text",
            value: "Completely network collaborative web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Ratione atque dolorum nostrum a est voluptatibus."
        })
        this.addProp({
            type: "string",
            key: "text2",
            displayer: "Second Text",
            value: "web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Quickly promote sticky testing procedures before unique process improvements."
        })
    }

    static getName(): string {
        return "About 8";
    }

    render() {
        const title = this.getPropValue("title");
        const image1 = this.getPropValue("image1");
        const image2 = this.getPropValue("image2");
        const text1 = this.getPropValue("text1");
        const text2 = this.getPropValue("text2");
        const overlay = this.getPropValue("overlay") as boolean;

        const showTopContainer = this.castToString(title) || image1 || image2;
        const showBottomContainer = this.castToString(text1) || this.castToString(text2);
        const showSideContainer = showTopContainer || showBottomContainer;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showSideContainer && (
                        <div className={this.decorateCSS("side-container")}>
                            {showTopContainer && (
                                <div className={this.decorateCSS("top-container")}>
                                    {this.castToString(title) && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {title}
                                        </Base.SectionTitle>
                                    )}
                                    {image1?.url && (
                                        <div className={this.decorateCSS("image-1")}>
                                            <Base.Media value={image1} className={this.decorateCSS("image")} />
                                            {overlay && <div className={this.decorateCSS("overlay")} />}
                                        </div>
                                    )}
                                    {image2?.url && (
                                        <div className={this.decorateCSS("image-2")}>
                                            <Base.Media value={image2} className={this.decorateCSS("image")} />
                                            {overlay && <div className={this.decorateCSS("overlay")} />}
                                        </div>
                                    )}
                                </div>
                            )}
                            {showBottomContainer && (
                                <div className={this.decorateCSS("bottom-container")}>
                                    {this.castToString(text1) && (
                                        <Base.P className={this.decorateCSS("text-1")}>
                                            {text1}
                                        </Base.P>
                                    )}
                                    {this.castToString(text2) && (
                                        <Base.P className={this.decorateCSS("text-2")}>
                                            {text2}
                                        </Base.P>
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

export default About8;