import * as React from "react";
import styles from "./breadcrumb5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: React.JSX.Element;
    icon: any;
    navigateTo: string;
};

class Breadcrumb5 extends BaseBreadcrumb {
    constructor(props?: any) {
        super(props, styles);
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
            type: "media",
            key: "backgroundImage",
            displayer: "Background Media",
            additionalParams: { availableTypes: ["image", "video"] },
            value: { type: "image", url: "" },
        });
        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
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
                name: "RxDividerVertical",
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
    }

    static getName(): string {
        return "Breadcrumb 5";
    }

    render() {
        const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
        const showBreadcrumb = this.getPropValue("showBreadcrumb");
        const currentPage = this.castToObject<any>("currentPage");
        const currentPageTitle = currentPage?.title || "";
        const currentPageIcon = currentPage?.icon || "";
        const backgroundImage = this.getPropValue("backgroundImage");
        const overlay = this.getPropValue("overlay");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {overlay && <div className={this.decorateCSS("overlay")} />}

               {backgroundImage && (
                    <Base.Media
                        value={backgroundImage}
                        className={this.decorateCSS("background-image")}
                    />
                )}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showBreadcrumb && (
                        <div className={this.decorateCSS("section")}>
                            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                                <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                                    {(this.castToString(item.title) || item.icon.name) && (
                                        <ComposerLink path={item.navigateTo}>
                                            <div className={this.decorateCSS("breadcrumb-link")}>
                                                {item.icon.name && (
                                                    <Base.Media
                                                        value={item.icon}
                                                        className={this.decorateCSS("icon")}
                                                    />
                                                )}
                                                {this.castToString(item.title) && <Base.P className={this.decorateCSS("home-page-title")}>
                                                    {item.title}
                                                </Base.P>}
                                            </div>
                                        </ComposerLink>
                                    )}
                                </div>
                            ))}
                            {breadcrumbItems.length > 0 && (
                                <div className={this.decorateCSS("current-page-wrapper")}>
                                    <Base.Media
                                        value={this.getPropValue("breadcrumbIcon")}
                                        className={this.decorateCSS("icon")}
                                    />
                                    <div className={this.decorateCSS("current-page-container")}>
                                        {currentPageIcon.name && (
                                            <Base.Media
                                                value={currentPageIcon}
                                                className={this.decorateCSS("current-page-icon")}
                                            />
                                        )}
                                        {this.castToString(currentPageTitle) && <Base.P className={this.decorateCSS("current-page-title")}>
                                            {currentPageTitle}
                                        </Base.P>}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Breadcrumb5;
