import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ISliderData = {
  title: string;
  image: TypeMediaInputValue;
  pagepath: string;
};

class HeroSection7 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "pages",
      displayer: "Page",
      value: [
        {
          type: "object",
          key: "page1",
          displayer: "Page-1",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Black & White II",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c62453f?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "page2",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Balance",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c624542?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "page3",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Village",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c62453d?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "page4",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Wonderland",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c624540?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "page5",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Progressive",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c62453e?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
        {
          type: "object",
          key: "page6",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Editorial Illustration",
            },
            {
              type: "page",
              key: "pagepath",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661801cbd2970002c624541?alt=media&timestamp=1719483639150",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    const firstImageItem = this.castToObject<ISliderData[]>("pages").find(item => item.image);
    this.setComponentState("active_image", firstImageItem?.image || this.castToObject<ISliderData[]>("pages")[0]?.image);
  }
  static getName(): string {
    return "Hero Section 7";
  }
  render() {
    const handleMouseOver = (image: TypeMediaInputValue) => {
      this.setComponentState("active_image", image);
    };

    const image = this.getComponentState("active_image");
    
    const imageWithSettings = image?.type === "video" ? {
      ...image,
      settings: {
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
      }
    } : image;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("content")} ${!image && this.decorateCSS("without-image")}`}>
            <div className={this.decorateCSS("items")}>
              {this.castToObject<ISliderData[]>("pages")
                .filter((item: ISliderData) => item.image && ((item.image.type === "image" || item.image.type === "video") && item.image.url))
                .map((item: ISliderData, index: number) => (
                <ComposerLink path={item.pagepath} key={index}>
                  <Base.H2
                    onMouseOver={() => handleMouseOver(item.image)}
                    className={`${this.decorateCSS("text")} ${image && item.image && image === item.image ? this.decorateCSS("active") : ""}`}
                  >
                    {item.title}
                  </Base.H2>
                </ComposerLink>
              ))}
            </div>
            {image && (
              <div className={this.decorateCSS("image-wrapper")}>
                <Base.Media
                  value={imageWithSettings}
                  className={this.decorateCSS("image")}
                />
                {this.getPropValue("overlay") && image && typeof image === "object" && (image?.type === "image" || image?.type === "video") && image?.url && (
                  <div className={this.decorateCSS("overlay")} />
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection7;

