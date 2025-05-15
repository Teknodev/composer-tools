import * as React from "react";
import styles from "./banner6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

class banner6 extends BaseBanner {
  constructor(props: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "vector1",
      displayer: "Vector 1",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da787bfb049c002cc22f10?alt=media",
    });
    this.addProp({
      type: "image",
      key: "vector2",
      displayer: "Vector 2",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da788bfb049c002cc22f19?alt=media",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dab8f1fb049c002cc2523f?alt=media",
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
      type: "string",
      key: "home",
      displayer: "Home Page",
      value: "Home",
    });
    this.addProp({
      type: "page",
      key: "homePage",
      displayer: "Home Link",
      value: "",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "AiOutlineLine",
    });
    this.addProp({
      type: "string",
      key: "current",
      displayer: "Current Page",
      value: "About",
    });
  }

  static getName() : string {
    return "Banner 6";
  }

  render() {
    const vector1 = this.getPropValue("vector1");
    const vector2 = this.getPropValue("vector2");
    const backgroundImage = this.getPropValue("backgroundImage");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const home = this.getPropValue("home");
    const homePage = this.getPropValue("homePage");
    const icon = this.getPropValue("icon");
    const current = this.getPropValue("current");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const homeExist = this.castToString(home);
    const currentExist = this.castToString(current);

    return (
      <Base.Container className={this.decorateCSS("container")} style={{backgroundImage: `url(${backgroundImage})` }}>
        {vector1 && (
          <img src={vector1} className={this.decorateCSS("vector1")} />
        )}
        {vector2 && (
          <img src={vector2} className={this.decorateCSS("vector2")} />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("section")} ${ backgroundImage && this.decorateCSS("with-image")}`}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
            )}
            {descriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
            )}
            <div className={this.decorateCSS("breadcrumb")}>
              {homeExist && (
                <div className={this.decorateCSS("home-container")}>
                  <ComposerLink path={homePage}>
                    <Base.P className={this.decorateCSS("home")}>{home}</Base.P>
                  </ComposerLink>
                </div>
              )}
              {icon && (
                <ComposerIcon name={icon} propsIcon={{ className: this.decorateCSS("icon")}} />
              )}
              {currentExist && (
                <div className={this.decorateCSS("current-container")}>
                  <Base.P className={this.decorateCSS("current")}>{current}</Base.P>
                </div>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default banner6;