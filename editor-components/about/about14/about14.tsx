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
            displayer: "Media",
            additionalParams: {
                availableTypes: ["image", "video"],
            },
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/693ad982875e15002c62337c?alt=media",
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
            value:
                "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
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
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
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
    };

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

        const hasTextContent =
            this.castToString(title) ||
            this.castToString(description) ||
            this.castToString(subtitle);
        const hasImageContent = imageMedia && imageMedia.url;

        const alignment = Base.getContentAlignment();

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div
                        className={`${this.decorateCSS("wrapper")} ${!hasImageContent ? this.decorateCSS("no-image") : ""
                            }`}
                        data-alignment={alignment}
                    >
                        {hasTextContent && (
                            <div className={this.decorateCSS("content-side")}>
                                {(this.castToString(subtitle) ||
                                    this.castToString(title)) && (
                                        <Base.VerticalContent className={this.decorateCSS("heading")}>
                                            {this.castToString(subtitle) && (
                                                <Base.SectionSubTitle
                                                    className={this.decorateCSS("subtitle")}
                                                >
                                                    {subtitle}
                                                </Base.SectionSubTitle>
                                            )}
                                            {this.castToString(title) && (
                                                <Base.SectionTitle
                                                    className={this.decorateCSS("title")}
                                                >
                                                    {title}
                                                </Base.SectionTitle>
                                            )}
                                        </Base.VerticalContent>
                                    )}

                                {this.castToString(description) && (
                                    <div
                                        className={`${this.decorateCSS("description-wrapper")} ${isExpanded
                                            ? this.decorateCSS("expanded-wrapper")
                                            : ""
                                            }`}
                                    >
                                        <Base.SectionDescription
                                            className={this.decorateCSS("description")}
                                        >
                                            {description}
                                        </Base.SectionDescription>

                                        <div
                                            className={this.decorateCSS("show-more-overlay")}
                                            onClick={this.toggleExpand}
                                        >
                                            <div className={this.decorateCSS("show-more-btn")}>
                                                {!isExpanded && (
                                                    <Base.P className={this.decorateCSS("btn-text")}>
                                                        {showMoreText}
                                                    </Base.P>
                                                )}
                                                {isExpanded && (
                                                    <Base.P className={this.decorateCSS("btn-text")}>
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
                            <div className={this.decorateCSS("image-side")}>
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