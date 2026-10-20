import * as React from "react";
import styles from "./hero-section19.module.scss";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Item = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  overlay: boolean;
  button: INPUTS.CastedButton;
};

const item = (subtitle: string, title: string, mediaUrl: string, buttonText: string): TypeUsableComponentProps => ({
  type: "object",
  key: "item",
  displayer: "Item",
  value: [
    {
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
    },
    {
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: subtitle,
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: title,
    },
    {
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    },
    {
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: mediaUrl,
      },
    },
    {
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    },
    INPUTS.BUTTON("button", "Button", buttonText, "", null, null, "Primary"),
  ],
});

class HeroSection19 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      additionalParams: {
        maxElementCount: 4,
      },
      value: [
        item("MATTIS LAOREET SAPIEN", "Porta Consectetur Imperdiet Frigilla", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f79?alt=media&timestamp=1719483639150", "READ MORE"),
        item("SEMPER", "Feugiat Scelerisque Imperdiet", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f78?alt=media&timestamp=1719483639150", "READ MORE"),
        item("SEMPER", "Adipiscing Sodales", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7a?alt=media&timestamp=1719483639150", "READ MORE"),
        item("", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7b?alt=media&timestamp=1719483639150", ""),
      ],
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Hero Section 19";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  renderItem(item: Item, className: string = "") {
    const mediaExist = this.hasMedia(item.media);
    const logoExist = this.hasMedia(item.logo);
    const subtitleExist = this.castToString(item.subtitle);
    const titleExist = this.castToString(item.title);
    const descriptionExist = this.castToString(item.description);
    const buttonTextExist = this.castToString(item.button?.text);
    const contentExist = logoExist || subtitleExist || titleExist || descriptionExist || buttonTextExist;

    return (
      <div className={`${this.decorateCSS("item")} ${className}`}>
        {mediaExist && (
          <div className={this.decorateCSS("background-image")}>
            <Base.Media value={this.withVideoSettings(item.media)} className={this.decorateCSS("image")} />
            {item.overlay && <div className={this.decorateCSS("overlay")} />}
          </div>
        )}
        {contentExist && (
          <Base.VerticalContent className={`${this.decorateCSS("content")} ${!mediaExist ? this.decorateCSS("no-bg-img") : ""}`}>
            {logoExist && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
            {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.SectionSubTitle>}
            {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
            {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
            {buttonTextExist && (
              <ComposerLink path={item.button.url}>
                <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                  <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>
                </Base.Button>
              </ComposerLink>
            )}
          </Base.VerticalContent>
        )}
      </div>
    );
  }

  render() {
    const items = this.castToObject<Item[]>("items");
    const [itemLeft, itemRightTop, itemBottomLeft, itemBottomRight] = items;
    const animationActive = this.getPropValue("animation");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${animationActive ? this.decorateCSS("has-animation") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemLeft && <div className={this.decorateCSS("left")}>{this.renderItem(itemLeft)}</div>}

          {itemRightTop && (
            <div className={this.decorateCSS("right")}>
              <div className={this.decorateCSS("top")}>{this.renderItem(itemRightTop)}</div>

              {(itemBottomLeft || itemBottomRight) && (
                <div className={this.decorateCSS("bottom")}>
                  {itemBottomLeft && this.renderItem(itemBottomLeft, this.decorateCSS("bottom-left"))}
                  {itemBottomRight && this.renderItem(itemBottomRight, this.decorateCSS("bottom-right"))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection19;
