import * as React from "react";
import styles from "./download3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";


type Button = {
    buttonText1: string,
    buttonText2: string,
    url: string,
    buttonImage: string,
};

class Download3 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);

        let googlePlayIcon = require("./google-play.png")
        let appStoreIcon = require("./pngegg.png")
        let yogaImg = require("./yogaimg.png")
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Online Yoga, from Home",
        });

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
            value: yogaImg,
        })

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "With the rise of virtual platforms and technology, individuals can now participate in online yoga classes and receive instruction from qualified teachers without leaving their house.",
        });



        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                {
                    type: "object",
                    key: "button",
                    displayer: "Displayer",
                    value: [
                        {
                            type: "string",
                            key: "buttonText1",
                            displayer: "Button Text",
                            value: "DOWNLOAD ON THE",
                        },
                        {
                            type: "string",
                            key: "buttonText2",
                            displayer: "Button Text",
                            value: "App Store",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Button Link",
                            value: "",
                        },
                        {
                            type: "image",
                            key: "buttonImage",
                            displayer: "In Button Icon",
                            value: appStoreIcon,
                        }
                    ],
                },
                {
                    type: "object",
                    key: "button",
                    displayer: "Displayer",
                    value: [
                        {
                            type: "string",
                            key: "buttonText1",
                            displayer: "Button Text",
                            value: "GET IT ON",
                        },
                        {
                            type: "string",
                            key: "buttonText2",
                            displayer: "Button Text",
                            value: "Google Play",
                        },
                        {
                            type: "page",
                            key: "url",
                            displayer: "Button Link",
                            value: "",
                        },
                        {
                            type: "image",
                            key: "buttonImage",
                            displayer: "In Button Icon",
                            value: googlePlayIcon,
                        }
                    ],
                }
            ]
        });
    }

    getName(): string {
        return "Download-3";
    }


    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("image-container")}>
                            <img src={this.getPropValue("image")} alt="image" className={this.decorateCSS("image")} />
                        </div>
                        <div className={this.decorateCSS("group-container")}>
                            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                            <div className={this.decorateCSS("button-group")}>
                                {this.castToObject<Button[]>("buttons").map((item: Button, index: number) => {
                                    return (
                                        <ComposerLink key={`dw-3-btn-${index}`} path={item.url}>
                                            <div  className={this.decorateCSS("button")}>
                                                <img src={item.buttonImage} alt="icon" className={this.decorateCSS("button-logo")} />
                                                <div className={this.decorateCSS("button-texts")}>
                                                    <p className={this.decorateCSS("up-text")}>{item.buttonText1}</p>
                                                    <p className={this.decorateCSS("down-text")}>{item.buttonText2}</p>
                                                </div>
                                            </div>
                                        </ComposerLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download3;

