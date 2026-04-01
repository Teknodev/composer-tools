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

type CurrentPageItem = {
    title: React.JSX.Element;
    icon: TypeMediaInputValue;
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
            type: "media",
            key: "image",
            displayer: "Background Media",
            additionalParams: { availableTypes: ["image", "video"] },
            value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694543ec875e15002c68e5f0?alt=media" },
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
            ],
        });
        this.addProp({
            type: "boolean",
            key: "showBreadcrumb",
            displayer: "Show Breadcrumb",
            value: true,
        });
        this.addProp({
            type: "media",
            key: "breadcrumbIcon",
            displayer: "Media",
            additionalParams: {
                availableTypes: ["image", "icon"],
            },
            value: {
                type: "icon",
                name: "RxDoubleArrowRight",
            },
        });
        this.addProp({
            type: "object",
            key: "currentPage",
            displayer: "Current Page",
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
            ],
        });
        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
        });
    }

    static getName(): string {
        return "Breadcrumb 1";
    }

    render() {
        const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
        const isTitleExist = this.castToString(this.getPropValue("title"));
        const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
        const isDescriptionExist = this.castToString(this.getPropValue("description"));
        const showBreadcrumb = this.getPropValue("showBreadcrumb");
        const currentPage = this.castToObject<CurrentPageItem>("currentPage");
        const currentPageTitleExist = this.castToString(currentPage?.title);
        const currentPageIconExist = currentPage?.icon && (currentPage.icon.type === "icon" ? currentPage.icon.name : currentPage.icon.url);
        const bgImage = this.getPropValue("image");
        const overlay = this.getPropValue("overlay");
        const alignmentValue = Base.getContentAlignment();
        const breadcrumbIconValue = this.getPropValue("breadcrumbIcon");
        const breadcrumbIconExist = breadcrumbIconValue && (breadcrumbIconValue.type === "icon" ? breadcrumbIconValue.name : breadcrumbIconValue.url);

        return (
            <div className={this.decorateCSS("breadcrumb1-root")}>
                {(bgImage?.url || isTitleExist || isSubtitleExist || isDescriptionExist) && (
                    <Base.Container className={this.decorateCSS("container")}>
                        {bgImage?.url && (
                            <Base.Media
                                value={bgImage}
                                className={this.decorateCSS("background-image")}
                            />
                        )}
                        {overlay && bgImage?.url && <div className={this.decorateCSS("overlay")}></div>}

                        {(isTitleExist || isSubtitleExist || isDescriptionExist) && (
                            <Base.MaxContent className={this.decorateCSS("max-content")}>
                                <Base.VerticalContent className={this.decorateCSS("left")}>
                                    {isSubtitleExist && (
                                        <Base.SectionSubTitle
                                            className={`${this.decorateCSS("subtitle")} ${bgImage?.url ? this.decorateCSS("title-with-bg") : ""}`}
                                        >
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {isTitleExist && (
                                        <Base.SectionTitle
                                            className={`${this.decorateCSS("title-main")} ${bgImage?.url ? this.decorateCSS("title-with-bg") : ""}`}
                                        >
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {isDescriptionExist && (
                                        <Base.SectionDescription
                                            className={`${this.decorateCSS("description")} ${bgImage?.url ? this.decorateCSS("title-with-bg") : ""}`}
                                        >
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                </Base.VerticalContent>
                            </Base.MaxContent>
                        )}
                    </Base.Container>
                )}
                {showBreadcrumb && (
                    <Base.Container className={this.decorateCSS("strip-container")}>
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
                                    return (
                                        <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                                            <ComposerLink path={item.navigateTo}>
                                                <div className={this.decorateCSS("breadcrumb-link")}>
                                                    {itemIconExist && (
                                                        <Base.Media
                                                            value={item.icon}
                                                            className={this.decorateCSS("stripIcon")}
                                                        />
                                                    )}
                                                    {itemTitleExist && (
                                                        <Base.P className={this.decorateCSS("home-page")}>
                                                            {item.title}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            </ComposerLink>
                                        </div>
                                    );
                                })}
                                {breadcrumbItems.length > 0 && (
                                    <div className={this.decorateCSS("current-page-wrapper")}>
                                        {breadcrumbIconExist && (
                                            <Base.Media
                                                value={breadcrumbIconValue}
                                                className={this.decorateCSS("stripIcon")}
                                            />
                                        )}
                                        <div className={this.decorateCSS("current-page-container")}>
                                            {currentPageIconExist && (
                                                <Base.Media
                                                    value={currentPage.icon}
                                                    className={this.decorateCSS("current-page-icon")}
                                                />
                                            )}
                                            {currentPageTitleExist && (
                                                <Base.P className={this.decorateCSS("current-page")}>
                                                    {currentPage.title}
                                                </Base.P>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Base.P>
                        </Base.MaxContent>
                    </Base.Container>
                )}
            </div>
        );
    }
}

export default Breadcrumb1;
