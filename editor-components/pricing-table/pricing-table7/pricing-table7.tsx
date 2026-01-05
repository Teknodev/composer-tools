import * as React from "react";
import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./pricing-table7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type PricingItem = {
  itemText: string;
  icon: TypeMediaInputValue;
};

type MonthlyPlan = {
  badge: string;
  price: string;
  duration: string;
  promoText: string;
  description: string;
  buttonType: INPUTS.CastedButton;
  item: PricingItem[];
  isActive: boolean;
  popular_settings: any;
}[];
type YearlyPlan = {
  badge: string;
  price: string;
  duration: string;
  promoText: string;
  description: string;
  buttonText: string;
  link: string;
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
      type: "string",
      key: "text",
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
              displayer: "Is Active?",
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
                      key: "itemText",
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
                      key: "itemText",
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
              displayer: "Is Active?",
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
                      key: "itemText",
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
                      key: "itemText",
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
                      key: "itemText",
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
              displayer: "Is Active?",
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
                      key: "itemText",
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
                      key: "itemText",
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
                      key: "itemText",
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
                      key: "itemText",
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
              displayer: "Is Active?",
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
                      key: "itemText",
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
                      key: "itemText",
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
              displayer: "Is Active?",
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
                      key: "itemText",
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
                      key: "itemText",
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
                      key: "itemText",
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
              displayer: "Is Active?",
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
                      key: "itemText",
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
                      key: "itemText",
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
                      key: "itemText",
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
      displayer: "Items per Row",
      value: 3,
      max: 3,
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
    const text = this.getPropValue("text");
    const yearlyLabel = this.getPropValue("yearlyLabel");
    const monthlyText = this.castToString(text);
    const yearlyText = this.castToString(yearlyLabel);

    const hasIcon = durationIcon && (durationIcon.name || durationIcon.url);
    const hasDiscountText = this.castToString(plansDiscountText);

    return (
      <div className={this.decorateCSS("duration-items")}>
        {monthlyText && (
          <Base.P
            className={`${this.decorateCSS("text")} ${
              planType === "monthlyPlan" ? this.decorateCSS("active") : ""
            }`}
          >
            {text}
          </Base.P>
        )}
        {(monthlyText && yearlyText) && (
          <div
            className={this.decorateCSS("switch")}
            onClick={this.togglePlanType.bind(this)}
          >
            <input
              className={this.decorateCSS("input")}
              type="checkbox"
              checked={planType === "yearlyPlan"}
            />
            <span
              className={`${this.decorateCSS("slider")} ${this.decorateCSS(
                "round"
              )}`}
            ></span>
          </div>
        )}
        {yearlyText && (
          <Base.P
            className={`${this.decorateCSS("yearlyText")} ${
              planType === "yearlyPlan" ? this.decorateCSS("active") : ""
            }`}
          >
            {yearlyLabel}
          </Base.P>
        )}
        {hasIcon && (
          <Base.Media
            value={durationIcon}
            className={this.decorateCSS("icon")}
          />
        )}
        {hasDiscountText && (
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
    const text = this.getPropValue("text");
    const yearlyLabel = this.getPropValue("yearlyLabel");
    const durationIcon = this.getPropValue("icon");
    const plansDiscountText = this.getPropValue("plansDiscountText");

    const planType = this.getComponentState("plan_type");
    const monthlyPlansData = this.castToObject<MonthlyPlan[]>("monthlyPlan");
    const yearlyPlansData = this.castToObject<YearlyPlan[]>("yearlyPlan");
    const monthlyText = this.castToString(text);
    const yearlyText = this.castToString(yearlyLabel);
    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);
    const hasIcon = durationIcon && (durationIcon.name || durationIcon.url);
    const hasDiscountText = this.castToString(plansDiscountText);

    const line = this.getPropValue("line");

    const badgeColors = [
      "var(--composer-primary-color)",
      "var(--composer-secondary-color)",
      "var(--composer-tertiary-color)",
    ];

    const shouldRenderDurationItems = monthlyText || yearlyText || hasIcon || hasDiscountText;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("up-text")}>
            {hasSubtitle && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}
            {hasTitle && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}
            {hasDescription && (
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {description}
              </Base.SectionDescription>
            )}
            {shouldRenderDurationItems && this.renderDurationItems()}
          </Base.VerticalContent>
          <Base.ListGrid
            gridCount={{
              pc: this.getPropValue("itemCount"),
              tablet: 1,
              phone: 1,
            }}
            className={this.decorateCSS("card")}
          >
            {(planType === "monthlyPlan" ? monthlyPlansData : yearlyPlansData).map(
              (pricing: any, index: number) => {
                const hasBadge = this.castToString(pricing.badge);
                const hasPrice = this.castToString(pricing.price);
                const hasDuration = this.castToString(pricing.duration);
                const hasPromoText = this.castToString(pricing.promoText);
                const hasDescription = this.castToString(pricing.description);
                const hasButtonText = this.castToString(pricing.button?.text);
                const hasPopularText = this.castToString(pricing.popular_settings?.text) && pricing.isActive;
                
                const validItems = pricing.item?.filter((data: any) => {
                  const hasItemText = this.castToString(data.itemText);
                  const hasItemIcon = data.icon && (data.icon.name || data.icon.url);
                  return hasItemText || hasItemIcon;
                }) || [];
                
                const hasAnyContent = hasBadge || hasPrice || hasDuration || hasPromoText || 
                                     hasDescription || hasButtonText || hasPopularText || 
                                     validItems.length > 0;
                
                if (!hasAnyContent) return null;
                
                return (
                  <div
                    key={index}
                    className={`${this.decorateCSS("card-item-count")} ${
                      this.getPropValue("animations") &&
                      this.getPropValue("animations")
                        .map((animation: string) => this.decorateCSS(animation))
                        .join(" ")
                    } `}
                  >
                    <Base.VerticalContent
                      className={`${this.decorateCSS("price")} ${
                        pricing.isActive && this.decorateCSS("active")
                      }`}
                    >
                      {this.castToString(pricing.popular_settings.text) &&
                        pricing.isActive && (
                          <div
                            className={`${this.decorateCSS(
                              "popular-box"
                            )} ${this.decorateCSS("active")}`}
                          >
                            <span className={this.decorateCSS("popular-text")}>
                              {pricing.popular_settings.text}
                            </span>
                          </div>
                        )}
                      {this.castToString(pricing.badge) && (
                        <Base.H5
                          className={`${this.decorateCSS("badge")}`}
                          style={{
                            backgroundColor:
                              badgeColors[index % badgeColors.length],
                            borderColor:
                              badgeColors[index % badgeColors.length],
                          }}
                        >
                          {pricing.badge}
                        </Base.H5>
                      )}
                      {[pricing.price, pricing.duration].some(
                        this.castToString
                      ) && (
                        <div className={this.decorateCSS("price-text")}>
                          <Base.H1 className={this.decorateCSS("price-title")}>
                            {pricing.price}
                          </Base.H1>
                          <Base.H3
                            className={this.decorateCSS("duration-text")}
                          >
                            {pricing.duration}
                          </Base.H3>
                        </div>
                      )}
                      {this.castToString(pricing.promoText) && (
                        <Base.P className={this.decorateCSS("promoText")}>
                          {pricing.promoText}
                        </Base.P>
                      )}
                      {[
                        pricing.promoText,
                        pricing.price,
                        pricing.duration,
                      ].some(this.castToString) &&
                        line && (
                          <div className={this.decorateCSS("dividers")}>
                            <div className={this.decorateCSS("divider")}></div>
                            <div className={this.decorateCSS("divider2")}></div>
                          </div>
                        )}

                      {this.castToString(pricing.description) && (
                        <Base.P className={this.decorateCSS("description")}>
                          {pricing.description}
                        </Base.P>
                      )}

                      {(() => {
                        if (!pricing.item || pricing.item.length === 0) return null;
                        
                        const validItems = pricing.item.filter((data: any) => {
                          const hasItemText = this.castToString(data.itemText);
                          const hasItemIcon = data.icon && (data.icon.name || data.icon.url);
                          return hasItemText || hasItemIcon;
                        });
                        
                        if (validItems.length === 0) return null;
                        
                        return (
                          <Base.VerticalContent
                            className={this.decorateCSS("features")}
                          >
                            {validItems.map((data: any, index: number) => {
                              const hasItemText = this.castToString(data.itemText);
                              const hasItemIcon = data.icon && (data.icon.name || data.icon.url);
                              
                              return (
                                <Base.H5
                                  className={this.decorateCSS("features-element")}
                                  key={`price7-list-${index}`}
                                >
                                  {hasItemIcon && (
                                    <Base.Media
                                      value={data.icon}
                                      className={this.decorateCSS("icon")}
                                    />
                                  )}
                                  {hasItemText && (
                                    <div
                                      className={this.decorateCSS(
                                        "features-element-text"
                                      )}
                                    >
                                      {data.itemText}
                                    </div>
                                  )}
                                </Base.H5>
                              );
                            })}
                          </Base.VerticalContent>
                        );
                      })()}

                      {this.castToString(pricing.button.text) && (
                        <ComposerLink path={pricing.button.url}>
                          <Base.Button
                            buttonType={pricing.button.type}
                            className={`${this.decorateCSS("button")} ${
                              pricing.isActive &&
                              this.decorateCSS("button-active")
                            }`}
                          >
                            {pricing.button.text}
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </Base.VerticalContent>
                  </div>
                );
              }
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable7;
