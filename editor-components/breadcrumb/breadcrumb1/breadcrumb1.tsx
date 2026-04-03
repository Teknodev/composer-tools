import * as React from "react";
import styles from "./breadcrumb1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type BreadcrumbItem = {
    title: React.JSX.Element;
    icon: TypeMediaInputValue;
    navigateTo: string;
};

class Breadcrumb1 extends BaseBreadcrumb {
    constructor(props?: any) {
        super(props, styles);
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
            value: "Home",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "object",
            key: "background",
            displayer: "Background",
            value: [
                {
                    type: "media",
                    key: "image",
                    displayer: "Background Media",
                    additionalParams: { availableTypes: ["image", "video"] },
                    value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694543ec875e15002c68e5f0?alt=media" },
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
                name: "RxDoubleArrowRight",
            },
        });
    }

    static getName(): string {
        return "Breadcrumb 1";
    }

    render() {
        const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
        const bgImage = background?.image;
        const bgImageExist = bgImage && (bgImage.type === "icon" ? bgImage.name : bgImage.url);
        const overlay = background?.overlay;

        const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];

        const separatorIconValue = this.getPropValue("separatorIcon");
        const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);

        const isTitleExist = this.castToString(this.getPropValue("title"));
        const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
        const isDescriptionExist = this.castToString(this.getPropValue("description"));
        const alignmentValue = Base.getContentAlignment();

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {(bgImageExist || isTitleExist || isSubtitleExist || isDescriptionExist) && (
                    <div className={this.decorateCSS("hero")}>
                        {bgImageExist && (
                            <Base.Media
                                value={bgImage}
                                className={this.decorateCSS("background-image")}
                            />
                        )}
                        {overlay && bgImageExist && <div className={this.decorateCSS("overlay")} />}
                        {(isTitleExist || isSubtitleExist || isDescriptionExist) && (
                            <Base.MaxContent className={this.decorateCSS("max-content")}>
                                <Base.VerticalContent className={this.decorateCSS("left")}>
                                    {isSubtitleExist && (
                                        <Base.SectionSubTitle
                                            className={`${this.decorateCSS("subtitle")} ${bgImageExist ? this.decorateCSS("title-with-bg") : ""}`}
                                        >
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {isTitleExist && (
                                        <Base.SectionTitle
                                            className={`${this.decorateCSS("title-main")} ${bgImageExist ? this.decorateCSS("title-with-bg") : ""}`}
                                        >
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {isDescriptionExist && (
                                        <Base.SectionDescription
                                            className={`${this.decorateCSS("description")} ${bgImageExist ? this.decorateCSS("title-with-bg") : ""}`}
                                        >
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                </Base.VerticalContent>
                            </Base.MaxContent>
                        )}
                    </div>
                )}
                <div className={this.decorateCSS("strip")}>
                    <Base.MaxContent className={this.decorateCSS("strip-max-content")}>
                        <Base.P
                            className={`${this.decorateCSS("strip-content")} ${alignmentValue === "center"
                                ? this.decorateCSS("center")
                                : this.decorateCSS("left")
                                }`}
                        >
                            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                                const itemTitleExist = this.castToString(item.title);
                                const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                if (!itemTitleExist && !itemIconExist) return null;
                                const isLast = index === breadcrumbItems.length - 1;
                                return (
                                    <React.Fragment key={index}>
                                        <div className={this.decorateCSS("breadcrumb-item")}>
                                            <ComposerLink path={item.navigateTo}>
                                                <div className={this.decorateCSS("breadcrumb-link")}>
                                                    {itemIconExist && (
                                                        <Base.Media
                                                            value={item.icon}
                                                            className={this.decorateCSS("item-icon")}
                                                        />
                                                    )}
                                                    {itemTitleExist && (
                                                        <Base.P className={this.decorateCSS(isLast ? "current-page" : "home-page")}>
                                                            {item.title}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            </ComposerLink>
                                        </div>
                                        {!isLast && separatorIconExist && (
                                            <Base.Media
                                                value={separatorIconValue}
                                                className={this.decorateCSS("stripIcon")}
                                            />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </Base.P>
                    </Base.MaxContent>
                </div>
            </Base.Container>
        );
    }
}

export default Breadcrumb1;
