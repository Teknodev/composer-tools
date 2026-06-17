import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature19.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

interface ListItem {
  title: string;
  text: string;
  icon: TypeMediaInputValue;
}

type MediaCard = {
  media: TypeMediaInputValue;
  overlay: boolean;
};
class Feature19 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "A Better Life",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get your house in order with our smart cleaning service!",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "A better way to get your home, rental, or office clean.",
    });
    this.addProp({
      type: "object",
      key: "mediaCard",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bad1bd2970002c628768?alt=media&timestamp=1719564173697",
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
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Smart & Creative",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "Each member of our team has at least 5 years of experience in the industry.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaTwitter"
              },
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Distributed",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "More than 2 500 private and corporate facilities were cleaned this year.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaFacebook"
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
        INPUTS.BUTTON("button", "Button", "Get In Tocuh!", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });

  }
  static getName(): string {
    return "Feature 19";
  }

  render() {
    const subTitle = this.getPropValue("subtitle");
    const mediaCard = this.castToObject<MediaCard>("mediaCard");
    const media = mediaCard.media;
    const overlay = !!mediaCard.overlay;
    const mediaExist = !!(media && media.url);
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons && buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });
    const list = this.castToObject<ListItem[]>("items");
    const isAnyContentExists =
      this.castToString(subTitle) ||
      this.castToString(title) ||
      this.castToString(description) ||
      hasValidButtons ||
      list.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isAnyContentExists && (
            <Base.VerticalContent className={this.decorateCSS("content")}>
              {(this.castToString(subTitle) ||
                this.castToString(title) ||
                this.castToString(description)) && (
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {this.castToString(subTitle) && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {subTitle}
                      </Base.SectionSubTitle>
                    )}
                    {this.castToString(title) && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {this.castToString(description) && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}

              {list.length > 0 && (
                <div className={this.decorateCSS("item-block")}>
                  {list.map((listItem: any, index: number) => (
                    <Base.VerticalContent className={this.decorateCSS("list-item-content")}>
                      <Base.Row className={this.decorateCSS("item-content-top")}>
                        {listItem.icon?.name && (
                          <Base.Media
                            value={listItem.icon}
                            className={this.decorateCSS("icon")}
                          />
                        )}
                        {this.castToString(listItem.title) && (
                          <Base.H5 className={this.decorateCSS("list-item-title")}>
                            {listItem.title}
                          </Base.H5>
                        )}
                      </Base.Row>

                      {this.castToString(listItem.text) && (
                        <Base.P className={this.decorateCSS("texts-inside")}>
                          {listItem.text}
                        </Base.P>
                      )}
                    </Base.VerticalContent>

                  ))}
                </div>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: Button, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!buttonText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                          {iconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {mediaExist && (
            <div
              className={`${this.decorateCSS("right-image")} ${!isAnyContentExists ? this.decorateCSS("no-content") : ""}`}
              data-animation={this.getPropValue("hoverAnimation").join(" ")}
              style={{ position: "relative" }}
            >
              <Base.Media value={media} className={this.decorateCSS("img")} />
              {overlay && <div className={this.decorateCSS("overlay")} />}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature19;
