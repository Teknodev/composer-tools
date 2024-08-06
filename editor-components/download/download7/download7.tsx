import * as React from "react";
import styles from "./download7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";

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
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436af5c68c3c2002cd2fa52?alt=media&timestamp=1719564433794",
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
                    displayer: "Button Link",
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
                            <h1 className={this.decorateCSS("unContentTitle")}>{this.getPropValue("upContentTitle")}</h1>
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
                            <h1 className={this.decorateCSS("downContentTitle")}>{this.getPropValue("downContentTitle")}</h1>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download7;
