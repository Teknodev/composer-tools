import * as React from "react";
import { BaseAbout } from "composer-tools/editor-components/EditorComponent";
import styles from "./about12.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class About12 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About Our Team",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        '<p dir="ltr"><span style="white-space: pre-wrap;">User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</span></p><p dir="ltr"><span style="white-space: pre-wrap;">At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</span></p>',
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
          "",
          "",
          "",
          null,
          "Primary"
        ),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });
  }

  static getName(): string {
    return "About 12";
  }

  render() {
    const title = this.getPropValue("title") || "";
    const subtitle = this.getPropValue("subtitle") || "";
    const description = this.getPropValue("description") || "";
    const image = this.getPropValue("image");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const overlay = this.getPropValue("overlay");

    const hasImage = !!(image && image.url);
    const hasTitle = this.castToString(title);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);

    const hasAnyButton =
      Array.isArray(buttons) &&
      buttons.some((b: any) => this.castToString(b?.text) || b?.icon);

    const hasRightContainer = !!(
      hasTitle ||
      hasSubtitle ||
      hasDescription ||
      hasAnyButton
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("intro-wrapper")} ${
              !hasImage ? this.decorateCSS("no-image") : ""
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
                  {overlay && (
                    <div className={this.decorateCSS("thumbnail-overlay")} />
                  )}
                </div>
              </div>
            )}

            {hasRightContainer && (
              <div
                className={`${this.decorateCSS("text-content")} ${
                  !hasImage ? this.decorateCSS("text-content-alone") : ""
                }`}
              >
                <Base.VerticalContent
                  className={this.decorateCSS("vertical-content")}
                >
                  {hasTitle && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>
                  )}
                  {hasSubtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}

                  {hasDescription && (
                    <Base.SectionDescription
                      className={this.decorateCSS("description")}
                    >
                      {description}
                    </Base.SectionDescription>
                  )}

                  {hasAnyButton && (
                    <div className={this.decorateCSS("actions-wrapper")}>
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
                                <div
                                  key={`is6-btn-${index}`}
                                  className={this.decorateCSS("button-wrapper")}
                                >
                                  <ComposerLink path={buttonUrl}>
                                    <Base.Button
                                      buttonType={item.type}
                                      className={this.decorateCSS("button")}
                                    >
                                      {buttonIcon && (
                                        <Base.Media
                                          value={buttonIcon}
                                          className={this.decorateCSS(
                                            "button-icon"
                                          )}
                                        />
                                      )}
                                      {btnTextExist && (
                                        <Base.P
                                          className={this.decorateCSS(
                                            "button-text"
                                          )}
                                        >
                                          {item.text}
                                        </Base.P>
                                      )}
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
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About12;
