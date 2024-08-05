import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action10.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class CallToAction10Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Ready to give your brain a boost?",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "BsHandIndexThumb"
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Fast and easy setup.14-day free trial.No credit card required.",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Try Heyday free for 14 days",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });

  }

  getName(): string {
    return "Call To Action 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action10-page")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")} <ComposerIcon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} /></h1>
            <ComposerLink path={this.getPropValue("link")}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
            <h3 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h3>
          </div>
        </div>
      </div>

    )
  }
}

export default CallToAction10Page;