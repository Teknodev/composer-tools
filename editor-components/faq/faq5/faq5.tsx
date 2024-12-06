import * as React from "react";
import styles from "./faq5.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  sectionTitle: JSX.Element;
  items: Item[];
};
type Item = {
  cardIndex: JSX.Element;
  cardTitle: JSX.Element;
  description: JSX.Element;
}

class FaqMiddle extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQ",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Title",
      value: "FAQ",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title Description",
      value: "FAQ stands for Frequently Asked Questions. It is a section of a website or document where common questions and their answers are provided to help users better understand a product, service, or topic. The purpose of an FAQ section is to address common concerns and provide helpful information to users, so they can make informed decisions. ",
    });
    this.addProp({
      type: "icon",
      key: "inactiveIcon",
      displayer: "Inactive Icon",
      value: "IoIosArrowDown",
    });
    this.addProp({
      type: "icon",
      key: "activeIcon",
      displayer: "Active Icon",
      value: "IoIosArrowUp",
    });
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
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "General"
            },
            {
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
                      key: "cardIndex",
                      displayer: "Card Index",
                      value: "1"
                    },
                    {
                      type: "string",
                      key: "cardTitle",
                      displayer: "Question",
                      value:
                        "What are the shipping options available?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value: " We offer standard and express shipping options. Standard shipping usually takes 5-7 business days, while express shipping takes 1-3 business days.",
                    },
                  ]
                }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Payments"
            },
            {
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
                      key: "cardIndex",
                      displayer: "Card Index",
                      value: "1"
                    },
                    {
                      type: "string",
                      key: "cardTitle",
                      displayer: "Question",
                      value:
                        "How can I track my order?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value: "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or on the carrier's website.",
                    },
                  ]
                }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Returns"
            },
            {
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
                      key: "cardIndex",
                      displayer: "Card Index",
                      value: "1"
                    },
                    {
                      type: "string",
                      key: "cardTitle",
                      displayer: "Question",
                      value:
                        "What is your return policy?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value: "We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
                    },
                  ]
                }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Returns"
            },
            {
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
                      key: "cardIndex",
                      displayer: "Card Index",
                      value: "1"
                    },
                    {
                      type: "string",
                      key: "cardTitle",
                      displayer: "Question",
                      value:
                        "How can I contact customer support?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value: "You can contact our customer support team by email or phone. Our email address and phone number can be found on our website's contact page.",
                    },
                  ]
                }
              ]
            }
          ],
        },

      ],
    });

    this.setComponentState("activeSection", 0);
    this.setComponentState("activeCard", -1);
  }

  getName(): string {
    return "FAQ-5";
  }
  handleSection(index: number): void {
    this.setComponentState("activeSection", index);
  }
  handleCard(index: number): void {
    if (this.getComponentState("activeCard") === index) {
      this.setComponentState("activeCard", -1);
    } else {
      this.setComponentState("activeCard", index);
    }
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(this.castToString(this.getPropValue("badge")) ||
              this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title"))) && (
                <Base.VerticalContent className={this.decorateCSS("left-page")}>
                  {this.castToString(this.getPropValue("badge")) && (
                    <Base.SectionSubTitle className={this.decorateCSS("badge")}>
                      {this.getPropValue("badge")}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(this.getPropValue("subtitle")) && (
                    <Base.SectionTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionTitle>
                  )}
                  {this.castToString(this.getPropValue("title")) && (
                    <Base.SectionDescription className={this.decorateCSS("title-p")}>{this.getPropValue("title")}</Base.SectionDescription>
                  )}
                </Base.VerticalContent>
              )}
            {(cards.length > 0) && (
              <div className={this.decorateCSS("right")}>
                <div className={this.decorateCSS("section-wrapper")}>
                  {cards.map((card: Card, indexCard: any) => (
                    <div className={`${this.decorateCSS("section")} 
                          ${this.getComponentState("activeSection") === indexCard ? this.decorateCSS("active") : ""}`}
                      onClick={() => this.handleSection(indexCard)}>
                      {card.sectionTitle}
                    </div>
                  ))}
                </div>
                {(cards[this.getComponentState("activeSection")].items.length > 0) && (
                  <div className={this.decorateCSS("right-page")}>
                    <div className={this.decorateCSS("right-wrapper")} >
                      {cards[this.getComponentState("activeSection")].items.map((item: Item, index: number) => (
                        <div className={this.decorateCSS("card")} onClick={() => this.handleCard(index)}>
                          {(this.castToString(item.cardIndex) || this.castToString(item.cardTitle) || this.getPropValue("activeIcon") || this.getPropValue("inactiveIcon")) && (
                            <div className={this.decorateCSS("little-container")}>
                              <div className={`${this.decorateCSS("card-index")} ${this.getComponentState("activeCard") === index ? this.decorateCSS("active") : ""}`}>
                                <div className={this.decorateCSS("index")}>
                                  {item.cardIndex}
                                </div>
                              </div>
                              <div className={this.decorateCSS("title")}>
                                <div className={this.decorateCSS("card-title")}>{item.cardTitle}</div>
                              </div>
                              <div className={this.decorateCSS("icon-wrapper")}>
                                <ComposerIcon name={this.getComponentState("activeCard") === index
                                  ? this.getPropValue("activeIcon")
                                  : this.getPropValue("inactiveIcon")}
                                  propsIcon={{ className: this.decorateCSS("icon") }}
                                />
                              </div>
                            </div>
                          )}
                          {this.castToString(item.description) && (
                            <div className={`${this.decorateCSS("text-wrapper")} ${this.getComponentState("activeCard") === index ? this.decorateCSS("active") : ""}`}>
                              <div className={`${this.decorateCSS("text")} ${this.getComponentState("activeCard") === index ? this.decorateCSS("active") : ""}`}>
                                {item.description}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default FaqMiddle;
