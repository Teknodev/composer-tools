import * as React from "react";
import styles from "./content15.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";


class Content15 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Some words about"
        })
        this.addProp({
            type: "string",
            key: "subTitle",
            displayer: "Sub Title",
            value: "Working Since 1976"
        })
        this.addProp({
            type: "string",
            key: "text1",
            displayer: "Text",
            value: "Mellentesque habitant morbi tristique senectus et netus et malesuada famesac turpis egestas. Ut non enim eleifend felis pretium feugiat."
        })
        this.addProp({
            type: "string",
            key: "text2",
            displayer: "Text 2",
            value: "Mellentesque habitant morbi tristique senectus et netus et malesuada famesac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi."
        })
        this.addProp({
            type: "string",
            key: "name",
            displayer: "Name",
            value: "Susana Jacobs"
        })
        this.addProp({
            type: "string",
            key: "jobTitle",
            displayer: "Job Title",
            value: "Strategy Manager"
        })
    }

    static getName(): string {
        return "Content15";
    }

    render() {
        const title = this.getPropValue("title");
        const subTitle = this.getPropValue("subTitle");
        const text1 = this.getPropValue("text1");
        const text2 = this.getPropValue("text2");
        const name = this.getPropValue("name");
        const jobTitle = this.getPropValue("jobTitle");
        const showCard1 = this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("subTitle"));
        const showCard2 = this.castToString(this.getPropValue("text1"));
        const showCard3 = this.castToString(this.getPropValue("text2")) || this.castToString(this.getPropValue("name")) || this.castToString(this.getPropValue("jobTitle"));
        const showInformation = this.castToString(name) || this.castToString(jobTitle)

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid gridCount={{ pc: 3 }} className={this.decorateCSS("grid")}>
                        {showCard1 && (
                            <div className={this.decorateCSS("card-1")}>
                                {this.castToString(title) && (
                                    <div className={this.decorateCSS("title")}>
                                        {title}
                                    </div>
                                )}
                                {this.castToString(subTitle) && (
                                    <div className={this.decorateCSS("sub-title")}>
                                        {subTitle}
                                    </div>
                                )}
                            </div>
                        )}
                        {showCard2 && (
                            <div className={this.decorateCSS("card-2")}>
                                {this.castToString(text1) && (
                                    <div className={this.decorateCSS("text-1")}>
                                        {text1}
                                    </div>
                                )}
                            </div>
                        )}
                        {showCard3 && (
                            <div className={this.decorateCSS("card-3")}>
                                {this.castToString(text2) && (
                                    <div className={this.decorateCSS("text-2")}>
                                        {text2}
                                    </div>
                                )}
                                {showInformation && (
                                    <div className={this.decorateCSS("information")}>
                                        {this.castToString(name) && (
                                            <div className={this.decorateCSS("name")}>
                                                {name}
                                            </div>
                                        )}
                                        {this.castToString(jobTitle) && (
                                            <div className={this.decorateCSS("job-title")}>
                                                {jobTitle}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </Base.ListGrid>
                </Base.MaxContent>
            </Base.Container >
        )
    }
}

export default Content15;