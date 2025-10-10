import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action14.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction14 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Grow Your Business",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Optimize Your Online Advertising",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "This statement is a call to action aimed at businesses or individuals looking to improve the effectiveness of their online advertising campaigns. ",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Button Text", "", null, null,"Primary")
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }
  static getName(): string {
    return "Call To Action 14";
  }
  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent 
          className={this.decorateCSS("max-content")}
          data-animation={this.getPropValue("hoverAnimation").join(" ")}
        >
          <Base.VerticalContent className={this.decorateCSS("header")}>
            {this.castToString(this.getPropValue("subtitle")) && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
          </Base.VerticalContent>
          {(buttons.length > 0) && (
            buttons.map((item: INPUTS.CastedButton, index: number) => {
              return (
                <div className={this.decorateCSS("button-container")}>
                  {this.castToString(item.text) && (
                    <ComposerLink path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )}
                </div>
              )
            })
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction14;
