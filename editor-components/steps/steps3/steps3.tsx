import * as React from "react";
import { BaseSteps } from "../../EditorComponent";
import styles from "./steps3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  stepNumber: React.JSX.Element;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};

class Steps3 extends BaseSteps {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "enable_card",
      displayer: "Colored Background",
      value: true,
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
      value: "Only Three Steps to Success",
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
              key: "stepNumber",
              displayer: "Step Number",
              value: "01",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Make Your Business Visible Online",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "02",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Make Your eCommerce Website Easily",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "03",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Make Your Portfolio Really Impressive",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
              ],
            },
          ],
        },
      ],
    });


    this.addProp({
      type: "number",
      key: "itemCountInRow",
      displayer: "Item Count in a Row",
      value: 3,
    });
  }

  static getName(): string {
    return "Steps 3";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const itemCountInRow = this.getPropValue("itemCountInRow");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

    const enable_card = this.getPropValue("enable_card");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("steps-box")} ${enable_card && this.decorateCSS("has-background")}`}>
            {(subtitle || title || description || hasValidButtons) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
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
                {hasValidButtons && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) =>
                      this.castToString(button.text) && (
                        <ComposerLink key={`steps3-btn-${index}`} path={button.url}>
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {cards?.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: itemCountInRow, tablet: 3, phone: 1 }}
                className={this.decorateCSS("cards-container")}
              >
                {cards.map((card: Card, index: number) => {
                  const cardStepNumberExist = this.castToString(card.stepNumber);
                  const cardSubtitleExist = this.castToString(card.subtitle);
                  const cardTitleExist = this.castToString(card.title);
                  const cardDescriptionExist = this.castToString(card.description);
                  const cardButtonsExist = card.buttons?.some((btn) => this.castToString(btn.text));

                  return (cardStepNumberExist || cardSubtitleExist || cardTitleExist || cardDescriptionExist || cardButtonsExist) && (
                    <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                      {cardStepNumberExist && (
                        <Base.H1 className={this.decorateCSS("step-number-watermark")}>
                          {card.stepNumber}
                        </Base.H1>
                      )}
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {cardSubtitleExist && (
                          <Base.H6 className={this.decorateCSS("card-subtitle")}>
                            {card.subtitle}
                          </Base.H6>
                        )}
                        {cardTitleExist && (
                          <Base.H5 className={this.decorateCSS("card-title")}>
                            {card.title}
                          </Base.H5>
                        )}
                        {cardDescriptionExist && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {card.description}
                          </Base.P>
                        )}
                        {cardButtonsExist && (
                          <div className={this.decorateCSS("card-buttons")}>
                            {card.buttons.map((button: INPUTS.CastedButton, btnIndex: number) =>
                              this.castToString(button.text) && (
                                <ComposerLink key={`card-${index}-btn-${btnIndex}`} path={button.url}>
                                  <Base.Button buttonType={button.type} className={this.decorateCSS("card-button")}>
                                    <Base.P className={this.decorateCSS("card-button-text")}>{button.text}</Base.P>
                                  </Base.Button>
                                </ComposerLink>
                              )
                            )}
                          </div>
                        )}
                      </Base.VerticalContent>
                    </Base.VerticalContent>
                  );
                })}
              </Base.ListGrid>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Steps3;
