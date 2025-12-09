import * as React from "react";
import {
  BaseIntroSection,
  TypeMediaInputValue,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./intro-section5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type IntroSection5Button = INPUTS.CastedButton & {
  icon?: TypeMediaInputValue | null;
};

class IntroSection5 extends BaseIntroSection {
  constructor(props?: TypeUsableComponentProps) {
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
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "media",
      key: "backgroundMedia",
      displayer: "Media",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691db9e13596a1002b2b69de?alt=media",
      },
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
          "FaChevronDown",
          null,
          "Bare"
        ),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "buttonsAnimation",
      displayer: "Button Animation",
      value: true,
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

    const bgMedia = this.getPropValue("backgroundMedia") as
      | TypeMediaInputValue
      | null;
    const hasOverlay = this.getPropValue("overlay");

    const buttons = this.castToObject<IntroSection5Button[]>("buttons");
    const buttonsAnimation = this.getPropValue("buttonsAnimation");

    const hasBgMedia = !!(bgMedia && bgMedia.url);
    const isVideoBg = hasBgMedia && bgMedia?.type === "video";
    const isImageBg = hasBgMedia && bgMedia?.type === "image";

    const hasButtons = Array.isArray(buttons) && buttons.length > 0;

    const containerClasses = [
      this.decorateCSS("container"),
      hasBgMedia ? this.decorateCSS("media-active") : "",
      isImageBg ? this.decorateCSS("image-active") : "",
      isVideoBg ? this.decorateCSS("video-active") : "",
      hasOverlay && hasBgMedia ? this.decorateCSS("overlay-active") : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Base.Container className={containerClasses}>
        {hasBgMedia && bgMedia && (
          <Base.Media
            value={bgMedia}
            className={this.decorateCSS("background-media")}
          />
        )}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {(subtitleExist || titleExist || descriptionExist) && (
              <div className={this.decorateCSS("text-wrapper")}>
                {subtitleExist && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("subtitle")}
                  >
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {descriptionExist && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </div>
            )}

            {hasButtons && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((button, index) => {
                  const iconValue = button.icon || null;
                  const hasIcon =
                    !!iconValue &&
                    ((iconValue.type === "icon" &&
                      !!this.castToString(iconValue.name || "")) ||
                      (iconValue.type === "image" &&
                        !!this.castToString(iconValue.url || "")));

                  const hasText = this.castToString(button.text || "");
                  const isAnimated = buttonsAnimation;

                  if (!hasIcon && !hasText) {
                    return null;
                  }

                  return (
                    <ComposerLink key={index} path={button.url || "#"}>
                      <Base.Button
                        buttonType={button.type || "Link"}
                        className={`${this.decorateCSS("button")} ${
                          isAnimated ? this.decorateCSS("has-animation") : ""
                        }`}
                      >
                        {hasText && button.text}
                        {hasIcon && iconValue && (
                          <Base.Media
                            value={iconValue}
                            className={this.decorateCSS("icon")}
                          />
                        )}
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection5;
