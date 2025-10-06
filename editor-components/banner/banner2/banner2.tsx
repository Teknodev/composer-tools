import * as React from "react";
import styles from "./banner2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    navigateTo: string;
};


class Banner2 extends BaseBanner {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Best Time to Celebrate",
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
    this.addProp({
      type: "boolean",
      key: "showGradient",
      displayer: "Show Gradient",
      value: true,
    });
    this.addProp({
      type: "icon",
      key: "breadcrumbIcon",
      displayer: "Breadcrumb Icon",
      value: "RxSlash",
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  static getName(): string {
    return "Banner 2";
  }

  render() {
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const isTitleExist = this.castToString(this.getPropValue("title"));
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
                  <ComposerLink path={item.navigateTo}>
                    <Base.P className={this.decorateCSS("home-page")}>
                      {item.title}
                    </Base.P>
                  </ComposerLink>
                  {index < breadcrumbItems.length - 1 && (
                    <Base.Icon
                      name={this.getPropValue("breadcrumbIcon")}
                      propsIcon={{
                        className: this.decorateCSS("crumberIcon"),
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
              {breadcrumbItems.length > 0 && (
                <>
                  <Base.Icon
                    name={this.getPropValue("breadcrumbIcon")}
                    propsIcon={{
                      className: this.decorateCSS("crumberIcon"),
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
                    <Base.P className={this.decorateCSS("current-page")}>
                      {currentPageTitle}
                    </Base.P>
                  </div>
                </>
              )}
            </Base.Row>
          </Base.MaxContent>
        )}
        {isTitleExist && (
          <Base.MaxContent>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          </Base.MaxContent>
        )}
      </Base.Container>
    );
  }
}

export default Banner2;
