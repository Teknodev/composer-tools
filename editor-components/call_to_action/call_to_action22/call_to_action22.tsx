import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action22.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction22 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "jkjhf",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start Making Websites",
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
        INPUTS.BUTTON("button", "Button", "Purchase Now", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 22";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(
      this.getPropValue("description")
    );
    const buttons = this.castToObject<Button[]>("buttons") || [];
    const visibleButtons = buttons.filter((btn) =>
      this.castToString(btn.text)
    );
    const hasContent = subtitleExist || titleExist || descriptionExist;
    const subtitleType = Base.getSectionSubTitleType();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>
            {(hasContent || visibleButtons.length > 0) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && (
                  <Base.SectionSubTitle
                    className={`${this.decorateCSS("subtitle")} ${
                      subtitleType === "line"
                        ? this.decorateCSS("subtitle-line")
                        : ""
                    }`}
                  >
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {visibleButtons.map((item: Button, index: number) => (
                  <ComposerLink key={`button-${index}`} path={item.url}>
                    <Base.Button
                      buttonType={item.type}
                      className={this.decorateCSS("button")}
                    >
                      <Base.P className={this.decorateCSS("button-text")}>
                        {item.text}
                      </Base.P>
                    </Base.Button>
                  </ComposerLink>
                ))}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction22;