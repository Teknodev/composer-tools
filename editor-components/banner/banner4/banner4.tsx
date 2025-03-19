import * as React from "react";
import styles from "./banner4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

class Banner4 extends BaseBanner {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "vector1",
      displayer: "Vector 1",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e67fb049c002cc23bf1?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "vector1animation",
      displayer: "Vector 1 Animation",
      value: true,
    });
    this.addProp({
      type: "image",
      key: "vector2",
      displayer: "Vector 2",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e7efb049c002cc23bf9?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "vector2animation",
      displayer: "Vector 2 Animation",
      value: true,
    });
    this.addProp({
      type: "image",
      key: "vector3",
      displayer: "Vector 3",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da8e90fb049c002cc23c02?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "vector3animation",
      displayer: "Vector 3 Animation",
      value: true,
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
      type: "string",
      key: "homepage",
      displayer: "Home Page",
      value: "Home Page",
    });
    this.addProp({
      type: "page",
      key: "navigateTo",
      displayer: "Navigate To",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "currentpage",
      displayer: "Current Page",
      value: "Current Page",
    });
    this.addProp({
      type: "icon",
      key: "crumberIcon",
      displayer: "Icon",
      value: "MdKeyboardArrowRight",
    });
  } 

  static getName(): string {
    return "Banner 4";
  }

  render() {
    const vector1animation = this.getPropValue("vector1animation");
    const vector2animation = this.getPropValue("vector2animation");
    const vector3animation = this.getPropValue("vector3animation");

    const vector1 = this.getPropValue("vector1");
    const vector2 = this.getPropValue("vector2");
    const vector3 = this.getPropValue("vector3");
    const backgroundImage = this.getPropValue("backgroundImage");
    const title = this.getPropValue("title");
    const homepage = this.getPropValue("homepage");
    const page = this.getPropValue("navigateTo");
    const icon = this.getPropValue("crumberIcon");
    const currentpage = this.getPropValue("currentpage");

    const titleExist = this.castToString(title);
    const homepageExist = this.castToString(homepage);
    const currentpageExist = this.castToString(currentpage);

    return(
      <div className={this.decorateCSS("container-main")}>
        {vector1 && (
          <img src={vector1} className={`${this.decorateCSS("vector1")} ${vector1animation ? this.decorateCSS("animated") : ""}`} />
        )}
        {vector2 && (
          <img src={vector2} className={`${this.decorateCSS("vector2")} ${vector2animation ? this.decorateCSS("animated") : ""}`} />
        )}
        {vector3 && (
          <img src={vector3} className={`${this.decorateCSS("vector3")} ${vector3animation ? this.decorateCSS("animated") : ""}`} />
        )}
        <div className={this.decorateCSS("section")} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Base.Container className={this.decorateCSS("container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={this.decorateCSS("items")}>
                {titleExist && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImage && this.decorateCSS("image")}`}>{title}</Base.SectionTitle>
                )}
                <div className={this.decorateCSS("pages")}>
                  {homepageExist && (
                    <ComposerLink path={page} className={this.decorateCSS("link")}>
                      <span className={this.decorateCSS("homepage")}>{homepage}</span>
                    </ComposerLink>
                  )}
                  {icon && (
                    <ComposerIcon
                      name={icon}
                      propsIcon={{
                        className: this.decorateCSS("crumberIcon"),
                      }}
                    />
                  )}
                  {currentpageExist && (
                    <span className={this.decorateCSS("currentPage")}>{currentpage}</span>
                  )}
                </div>
              </Base.VerticalContent>
            </Base.MaxContent>
          </Base.Container>
        </div>
      </div>
    )
  }
}

export default Banner4;