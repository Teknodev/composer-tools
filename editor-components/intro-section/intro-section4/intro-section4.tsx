import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection4 extends BaseIntroSection {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "cover-image",
            displayer: "Image",
            value: {
                url: "https://res.cloudinary.com/dmydg7kum/image/upload/v1763494879/thought-catalog-Nv-vx3kUR2A-unsplash_hlncis.jpg",
                type: "image",
            },

            additionalParams: { availableTypes: ["image", "video"] }
        })

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
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
            value: "Online University of In-Demand Professions",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value:
                "Objectively innovate empowered manufactured products whereas parallel platforms.",
        });

        this.addProp({
            type: "string",
            key: "label",
            displayer: "Label",
            value:
                "OUR COURSES",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Business", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Programming", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Marketing", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Design", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "Intro Section 4";
    }

    render() {
        const coverImage = this.getPropValue("cover-image");
        const buttonItem = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const subtitle = this.castToString(this.getPropValue("subtitle")) || "";
        const title = this.castToString(this.getPropValue("title")) || "";
        const description = this.castToString(this.getPropValue("description")) || "";
        const label = this.castToString(this.getPropValue("label")) || "";
        const hasMedia = !!coverImage?.url;
        const isVideo = coverImage?.type === "video";

        return (
            <Base.Container
                className={`${this.decorateCSS("container")} 
                ${hasMedia ? this.decorateCSS("has-bg-image") : this.decorateCSS("no-bg")} 
                ${hasMedia && this.getPropValue("overlay") ? this.decorateCSS("overlay") : ""}`}
            >
                {hasMedia && (
                    <div className={this.decorateCSS("bg-media-container")}>
                        {isVideo ? (
                            <video
                                src={coverImage.url}
                                className={this.decorateCSS("bg-media")}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <img
                                src={coverImage.url}
                                alt="background"
                                className={this.decorateCSS("bg-media")}
                            />
                        )}
                    </div>
                )}
                <Base.MaxContent className={this.decorateCSS("content")}>
                    <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                        {subtitle && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {this.getPropValue("subtitle")}
                            </Base.SectionSubTitle>
                        )}
                        {title && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {this.getPropValue("title")}
                            </Base.SectionTitle>
                        )}
                        {description && (
                            <Base.SectionDescription
                                className={this.decorateCSS("description")}
                            >
                                {this.getPropValue("description")}
                            </Base.SectionDescription>
                        )}
                        {label && (
                            <Base.P className={this.decorateCSS("label")}>
                                {this.getPropValue("label")}
                            </Base.P>
                        )}
                        {buttonItem.length > 0 && (
                            <Base.Row className={this.decorateCSS("button-container")}>
                                {buttonItem.map(
                                    (buttonObj, index: number) => {
                                        const buttonText = this.castToString(buttonObj.text);
                                        return buttonText && (
                                            <ComposerLink key={index} path={buttonObj.url}>
                                                <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    }
                                )}
                            </Base.Row>
                        )}
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default IntroSection4;