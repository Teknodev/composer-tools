import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction13Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "highlightEnabled",
      displayer: "Enable Highlight Background",
      value: true,
    });


    this.addProp({
      type: "string",
      key: "subtitle",
      value: "Don't be weird.",
      displayer: "Subtitle",
    });

    this.addProp({
      type: "number",
      key: "highlightWordCount",
      value: 2,
      displayer: "Number of Words to Highlight",
    });

    this.addProp({
      type: "string",
      key: "title",
      value: "Would you like more information or do you have a question?",
      displayer: "Title",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "tertiary",
          "Button",
          "CONTACT US",
          "",
          null,
          null,
          "Tertiary"
        ),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 13";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons");
    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const highlightWordCount = this.getPropValue("highlightWordCount") || 2;
    const highlightEnabled = this.getPropValue("highlightEnabled");

    const renderSubtitle = () => {
      if (!subtitle) return null;
      const words = subtitle.split(" ");
      const wordCount = Number(highlightWordCount);
      const highlightedWords = words.slice(0, wordCount);
      const normalWords = words.slice(wordCount);

      return (
        <>
          {highlightedWords.length > 0 && highlightEnabled ? (
            <span className={this.decorateCSS("highlight")}>
              {highlightedWords.join(" ")}
            </span>
          ) : (
            highlightedWords.join(" ")
          )}
          {normalWords.length > 0 && " "}
          {normalWords.join(" ")}
        </>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitle || buttons.length > 0) && (
            <div
              className={`${this.decorateCSS("header")} `}
            >
              {(titleExist || subtitle) && (
                <Base.VerticalContent className={this.decorateCSS("titles")}>
                  {subtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
                      {renderSubtitle()}
                    </Base.SectionSubTitle>
                  )}
                  {titleExist && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {titleExist}
                    </Base.SectionTitle>
                  )}
                </Base.VerticalContent>
              )}
              {buttons?.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: Button, index: number) => (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                        buttonType={button.type}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {button.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction13Page;
