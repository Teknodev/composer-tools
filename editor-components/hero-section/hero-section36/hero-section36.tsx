import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section36.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ImageItem = {
  image: "";
};

class HeroSection36 extends BaseHeroSection {
  constructor(props?: unknown) {
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
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80ae0_slider%20img%201-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items2",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "video",
                url: "https://cdn.website.hautech.ai/cdn/2%20actual%20size.mp4",
                settings: {
                  loop: false,
                  autoplay: true,
                },
              },
            },
          ],
        },
        {
          type: "object",
          key: "items3",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80add_slider%20img%203-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items4",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "video",
                url: "https://cdn.website.hautech.ai/cdn/4%20actual%20size.mp4",
                settings: {
                  loop: false,
                  autoplay: true,
                },
              },
            },
          ],
        },
        {
          type: "object",
          key: "items5",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80ae1_slider%20img%205-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items6",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "video",
                url: "https://cdn.website.hautech.ai/cdn/7%20actual%20size.mp4",
                settings: {
                  loop: false,
                  autoplay: true,
                },
              },
            },
          ],
        },
        {
          type: "object",
          key: "items7",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "video",
                url: "https://cdn.website.hautech.ai/cdn/8%20actual%20size.mp4",
                settings: {
                  loop: true,
                  autoplay: true,
                },
              },
            },
          ],
        },
        {
          type: "object",
          key: "items8",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80ae6_slider%20img%2010-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items9",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "video",
                url: "https://cdn.website.hautech.ai/cdn/10%20actual%20size.mp4",
                settings: {
                  loop: false,
                  autoplay: true,
                },
              },
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Hero Section 36";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const originals = this.castToObject<ImageItem[]>("image-items") || [];
    const lineOfLogos: ImageItem[] = [];

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
              {scrollItems.map((img, idx) => (
                <div className={this.decorateCSS("image-child")} key={idx}>
                  <Base.Media
                    value={img.image}
                    className={this.decorateCSS("image")}
                  />
                </div>
              ))}
            </div>
            <div
              className={this.decorateCSS("images-container")}
              style={{ animationDuration: `${scrollItems.length * 2}s` }}
            >
              {scrollItems.map((img, idx) => (
                <div className={this.decorateCSS("image-child")} key={idx}>
                  <Base.Media
                    value={img.image}
                    className={this.decorateCSS("image")}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection36;
