import * as React from "react";
import styles from "./image-gallery9.module.scss";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Card {
  image: TypeMediaInputValue;
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
      displayer: "Cards",
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-16.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-17.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-21.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-19.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-20.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-24.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-22.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-23.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-18.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-25.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-26.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
                url: "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-27.jpg",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
