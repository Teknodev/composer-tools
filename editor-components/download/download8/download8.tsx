import * as React from "react";
import styles from "./download8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type ListItem = {
  itemText: string;
  itemIcon: TypeMediaInputValue;
};

type CardText = {
  cardSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
};

class Download8 extends BaseDownload {
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436af8368c3c2002cd2fa67?alt=media&timestamp=1719564433794",
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
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "If you want to download it",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "By offering a clear call-to-action, businesses and developers can increase to chances that users will download and use their product.",
    });

    this.addProp({
      type: "object",
      key: "cardText",
      displayer: "Card Text",
      value: [
        {
          type: "string",
          key: "cardSubtitle",
          displayer: "Card Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "cardTitle",
          displayer: "Card Title",
          value: "Download now by clicking to button",
        },
        {
          type: "string",
          key: "cardDescription",
          displayer: "Card Description",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "list",
      displayer: "List",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "App Store",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaApple",
              },
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "Google Play",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaGooglePlay",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "FaAndroid", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
      ],
      additionalParams: {
        maxElementCount: 4,
      },
    });
  }

  static getName(): string {
    return "Download 8";
  }

  render() {
    const background = this.castToObject<Background>("media");
    const backgroundImage = background?.media;
    const overlay = background?.overlay;
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;
    const cardText = this.castToObject<CardText>("cardText");
    const cardSubtitle = this.castToString(cardText?.cardSubtitle);
    const cardTitle = this.castToString(cardText?.cardTitle);
    const cardDescription = this.castToString(cardText?.cardDescription);
    const listExist = this.castToObject<ListItem[]>("list").length > 0;
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${backgroundImage && this.decorateCSS("with-image")}`}>
        <div className={this.decorateCSS("page")}>
          {backgroundImage && (
            <div className={this.decorateCSS("image-child")}>
              {overlay && <div className={this.decorateCSS("overlay")}></div>}
              <Base.Media value={backgroundImage} className={this.decorateCSS("background-image")} />
            </div>
          )}
          <Base.MaxContent className={`${this.decorateCSS("max-content")} ${backgroundImage && this.decorateCSS("with-image")}`}>
            {hasContent && (
              <Base.VerticalContent id={"left-content"} className={`${this.decorateCSS("left-content")} ${backgroundImage && this.decorateCSS("center")}`}>
                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
          </Base.MaxContent>
          <div id={"right-content"} className={this.decorateCSS("right-content")}>
            <Base.VerticalContent className={this.decorateCSS("card")}>
              <Base.VerticalContent className={this.decorateCSS("card-up")}>
                {cardSubtitle && <Base.SectionSubTitle className={`${this.decorateCSS("card-subtitle")} ${alignment === "center" && this.decorateCSS("center-badge")}`}>{cardSubtitle}</Base.SectionSubTitle>}
                {cardTitle && <Base.H3 className={this.decorateCSS("cardTitle")}>{cardTitle}</Base.H3>}
                {cardDescription && <Base.SectionDescription className={this.decorateCSS("cardDescription")}>{cardDescription}</Base.SectionDescription>}
                {listExist && (
                  <Base.VerticalContent className={this.decorateCSS("list-group")}>
                    {this.castToObject<ListItem[]>("list").map((item: ListItem, index: number) => {
                      const itemTextExist = this.castToString(item.itemText);
                      return (itemTextExist || item.itemIcon) && (
                        <Base.Row key={`list-item-${index}`} className={this.decorateCSS("list-element")}>
                          {item.itemIcon && <Base.Media value={item.itemIcon} className={this.decorateCSS("icon")} />}
                          {itemTextExist && <Base.P className={this.decorateCSS("text")}>{item.itemText}</Base.P>}
                        </Base.Row>
                      );
                    })}
                  </Base.VerticalContent>
                )}
              </Base.VerticalContent>
              {this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0 && (
                <Base.Row className={this.decorateCSS("card-down")}>
                  <div className={this.decorateCSS("buttons-container")}>
                    {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      const iconExist = item.icon && item.icon.name;
                      const imageExist = item.image && item.image.url;
                      return (buttonTextExist || iconExist || imageExist) && (
                        <ComposerLink key={`dw-8-btn-${index}`} path={item.url}>
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
                </Base.Row>
              )}
            </Base.VerticalContent>
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default Download8;