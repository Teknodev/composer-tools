import * as React from "react";
import styles from "./content17.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

class Content17 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "DIGITAL EXPERIENCE WITH DESIGN AND TECHNOLOGY."
        })
        this.addProp({
            type: "image",
            key: "image1",
            displayer: "Image",
            value: "https://html-roof.jrstudio.com.co/img/general/image-01.jpg"
        })
        this.addProp({
            type: "image",
            key: "image2",
            displayer: "Image",
            value: "https://html-roof.jrstudio.com.co/img/general/image-02.jpg"
        })
        this.addProp({
            type: "string",
            key: "text1",
            displayer: "Text 1",
            value: "Completely network collaborative web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Ratione atque dolorum nostrum a est voluptatibus."
        })
        this.addProp({
            type: "string",
            key: "text2",
            displayer: "Text 2",
            value: "web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Quickly promote sticky testing procedures before unique process improvements."
        })
    }

    static getName(): string {
        return "Content 17";
    }

    render() {
        const title = this.getPropValue("title");
        const image1 = this.getPropValue("image1");
        const image2 = this.getPropValue("image2");
        const text1 = this.getPropValue("text1");
        const text2 = this.getPropValue("text2");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("side-container")}>
                        <div className={this.decorateCSS("top-container")}>
                            {this.castToString(title) && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {title}
                                </Base.SectionTitle>
                            )}
                            {image1 && (
                                <div className={this.decorateCSS("image-1")}>
                                    <img src={image1} alt="" />
                                </div>
                            )}
                            {image2 && (
                                <div className={this.decorateCSS("image-2")}>
                                    <img src={image2} alt="" />
                                </div>
                            )}
                            <div></div>
                            <div></div>
                        </div>
                        <div className={this.decorateCSS("bottom-container")}>
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
                    </div>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Content17;