import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section7.module.scss";
import { Base, TypeButton } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

type TextType = {
    value: React.JSX.Element;
    label: React.JSX.Element;
}

class IntroSection7 extends BaseIntroSection {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            additionalParams: {
                availableTypes: ["image", "video"]
            },
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69367d22496aa1002ca9ac4a?alt=media"
            }
        });

        this.addProp({
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Smoothest Web Hosting"
        })

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Reliable web hosting with 99.9% availability guarantee and free SSL certificate, easy WordPress installs, and a free domain."
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")],
        });

        this.addProp({
            type: "object",
            key: "texts",
            displayer: "Text",
            value: [
                { type: "string", key: "label", displayer: "Label", value: "Starting at only" },
                { type: "string", key: "value", displayer: "Value", value: "$2.95/mo" },
            ],
        });
    }

    static getName(): string {
        return "Intro Section 7";
    }

    render() {
        const enableOverlay = this.getPropValue("enableOverlay");
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const textProp = this.castToObject<TextType>("texts");
        const textValueStr = this.castToString(textProp?.value);
        const textLabelStr = this.castToString(textProp?.label);
        const hasText = textValueStr || textLabelStr;
        const hasContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0 || hasText;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        {hasContent && (
                            <Base.VerticalContent className={this.decorateCSS("left-content")}>
                                {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {this.getPropValue("subtitle")} </Base.SectionSubTitle>}
                                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}> {this.getPropValue("title")} </Base.SectionTitle>}
                                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}> {this.getPropValue("description")} </Base.SectionDescription>}
                                {(buttons.length > 0 || hasText) && (
                                    <div className={this.decorateCSS("actions-container")}>
                                        {buttons.length > 0 && (
                                            <div className={this.decorateCSS("button-container")}>
                                                {buttons.map((item: ButtonTypeObj, index: number) => {
                                                    const buttonTextExist = this.castToString(item.text);
                                                    return (
                                                        buttonTextExist && (
                                                            <ComposerLink key={`button-${index}`} path={item.url}>
                                                                <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                                    <Base.P className={this.decorateCSS("button-text")}>
                                                                        {item.text}
                                                                    </Base.P>
                                                                </Base.Button>
                                                            </ComposerLink>
                                                        )
                                                    );
                                                })}
                                            </div>
                                        )}
                                        {hasText && (
                                            <div className={this.decorateCSS("text-container")}>
                                                <div className={this.decorateCSS("text")}>
                                                    {textLabelStr && (
                                                        <Base.P className={this.decorateCSS("text-label")}>
                                                            {textProp.label}
                                                        </Base.P>
                                                    )}
                                                    {textValueStr && (
                                                        <Base.P className={this.decorateCSS("text-value")}>
                                                            {textProp.value}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Base.VerticalContent>
                        )}
                        {this.getPropValue("image") && (
                            <div className={`${this.decorateCSS("right-content")} ${!hasContent ? this.decorateCSS("full-width") : ""}`}>
                                <div className={this.decorateCSS("image-wrapper")}>
                                    <Base.Media value={this.getPropValue("image")} className={this.decorateCSS("image")} />
                                    {enableOverlay && (<div className={this.decorateCSS("overlay")}></div>)}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container >
        )
    }
}
export default IntroSection7;