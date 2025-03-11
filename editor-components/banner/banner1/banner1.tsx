import * as React from "react";
import styles from "./banner1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type bannerItem = {
  title: React.ReactNode;
  image: string;
};

type stripItem = {
  homepage: string;
  currentpage: string;
  navigateTo: string;
};

class Banner1 extends BaseBanner {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "banner",
      displayer: "Banner Items",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Home",
        },
        {
          type: "image",
          key: "image",
          displayer: "Background Image",
          value:
            "https://cafert.templatekit.co/wp-content/uploads/sites/10/2021/10/flat-lay-food.jpg",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "strip",
      displayer: "Strip Items",
      value: [
        {
          type: "string",
          key: "homepage",
          displayer: "Home Page",
          value: "Home Page",
        },
        {
          type: "page",
          key: "navigateTo",
          displayer: "Navigate to",
          value: "",
        },
        {
          type: "string",
          key: "currentpage",
          displayer: "Current Page",
          value: "Current Page",
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "showStrip",
      displayer: "Show Strip",
      value: true,
    });
    this.addProp({
      type: "icon",
      key: "stripIcon",
      displayer: "Icon",
      value: "RxDoubleArrowRight",
    });
  }

  static getName(): string {
    return "Banner 1";
  }

  render() {
    const banner = this.castToObject<bannerItem>("banner");
    const strip = this.castToObject<stripItem>("strip");
    const isTitleExist = this.castToString(banner.title);
    const homepage = this.castToString(strip.homepage);
    const currentpage = this.castToString(strip.currentpage);
    const navigateToUrl = strip.navigateTo || "";
    const showStrip = this.getPropValue("showStrip");
    const bgImage = banner.image?.trim();
    const shouldShowTitle = isTitleExist && (bgImage || showStrip);
    const alignmentValue = Base.getContentAlignment();

    return (
      <>
        <Base.Container
          className={this.decorateCSS("container")}
          style={{
            backgroundImage: `url(${banner.image})`,
          }}
        >
          {shouldShowTitle && (
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.SectionTitle
                className={`${this.decorateCSS("title-main")} ${
                  banner.image && this.decorateCSS("title-with-bg")
                } }`}
              >
                {banner.title}
              </Base.SectionTitle>
            </Base.MaxContent>
          )}
        </Base.Container>
        {showStrip && (
          <Base.Container className={this.decorateCSS("strip-container")}>
            <Base.MaxContent className={this.decorateCSS("strip-max-content")}>
              <div
                className={`${this.decorateCSS("strip-content")} ${
                  alignmentValue === "center"
                    ? this.decorateCSS("center")
                    : this.decorateCSS("left")
                }`}
              >
                <ComposerLink
                  path={navigateToUrl}
                  className={this.decorateCSS("home-link")}
                >
                  <span className={this.decorateCSS("home-page")}>
                    {homepage}
                  </span>
                </ComposerLink>
                <ComposerIcon
                  name={this.getPropValue("stripIcon")}
                  propsIcon={{
                    className: this.decorateCSS("stripIcon"),
                  }}
                />
                <span className={this.decorateCSS("current-page")}>
                  {currentpage}
                </span>
              </div>
            </Base.MaxContent>
          </Base.Container>
        )}
      </>
    );
  }
}

export default Banner1;
