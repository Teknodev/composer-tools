import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection6 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Level up your portfolio",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Design You Website Easily",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Nanotechnology immersion along the highway.",
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
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690cc9f93596a1002b205a5f?alt=media",
      },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Get Access",
          "",
          "FaArrowRight",
          "",
          "Primary"
        ),
      ],
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "No credit card required",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });
  }

  static getName(): string {
    return "Intro Section 6";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle")) || "";
    const title = this.castToString(this.getPropValue("title")) || "";

    const description =
      this.castToString(this.getPropValue("description")) || "";
    const image = this.getPropValue("image");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const alignment = Base.getContentAlignment();
    const overlay = this.getPropValue("overlay");

    const hasImage = !!(image && image.url);

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const hasButton = buttons.length > 0;
    const bottomText = this.castToString(this.getPropValue("text")) || "";
    const hasRightContainer = !!(
      hasSubtitle ||
      hasTitle ||
      hasDescription ||
      hasButton
    );
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("intro-wrapper")} ${
              alignment === "left"
                ? this.decorateCSS("alignment-left")
                : this.decorateCSS("alignment-center")
            } ${
              hasImage && !hasRightContainer
                ? this.decorateCSS("image-container-alone")
                : ""
            }`}
          >
            {hasImage && (
              <div
                className={`${this.decorateCSS("image-container")} ${
                  !hasRightContainer
                    ? this.decorateCSS("image-container-alone")
                    : ""
                }`}
              >
                <div className={this.decorateCSS("media-wrapper")}>
                  <Base.Media
                    value={image}
                    className={this.decorateCSS("media-image")}
                  />
                  {overlay && image?.url && (
                    <div className={this.decorateCSS("overlay")}></div>
                  )}
                </div>
                {overlay && (
                  <div className={this.decorateCSS("image-overlay")}></div>
                )}
              </div>
            )}
            {hasRightContainer && (
              <div className={this.decorateCSS("text-content")}>
                <Base.VerticalContent
                  className={this.decorateCSS("vertical-content")}
                >
                  {hasSubtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
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

                  {hasButton && (
                    <Base.Row className={this.decorateCSS("button-wrapper")}>
                      {buttons.map((item: INPUTS.CastedButton, index: number) => {
                        const buttonText = this.castToString(item.text);
                        const buttonUrl = item.url || "#";
                        const iconExist = item.icon && item.icon.name;
                        const imageExist = item.image && item.image.url;
                        return (
                          <ComposerLink
                            key={`is6-btn-${index}`}
                            path={buttonUrl}
                          >
                            {imageExist ? (
                              <div className={this.decorateCSS("image-wrapper")}>
                                <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                              </div>
                            ) : (
                              <Base.Button
                                buttonType={item.type}
                                className={this.decorateCSS("button")}
                              >
                                {buttonText && (
                                  <Base.P
                                    className={this.decorateCSS("button-text")}
                                  >
                                    {buttonText}
                                  </Base.P>
                                )}
                                {iconExist && (
                                  <Base.Media
                                    value={item.icon}
                                    className={this.decorateCSS("button-icon")}
                                  />
                                )}
                              </Base.Button>
                            )}
                          </ComposerLink>
                        );
                      })}
                    </Base.Row>
                  )}

                  {bottomText && (
                    <div className={this.decorateCSS("thumb-row")}>
                      <Base.Media
                        className={this.decorateCSS("thumb-icon")}
                        value={{ type: "icon", name: "FaThumbsUp" }}
                      />
                      <Base.P className={this.decorateCSS("bottomText")}>
                        {bottomText}
                      </Base.P>
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection6;