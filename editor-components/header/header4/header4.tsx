import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header4.module.scss";


class Header4 extends BaseHeader {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "SubTitle",
            value: PlaceholderFiller.string()
        });

        this.addProp({
            type: "object",
            key: "card1",
            displayer: "First Card",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Description",
                    value: PlaceholderFiller.string(),
                },

            ],
        });
        this.addProp({
            type: "object",
            key: "card2",
            displayer: "Second Card",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Description",
                    value: PlaceholderFiller.string(),
                },

            ],
        });
        this.addProp({
            type: "object",
            key: "card3",
            displayer: "Third Card",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Description",
                    value: PlaceholderFiller.string(),
                },

            ],
        });
        this.addProp({
            type: "object",
            key: "card4",
            displayer: "Fourth Card",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Description",
                    value: PlaceholderFiller.string(),
                },

            ],
        });
        this.addProp({
            type: "object",
            key: "card5",
            displayer: "Fifth Card",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Description",
                    value: PlaceholderFiller.string(),
                },

            ],
        });
        this.addProp({
            type: "object",
            key: "card6",
            displayer: "Sixth Card",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: PlaceholderFiller.string()
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Description",
                    value: PlaceholderFiller.string()
                }
            ]
        });
        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
            value: PlaceholderFiller.image()
        });
    }

    getName(): string {
        return "Header 4";
    }

    render() {

        let card1 = this.getPropValue("card1");
        let card2 = this.getPropValue("card2");
        let card3 = this.getPropValue("card3");
        let card4 = this.getPropValue("card4");
        let card5 = this.getPropValue("card5");
        let card6 = this.getPropValue("card6");

        return (
            <div
                className={this.decorateCSS("container")}
                
            >
                <div className={this.decorateCSS("max-content")}>
                    <div
                        className={this.decorateCSS("header-page")}
                        
                    >
                        <div className={this.decorateCSS("subtitle-container")}
                            
                        >
                            <h3>{this.getPropValue("subtitle")}</h3>
                        </div>
                        <div
                            className={this.decorateCSS("section")}
                            
                        >
                            <div
                                className={this.decorateCSS("boxs")}
                                
                            >

                                <div
                                    className={`${this.decorateCSS("box")} ${this.decorateCSS("one")}`}
                                    
                                >
                                    <h1>
                                        {card1[0].value}
                                    </h1>
                                    <p>
                                        {card1[1].value}
                                    </p>
                                </div>

                                <div
                                    className={`${this.decorateCSS("box")} ${this.decorateCSS("two")}`}
                                    
                                >
                                    <h1>
                                        {card2[0].value}
                                    </h1>
                                    <p>
                                        {card2[1].value}
                                    </p>
                                </div>

                                <div
                                    className={`${this.decorateCSS("box")} ${this.decorateCSS("three")}`}
                                    
                                >
                                    <h1>
                                        {card3[0].value}
                                    </h1>
                                    <p>
                                        {card3[1].value}
                                    </p>
                                </div>


                            </div>
                            <div
                                className={this.decorateCSS("image-container")}
                                
                            >
                                <img src={this.getPropValue("image")}></img>
                            </div>
                            <div
                                className={this.decorateCSS("boxs")}
                                
                            >
                                <div
                                    className={`${this.decorateCSS("box")} ${this.decorateCSS("four")}`}
                                    
                                >
                                    <h1>
                                        {card4[0].value}
                                    </h1>
                                    <p>
                                        {card4[1].value}
                                    </p>
                                </div>

                                <div
                                    className={`${this.decorateCSS("box")} ${this.decorateCSS("five")}`}
                                    
                                >
                                    <h1>
                                        {card5[0].value}
                                    </h1>
                                    <p>
                                        {card5[1].value}
                                    </p>
                                </div>


                                <div
                                    className={`${this.decorateCSS("box")} ${this.decorateCSS("six")}`}
                                    
                                >
                                    <h1>
                                        {card6[0].value}
                                    </h1>
                                    <p>
                                        {card6[1].value}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header4;
