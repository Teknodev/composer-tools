import styles from "./about5.module.scss";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";


class About5 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Some words about",
        })

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: ""
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
            key: "job-title",
            displayer: "Job Title",
            value: "Strategy Manager"
        })
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });
    }

    static getName(): string {
        return "About 5";
    }

    render() {
        const subtitleStr = this.castToString(this.getPropValue("subtitle"));
        const titleStr = this.castToString(this.getPropValue("title"));
        const descriptionStr = this.castToString(this.getPropValue("description"));
        const text1Str = this.castToString(this.getPropValue("text1"));
        const text2Str = this.castToString(this.getPropValue("text2"));
        const nameStr = this.castToString(this.getPropValue("name"));
        const jobTitleStr = this.castToString(this.getPropValue("job-title"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

        const hasValidButtons = buttons.some((button) => this.castToString(button.text));

        const showCard1 = titleStr || subtitleStr || descriptionStr || hasValidButtons;
        const showInformation = nameStr || jobTitleStr;
        const showRightSection = text1Str || text2Str || showInformation;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("main-wrapper")}>

                        {showCard1 && (
                            <div className={this.decorateCSS("left-section")}>
                                <Base.VerticalContent className={this.decorateCSS("card-1")}>
                                    {subtitleStr && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleStr && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionStr && (
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}

                                    {hasValidButtons && (
                                        <div className={this.decorateCSS("buttons-container")}>
                                            {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                                const buttonText = this.castToString(button.text);
                                                if (!buttonText) return null;

                                                return (
                                                    <ComposerLink key={index} path={button.url}>
                                                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </div>
                                    )}
                                </Base.VerticalContent>

                            </div>
                        )}

                        {showRightSection && (
                            <div className={this.decorateCSS("right-section")}>
                                <div className={this.decorateCSS("content")}>
                                    {text1Str && (
                                        <Base.VerticalContent className={this.decorateCSS("right-column-card")}>
                                            <Base.P className={this.decorateCSS("text")}>
                                                {this.getPropValue("text1")}
                                            </Base.P>
                                            {/* Render info under text1 if text2 is empty */}
                                            {showInformation && !text2Str && (
                                                <Base.VerticalContent className={this.decorateCSS("information")}>
                                                    {nameStr && (
                                                        <Base.P className={this.decorateCSS("name")}>
                                                            {this.getPropValue("name")}
                                                        </Base.P>
                                                    )}
                                                    {jobTitleStr && (
                                                        <Base.P className={this.decorateCSS("job-title")}>
                                                            {this.getPropValue("job-title")}
                                                        </Base.P>
                                                    )}
                                                </Base.VerticalContent>
                                            )}
                                        </Base.VerticalContent>
                                    )}

                                    {/* Only show the second card if there is text2 or if text1 is also empty (meaning info needs a home) */}
                                    {(text2Str || (showInformation && !text1Str)) && (
                                        <Base.VerticalContent className={this.decorateCSS("right-column-card")}>
                                            {text2Str && (
                                                <Base.P className={this.decorateCSS("text")}>
                                                    {this.getPropValue("text2")}
                                                </Base.P>
                                            )}
                                            {/* Render info normally in the second card if text2 exists (or if both texts are completely empty) */}
                                            {showInformation && (text2Str || !text1Str) && (
                                                <Base.VerticalContent className={this.decorateCSS("information")}>
                                                    {nameStr && (
                                                        <Base.P className={this.decorateCSS("name")}>
                                                            {this.getPropValue("name")}
                                                        </Base.P>
                                                    )}
                                                    {jobTitleStr && (
                                                        <Base.P className={this.decorateCSS("job-title")}>
                                                            {this.getPropValue("job-title")}
                                                        </Base.P>
                                                    )}
                                                </Base.VerticalContent>
                                            )}
                                        </Base.VerticalContent>
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