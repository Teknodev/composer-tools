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
          null,
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
      type: "media",
      key: "textIcon",
      displayer: "Text Icon",
      value: {
        type: "icon",
        name: "FaThumbsUp",
      },
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
    const subtitle = this.getPropValue("subtitle") || "";
    const title = this.getPropValue("title") || "";

    const description = this.getPropValue("description") || "";
    const image = this.getPropValue("image");
    const bottomText = this.getPropValue("text") || "";
    const textIcon = this.getPropValue("textIcon");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const alignment = Base.getContentAlignment();
    const overlay = this.getPropValue("overlay");

    const hasImage = !!(image && image.url);

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasBottomText = this.castToString(bottomText);

    const hasAnyButton = Array.isArray(buttons) && buttons.some((b: any) => this.castToString(b?.text) || b?.icon);

    const hasRightContainer = !!(
      hasSubtitle ||
      hasTitle ||
      hasDescription ||
      hasAnyButton
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
                  {overlay && <div className={this.decorateCSS("thumbnail-overlay")} />}
                </div>
              </div>
            )}
            {hasRightContainer && (
              <div className={`${this.decorateCSS("text-content")} ${!hasImage ? this.decorateCSS("text-content-alone") : ""}`}>
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

                  {hasAnyButton && (
                    <Base.Row className={this.decorateCSS("button-wrapper")}>
                      {buttons.map(
                        (item: INPUTS.CastedButton, index: number) => {
                          const btnTextExist = this.castToString(item.text);
                          const buttonIcon = item.icon;
                          if (!btnTextExist && !buttonIcon) {
                            return null;
                          }
                          const buttonUrl = item.url || "#";
                          return (
                            <div key={`is6-btn-${index}`} className={this.decorateCSS("button-wrapp")}>
                              <ComposerLink path={buttonUrl}>
                                <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                  {btnTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                  {buttonIcon && (
                                    <div className={this.decorateCSS("button-icon-wrapper")}>
                                      <Base.Media value={buttonIcon} className={this.decorateCSS("button-icon")} />
                                    </div>
                                  )}
                                  
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          );
                        }
                      )}
                    </Base.Row>
                  )}

                  {(hasBottomText || textIcon) && (
                    <Base.Row className={this.decorateCSS("text-wrapper")}>
                      <div className={this.decorateCSS("thumb-row")}>

                        {textIcon && (
                          <Base.Media
                            className={this.decorateCSS("thumb-icon")}
                            value={textIcon}
                          />
                        )}

                        {bottomText && (
                          <Base.P className={this.decorateCSS("bottomText")}>
                            {bottomText}
                          </Base.P>
                        )}

                      </div>
                    </Base.Row>
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
