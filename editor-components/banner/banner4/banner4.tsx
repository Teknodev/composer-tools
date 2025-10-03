import * as React from "react";
import styles from "./banner4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    navigateTo: string;
};

class Banner4 extends BaseBanner {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "vector1",
      displayer: "Object 1",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "icon"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e67fb049c002cc23bf1?alt=media" },
        },
        {
          type: "boolean",
          key: "animation",
          displayer: "Animation",
          value: true,
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "vector2",
      displayer: "Object 2",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "icon"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e7efb049c002cc23bf9?alt=media" },
        },
        {
          type: "boolean",
          key: "animation",
          displayer: "Animation",
          value: true,
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "vector3",
      displayer: "Object 3",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "icon"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e90fb049c002cc23c02?alt=media" },
        },
        {
          type: "boolean",
          key: "animation",
          displayer: "Animation",
          value: true,
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da9c05fb049c002cc245da?alt=media",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About Us",
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
      type: "icon",
      key: "breadcrumbIcon",
      displayer: "Breadcrumb Icon",
      value: "MdKeyboardArrowRight",
    });
  } 

  static getName(): string {
    return "Banner 4";
  }

  render() {
    const vector1 = this.castToObject<any>("vector1");
    const vector2 = this.castToObject<any>("vector2");
    const vector3 = this.castToObject<any>("vector3");
    const backgroundImage = this.getPropValue("backgroundImage");
    const title = this.getPropValue("title");
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const showBreadcrumb = this.getPropValue("showBreadcrumb");
    const currentPage = this.castToObject<any>("currentPage");
    const currentPageTitle = currentPage?.title || "";
    const currentPageIcon = currentPage?.icon || "";

    const titleExist = this.castToString(title);

    return(
      <div className={this.decorateCSS("container-main")}>
        {vector1 && vector1.image && (
          <Base.Media 
            value={vector1.image}
            className={`${this.decorateCSS("vector1")} ${vector1.animation ? this.decorateCSS("animated") : ""}`} 
          />
        )}
        {vector2 && vector2.image && (
          <Base.Media 
            value={vector2.image} 
            className={`${this.decorateCSS("vector2")} ${vector2.animation ? this.decorateCSS("animated") : ""}`} 
          />
        )}
        {vector3 && vector3.image && (
          <Base.Media 
            value={vector3.image} 
            className={`${this.decorateCSS("vector3")} ${vector3.animation ? this.decorateCSS("animated") : ""}`} 
          />
        )}
        <div className={this.decorateCSS("section")} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Base.Container className={this.decorateCSS("container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={this.decorateCSS("items")}>
                {titleExist && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImage && this.decorateCSS("image")}`}>{title}</Base.SectionTitle>
                )}
                {showBreadcrumb && (
                  <div className={this.decorateCSS("pages")}>
                    {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                      <React.Fragment key={index}>
                        <div className={this.decorateCSS("link")}>
                          <ComposerLink path={item.navigateTo}>
                            <span className={`${this.decorateCSS("text")} ${!backgroundImage && this.decorateCSS("text-without-image")}`}>
                              {item.title}
                            </span>
                          </ComposerLink>
                        </div>
                        {index < breadcrumbItems.length - 1 && (
                          <Base.Icon
                            name={this.getPropValue("breadcrumbIcon")}
                            propsIcon={{
                              className: `${this.decorateCSS("crumberIcon")} ${!backgroundImage && this.decorateCSS("icon-without-image")}`,
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
                            className: `${this.decorateCSS("crumberIcon")} ${!backgroundImage && this.decorateCSS("icon-without-image")}`,
                          }}
                        />
                        <div className={this.decorateCSS("current-page-container")}>
                          {currentPageIcon && (
                            <Base.Icon
                              name={currentPageIcon}
                              propsIcon={{
                                className: `${this.decorateCSS("current-page-icon")} ${!backgroundImage && this.decorateCSS("icon-without-image")}`,
                              }}
                            />
                          )}
                          <span className={`${this.decorateCSS("current-page-text")} ${!backgroundImage && this.decorateCSS("text-without-image")}`}>
                            {currentPageTitle}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            </Base.MaxContent>
          </Base.Container>
        </div>
      </div>
    )
  }
}

export default Banner4;