import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content6.module.scss";

type Card = {
    title: string;
    description: string;
    image: string;
};

class Content6 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);


        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Is Our Artificial İntelligence Working?",
        });

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        });


        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value:
                "AdCreative.ai is a data company with one of the largest databases of high-converting ad elements. It is the only company that can create conversion-focused ad elements using productive artificial intelligence.",
        });

        this.addProp({
            type: "image",
            key: "backgroundImage",
            displayer: "BackgroundImage",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "cards",
            displayer: "cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Crative Collection",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "We gather creative content from all the leading social and visual platforms.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Creative Analysis",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "We analyze each collected ad element and create over 80 data points per visual.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Machine Learning",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "We train our unique machine learning model using the data points and the performance of the ad elements.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Creative Generation",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "Our unique productive artificial intelligence rapidly generates high ROI ad elements and ranks them based on their expected conversion rates.",
                        },
                    ],
                },
            ],
        });
    }

    getName(): string {
        return "Content 6";
    }

    render() {
        const styling = {
            backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
        };
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("child")}>
                        <h3 className={this.decorateCSS("subtitle")}>
                            {this.getPropValue("subtitle")}
                        </h3>
                        <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")} </h2>
                        <div className={this.decorateCSS("description")}>
                            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
                        </div>
                        <div className={this.decorateCSS("wrapper")}>
                            <div className={styles["bg-container"]} style={styling}>
                                {this.castToObject<Card[]>("cards").map(
                                    (card: Card, index: number) => (
                                        <img className={this.decorateCSS("image")} src={card.image}></img>
                                    )
                                )}
                            </div>
                            {this.castToObject<Card[]>("cards").map(
                                (card: Card, index: number) => (
                                    <div key={`cnt-6-${index}`} className={this.decorateCSS("card-content")}>
                                        <div className={this.decorateCSS("card")}>
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content6;
