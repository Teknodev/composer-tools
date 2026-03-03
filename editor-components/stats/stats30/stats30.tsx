import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats30.module.scss";
import { Base } from "../../../composer-base-components/base/base";

export class Stats30Page extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "coloredBackground",
            displayer: "Colored Background",
            value: false,
        })

        this.addProp({
            type: "array",
            key: "cards",
            displayer: "Cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Teamwork",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Experienced team members",
                        },
                        {
                            type: "number",
                            key: "number",
                            displayer: "Number",
                            value: 56,
                        }
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Process",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Days of product development",
                        },
                        {
                            type: "number",
                            key: "number",
                            displayer: "Number",
                            value: 87,
                        }
                    ],
                },
            ],
        });
    }

    static getName(): string {
        return "Stats 30";
    }

    getColoredBackground() {
        return this.getPropValue("coloredBackground") ? this.decorateCSS("colored-background") : "";
    }

    render() {
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>

                    {this.getPropValue("cards")?.length > 0 && (
                        <div className={this.decorateCSS("cards-container")}>
                            {this.castToObject<any[]>("cards").map((card: any, index: number) => (
                                <div key={index} className={`${this.decorateCSS("card")} ${this.getColoredBackground()}`}>
                                    <Base.SectionSubTitle className={this.decorateCSS("card-subtitle")}>
                                        {card.subtitle}
                                    </Base.SectionSubTitle>
                                    <Base.SectionTitle className={this.decorateCSS("card-title")}>
                                        {card.title}
                                    </Base.SectionTitle>
                                    <div className={this.decorateCSS("separator")}></div>
                                    <div className={this.decorateCSS("card-number")}>
                                        {card.number}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats30Page;
