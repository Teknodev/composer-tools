import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature31.module.scss";
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

class Feature31 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
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

        this.addProp({
            type: "icon",
            key: "icon",
            displayer: "Magnifier Icon",
            value: "IoSearchOutline"
        });

        this.addProp({
            type: "icon",
            key: "closeModalIcon",
            displayer: "Overlay Close Icon",
            value: "IoCloseOutline"
        });
    }

    static getName(): string {
        return "Feature 31";
    }

    private getItemCount(): number {
        return this.getPropValue("itemsPerRow");
    }

    render() {
        const image = this.getPropValue("image");
        const rawImageValue = this.castToString(image as any);
        const imageUrl = typeof rawImageValue === "string" ? rawImageValue : "";
        const imageValue: TypeMediaInputValue | null = imageUrl
            ? { type: "image", url: imageUrl }
            : null;

        const normalizeText = (value: unknown): string => {
            const text = this.castToString(value as any);
            return typeof text === "string" ? text : "";
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


        const hasImage = Boolean(imageValue);
        const rawItemCount = Number(this.getItemCount()) || 1;
        const featureColumnCount = Math.min(Math.max(rawItemCount, 1), 4);
        const hasContent = Boolean(titleText || descriptionText || features.length > 0);
        const isImageOverlayOpen = !!this.getComponentState("isImageOverlayOpen");
        const magnifierIcon = this.getPropValue("icon");
        const closeModalIcon = this.getPropValue("closeModalIcon");

        const layoutClassName = [
            this.decorateCSS("layout"),
            !hasImage ? this.decorateCSS("layout-no-image") : "",
            hasImage && !hasContent ? this.decorateCSS("layout-image-only") : ""
        ]
            .filter(Boolean)
            .join(" ");

        const featuresClassName = [
            this.decorateCSS("features"),
            this.decorateCSS(`columns-${featureColumnCount}`)
        ]
            .filter(Boolean)
            .join(" ");

        const imageWrapperClassName = [
            this.decorateCSS("col-image"),
            !hasContent ? this.decorateCSS("col-image-only") : ""
        ]
            .filter(Boolean)
            .join(" ");

        const imageClassName = [
            this.decorateCSS("image"),
            !hasContent ? this.decorateCSS("image-only") : ""
        ]
            .filter(Boolean)
            .join(" ");

        const contentColumn = (
            <div className={this.decorateCSS("col-content")}>
                <div className={this.decorateCSS("content-wrapper")}>
                    {(titleText || descriptionText) && (
                        <div className={this.decorateCSS("header")}>
                            {titleText && (
                                <Base.SectionTitle className={this.decorateCSS("heading")}>
                                    {rawTitle}
                                </Base.SectionTitle>
                            )}
                            {descriptionText && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {rawDescription}
                                </Base.SectionDescription>
                            )}
                        </div>
                    )}

                    {features.length > 0 && (
                        <div className={this.decorateCSS("features-block")}>
                            <div className={featuresClassName}>
                                {features.map((feature, index) => (
                                    <Base.VerticalContent
                                        key={index}
                                        className={this.decorateCSS("feature")}
                                    >
                                        {feature.title && (
                                            <Base.H3 className={this.decorateCSS("feature-title")}>
                                                {feature.rawTitle}
                                            </Base.H3>
                                        )}
                                        {feature.text && (
                                            <Base.P className={this.decorateCSS("feature-text")}>
                                                {feature.rawText}
                                            </Base.P>
                                        )}
                                    </Base.VerticalContent>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );

        return (
            <>
                {hasImage && imageValue && (
                    <Base.Overlay
                        className={this.decorateCSS("modal")}
                        isVisible={isImageOverlayOpen}
                    >
                        <div
                            className={this.decorateCSS("modal-wrapper")}
                            onClick={() => this.setComponentState("isImageOverlayOpen", false)}
                        >
                            <div
                                className={this.decorateCSS("modal-content")}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <div
                                    className={this.decorateCSS("close")}
                                    onClick={() => this.setComponentState("isImageOverlayOpen", false)}
                                >
                                    <Base.Icon
                                        name={closeModalIcon}
                                        propsIcon={{ className: this.decorateCSS("icon") }}
                                    />
                                </div>
                                <div className={this.decorateCSS("image-container")}>
                                    <Base.Media
                                        value={imageValue}
                                        className={this.decorateCSS("modal-image")}
                                    />
                                </div>
                            </div>
                        </div>
                    </Base.Overlay>
                )}
                <Base.Container className={this.decorateCSS("container")}>
                    <Base.MaxContent className={this.decorateCSS("max-content")}>
                        <div className={layoutClassName}>
                            {hasImage && (
                                <div
                                    className={imageWrapperClassName}
                                    onClick={() => imageValue && this.setComponentState("isImageOverlayOpen", true)}
                                >
                                    <div className={this.decorateCSS("image-frame")}>
                                        <Base.Media
                                            className={imageClassName}
                                            value={imageValue || undefined}
                                        />
                                        <div className={this.decorateCSS("overlay")} />
                                        <div className={this.decorateCSS("magnifier-icon-wrapper")}>
                                            <Base.Icon
                                                name={magnifierIcon}
                                                propsIcon={{ className: this.decorateCSS("magnifier-icon") }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {hasContent && contentColumn}
                        </div>
                    </Base.MaxContent>
                </Base.Container>
            </>
        );
    }
}

export default Feature31;

