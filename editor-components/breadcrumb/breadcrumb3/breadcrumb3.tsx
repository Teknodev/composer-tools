import * as React from "react";
import styles from "./breadcrumb3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    icon: string;
    navigateTo: string;
};

class Breadcrumb3 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Media",
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
          value: "About",
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
      type: "media",
      key: "breadcrumbIcon",
      displayer: "Breadcrumb Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowForward",
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
    return "Breadcrumb 3";
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
                    {(this.castToString(item.title) || item.icon.name) && (
                      <ComposerLink path={item.navigateTo}>
                        <div className={this.decorateCSS("breadcrumb-link")}>
                          {item.icon.name && (
                            <Base.Media
                              value={item.icon}
                              className={this.decorateCSS("crumberIcon")}
                            />
                          )}
                          {this.castToString(item.title) && <Base.P className={this.decorateCSS("home-page")}>
                            {item.title}
                          </Base.P>}
                        </div>
                      </ComposerLink>
                    )}
                  </div>
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
                      {this.castToString(currentPageTitle) && <Base.P className={this.decorateCSS("about-page")}>
                        {currentPageTitle}
                      </Base.P>}
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

export default Breadcrumb3;
