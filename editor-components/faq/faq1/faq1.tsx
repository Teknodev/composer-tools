import * as React from "react";
import styles from "./faq1.module.scss"
import { BaseFAQ } from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type FAQ = {
    subtitle: string,
    text: string,
    image: string,
}

class Faq extends BaseFAQ {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "array",
            key: "card",
            displayer: "Card",
            value: [
                {
                    type: "object",
                    key: "block",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Question",
                            value: PlaceholderFiller.string()
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Answer",
                            value: PlaceholderFiller.string()
                        },
                    ]
                },
                {
                    type: "object",
                    key: "block",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Question",
                            value: PlaceholderFiller.string()
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Answer",
                            value: PlaceholderFiller.string()
                        },
                    ]
                },
                {
                    type: "object",
                    key: "block",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Question",
                            value: PlaceholderFiller.string()
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Answer",
                            value: PlaceholderFiller.string()
                        },
                    ]
                }

            ],
        });
    }

    getName(): string {
        return "FAQ-1";
    }

    render() {
        return (
            <div
                className={this.decorateCSS("container")}
                
            >
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>

                        {this.castToObject<FAQ[]>("card").map((card: FAQ) => (
                            <div className={this.decorateCSS("card")} >
                                <div className={this.decorateCSS("in-box")}>
                                    <h2>{card.subtitle}</h2>
                                    <img src={"https://www.svgrepo.com/show/80156/down-arrow.svg"} className={this.decorateCSS("img-1")} />
                                </div>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;