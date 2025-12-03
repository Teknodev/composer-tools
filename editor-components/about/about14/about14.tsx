import * as React from "react";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import styles from "./about14.module.scss";

class About14 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "sideImage",
            displayer: "Image",
            additionalParams: {
                availableTypes: ["image", "video"],
            },
            value: {
                type: "image",
                url: "https://res.cloudinary.com/dyjpupuop/image/upload/v1764600443/Ekran_g%C3%B6r%C3%BCnt%C3%BCs%C3%BC_2025-12-01_174601_porglt.png",
            },
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
            value: "About Our Place",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
        });

        this.addProp({
            type: "object",
            key: "toggleSettings",
            displayer: "Buttons",
            value: [
                {
                    type: "string",
                    key: "showMoreText",
                    displayer: "Text 1",
                    value: "Show More",
                },
                {
                    type: "string",
                    key: "showLessText",
                    displayer: "Text 2",
                    value: "Show Less",
                }
            ]
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
        });

        this.setComponentState("isExpanded", false);
    }

    static getName(): string {
        return "About 14";
    }

    toggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentState = this.getComponentState("isExpanded");
        this.setComponentState("isExpanded", !currentState);
    }

    render() {
        const isExpanded = this.getComponentState("isExpanded");
        const imageMedia = this.getPropValue("sideImage");

        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const subtitle = this.getPropValue("subtitle");

        const toggleSettings = this.castToObject<any>("toggleSettings");
        const showMoreText = toggleSettings.showMoreText;
        const showLessText = toggleSettings.showLessText;

        const hasOverlay = this.getPropValue("overlay");

        const hasTextContent = this.castToString(title) || this.castToString(description) || this.castToString(subtitle);
        const hasImageContent = imageMedia && imageMedia.url;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("maxContent")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasTextContent && (
                            <div className={this.decorateCSS("contentSide")}>
                                {(this.castToString(subtitle) || this.castToString(title)) && (
                                    <Base.VerticalContent className={this.decorateCSS("heading")}>
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
                                    </Base.VerticalContent>
                                )}

                                {this.castToString(description) && (
                                    <div className={`${this.decorateCSS("descriptionWrapper")} ${isExpanded ? this.decorateCSS("expandedWrapper") : ""}`}>
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {description}
                                        </Base.SectionDescription>

                                        <div
                                            className={this.decorateCSS("showMoreOverlay")}
                                            onClick={this.toggleExpand}
                                        >
                                            <div className={this.decorateCSS("showMoreBtn")}>
                                                {!isExpanded && (
                                                    <Base.P className={this.decorateCSS("btnText")}>
                                                        {showMoreText}
                                                    </Base.P>
                                                )}
                                                {isExpanded && (
                                                    <Base.P className={this.decorateCSS("btnText")}>
                                                        {showLessText}
                                                    </Base.P>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {hasImageContent && (
                            <div className={this.decorateCSS("imageSide")}>
                                <Base.Media
                                    value={imageMedia}
                                    className={this.decorateCSS("image")}
                                />
                                {hasOverlay && (
                                    <div className={this.decorateCSS("overlay")} />
                                )}
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default About14;