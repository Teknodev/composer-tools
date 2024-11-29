import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class CallToAction1Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoLogoFirefox",
    });
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
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <ComposerIcon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }}></ComposerIcon>
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
            )}
            {this.castToString(this.getPropValue("buttonText")) && (
              <div className={this.decorateCSS("button-container")}>
                <ComposerLink path={this.getPropValue("link")}>
                  <Base.Button className={this.decorateCSS("button")}>
                    {this.getPropValue("buttonText")}
                  </Base.Button>
                </ComposerLink>
              </div>
            )}

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction1Page;
