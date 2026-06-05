import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Item = {
  image: TypeMediaInputValue;
  text: React.JSX.Element;
  author: {
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Sarah Lewin" },
                { type: "string", key: "position", displayer: "Position", value: "Project manager in Pixels" },
              ],
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "The principal element of Suprematism in painting, as in architecture, is its liberation from all social or materialist tendencies. Through Suprematism, art comes into its pure and unpolluted form.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Gregory Tabot" },
                { type: "string", key: "position", displayer: "Position", value: "Photographer" },
              ],
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
                { type: "string", key: "position", displayer: "Position", value: "Team lead in TBB" },
              ],
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
                { type: "string", key: "position", displayer: "Position", value: "Team lead in TBB" },
              ],
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
                { type: "string", key: "position", displayer: "Position", value: "Team lead in TBB" },
              ],
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
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Jess Simpson" },
                { type: "string", key: "position", displayer: "Position", value: "Team lead in TBB" },
              ],
            },
          ],
        },
      ],
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

    const backgroundObj = this.castToObject<BackgroundObj>("componentBackground");
    const coverMedia = backgroundObj.media;
    const coverImage = coverMedia && (coverMedia.type === "image" ? coverMedia.url : undefined);
    const coverVideo = coverMedia && (coverMedia.type === "video" ? coverMedia.url : undefined);
    const coverMediaExist = coverMedia && coverMedia.url;
    const overlayActive = backgroundObj.overlayActive;
    const cardList = this.castToObject<Item[]>("items");

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
            <Base.ListGrid gridCount={{ phone: 1, tablet: 2, pc: this.getPropValue("itemCount") }} className={this.decorateCSS("content")}>
              {cardList.map((item: Item, index: number) => (
                <div key={index} className={`${this.decorateCSS("cards")}${!coverMediaExist ? ` ${this.decorateCSS("cards-no-background")}` : ""}`}>
                  <div className={this.decorateCSS("card-top")}>
                    {item.image && (
                      <Base.Media value={item.image} className={this.decorateCSS("card-image")} />
                    )}
                    {item.author && (item.author.name || item.author.position) && (
                      <div className={this.decorateCSS("card-top-right")}>
                        {item.author.name && (
                            <Base.H6 className={this.decorateCSS("card-title")}>{item.author.name}</Base.H6>
                        )}
                        {item.author.position && (
                          <Base.P className={this.decorateCSS("card-subtitle")}>{item.author.position}</Base.P>
                        )}
                      </div>
                    )}
                  </div>
                  {item.text && (
                    <Base.P className={this.decorateCSS("card-description")}>{item.text}</Base.P>
                  )}
                </div>
              ))}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials11Page;
