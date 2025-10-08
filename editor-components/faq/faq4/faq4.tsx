import * as React from "react";
import styles from "./faq4.module.scss";
import { BaseFAQ } from "../../EditorComponent";

import { Base } from "../../../composer-base-components/base/base";

type Card = {
  sectionTitle: React.JSX.Element;
  items: Item[];
};
type Item = {
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Faq4 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "FAQ",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Frequently Asked Questions",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Description",
      value:
        "FAQ stands for Frequently Asked Questions.It is a section of a website or document where common questions and their answers are provided to help users better understand a product, service, or topic. The purpose of an FAQ section is to address common concerns and provide helpful information to users, so they can make informed decisions.",
    });

    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaAngleDown",
      },
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Tab",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Payment",
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
                      key: "title",
                      displayer: "Question",
                      value: "What are the shipping options available?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value:
                        "We offer standard and express shipping options. Standard shipping usually takes 5-7 business days, while express shipping takes 1-3 business days.",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Question",
                      value: "How can I contact customer support?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value:
                        "You can contact our customer support team by email or phone. Our email address and phone number can be found on our website's contact page.",
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
              value: "Returns",
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
                      key: "title",
                      displayer: "Question",
                      value: "How can I track my order?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value:
                        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or on the carrier's",
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
              value: "Refunds",
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
                      key: "title",
                      displayer: "Question",
                      value: "What is your return policy?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Answer",
                      value:
                        "We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
                    },
                  ]
                }
              ]
            }
          ],
        },
      ],
    });
    this.setComponentState("selectedSection", 0);
    this.setComponentState("cardIndex", -1);
    this.setComponentState("onclick", false);
  }

  static getName(): string {
    return "FAQ 4";
  }
  sectionButton(index: number): void {
    this.setComponentState("cardIndex", -1);
    this.setComponentState("selectedSection", index);
  }
  cardButton(index: number): void {
    this.setComponentState("cardIndex", index);
    this.setComponentState("onclick", !this.getComponentState("onclick"));
  }
  render() {
    const card = this.castToObject<Card[]>("cards")
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(this.castToString(this.getPropValue("subtitle")) || this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("text"))) && (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                {this.castToString(this.getPropValue("subtitle")) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {this.castToString(this.getPropValue("title")) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {this.castToString(this.getPropValue("text")) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("text")}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            {(card.length > 0) && (
              <div className={this.decorateCSS("middle-page")}>
                {card.map((card: Card, index: number) => (
                  <div className={this.decorateCSS("sections")} onClick={() => this.sectionButton(index)}>
                    <Base.H4 className={`${this.decorateCSS("section-title")} ${this.getComponentState("selectedSection") === index ? this.decorateCSS("active") : ""}`}>
                      {card.sectionTitle}
                    </Base.H4>
                  </div>
                ))}
              </div>
            )}
            {(card[this.getComponentState("selectedSection")]?.items.length > 0) && (
              <div className={this.decorateCSS("down-page")}>
                <div className={this.decorateCSS("card-wrapper")}>
                  {card[this.getComponentState("selectedSection")]?.items.map((item: Item, index: number) => (
                    <div className={`${this.decorateCSS("card")} ${this.getComponentState("cardIndex") === index ? (this.getComponentState("onclick") ? this.decorateCSS("active") : "") : ""}`} onClick={() => this.cardButton(index)}>
                      {(this.castToString(item.title) || this.getPropValue("icon")) && (
                        <div className={this.decorateCSS("child-container")}>
                          {this.castToString(item.title) && (
                            <div className={this.decorateCSS("card-left")}>
                              <Base.H3 className={this.decorateCSS("card-title")}>
                                {item.title}
                              </Base.H3>
                            </div>
                          )}
                          {this.getPropValue("icon") && (
                            <div className={this.decorateCSS("card-right")}>
                              <div className={this.decorateCSS("icon-wrapper")}>
                                <Base.Media
                                  value={this.getPropValue("icon")}
                                  className={`${this.decorateCSS("icon")} ${this.getComponentState("cardIndex") === index
                                    ? this.getComponentState("onclick")
                                      ? this.decorateCSS("active")
                                      : ""
                                    : ""
                                    }`}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(item.description) && (
                        <div className={`${this.decorateCSS("hide-card")} ${this.getComponentState("cardIndex") === index ? (this.getComponentState("onclick") ? this.decorateCSS("active") : "") : ""}`}>
                          <Base.P className={this.decorateCSS("text")}>
                            {item.description}
                          </Base.P>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq4;