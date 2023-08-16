import * as React from "react";
import styles from "./download9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
    buttonText: string;
    url: string;
};

class Download9 extends BaseDownload {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Background Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645b4bcdf72de2002cab20d0?alt=media&timestamp=1683704791616",
        });

        this.addProp({
            type: "image",
            key: "leftImage",
            displayer: "Left Container Background Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645b4b9ef72de2002cab20c6?alt=media&timestamp=1683704746048",
        });

        this.addProp({
            type: "image",
            key: "rightImage",
            displayer: "Right Container Background Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645b4b9ef72de2002cab20c5?alt=media&timestamp=1683704746048",
        });

       

        this.addProp({
            type: "string",
            key: "middleTitle",
            displayer: "Basic Title",
            value: "If you want to download it",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: " It can be a part of a broader call-to-action that highlights the value and benefits of the product, encouraging users to take action and download it. ",
        });

        this.addProp({
            type: "string",
            key: "cardTitle",
            displayer: "Card Title",
            value: "Download now by clicking the button",
        });

        this.addProp({
            type: "string",
            key: "cardDescription",
            displayer: "Card Description",
            value: " By using clear and concise language, and providing a simple and easy-to-use download button, businesses and developers can increase the chances of users downloading and using their product.",
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
        return "Download-9";
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <img className={this.decorateCSS("background-image")} src={this.getPropValue("image")} alt="background-image" />
                        <div className={this.decorateCSS("left-container")}>
                            <img className={this.decorateCSS("left-image")} src={this.getPropValue("leftImage")} alt="left-image" />
                        </div>
                        <div className={this.decorateCSS("middle-container")}>
                            <h1 className={this.decorateCSS("middle-title")}>{this.getPropValue("middleTitle")}</h1>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                        </div>
                        <div className={this.decorateCSS("right-container")}>
                            <img className={this.decorateCSS("right-image")} src={this.getPropValue("rightImage")} alt="right-image" />
                        </div>
                        <div className={this.decorateCSS("hover-container")}>
                            <h1 className={this.decorateCSS("card-title")}>{this.getPropValue("cardTitle")}</h1>
                            <p className={this.decorateCSS("card-description")}>{this.getPropValue("cardDescription")}</p>
                            <div className={this.decorateCSS("button-group")}>
                                {this.castToObject<Button[]>("buttons").map((item: Button, index: number) => {
                                    return (
                                        <ComposerLink key={`dw-9-btn-${index}`} path={item.url}>
                                            <button className={this.decorateCSS("button")}>{item.buttonText}</button>
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

export default Download9;
