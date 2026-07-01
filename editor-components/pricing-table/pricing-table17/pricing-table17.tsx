import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./pricing-table17.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardFeatureItem = {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
};

type CardItem = {
  cardSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
  cardPrice: React.JSX.Element;
  cardDuration: React.JSX.Element;
  cardFeature: CardFeatureItem[];
  buttons: INPUTS.CastedButton[];
};

type BottomCardItem = {
  bottomSubtitle: React.JSX.Element;
  bottomTitle: React.JSX.Element;
  bottomDescription: React.JSX.Element;
  buttonsBottom: INPUTS.CastedButton[];
};

class PricingTable17 extends BasePricingTable {
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
      value: "The right price for you, whoever you are",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "White")
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
            { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "Hobby" },
            { type: "string", key: "cardTitle", displayer: "Title", value: "" },
            { type: "string", key: "cardDescription", displayer: "Description", value: "Capitalize on low hanging fruit to identify a value added to beta test." },
            { type: "string", key: "cardPrice", displayer: "Price", value: "$12" },
            { type: "string", key: "cardDuration", displayer: "Duration", value: "/month" },
            {
              type: "array",
              key: "cardFeature",
              displayer: "Feature",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Official member t-shirt" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Entry to annual conference" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Members resources" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Private forum access" },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "GET STARTED TODAY", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "cardSubtitle", displayer: "Subtitle", value: "Team" },
            { type: "string", key: "cardTitle", displayer: "Title", value: "" },
            { type: "string", key: "cardDescription", displayer: "Description", value: "Capitalize on low hanging fruit to identify a value added to beta test." },
            { type: "string", key: "cardPrice", displayer: "Price", value: "$79" },
            { type: "string", key: "cardDuration", displayer: "Duration", value: "/month" },
            {
              type: "array",
              key: "cardFeature",
              displayer: "Feature",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Unlimited resources" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Official member t-shirt" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Entry to annual conference" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Members resources" },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Feature Item",
                  value: [
                    { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FaCheck" } },
                    { type: "string", key: "text", displayer: "Text", value: "Private forum access" },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "GET STARTED TODAY", "", null, null, "Primary")],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomCard",
      displayer: "Bottom Card",
      value: [
        { type: "string", key: "bottomSubtitle", displayer: "Subtitle", value: "" },
        { type: "string", key: "bottomTitle", displayer: "Title", value: "Discounted" },
        { type: "string", key: "bottomDescription", displayer: "Description", value: "Get a full access to both licenses including extra super mega options for <span style='font-weight: bold; color: var(--composer-primary-color);'>$45 only</span>." },
        {
          type: "array",
          key: "buttonsBottom",
          displayer: "Buttons",
          value: [INPUTS.BUTTON("buttonBottom", "Button", "BUY DISCOUNTED LICENSE", "", null, null, "Primary")],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
    });
  }

  static getName(): string {
    return "Pricing 17";
  }

  render(): React.ReactNode {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const cards = this.castToObject<CardItem[]>("card");
    const bottomCard = this.castToObject<BottomCardItem>("bottomCard");
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

    let hasBottomCard = false;
    if (bottomCard) {
      const bottomSubtitleExist = this.castToString(bottomCard.bottomSubtitle);
      const bottomTitleExist = this.castToString(bottomCard.bottomTitle);
      const bottomDescExist = this.castToString(bottomCard.bottomDescription);

      const rawButtonsBottom = bottomCard.buttonsBottom || ((bottomCard as any).buttonBottom ? [(bottomCard as any).buttonBottom] : []);
      const buttonsBottom = Array.isArray(rawButtonsBottom) ? rawButtonsBottom : [];
      const bottomButtonExist = buttonsBottom.map((btn: any) => {
        if (btn && btn.value && Array.isArray(btn.value)) {
          return {
            text: this.getPropValue("text", { parent_object: btn.value })
          };
        }
        return btn;
      }).some(btn => this.castToString(btn.text));

      hasBottomCard = !!(bottomSubtitleExist || bottomTitleExist || bottomDescExist || bottomButtonExist);
    }

    const isOnlyHeader = showHeader && !hasCards && !hasBottomCard;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${isOnlyHeader && this.decorateCSS("header-only")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
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
              )}   {visibleButtons.length > 0 && (
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

          {cards.length > 0 && (
            <Base.ListGrid
              gridCount={{ pc: itemCount, tablet: 2, phone: 1 }}
              className={this.decorateCSS("cards-row")}
            >
              {cards.map((item, index) => {
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

                const filteredFeatures = Array.isArray(item.cardFeature)
                  ? item.cardFeature.filter((feature) => {
                    const textExist = this.castToString(feature.text);
                    const iconExist = feature.icon && (typeof feature.icon === "object" ? feature.icon.name || feature.icon.url : true);
                    return textExist || iconExist;
                  })
                  : [];

                const hasContent =
                  cardSubtitleExist ||
                  cardTitleExist ||
                  cardDescriptionExist ||
                  cardPriceExist ||
                  cardDurationExist ||
                  filteredFeatures.length > 0 ||
                  buttonExist;

                if (!hasContent) return null;

                return (
                  <div key={`card-${index}`} className={this.decorateCSS("card")}>
                    <Base.VerticalContent className={this.decorateCSS("card-top")}>
                      {cardSubtitleExist && <Base.H6 className={this.decorateCSS("card-subtitle")}>{item.cardSubtitle}</Base.H6>}
                      {cardTitleExist && <Base.H5 className={this.decorateCSS("card-title")}>{item.cardTitle}</Base.H5>}
                      {(cardPriceExist || cardDurationExist) && (
                        <div className={this.decorateCSS("card-price-row")}>
                          {cardPriceExist && <Base.H1 className={this.decorateCSS("card-price")}>{item.cardPrice}</Base.H1>}
                          {cardDurationExist && <Base.P className={this.decorateCSS("card-duration")}>{item.cardDuration}</Base.P>}
                        </div>
                      )}

                      {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{item.cardDescription}</Base.P>}

                      {filteredFeatures.length > 0 && (
                        <Base.VerticalContent className={this.decorateCSS("card-features")}>
                          {filteredFeatures.map((feature, featureIndex) => {
                            const textExist = this.castToString(feature.text);
                            const iconExist = feature.icon && (typeof feature.icon === "object" ? feature.icon.name || feature.icon.url : true);
                            const hasImage = feature.icon && feature.icon.type === "image";
                            const mediaClass = hasImage ? this.decorateCSS("feature-image") : this.decorateCSS("feature-icon");

                            return (
                              <div key={`feature-${index}-${featureIndex}`} className={this.decorateCSS("feature-item")}>
                                {iconExist && <Base.Media value={feature.icon} className={mediaClass} />}
                                {textExist && <Base.P className={this.decorateCSS("feature-text")}>{feature.text}</Base.P>}
                              </div>
                            );
                          })}
                        </Base.VerticalContent>
                      )}
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
          )}

          {bottomCard && (() => {
            const bottomSubtitleExist = this.castToString(bottomCard.bottomSubtitle);
            const bottomTitleExist = this.castToString(bottomCard.bottomTitle);
            const bottomDescExist = this.castToString(bottomCard.bottomDescription);

            const rawButtonsBottom = bottomCard.buttonsBottom || ((bottomCard as any).buttonBottom ? [(bottomCard as any).buttonBottom] : []);
            const buttonsBottom = Array.isArray(rawButtonsBottom) ? rawButtonsBottom : [];
            const visibleBottomButtons = buttonsBottom.map((btn: any) => {
              if (btn && btn.value && Array.isArray(btn.value)) {
                return {
                  text: this.getPropValue("text", { parent_object: btn.value }),
                  type: this.getPropValue("type", { parent_object: btn.value }),
                  url: this.getPropValue("url", { parent_object: btn.value })
                };
              }
              return btn;
            }).filter(btn => this.castToString(btn.text));
            const bottomButtonExist = visibleBottomButtons.length > 0;

            const bottomCardContentExist = bottomSubtitleExist || bottomTitleExist || bottomDescExist || bottomButtonExist;

            if (!bottomCardContentExist) return null;

            return (
              <div className={this.decorateCSS("bottom-card")}>
                <Base.VerticalContent className={this.decorateCSS("bottom-card-left")}>
                  {bottomSubtitleExist && <Base.H6 className={this.decorateCSS("bottom-subtitle")}>{bottomCard.bottomSubtitle}</Base.H6>}
                  {bottomTitleExist && <Base.H5 className={this.decorateCSS("bottom-title")}>{bottomCard.bottomTitle}</Base.H5>}
                  {bottomDescExist && <Base.P className={this.decorateCSS("bottom-description")}>{bottomCard.bottomDescription}</Base.P>}
                </Base.VerticalContent>

                {bottomButtonExist && (
                  <div className={this.decorateCSS("bottom-card-right")}>
                    {visibleBottomButtons.map((btn, btnIndex) => (
                      <ComposerLink key={`bottom-button-${btnIndex}`} path={btn.url}>
                        <Base.Button buttonType={btn.type} className={this.decorateCSS("bottom-button")}>
                          {this.castToString(btn.text) && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                        </Base.Button>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable17;