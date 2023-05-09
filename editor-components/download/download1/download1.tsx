import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./download1.module.scss"
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

type Button = {
    buttonText: string,
    url: string,
    isPrimary: boolean
}
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
            value: "Features",
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
            type: "image",
            key: "image",
            value: PlaceholderFiller.image(),
            displayer: "Image",

        });

        this.addProp({
            type: "boolean",
            key: "reverse",
            displayer: "Reverse",
            value: false
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            value: [
                {
                    type: "object",
                    key: "button",
                    displayer: "Button",
                    value: [
                        {
                            type: "string",
                            key: "buttonText",
                            displayer: "Button Text",
                            value: "Download"
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "URL",
                            value: PlaceholderFiller.string()
                        },
                        {
                            type: "boolean",
                            key: "isPrimary",
                            displayer: "Is primary",
                            value: false
                        }
                    ]
                }
            ]
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
                <div className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("basic-page")} ${this.getPropValue("reverse") && this.decorateCSS("basic-page-reverse")}`}>
                        <div className={`${this.decorateCSS("page-1")} ${this.getPropValue("reverse") && this.decorateCSS("page-1-border")}`} >
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
                                {this.castToObject<Button[]>("buttons").map((item: Button) => {
                                    return (
                                        <ComposerLink path={item.url}>
                                            <button className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")}`} >
                                                {item.buttonText}
                                            </button>
                                        </ComposerLink>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={this.decorateCSS("page-2")} >
                            <img src={this.getPropValue("image")} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadCard1;