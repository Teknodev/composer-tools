import * as React from "react";
import styles from "./faq2.module.scss";
import { BaseFAQ, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  cardTitle: React.JSX.Element;
  description: React.JSX.Element;
  cardIcon: TypeMediaInputValue;
  buttons: INPUTS.CastedButton[];
};
type BottomItem = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon?: TypeMediaInputValue;
  buttons: INPUTS.CastedButton[];
};

class Faq2 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Have Any Questions?",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Frequently asked questions",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "If you have ever wondered how to developed your brand, this is the place fot you. Take a big step forward in growing your business with this great tool.",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
    });

    this.addProp({
      type: "boolean",
      key: "showIconBackground",
      displayer: "Icon Background",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
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
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiQuestionMark",
              },
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value: "How can I track my order?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or on the carrier's website.",
            },
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiQuestionMark",
              },
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value: "What is your return policy?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                " We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.",
            },
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiQuestionMark",
              },
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
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
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiQuestionMark",
              },
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value: "Do you offer any discounts or promotions?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "Yes, we offer discounts and promotions from time to time. You can sign up for our newsletter to receive updates on our latest promotions.",
            },
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiQuestionMark",
              },
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Question",
              value: "What payment methods do you accept?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Answer",
              value:
                "We accept credit/debit cards, PayPal, and other digital payment methods. You can select your preferred payment method during checkout.",
            },
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BiQuestionMark",
              },
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "downContainer",
      displayer: "Bottom Container",
      value: [
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "BiQuestionMark",
          },
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Have more questions?",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Can't find answer you're looking for? Please send us a message.",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "Get in Touch", "", null, null, "Primary"),
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "FAQ 2";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"))
    const title = this.castToString(this.getPropValue("title"))
    const description = this.castToString(this.getPropValue("description"))
    const hasContent = subtitle || title || description
    
    const downContainerProp = this.getProp("downContainer");
    const downContainerValues = downContainerProp ? (downContainerProp.value as any[]) : [];
    
    const downTitle = this.getPropValue("title", { parent_object: downContainerValues });
    const downDescription = this.getPropValue("description", { parent_object: downContainerValues });
    const downIcon = this.getPropValue("icon", { parent_object: downContainerValues });
    
    const downButtonsProp = downContainerValues.find(p => p.key === "buttons");
    const downButtons: INPUTS.CastedButton[] = downButtonsProp 
      ? (this as any).castingProcess(downButtonsProp) 
      : [];
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          {(this.getPropValue("card").length > 0) && (
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("card-page")}>
              {this.castToObject<Card[]>("card").map(
                (item: Card) => {
                  return (
                    <div className={this.decorateCSS("card")}>
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {item.cardIcon && (
                          <Base.Row className={`${this.decorateCSS("icon-wrapper")}${!this.getPropValue("showIconBackground") ? ` ${this.decorateCSS("no-icon-bg")}` : ""}`}>
                            <Base.Media value={item.cardIcon} className={this.decorateCSS("icon")} />
                          </Base.Row>
                        )}
                        {this.castToString(item.cardTitle) && (
                          <Base.H6 className={this.decorateCSS("card-title")}>
                            {item.cardTitle}
                          </Base.H6>
                        )}
                        {this.castToString(item.description) && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {item.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                      {item.buttons?.length > 0 && (
                        <div className={this.decorateCSS("card-buttons")}>
                          {item.buttons.map((button: INPUTS.CastedButton) => {
                            return this.castToString(button.text) && (
                              <ComposerLink path={button.url}>
                                <Base.Button buttonType={button.type} className={this.decorateCSS("card-button")}>
                                  <Base.P className={this.decorateCSS("card-button-text")}>{button.text}</Base.P>
                                </Base.Button>
                              </ComposerLink>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </Base.ListGrid>
          )}
          {(this.castToString(downTitle) || this.castToString(downDescription) || downButtons.length > 0 || (downIcon && (downIcon.type === "icon" ? downIcon.name : downIcon.url))) && (
            <div className={this.decorateCSS("down-container")}>
              {downIcon && (downIcon.type === "icon" ? downIcon.name : downIcon.url) && (
                <Base.Row className={`${this.decorateCSS("down-icon-wrapper")}${!this.getPropValue("showIconBackground") ? ` ${this.decorateCSS("no-icon-bg")}` : ""}`}>
                  <Base.Media value={downIcon} className={this.decorateCSS("down-icon")} />
                </Base.Row>
              )}
              {(this.castToString(downTitle) || this.castToString(downDescription)) && (
                <Base.VerticalContent className={this.decorateCSS("content")}>
                  {this.castToString(downTitle) && (
                    <Base.H2 className={this.decorateCSS("down-title")}>
                      {downTitle}
                    </Base.H2>
                  )}
                  {this.castToString(downDescription) && (
                    <Base.P className={this.decorateCSS("down-description")}>
                      {downDescription}
                    </Base.P>
                  )}
                </Base.VerticalContent>
              )}
              {downButtons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {downButtons.map((button: INPUTS.CastedButton, index: number) => (
                    this.castToString(button.text) && (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    )
                  ))}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq2;