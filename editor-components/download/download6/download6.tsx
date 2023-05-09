import * as React from "react";
import styles from "./download6.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
    buttonText: string,
    url: string,
    isPrimary: boolean
}

class Download6 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Background Image",
            value: "https://master.spicaengine.com/api/storage/63c53ab8bb2fc2002cd5442d/view?timestamp=1673870008323"
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Card Title",
            value: "If you want to download it",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Download now by clicking the button"
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
                    value: "Download Now"
                },
                {
                    type: "page",
                    key: "url",
                    displayer: "Button Url",
                    value: "",
                },
                {
                    type: "boolean",
                    key: "isPrimary",
                    displayer: "Is Primary",
                    value: false
                }
            ]
        };

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                JSON.parse(JSON.stringify(button))
            ]
        });
    };

    getName(): string {
        return "Download-6"
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("section")}>
                        <img src={this.getPropValue("image")} alt="background-image" />
                        <div className={this.decorateCSS("text-container")}>
                            <h1>{this.getPropValue("title")}</h1>
                            <p>{this.getPropValue("description")}</p>
                            <div className={this.decorateCSS("button-group")}>
                                {this.castToObject<Button[]>("buttons").map((item: Button) => {
                                    return (
                                        <ComposerLink path={item.url}>
                                            <button className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("primary")}`}>{item.buttonText}</button>
                                        </ComposerLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Download6;