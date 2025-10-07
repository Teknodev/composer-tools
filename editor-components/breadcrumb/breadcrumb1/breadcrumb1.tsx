import * as React from "react";
import styles from "./breadcrumb1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    navigateTo: string;
};

class Breadcrumb1 extends BaseBreadcrumb {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Home",
        });
        this.addProp({
            type: "media",
            key: "image",
            displayer: "Background Image",
            additionalParams: { availableTypes: ["image", "video"] },
            value: { type: "image", url: "https://cafert.templatekit.co/wp-content/uploads/sites/10/2021/10/flat-lay-food.jpg" },
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
            displayer: "Breadcrumb Icon",
            additionalParams: {
                availableTypes: ["icon"],
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
                    displayer: "Icon",
                    additionalParams: {
                        availableTypes: ["icon"],
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
            value: true,
        });
    }

    static getName(): string {
        return "Breadcrumb 1";
    }

    render() {
        const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
        const isTitleExist = this.castToString(this.getPropValue("title"));
        const showBreadcrumb = this.getPropValue("showBreadcrumb");
        const currentPage = this.castToObject("currentPage");
        const currentPageTitle = currentPage?.title || "";
        const currentPageIcon = currentPage?.icon.name || "";
        const bgImage = this.getPropValue("image");
        const overlay = this.getPropValue("overlay");
        const alignmentValue = Base.getContentAlignment();

        console.log(currentPageIcon,"currentPageIcon")

        return (
            <>
                {(bgImage?.url || isTitleExist) && (
                    <Base.Container
                        className={this.decorateCSS("container")}
                    >
                        {bgImage?.url && (
                            <Base.Media
                                value={bgImage}
                                className={this.decorateCSS("background-image")}
                            />
                        )}
                        {overlay && bgImage?.url && <div className={this.decorateCSS("overlay")}></div>}

                        {isTitleExist && (
                            <Base.MaxContent className={this.decorateCSS("max-content")}>
                                <Base.SectionTitle
                                    className={`${this.decorateCSS("title-main")} ${bgImage?.url && this.decorateCSS("title-with-bg")
                                        } }`}
                                >
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            </Base.MaxContent>
                        )}
                    </Base.Container>
                )}
                {showBreadcrumb && (
                    <Base.Container className={this.decorateCSS("strip-container")}>
                        <Base.MaxContent className={this.decorateCSS("strip-max-content")}>
                            <div
                                className={`${this.decorateCSS("strip-content")} ${alignmentValue === "center"
                                    ? this.decorateCSS("center")
                                    : this.decorateCSS("left")
                                    }`}
                            >
                                {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                                    <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                                        {this.castToString(item.title) && <ComposerLink path={item.navigateTo}>
                                            <Base.P className={this.decorateCSS("home-page")}>
                                                {item.title}
                                            </Base.P>
                                        </ComposerLink>}
                                        {index < breadcrumbItems.length - 1 && this.getPropValue("breadcrumbIcon") && (
                                            <Base.Media
                                                value={this.getPropValue("breadcrumbIcon")}
                                                className={this.decorateCSS("stripIcon")}
                                            />
                                        )}
                                    </div>
                                ))}
                                {breadcrumbItems.length > 0 && (
                                    <div className={this.decorateCSS("current-page-wrapper")}>
                                        {this.getPropValue("breadcrumbIcon") && <Base.Media
                                            value={this.getPropValue("breadcrumbIcon")}
                                            className={this.decorateCSS("stripIcon")}
                                        />}
                                        <div className={this.decorateCSS("current-page-container")}>
                                            {currentPageIcon && (
                                                <Base.Media
                                                    value={currentPageIcon}
                                                    className={this.decorateCSS("current-page-icon")}
                                                />
                                            )}
                                            {this.castToString(currentPageTitle) && 
                                            <Base.P className={this.decorateCSS("current-page")}>
                                                {currentPageTitle}
                                            </Base.P>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Base.MaxContent>
                    </Base.Container>
                )}
            </>
        );
    }
}

export default Breadcrumb1;
