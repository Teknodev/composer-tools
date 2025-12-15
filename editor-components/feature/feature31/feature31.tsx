import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature31.module.scss";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface FeatureCardType {
    media?: TypeMediaInputValue;
    title: React.JSX.Element;
    description: React.JSX.Element;
}


class Feature31 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Trusted by over 100 developers",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            displayer: "Features",
            key: "features",
            value: [
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "icon"] },
                            value: { type: "icon", name: "FaRocket" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Smooth Start",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "icon"] },
                            value: { type: "icon", name: "FaLifeRing" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "24/7 Support",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "icon"] },
                            value: { type: "icon", name: "FaPiggyBank" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Low Prices",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "icon"] },
                            value: { type: "icon", name: "FaShieldAlt" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Strong Defence",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "feature",
                    displayer: "Feature",
                    value: [
                        {
                            type: "media",
                            key: "media",
                            displayer: "Media",
                            additionalParams: { availableTypes: ["image", "icon"] },
                            value: { type: "icon", name: "FaSailboat" },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Free Vacation",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "iconBackground",
            displayer: "Icon Background",
            value: true,
        });

        this.addProp({
            type: "number",
            key: "itemsPerRow",
            displayer: "Items Count in a Row",
            value: 5,
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "Feature 31";
    }

    render() {
        const subtitle = this.getPropValue("subtitle");
        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const titleExist = this.castToString(title);
        const descriptionExist = this.castToString(description);
        const subtitleExist = this.castToString(subtitle);
        const features = this.castToObject<FeatureCardType[]>("features") || [];
        const enableIconBackground = this.getPropValue("iconBackground");
        const itemsPerRow = this.getPropValue("itemsPerRow") || 5;
        const buttonItem = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasHeader = titleExist || descriptionExist || subtitleExist;

        const alignment = Base.getContentAlignment();

        const filteredFeatures = features.filter((feature: FeatureCardType) => {
            const hasTitle = this.castToString(feature.title);
            const hasDescription = this.castToString(feature.description);
            const hasMedia = (feature.media as any)?.name || (feature.media as any)?.url;
            return hasTitle || hasDescription || hasMedia;
        });
        const gridClass = `${this.decorateCSS("features-grid")} ${filteredFeatures.length > 0
            ? this.decorateCSS(`features-grid-${itemsPerRow}`)
            : ""
            }`;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasHeader && (
                        <Base.VerticalContent className={this.decorateCSS("header")}>
                            {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>)}
                            {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>)}
                            {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>)}
                        </Base.VerticalContent>
                    )}

                    {filteredFeatures.length > 0 && (
                        <Base.ListGrid
                            gridCount={{
                                pc: itemsPerRow,
                                tablet: 5,
                                phone: 2,
                            }}
                            className={gridClass}
                        >
                            {filteredFeatures.map((feature: FeatureCardType, index: number) => {
                                const featureTitleExist = this.castToString(feature.title);
                                const featureDescExist = this.castToString(feature.description);
                                const media = feature.media;
                                return (
                                    <div
                                        key={index}
                                        className={`${this.decorateCSS(
                                            "feature-card"
                                        )} ${this.decorateCSS(alignment)}`}
                                    >
                                        {media && (
                                            <div className={`${this.decorateCSS("icon-container")} ${!enableIconBackground ? this.decorateCSS("no-bg") : ""}`}>
                                                <Base.Media
                                                    value={media}
                                                    className={this.decorateCSS("icon")}
                                                />
                                            </div>
                                        )}

                                        {(featureTitleExist || featureDescExist) && (
                                            <Base.VerticalContent
                                                className={this.decorateCSS("content")}
                                            >
                                                {featureTitleExist && (
                                                    <Base.H5 className={this.decorateCSS("features-title")}>
                                                        {feature.title}
                                                    </Base.H5>
                                                )}
                                                {featureDescExist && (
                                                    <Base.P className={this.decorateCSS("features-description")}>
                                                        {feature.description}
                                                    </Base.P>
                                                )}
                                            </Base.VerticalContent>
                                        )}
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
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
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature31;
