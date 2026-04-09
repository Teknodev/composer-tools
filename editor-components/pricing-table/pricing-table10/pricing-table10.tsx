import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FeatureItem = {
  icon: string;
  text: JSX.Element;
};

type CardData = {
  cardSubtitle: string;
  cardTitle: string;
  cardDescription: string;
  featuresLabel: string;
  line: boolean;
  tagline: string;
  price: string;
};

class PricingTable10 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
     this.addProp({
      type: "boolean",
      key: "isSingleColorBackground",
      displayer: "Is Single Color Background?",
      value: false,
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
      value: "Simple no-tricks pricing",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "If you're not satisfied, contact us within 14 days and we'll send you a full refund",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
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
          value: "Lifetime Membership",
        },
        {
          type: "string",
          key: "cardDescription",
          displayer: "Card Description",
          value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
        },
        {
          type: "string",
          key: "featuresLabel",
          displayer: "Features Label",
          value: "What's included",
        },
        {
          type: "boolean",
          key: "line",
          displayer: "Line",
          value: true,
        },
        {
          type: "string",
          key: "tagline",
          displayer: "Tagline",
          value: "Pay once, own it forever",
        },
        {
          type: "string",
          key: "price",
          displayer: "Price",
          value: "$349",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "cardButtons",
      displayer: "Card Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "GET ACCESS", "", null, null, "Black"),
        INPUTS.BUTTON("button", "Button", "Get a free sample (20mb)", "", null, null, "Bare"),
      ],
    });

    this.addProp({
      type: "object",
      key: "bottomButton",
      displayer: "Bottom Button",
      value: [
        { type: "string", key: "text", displayer: "Text", value: "safasf" },
        { type: "string", key: "url", displayer: "URL", value: "" },
        { type: "string", key: "type", displayer: "Button Type", value: "Primary" },

      ],
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FaCheckCircle" },
            { type: "string", key: "text", displayer: "Text", value: "Private forum access" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FaCheckCircle" },
            { type: "string", key: "text", displayer: "Text", value: "Members resources" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FaCheckCircle" },
            { type: "string", key: "text", displayer: "Text", value: "Entry to annual conference" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FaCheckCircle" },
            { type: "string", key: "text", displayer: "Text", value: "Official member t-shirt" },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCountInARow",
      displayer: "Item Count in a Row",
      value: 9,
    });

   
  }

  static getName(): string {
    return "Pricing 10";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const card = this.castToObject<CardData>("card");

    const cardSubtitleExist = this.castToString(card.cardSubtitle);
    const cardTitleExist = this.castToString(card.cardTitle);
    const cardDescriptionExist = this.castToString(card.cardDescription);
    const featuresLabelExist = this.castToString(card.featuresLabel);
    const taglineExist = this.castToString(card.tagline);
    const priceExist = this.castToString(card.price);
    const features = this.castToObject<FeatureItem[]>("features");
    const cardButtons = this.castToObject<INPUTS.CastedButton[]>("cardButtons");
    const bottomButton = this.castToObject<any>("bottomButton");
    const bottomButtonText = this.castToString(bottomButton?.text);
    const itemCountInARow = this.getPropValue("itemCountInARow");
    const isSingleColorBackground = this.getPropValue("isSingleColorBackground");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {!isSingleColorBackground && <div className={this.decorateCSS("background-fill")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist || buttons?.length > 0) && (
            <div className={this.decorateCSS("top-section-wrapper")}>
              <Base.VerticalContent className={this.decorateCSS("top-section")}>
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
                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                      const buttonText = this.castToString(button.text);
                      return (
                        buttonText && (
                          <ComposerLink key={index} path={this.castToString(button.url)}>
                            <Base.Button buttonType={this.castToString(button.type)} className={this.decorateCSS("button")}>
                              {button.text}
                            </Base.Button>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            </div>
          )}

          <div
            className={this.decorateCSS("card")}
          >
            <Base.VerticalContent className={this.decorateCSS("card-left")}>
              <div className={this.decorateCSS("card-header")}>
                {cardSubtitleExist && (
                  <Base.P className={this.decorateCSS("card-subtitle")}>{card.cardSubtitle}</Base.P>
                )}
                {cardTitleExist && (
                  <Base.H3 className={this.decorateCSS("card-title")}>{card.cardTitle}</Base.H3>
                )}
                {cardDescriptionExist && (
                  <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>
                )}
              </div>
              {(featuresLabelExist || features?.length > 0) && (
                <div className={this.decorateCSS("features-section")}>
                  {(featuresLabelExist || card.line) && (
                    <div className={this.decorateCSS("features-header")}>
                      {featuresLabelExist && (
                        <Base.H6 className={this.decorateCSS("features-label")}>{card.featuresLabel}</Base.H6>
                      )}
                      {card.line && (
                        <div className={this.decorateCSS("separator-line")} />
                      )}
                    </div>
                  )}
                  {features?.length > 0 && (
                    <Base.ListGrid
                      gridCount={{ pc: itemCountInARow, tablet: 2, phone: 1 }}
                      className={this.decorateCSS("features-grid")}
                    >
                      {features.map((feature: FeatureItem, index: number) => {
                        const textExist = this.castToString(feature.text);
                        if (!textExist && !feature.icon) return null;
                        return (
                          <div key={index} className={this.decorateCSS("feature-item")}>
                            {feature.icon && (
                              <Base.Icon
                                name={feature.icon}
                                propsIcon={{ className: this.decorateCSS("feature-icon") }}
                              />
                            )}
                            {textExist && (
                              <Base.P className={this.decorateCSS("feature-text")}>{feature.text}</Base.P>
                            )}
                          </div>
                        );
                      })}
                    </Base.ListGrid>
                  )}
                </div>
              )}
            </Base.VerticalContent>

            <div className={this.decorateCSS("card-right")}>
              {taglineExist && (
                <Base.P className={this.decorateCSS("tagline")}>{card.tagline}</Base.P>
              )}
              {priceExist && (
                <Base.H3 className={this.decorateCSS("price")}>{card.price}</Base.H3>
              )}
              {cardButtons?.length > 0 && (
                <div className={this.decorateCSS("card-buttons")}>
                  {cardButtons[0] && this.castToString(cardButtons[0].text) && (
                    <ComposerLink path={this.castToString(cardButtons[0].url)}>
                      <Base.Button buttonType={this.castToString(cardButtons[0].type)} className={this.decorateCSS("card-button")}>
                        <Base.P className={this.decorateCSS("button-text")}>
                          {cardButtons[0].text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )}
                  {cardButtons[1] && this.castToString(cardButtons[1].text) && (
                    <ComposerLink path={this.castToString(cardButtons[1].url)}>
                      <Base.Button buttonType={this.castToString(cardButtons[1].type)} className={this.decorateCSS("card-button-secondary")}>
                        <Base.P className={this.decorateCSS("button-text")}>
                          {cardButtons[1].text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )}
                </div>
              )}
            </div>
          </div>

          {bottomButtonText && (
            <div className={this.decorateCSS("bottom-button-wrapper")}>
              <ComposerLink path={this.castToString(bottomButton?.url)}>
                <Base.Button buttonType={this.castToString(bottomButton?.type)} className={this.decorateCSS("bottom-button")}>
                  <Base.P className={this.decorateCSS("button-text")}>
                    {bottomButton?.text}
                  </Base.P>
                </Base.Button>
              </ComposerLink>
            </div>
          )}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable10;
