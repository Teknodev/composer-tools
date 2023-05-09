import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./price-plan.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";



class PricePlan1 extends BasePricingTable {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "title1",
            displayer: "Subtitle",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title2",
            displayer: "Title",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title3",
            displayer: "Description",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title4",
            displayer: "Card Title",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title5",
            displayer: "Text-1",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title6",
            displayer: "Text-2",
            value: PlaceholderFiller.string(),
        });
        this.addProp({
            type: "string",
            key: "title7",
            displayer: "Text-3",
            value: PlaceholderFiller.string(),
        });

        this.addProp({
            type: "string",
            key: "text1",
            displayer: "Text-4",
            value: PlaceholderFiller.string(),
        });

        this.addProp({
            type: "array",
            key: "text2",
            displayer: "List Items",
            value: [
                {
                    type: "string",
                    key: "text",
                    displayer: "List Text",
                    value: PlaceholderFiller.string()
                }
            ],

        });

        this.addProp({
            type: "string",
            key: "text3",
            displayer: "Text-1",
            value: PlaceholderFiller.string(),
        });

        this.addProp({
            type: "page",
            key: "url",
            displayer: "URL",
            value: PlaceholderFiller.string()
        })

    }

    getName(): string {
        return "Price Plan 1";
    }

    render() {
        return (
            <div
                className={this.decorateCSS("container")}
                
            >
                <div className={this.decorateCSS("page")} >
                    <div className={`${this.decorateCSS("child-page")} ${this.decorateCSS("child-page-left")}`}>
                        <div className={this.decorateCSS("texts")}>
                            <h1>{this.getPropValue("title1")}</h1>
                            <p className={this.decorateCSS("title2")}>{this.getPropValue("title2")}</p>
                            <p>{this.getPropValue("title3")}</p>
                        </div>
                    </div>
                    <div className={this.decorateCSS("child-page")} >
                        <div className={this.decorateCSS("child-page-right")}>
                            <div className={this.decorateCSS("right-up")} >
                                <h4>{this.getPropValue("title4")}:</h4>
                                <ul className={this.decorateCSS("list-group")}>
                                    {this.getPropValue("text2").map((price: any, index: number) => {
                                        return (
                                            <li key={index}>- {price.value}</li>)
                                    }
                                    )}
                                </ul>
                            </div>
                            <div className={this.decorateCSS("right-down")} >
                                <div className={this.decorateCSS("right-down-up")}>
                                    <div className={this.decorateCSS("little")}>
                                        <p>{this.getPropValue("title5")}</p>
                                        <p>{this.getPropValue("title6")}</p>
                                    </div>
                                    <div className={this.decorateCSS("little") + this.decorateCSS("other")}>
                                        <h2>{this.getPropValue("title7")}</h2>
                                        <h2>{this.getPropValue("text1")}</h2>
                                    </div>
                                </div>
                                <ComposerLink path={this.getPropValue("url")}>
                                    <div className={this.decorateCSS("button")}>
                                        {this.getPropValue("text3")}
                                    </div>
                                </ComposerLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricePlan1;
