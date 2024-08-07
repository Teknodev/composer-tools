import * as React from "react";
import styles from "./download8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
    buttonText: string;
    url: string;
};

type ListItem = {
    li: string
}

class Download8 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Background Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436af8368c3c2002cd2fa67?alt=media&timestamp=1719564433794",
        });

        this.addProp({
            type: "string",
            key: "leftContentTitle",
            displayer: "Title",
            value: "If you want to download it",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "By offering a clear call-to-action, businesses and developers can increase the chances that users will download and use their product.",
        });

        this.addProp({
            type: "string",
            key: "cardTitle",
            displayer: "Card Title",
            value: "Download now by clicking the button",
        });


        let li: TypeUsableComponentProps = {
            type: "object",
            key: "lis",
            displayer: "Item",
            value: [
                {
                    type: "string",
                    key: "li",
                    displayer: "Card List Text",
                    value: "Google Play",
                }
            ]
        };





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
            key: "list",
            displayer: "List",
            value: [
                JSON.parse(JSON.stringify(li)),
                JSON.parse(JSON.stringify(li)),
                JSON.parse(JSON.stringify(li)),
                JSON.parse(JSON.stringify(li)),
                JSON.parse(JSON.stringify(li)),
            ],
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [JSON.parse(JSON.stringify(button))],
        });
    }

    getName(): string {
        return "Download-8";
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("image-child")}>
                            <img className={this.decorateCSS("background-image")} src={this.getPropValue("image")} alt="background" />
                        </div>
                        <div className={this.decorateCSS("left-content")}>
                            <h1 className={this.decorateCSS("leftContentTitle")}>{this.getPropValue("leftContentTitle")}</h1>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                        </div>
                        <div className={this.decorateCSS("right-content")}>
                            <div className={this.decorateCSS("card")}>
                                <div className={this.decorateCSS("card-up")}>
                                    <h2 className={this.decorateCSS("cardTitle")}>{this.getPropValue("cardTitle")}</h2>
                                    <ul className={this.decorateCSS("list-group")}>
                                        {this.castToObject<ListItem[]>("list").map((item: ListItem, index:number) => {
                                            return (
                                                <li key={`dw-8-li-${index}`} className={this.decorateCSS("list-item")}><img src="https://cdn-icons-png.flaticon.com/512/9572/9572923.png" alt="list-item" className={this.decorateCSS("li-icon")} />{item.li}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={this.decorateCSS("card-down")}>
                                    <div className={this.decorateCSS("button-group")}>
                                        {this.castToObject<Button[]>("buttons").map((item: Button, index:number) => {
                                            return (
                                                <ComposerLink key={`dw-8-btn-${index}`} path={item.url}>
                                                    <button className={this.decorateCSS("button")}>{item.buttonText}</button>
                                                </ComposerLink>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download8;
