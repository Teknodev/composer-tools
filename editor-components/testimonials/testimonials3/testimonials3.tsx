import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials3.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  star: number;
  text: React.JSX.Element;
  author: {
    image: TypeMediaInputValue;
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials3Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "componentBackground",
      displayer: "Background Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: null,
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
      value: "295+ Customers gave their opinion",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
    this.addProp({
      type: "media",
      key: "starIcon",
      displayer: "Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaStar" },
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card1",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "string",
              key: "text",
              value: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
              displayer: "Text",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf056?alt=media&timestamp=1719584962573" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "string",
              key: "text",
              value: "Pagedone has made it possible for me to stay on top of my portolio and make informed decisions quickly and easily.",
              displayer: "Text",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf055?alt=media&timestamp=1719584962573" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card3",
          displayer: "Card",
          value: [
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Count",
            },
            {
              type: "string",
              key: "text",
              value: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
              displayer: "Text",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "media",
                  key: "image",
                  displayer: "Media",
                  additionalParams: { availableTypes: ["image", "icon"] },
                  value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf054?alt=media&timestamp=1719584962573" },
                },
                {
                  type: "string",
                  key: "name",
                  displayer: "Name",
                  value: "",
                },
                {
                  type: "string",
                  key: "position",
                  displayer: "Position",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Testimonials 3";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });
    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    const card = this.castToObject<Item[]>("card-items");
    const starIcon = this.getPropValue("starIcon") as TypeMediaInputValue;
    const starIconExist = starIcon && (starIcon.type === "icon" ? starIcon.name : starIcon.url);
    const componentBackground = this.getPropValue("componentBackground") as TypeMediaInputValue;
    const componentBgExist = componentBackground && (componentBackground.type === "icon" ? componentBackground.name : componentBackground.url);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {componentBgExist && (
          <Base.Media
            value={componentBackground}
            className={this.decorateCSS("component-background")}
          />
        )}
        {componentBgExist && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnyTopContent && (
            <Base.VerticalContent className={this.decorateCSS("top-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
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
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid className={this.decorateCSS("card-container")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: this.getPropValue("itemCount"), phone: 1 }}>
            {card.map((item: Item, index: number) => {
              const imageExist = item.author && item.author.image && (item.author.image.type === "icon" ? item.author.image.name : item.author.image.url);
              const nameExist = item.author && this.castToString(item.author.name);
              const positionExist = item.author && this.castToString(item.author.position);
              const authorExist = item.author && (imageExist || nameExist || positionExist);
              return (
                <Base.VerticalContent className={this.decorateCSS("card")} key={index}>
                  {(item.star > 0 && starIconExist) && (
                    <div className={this.decorateCSS("stars")}>
                      {[...Array(Number(item.star))].map((_: unknown, starIndex: number) => (
                        <Base.Media value={starIcon} className={this.decorateCSS("icon")} key={starIndex} />
                      ))}
                    </div>
                  )}
                  {this.castToString(item.text) && <Base.P className={this.decorateCSS("item-text")}>{item.text}</Base.P>}
                  {authorExist && (
                    <Base.VerticalContent className={this.decorateCSS("author-container")}>
                      {imageExist && (
                        <Base.Media
                          className={`${this.decorateCSS("author-image")} ${item.author.image.type === "icon" ? this.decorateCSS("author-image-icon") : ""}`}
                          value={item.author.image}
                        />
                      )}
                      {(nameExist || positionExist) && (
                        <Base.VerticalContent className={this.decorateCSS("author-details")}>
                          {nameExist && (
                            <Base.P className={this.decorateCSS("author-name")}>
                              {item.author.name}
                            </Base.P>
                          )}
                          {positionExist && (
                            <Base.P className={this.decorateCSS("author-position")}>
                              {item.author.position}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      )}
                    </Base.VerticalContent>
                  )}
                </Base.VerticalContent>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials3Page;
