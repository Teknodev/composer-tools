import * as React from "react";
import styles from "./feature1.module.scss";
import { BaseFeature } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

interface Section {
    sectionTitle: React.JSX.Element;
    text1: React.JSX.Element;
    text2: React.JSX.Element;
}

class Feature1 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "array",
            key: "sections",
            displayer: "Sections",
            additionalParams: {
                maxElementCount: 4,
            },
            value: [
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Section Title",
                            value: "What We Do"
                        },
                        {
                            type: "string",
                            key: "text1",
                            displayer: "Text 1",
                            value: "Graphic design, integre mea ut, eu eos vide errem noluisse. Putent laoreet et ius. Vel utroque dissentias ut, nam ad soleat alterum maluisset, cu est copiosae intellegat inciderint. Nam ei eirmod consequuntur, quod nostrum consectetuer usu ut. Vim veniam singulis senserit an, sumo consul mentitum duo ea. Copiosae antiopam ius ea, meis explicari reformidans vix cu. Ut possit patrioque prodesset est, vivendum concludaturque conclusion emque eam."
                        },
                        {
                            type: "string",
                            key: "text2",
                            displayer: "Text 2",
                            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Design, integre mea ut, eu eos vide errem noluisse. Putent laoreet et ius. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }
                    ]
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Section Title",
                            value: "Our Services"
                        },
                        {
                            type: "string",
                            key: "text1",
                            displayer: "Text 1",
                            value: "Our comprehensive services include branding, web design, print materials, and digital marketing. We pride ourselves on delivering exceptional designs that communicate your brand's message effectively. Our team of experts work closely with you to understand your vision and bring it to life."
                        },
                        {
                            type: "string",
                            key: "text2",
                            displayer: "Text 2",
                            value: "From concept to completion, we manage every aspect of your design project. Our process is collaborative and transparent, ensuring you are involved and informed at every stage. We believe in creating designs that not only look great but also achieve your business objectives and resonate with your target audience."
                        }
                    ]
                }
            ]
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "VIEW SERVICES", "", null, null, "Primary"));
        this.setComponentState("activeSection", 0);
    }

    static getName(): string {
        return "Feature 1";
    }


    render() {
        const sections = this.castToObject<Section[]>("sections");
        const activeSection = this.getComponentState("activeSection");
        const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

        if (!sections || sections.length === 0) {
            return null;
        }


        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("section-container")}>
                        {sections.map((section: Section, index: number) => (
                            this.castToString(section.sectionTitle) ? (
                                <Base.SectionTitle
                                    key={`section-title-${index}`}
                                    className={`${this.decorateCSS("section-title")} ${activeSection === index ? this.decorateCSS("active") : ""}`}
                                    onClick={() => this.setComponentState("activeSection", index)}
                                >
                                    {section.sectionTitle}
                                </Base.SectionTitle>
                            ) : null
                        ))}
                    </div>

                    <div className={this.decorateCSS("active-section-content")}>
                        {sections.map((section: Section, index: number) => (
                            index === activeSection && (
                                <div key={`section-content-${index}`} className={this.decorateCSS("section-content-wrapper")}>
                                    {this.castToString(section.text1) && (
                                        <Base.P className={this.decorateCSS("text-1")}>
                                            {section.text1}
                                        </Base.P>
                                    )}
                                    {this.castToString(section.text2) && (
                                        <Base.P className={this.decorateCSS("text-2")}>
                                            {section.text2}
                                        </Base.P>
                                    )}
                                </div>
                            )
                        ))}
                    </div>

                    {this.castToString(buttonType.text) && (
                        <div className={this.decorateCSS("button-container")}>
                            <ComposerLink path={buttonType.url}>
                                <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")}>
                                    <Base.P className={this.decorateCSS("button-text")}>{buttonType.text}</Base.P>
                                </Base.Button>
                            </ComposerLink>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature1;