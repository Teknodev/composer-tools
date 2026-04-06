import * as React from "react";
import styles from "./breadcrumb3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type BreadcrumbItem = {
  title: JSX.Element;
  icon: TypeMediaInputValue;
  navigateTo: string;
};

class Breadcrumb3 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About",
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
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
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
    this.addProp({
      type: "media",
      key: "separatorIcon",
      displayer: "Separator Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowForward",
      },
    });
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac465503b007002cc7448b?alt=media" },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
  }

  static getName(): string {
    return "Breadcrumb 3";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const currentPage = this.castToObject<{ title: JSX.Element; icon: TypeMediaInputValue }>("currentPage");
    const currentPageTitle = this.castToString(currentPage?.title);
    const currentPageIconExist = currentPage?.icon && (currentPage.icon.type === "icon" ? currentPage.icon.name : currentPage.icon.url);
    const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
    const bgImage = background?.image;
    const bgImageExist = bgImage && (bgImage.type === "icon" ? bgImage.name : bgImage.url);
    const overlay = background?.overlay;
    const separatorIconValue = this.getPropValue("separatorIcon");
    const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);
    const isBreadcrumbVisible = breadcrumbItems.length > 0 || currentPageTitle || separatorIconExist;
    const isCrumberVisible = isBreadcrumbVisible || isTitleExist || isSubtitleExist || isDescriptionExist;
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${bgImageExist
          ? this.decorateCSS("background")
          : this.decorateCSS("no-background")
          }`}
      >
        {bgImageExist && (
          <Base.Media
            value={bgImage}
            className={this.decorateCSS("background-image")}
          />
        )}
        {overlay && bgImageExist && <div className={this.decorateCSS("overlay")}></div>}
        {isCrumberVisible && (
          <Base.MaxContent className={this.decorateCSS("breadcrumb-wrapper")}>
            <div className={this.decorateCSS("crumber-content")}>
              <Base.VerticalContent className={this.decorateCSS("content-container")}>
                {isSubtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {isTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {isDescriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
              {isBreadcrumbVisible && (
                <div className={this.decorateCSS("breadcrumb-items")}>
                  {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                    const itemTitleExist = this.castToString(item.title);
                    const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!itemTitleExist && !itemIconExist) return null;
                    return (
                      <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                        <ComposerLink path={item.navigateTo}>
                          <div className={this.decorateCSS("breadcrumb-link")}>
                            {itemIconExist && (
                              <Base.Media
                                value={item.icon}
                                className={this.decorateCSS("crumberIcon")}
                              />
                            )}
                            {itemTitleExist && (
                              <Base.P className={this.decorateCSS("home-page")}>
                                {item.title}
                              </Base.P>
                            )}
                          </div>
                        </ComposerLink>
                      </div>
                    );
                  })}
                  {breadcrumbItems.length > 0 && (
                    <>
                      {separatorIconExist && (
                        <Base.Media
                          value={separatorIconValue}
                          className={this.decorateCSS("crumberIcon")}
                        />
                      )}
                      <div className={this.decorateCSS("current-page-container")}>
                        {currentPageIconExist && (
                          <Base.Media
                            value={currentPage!.icon}
                            className={this.decorateCSS("current-page-icon")}
                          />
                        )}
                        {currentPageTitle && (
                          <Base.P className={this.decorateCSS("about-page")}>
                            {currentPage?.title}
                          </Base.P>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </Base.MaxContent>
        )}
      </Base.Container>
    );
  }
}

export default Breadcrumb3;