import * as React from "react";
import styles from "./breadcrumb6.module.scss";
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

class Breadcrumb6 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "vector1",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da787bfb049c002cc22f10?alt=media" },
    });
    this.addProp({
      type: "media",
      key: "vector2",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da788bfb049c002cc22f19?alt=media" },
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
        name: "AiOutlineLine",
      },
    });
  }

  static getName(): string {
    return "Breadcrumb 6";
  }

  render() {
    const vector1 = this.getPropValue("vector1");
    const vector2 = this.getPropValue("vector2");
    const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
    const backgroundImage = background?.image;
    const overlay = background?.overlay;
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const showBreadcrumb = this.getPropValue("showBreadcrumb");
    const currentPage = this.castToObject<CurrentPageItem>("currentPage");
    const currentPageTitleExist = this.castToString(currentPage?.title);
    const currentPageIconExist = currentPage?.icon && (currentPage.icon.type === "icon" ? currentPage.icon.name : currentPage.icon.url);
    const separatorIconValue = this.getPropValue("separatorIcon");
    const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);
    const bgImageExist = backgroundImage && (backgroundImage.type === "icon" ? backgroundImage.name : backgroundImage.url);
    const vector1Exist = vector1 && (vector1.type === "icon" ? vector1.name : vector1.url);
    const vector2Exist = vector2 && (vector2.type === "icon" ? vector2.name : vector2.url);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {bgImageExist && (
          <Base.Media
            value={backgroundImage}
            className={this.decorateCSS("background-image")}
          />
        )}
        {overlay && bgImageExist && <div className={this.decorateCSS("overlay")}></div>}
        {vector1Exist && (
          <Base.Media
            value={vector1}
            className={this.decorateCSS("vector1")}
          />
        )}
        {vector2Exist && (
          <Base.Media
            value={vector2}
            className={this.decorateCSS("vector2")}
          />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("section")} ${bgImageExist ? this.decorateCSS("with-image") : ""}`}>
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
            {showBreadcrumb && (
              <div className={this.decorateCSS("breadcrumb")}>
                {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                  const itemTitleExist = this.castToString(item.title);
                  const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                  return (
                    <React.Fragment key={index}>
                      <div className={this.decorateCSS("home-container")}>
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
                                <Base.P className={this.decorateCSS("home")}>
                                  {item.title}
                                </Base.P>
                              )}
                            </div>
                          </ComposerLink>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
                {breadcrumbItems.length > 0 && (
                  <>
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
                        <Base.P className={this.decorateCSS("current")}>
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

export default Breadcrumb6;