import * as React from "react";
import styles from "./feature1.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

interface Section {
    title: React.JSX.Element;
    text1: React.JSX.Element;
    text2: React.JSX.Element;
}

type Button = {
    text: React.JSX.Element;
    url: string;
    icon: TypeMediaInputValue;
    type: string;
};

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
                            key: "title",
                            displayer: "Title",
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
                            key: "title",
                            displayer: "Title",
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

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "VIEW SERVICES", "", null, null, "Primary"),
            ],
        });
        this.setComponentState("activeSection", 0);
    }

    static getName(): string {
        return "Feature 1";
    }


    render() {
        const sections = this.castToObject<Section[]>("sections");
        const activeSection = this.getComponentState("activeSection");
        const buttons = this.castToObject<Button[]>("buttons");
        const hasValidButtons = buttons && buttons.some((btn: Button) => {
            const buttonText = this.castToString(btn.text);
            const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
            return buttonText || iconExist;
        });

        if (!sections || sections.length === 0) {
            return null;
        }


        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("section-container")}>
                        {sections.map((section: Section, index: number) => (
                            this.castToString(section.title) ? (
                                <Base.SectionTitle
                                    key={`section-title-${index}`}
                                    className={`${this.decorateCSS("section-title")} ${activeSection === index ? this.decorateCSS("active") : ""}`}
                                    onClick={() => this.setComponentState("activeSection", index)}
                                >
                                    {section.title}
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

                    {hasValidButtons && (
                        <div className={this.decorateCSS("button-container")}>
                            {buttons.map((item: Button, index: number) => {
                                const buttonText = this.castToString(item.text);
                                const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                if (!buttonText && !iconExist) return null;
                                return (
                                    <ComposerLink key={index} path={item.url}>
                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                            {buttonText && (
                                                <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                            )}
                                            {iconExist && (
                                                <Base.Media className={this.decorateCSS("button-icon")} value={item.icon} />
                                            )}
                                        </Base.Button>
                                    </ComposerLink>
                                );
                            })}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature1;