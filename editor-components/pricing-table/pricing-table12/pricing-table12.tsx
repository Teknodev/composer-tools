import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table12.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardContent = {
  cardSubtitle: JSX.Element;
  cardTitle: JSX.Element;
  cardPrice: JSX.Element;
  cardPriceSuffix: JSX.Element;
  cardDescription: JSX.Element;
  cardButton: INPUTS.CastedButton[];
};

type CardData = {
  cardLeft: CardContent;
  cardRight: CardContent;
};

class PricingTable12 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Pricing Plans Designed for Your Needs",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    });

    this.addProp({
      type: "array",
      key: "cardButtons",
      displayer: "Card Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCountInARow",
      displayer: "Item Count in a Row",
      value: 2,
      max: 9,
    });

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "cardLeft",
          displayer: "Card Left",
          value: [
            { type: "string", key: "cardSubtitle", displayer: "Card Subtitle", value: "" },
            { type: "string", key: "cardTitle", displayer: "Card Title", value: "STARTER" },
            { type: "string", key: "cardPrice", displayer: "Card Price", value: "$2.99" },
            { type: "string", key: "cardPriceSuffix", displayer: "Card Price Suffix", value: "/month" },
            { type: "string", key: "cardDescription", displayer: "Card Description", value: "Change your body and your health in just 12 weeks" },
            {
              type: "array",
              key: "cardButton",
              displayer: "Card Buttons",
              value: [INPUTS.BUTTON("button", "Button", "GET STARTED", "", null, null, "Black"),

              ]
            },
          ],
        },
        {
          type: "object",
          key: "cardRight",
          displayer: "Card Right",
          value: [
            { type: "string", key: "cardSubtitle", displayer: "Card Subtitle", value: "" },
            { type: "string", key: "cardTitle", displayer: "Card Title", value: "BUSINESS" },
            { type: "string", key: "cardPrice", displayer: "Card Price", value: "$7.99" },
            { type: "string", key: "cardPriceSuffix", displayer: "Card Price Suffix", value: "/month" },
            { type: "string", key: "cardDescription", displayer: "Card Description", value: "Change your body and your health in just 6 weeks" },
            {
              type: "array",
              key: "cardButton",
              displayer: "Card Buttons",
              value: [INPUTS.BUTTON("button", "Button", "GET STARTED", "", null, null, "Black")],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Pricing 12";
  }

  private renderCard(card: CardContent, positionClass: string) {
    const cardSubtitleExist = this.castToString(card?.cardSubtitle);
    const cardTitleExist = this.castToString(card?.cardTitle);
    const cardPriceExist = this.castToString(card?.cardPrice);
    const cardPriceSuffixExist = this.castToString(card?.cardPriceSuffix);
    const cardDescriptionExist = this.castToString(card?.cardDescription);
    const cardButtons = Array.isArray(card?.cardButton) ? card.cardButton : [];
    const hasValidCardButtons = cardButtons.some((btn) => this.castToString(btn.text));

    const hasContent = cardSubtitleExist || cardTitleExist || cardPriceExist || cardPriceSuffixExist || cardDescriptionExist || hasValidCardButtons;
    if (!hasContent) return null;

    return (
      <div className={`${this.decorateCSS("card")} ${this.decorateCSS(positionClass)}`}>
        <Base.VerticalContent className={this.decorateCSS("card-content")}>
          {cardSubtitleExist && (
            <Base.P className={this.decorateCSS("card-subtitle")}>
              {card.cardSubtitle}
            </Base.P>
          )}
          {cardTitleExist && (
            <Base.H4 className={this.decorateCSS("card-title")}>
              {card.cardTitle}
            </Base.H4>
          )}
          {(cardPriceExist || cardPriceSuffixExist) && (
            <div className={this.decorateCSS("card-price-row")}>
              {cardPriceExist && (
                <Base.H1 className={this.decorateCSS("card-price")}>
                  {card.cardPrice}
                </Base.H1>
              )}
              {cardPriceSuffixExist && (
                <Base.P className={this.decorateCSS("card-price-suffix")}>
                  {card.cardPriceSuffix}
                </Base.P>
              )}
            </div>
          )}
          {cardDescriptionExist && (
            <Base.P className={this.decorateCSS("card-description")}>
              {card.cardDescription}
            </Base.P>
          )}
          {hasValidCardButtons && (
            <div className={this.decorateCSS("card-button-wrapper")}>
              {cardButtons.filter((btn) => this.castToString(btn.text)).map((btn, index) => (
                <ComposerLink key={index} path={this.castToString(btn.url)}>
                  <Base.Button
                    buttonType={this.castToString(btn.type)}
                    className={this.decorateCSS("card-button")}
                  >
                    <Base.P className={this.decorateCSS("card-button-text")}>
                      {btn.text}
                    </Base.P>
                  </Base.Button>
                </ComposerLink>
              ))}
            </div>
          )}
        </Base.VerticalContent>
      </div>
    );
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const buttons = this.castToObject<INPUTS.CastedButton[]>("cardButtons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

    const card = this.castToObject<CardData>("card");
    const itemCountInARow = this.getPropValue("itemCountInARow") || 2;
    const alignment = Base.getContentAlignment();

    const hasLeftSection = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasLeftSection && (
            <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
              <div className={this.decorateCSS("text-block")}>
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
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
              </div>
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.filter((btn) => this.castToString(btn.text)).map((item: INPUTS.CastedButton, index: number) => (
                    <ComposerLink key={index} path={this.castToString(item.url)}>
                      <Base.Button
                        buttonType={this.castToString(item.type)}
                        className={this.decorateCSS("button")}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {item.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("right-column")}>
            <Base.ListGrid
              gridCount={{ pc: itemCountInARow, tablet: 2, phone: 1 }}
              className={this.decorateCSS("cards-grid")}
            >
              {this.renderCard(card?.cardLeft, "card-left")}
              {this.renderCard(card?.cardRight, "card-right")}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable12;
