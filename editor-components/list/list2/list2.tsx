import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardItem = {
  page: string;
  image: string;
  count: number;
  count_text: React.JSX.Element;
  card_text: React.JSX.Element;
};

class List2 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

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
      value:
        "Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories.",
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
    })
    this.addProp({
      type: "number",
      key: "imageCount",
      displayer: "More Image Count",
      value: 3
    })
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "page",
              displayer: "Navigate",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414e?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 18,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Nightlife",
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
              key: "page",
              displayer: "Navigate",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414f?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 24,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Shops",
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
              key: "page",
              displayer: "Navigate",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414d?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 19,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Restaurant",
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
              key: "page",
              displayer: "Navigate",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414b?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 35,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "Outdoor Activities",
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
              key: "page",
              displayer: "Navigate",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617b82bd2970002c62410f?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 9,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
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
              key: "page",
              displayer: "Navigate",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image of Card",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414c?alt=media&timestamp=1719483639150",
            },
            {
              type: "number",
              key: "count",
              displayer: "Count",
              value: 32,
            },
            {
              type: "string",
              key: "count_text",
              displayer: "Count Text",
              value: "Listings",
            },
            {
              type: "string",
              key: "card_text",
              displayer: "Card Text",
              value: "New York",
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "View More Categories", "", null, null, "Primary"));
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
    this.setComponentState("moreImages", 0);
    ;
  }

  static getName(): string {
    return "List 2";
  }
  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))
  };

  render() {
    if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

    const cards = this.castToObject<CardItem[]>("cards");
    const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description"))) && (
              <Base.VerticalContent className={this.decorateCSS("up-container")}>
                {this.castToString(this.getPropValue("title")) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {this.castToString(this.getPropValue("description")) && (
                  <Base.SectionDescription className={this.decorateCSS("description")} >
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            {(cards.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("cards-box")}
                gridCount={{
                  pc: this.getPropValue("itemCount"),
                  tablet: 2,
                  phone: 1,
                }}
              >
                {cards.slice(0, this.getComponentState("imageCount")).map((item: CardItem, index: number) => (
                  <ComposerLink key={index} path={item.page}>
                    <div
                      className={this.decorateCSS("card")}
                      data-animation={this.getPropValue("hoverAnimation").join(" ")}
                    >
                      {item.image && (
                        <img className={this.decorateCSS("card-image")} src={item.image} alt={item.image} />
                      )}
                      <div className={this.decorateCSS("overlay")}></div>
                      <div className={this.decorateCSS("overlay2")}></div>
                      <div className={this.decorateCSS("card-content")}>
                        <div className={this.decorateCSS("stick")}></div>
                        {(this.castToString(item.card_text) || item.count || this.castToString(item.count_text)) && (
                          <div className={this.decorateCSS("labels")}>
                            {this.castToString(item.card_text) && (
                              <div className={this.decorateCSS("first")}>
                                {item.card_text}
                              </div>
                            )}
                            {(item.count || this.castToString(item.count_text)) && (
                              <div className={this.decorateCSS("second")}>
                                {item.count && (
                                  <div className={this.decorateCSS("second-text")}>
                                    {item.count}
                                  </div>
                                )}
                                {this.castToString(item.count_text) && (
                                  <div className={this.decorateCSS("second-count")}>
                                    {item.count_text}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </ComposerLink>
                ))}
              </Base.ListGrid>
            )}
            {((this.getComponentState("imageCount") < cards.length) && this.castToString(buttonType.text)) && (
              <ComposerLink path={buttonType.url}>
                <div className={this.decorateCSS("button-wrapper")}>
                  <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                    {buttonType.text}
                  </Base.Button>
                </div>
              </ComposerLink>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
