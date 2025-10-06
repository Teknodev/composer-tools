import * as React from "react";
import styles from "./breadcrumb2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";


class Breadcrumb2 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Best Time to Celebrate",
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
      type: "boolean",
      key: "showGradient",
      displayer: "Show Gradient",
      value: true,
    });
    this.addProp({
      type: "icon",
      key: "crumberIcon",
      displayer: "Icon",
      value: "RxSlash",
    });
  }

  static getName(): string {
    return "Breadcrumb 2";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const homepage = this.castToString(this.getPropValue("homepage"));
    const currentpage = this.castToString(this.getPropValue("currentpage"));
    const navigateToFromCrumber = this.getPropValue("navigateTo");
    const navigateToUrl = navigateToFromCrumber || "";
    const showGradient = this.getPropValue("showGradient");
    const isCrumberVisible = homepage && currentpage;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          showGradient
            ? this.decorateCSS("gradientBackground")
            : this.decorateCSS("noGradient")
        }`}
      >
        {isCrumberVisible && (
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("crumber-content")}>
              <ComposerLink path={navigateToUrl}>
                <span className={this.decorateCSS("home-page")}>
                  {this.getPropValue("homepage")}
                </span>
              </ComposerLink>
              <Base.Icon
                name={this.getPropValue("crumberIcon")}
                propsIcon={{
                  className: this.decorateCSS("crumberIcon"),
                }}
              />
              <span className={this.decorateCSS("current-page")}>
                {this.getPropValue("currentpage")}
              </span>
            </div>
          </Base.MaxContent>
        )}
        {isTitleExist && (
          <Base.MaxContent>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          </Base.MaxContent>
        )}
      </Base.Container>
    );
  }
}

export default Breadcrumb2;
