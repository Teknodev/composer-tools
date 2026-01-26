import * as React from "react";
import { BaseAbout, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./about13.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class About13 extends BaseAbout {
    constructor(props?: TypeUsableComponentProps) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Media",
            value: {
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692d8a9e496aa1002ca4869f?alt=media",
                type: "image",
            },
            additionalParams: { availableTypes: ["image", "video"] }
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
            value: ""
        })

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Get Started with Blinkpage Themes",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps."
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Link")],
        });
    }

    static getName(): string {
        return "About 13";
    }

    render() {
        const image = this.getPropValue("image");
        const isImageExist = !!image?.url;
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const enableOverlay = this.getPropValue("enableOverlay");
        const hasContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${isImageExist && this.decorateCSS("has-image")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasContent && (
                            <div className={this.decorateCSS("left-content")}>
                                <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {this.getPropValue("subtitle")} </Base.SectionSubTitle>}
                                    {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                                    {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}> {this.getPropValue("description")} </Base.SectionDescription>}
                                    {buttons.length > 0 && (
                                        <Base.Row className={this.decorateCSS("button-container")}>
                                            {buttons.map((item, index) => {
                                                const buttonText = this.castToString(item.text || "");
                                                const buttonUrl = item.url || "#";
                                                if (!buttonText) return null;
                                                return (
                                                    <ComposerLink key={`dw-btn-${index}`} path={buttonUrl}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </Base.Row>
                                    )}
                                </Base.VerticalContent>
                            </div>
                        )}
                        {isImageExist && (
                            <div className={`${this.decorateCSS("right-content")} ${!hasContent && this.decorateCSS("image-full-width")}`}>
                                <div className={this.decorateCSS("image-wrapper")}>
                                    <Base.Media value={image} className={this.decorateCSS("image")} />
                                    {enableOverlay && <div className={this.decorateCSS("overlay")}></div>}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default About13;