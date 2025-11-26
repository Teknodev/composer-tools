import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class IntroSection9Page extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "IoLogoFirefox",
      },
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Mindblown unique digital ideas.",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
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
          "Get Started",
          "",
          "",
          null,
          "Primary"
        ),
        INPUTS.BUTTON(
          "button",
          "Button",
          "Watch Video",
          "",
          "FaPlay",
          null,
          "Secondary"
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

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasAnyButton = Array.isArray(buttons) && buttons.some((b: any) => this.castToString(b?.text) || b?.icon);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {hasTitle && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
            )}

            {(hasSubtitle || hasAnyButton) && (
              <div className={this.decorateCSS("actions-wrapper")}>
                {hasSubtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                )}

                {hasAnyButton && (
                  <div className={this.decorateCSS("action-buttons")}>
                    {buttons.map(
                      (item: INPUTS.CastedButton, index: number) => {
                        const btnTextExist = this.castToString(item.text);
                        const buttonIcon = item.icon;
                        if (!btnTextExist && !buttonIcon) {
                          return null;
                        }
                        const buttonUrl = item.url || "#";
                        return (
                          <div key={`is9-btn-${index}`} className={this.decorateCSS("button-wrapper")}>
                            <ComposerLink path={buttonUrl}>
                              <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                {buttonIcon && (
                                  <div className={this.decorateCSS("button-icon-wrapper")}>
                                    <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />
                                  </div>
                                )}
                                {btnTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                              </Base.Button>
                            </ComposerLink>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection9Page;
