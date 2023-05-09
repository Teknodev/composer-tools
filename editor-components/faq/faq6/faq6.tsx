import * as React from "react";
import styles from "./faq6.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFAQ, TypeUsableComponentProps } from "../../EditorComponent";

type Card = {
    title: string,
    description: string
}

class FaqPost extends BaseFAQ {
    constructor(props?: any) {
        super(props, styles)

        let placeholder: TypeUsableComponentProps = {
            type: "object",
            key: "items",
            displayer: "Items",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.shortText()
                },
                {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: PlaceholderFiller.mediumText()
                },
            ]
        };

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "FAQ"
        });

        this.addProp({
            type: "string",
            key: "title1",
            displayer: "Title",
            value: PlaceholderFiller.shortText()
        });

        this.addProp({
            type: "image",
            key: "icon",
            displayer: "Icon",
            value: "https://cdn-icons-png.flaticon.com/512/4700/4700822.png"
        });

        this.addProp({
            type: "string",
            key: "badge",
            displayer: "Badge",
            value: "FAQ",
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Row",
            value: 3
        });

        this.addProp({
            type: "array",
            key: "card",
            displayer: "Card",
            value: [
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
            ]
        });
    }
    getName(): string {
        return "FAQ POST"
    }

    render() {

        const littleScreen = {
            width: "100%",
            display: "flex",
            flex: "wrap",
            justifyContent: "center",
        }

        const wideScreen = {
            width: 90 / this.getPropValue("itemCount") + "%",
            display: "flex",
            justifyContent: "center",
        }

        let style = function () {
            if (window.innerWidth < 800) {
                return littleScreen;
            } else {
                return wideScreen;
            }
        };
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("up-page")}>
                            <div
                                className={this.decorateCSS("badge")}
                            >
                                {this.getPropValue("badge")}
                            </div>
                            <h1>{this.getPropValue("subtitle")}</h1>
                            <p>{this.getPropValue("title1")}</p>
                        </div>
                        <div className={this.decorateCSS("down-page")}>
                            {this.castToObject<Card[]>("card").map((card: Card, index: any) => {
                                return (
                                    <div
                                        style={style()}
                                    >
                                        <div
                                            className={this.decorateCSS("card")}
                                            key={index}
                                        >
                                            <div className={this.decorateCSS("icon")}>
                                                <div>
                                                    ?
                                                </div>
                                            </div>
                                            <h1>{card.title}</h1>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default FaqPost;