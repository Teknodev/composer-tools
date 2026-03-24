import * as React from "react";
import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list2.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardButton = Omit<INPUTS.CastedButton, "icon"> & {
  icon: TypeMediaInputValue | null;
};

type CardItem = {
  url: string;
  image?: TypeMediaInputValue;
  count: React.JSX.Element;
  label: React.JSX.Element;
  text: React.JSX.Element;
};

class List2 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Explore",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Most Popular Cities/Towns",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories.",
    });
    this.addProp({
      type: "array",
      key: "headerButtons",
      displayer: "Header Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", null, null, null, "Primary")
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "number",
      key: "imageCountInitial",
      displayer: "Image Count Initial",
      value: 3
    });
    this.addProp({
      type: "number",
      key: "imageCount",
      displayer: "More Image Count",
      value: 3
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "List Item",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "List Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414e?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "18",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Nightlife",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414f?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "24",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Shops",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414d?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "19",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Restaurant",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414b?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "35",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Outdoor Activities",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "List Item",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617b82bd2970002c62410f?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "9",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Hotels",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414c?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "32",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "New York",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "View More Categories", null, null, null, "Primary")
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1", "animate3"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
    this.setComponentState("moreImages", 0);
  }

  static getName(): string {
    return "List 2";
  }

  handleButtonClick = (e: React.MouseEvent) => {
    const cards = this.castToObject<CardItem[]>("cards");
    const currentCount = this.getPropValue("imageCountInitial") + this.getComponentState("moreImages");
    if (currentCount < cards.length) {
      if (e && e.preventDefault) e.preventDefault();
      this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"));
    }
  };

  render() {
    const currentCount = this.getPropValue("imageCountInitial") + this.getComponentState("moreImages");

    const cards = this.castToObject<CardItem[]>("cards");
    const headerButtons = this.castToObject<CardButton[]>("headerButtons") || [];
    const footerButtons = this.castToObject<CardButton[]>("buttons") || [];
    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const imageOverlay = this.getPropValue("overlay");
    const showLine = this.getPropValue("showLine");

    return (
      <Base.Container className={this.decorateCSS("container")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(subtitleExist || titleExist || descriptionExist || (headerButtons?.length > 0)) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
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
                  <Base.SectionDescription className={this.decorateCSS("description")} >
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {headerButtons?.length > 0 && headerButtons.map((btn: CardButton, btnIndex: number) => {
                  const buttonText = this.castToString(btn.text);
                  const iconMedia = btn.icon as TypeMediaInputValue;
                  const iconExist = iconMedia && iconMedia.type === "icon" && iconMedia.name;
                  if (!buttonText && !iconExist) return null;
                  return (
                    <div key={btnIndex} className={this.decorateCSS("button-wrapper")}>
                      <ComposerLink path={btn.url}>
                        <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {btn.text}
                            </Base.P>
                          )}
                          {iconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={iconMedia} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  );
                })}
              </Base.VerticalContent>
            )}
            {(cards.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("cards-box")}
                gridCount={{
                  pc: this.getPropValue("itemCount"),
                  tablet: 3,
                  phone: 1,
                }}
              >
                {cards.slice(0, currentCount).map((item: CardItem, index: number) => {
                  const hasImage = !!item.image;
                  const cardClasses = [this.decorateCSS("card")];
                  if (!hasImage) {
                    cardClasses.push(this.decorateCSS("card-no-image"));
                  }
                  return (
                    <ComposerLink key={index} path={item.url}>
                      <div
                        className={cardClasses.join(" ")}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {hasImage && (
                          <div className={this.decorateCSS("image-container")}>
                            <Base.Media className={this.decorateCSS("card-image")} value={item.image} />
                            {imageOverlay && (
                              <div className={this.decorateCSS("overlay")} />
                            )}
                          </div>
                        )}
                        <div className={this.decorateCSS("overlay-gradient")}></div>
                        <div className={this.decorateCSS("card-content")}>
                          {showLine && <div className={this.decorateCSS("stick")}></div>}
                          <div className={this.decorateCSS("category")}>
                            {this.castToString(item.text) && (
                              <Base.H4 className={this.decorateCSS("category-name")}>
                                {item.text}
                              </Base.H4>
                            )}
                            {(this.castToString(item.count) || this.castToString(item.label)) && (
                              <div className={this.decorateCSS("count-badge")}>
                                {this.castToString(item.count) && (
                                  <Base.P className={this.decorateCSS("count-value")}>
                                    {item.count}
                                  </Base.P>
                                )}
                                {this.castToString(item.label) && (
                                  <Base.P className={this.decorateCSS("count-label")}>
                                    {item.label}
                                  </Base.P>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </ComposerLink>
                  );
                })}
              </Base.ListGrid>
            )}
            {footerButtons?.length > 0 && footerButtons.map((btn: CardButton, btnIndex: number) => {
              const buttonText = this.castToString(btn.text);
              const iconMedia = btn.icon as TypeMediaInputValue;
              const iconExist = iconMedia && iconMedia.type === "icon" && iconMedia.name;
              if (!buttonText && !iconExist) return null;

              const isAllDisplayed = currentCount >= cards.length;
              const linkUrl = isAllDisplayed ? btn.url : "";

              return (
                <div key={btnIndex} className={this.decorateCSS("button-wrapper")}>
                  <ComposerLink path={linkUrl}>
                    <Base.Button buttonType={btn.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                      {buttonText && (
                        <Base.P className={this.decorateCSS("button-text")}>
                          {btn.text}
                        </Base.P>
                      )}
                      {iconExist && (
                        <Base.Media className={this.decorateCSS("button-icon")} value={iconMedia} />
                      )}
                    </Base.Button>
                  </ComposerLink>
                </div>
              );
            })}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
