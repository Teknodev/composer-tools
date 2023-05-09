import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./logo-comp5.module.scss";
import { LogoClouds } from "../../EditorComponent";

class LogoComp5Page extends LogoClouds {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: PlaceholderFiller.string()
        })

        this.addProp({
            type: "array",
            key: "icon",
            displayer: "Icon",
            value: [
                {
                    type: "image",
                    key: "icon1",
                    displayer: "Icon",
                    value: PlaceholderFiller.image()
                }
            ]
        })

    }

    getName(): string {
        return "Logo Comp 5";
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("page")}>
                        <div className={this.decorateCSS("title")}>
                            <h1>{this.getPropValue("title")}</h1>
                        </div>
                        <div className={this.decorateCSS("icons")}>
                            {this.getPropValue("icon").map((item: any, index: any) => {
                                return (
                                    <img key={index} src={item.value} alt="" />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoComp5Page;