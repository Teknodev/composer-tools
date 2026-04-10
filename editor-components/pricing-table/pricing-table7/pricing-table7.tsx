import * as React from "react";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table7.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type PricingItem = {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
};

type MonthlyPlan = {
  badge: React.JSX.Element;
  price: React.JSX.Element;
  duration: React.JSX.Element;
  promoText: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  item: PricingItem[];
  isActive: boolean;
  popular_settings: any;
}[];
type YearlyPlan = {
  badge: React.JSX.Element;
  price: React.JSX.Element;
  duration: React.JSX.Element;
  promoText: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
  item: PricingItem[];
  isActive: boolean;
  popular_settings: any;
}[];

class PricingTable7 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TAILORED PRICING",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "FLEXIBLE PRICING OPTIONS",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description ",
      value:
        "Whether you're a startup,a growing business,or an enterprise,our pricing plans are designed to accommodate various requirements.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "string",
      key: "monthlyLabel",
      displayer: "Monthly Plan",
      value: "Monthly",
    });
    this.addProp({
      type: "string",
      key: "yearlyLabel",
      displayer: "Yearly Plan",
      value: "Yearly",
    });
    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Plan's Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: { type: "icon", name: "BsArrowReturnLeft" },
    });

    this.addProp({
      type: "string",
      key: "plansDiscountText",
      displayer: "Plan's Discount",
      value: "(Save 20%)",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "monthlyPlan",
      displayer: "Monthly Plans",
      value: [
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Title",
                  value: "Most Popular",
                },
              ],
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
              value: false,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "Basic",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$25",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/mo",
            },
            {
              type: "string",
              key: "promoText",
              displayer: "Promo Text",
              value: "Get your 14 day free trial.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Our Basic Plan is the perfect entry point for those seeking essential features to get started.",
            },
            {
              type: "array",
              key: "item",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Case Management",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Task Management",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Title",
                  value: "Most Popular",
                },
              ],
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
              value: true,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "Pro",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$50",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/mo",
            },
            {
              type: "string",
              key: "promoText",
              displayer: "Promo Text",
              value: "Billed $276 per website annually.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Step up your game with our Pro Plan designed for those who demand more from their experience.",
            },
            {
              type: "array",
              key: "item",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Unlimited eSignature",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Custom Fields",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Client Intake Management",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),

          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Title",
                  value: "Most Popular",
                },
              ],
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
              value: false,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "Advanced",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$89",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/mo",
            },
            {
              type: "string",
              key: "promoText",
              displayer: "Promo Text",
              value: "Billed $276 per website annually.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "The Advanced Plan is the pinnacle of our offerings,meticulously curated for those who demand excellence in every aspect.",
            },
            {
              type: "array",
              key: "item",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Everything in Basic & Pro",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "MyCase Drive",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Advanced Document",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Full Text Search",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "yearlyPlan",
      displayer: "Yearly Plans",
      value: [
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Title",
                  value: "Most Popular",
                },
              ],
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
              value: false,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "Basic",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$250",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/ year",
            },
            {
              type: "string",
              key: "promoText",
              displayer: "Promo Text",
              value: "Get your 14 day free trial.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Our Basic Plan is the perfect entry point for those seeking essential features to get started.",
            },
            {
              type: "array",
              key: "item",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Case Management",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Task Management",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Title",
                  value: "Most Popular",
                },
              ],
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
              value: true,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "Pro",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$500",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/ year",
            },
            {
              type: "string",
              key: "promoText",
              displayer: "Promo Text",
              value: "Billed $276 per website annually.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Step up your game with our Pro Plan designed for those who demand more from their experience.",
            },
            {
              type: "array",
              key: "item",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Unlimited eSignature",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Custom Fields",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Client Intake Management",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "object",
              key: "popular_settings",
              displayer: "Popular Settings",
              value: [
                {
                  type: "string",
                  key: "text",
                  displayer: "Title",
                  value: "Most Popular",
                },
              ],
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Card Active",
              value: false,
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "Advanced",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$890",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "/ year",
            },
            {
              type: "string",
              key: "promoText",
              displayer: "Promo Text",
              value: "Billed $276 per website annually.",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "The Advanced Plan is the pinnacle of our offerings,meticulously curated for those who demand excellence in every aspect.",
            },
            {
              type: "array",
              key: "item",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Everything in Basic & Pro",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "MyCase Drive",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Advanced Document",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "FcApproval" },
                    },
                    {
                      type: "string",
                      key: "text",
                      displayer: "Text",
                      value: "Full Text Search",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),
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
    this.addProp({
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation3", "animation4"],
      additionalParams: {
        selectItems: ["animation1", "animation2", "animation3", "animation4"],
      },
    });

    this.setComponentState("plan_type", "monthlyPlan");
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
  }

  static getName(): string {
    return "Pricing 7";
  }

  togglePlanType() {
    const currentPlanType = this.getComponentState("plan_type");
    const newPlanType =
      currentPlanType === "monthlyPlan" ? "yearlyPlan" : "monthlyPlan";
    this.setComponentState("plan_type", newPlanType);
  }

  renderDurationItems() {
    const planType = this.getComponentState("plan_type");
    const durationIcon = this.getPropValue("icon");
    const plansDiscountText = this.getPropValue("plansDiscountText");
    const monthlyLabel = this.getPropValue("monthlyLabel");
    const yearlyLabel = this.getPropValue("yearlyLabel");

    const monthlyTextExist = this.castToString(monthlyLabel);
    const yearlyTextExist = this.castToString(yearlyLabel);
    const iconExist = durationIcon && (durationIcon.name || durationIcon.url);
    const discountTextExist = this.castToString(plansDiscountText);

    return (
      <div className={this.decorateCSS("duration-items")}>
        {monthlyTextExist && (
          <Base.P
            className={`${this.decorateCSS("text")} ${planType === "monthlyPlan" ? this.decorateCSS("active") : ""
              }`}
          >
            {monthlyLabel}
          </Base.P>
        )}
        {monthlyTextExist && yearlyTextExist && (
          <div
            className={this.decorateCSS("switch")}
            onClick={this.togglePlanType.bind(this)}
          >
            <input
              className={this.decorateCSS("input")}
              type="checkbox"
              checked={planType === "yearlyPlan"}
              onChange={() => { }}
            />
            <span
              className={`${this.decorateCSS("slider")} ${this.decorateCSS(
                "round"
              )}`}
            ></span>
          </div>
        )}
        {yearlyTextExist && (
          <Base.P
            className={`${this.decorateCSS("yearlyText")} ${planType === "yearlyPlan" ? this.decorateCSS("active") : ""
              }`}
          >
            {yearlyLabel}
          </Base.P>
        )}
        {iconExist && (
          <Base.Media
            value={durationIcon}
            className={this.decorateCSS("icon")}
          />
        )}
        {discountTextExist && (
          <Base.P className={this.decorateCSS("planDiscount")}>
            {plansDiscountText}
          </Base.P>
        )}
      </div>
    );
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const monthlyLabel = this.getPropValue("monthlyLabel");
    const yearlyLabel = this.getPropValue("yearlyLabel");
    const durationIcon = this.getPropValue("icon");
    const plansDiscountText = this.getPropValue("plansDiscountText");
    const animations = this.getPropValue("animations")
      .map((animation: string) => this.decorateCSS(animation))
      .join(" ");

    const planType = this.getComponentState("plan_type");
    const monthlyPlansData = this.castToObject<MonthlyPlan>("monthlyPlan");
    const yearlyPlansData = this.castToObject<YearlyPlan>("yearlyPlan");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const monthlyLabelExist = this.castToString(monthlyLabel);
    const yearlyLabelExist = this.castToString(yearlyLabel);
    const durationIconExist =
      durationIcon && (durationIcon.name || durationIcon.url);
    const discountTextExist = this.castToString(plansDiscountText);

    const hasValidButtons = buttons.some((btn) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && btn.icon.name;
      return buttonText || iconExist;
    });

    const line = this.getPropValue("line");

    const badgeColors = [
      "var(--composer-primary-color)",
      "var(--composer-secondary-color)",
      "var(--composer-tertiary-color)",
    ];

    const showDuration =
      monthlyLabelExist ||
      yearlyLabelExist ||
      durationIconExist ||
      discountTextExist;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("up-text")}>
            {subtitleExist && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}
            {descriptionExist && (
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {description}
              </Base.SectionDescription>
            )}
            {hasValidButtons && (
              <div className={this.decorateCSS("button-container")}>
                {buttons.map((item: INPUTS.CastedButton, index: number) => {
                  const btnTextExist = this.castToString(item.text);
                  const btnMediaExist =
                    item.icon && (item.icon.name || item.icon.url);

                  if (!btnTextExist && !btnMediaExist) return null;

                  return (
                    <ComposerLink key={index} path={item.url || "#"}>
                      <Base.Button
                        buttonType={item.type}
                        className={this.decorateCSS("button")}
                      >
                        {btnMediaExist && (
                          <Base.Media
                            value={item.icon}
                            className={this.decorateCSS("button-icon")}
                          />
                        )}
                        {btnTextExist && (
                          <Base.P className={this.decorateCSS("button-text")}>
                            {item.text}
                          </Base.P>
                        )}
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
            {showDuration && this.renderDurationItems()}
          </Base.VerticalContent>
          <Base.ListGrid
            gridCount={{
              pc: this.getPropValue("itemCount"),
              tablet: 3,
              phone: 1,
            }}
            className={this.decorateCSS("card")}
          >
            {(planType === "monthlyPlan" ? monthlyPlansData : yearlyPlansData).map(
              (pricing: MonthlyPlan[number] | YearlyPlan[number], index: number) => {
                const cardSubtitleExist = this.castToString(pricing.badge);
                const cardTitleExist = this.castToString(pricing.price);
                const cardDurationExist = this.castToString(pricing.duration);
                const promoTextExist = this.castToString(pricing.promoText);
                const planDescriptionExist = this.castToString(
                  pricing.description
                );
                const buttonText = this.castToString(pricing.button?.text);
                const buttonIconExist = pricing.button?.icon && pricing.button.icon.name;
                const hasValidCardButton = buttonText || buttonIconExist;

                const popularText = this.castToString(pricing.popular_settings?.text);
                const popularBoxExist = popularText && pricing.isActive;

                const validItems =
                  pricing.item?.filter((data: any) => {
                    const hasItemText = this.castToString(data.text);
                    const hasItemIcon =
                      data.icon && (data.icon.name || data.icon.url);
                    return hasItemText || hasItemIcon;
                  }) || [];

                const hasAnyContent =
                  cardSubtitleExist ||
                  cardTitleExist ||
                  cardDurationExist ||
                  promoTextExist ||
                  planDescriptionExist ||
                  hasValidCardButton ||
                  popularBoxExist ||
                  validItems.length > 0;

                if (!hasAnyContent) return null;

                return (
                  <div
                    key={index}
                    className={`${this.decorateCSS(
                      "card-item-count"
                    )} ${animations}`}
                  >
                    <Base.VerticalContent
                      className={`${this.decorateCSS("price")} ${pricing.isActive ? this.decorateCSS("active") : ""
                        }`}
                    >
                      {popularBoxExist && (
                        <div
                          className={this.decorateCSS("popular-box")}
                        >
                          <Base.P className={this.decorateCSS("popular-text")}>
                            {pricing.popular_settings.text}
                          </Base.P>
                        </div>
                      )}
                      {cardSubtitleExist && (
                        <Base.H5
                          className={this.decorateCSS("badge")}
                          style={{
                            backgroundColor:
                              badgeColors[index % badgeColors.length],
                            borderColor: badgeColors[index % badgeColors.length],
                          }}
                        >
                          {pricing.badge}
                        </Base.H5>
                      )}
                      {(cardTitleExist || cardDurationExist) && (
                        <div className={this.decorateCSS("price-text")}>
                          {cardTitleExist && (
                            <Base.H1 className={this.decorateCSS("price-title")}>
                              {pricing.price}
                            </Base.H1>
                          )}
                          {cardDurationExist && (
                            <Base.H5
                              className={this.decorateCSS("duration-text")}
                            >
                              {pricing.duration}
                            </Base.H5>
                          )}
                        </div>
                      )}
                      {promoTextExist && (
                        <Base.P className={this.decorateCSS("promoText")}>
                          {pricing.promoText}
                        </Base.P>
                      )}
                      {(promoTextExist || cardTitleExist || cardDurationExist) && line && (
                        <div className={this.decorateCSS("dividers")}>
                          <div className={this.decorateCSS("divider")}></div>
                          <div className={this.decorateCSS("divider2")}></div>
                        </div>
                      )}

                      {planDescriptionExist && (
                        <Base.P className={this.decorateCSS("description")}>
                          {pricing.description}
                        </Base.P>
                      )}

                      {validItems.length > 0 && (
                        <Base.VerticalContent
                          className={this.decorateCSS("features")}
                        >
                          {validItems.map((data: any, featureIndex: number) => {
                            const itemTextExist = this.castToString(data.text);
                            const itemIconExist =
                              data.icon && (data.icon.name || data.icon.url);

                            return (
                              <div
                                className={this.decorateCSS("features-element")}
                                key={`price7-list-${featureIndex}`}
                              >
                                {itemIconExist && (
                                  <Base.Media
                                    value={data.icon}
                                    className={this.decorateCSS("icon")}
                                  />
                                )}
                                {itemTextExist && (
                                  <Base.H6
                                    className={this.decorateCSS(
                                      "features-element-text"
                                    )}
                                  >
                                    {data.text}
                                  </Base.H6>
                                )}
                              </div>
                            );
                          })}
                        </Base.VerticalContent>
                      )}

                      {hasValidCardButton && (
                        <ComposerLink path={pricing.button.url || "#"}>
                          <Base.Button
                            buttonType={pricing.button.type}
                            className={`${this.decorateCSS("button")} ${pricing.isActive ? this.decorateCSS("button-active") : ""
                              }`}
                          >
                            {buttonText && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {pricing.button.text}
                              </Base.P>
                            )}
                            {buttonIconExist && (
                              <Base.Media
                                className={this.decorateCSS("button-icon")}
                                value={pricing.button.icon}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
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

export default PricingTable7;
