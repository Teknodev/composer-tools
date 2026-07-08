import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./pricing-table12.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";



type CardItem = {
  cardSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
  cardPrice: React.JSX.Element;
  cardDuration: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};

class PricingTable12 extends BasePricingTable {
  constructor(props?: TypeUsableComponentProps[]) {
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
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
      ],
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "STARTER" },
            { type: "string", key: "cardTitle", displayer: "Title", value: "" },
            { type: "string", key: "cardDescription", displayer: "Description", value: "Change your body and your health in just 12 weeks" },
            { type: "string", key: "cardPrice", displayer: "Price", value: "$2.99" },
            { type: "string", key: "cardDuration", displayer: "Duration", value: "/month" },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "GET STARTED", "", null, null, "White")],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "BUSINESS" },
            { type: "string", key: "cardTitle", displayer: "Title", value: "" },
            { type: "string", key: "cardDescription", displayer: "Description", value: "Change your body and your health in just 6 weeks" },
            { type: "string", key: "cardPrice", displayer: "Price", value: "$7.99" },
            { type: "string", key: "cardDuration", displayer: "Duration", value: "/month" },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "GET STARTED", "", null, null, "White")],
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
    return "Pricing 12";
  }

  render(): React.ReactNode {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const cards = this.castToObject<CardItem[]>("card") || [];
    const itemCountValue = this.getPropValue("itemCount");
    const itemCount = typeof itemCountValue === "number" ? itemCountValue : 2;

    const showHeader = subtitle || title || description || visibleButtons.length > 0;
    let hasCards = false;
    if (cards && cards.length > 0) {
      hasCards = cards.some(item => {
        const cardSubtitleExist = this.castToString(item.cardSubtitle);
        const cardTitleExist = this.castToString(item.cardTitle);
        const cardDescriptionExist = this.castToString(item.cardDescription);
        const cardPriceExist = this.castToString(item.cardPrice);
        const cardDurationExist = this.castToString(item.cardDuration);

        const rawButtons = item.buttons || ((item as any).button ? [(item as any).button] : []);
        const buttons = Array.isArray(rawButtons) ? rawButtons : [];
        const buttonExist = buttons.map((btn: any) => {
          if (btn && btn.value && Array.isArray(btn.value)) {
            return {
              text: this.getPropValue("text", { parent_object: btn.value })
            };
          }
          return btn;
        }).some(btn => this.castToString(btn.text));

        const filteredFeatures = Array.isArray(item.cardFeature)
          ? item.cardFeature.filter((feature) => {
            const textExist = this.castToString(feature.text);
            const iconExist = feature.icon && (typeof feature.icon === "object" ? feature.icon.name || feature.icon.url : true);
            return textExist || iconExist;
          })
          : [];

        return (
          cardSubtitleExist ||
          cardTitleExist ||
          cardDescriptionExist ||
          cardPriceExist ||
          cardDurationExist ||
          filteredFeatures.length > 0 ||
          buttonExist
        );
      });
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid
            gridCount={{ pc: itemCount, tablet: itemCount, phone: 1 }}
            className={this.decorateCSS("cards-row")}
          >
            {showHeader && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {title && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
                )}
                {description && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
                )}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                      return this.castToString(item.text) && (
                        <ComposerLink key={`button-${index}`} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {hasCards && cards.map((item, index) => {
              const cardSubtitleExist = this.castToString(item.cardSubtitle);
              const cardTitleExist = this.castToString(item.cardTitle);
              const cardDescriptionExist = this.castToString(item.cardDescription);
              const cardPriceExist = this.castToString(item.cardPrice);
              const cardDurationExist = this.castToString(item.cardDuration);

              const rawButtons = item.buttons || ((item as any).button ? [(item as any).button] : []);
              const buttons = Array.isArray(rawButtons) ? rawButtons : [];
              const visibleCardButtons = buttons.map((btn: any) => {
                if (btn && btn.value && Array.isArray(btn.value)) {
                  return {
                    text: this.getPropValue("text", { parent_object: btn.value }),
                    type: this.getPropValue("type", { parent_object: btn.value }),
                    url: this.getPropValue("url", { parent_object: btn.value })
                  };
                }
                return btn;
              }).filter(btn => this.castToString(btn.text));
              const buttonExist = visibleCardButtons.length > 0;

              const hasContent =
                cardSubtitleExist ||
                cardTitleExist ||
                cardDescriptionExist ||
                cardPriceExist ||
                cardDurationExist ||
                buttonExist;

              if (!hasContent) return null;

              const themeClass = index % 2 === 0 ? "first-card" : "second-card";

              return (
                <div key={`card-${index}`} className={`${this.decorateCSS("card")} ${this.decorateCSS(themeClass)}`}>
                  <Base.VerticalContent className={this.decorateCSS("card-content")}>
                    {cardSubtitleExist && <Base.H6 className={this.decorateCSS("card-subtitle")}>{item.cardSubtitle}</Base.H6>}
                    {cardTitleExist && <Base.H5 className={this.decorateCSS("card-title")}>{item.cardTitle}</Base.H5>}
                    {(cardPriceExist || cardDurationExist) && (
                      <div className={this.decorateCSS("card-price-row")}>
                        {cardPriceExist && <Base.H1 className={this.decorateCSS("card-price")}>{item.cardPrice}</Base.H1>}
                        {cardDurationExist && <Base.P className={this.decorateCSS("card-duration")}>{item.cardDuration}</Base.P>}
                      </div>
                    )}

                    {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{item.cardDescription}</Base.P>}

                    {buttonExist && (
                      <div className={this.decorateCSS("card-buttons-container")}>
                        {visibleCardButtons.map((btn, btnIndex) => (
                          <ComposerLink key={`card-button-${index}-${btnIndex}`} path={btn.url}>
                            <Base.Button buttonType={btn.type} className={this.decorateCSS("card-button")}>
                              {this.castToString(btn.text) && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                            </Base.Button>
                          </ComposerLink>
                        ))}
                      </div>
                    )}
                  </Base.VerticalContent>
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable12;
