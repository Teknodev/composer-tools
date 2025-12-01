import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class IntroSection11 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Unbeatable services",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Everything for your customers",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "",
          "",
          "FaArrowDown",
          null,
          "Primary"
        ),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "spacer",
      displayer: "Spacer",
      value: true,
    });
  }

  static getName(): string {
    return "Intro Section 11";
  }
  render() {
    const title = this.getPropValue("title") || "";
    const subtitle = this.getPropValue("subtitle") || "";
    const description = this.getPropValue("description") || "";
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const hasTitle = this.castToString(title);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
    const hasAnyButton =
      Array.isArray(buttons) &&
      buttons.some((b: any) => this.castToString(b?.text) || b?.icon);
    const showSpacer = this.getPropValue("spacer");
    const hasVerticalContent = hasTitle || hasSubtitle || hasDescription;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {hasVerticalContent && (
              <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {hasTitle && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {hasDescription && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}

            {hasAnyButton && (
              <div className={this.decorateCSS("action-buttons")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                  const btnTextExist = this.castToString(item.text);
                  const buttonIcon = item.icon;
                  if (!btnTextExist && !buttonIcon) {
                    return null;
                  }
                  const buttonUrl = item.url || "#";
                  return (
                    <ComposerLink path={buttonUrl}>
                      <Base.Button
                        buttonType={item.type}
                        className={this.decorateCSS("button")}
                      >
                        {buttonIcon && (
                          <Base.Media
                            value={buttonIcon}
                            className={this.decorateCSS("button-icon")}
                          />
                        )}
                        {btnTextExist && (
                          <Base.P className={this.decorateCSS("button-text")}>
                            {item.text}
                          </Base.P>
                        )}
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}

            {showSpacer && <div className={this.decorateCSS("spacer")}></div>}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection11;
