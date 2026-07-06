import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table14.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type StatItem = {
  number: React.JSX.Element;
  label: React.JSX.Element;
};

type FeatureItem = {
  icon: TypeMediaInputValue;
  text: React.JSX.Element;
};

type CardItem = {
  cardSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
  features: FeatureItem[];
  cardPrice: React.JSX.Element;
  cardPeriod: React.JSX.Element;
  cardButtons: INPUTS.CastedButton[];
};

class PricingTable14 extends BasePricingTable {
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
      value: "Choose The Best Package For Your Application",
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
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "74",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Download Apps",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "118",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Project Complete",
            },
          ],
        },
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
              key: "cardSubtitle",
              displayer: "Card Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Card Title",
              value: "Single Team",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "",
            },
            {
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["image", "icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaCheckCircle",
                      },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Social Media Marketing",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["image", "icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaCheckCircle",
                      },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "2.100 Keywords",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["image", "icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaCheckCircle",
                      },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "One Way Link Building",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$14.95",
            },
            {
              type: "string",
              key: "cardPeriod",
              displayer: "Period",
              value: "/monthly",
            },
            {
              type: "array",
              key: "cardButtons",
              displayer: "Card Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "SELECT PLAN", "", "FaArrowRight", null, "Primary"),
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
              key: "cardSubtitle",
              displayer: "Card Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Card Title",
              value: "Professional",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "",
            },
            {
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["image", "icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaCheckCircle",
                      },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Social Media Marketing",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["image", "icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaCheckCircle",
                      },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "2.100 Keywords",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["image", "icon"],
                      },
                      value: {
                        type: "icon",
                        name: "FaCheckCircle",
                      },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "One Way Link Building",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$29.95",
            },
            {
              type: "string",
              key: "cardPeriod",
              displayer: "Period",
              value: "/monthly",
            },
            {
              type: "array",
              key: "cardButtons",
              displayer: "Card Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "SELECT PLAN", "", "FaArrowRight", null, "Primary"),
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCountInARow",
      displayer: "Item Count in a Row",
      value: 1,
    });
  }

  static getName(): string {
    return "Pricing 14";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const stats = this.castToObject<StatItem[]>("stats") || [];
    const cards = this.castToObject<CardItem[]>("cards") || [];
    const itemCountInARow = this.getPropValue("itemCountInARow") || 1;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist || stats.length > 0) && (
            <Base.VerticalContent className={`${this.decorateCSS("left-column")} ${cards.length === 0 ? this.decorateCSS("full-width") : ""}`}>
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
              {stats.length > 0 && (
                <div className={this.decorateCSS("stats-container")}>
                  {stats.map((stat: StatItem, index: number) => {
                    const numberExist = this.castToString(stat.number);
                    const labelExist = this.castToString(stat.label);
                    return (numberExist || labelExist) && (
                      <div key={`stat-${index}`} className={this.decorateCSS("stat-item")}>
                        {numberExist && (
                          <Base.H1 className={this.decorateCSS("stat-number")}>
                            {stat.number}
                          </Base.H1>
                        )}
                        {labelExist && (
                          <Base.P className={this.decorateCSS("stat-label")}>
                            {stat.label}
                          </Base.P>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {cards.length > 0 && (
            <Base.ListGrid
              gridCount={{ pc: itemCountInARow, tablet: 1, phone: 1 }}
              className={this.decorateCSS("right-column")}
            >
              {cards.map((card: CardItem, index: number) => {
                const cardSubtitleExist = this.castToString(card.cardSubtitle);
                const cardTitleExist = this.castToString(card.cardTitle);
                const cardDescriptionExist = this.castToString(card.cardDescription);
                const cardPriceExist = this.castToString(card.cardPrice);
                const cardPeriodExist = this.castToString(card.cardPeriod);
                const cardFeatures = card.features || [];
                const cardButtons = card.cardButtons || [];

                 return (
                  <div key={`card-${index}`} className={this.decorateCSS("card")}>
                    {(cardSubtitleExist || cardTitleExist || cardDescriptionExist) && (
                      <Base.VerticalContent className={this.decorateCSS("card-header")}>
                        {cardSubtitleExist && (
                          <Base.H6 className={this.decorateCSS("card-subtitle")}>
                            {card.cardSubtitle}
                          </Base.H6>
                        )}
                        {cardTitleExist && (
                          <Base.H4 className={this.decorateCSS("card-title")}>
                            {card.cardTitle}
                          </Base.H4>
                        )}
                        {cardDescriptionExist && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {card.cardDescription}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    )}
                    <div className={this.decorateCSS("card-inner")}>
                      <div className={this.decorateCSS("card-left-section")}>
                        {cardFeatures.length > 0 && (
                          <div className={this.decorateCSS("features-list")}>
                            {cardFeatures.map((feature: FeatureItem, idx: number) => {
                              return this.castToString(feature.text) && (
                                <div key={`feat-${idx}`} className={this.decorateCSS("feature-item")}>
                                  {feature.icon && (
                                    <Base.Media
                                      value={feature.icon}
                                      className={this.decorateCSS("feature-icon")}
                                    />
                                  )}
                                  <Base.P className={this.decorateCSS("feature-text")}>
                                    {feature.text}
                                  </Base.P>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div className={this.decorateCSS("card-right-section")}>
                        <div className={this.decorateCSS("price-container")}>
                          {cardPriceExist && (
                            <Base.H3 className={this.decorateCSS("card-price")}>
                              {card.cardPrice}
                            </Base.H3>
                          )}
                          {cardPeriodExist && (
                            <Base.P className={this.decorateCSS("card-period")}>
                              {card.cardPeriod}
                            </Base.P>
                          )}
                        </div>
                        {cardButtons.filter((item: INPUTS.CastedButton) => this.castToString(item.text)).length > 0 && (
                          <div className={this.decorateCSS("card-buttons")}>
                            {cardButtons.filter((item: INPUTS.CastedButton) => this.castToString(item.text)).map((item: INPUTS.CastedButton, idx: number) => {
                              const btnType = this.castToString(item.type);
                              return (
                                <ComposerLink key={idx} path={this.castToString(item.url)}>
                                  <Base.Button
                                    buttonType={btnType}
                                    className={this.decorateCSS("card-button")}
                                  >
                                    <Base.P className={this.decorateCSS("button-text")}>
                                      {item.text}
                                    </Base.P>
                                    {item.icon && (
                                      <Base.Media
                                        value={item.icon}
                                        className={this.decorateCSS("button-arrow")}
                                      />
                                    )}
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable14;