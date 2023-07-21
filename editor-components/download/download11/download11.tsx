import * as React from "react";
import styles from "./download11.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
    buttonText: string;
    url: string;
    isPrimary: boolean;
    buttonImage: string;
};
class Download11 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);



        this.addProp({
            type: "string",
            key: "title",
            value: "Download Your Own Artificial İntelligence.",
            displayer: "Title",
        });

        this.addProp({
            type: "string",
            key: "description",
            value:
                "By downloading the app, users can access features and functions in a more convenient and efficient manner, which can save time and reduce the potential for errors or delays.",
            displayer: "Description",
        });

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645a38f1f72de2002cab15aa?alt=media&timestamp=1683634430199",
        });

        this.addProp({
            type: "image",
            key: "logoimage",
            displayer: "LogoImage",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaf000?alt=media&timestamp=1683614748003",
        });


        this.addProp({
            type: "array",
            key: "buttonsLeft",
            displayer: "Button Left",
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
                            value: "Download for Android",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "URL",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "buttonText2",
                            displayer: "Button Text",
                            value: "Google Play",
                        },
                        {
                            type: "image",
                            key: "buttonImage",
                            displayer: "In Button Icon",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645a47e8f72de2002cab1bff?alt=media&timestamp=1683638261827",
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "array",
            key: "buttonsRight",
            displayer: "Button Right",
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
                            value: "Download for Ios",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "URL",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "buttonText2",
                            displayer: "Button Text",
                            value: "App Store",
                        },
                        {
                            type: "image",
                            key: "buttonImage",
                            displayer: "In Button Icon",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645a4afaf72de2002cab1d41?alt=media&timestamp=1683639046560",
                        },
                    ],
                },
            ],
        });
    }

    getName(): string {
        return "Download-11";
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        <div className={this.decorateCSS("boxes-title")}>
                            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                        </div>
                        <div className={this.decorateCSS("boxes-description")}>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                        </div>
                        <div className={this.decorateCSS("box-child")}>

                            <div className={this.decorateCSS("box")}>
                                {this.castToObject<Button[]>("buttonsLeft").map(
                                    (item: Button, index: number) => {
                                        return (
                                            <ComposerLink key={`dw-11-btn-left-${index}`} path={item.url}>
                                                <div className={this.decorateCSS("button-group")}>
                                                    <button
                                                        className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")
                                                            }`}
                                                    >
                                                        <img
                                                            src={item.buttonImage}
                                                            className={this.decorateCSS("button-icon")}
                                                        />
                                                        {item.buttonText}
                                                    </button>
                                                </div>
                                            </ComposerLink>
                                        );
                                    }
                                )}
                            </div>

                            <div className={this.decorateCSS("boxes-img-left")}>
                                <img className={this.decorateCSS("img-left")} src={this.getPropValue("image")} />
                            </div>
                            <div className={this.decorateCSS("boxes-logo")}>
                                <img className={this.decorateCSS("logoimage")} src={this.getPropValue("logoimage")} />
                            </div>
                            <div className={this.decorateCSS("boxes-img-right")}>
                                <img className={this.decorateCSS("img-right")} src={this.getPropValue("image")} />
                            </div>
                            <div className={this.decorateCSS("box")}>

                                {this.castToObject<Button[]>("buttonsRight").map(
                                    (item: Button, index: number) => {
                                        return (
                                            <ComposerLink key={`dw-11-btn-right-${index}`} path={item.url}>
                                                <div className={this.decorateCSS("button-group")}>
                                                    <button
                                                        className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")
                                                            }`}
                                                    >
                                                        <img
                                                            src={item.buttonImage}
                                                            className={this.decorateCSS("button-icon")}
                                                        />
                                                        {item.buttonText}
                                                    </button>
                                                </div>
                                            </ComposerLink>
                                        );
                                    }
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Download11;
