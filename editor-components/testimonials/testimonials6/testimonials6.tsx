import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  star: React.JSX.Element;
  text: React.JSX.Element;
  image: TypeMediaInputValue;
  author: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
  line: boolean;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials6Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
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
      value: "What our customers say about <span style='color: var(--composer-primary-color)'>Pagedone</span>",
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
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "media",
      key: "starIcon",
      displayer: "Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaStar" },
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card1",
          displayer: "Card 1",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "string",
              key: "star",
              value: "4.9",
              displayer: "Rating",
            },
            {
              type: "string",
              key: "text",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Text",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1719483639147",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Clover Ruth",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Design Lead",
                  displayer: "Position",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card2",
          displayer: "Card 2",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "string",
              key: "star",
              value: "4.9",
              displayer: "Rating",
            },
            {
              type: "string",
              key: "text",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Text",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64493501f72de2002caa9a46?alt=media&timestamp=1719483639147",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Jaylyn Kaleigh",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Product Designer",
                  displayer: "Position",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card3",
          displayer: "Card 3",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "string",
              key: "star",
              value: "4.9",
              displayer: "Rating",
            },
            {
              type: "string",
              key: "text",
              value: "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
              displayer: "Text",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449364af72de2002caa9ad0?alt=media&timestamp=1719483639147",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Candyce Jeannine",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "CEO",
                  displayer: "Position",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card4",
          displayer: "Card 4",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "string",
              key: "star",
              value: "4.9",
              displayer: "Rating",
            },
            {
              type: "string",
              key: "text",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Text",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1719483639147",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Clover Ruth",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Design Lead",
                  displayer: "Position",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card5",
          displayer: "Card 5",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "string",
              key: "star",
              value: "4.9",
              displayer: "Rating",
            },
            {
              type: "string",
              key: "text",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Text",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64493501f72de2002caa9a46?alt=media&timestamp=1719483639147",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Jaylyn Kaleigh",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "Product Designer",
                  displayer: "Position",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "card6",
          displayer: "Card 6",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "string",
              key: "star",
              value: "4.9",
              displayer: "Rating",
            },
            {
              type: "string",
              key: "text",
              value: "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
              displayer: "Text",
            },
            {
              type: "media",
              key: "image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449364af72de2002caa9ad0?alt=media&timestamp=1719483639147",
              },
              displayer: "Media",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                {
                  type: "string",
                  key: "name",
                  value: "Candyce Jeannine",
                  displayer: "Name",
                },
                {
                  type: "string",
                  key: "position",
                  value: "CEO",
                  displayer: "Position",
                },
              ],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Testimonials 6";
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

    const cards = this.castToObject<Item[]>("cards");
    const starIcon = this.getPropValue("starIcon") as TypeMediaInputValue;
    const starIconExist = starIcon && (starIcon.type === "icon" ? starIcon.name : starIcon.url);

    return (
      <Base.Container className={this.decorateCSS("container")}>
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
        </Base.MaxContent>
        <Base.MaxContent className={this.decorateCSS("cards-wrapper")}>
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: this.getPropValue("itemCount"), phone: 1 }} className={this.decorateCSS("card-container")}>
            {cards.map((item: Item, index: number) => (
              <div key={index} className={this.decorateCSS("card")}>
                {(starIconExist || this.castToString(item.star)) && (
                  <div className={this.decorateCSS("star")}>
                    {starIconExist && <Base.Media value={starIcon} className={this.decorateCSS("icon")} />}
                    {this.castToString(item.star) && <Base.P className={this.decorateCSS("rating")}>{item.star}</Base.P>}
                  </div>
                )}
                {this.castToString(item.text) && (
                  <Base.P className={this.decorateCSS("item-text")}>{item.text}</Base.P>
                )}
                {item.line && <div className={this.decorateCSS("line")}></div>}
                {(item.image || (item.author && (this.castToString(item.author.name) || this.castToString(item.author.position)))) && (
                  <div className={this.decorateCSS("bottom-container")}>
                    {item.image && (
                      <Base.Media value={item.image} className={this.decorateCSS("image")} />
                    )}
                    {item.author && (this.castToString(item.author.name) || this.castToString(item.author.position)) && (
                      <Base.VerticalContent className={this.decorateCSS("person")}>
                        {this.castToString(item.author.name) && (
                          <Base.P className={this.decorateCSS("item-name")}>{item.author.name}</Base.P>
                        )}
                        {this.castToString(item.author.position) && (
                          <Base.P className={this.decorateCSS("item-subtitle")}>{item.author.position}</Base.P>
                        )}
                      </Base.VerticalContent>
                    )}
                  </div>
                )}
              </div>
            ))}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials6Page;
