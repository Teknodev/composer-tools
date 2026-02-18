import * as React from "react";
import styles from "./about5.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";


class About5 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "About Us",
        })

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Some words about"
        })
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Working Since 1976"
        })
        this.addProp({
            type: "string",
            key: "text1",
            displayer: "Left Text",
            value: "Mellentesque habitant morbi tristique senectus et netus et malesuada famesac turpis egestas. Ut non enim eleifend felis pretium feugiat."
        })
        this.addProp({
            type: "string",
            key: "text2",
            displayer: "Right Text",
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
        return "About 5";
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const text1 = this.getPropValue("text1");
        const text2 = this.getPropValue("text2");
        const name = this.getPropValue("name");
        const jobTitle = this.getPropValue("jobTitle");

        const showCard1 = this.castToString(title) || this.castToString(subtitle) || this.castToString(description);
        const showCard2 = this.castToString(text1);
        const showCard3 = this.castToString(text2) || this.castToString(name) || this.castToString(jobTitle);
        const showInformation = this.castToString(name) || this.castToString(jobTitle);

        const isText1Empty = !this.castToString(text1) || this.castToString(text1).trim() === "";
        const isText2Empty = !this.castToString(text2) || this.castToString(text2).trim() === "";

        const areBothTextsEmpty = isText1Empty && isText2Empty;

        const contentClass = areBothTextsEmpty ? "content-column" : "content";

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS(contentClass)}>
                        {showCard1 && (
                            <Base.VerticalContent className={this.decorateCSS("card-1")}>
                                {this.castToString(subtitle) && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                        {subtitle}
                                    </Base.SectionSubTitle>
                                )}
                                {this.castToString(title) && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {title}
                                    </Base.SectionTitle>
                                )}
                                {this.castToString(description) && (
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {description}
                                    </Base.SectionDescription>
                                )}
                            </Base.VerticalContent>
                        )}

                        {areBothTextsEmpty ? (
                            showInformation && (
                                <div className={this.decorateCSS("information")}>
                                    {this.castToString(name) && (
                                        <Base.P className={this.decorateCSS("name")}>
                                            {name}
                                        </Base.P>
                                    )}
                                    {this.castToString(jobTitle) && (
                                        <Base.P className={this.decorateCSS("job-title")}>
                                            {jobTitle}
                                        </Base.P>
                                    )}
                                </div>
                            )
                        ) : (
                            isText2Empty ? (
                                <div className={this.decorateCSS("content-right-section-empty")}>
                                    {showCard2 && (
                                        <Base.P className={this.decorateCSS("left-text")}>
                                            {text1}
                                        </Base.P>
                                    )}
                                    {showInformation && (
                                        <div className={this.decorateCSS("information-below-text1")}>
                                            {this.castToString(name) && (
                                                <Base.P className={this.decorateCSS("name")}>
                                                    {name}
                                                </Base.P>
                                            )}
                                            {this.castToString(jobTitle) && (
                                                <Base.P className={this.decorateCSS("job-title")}>
                                                    {jobTitle}
                                                </Base.P>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    {showCard2 && (
                                        <div className={this.decorateCSS("card-2")}>
                                            {this.castToString(text1) && (
                                                <Base.P className={this.decorateCSS("left-text")}>
                                                    {text1}
                                                </Base.P>
                                            )}
                                        </div>
                                    )}
                                    {showCard3 && (
                                        <div className={this.decorateCSS("card-3")}>
                                            {this.castToString(text2) && (
                                                <Base.P className={this.decorateCSS("right-text")}>
                                                    {text2}
                                                </Base.P>
                                            )}
                                            {showInformation && (
                                                <div className={this.decorateCSS("information")}>
                                                    {this.castToString(name) && (
                                                        <Base.P className={this.decorateCSS("name")}>
                                                            {name}
                                                        </Base.P>
                                                    )}
                                                    {this.castToString(jobTitle) && (
                                                        <Base.P className={this.decorateCSS("job-title")}>
                                                            {jobTitle}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>
                            )
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default About5;