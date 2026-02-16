import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action26.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction26 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "cardEnabled",
      displayer: "Card",
      value: true,
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
      value: "New Edge of the Theme Experience",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Explore Roles", "", null, null, "Secondary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 26";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons");
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const cardEnabled = this.getPropValue("cardEnabled");

    const content = (
      <>
        {(subtitleExist || titleExist || descriptionExist) && (
          <Base.VerticalContent className={this.decorateCSS("header")}>
            {subtitleExist && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {descriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
          </Base.VerticalContent>
        )}
        {buttons.length > 0 && (
          <div className={this.decorateCSS("buttons")}>
            {buttons.map((button: Button, index: number) => (
              <ComposerLink path={button.url} key={index}>
                {this.castToString(button.text) && (
                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                  </Base.Button>
                )}
              </ComposerLink>
            ))}
          </div>
        )}
      </>
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {cardEnabled ? (
            <div className={this.decorateCSS("card")}>{content}</div>
          ) : (
            <div className={this.decorateCSS("content-wrapper")}>{content}</div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction26;
