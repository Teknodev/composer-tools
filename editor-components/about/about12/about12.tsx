import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about12.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type MediaGroup = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class About12 extends BaseAbout {
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
      value: "About Our Team",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        '<p dir="ltr"><span style="white-space: pre-wrap;">User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</span></p><p dir="ltr"><span style="white-space: pre-wrap;">At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</span></p>',
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary")],
    });

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692d8d39496aa1002ca48910?alt=media",
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
    return "About 12";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const mediaGroup = this.castToObject<MediaGroup>("media");
    const image = mediaGroup?.media;
    const overlay = mediaGroup?.overlay;

    const hasImage = !!image;
    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const hasAnyButton = buttons.some(
      (b: INPUTS.CastedButton) => this.castToString(b?.text) || (b?.icon as { name?: string })?.name || (b?.icon as { url?: string })?.url
    );
    const hasRightContainer = !!(
      hasTitle ||
      hasSubtitle ||
      hasDescription ||
      hasAnyButton
    );
    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${hasImage && !hasRightContainer ? this.decorateCSS("image-only") : ""
          }`}
        isFull={true}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("intro-wrapper")} ${!hasImage && this.decorateCSS("no-image")
              }`}
          >
            {hasImage && (
              <div
                className={`${this.decorateCSS("image-container")} ${!hasRightContainer && this.decorateCSS("image-container-alone")
                  }`}
              >
                <Base.Media
                  value={image}
                  className={this.decorateCSS("media-image")}
                />
                {overlay && (
                  <div className={this.decorateCSS("thumbnail-overlay")} />
                )}
              </div>
            )}

            {hasRightContainer && (
              <div
                className={`${this.decorateCSS("text-content")} ${!hasImage ? this.decorateCSS("text-content-alone") : ""
                  } ${alignmentValue === "center" && this.decorateCSS("center")} ${!hasImage && alignmentValue === "center" && this.decorateCSS("no-image-center")
                  }`}
              >
                <Base.VerticalContent
                  className={this.decorateCSS("vertical-content")}
                >
                  {hasSubtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
                      {this.getPropValue("subtitle")}
                    </Base.SectionSubTitle>
                  )}
                  {hasTitle && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  )}

                  {hasDescription && (
                    <Base.SectionDescription
                      className={this.decorateCSS("description")}
                    >
                      {this.getPropValue("description")}
                    </Base.SectionDescription>
                  )}

                  {hasAnyButton && (
                    <div className={this.decorateCSS("action-buttons")}>
                      {buttons.map(
                        (item: INPUTS.CastedButton, index: number) => {
                          const btnTextExist = this.castToString(item.text);
                          const buttonIcon = item.icon as unknown as TypeMediaInputValue;
                          const buttonIconExist =
                            (buttonIcon as { name?: string })?.name || (buttonIcon as { url?: string })?.url;
                          const buttonText = item.text;

                          if (!btnTextExist && !buttonIconExist) {
                            return null;
                          }
                          const buttonUrl = item.url || "#";
                          return (
                            <ComposerLink
                              path={buttonUrl}
                              key={`about12-btn-${index}`}
                            >
                              <Base.Button
                                buttonType={item.type}
                                className={this.decorateCSS("button")}
                              >
                                {buttonIconExist && (
                                  <Base.Media
                                    value={buttonIcon}
                                    className={this.decorateCSS("button-icon")}
                                  />
                                )}
                                {btnTextExist && (
                                  <Base.P
                                    className={this.decorateCSS("button-text")}
                                  >
                                    {buttonText}
                                  </Base.P>
                                )}
                              </Base.Button>
                            </ComposerLink>
                          );
                        }
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
