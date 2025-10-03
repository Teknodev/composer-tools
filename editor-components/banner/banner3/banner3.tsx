import * as React from "react";
import styles from "./banner3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    navigateTo: string;
};

class Banner3 extends BaseBanner {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac465503b007002cc7448b?alt=media" },
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About",
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
          value: "About",
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
      type: "icon",
      key: "breadcrumbIcon",
      displayer: "Breadcrumb Icon",
      value: "IoIosArrowForward",
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  static getName(): string {
    return "Banner 3";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const showBreadcrumb = this.getPropValue("showBreadcrumb");
    const currentPage = this.castToObject("currentPage");
    const currentPageTitle = currentPage?.title || "";
    const currentPageIcon = currentPage?.icon || "";
    const overlay = this.getPropValue("overlay");
    const isBreadcrumbVisible = breadcrumbItems.length > 0 || currentPageTitle || this.getPropValue("breadcrumbIcon");
    const isCrumberVisible = isBreadcrumbVisible || isTitleExist;


    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("backgroundImage")?.url
            ? this.decorateCSS("background")
            : this.decorateCSS("no-background")
        }`}
      >
        {this.getPropValue("backgroundImage")?.url && (
          <Base.Media
            value={this.getPropValue("backgroundImage")}
            className={this.decorateCSS("background-image")}
          />
        )}
        {overlay && this.getPropValue("backgroundImage")?.url && <div className={this.decorateCSS("overlay")}></div>}
        {isCrumberVisible && (
          <Base.MaxContent className={this.decorateCSS("breadcrumb-wrapper")}>
            <div className={this.decorateCSS("crumber-content")}>
              {isTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {showBreadcrumb && <div className={this.decorateCSS("breadcrumb-items")}>
                {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                  <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                    <ComposerLink path={item.navigateTo}>
                      <span className={this.decorateCSS("home-page")}>
                        {item.title}
                      </span>
                    </ComposerLink>
                    {index < breadcrumbItems.length - 1 && (
                      <Base.Icon
                        name={this.getPropValue("breadcrumbIcon")}
                        propsIcon={{
                          className: this.decorateCSS("crumberIcon"),
                        }}
                      />
                    )}
                  </div>
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
                      <span className={this.decorateCSS("about-page")}>
                        {currentPageTitle}
                      </span>
                    </div>
                  </>
                )}
              </div>}
            </div>
          </Base.MaxContent>
        )}
      </Base.Container>
    );
  }
}

export default Banner3;
