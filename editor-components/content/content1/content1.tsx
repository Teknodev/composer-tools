import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
class Content1 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Are you ready to turn more ad clicks into conversions?",
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
        INPUTS.BUTTON("button", "Button", "Button Text", "", "Primary")
      ],
    });
  }
  getName(): string {
    return "Content 1";
  }
  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
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
          {(buttons.length > 0) && (
            buttons.map((item: INPUTS.CastedButton, index: number) => {
              return (
                <div className={this.decorateCSS("button-container")}>
                  {this.castToString(item.text) && (
                    <ComposerLink path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        {item.text}
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

export default Content1;
