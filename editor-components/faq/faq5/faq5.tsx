import * as React from "react";
import styles from "./faq5.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFAQ, TypeUsableComponentProps } from "../../EditorComponent";

type Card = {
    cardTitle: string,
    description: string
}

class FaqMiddle extends BaseFAQ {
    constructor(props?: any) {
        super(props, styles)

        let placeholder: TypeUsableComponentProps = {
            type: "object",
            key: "items",
            displayer: "Items",
            value: [
                {
                    type: "string",
                    key: "cardTitle",
                    displayer: "Question",
                    value: PlaceholderFiller.shortText()
                },
                {
                    type: "string",
                    key: "description",
                    displayer: "Answer",
                    value: PlaceholderFiller.mediumText()
                }
            ]
        };

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Title",
            value: "FAQ"
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title Description",
            value: PlaceholderFiller.mediumText()
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
            ]
        });

        this.addProp({
            type: "string",
            key: "badge",
            displayer: "Badge",
            value: "FAQ",
        });
    }

    getName(): string {
        return "FAQ MIDDLE-3";
    }
    activeIndex: number = -1;

    render() {
        const handleButton = (index: number) => {
            this.activeIndex = this.activeIndex == index ? -1 : index
        }
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("left-page")}>
                            <div
                                className={this.decorateCSS("badge")}
                                
                            >
                                {this.getPropValue("badge")}
                            </div>
                            <h1>{this.getPropValue("subtitle")}</h1>
                            <p>{this.getPropValue("title")}</p>
                        </div>
                        <div className={this.decorateCSS("right-page")}>
                            {this.castToObject<Card[]>("card").map((card: Card, index: any) => {
                                return (
                                    <div className={this.decorateCSS("card")}>
                                        <div className={this.decorateCSS("little-container")}>
                                            <div className={this.decorateCSS("title")}>
                                                <h3>{card.cardTitle}</h3>
                                            </div>
                                            <div className={this.decorateCSS("icon")}>
                                                <img
                                                    src={this.activeIndex == index ? "https://cdn-icons-png.flaticon.com/512/130/130906.png" : "https://cdn-icons-png.flaticon.com/512/656/656979.png"}
                                                    onClick={() => handleButton(index)}
                                                />
                                            </div>
                                        </div>
                                        <p className={`${this.activeIndex == index ? this.decorateCSS("text") : this.decorateCSS("hide")}`}>{card.description}</p>
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

export default FaqMiddle;