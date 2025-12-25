import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";

type TImage = {
  image: TypeMediaInputValue;
  imageLink: string;
};

class LogoComp7Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Text",
      value: "Trusted by thousands from worldwide",
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
        },        

      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 7";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const originals = this.castToObject<TImage[]>("image-items") || [];
    let lineOfLogos: TImage[] = [];
    
    if (originals.length > 0) {
      const repeatCount = Math.round(14 / originals.length);
      for (let i = 0; i < repeatCount; i++) {
        lineOfLogos.push(...originals);
      }
    }

    const scrollItems = [...lineOfLogos, ...lineOfLogos];

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {title && (
          <Base.VerticalContent className={this.decorateCSS("heading")}>
            <Base.H6 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.H6>
          </Base.VerticalContent>
        )}

        {scrollItems.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            <div
              className={this.decorateCSS("images-container")}
              style={{ animationDuration: `${scrollItems.length * 2}s` }}
            >
              {scrollItems.map((img, i) => (
                <ComposerLink path={img.imageLink}>
                  <div className={this.decorateCSS("image-child")}>
                    <Base.Media value={img.image} className={this.decorateCSS("image")} />
                  </div>
                </ComposerLink>
              ))}
            </div>
            <div
              className={this.decorateCSS("images-container")}
              style={{ animationDuration: `${scrollItems.length * 2}s` }}
            >
              {scrollItems.map((img, i) => (
                <ComposerLink path={img.imageLink}>
                  <div className={this.decorateCSS("image-child")}>
                    <Base.Media value={img.image} className={this.decorateCSS("image")} />
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

export default LogoComp7Page;
