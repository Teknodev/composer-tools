import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  text: JSX.Element;
  link: string;
};
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
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Content 1";
  }
  render() {
    const buttons = this.castToObject<Button[]>("buttons");
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
          {buttons?.length > 0 && (
            <div className={this.decorateCSS("button-container")}>
              {buttons.map((button: Button, index: number) => {
                const buttonTextExist = this.castToString(button.text);
                return (
                  buttonTextExist && (
                    <Base.Button key={index} className={this.decorateCSS("button")}>
                      <ComposerLink path={button.link}>
                        {button.text}
                      </ComposerLink>
                    </Base.Button>
                  )
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content1;
