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
  count: JSX.Element;
  label: JSX.Element;
  text: JSX.Element;
  buttons: CardButton[];
};

type CountSettings = {
  itemCount: number;
  mediaCountInitial: number;
  moreMediaCount: number;
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
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", null, null, null, "Primary")
      ],
    });

    this.addProp({
      type: "object",
      key: "countSettings",
      displayer: "Count Settings",
      value: [
        {
          type: "number",
          key: "itemCount",
          displayer: "Item Count in a Row",
          value: 3,
        },
        {
          type: "number",
          key: "mediaCountInitial",
          displayer: "Media Count Initial",
          value: 3
        },
        {
          type: "number",
          key: "moreMediaCount",
          displayer: "More Media Count",
          value: 3
        },
      ]
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
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
      key: "line",
      displayer: "Line",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "View More Categories", "", null, null, "Primary"),
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
    const countSettings = this.castToObject<CountSettings>("countSettings");
    const currentCount = countSettings.mediaCountInitial + this.getComponentState("moreImages");
    if (currentCount < cards.length) {
      if (e && e.preventDefault) e.preventDefault();
      this.setComponentState("moreImages", this.getComponentState("moreImages") + countSettings.moreMediaCount);
    }
  };

  render() {
    const countSettings = this.castToObject<CountSettings>("countSettings");
    const currentCount = countSettings.mediaCountInitial + this.getComponentState("moreImages");

    const cards = this.castToObject<CardItem[]>("cards");
    const headerButtons = this.castToObject<CardButton[]>("headerButtons") || [];
    const footerButtons = this.castToObject<CardButton[]>("buttons") || [];
    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const imageOverlay = this.getPropValue("overlay");
    const line = this.getPropValue("line");

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
                {headerButtons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {headerButtons.map((btn: CardButton, btnIndex: number) => {
                      const buttonText = this.castToString(btn.text);
                      const iconMedia = btn.icon as TypeMediaInputValue;
                      const iconExist = iconMedia && iconMedia.type === "icon" && iconMedia.name;
                      if (!buttonText && !iconExist) return null;
                      return (
                        <ComposerLink key={btnIndex} path={btn.url}>
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
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {(cards.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("cards-box")}
                gridCount={{
                  pc: countSettings.itemCount,
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
                  const cardButtons = item.buttons || [];
                  const hasValidCardButtons = cardButtons.some((btn: CardButton) => {
                    const iconMedia = btn.icon as TypeMediaInputValue;
                    return this.castToString(btn.text) || (iconMedia && iconMedia.type === "icon" && iconMedia.name);
                  });
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
                          {line && <div className={this.decorateCSS("stick")}></div>}
                          <div className={this.decorateCSS("category")}>
                            {this.castToString(item.text) && (
                              <Base.H5 className={this.decorateCSS("category-name")}>
                                {item.text}
                              </Base.H5>
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
                        {hasValidCardButtons && (
                          <div className={this.decorateCSS("card-button-container")}>
                            {cardButtons.map((btn: CardButton, btnIndex: number) => {
                              const btnText = this.castToString(btn.text);
                              const btnIconMedia = btn.icon as TypeMediaInputValue;
                              const btnIconExist = btnIconMedia && btnIconMedia.type === "icon" && btnIconMedia.name;
                              if (!btnText && !btnIconExist) return null;
                              return (
                                <ComposerLink key={btnIndex} path={btn.url}>
                                  <Base.Button buttonType={btn.type} className={this.decorateCSS("card-button")}>
                                    {btnText && <Base.P className={this.decorateCSS("card-button-text")}>{btn.text}</Base.P>}
                                    {btnIconExist && <Base.Media className={this.decorateCSS("card-button-icon")} value={btnIconMedia} />}
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </ComposerLink>
                  );
                })}
              </Base.ListGrid>
            )}
            {footerButtons?.length > 0 && (
              <div className={this.decorateCSS("button-container")}>
                {footerButtons.map((btn: CardButton, btnIndex: number) => {
                  const buttonText = this.castToString(btn.text);
                  const iconMedia = btn.icon as TypeMediaInputValue;
                  const iconExist = iconMedia && iconMedia.type === "icon" && iconMedia.name;
                  if (!buttonText && !iconExist) return null;

                  const isAllDisplayed = currentCount >= cards.length;
                  const linkUrl = isAllDisplayed ? btn.url : "";

                  return (
                    <ComposerLink key={btnIndex} path={linkUrl}>
                      <Base.Button buttonType={btn.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick}>
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
                  );
                })}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
