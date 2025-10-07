import * as React from "react";
import styles from "./breadcrumb6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type BreadcrumbItem = {
    title: string;
    navigateTo: string;
};
class Breadcrumb6 extends BaseBreadcrumb {
  constructor(props: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "vector1",
      displayer: "Vector 1",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da787bfb049c002cc22f10?alt=media" },
    });
    this.addProp({
      type: "media",
      key: "vector2",
      displayer: "Vector 2",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da788bfb049c002cc22f19?alt=media" },
    });
    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Image",
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dab8f1fb049c002cc2523f?alt=media" },
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
      value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor incididunt ut labore et dolore.",
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
        name: "AiOutlineLine",
      },
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  static getName() : string {
    return "Breadcrumb 6";
  }

  render() {
    const vector1 = this.getPropValue("vector1");
    const vector2 = this.getPropValue("vector2");
    const backgroundImage = this.getPropValue("backgroundImage");
    const overlay = this.getPropValue("overlay");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const showBreadcrumb = this.getPropValue("showBreadcrumb");
    const currentPage = this.castToObject("currentPage");
    const currentPageTitle = currentPage?.title || "";
    const currentPageIcon = currentPage?.icon.name || "";

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {backgroundImage && backgroundImage.url && (
          <Base.Media
            value={backgroundImage}
            className={this.decorateCSS("background-image")}
          />
        )}
        {overlay && backgroundImage && backgroundImage.url && <div className={this.decorateCSS("overlay")}></div>}
        {vector1 && vector1.url && (
          <Base.Media
            value={vector1}
            className={this.decorateCSS("vector1")}
          />
        )}
        {vector2 && vector2.url && (
          <Base.Media
            value={vector2}
            className={this.decorateCSS("vector2")}
          />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("section")} ${ backgroundImage && backgroundImage.url && this.decorateCSS("with-image")}`}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
            )}
            {descriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
            )}
            {showBreadcrumb && (
              <div className={this.decorateCSS("breadcrumb")}>
                {breadcrumbItems.map((item: BreadcrumbItem, index: number) => (
                  <React.Fragment key={index}>
                    <div className={this.decorateCSS("home-container")}>
                      <ComposerLink path={item.navigateTo}>
                        <Base.P className={this.decorateCSS("home")}>{item.title}</Base.P>
                      </ComposerLink>
                    </div>
                    {index < breadcrumbItems.length - 1 && (
                      <Base.Media 
                        value={this.getPropValue("breadcrumbIcon")} 
                        className={this.decorateCSS("icon")} 
                      />
                    )}
                  </React.Fragment>
                ))}
                {breadcrumbItems.length > 0 && (
                  <>
                    <Base.Media 
                      value={this.getPropValue("breadcrumbIcon")} 
                      className={this.decorateCSS("icon")} 
                    />
                    <div className={this.decorateCSS("current-container")}>
                      <div className={this.decorateCSS("current-page-container")}>
                        {currentPageIcon && (
                          <Base.Media 
                            value={currentPageIcon} 
                            className={this.decorateCSS("current-page-icon")} 
                          />
                        )}
                        <Base.P className={this.decorateCSS("current")}>{currentPageTitle}</Base.P>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default Breadcrumb6;