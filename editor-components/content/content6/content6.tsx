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
            value: "How",
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
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64590b95f72de2002cab04e4?alt=media&timestamp=1683557280405",
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
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645911c3f72de2002cab07f6?alt=media&timestamp=1683558862497",
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
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64591200f72de2002cab07fa?alt=media&timestamp=1683558924651",
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
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6459122ef72de2002cab07fe?alt=media&timestamp=1683558972982",
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
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64591266f72de2002cab0802?alt=media&timestamp=1683559026950",
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
