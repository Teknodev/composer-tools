import * as React from "react";
import styles from "./breadcrumb2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    icon: string;
    navigateTo: string;
};


class Breadcrumb2 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Best Time to Celebrate",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
      key: "showGradient",
      displayer: "Show Gradient",
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
                name: "RxSlash",
            },
        });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  static getName(): string {
    return "Breadcrumb 2";
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
    const showGradient = this.getPropValue("showGradient");
    const overlay = this.getPropValue("overlay");
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          showGradient
            ? this.decorateCSS("gradientBackground")
            : this.decorateCSS("noGradient")
        }`}
      >
        {overlay && <div className={this.decorateCSS("overlay")}></div>}
        {showBreadcrumb && (
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <Base.Row className={this.decorateCSS("crumber-content")}>
              {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                <React.Fragment key={index}>
                  {(this.castToString(item.title) || item.icon) && (
                    <ComposerLink path={item.navigateTo}>
                      <div className={this.decorateCSS("breadcrumb-link")}>
                        {item.icon && (
                          <Base.Media
                            value={item.icon}
                            className={this.decorateCSS("crumberIcon")}
                          />
                        )}
                        {this.castToString(item.title) && (
                          <Base.P className={this.decorateCSS("home-page")}>
                            {item.title}
                          </Base.P>
                        )}
                      </div>
                    </ComposerLink>
                  )}
                </React.Fragment>
              ))}
              {breadcrumbItems.length > 0 && (
                <>
                  <Base.Media
                    value={this.getPropValue("breadcrumbIcon")}
                    className={this.decorateCSS("crumberIcon")}
                  />
                  <div className={this.decorateCSS("current-page-container")}>
                    {currentPageIcon.name && (
                      <Base.Media
                        value={currentPageIcon}
                        className={this.decorateCSS("current-page-icon")}
                      />
                    )}
                    <Base.P className={this.decorateCSS("current-page")}>
                      {currentPageTitle}
                    </Base.P>
                  </div>
                </>
              )}
            </Base.Row>
            <Base.VerticalContent>
            {isTitleExist && (
            <div>
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            </div>
          )}
          {isDescriptionExist && (
            <div>
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {description}
              </Base.SectionDescription>
            </div>
          )}
          </Base.VerticalContent>
            </Base.MaxContent>
          )}
        </Base.Container>
    );
  }
}

export default Breadcrumb2;
