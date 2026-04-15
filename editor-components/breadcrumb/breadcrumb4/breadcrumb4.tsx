import * as React from "react";
import styles from "./breadcrumb4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type VectorsItem = {
    vector1: TypeMediaInputValue;
    vector2: TypeMediaInputValue;
    vector3: TypeMediaInputValue;
    animation: boolean;
};

type BreadcrumbItem = {
    title: React.JSX.Element;
    icon: TypeMediaInputValue;
    navigateTo: string;
};

class Breadcrumb4 extends BaseBreadcrumb {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "object",
            key: "background",
            displayer: "Background Media",
            value: [
                {
                    type: "media",
                    key: "image",
                    displayer: "Background Media",
                    additionalParams: { availableTypes: ["image", "video"] },
                    value: { type: "image", url: "" },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                },
            ],
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
            value: "About Us",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });
        this.addProp({
            type: "object",
            key: "vectors",
            displayer: "Decorative Media",
            value: [
                {
                    type: "media",
                    key: "vector1",
                    displayer: "Media 1",
                    additionalParams: { availableTypes: ["image", "icon"] },
                    value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e67fb049c002cc23bf1?alt=media" },
                },
                {
                    type: "media",
                    key: "vector2",
                    displayer: "Media 2",
                    additionalParams: { availableTypes: ["image", "icon"] },
                    value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e7efb049c002cc23bf9?alt=media" },
                },
                {
                    type: "media",
                    key: "vector3",
                    displayer: "Media 3",
                    additionalParams: { availableTypes: ["image", "icon"] },
                    value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e90fb049c002cc23c02?alt=media" },
                },
                {
                    type: "boolean",
                    key: "animation",
                    displayer: "Animation",
                    value: true,
                },
            ],
        });

        this.addProp({
            type: "array",
            key: "breadcrumbItems",
            displayer: "Breadcrumb Items",
            value: [
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Home",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "",
                            },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "item",
                    displayer: "Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Current Page",
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Media",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "",
                            },
                        },
                        {
                            type: "page",
                            key: "navigateTo",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "media",
            key: "separatorIcon",
            displayer: "Separator Icon",
            additionalParams: {
                availableTypes: ["image", "icon"],
            },
            value: {
                type: "icon",
                name: "MdKeyboardArrowRight",
            },
        });
    }

    static getName(): string {
        return "Breadcrumb 4";
    }

    render() {
        const vectors = this.castToObject<VectorsItem>("vectors");
        const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
        const backgroundImage = background?.image;
        const bgImageExist = backgroundImage && (backgroundImage.type === "icon" ? backgroundImage.name : backgroundImage.url);
        const overlay = background?.overlay;
        const isTitleExist = this.castToString(this.getPropValue("title"));
        const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
        const isDescriptionExist = this.castToString(this.getPropValue("description"));
        const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
        const separatorIconValue = this.getPropValue("separatorIcon");
        const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);

        const vector1ImageExist = vectors?.vector1 && (vectors.vector1.type === "icon" ? vectors.vector1.name : vectors.vector1.url);
        const vector2ImageExist = vectors?.vector2 && (vectors.vector2.type === "icon" ? vectors.vector2.name : vectors.vector2.url);
        const vector3ImageExist = vectors?.vector3 && (vectors.vector3.type === "icon" ? vectors.vector3.name : vectors.vector3.url);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {vector1ImageExist && (
                    <Base.Media
                        value={vectors.vector1}
                        className={`${this.decorateCSS("vector1")} ${vectors.animation ? this.decorateCSS("animated") : ""}`}
                    />
                )}
                {vector2ImageExist && (
                    <Base.Media
                        value={vectors.vector2}
                        className={`${this.decorateCSS("vector2")} ${vectors.animation ? this.decorateCSS("animated") : ""}`}
                    />
                )}
                {vector3ImageExist && (
                    <Base.Media
                        value={vectors.vector3}
                        className={`${this.decorateCSS("vector3")} ${vectors.animation ? this.decorateCSS("animated") : ""}`}
                    />
                )}
                {bgImageExist && (
                    <Base.Media
                        value={backgroundImage}
                        className={this.decorateCSS("background-image")}
                    />
                )}
                {overlay && bgImageExist && <div className={this.decorateCSS("overlay")}></div>}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={`${this.decorateCSS("items")} ${bgImageExist ? this.decorateCSS("with-image") : ""}`}>
                        {isSubtitleExist && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {this.getPropValue("subtitle")}
                            </Base.SectionSubTitle>
                        )}
                        {isTitleExist && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {this.getPropValue("title")}
                            </Base.SectionTitle>
                        )}
                        {isDescriptionExist && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {this.getPropValue("description")}
                            </Base.SectionDescription>
                        )}
                        <div className={this.decorateCSS("pages")}>
                            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                                const itemTitleExist = this.castToString(item.title);
                                const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                const isLast = index === breadcrumbItems.length - 1;
                                return (
                                    <div key={index} className={this.decorateCSS("link")}>
                                        {(itemTitleExist || itemIconExist) && (
                                            <ComposerLink path={item.navigateTo}>
                                                <div className={this.decorateCSS("breadcrumb-link")}>
                                                    {itemIconExist && (
                                                        <Base.Media
                                                            value={item.icon}
                                                            className={this.decorateCSS("crumberIcon")}
                                                        />
                                                    )}
                                                    {itemTitleExist && (
                                                        <Base.P className={this.decorateCSS("text")}>
                                                            {item.title}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            </ComposerLink>
                                        )}
                                        {!isLast && separatorIconExist && (
                                            <Base.Media
                                                value={separatorIconValue}
                                                className={this.decorateCSS("crumberIcon")}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Breadcrumb4;