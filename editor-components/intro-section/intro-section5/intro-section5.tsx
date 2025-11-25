import * as React from "react";
import { BaseIntroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./intro-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection5 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "WELCOME",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Bring Your Ideas to Life",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "media",
      key: "backgroundMedia",
      displayer: "Background Media",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691db9e13596a1002b2b69de?alt=media",
      } as TypeMediaInputValue,
      additionalParams: {
        availableTypes: ["image", "video"],
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    const buttonProp = INPUTS.BUTTON(
      "button",
      "Button",
      "",
      "",
      "FaArrowDown",
      null,
      "Bare"
    );

    if (Array.isArray(buttonProp.value)) {
      buttonProp.value.push({
        type: "boolean",
        key: "enableAnimation",
        displayer: "Animation",
        value: true
      } as TypeUsableComponentProps);
    }

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      max: 1,
      value: [buttonProp],
    });
  }

  static getName(): string {
    return "Intro Section 5";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const bgMedia = this.getPropValue("backgroundMedia") as TypeMediaInputValue;
    const hasOverlay = this.getPropValue("overlay");

    const buttons = this.castToObject<any[]>("buttons");
    const button = buttons && buttons.length > 0 ? buttons[0] : null;

    const hasBgMedia = bgMedia && bgMedia.url;
    const enableAnimation = button?.enableAnimation;
    const hasIcon = button && button.icon && button.icon.name;
    const hasText = button && this.castToString(button.text);

    const hasButtonData = !!button && (hasIcon || hasText);

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          hasBgMedia ? this.decorateCSS("media-active") : ""
        } ${hasOverlay && hasBgMedia ? this.decorateCSS("overlay-active") : ""}`}
      >
        {hasBgMedia && (
          <Base.Media 
            value={bgMedia} 
            className={this.decorateCSS("background-media")} 
          />
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>

        {hasButtonData && (
          <div
            className={`${this.decorateCSS("buttons")} ${
              enableAnimation ? this.decorateCSS("has-animation") : ""
            }`}
          >
            <ComposerLink path={button.url}>
              <Base.Button
                buttonType={button.type || "Link"}
                className={this.decorateCSS("button")}
              >
                {hasText && button.text}
                {hasIcon && (
                  <Base.Media value={button.icon} className={this.decorateCSS("icon")} />
                )}
              </Base.Button>
            </ComposerLink>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default IntroSection5;