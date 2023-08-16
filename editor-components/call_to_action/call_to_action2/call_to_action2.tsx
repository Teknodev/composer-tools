import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action2.module.scss";

class CallToAction2Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Get Your Free Trial Today",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value: "Try our product risk-free for 30 days and see how it can transform your business. Our product has been proven to increase sales, boost customer engagement, and streamline operations.",
      displayer: "Description",
    });
    this.addProp({
      type: "string",
      key: "firstButtonText",
      value: " Start Your Free Trial",
      displayer: "First Button Text",
    });
    this.addProp({
      type: "page",
      key: "firstButtonLink",
      displayer: "First Button Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "secondButtonText",
      value: "Learn More",
      displayer: "Second Button Text",
    });
    this.addProp({
      type: "page",
      key: "secondButtonLink",
      displayer: "Second Button Link",
      value: "",
    });
  }

  getName(): string {
    return "Call To Action 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action2-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h2>{this.getPropValue("description")}</h2>
          </div>
          <div className={this.decorateCSS("call-to-action2-page")}>
            <ComposerLink path={this.getPropValue("firstButtonLink")}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("firstButtonText")}
              </span>
            </ComposerLink>
            <ComposerLink path={this.getPropValue("secondButtonLink")}>
              <span className={this.decorateCSS("button2")}>
                {this.getPropValue("secondButtonText")}
              </span>
            </ComposerLink>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction2Page;
