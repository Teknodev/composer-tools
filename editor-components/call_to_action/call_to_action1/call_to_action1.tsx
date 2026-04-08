import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

class CallToAction1Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoLogoFirefox",
      },
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Create Account", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 1";
  }
  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <Base.Media value={this.getPropValue("icon")} className={this.decorateCSS("icon")}></Base.Media>
            {this.castToString(this.getPropValue("subtitle")) && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>
            )}
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
            )}
            {buttons.length > 0 && (
              <div className={this.decorateCSS("button-container")}>
                {buttons.map((button: INPUTS.CastedButton, index: number) => (
                  this.castToString(button.text) && (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )
                ))}
              </div>
            )}

          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction1Page;
