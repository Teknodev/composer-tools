import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type TImage = {
  image: TypeMediaInputValue;
  imageLink: string;
};

class LogoComp2Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Global Brands",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We Worked With Global Brands",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },        {
          type: "object",
          key: "image-item",
          displayer: "Image Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },

      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 2";
  }

  render() {
    const originalImageArray = this.castToObject<TImage[]>("image-items");
    let lineOfLogos: any[] = [];
    
    if (originalImageArray.length > 0) {
      for (let x = 0; x < Math.round(14 / originalImageArray.length); x++) {
        lineOfLogos.push(...originalImageArray);
      }
    }
    const images = [...lineOfLogos, ...lineOfLogos];

    const isSubtitleExists = this.castToString(this.getPropValue("subtitle"));
    const isTitleExists = this.castToString(this.getPropValue("title"));
    const isDescriptionExists = this.castToString(this.getPropValue("description"));

    return (
      <Base.Container
        className={this.decorateCSS("container")}
      >
        {(isSubtitleExists || isTitleExists || isDescriptionExists) && (
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {isSubtitleExists && (
                <Base.SectionSubTitle
                  className={this.decorateCSS("subtitle")}
                >
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {isTitleExists && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {isDescriptionExists && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          </Base.MaxContent>
        )}

        {images.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            <div
              className={this.decorateCSS("images-container")}
              style={{ animationDuration: `${images.length * 2}s` }}
            >
              {images.map((imageItem: TImage, index: number) => imageItem.image && (
                <ComposerLink path={imageItem.imageLink}>
                  <div className={this.decorateCSS("image-child")}>
                    <Base.Media value={imageItem.image} className={this.decorateCSS("image")} />
                  </div>
                </ComposerLink>
              ))}
            </div>
            <div
              className={`${this.decorateCSS("images-container")} ${this.decorateCSS("reverse")}`}
              style={{ animationDuration: `${images.length * 2}s` }}
            >
              {images.map((imageItem: TImage, index: number) => imageItem.image && (
                <ComposerLink path={imageItem.imageLink}>
                  <div className={this.decorateCSS("image-child")}>
                    <Base.Media value={imageItem.image} className={this.decorateCSS("image")} />
                  </div>
                </ComposerLink>
              ))}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default LogoComp2Page;
