import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  name: React.JSX.Element;
  position: React.JSX.Element;
  starCount: number;
  text: React.JSX.Element;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type BackgroundObj = {
  media: TypeMediaInputValue;
  overlayActive: boolean;
};

class Testimonials11Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "componentBackground",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67239fe77acba6002c5d6377?alt=media" },
        },
        {
          type: "boolean",
          key: "overlayActive",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "backgroundText",
      displayer: "Background Text",
      value: "testimonials",
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
      value: "Testimonials",
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
        INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
      ],
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "item1",
          displayer: "Item 1",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623daf?alt=media&timestamp=1719483639150" },
            },
            { type: "string", key: "name", displayer: "Name", value: "Sarah Lewin" },
            { type: "string", key: "position", displayer: "Position", value: "" },
            { type: "number", key: "starCount", displayer: "Star Count", value: 5 },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
        {
          type: "object",
          key: "item2",
          displayer: "Item 2",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db0?alt=media&timestamp=1719483639150" },
            },
            { type: "string", key: "name", displayer: "Name", value: "Gregory Tabot" },
            { type: "string", key: "position", displayer: "Position", value: "" },
            { type: "number", key: "starCount", displayer: "Star Count", value: 5 },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "The principal element of Suprematism in painting, as in architecture, is its liberation from all social or materialist tendencies. Through Suprematism, art comes into its pure and unpolluted form.",
            },
          ],
        },
        {
          type: "object",
          key: "item3",
          displayer: "Item 3",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150" },
            },
            { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
            { type: "string", key: "position", displayer: "Position", value: "" },
            { type: "number", key: "starCount", displayer: "Star Count", value: 5 },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
        {
          type: "object",
          key: "item4",
          displayer: "Item 4",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150" },
            },
            { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
            { type: "string", key: "position", displayer: "Position", value: "" },
            { type: "number", key: "starCount", displayer: "Star Count", value: 5 },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
        {
          type: "object",
          key: "item5",
          displayer: "Item 5",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150" },
            },
            { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
            { type: "string", key: "position", displayer: "Position", value: "" },
            { type: "number", key: "starCount", displayer: "Star Count", value: 5 },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
        {
          type: "object",
          key: "item6",
          displayer: "Item 6",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617822bd2970002c623db1?alt=media&timestamp=1719483639150" },
            },
            { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
            { type: "string", key: "position", displayer: "Position", value: "" },
            { type: "number", key: "starCount", displayer: "Star Count", value: 5 },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "starIcon",
      displayer: "Star Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaStar" },
    });
    this.addProp({
      type: "media",
      key: "quoteIcon",
      displayer: "Quote Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaQuoteRight" },
    });
    this.addProp({
      type: "media",
      key: "bgQuoteStartIcon",
      displayer: "Background Top Quote Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "RiDoubleQuotesL" },
    });
    this.addProp({
      type: "media",
      key: "bgQuoteEndIcon",
      displayer: "Background Bottom Quote Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "RiDoubleQuotesR" },
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
  }

  static getName(): string {
    return "Testimonials 11";
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

    const backgroundText = this.castToString(this.getPropValue("backgroundText"));
    const backgroundObj = this.castToObject<BackgroundObj>("componentBackground");
    const coverMedia = backgroundObj.media;
    const coverImage = coverMedia && (coverMedia.type === "image" ? coverMedia.url : undefined);
    const coverVideo = coverMedia && (coverMedia.type === "video" ? coverMedia.url : undefined);
    const coverMediaExist = coverMedia && coverMedia.url;
    const overlayActive = backgroundObj.overlayActive;
    const cardList = this.castToObject<Item[]>("items");
    const starIconVal = this.getPropValue("starIcon") as TypeMediaInputValue;
    const starIconExist = starIconVal && (starIconVal.type === "icon" ? starIconVal.name : starIconVal.url);
    const quoteIconVal = this.getPropValue("quoteIcon") as TypeMediaInputValue;
    const quoteIconExist = quoteIconVal && (quoteIconVal.type === "icon" ? quoteIconVal.name : quoteIconVal.url);
    const bgQuoteStartVal = this.getPropValue("bgQuoteStartIcon") as TypeMediaInputValue;
    const bgQuoteStartExist = bgQuoteStartVal && (bgQuoteStartVal.type === "icon" ? bgQuoteStartVal.name : bgQuoteStartVal.url);
    const bgQuoteEndVal = this.getPropValue("bgQuoteEndIcon") as TypeMediaInputValue;
    const bgQuoteEndExist = bgQuoteEndVal && (bgQuoteEndVal.type === "icon" ? bgQuoteEndVal.name : bgQuoteEndVal.url);

    const itemCount = this.getPropValue("itemCount");
    const gridCount = { phone: 1, tablet: 3, pc: itemCount };
    const midpoint = Math.ceil(cardList.length / 2);
    const topCards = cardList.slice(0, midpoint);
    const bottomCards = cardList.slice(midpoint);

    const renderCard = (item: Item, index: number) => {
      const nameExist = this.castToString(item.name);
      const positionExist = this.castToString(item.position);
      const textExist = this.castToString(item.text);
      const ratingExist = starIconExist && Number(item.starCount) > 0;
      return (
        <div key={index} className={`${this.decorateCSS("cards")}${!coverMediaExist ? ` ${this.decorateCSS("cards-no-background")}` : ""}`}>
          {quoteIconExist && (
            <div className={this.decorateCSS("card-quote")}>
              <Base.Media value={quoteIconVal} className={this.decorateCSS("card-quote-icon")} />
            </div>
          )}
          {(item.image || nameExist || positionExist || ratingExist) && (
            <div className={this.decorateCSS("card-top")}>
              {item.image && (
                <Base.Media value={item.image} className={this.decorateCSS("card-image")} />
              )}
              {(nameExist || positionExist || ratingExist) && (
                <div className={this.decorateCSS("card-top-right")}>
                  {nameExist && (
                    <Base.H6 className={this.decorateCSS("card-title")}>{item.name}</Base.H6>
                  )}
                  {positionExist && (
                    <Base.P className={this.decorateCSS("card-subtitle")}>{item.position}</Base.P>
                  )}
                  {ratingExist && (
                    <div className={this.decorateCSS("card-rating")}>
                      {[...Array(Number(item.starCount))].map((_: unknown, starIndex: number) => (
                        <Base.Media key={starIndex} value={starIconVal} className={this.decorateCSS("star-icon")} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          {textExist && (
            <Base.P className={this.decorateCSS("card-description")}>{item.text}</Base.P>
          )}
        </div>
      );
    };

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: coverImage ? `url(${coverImage})` : undefined,
        }}
      >
        {coverVideo && (
          <Base.Media
            value={coverMedia}
            className={this.decorateCSS("video-background")}
          />
        )}
        {overlayActive && coverMediaExist && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {bgQuoteStartExist && (
              <Base.Media value={bgQuoteStartVal} className={`${this.decorateCSS("bg-quote")} ${this.decorateCSS("bg-quote-start")}${coverMediaExist ? ` ${this.decorateCSS("bg-quote-with-image")}` : ""}`} />
            )}
            {hasAnyTopContent && (
              <Base.VerticalContent className={this.decorateCSS("top-content")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")}${coverMediaExist ? ` ${this.decorateCSS("subtitle-with-image")}` : ""}`}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={`${this.decorateCSS("title")}${coverMediaExist ? ` ${this.decorateCSS("title-with-image")}` : ""}`}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription className={`${this.decorateCSS("description")}${coverMediaExist ? ` ${this.decorateCSS("description-with-image")}` : ""}`}>
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
            <div className={this.decorateCSS("content")}>
              <Base.ListGrid gridCount={gridCount} className={this.decorateCSS("grid")}>
                {topCards.map((item: Item, index: number) => renderCard(item, index))}
              </Base.ListGrid>
              {backgroundText && (
                <div className={this.decorateCSS("background-text-slot")}>
                  <svg
                    className={`${this.decorateCSS("background-text")}${coverMediaExist ? ` ${this.decorateCSS("background-text-with-image")}` : ""}`}
                    viewBox="0 0 1000 140"
                    preserveAspectRatio="xMidYMid meet"
                    role="img"
                    aria-label={backgroundText}
                  >
                    <text
                      className={this.decorateCSS("background-text-value")}
                      x="500"
                      y="70"
                      textAnchor="middle"
                      dominantBaseline="central"
                      textLength="1000"
                      lengthAdjust="spacingAndGlyphs"
                    >
                      {backgroundText}
                    </text>
                  </svg>
                </div>
              )}
              {bottomCards.length > 0 && (
                <Base.ListGrid gridCount={gridCount} className={this.decorateCSS("grid")}>
                  {bottomCards.map((item: Item, index: number) => renderCard(item, midpoint + index))}
                </Base.ListGrid>
              )}
            </div>
            {bgQuoteEndExist && (
              <Base.Media value={bgQuoteEndVal} className={`${this.decorateCSS("bg-quote")} ${this.decorateCSS("bg-quote-end")}${coverMediaExist ? ` ${this.decorateCSS("bg-quote-with-image")}` : ""}`} />
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials11Page;
