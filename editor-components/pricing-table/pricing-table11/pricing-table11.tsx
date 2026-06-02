import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type FeatureItem = {
  icon: TypeMediaInputValue;
  text: string;
};

type CardContent = {
  cardSubtitle: string;
  cardTitle: string;
  cardDescription: string;
};

class PricingTable11 extends BasePricingTable {
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
      value: "Everything you need for <span style='color: var(--composer-primary-color)'>$99 a month</span>",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Includes every feature we offer plus unlimited events and unlimited team members.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "START A 30 DAY FREE TRIAL", "", null, null, "Black"),
      ],
    });

    this.addProp({
      type: "object",
      key: "cardContent",
      displayer: "Card Content",
      value: [
        {
          type: "string",
          key: "cardSubtitle",
          displayer: "Subtitle",
          value: "Everything you need",
        },
        {
          type: "string",
          key: "cardTitle",
          displayer: "Title",
          value: "All-in-one platform",
        },
        {
          type: "string",
          key: "cardDescription",
          displayer: "Description",
          value: "Get the full TicketBalloon platform to power all your events at a single flat monthly price.",
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
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
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Unlimited events" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Secure payments" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Unlimited team members" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Own your data" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Unlimited bookings" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Real-time dashboards" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Group and individual bookings" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "CSV data exports" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Group leader admin panel" },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "media", key: "icon", displayer: "Icon", value: { type: "icon", name: "FaCheckCircle" }, additionalParams: { availableTypes: ["icon", "image"] } },
            { type: "string", key: "text", displayer: "Text", value: "Priority 24/7 support" },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCountInARow",
      displayer: "Item Count in a Row",
      value: 2,
    });
  }

  static getName(): string {
    return "Pricing 11";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const buttonsExist = buttons?.some((btn: INPUTS.CastedButton) => this.castToString(btn.text));

    const cardContent = this.castToObject<CardContent>("cardContent");
    const cardSubtitleExist = this.castToString(cardContent.cardSubtitle);
    const cardTitleExist = this.castToString(cardContent.cardTitle);
    const cardDescriptionExist = this.castToString(cardContent.cardDescription);

    const line = this.getPropValue("line");
    const features = this.castToObject<FeatureItem[]>("features");
    const itemCountInARow = this.getPropValue("itemCountInARow");

    const topSectionExist = subtitleExist || titleExist || descriptionExist || buttonsExist;
    const cardHeaderExist = cardSubtitleExist || cardTitleExist || cardDescriptionExist;
    const bottomSectionExist = cardHeaderExist || features?.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {topSectionExist && (
            <div className={this.decorateCSS("top-card")}>
              {(subtitleExist || titleExist || descriptionExist) &&
                <Base.VerticalContent className={this.decorateCSS("top-card-left")}>
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
              }
              {buttonsExist && (
                <div className={this.decorateCSS("top-card-right")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonText = this.castToString(button.text);
                    return (
                      buttonText && (
                        <ComposerLink key={index} path={this.castToString(button.url)}>
                          <Base.Button buttonType={this.castToString(button.type)} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>
                              {button.text}
                            </Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {bottomSectionExist && (
            <div className={this.decorateCSS("bottom-card")}>
              {cardHeaderExist && (
                <Base.VerticalContent className={`${this.decorateCSS("bottom-card-header")} ${!(features?.length > 0) && this.decorateCSS("full-width")}`}>
                  {cardSubtitleExist && (
                    <Base.P className={this.decorateCSS("card-subtitle")}>
                      {cardContent.cardSubtitle}
                    </Base.P>
                  )}
                  {cardTitleExist && (
                    <Base.H3 className={this.decorateCSS("card-title")}>
                      {cardContent.cardTitle}
                    </Base.H3>
                  )}
                  {cardDescriptionExist && (
                    <Base.P className={this.decorateCSS("card-description")}>
                      {cardContent.cardDescription}
                    </Base.P>
                  )}
                </Base.VerticalContent>
              )}
              {features?.length > 0 && (
                <div className={this.decorateCSS("features-section")}>
                  <Base.ListGrid
                    gridCount={{ pc: itemCountInARow, tablet: itemCountInARow, phone: 1 }}
                    className={this.decorateCSS("features-grid")}
                  >
                    {features.map((feature: FeatureItem, index: number) => {
                      const textExist = this.castToString(feature.text);
                      return (textExist || feature.icon) && (
                        <div key={index} className={`${this.decorateCSS("feature-item")} ${line && index < features.length - (features.length % itemCountInARow === 0 ? itemCountInARow : features.length % itemCountInARow) ? this.decorateCSS("feature-item-line") : ""}`}>
                          {feature.icon && (
                            <Base.Media
                              value={feature.icon}
                              className={this.decorateCSS("feature-icon")}
                            />
                          )}
                          {textExist && (
                            <Base.P className={this.decorateCSS("feature-text")}>{feature.text}</Base.P>
                          )}
                        </div>
                      );
                    })}
                  </Base.ListGrid>
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable11;