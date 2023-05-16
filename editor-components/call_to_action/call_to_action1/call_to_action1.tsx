import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action1.module.scss";

class CallToAction1Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Try It For Free",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Create a free demo account to digitize your business and attract more customers. In our demo account, you can test our digital marketing tools and learn how you can use them to grow your business.",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Create Account",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
    });
  }

  getName(): string {
    return "Call To Action 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action1-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <ComposerLink path={this.getPropValue("link")}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction1Page;
