import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Button = {
    buttonText: string;
    url: string;
};

class Download7 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Background Image",
            value: "https://p5crires.cri.cn/photoworkspace/cri/contentimg/2023/01/04/2023010415453365247.jpg",
        });

        this.addProp({
            type: "string",
            key: "downContentTitle",
            displayer: "Card Title",
            value: "If you want to download it",
        });

        this.addProp({
            type: "string",
            key: "upContentTitle",
            displayer: "Card Title",
            value: "Download now by clicking the button",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "By offering a clear call-to-action, businesses and developers can increase the chances that users will download and use their product.",
        });

        let button: TypeUsableComponentProps = {
            type: "object",
            key: "button",
            displayer: "Displayer",
            value: [
                {
                    type: "string",
                    key: "buttonText",
                    displayer: "Button Text",
                    value: "Download Now",
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Button Url",
                    value: "",
                },
            ],
        };

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [JSON.parse(JSON.stringify(button))],
        });
    }

    getName(): string {
        return "Download-7";
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("image-child")}>
                            <img className={this.decorateCSS("background-image")} src={this.getPropValue("image")} alt="" />
                        </div>
                        <div className={this.decorateCSS("up-content")}>
                            <h1>{this.getPropValue("upContentTitle")}</h1>
                            <div className={this.decorateCSS("button-group")}>
                                {this.castToObject<Button[]>("buttons").map((button: Button , index: number) => {
                                    return (
                                        <ComposerLink key={`dw-7-btn-${index}`} path={button.url}>
                                            <button className={this.decorateCSS("button")}>{button.buttonText}</button>
                                        </ComposerLink>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={this.decorateCSS("down-content")}>
                            <h1>{this.getPropValue("downContentTitle")}</h1>
                            <p>{this.getPropValue("description")}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download7;
