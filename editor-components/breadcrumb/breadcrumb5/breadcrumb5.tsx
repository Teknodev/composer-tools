import * as React from "react";
import styles from "./breadcrumb5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type BreadcrumbItem = {
    title: JSX.Element;
    icon: TypeMediaInputValue;
    navigateTo: string;
};

type CurrentPageItem = {
    title: JSX.Element;
    icon: TypeMediaInputValue;
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
                            value: "",
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
                                name: "AiFillHome",
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
            key: "separatorIcon",
            displayer: "Separator Icon",
            additionalParams: {
                availableTypes: ["image", "icon"],
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
    }

    static getName(): string {
        return "Breadcrumb 5";
    }

    render() {
        const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
        const showBreadcrumb = this.getPropValue("showBreadcrumb");
        const currentPage = this.castToObject<CurrentPageItem>("currentPage");
        const currentPageTitleExist = this.castToString(currentPage?.title);
        const currentPageIconExist = currentPage?.icon && (currentPage.icon.type === "icon" ? currentPage.icon.name : currentPage.icon.url);
        const separatorIconValue = this.getPropValue("separatorIcon");
        const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showBreadcrumb && (
                        <div className={this.decorateCSS("section")}>
                            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                                const itemTitleExist = this.castToString(item.title);
                                const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                return (
                                    <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                                        {(itemTitleExist || itemIconExist) && (
                                            <ComposerLink path={item.navigateTo}>
                                                <div className={this.decorateCSS("breadcrumb-link")}>
                                                    {itemIconExist && (
                                                        <Base.Media
                                                            value={item.icon}
                                                            className={this.decorateCSS("icon")}
                                                        />
                                                    )}
                                                    {itemTitleExist && (
                                                        <Base.P className={this.decorateCSS("home-page-title")}>
                                                            {item.title}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            </ComposerLink>
                                        )}
                                    </div>
                                );
                            })}
                            {breadcrumbItems.length > 0 && (
                                <div className={this.decorateCSS("current-page-wrapper")}>
                                    {separatorIconExist && (
                                        <Base.Media
                                            value={separatorIconValue}
                                            className={this.decorateCSS("icon")}
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
                                            <Base.P className={this.decorateCSS("current-page-title")}>
                                                {currentPage.title}
                                            </Base.P>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Breadcrumb5;
