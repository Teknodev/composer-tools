import * as React from "react";
import styles from "./breadcrumb4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    icon: string;
    navigateTo: string;
};

class Breadcrumb4 extends BaseBreadcrumb {
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
      type: "media",
      key: "backgroundImage",
      displayer: "Background Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da9c05fb049c002cc245da?alt=media" },
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About Us",
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
      type: "media",
      key: "breadcrumbIcon",
      displayer: "Breadcrumb Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "MdKeyboardArrowRight",
      },
    });
  } 

  static getName(): string {
    return "Breadcrumb 4";
  }

  render() {
    const vector1 = this.castToObject<any>("vector1");
    const vector2 = this.castToObject<any>("vector2");
    const vector3 = this.castToObject<any>("vector3");
    const backgroundImage = this.getPropValue("backgroundImage");
    const overlay = this.getPropValue("overlay");
    const title = this.getPropValue("title");
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const showBreadcrumb = this.getPropValue("showBreadcrumb");
    const currentPage = this.castToObject<any>("currentPage");
    const currentPageTitle = currentPage?.title || "";
    const currentPageIcon = currentPage?.icon || "";
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");

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
        <div className={this.decorateCSS("section")}>
          {backgroundImage && (
            <Base.Media
              value={backgroundImage}
              className={this.decorateCSS("background-image")}
            />
          )}
          {overlay && backgroundImage && <div className={this.decorateCSS("overlay")}></div>}
          <Base.Container className={this.decorateCSS("container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={this.decorateCSS("items")}>
                {titleExist && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImage && this.decorateCSS("image")}`}>{title}</Base.SectionTitle>
                )}
                {isDescriptionExist && (
                  <Base.SectionDescription className={`${this.decorateCSS("description")} ${backgroundImage && this.decorateCSS("image")}`}>
                    {description}
                  </Base.SectionDescription>
                )}
                {showBreadcrumb && (
                  <div className={this.decorateCSS("pages")}>
                    {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                      <React.Fragment key={index}>
                        <div className={this.decorateCSS("link")}>
                          {(this.castToString(item.title) || item.icon.name) && (
                            <ComposerLink path={item.navigateTo}>
                              <div className={this.decorateCSS("breadcrumb-link")}>
                                {item.icon.name && (
                                  <Base.Media
                                    value={item.icon}
                                    className={`${this.decorateCSS("crumberIcon")} ${!backgroundImage && this.decorateCSS("icon-without-image")}`}
                                  />
                                )}
                                {this.castToString(item.title) && <Base.P className={`${this.decorateCSS("text")} ${!backgroundImage && this.decorateCSS("text-without-image")}`}>
                                  {item.title}
                                </Base.P>}
                              </div>
                            </ComposerLink>
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                    {breadcrumbItems.length > 0 && (
                      <>
                        <Base.Media
                          value={this.getPropValue("breadcrumbIcon")}
                          className={`${this.decorateCSS("crumberIcon")} ${!backgroundImage && this.decorateCSS("icon-without-image")}`}
                        />
                        <div className={this.decorateCSS("current-page-container")}>
                          {currentPageIcon.name && (
                            <Base.Media
                              value={currentPageIcon}
                              className={`${this.decorateCSS("current-page-icon")} ${!backgroundImage && this.decorateCSS("icon-without-image")}`}
                            />
                          )}
                          {this.castToString(currentPageTitle) && <Base.P className={`${this.decorateCSS("current-page-text")} ${!backgroundImage && this.decorateCSS("text-without-image")}`}>
                            {currentPageTitle}
                          </Base.P>}
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

export default Breadcrumb4;