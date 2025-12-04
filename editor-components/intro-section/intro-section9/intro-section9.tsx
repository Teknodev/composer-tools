import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class IntroSection9 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

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
      value:
        '<p dir="ltr"><b><strong class="editor-text-bold" style="white-space: pre-wrap;">Mindblown</strong></b><span style="white-space: pre-wrap;"> unique</span></p><p dir="ltr"><span style="white-space: pre-wrap;"> digital ideas.</span></p>',
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
        INPUTS.BUTTON("button", "Button", "Get Started", "", "", null, "Black"),
        INPUTS.BUTTON(
          "button",
          "Button",
          "Watch Video",
          "",
          "FaPlay",
          null,
          "White"
        ),
      ],
    });
  }

  static getName(): string {
    return "Intro Section 9";
  }
  render() {
    const subtitle = this.getPropValue("subtitle") || "";
    const title = this.getPropValue("title") || "";
    const description = this.getPropValue("description") || "";
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasAnyButton =
      Array.isArray(buttons) &&
      buttons.some((b: any) => this.castToString(b?.text) || b?.icon);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("card")}>
            <Base.VerticalContent className={this.decorateCSS("content")}>
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
                      <ComposerLink key={`is9-btn-${index}`} path={buttonUrl}>
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
                            <Base.P
                              className={this.decorateCSS("button-text")}
                            >
                              {item.text}
                            </Base.P>
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection9;
