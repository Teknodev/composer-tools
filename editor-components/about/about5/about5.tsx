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

        const subtitleStr = this.castToString(subtitle);
        const titleStr = this.castToString(title);
        const descriptionStr = this.castToString(description);
        const text1Str = this.castToString(text1);
        const text2Str = this.castToString(text2);
        const nameStr = this.castToString(name);
        const jobTitleStr = this.castToString(jobTitle);

        const showCard1 = titleStr || subtitleStr || descriptionStr;
        const showCard2 = !!text1Str;
        const showCard3 = text2Str || nameStr || jobTitleStr;
        const showInformation = nameStr || jobTitleStr;
        const showRightSection = showCard2 || showCard3;

        const isText1Empty = !text1Str;
        const isText2Empty = !text2Str;

        const areBothTextsEmpty = isText1Empty && isText2Empty;

        const contentClass = areBothTextsEmpty ? "content-column" : "content";

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("main-wrapper")}>

                        {showCard1 && (
                            <div className={this.decorateCSS("left-section")}>
                                <Base.VerticalContent className={this.decorateCSS("card-1")}>
                                    {subtitleStr && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {subtitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleStr && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {title}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionStr && (
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {description}
                                        </Base.SectionDescription>
                                    )}
                                </Base.VerticalContent>
                            </div>
                        )}

                        {showRightSection && (
                            <div className={this.decorateCSS("right-section")}>
                                <div className={this.decorateCSS(contentClass)}>
                                    {areBothTextsEmpty ? (
                                        showInformation && (
                                            <div className={this.decorateCSS("information")}>
                                                {nameStr && (
                                                    <Base.P className={this.decorateCSS("name")}>
                                                        {name}
                                                    </Base.P>
                                                )}
                                                {jobTitleStr && (
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
                                                        {nameStr && (
                                                            <Base.P className={this.decorateCSS("name")}>
                                                                {name}
                                                            </Base.P>
                                                        )}
                                                        {jobTitleStr && (
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
                                                        {text1Str && (
                                                            <Base.P className={this.decorateCSS("left-text")}>
                                                                {text1}
                                                            </Base.P>
                                                        )}
                                                    </div>
                                                )}
                                                {showCard3 && (
                                                    <div className={this.decorateCSS("card-3")}>
                                                        {text2Str && (
                                                            <Base.P className={this.decorateCSS("right-text")}>
                                                                {text2}
                                                            </Base.P>
                                                        )}
                                                        {showInformation && (
                                                            <div className={this.decorateCSS("information")}>
                                                                {nameStr && (
                                                                    <Base.P className={this.decorateCSS("name")}>
                                                                        {name}
                                                                    </Base.P>
                                                                )}
                                                                {jobTitleStr && (
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
                            </div>
                        )}


                    </div>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default About5;