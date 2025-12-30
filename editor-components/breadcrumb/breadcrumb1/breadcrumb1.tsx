import * as React from "react";
import styles from "./breadcrumb1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    icon: string;
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
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon"],
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
        const isDescriptionExist = this.castToString(this.getPropValue("description"));
        const description = this.getPropValue("description");
        const showBreadcrumb = this.getPropValue("showBreadcrumb");
        const currentPage = this.castToObject("currentPage");
        const currentPageTitle = currentPage?.title || "";
        const currentPageIcon = currentPage?.icon || "";
        const bgImage = this.getPropValue("image");
        const overlay = this.getPropValue("overlay");
        const alignmentValue = Base.getContentAlignment();

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
                            <Base.VerticalContent className={this.decorateCSS("left")}>
                                <Base.SectionTitle
                                    className={`${this.decorateCSS("title-main")} ${bgImage?.url && this.decorateCSS("title-with-bg")
                                        } }`}
                                >
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                                {isDescriptionExist && (
                                    <Base.MaxContent className={this.decorateCSS("max-content")}>
                                        <Base.SectionDescription className={`${this.decorateCSS("description")} ${bgImage?.url && this.decorateCSS("title-with-bg")}`}>
                                        {description}
                                        </Base.SectionDescription>
                                    </Base.MaxContent>
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
                                {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                                    <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                                        {(this.castToString(item.title) || item.icon.name) && <ComposerLink path={item.navigateTo}>
                                            <div className={this.decorateCSS("breadcrumb-link")}>
                                                {item.icon.name && (
                                                    <Base.Media
                                                        value={item.icon}
                                                        className={this.decorateCSS("stripIcon")}
                                                    />
                                                )}
                                                {this.castToString(item.title) && (
                                                    <Base.P className={this.decorateCSS("home-page")}>
                                                        {item.title}
                                                    </Base.P>
                                                )}
                                            </div>
                                        </ComposerLink>}
                                    </div>
                                ))}
                                {breadcrumbItems.length > 0 && (
                                    <div className={this.decorateCSS("current-page-wrapper")}>
                                        {this.getPropValue("breadcrumbIcon") && <Base.Media
                                            value={this.getPropValue("breadcrumbIcon")}
                                            className={this.decorateCSS("stripIcon")}
                                        />}
                                        <div className={this.decorateCSS("current-page-container")}>
                                            {currentPageIcon.name && (
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
                            </Base.P>
                        </Base.MaxContent>
                    </Base.Container>
                )}
            </>
        );
    }
}

export default Breadcrumb1;

