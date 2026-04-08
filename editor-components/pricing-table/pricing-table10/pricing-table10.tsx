import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FeatureItem = {
  icon: string;
  text: React.JSX.Element;
};

type CardData = {
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
  featuresLabel: React.JSX.Element;
  features: FeatureItem[];
  tagline: React.JSX.Element;
  price: React.JSX.Element;
  primaryButton: INPUTS.CastedButton;
  secondaryButtonText: React.JSX.Element;
  secondaryButtonUrl: string;
};

class PricingTable10 extends BasePricingTable {
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
      value: "Simple no-tricks pricing",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "If you're not satisfied, contact us within 14 days and we'll send you a full refund",
    });

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
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
        INPUTS.BUTTON("primaryButton", "Primary Button", "GET ACCESS", "", null, null, "Primary"),
        {
          type: "string",
          key: "secondaryButtonText",
          displayer: "Secondary Button Text",
          value: "Get a free sample (20mb)",
        },
        {
          type: "string",
          key: "secondaryButtonUrl",
          displayer: "Secondary Button URL",
          value: "",
        },
      ],
    });
  }

  static getName(): string {
    return "Pricing 10";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const card = this.castToObject<CardData>("card");
    const cardTitleExist = this.castToString(card.cardTitle);
    const cardDescriptionExist = this.castToString(card.cardDescription);
    const featuresLabelExist = this.castToString(card.featuresLabel);
    const taglineExist = this.castToString(card.tagline);
    const priceExist = this.castToString(card.price);
    const secondaryButtonTextExist = this.castToString(card.secondaryButtonText);
    const primaryButtonTextExist = this.castToString(card.primaryButton?.text);

    const animations = this.getPropValue("animations") as string[];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
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
            </Base.VerticalContent>
          )}

          <div
            className={this.decorateCSS("card")}
          >

            <div className={this.decorateCSS("card-left")}>
              {cardTitleExist && (
                <Base.H3 className={this.decorateCSS("card-title")}>{card.cardTitle}</Base.H3>
              )}
              {cardDescriptionExist && (
                <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>
              )}
              {(featuresLabelExist || card.features?.length > 0) && (
                <div className={this.decorateCSS("features-section")}>
                  {featuresLabelExist && (
                    <Base.H3 className={this.decorateCSS("features-label")}>{card.featuresLabel}</Base.H3>
                  )}
                  <div className={this.decorateCSS("features-grid")}>
                    {card.features?.map((feature: FeatureItem, index: number) => {
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
                  </div>
                </div>
              )}
            </div>

            {/* Right side */}
            <div className={this.decorateCSS("card-right")}>
              {taglineExist && (
                <Base.P className={this.decorateCSS("tagline")}>{card.tagline}</Base.P>
              )}
              {priceExist && (
                <Base.H3 className={this.decorateCSS("price")}>{card.price}</Base.H3>
              )}
              {primaryButtonTextExist && (
                <Base.Button
                  buttonType={card.primaryButton.type}
                  className={this.decorateCSS("primary-button")}
                >
                  <ComposerLink path={this.castToString(card.primaryButton.url) || ""}>
                    {card.primaryButton.text}
                  </ComposerLink>
                </Base.Button>
              )}
              {secondaryButtonTextExist && (
                <ComposerLink path={this.castToString(card.secondaryButtonUrl) || ""}>
                  <Base.P className={this.decorateCSS("secondary-button")}>{card.secondaryButtonText}</Base.P>
                </ComposerLink>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable10;
