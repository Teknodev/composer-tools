import * as React from "react";
import styles from "./breadcrumb4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type VectorItem = {
  image: TypeMediaInputValue;
  animation: boolean;
};

type BreadcrumbItem = {
  title: React.JSX.Element;
  icon: TypeMediaInputValue;
  navigateTo: string;
};

type CurrentPageItem = {
  title: React.JSX.Element;
  icon: TypeMediaInputValue;
};

class Breadcrumb4 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: { type: "image", url: "" },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
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
      value: "About Us",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "object",
      key: "vector1",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
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
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
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
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
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
        name: "MdKeyboardArrowRight",
      },
    });
  }

  static getName(): string {
    return "Breadcrumb 4";
  }

  render() {
    const vector1 = this.castToObject<VectorItem>("vector1");
    const vector2 = this.castToObject<VectorItem>("vector2");
    const vector3 = this.castToObject<VectorItem>("vector3");
    const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
    const backgroundImage = background?.image;
    const bgImageExist = backgroundImage && (backgroundImage.type === "icon" ? backgroundImage.name : backgroundImage.url);
    const overlay = background?.overlay;
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const showBreadcrumb = this.getPropValue("showBreadcrumb");
    const currentPage = this.castToObject<CurrentPageItem>("currentPage");
    const currentPageTitleExist = this.castToString(currentPage?.title);
    const currentPageIconExist = currentPage?.icon && (currentPage.icon.type === "icon" ? currentPage.icon.name : currentPage.icon.url);
    const separatorIconValue = this.getPropValue("separatorIcon");
    const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);

    const vector1ImageExist = vector1?.image && (vector1.image.type === "icon" ? vector1.image.name : vector1.image.url);
    const vector2ImageExist = vector2?.image && (vector2.image.type === "icon" ? vector2.image.name : vector2.image.url);
    const vector3ImageExist = vector3?.image && (vector3.image.type === "icon" ? vector3.image.name : vector3.image.url);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {vector1ImageExist && (
          <Base.Media
            value={vector1.image}
            className={`${this.decorateCSS("vector1")} ${vector1.animation ? this.decorateCSS("animated") : ""}`}
          />
        )}
        {vector2ImageExist && (
          <Base.Media
            value={vector2.image}
            className={`${this.decorateCSS("vector2")} ${vector2.animation ? this.decorateCSS("animated") : ""}`}
          />
        )}
        {vector3ImageExist && (
          <Base.Media
            value={vector3.image}
            className={`${this.decorateCSS("vector3")} ${vector3.animation ? this.decorateCSS("animated") : ""}`}
          />
        )}
        {bgImageExist && (
          <Base.Media
            value={backgroundImage}
            className={this.decorateCSS("background-image")}
          />
        )}
        {overlay && bgImageExist && <div className={this.decorateCSS("overlay")}></div>}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("items")}>
            {isSubtitleExist && (
              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${bgImageExist ? this.decorateCSS("image") : ""}`}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}
            {isTitleExist && (
              <Base.SectionTitle className={`${this.decorateCSS("title")} ${bgImageExist ? this.decorateCSS("image") : ""}`}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {isDescriptionExist && (
              <Base.SectionDescription className={`${this.decorateCSS("description")} ${bgImageExist ? this.decorateCSS("image") : ""}`}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
            {showBreadcrumb && (
              <div className={this.decorateCSS("pages")}>
                {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                  const itemTitleExist = this.castToString(item.title);
                  const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                  return (
                    <div key={index} className={this.decorateCSS("link")}>
                      {(itemTitleExist || itemIconExist) && (
                        <ComposerLink path={item.navigateTo}>
                          <div className={this.decorateCSS("breadcrumb-link")}>
                            {itemIconExist && (
                              <Base.Media
                                value={item.icon}
                                className={`${this.decorateCSS("crumberIcon")} ${!bgImageExist ? this.decorateCSS("icon-without-image") : ""}`}
                              />
                            )}
                            {itemTitleExist && (
                              <Base.P className={`${this.decorateCSS("text")} ${!bgImageExist ? this.decorateCSS("text-without-image") : ""}`}>
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
                  <>
                    {separatorIconExist && (
                      <Base.Media
                        value={separatorIconValue}
                        className={`${this.decorateCSS("crumberIcon")} ${!bgImageExist ? this.decorateCSS("icon-without-image") : ""}`}
                      />
                    )}
                    <div className={this.decorateCSS("current-page-container")}>
                      {currentPageIconExist && (
                        <Base.Media
                          value={currentPage.icon}
                          className={`${this.decorateCSS("current-page-icon")} ${!bgImageExist ? this.decorateCSS("icon-without-image") : ""}`}
                        />
                      )}
                      {currentPageTitleExist && (
                        <Base.P className={`${this.decorateCSS("current-page-text")} ${!bgImageExist ? this.decorateCSS("text-without-image") : ""}`}>
                          {currentPage.title}
                        </Base.P>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Breadcrumb4;