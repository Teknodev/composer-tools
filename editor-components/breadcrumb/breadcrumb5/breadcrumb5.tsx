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
            type: "icon",
            key: "breadcrumbIcon",
            displayer: "Breadcrumb Icon",
            value: "RxDividerVertical",
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
                    type: "icon",
                    key: "icon",
                    displayer: "Icon",
                    value: "",
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
                                        <Base.Icon
                                            name={this.getPropValue("breadcrumbIcon")}
                                            propsIcon={{
                                                className: this.decorateCSS("icon"),
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                            {breadcrumbItems.length > 0 && (
                                <div className={this.decorateCSS("current-page-wrapper")}>
                                    <Base.Icon
                                        name={this.getPropValue("breadcrumbIcon")}
                                        propsIcon={{
                                            className: this.decorateCSS("icon"),
                                        }}
                                    />
                                    <div className={this.decorateCSS("current-page-container")}>
                                        {currentPageIcon && (
                                            <Base.Icon
                                                name={currentPageIcon}
                                                propsIcon={{
                                                    className: this.decorateCSS("current-page-icon"),
                                                }}
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
