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
      value: "",
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
      displayer: "Background Image",
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
      "FaAngleDown",
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
    const bgMedia = this.getPropValue("backgroundMedia") as TypeMediaInputValue;
    const hasOverlay = this.getPropValue("overlay");
    const buttons = this.castToObject<any[]>("buttons");
    const hasButtons = buttons && buttons.length > 0;
    const hasBgMedia = bgMedia && (bgMedia as any)?.url;

    return (
      <Base.Container 
        className={`${this.decorateCSS("container")} ${hasOverlay && hasBgMedia && this.decorateCSS("overlay-active")}`}
        style={hasBgMedia ? { backgroundImage: `url(${(bgMedia as any).url})` } : {}}>
        
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
            <div className={this.decorateCSS("text-wrapper")}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${hasBgMedia ? this.decorateCSS("with-image") : "badge"}`}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {this.castToString(title) && (
                <Base.SectionTitle className={`${this.decorateCSS("title")} ${hasBgMedia && this.decorateCSS("with-image")}`}>
                  {title}
                </Base.SectionTitle>
              )}

              {this.castToString(description) && (
                <Base.SectionDescription className={`${this.decorateCSS("description")} ${hasBgMedia && this.decorateCSS("with-image")}`}>
                  {description}
                </Base.SectionDescription>
              )}
            </div>
          </Base.VerticalContent>

          {hasButtons && (
            <div className={this.decorateCSS("bottom-icon")}>
              {buttons.map((button: any, index: number) => {
                const hasIcon = button.icon && (button.icon.name || button.icon.url);
                const hasText = this.castToString(button.text);
                const isAnimated = button.enableAnimation;

                if (!hasIcon && !hasText) return null;

                return (
                  <ComposerLink key={index} path={button.url}>
                    <Base.Button
                      buttonType={button.type || "Link"}
                      className={`${this.decorateCSS("button")} ${isAnimated ? this.decorateCSS("has-animation") : ""}`}
                    >
                      {hasText && button.text}
                      {hasIcon && (
                        <Base.Media value={button.icon} className={this.decorateCSS("icon")} />
                      )}
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection5;