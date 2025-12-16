import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature34.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Feature34 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Media",
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69382412875e15002c5fbd92?alt=media"
            },
            additionalParams: {
                availableTypes: ["image", "video"]
            }
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: ""
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "I'm Alexander Green, an\nindependent digital designer"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "I usually work in vanilla javascript without frameworks for small projects, allowing me a complete freedom on the architecture, a Headless CMS like Prismic for content management."
        });

        this.addProp({
            type: "array",
            key: "features",
            displayer: "Features",
            value: [
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Feature Title",
                            value: "Performance"
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Feature Text",
                            value: "On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices."
                        }
                    ]
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Feature Title",
                            value: "Interaction"
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Feature Text",
                            value: "A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them."
                        }
                    ]
                }
            ]
        });

        this.addProp({
            type: "number",
            key: "itemsPerRow",
            displayer: "Item Count in a Row",
            value: 2,
            max: 4
        });
    }

    static getName(): string {
        return "Feature 34";
    }

    render() {
        const image = this.getPropValue("image") as TypeMediaInputValue;

        const rawTitle = this.getPropValue("title");
        const rawSubtitle = this.getPropValue("subtitle");
        const rawDescription = this.getPropValue("description");

        const subtitleText = this.castToString(rawSubtitle);
        const titleText = this.castToString(rawTitle);
        const descriptionText = this.castToString(rawDescription);

        const rawFeatures = (this.castToObject<any[]>("features") || []).filter(Boolean);
        const features = rawFeatures.map((feature) => ({
            title: feature?.title,
            text: feature?.text,
        })).filter((item) => this.castToString(item.title) || this.castToString(item.text));

        const itemsPerRow = this.getPropValue("itemsPerRow") || 2;
        const hasContent = Boolean(subtitleText || titleText || descriptionText || features.length > 0);

        const overlay = this.getPropValue("overlay");

        const hasMedia = !!(image?.url || image?.name);

        const alignmentValue = Base.getContentAlignment();
        const noImageCenterClass = !hasMedia && alignmentValue === "center" ? this.decorateCSS("no-image-center") : "";

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>

                    {hasMedia && (
                        <div
                            className={`${this.decorateCSS("image-side")} ${!hasContent ? this.decorateCSS("no-content") : ""}`}
                        >
                            <Base.Media
                                className={this.decorateCSS("image")}
                                value={image}
                            />
                            {overlay && (
                                <div className={this.decorateCSS("overlay")} />
                            )}
                        </div>
                    )}

                    {hasContent && (
                        <Base.VerticalContent className={`${this.decorateCSS("content-side")} ${noImageCenterClass}`}>
                            {(subtitleText || titleText || descriptionText) && (
                                <Base.VerticalContent className={this.decorateCSS("header")}>
                                    {subtitleText && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {rawSubtitle}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleText && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {rawTitle}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionText && (
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {rawDescription}
                                        </Base.SectionDescription>
                                    )}
                                </Base.VerticalContent>
                            )}

                            {features.length > 0 && (
                                <Base.ListGrid
                                    gridCount={{ pc: itemsPerRow, tablet: 2, phone: 1 }}
                                    className={this.decorateCSS("features-grid")}
                                >
                                    {features.map((feature, index) => (
                                        <div key={index} className={this.decorateCSS("feature-item")}>
                                            {this.castToString(feature.title) && (
                                                <Base.H5 className={this.decorateCSS("feature-title")}>
                                                    {feature.title}
                                                </Base.H5>
                                            )}
                                            {this.castToString(feature.text) && (
                                                <Base.P className={this.decorateCSS("feature-text")}>
                                                    {feature.text}
                                                </Base.P>
                                            )}
                                        </div>
                                    ))}
                                </Base.ListGrid>
                            )}
                        </Base.VerticalContent>
                    )}

                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature34;