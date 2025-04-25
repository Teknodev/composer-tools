import * as React from "react";
import styles from "./content16.module.scss";
import { BaseContent } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

class Content16 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "section1",
            displayer: "Section 1",
            value: "What We Do"
        })
        this.addProp({
            type: "string",
            key: "section1Text1",
            displayer: "Text 1",
            value: "Graphic design, integre mea ut, eu eos vide errem noluisse. Putent laoreet et ius. Vel utroque dissentias ut, nam ad soleat alterum maluisset, cu est copiosae intellegat inciderint. Nam ei eirmod consequuntur, quod nostrum consectetuer usu ut. Vim veniam singulis senserit an, sumo consul mentitum duo ea. Copiosae antiopam ius ea, meis explicari reformidans vix cu. Ut possit patrioque prodesset est, vivendum concludaturque conclusion emque eam."
        })
        this.addProp({
            type: "string",
            key: "section1Text2",
            displayer: "Text 2",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Design, integre mea ut, eu eos vide errem noluisse. Putent laoreet et ius. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        })
        this.addProp({
            type: "string",
            key: "section2",
            displayer: "Section 2",
            value: "Our Skills"
        })
        this.addProp({
            type: "string",
            key: "section2Text1",
            displayer: "Text 1",
            value: "Design, integre mea ut, eu eos vide errem noluisse. Putent laoreet et ius. Vel utroque dissentias ut, nam ad soleat alterum maluisset, cu est copiosae intellegat inciderint. Nam ei eirmod consequuntur, quod nostrum consectetuer usu ut. Vim veniam singulis senserit an, sumo consul mentitum duo ea. Copiosae antiopam ius ea, meis explicari reformidans vix cu. Ut possit patrioque prodesset est, vivendum concludaturque conclusionemque eam."
        })
        this.addProp({
            type: "string",
            key: "section2Text2",
            displayer: "Text 2",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Design, integre mea ut, eu eos vide errem noluisse. Putent laoreet et ius. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        })
    }

    static getName(): string {
        return "Content 16";
    }

    componentDidMount() {
        this.setComponentState("activeSection", "section1");
    }

    render() {
        const section1 = this.getPropValue("section1")
        const section2 = this.getPropValue("section2")
        const section1Text1 = this.getPropValue("section1Text1");
        const section1Text2 = this.getPropValue("section1Text2");
        const section2Text1 = this.getPropValue("section2Text1");
        const section2Text2 = this.getPropValue("section2Text2");
        const activeSection = this.getComponentState("activeSection");
        const showSection1TextContainer = this.castToString(section1Text1) || this.castToString(section1Text2);
        const showSection2TextContainer = this.castToString(section2Text1) || this.castToString(section2Text2);
        const showSectionContainer = this.castToString(section1) || this.castToString(section2);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showSectionContainer && (
                        <div className={this.decorateCSS("section-container")}>
                            <div
                                className={`${this.decorateCSS("section-1")} ${activeSection === "section1" ? this.decorateCSS("active") : ""}`}
                                onClick={() => this.setComponentState("activeSection", "section1")}
                            >
                                {this.castToString(section1)}
                            </div>
                            <div
                                className={`${this.decorateCSS("section-2")} ${activeSection === "section2" ? this.decorateCSS("active") : ""}`}
                                onClick={() => this.setComponentState("activeSection", "section2")}
                            >
                                {this.castToString(section2)}
                            </div>

                        </div>
                    )}
                    {activeSection === "section1" && showSection1TextContainer && (
                        <div className={this.decorateCSS("section-1-text-container")}>
                            {section1Text1 && (
                                <div className={this.decorateCSS("section-1-text-1")}>{section1Text1}</div>
                            )}
                            {section1Text2 && (
                                <div className={this.decorateCSS("section-1-text-2")}>{section1Text2}</div>
                            )}
                        </div>
                    )}

                    {activeSection === "section2" && showSection2TextContainer && (
                        <div className={this.decorateCSS("section-2-text-container")}>
                            {section2Text1 && (
                                <div className={this.decorateCSS("section-2-text-1")}>{section2Text1}</div>
                            )}
                            {section2Text2 && (
                                <div className={this.decorateCSS("section-2-text-2")}>{section2Text2}</div>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Content16;