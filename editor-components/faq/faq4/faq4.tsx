import * as React from "react";
import styles from "./faq4.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  sectionTitle: JSX.Element;
  items: Item[];
};
type Item = {
  title: JSX.Element;
  description: JSX.Element;
};

class FaqButton extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Page Title",
      value: "FAQ",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Page Title Description",
      value:
        "FAQ stands for Frequently Asked Questions.It is a section of a website or document where common questions and their answers are provided to help users better understand a product, service, or topic. The purpose of an FAQ section is to address common concerns and provide helpful information to users, so they can make informed decisions.",
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQ",
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
                      displayer: "Title",
                      value: "What are the shipping options available?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
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
                      displayer: "Title",
                      value: "How can I contact customer support?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
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
                      displayer: "Title",
                      value: "How can I track my order?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
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
                      displayer: "Title",
                      value: "What is your return policy?",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
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

  getName(): string {
    return "FAQ-4";
  }
  sectionButton(index: number): void {
    this.setComponentState("cardIndex", -1);
    this.setComponentState("selectedSection", index);
  }
  cardButton(index: number): void {
    this.setComponentState("cardIndex", index);
    this.setComponentState("onclick", !this.getComponentState("onclick"));
    console.log(this.getComponentState("onclick"))
  }
  render() {
    const card = this.castToObject<Card[]>("cards")
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <Base.VerticalContent className={this.decorateCSS("up-page")}>
              <Base.SectionSubTitle className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </Base.SectionSubTitle>
              <Base.SectionTitle className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.SectionTitle>
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("text")}
              </Base.SectionDescription>
            </Base.VerticalContent>
            <div className={this.decorateCSS("middle-page")}>
              {card.map((card: Card, index: number) => (
                <div className={this.decorateCSS("sections")} onClick={() => this.sectionButton(index)}>
                  <div className={this.decorateCSS("title")}>
                    {card.sectionTitle}
                  </div>
                </div>
              ))}
            </div>
            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("card-wrapper")}>
                {card[this.getComponentState("selectedSection")].items.map((item: Item, index: number) => (
                  <div className={this.decorateCSS("card")} onClick={() => this.cardButton(index)}>
                    <div className={this.decorateCSS("child-container")}>
                      <div className={this.decorateCSS("card-left")}>
                        <Base.H3 className={this.decorateCSS("card-title")}>
                          {item.title}
                        </Base.H3>
                      </div>
                      <div className={this.decorateCSS("card-right")}>
                        <div className={this.decorateCSS("icon-wrapper")}>
                          <ComposerIcon
                            propsIcon={{ className: this.decorateCSS("icon") }}
                            name={
                              "FaAngleUp"
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <p className={`${this.decorateCSS("hide")} ${this.getComponentState("cardIndex") === index ? (this.getComponentState("onclick") ? this.decorateCSS("text") : "") : ""}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default FaqButton;
