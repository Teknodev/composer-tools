import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action1.module.scss";
import { Base } from "../../../composer-base-components/base/base";

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
      displayer: "Button Link",
      value: "",
    });
  }

  getName(): string {
    return "Call To Action 1";
  }
  render() {
    const alignmentValue = Base.getContentAlignment();
    console.log(alignmentValue)

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.H1 className={alignmentValue == "left" ? this.decorateCSS("title-left") : this.decorateCSS("title-center")}>{this.getPropValue("title")}</Base.H1>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.H2 className={alignmentValue == "left" ? this.decorateCSS("description-left") : this.decorateCSS("description-center")}>{this.getPropValue("description")}</Base.H2>
            )}
            {this.castToString(this.getPropValue("buttonText")) && (
              <div className={alignmentValue == "left" ? this.decorateCSS("button-container-left") : this.decorateCSS("button-container-center")}>
                <ComposerLink path={this.getPropValue("link")}>
                  <div className={this.decorateCSS("button")}>
                    {this.getPropValue("buttonText")}
                  </div>
                </ComposerLink>
              </div>
            )}

          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction1Page;
