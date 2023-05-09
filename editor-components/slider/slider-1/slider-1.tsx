import * as React from "react";
import styles from "./slider-1.module.scss";
import { BaseSlider } from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

class Slider extends BaseSlider {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "array",
            key: "images",
            displayer: "Images",
            value: [
                {
                        type: "image",
                        key: "image",
                        displayer: "Image",
                        value: PlaceholderFiller.image()
                }
            ],
        });
        this.addProp({
            type: "string",
            key: "button1",
            displayer: "Previous Button Title",
            value: PlaceholderFiller.string()
        });
        this.addProp({
            type: "string",
            key: "button2",
            displayer: "Next Button Title",
            value: PlaceholderFiller.string()
        })

        this.state["componentProps"]["count"] = 0;

    }


    getName(): string {
        return "Slider 1";
    }
    prevButton(images: string[]) {
        let count = this.state.componentProps["count"];
        count--;

        if (count < 0) {
            count = images.length - 1
        }

        this.state.componentProps["count"] = count;
    }

    nextButton(images: string[]) {
        let count = this.state.componentProps["count"];
        count++;
        if (count == images.length) {
            count = 0
        }
        this.state.componentProps["count"] = count;
    }

    render() {
        let items = this.getPropValue("images")
        let images= new Array()
        items.forEach((item: { value: any; }) => {
            images.push(item.value)
        });



        return (
            <div className={this.decorateCSS("container")} >
                <div
                    className={this.decorateCSS("page")}
                    
                >
                    <button className={this.decorateCSS("button")} onClick={(e) => this.prevButton(images)}>
                        {this.getPropValue("button1")}
                    </button>
                    <div
                        className={this.decorateCSS("image")}
                        
                    >
                        <img
                            src={images[this.state.componentProps["count"]]}
                        />
                    </div>
                    <button className={this.decorateCSS("button")} onClick={() => this.nextButton(images)}>
                        {this.getPropValue("button1")}
                    </button>
                </div>
            </div>
        )
    }
}
export default Slider;