import { BaseFeature } from "../../EditorComponent";
import styles from "./feature30.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface RawFeature {
    title?: unknown;
    text?: unknown;
}

interface FeatureItem {
    title: string;
    text: string;
    rawTitle?: unknown;
    rawText?: unknown;
}

class Feature30 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Profile Image",
            value: "https://res.cloudinary.com/dyjpupuop/image/upload/v1759404710/content28_img.png"
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
        return "Feature 30";
    }

    private getItemCount(): number {
        return this.getPropValue("itemsPerRow");
    }

    render() {
        const image = this.getPropValue("image");

        const normalizeText = (value: any): string => {
            const text = this.castToString(value);
            return typeof text === "string" ? text.trim() : "";
        };

        const rawTitle = this.getPropValue("title");
        const rawDescription = this.getPropValue("description");
        const titleText = normalizeText(rawTitle);
        const descriptionText = normalizeText(rawDescription);
        
        const rawFeatures = (this.castToObject<RawFeature[]>("features") || []).filter(Boolean);
        const features: FeatureItem[] = rawFeatures
            .map((feature) => ({
                title: normalizeText(feature?.title),
                text: normalizeText(feature?.text),
                rawTitle: feature?.title,
                rawText: feature?.text
            }))
            .filter((feature) => feature.title || feature.text);
        
        const rawItemCount = Number(this.getItemCount()) || 2;
        const gridColumnCount = features.length > 0
            ? Math.min(rawItemCount, features.length)
            : rawItemCount;

        const leftAlign = { textAlign: "left" as const, alignItems: "flex-start" as const };
        const hasImage = !!this.castToString(image);

        const gridClassName = [
            this.decorateCSS("grid"),
            !hasImage ? this.decorateCSS("no-image") : ""
        ]
            .filter(Boolean)
            .join(" ");

        const gridStyles: React.CSSProperties = {
            alignItems: "flex-start",
            justifyContent: "flex-start"
        };

        if (!hasImage) {
            gridStyles.gridTemplateColumns = "minmax(0, 1fr)";
        }

        const shouldStretch = hasImage && features.length > 0;

        const contentWrapperStyle: React.CSSProperties = {
            ...leftAlign,
            height: shouldStretch ? "100%" : "auto",
            justifyContent: shouldStretch ? "space-between" : "flex-start"
        };

        const featuresBlockStyle: React.CSSProperties = {
            marginTop: shouldStretch ? "auto" : "var(--composer-gap-lg)"
        };

        const contentColumn = (
            <Base.GridCell className={this.decorateCSS("col-content")} padding="none">
                <Base.VerticalContent className={this.decorateCSS("content-wrapper")} style={contentWrapperStyle}>
                    {(titleText || descriptionText) && (
                        <Base.VerticalContent className={this.decorateCSS("header")} style={leftAlign}>
                            {titleText && (
                                <Base.SectionTitle className={this.decorateCSS("heading")} style={{ textAlign: "left" }}>
                                    {rawTitle}
                                </Base.SectionTitle>
                            )}
                            {descriptionText && (
                                <Base.SectionDescription className={this.decorateCSS("description")} style={{ textAlign: "left" }}>
                                    {rawDescription}
                                </Base.SectionDescription>
                            )}
                        </Base.VerticalContent>
                    )}

                    {features.length > 0 && (
                        <div className={this.decorateCSS("features-block")} style={featuresBlockStyle}>
                            <div
                                className={this.decorateCSS("features")}
                                style={{
                                    gridTemplateColumns: `repeat(${gridColumnCount}, minmax(0, 1fr))`
                                }}
                            >
                                {features.map((feature, index) => (
                                    <Base.VerticalContent
                                        key={index}
                                        className={this.decorateCSS("feature")}
                                        style={leftAlign}
                                    >
                                        {feature.title && (
                                            <Base.H4 className={this.decorateCSS("feature-title")} style={{ textAlign: "left" }}>
                                                {feature.rawTitle}
                                            </Base.H4>
                                        )}
                                        {feature.text && (
                                            <Base.P className={this.decorateCSS("feature-text")} style={{ textAlign: "left" }}>
                                                {feature.rawText}
                                            </Base.P>
                                        )}
                                    </Base.VerticalContent>
                                ))}
                            </div>
                        </div>
                    )}
                </Base.VerticalContent>
            </Base.GridCell>
        );

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")} style={{ justifyContent: "flex-start" }}>
                    <Base.ContainerGrid className={gridClassName} style={gridStyles}>
                        {/* Image Column */}
                        {hasImage && (
                            <Base.GridCell className={this.decorateCSS("col-image")} padding="none">
                                <Base.Media
                                    className={this.decorateCSS("image")}
                                    value={{ type: "image", url: this.castToString(image) as string }}
                                />
                            </Base.GridCell>
                        )}

                        {/* Content Column */}
                        {contentColumn}
                    </Base.ContainerGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature30;

