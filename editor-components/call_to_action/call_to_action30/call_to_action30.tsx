import * as React from "react";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action30.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction30 extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "card",
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
      value: "Ready to start your super free trial today?",
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
        INPUTS.BUTTON("button", "Button", "Get it for free", "", null, null, "Black"),
      ],
    });

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "value",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "icon", "video"],
          },
          value: {
            type: "icon",
            name: "FaRocket",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
  }

  static getName(): string {
    return "Call To Action 30";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons") || [];
    const visibleButtons = buttons.filter((btn) => this.castToString(btn.text));
    const hasContent = subtitleExist || titleExist || descriptionExist;
    const isCardEnabled = this.getPropValue("card");
    const mediaSection = this.castToObject<{ value?: TypeMediaInputValue; overlay?: boolean } & Partial<TypeMediaInputValue>>("media");
    const media = (mediaSection?.value ?? (mediaSection?.type ? (mediaSection as TypeMediaInputValue) : undefined)) as TypeMediaInputValue | undefined;
    const overlay = !!(mediaSection?.overlay ?? this.getPropValue("mediaOverlay"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("card")} ${
              isCardEnabled ? this.decorateCSS("card-enabled") : ""
            }`}
          >
            {(hasContent || visibleButtons.length > 0) && (
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
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
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
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {media && (
              <div className={this.decorateCSS("media-wrapper")}>
                <div className={this.decorateCSS("media-container")}>
                  <Base.Media
                    value={media}
                    className={`${this.decorateCSS("media")} ${media.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                  />
                  {overlay && (
                    <div className={this.decorateCSS("media-overlay")} />
                  )}
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction30;
