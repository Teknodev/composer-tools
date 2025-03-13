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
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://images.unsplash.com/photo-1614852206758-0caebadbba66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      value: "RxSlash",
    });
  } 

  static getName(): string {
    return "Banner 4";
  }

  render() {
    const backgroundImage = this.getPropValue("backgroundImage");
    const title = this.getPropValue("title");
    const homepage = this.getPropValue("homepage");
    const page = this.getPropValue("navigateTo");
    const currentpage = this.getPropValue("currentpage");

    return(
      <div className={this.decorateCSS("container-main")}>
        <div className={this.decorateCSS("section")} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Base.Container className={this.decorateCSS("container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <Base.VerticalContent className={this.decorateCSS("items")}>
                {title && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImage && this.decorateCSS("image")}`}>{title}</Base.SectionTitle>
                )}
                <div className={this.decorateCSS("pages")}>
                  <ComposerLink path={page} className={this.decorateCSS("link")}>
                    <span className={this.decorateCSS("homepage")}>{homepage}</span>
                  </ComposerLink>
                  <ComposerIcon
                    name={this.getPropValue("crumberIcon")}
                    propsIcon={{
                      className: this.decorateCSS("crumberIcon"),
                    }}
                  />
                  <span className={this.decorateCSS("currentPage")}>{currentpage}</span>
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