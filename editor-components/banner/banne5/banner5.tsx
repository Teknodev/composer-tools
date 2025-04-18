import * as React from "react";
import styles from "./banner5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Banner5 extends BaseBanner {
  constructor(props: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "homeIcon",
      displayer: "Home Icon",
      value: "FaHome",
    })
    this.addProp({
      type: "string",
      key: "homeTitle",
      displayer: "Home Title",
      value: "",
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
      value: "RxDividerVertical",
    });
    this.addProp({
      type: "icon",
      key: "currentIcon",
      displayer: "Current Icon",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "currentTitle",
      displayer: "Current Page",
      value: "Current Page",
    });
    this.addProp({
      type: "page",
      key: "currentPage",
      displayer: "Current Link",
      value: "",
    });
  }

  static getName() : string {
    return "Banner 5";
  }

  render() {
    const homeTitle = this.getPropValue("homeTitle");
    const currentPage = this.getPropValue("currentTitle");
    const icon = this.getPropValue("icon");

    const titleExist = this.castToString(homeTitle);
    const currentExist = this.castToString(currentPage);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <div className={this.decorateCSS("link")}>
              <ComposerLink path={this.getPropValue("homePage")}>
                <ComposerIcon name={this.getPropValue("homeIcon")} propsIcon={{ className: this.decorateCSS("pageIcon") }} />
              </ComposerLink>
              {titleExist && (
                <span className={this.decorateCSS("page-title")}>{homeTitle}</span>
              )}
            </div>
            {icon && (
              <div className={this.decorateCSS("item")}>
                <ComposerIcon name={icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
              </div>
            )}
            <div className={this.decorateCSS("link")}>
              <ComposerLink path={this.getPropValue("currentPage")}>
                <ComposerIcon name={this.getPropValue("currentIcon")} propsIcon={{ className: this.decorateCSS("pageIcon") }} />
              </ComposerLink>
              {currentExist && (
                <span className={this.decorateCSS("page-title")}>{currentPage}</span>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default Banner5
