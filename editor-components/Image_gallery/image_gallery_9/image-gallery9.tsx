import * as React from "react";
import styles from "./image-gallery9.module.scss";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Card {
  image: TypeMediaInputValue;
  overlay?: boolean;
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  url: string;
  active: boolean;
}
class ImageGallery9 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "sectionSubtitle",
      displayer: "Subtitle",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "header_title",
      displayer: "Title",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "header_description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "headerButtons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Gallery",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c624540?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Moilee Corporal",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drawing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2cc2f8a5b002ce6c04a?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "DITNB Dectruit",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphics",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f611?alt=media&timestamp=1719412135932",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Design Videveste",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drawing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc6d506a40002c305aa6?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Man Shoes",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sports",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f79?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Your Best Skin",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphics",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f612?alt=media&timestamp=1719412135932",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Japan Letter",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphics",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f613?alt=media&timestamp=1719412135932",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Yellow Architecture",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "GraphicsSports",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dccaa506a40002c305ac7?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Model Arbus Goldin",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Iconography",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247e4?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Intro to Data",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Iconography",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667c25984fe95d002b35f614?alt=media&timestamp=1719412135932",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Upp Design",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Iconography",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666181aebd2970002c6247dd?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Sample Box",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "GraphicsSports",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674dcc99506a40002c305abc?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "boolean",
              key: "active",
              displayer: "Active",
              value: false,
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Concrete Remedy",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drawing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["underline", "slideUp"],
      additionalParams: {
        selectItems: ["underline", "slideUp"],
      },
    });
  }

  static getName(): string {
    return "Image Gallery 9";
  }

  render() {
    const imageExist = this.getPropValue("image");
    const subtitleExist = this.castToString(this.getPropValue("sectionSubtitle"));
    const titleExist = this.castToString(this.getPropValue("header_title"));
    const descriptionExist = this.castToString(this.getPropValue("header_description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
    const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist || hasButtons) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle-heading")}>
                  {this.getPropValue("sectionSubtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("heading-title")}>
                  {this.getPropValue("header_title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("heading-description")}>
                  {this.getPropValue("header_description")}
                </Base.SectionDescription>
              )}
              {hasButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("gallery-container")}>
            {this.castToObject<Card[]>("cards").map(
              (item: Card, indexCards: number) => {
                let isLarge = false;

                if (indexCards < 7) {
                  const patternIndex = indexCards % 4;
                  isLarge = patternIndex === 0 || patternIndex === 3;
                } else {
                  const secondPatternIndex = (indexCards - 7) % 3;
                  isLarge = secondPatternIndex === 2;
                }

                return (
                  <div
                    key={indexCards}
                    className={`${this.decorateCSS("card")} ${
                      isLarge ? this.decorateCSS("large") : ""
                    } ${item.active ? this.decorateCSS("active") : ""}`}
                    data-animation={this.getPropValue("hoverAnimation").join(
                      " "
                    )}
                  >
                    <div
                      className={`${this.decorateCSS("card-wrapper")} ${
                        !imageExist && this.decorateCSS("noImage")
                      }`}
                    >
                      {(this.castToString(item.title) ||
                        this.castToString(item.subtitle) ||
                        this.castToString(item.description) ||
                        item.image) && (
                        <div className={this.decorateCSS("content-wrapper")}>
                          {item.image && (
                            <Base.Media value={item.image} className={this.decorateCSS("card-image")} />
                          )}
                          {item.image && item.overlay && <div className={this.decorateCSS("media-overlay")} />}
                          {(this.castToString(item.title) ||
                            this.castToString(item.subtitle) ||
                            this.castToString(item.description)) && (
                            <div className={this.decorateCSS("category")}>
                              {this.castToString(item.title) && (
                                <Base.H6 className={this.decorateCSS("title")}>
                                  {item.title}
                                </Base.H6>
                              )}
                              <ComposerLink path={item.url}>
                                {this.castToString(item.subtitle) && (
                                  <div className={this.decorateCSS("subtitle-wrapper")}>
                                    <Base.H5 className={this.decorateCSS("subtitle")}>
                                      {item.subtitle}
                                    </Base.H5>
                                    <div className={this.decorateCSS("subtitle-line")} />
                                  </div>
                                )}
                              </ComposerLink>
                              {this.castToString(item.description) && (
                                <Base.P className={this.decorateCSS("description")}>
                                  {item.description}
                                </Base.P>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery9;
