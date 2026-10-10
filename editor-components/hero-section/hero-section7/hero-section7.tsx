import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section7.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ISliderData = {
  title: React.JSX.Element;
  image: TypeMediaInputValue;
  url: string;
};

class HeroSection7 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
    });
    this.addProp({
      type: "string",
      key: "subtitle",
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
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "pages",
      displayer: "Pages",
      value: [
        {
          type: "object",
          key: "page",
          displayer: "Page",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Black & White II",
            },
            {
              type: "page",
              key: "url",
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
          key: "page",
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
              key: "url",
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
          key: "page",
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
              key: "url",
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
          key: "page",
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
              key: "url",
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
          key: "page",
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
              key: "url",
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
          key: "page",
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
              key: "url",
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

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    const firstImageItem = this.castToObject<ISliderData[]>("pages").find(item => (item.image as any)?.url);
    this.setComponentState("active_image", firstImageItem?.image || this.castToObject<ISliderData[]>("pages")[0]?.image);
  }
  static getName(): string {
    return "Hero Section 7";
  }
  render() {
    const handleMouseOver = (image: TypeMediaInputValue) => {
      this.setComponentState("active_image", image);
    };

    const activeImage = this.getComponentState("active_image");
    const image = activeImage?.url ? activeImage : null;
    const logo = this.getPropValue("logo");
    const hasLogo = !!(logo?.url || logo?.name);
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("header_title");
    const description = this.getPropValue("description");
    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const hasHeader = hasLogo || isSubtitleExist || isTitleExist || isDescriptionExist;
    const animation = this.getPropValue("animation");

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
          <div className={`${this.decorateCSS("content")} ${!image ? this.decorateCSS("without-image") : ""} ${!animation ? this.decorateCSS("no-animation") : ""}`}>
            <div className={this.decorateCSS("items")}>
              {hasHeader && (
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {hasLogo && <Base.Media value={logo} className={this.decorateCSS("logo")} />}
                  {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                  {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
                </Base.VerticalContent>
              )}
              {this.castToObject<ISliderData[]>("pages")
                .map((item: ISliderData, index: number) => this.castToString(item.title) && (
                <ComposerLink path={item.url} key={index}>
                  <Base.H2
                    onMouseOver={() => (item.image as any)?.url && handleMouseOver(item.image)}
                    className={`${this.decorateCSS("text")} ${image && (item.image as any)?.url && image.url === (item.image as any).url ? this.decorateCSS("active") : ""}`}
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
                {this.getPropValue("overlay") && (
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

