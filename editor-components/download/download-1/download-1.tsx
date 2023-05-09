import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./download-1.module.scss"
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

class DownloadCard1 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "title1",
            displayer: "Title-1",
            value: PlaceholderFiller.string(),
        });

        this.addProp({
            type: "string",
            key: "title2",
            value: PlaceholderFiller.string(),
            displayer: "Title-2",

        });

        this.addProp({
            type: "string",
            key: "text1",
            value: PlaceholderFiller.string(),
            displayer: "Description-1",

        });

        this.addProp({
            type: "string",
            key: "text2",
            value: PlaceholderFiller.string(),
            displayer: "Description-2",

        });

        this.addProp({
            type: "string",
            key: "text3",
            value: PlaceholderFiller.string(),
            displayer: "Description-3",

        });

        this.addProp({
            type: "string",
            key: "text4",
            value: PlaceholderFiller.string(),
            displayer: "Button Text",

        });

        this.addProp({
            type: "page",
            key: "link",
            value: PlaceholderFiller.string(),
            displayer: "Button URL",

        });

        this.addProp({
            type: "image",
            key: "image",
            value: PlaceholderFiller.image(),
            displayer: "Image",

        });

    }

    getName(): string {
        return "Download-1";
    }

    render() {
        return (
            <div
                className={this.decorateCSS("container")}
                
            >
                <div className={this.decorateCSS("basic-page")}>
                    <div className={this.decorateCSS("page-1")} >
                        <div className={this.decorateCSS("box")} >
                            <p>&#8901;{this.getPropValue("title1")}</p>
                        </div>
                        <div className={this.decorateCSS("box")}>
                            <h1>{this.getPropValue("title2")}</h1>
                        </div>
                        <div className={this.decorateCSS("box")}>
                            <p>-{this.getPropValue("text1")}</p>
                        </div>
                        <div className={this.decorateCSS("box")} >
                            <p><span>✔</span>{this.getPropValue("text2")}</p>
                            <p><span>✔</span>{this.getPropValue("text3")}</p>
                        </div>
                        <div className={this.decorateCSS("box")} >
                            <div className={this.decorateCSS("button")}>
                                <ComposerLink path={this.getPropValue("link")} >
                                    <p className={this.decorateCSS("buttonText")} >{this.getPropValue("link")}</p>
                                </ComposerLink>
                            </div>
                        </div>
                    </div>
                    <div className={this.decorateCSS("page-2")} >
                        <img src={this.getPropValue("image")} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadCard1;