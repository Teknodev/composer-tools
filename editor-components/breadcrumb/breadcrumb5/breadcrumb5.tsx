import * as React from "react";
import styles from "./breadcrumb5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
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
        const currentPageIcon = currentPage?.icon.name || "";

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showBreadcrumb && (
                        <div className={this.decorateCSS("section")}>
                            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                                <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                                    <ComposerLink path={item.navigateTo}>
                                        <Base.P className={this.decorateCSS("home-page-title")}>
                                            {item.title}
                                        </Base.P>
                                    </ComposerLink>
                                    {index < breadcrumbItems.length - 1 && (
                                        <Base.Media
                                            value={this.getPropValue("breadcrumbIcon")}
                                            className={this.decorateCSS("icon")}
                                        />
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
                                        {currentPageIcon && (
                                            <Base.Media
                                                value={currentPageIcon}
                                                className={this.decorateCSS("current-page-icon")}
                                            />
                                        )}
                                        <Base.P className={this.decorateCSS("current-page-title")}>
                                            {currentPageTitle}
                                        </Base.P>
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
