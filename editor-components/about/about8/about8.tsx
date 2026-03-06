import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Text = {
  description: string;
};

type MediaGroup = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

class About8 extends BaseAbout {
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
      value: "Our Technologies Encircle World",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "object",
      key: "media-1",
      displayer: "Media 1",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6912efa23596a1002b23acda?alt=media",
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

    this.addProp({
      type: "object",
      key: "media-2",
      displayer: "Media 2",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6912efdd3596a1002b23ad71?alt=media",
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

    this.addProp({
      type: "array",
      key: "texts",
      displayer: "Texts",
      value: [
        {
          type: "object",
          key: "text",
          displayer: "Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "At the end of the day, going forward, a new normal that has evolved from generation is on the runway towards a cloud solution.",
            },
          ],
        },
        {
          type: "object",
          key: "text",
          displayer: "Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "At the end of the day, going forward, a new normal that has evolved from generation is on the runway towards a cloud solution.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "About 8";
  }

  render() {
    const titleStr = this.castToString(this.getPropValue("title"));
    const subtitleStr = this.castToString(this.getPropValue("subtitle"));
    const descriptionStr = this.castToString(this.getPropValue("description"));

    const media1 = this.castToObject<MediaGroup>("media-1");
    const media2 = this.castToObject<MediaGroup>("media-2");
    const image1 = media1?.media;
    const image2 = media2?.media;
    const texts = this.castToObject<Text[]>("texts");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const alignment = Base.getContentAlignment();

    const hasTitle = !!titleStr;
    const hasButton = buttons.some((button) => this.castToString(button.text));
    const validTexts = texts?.filter((t) => !!this.castToString(t.description)) || [];
    const hasTexts = validTexts.length > 0;
    const hasImage1 = !!image1;
    const hasImage2 = !!image2;
    const hasImages = hasImage1 || hasImage2;
    const isSingleImage = (hasImage1 && !hasImage2) || (!hasImage1 && hasImage2);

    if (!hasTitle && !hasImages && !hasTexts && !hasButton && !descriptionStr) return null;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${!hasImages ? this.decorateCSS("no-image") : ""}`}>
          {(subtitleStr || hasTitle || descriptionStr) && (
            <Base.VerticalContent className={`${this.decorateCSS("header-container")} ${hasImages ? this.decorateCSS("with-image") : this.decorateCSS(alignment)}`}>
              {subtitleStr && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {hasTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionStr && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          <div
            className={`${this.decorateCSS("main-content")} ${!hasTexts && !hasButton ? this.decorateCSS("no-content") : ""} ${hasImages ? this.decorateCSS("with-image") : this.decorateCSS("no-image")}`}
          >
            {hasImages && (
              <div className={`${this.decorateCSS("images-section")} ${isSingleImage ? this.decorateCSS("single-image") : ""}`}>
                {hasImage1 && (
                  <div
                    className={`${this.decorateCSS("image-box")} ${media1?.overlay ? this.decorateCSS("overlay") : ""}`}
                  >
                    <Base.Media
                      value={image1}
                      className={this.decorateCSS("image")}
                    />
                    <div className={this.decorateCSS("overlay-layer")} />
                  </div>
                )}
                {hasImage2 && (
                  <div
                    className={`${this.decorateCSS("image-box")} ${media2?.overlay ? this.decorateCSS("overlay") : ""}`}
                  >
                    <Base.Media
                      value={image2}
                      className={this.decorateCSS("image")}
                    />
                    <div className={this.decorateCSS("overlay-layer")} />
                  </div>
                )}
              </div>
            )}

            {(hasTexts || buttons.length > 0) && (
              <div className={`${this.decorateCSS("content-section")} ${hasImages ? this.decorateCSS("left") : this.decorateCSS(alignment)}`}>
                {hasTexts && (
                  <div className={this.decorateCSS("texts-wrapper")}>
                    {validTexts.map((text, index) => (
                      <Base.SectionDescription
                        key={index}
                        className={this.decorateCSS("text")}
                      >
                        {text.description}
                      </Base.SectionDescription>
                    ))}
                  </div>
                )}

                {hasButton && (
                  <div className={`${this.decorateCSS("buttons-container")} ${this.decorateCSS(alignment)}`}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                      if (!this.castToString(button.text)) return null;

                      return (
                        <ComposerLink key={index} path={button.url}>
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About8;