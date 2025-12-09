import * as React from "react";
import {
  BaseIntroSection,
  TypeUsableComponentProps,
  TypeMediaInputValue,
} from "../../EditorComponent";
import styles from "./intro-section3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection3 extends BaseIntroSection {
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
      value: "Everything You Need to Run Your Websites",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "subtitle1",
      displayer: "Text 1",
      value: "First 30 days for free.",
    });

    this.addProp({
      type: "string",
      key: "subtitle2",
      displayer: "Text 2",
      value: "No credit card required.",
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/691c5ca53596a1002b2a1afc?alt=media",
      } as TypeMediaInputValue,
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    const buttonProp = INPUTS.BUTTON(
      "button",
      "Button 1",
      "Start Now",
      "",
      "",
      null,
      "Primary"
    );

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [buttonProp],
    });
  }

  static getName(): string {
    return "Intro Section 3";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitle1 = this.getPropValue("subtitle1");
    const subtitle2 = this.getPropValue("subtitle2");

    const image = this.getPropValue("image") as TypeMediaInputValue | null;
    const imageUrl = image?.url;
    const overlay = this.getPropValue("overlay");

    const buttonsProp = this.getProp("buttons");
    const buttonsList = (buttonsProp?.value || []) as TypeUsableComponentProps[];

    const subtitleText = this.castToString(subtitle);
    const titleText = this.castToString(title);
    const descriptionText = this.castToString(description);
    const subtitle1Text = this.castToString(subtitle1);
    const subtitle2Text = this.castToString(subtitle2);

    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {subtitleText && (
              <Base.SectionSubTitle
                className={this.decorateCSS("subtitle")}
              >
                {subtitle}
              </Base.SectionSubTitle>
            )}

            {titleText && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}

            {descriptionText && (
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {description}
              </Base.SectionDescription>
            )}

            <div
              className={`${this.decorateCSS("button-group-container")} ${
                alignment === "center" ? this.decorateCSS("center") : ""
              }`}
            >
              <div className={this.decorateCSS("buttons-wrapper")}>
                {buttonsList &&
                  buttonsList.map(
                    (buttonItem: TypeUsableComponentProps, index: number) => {
                      if (!buttonItem.getPropValue) return null;

                      const buttonTextElement = buttonItem.getPropValue("text");
                      const url = buttonItem.getPropValue("url", {
                        as_string: true,
                      });
                      const buttonType = buttonItem.getPropValue("type", {
                        as_string: true,
                      });
                      const buttonImage =
                        buttonItem.getPropValue(
                          "buttonImage"
                        ) as TypeMediaInputValue | null;

                      const hasButtonText =
                        !!this.castToString(buttonTextElement);
                      const hasButtonImage = !!buttonImage?.url;

                      if (!hasButtonText && !hasButtonImage) return null;

                      return (
                        <ComposerLink key={index} path={url || "#"}>
                          <Base.Button
                            buttonType={buttonType || "Primary"}
                            className={this.decorateCSS("button")}
                          >
                            {hasButtonImage && (
                              <Base.Media
                                value={buttonImage}
                                className={this.decorateCSS("button-image")}
                              />
                            )}
                            {hasButtonText && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {buttonTextElement}
                              </Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    }
                  )}
              </div>

              {(subtitle1Text || subtitle2Text) && (
                <div className={this.decorateCSS("subtitle-group")}>
                  {subtitle1Text && (
                    <Base.P className={this.decorateCSS("subtitle1")}>
                      {subtitle1}
                    </Base.P>
                  )}
                  {subtitle2Text && (
                    <Base.P className={this.decorateCSS("subtitle2")}>
                      {subtitle2}
                    </Base.P>
                  )}
                </div>
              )}
            </div>

            {imageUrl && (
              <div
                className={`${this.decorateCSS("image")} ${
                  overlay ? this.decorateCSS("overlay") : ""
                }`}
              >
                <Base.Media
                  value={image as TypeMediaInputValue}
                  className={this.decorateCSS("image")}
                />
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection3;
