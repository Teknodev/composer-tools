import React from "react";
import styles from "./download9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type TextContent = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type HoverTextContent = {
  hoverSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
};

class Download9 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c88ebd2970002c629244?alt=media&timestamp=1719564433798",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "textContent",
      displayer: "Text Content",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Let's start now!",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "If you want to download it",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "It can be a part of a broader call-to-action that highlights the value and benefits of the product, encouraging users to take action and download it. ",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "hoverTextContent",
      displayer: "Hover Text Content",
      value: [
        {
          type: "string",
          key: "hoverSubtitle",
          displayer: "Hover Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "cardTitle",
          displayer: "Hover Title",
          value: "Download now by clicking the button",
        },
        {
          type: "string",
          key: "cardDescription",
          displayer: "Hover Description",
          value: "By using clear and concise language, and providing a simple and easy-to-use download button, businesses and developers can increase the chances of users downloading and using their product.",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download for iOS", "", "FaGooglePlay", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download 9";
  }



  render() {
    const background = this.castToObject<Background>("media");
    const imageExist = background?.media;
    const overlay = background?.overlay;
    const textContent = this.castToObject<TextContent>("textContent");
    const subtitle = textContent?.subtitle;
    const title = textContent?.title;
    const description = textContent?.description;
    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const hasTextContent = subtitleExist || titleExist || descriptionExist;
    const hoverTextContent = this.castToObject<HoverTextContent>("hoverTextContent");
    const hoverSubtitle = hoverTextContent?.hoverSubtitle;
    const cardTitle = hoverTextContent?.cardTitle;
    const cardDescription = hoverTextContent?.cardDescription;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hoverSubtitleExist = this.castToString(hoverSubtitle);
    const cardTitleExist = this.castToString(cardTitle);
    const cardDescriptionExist = this.castToString(cardDescription);
    const hasHoverTextContent = hoverSubtitleExist || cardTitleExist || cardDescriptionExist || buttons.length > 0;
    const subtitleType = Base.getSectionSubTitleType();
    const hideBadge = imageExist && subtitleType === "badge";

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${imageExist ? this.decorateCSS("has-image") : ""}`}>
        <div className={`${this.decorateCSS("page")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>
          {imageExist && <Base.Media value={imageExist} className={this.decorateCSS("background-image")} />}
          {overlay && imageExist && <div className={this.decorateCSS("overlay")}></div>}
          <Base.MaxContent className={`${this.decorateCSS("max-content")} ${imageExist && this.decorateCSS("image")}`}>
            {hasTextContent && (
              <Base.VerticalContent className={this.decorateCSS("middle-container")}>
                {subtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${imageExist && this.decorateCSS("with-image")} ${hideBadge && this.decorateCSS("no-badge")}`}>{subtitle}</Base.SectionSubTitle>}
                {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("with-image")}`}>{title}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("with-image")}`}>{description}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
            {hasHoverTextContent && (
              <Base.VerticalContent className={`${this.decorateCSS("hover-container")} ${Base.getContentAlignment() === "left" && this.decorateCSS("left")}`}>
                {hoverSubtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("hover-subtitle")}`}>{hoverSubtitle}</Base.SectionSubTitle>}
                {cardTitleExist && <Base.SectionTitle className={this.decorateCSS("card-title")}>{cardTitle}</Base.SectionTitle>}
                {cardDescriptionExist && <Base.SectionDescription className={this.decorateCSS("card-description")}>{cardDescription}</Base.SectionDescription>}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("buttons-container")}>
                    {buttons.map((item: INPUTS.CastedButton, index: number) => {
                      const buttonTextExist = this.castToString(item?.text);
                      const iconExist = item.icon && item.icon.name;
                      const imageExist = item.image && item.image.url;
                      return (buttonTextExist || iconExist || imageExist) && (
                        <ComposerLink key={`dw-9-btn-${index}`} path={item.url}>
                          {imageExist ? (
                            <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                          ) : (
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                              {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Download9;