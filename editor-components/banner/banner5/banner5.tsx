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
      type: "page",
      key: "homePage",
      displayer: "Home Link",
      value: "",
    })
    this.addProp({
      type: "string",
      key: "currentPage",
      displayer: "Current Page",
      value: "Current Page",
    })
  }

  static getName() : string {
    return "Banner 5";
  }

  render() {
    const currentPage = this.getPropValue("currentPage");
    const aligment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("section")} ${this.decorateCSS(aligment)}`}>
            <ComposerLink path={this.getPropValue("homePage")} className={this.decorateCSS("link")}>
              <ComposerIcon name={this.getPropValue("homeIcon")} propsIcon={{ className: this.decorateCSS("homeIcon") }} />
            </ComposerLink>
            <span className={this.decorateCSS("currentPage")}>{currentPage}</span>
          </div>
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default Banner5