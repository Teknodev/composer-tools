import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header12.module.scss";

//CARD
type Card = {
    imageLeft : string ;
    imageRight : string;
    textLeft : string;
    textRight : string;
};

//CLASS
class Header12 extends BaseHeader {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "array",
            key: "carouselCollection",
            displayer: "Carousel Collection",
            value: [
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "imageLeft",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Autumn Stuff",
                        },
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "imageRight",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Pumpkin Pie",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "imageLeft",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Breakfast",
                        },
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "imageRight",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Coffe Time",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "imageLeft",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "The Notebook",
                        },
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "imageRight",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Autumn Stories",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "imageLeft",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Little Pumpkin",
                        },
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "imageRight",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Still Life",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "imageLeft",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Autumn Evening",
                        },
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "imageRight",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Boooo!",
                        },
                    ]
                },
            ]
        })

    }

    getName(): string {
        return "Header 12";
    }

    render() {
        return (
            <div

            >

            </div>
        );
    }
}

export default Header12;
