import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section36.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ImageItem = {
  image: TypeMediaInputValue | undefined;
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
                  loop: true,
                  autoplay: true,
                  controls: false,
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
      ],
    });
  }

  static getName(): string {
    return "Hero Section 36";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const originalImageArray =
      this.castToObject<ImageItem[]>("image-items") || [];

    let images: any[] = [];

    if (originalImageArray.length > 0) {
      for (let x = 0; x < Math.round(30 / originalImageArray.length); x++) {
        images.push(...originalImageArray);
      }
    }
    images = [...images, ...images];

    // const validImages = images.filter(
    //   (img) => img.image && (img.image as any).url
    // );

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {title && (
          <Base.VerticalContent className={this.decorateCSS("heading")}>
            <Base.H6 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.H6>
          </Base.VerticalContent>
        )}

        {images.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            <div
              className={this.decorateCSS("images-track")}
              style={{ animationDuration: `${images.length * 4}s` }}
            >
              <div className={this.decorateCSS("images-group")}>
                {images.map((img, idx) => (
                  <div className={this.decorateCSS("image-child")} key={idx}>
                    <Base.Media
                      autoplay
                      autoPlay
                      controls={false}
                      loop
                      muted
                      value={img.image}
                      className={this.decorateCSS("image")}
                    />
                  </div>
                ))}
              </div>

              <div
                className={this.decorateCSS("images-group")}
                aria-hidden="true"
              >
                {images.map((img, idx) => (
                  <div
                    className={this.decorateCSS("image-child")}
                    key={`dup-${idx}`}
                  >
                    <Base.Media
                      value={img.image}
                      className={this.decorateCSS("image")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection36;
