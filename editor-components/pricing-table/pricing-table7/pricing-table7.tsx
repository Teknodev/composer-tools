import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { TiThSmall } from "react-icons/ti";

type PricingItem = {
  itemText: string;
  icon: string;
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
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Monthly Plan",
      value: "Monthly",
    });
    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Yearly Plan",
      value: "Yearly",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Plan's Icon",
      value: "BsArrowReturnLeft",
    });
    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Plan's Discount",
      value: "(Save 20%)",
    });

    this.addProp({
      type: "array",
      key: "monthly_plans",
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
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),

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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),

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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "yearly_plans",
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
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),

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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),

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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
            INPUTS.BUTTON(
              "button",
              "Button",
              "Join this plan",
              "",
              null,
              null,
              "Primary"
            ),

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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "FcApproval",
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

    this.setComponentState("plan_type", "monthly-plans");
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
      currentPlanType === "monthly-plans" ? "yearly-plans" : "monthly-plans";
    this.setComponentState("plan_type", newPlanType);
  }

  renderDurationItems() {
    const planType = this.getComponentState("plan_type");
    const durationIcon = this.getPropValue("icon");
    const plansDiscountText = this.getPropValue("text2");

    return (
      <div className={this.decorateCSS("duration-items")}>
        <Base.P
          className={`${this.decorateCSS("text")} ${
            planType === "monthly-plans" ? this.decorateCSS("active") : ""
          }`}
        >
          {this.getPropValue("text")}
        </Base.P>
        <div
          className={this.decorateCSS("switch")}
          onClick={this.togglePlanType.bind(this)}
        >
          <input
            className={this.decorateCSS("input")}
            type="checkbox"
            checked={planType === "yearly-plans"}
          />
          <span
            className={`${this.decorateCSS("slider")} ${this.decorateCSS(
              "round"
            )}`}
          ></span>
        </div>
        <Base.P
          className={`${this.decorateCSS("yearlyText")} ${
            planType === "yearly-plans" ? this.decorateCSS("active") : ""
          }`}
        >
          {this.getPropValue("text1")}
        </Base.P>
        <ComposerIcon
          name={durationIcon}
          propsIcon={{ className: this.decorateCSS("icon") }}
        />
        <Base.P className={this.decorateCSS("planDiscount")}>
          {plansDiscountText}
        </Base.P>
      </div>
    );
  }

  render() {
    const planType = this.getComponentState("plan_type");
    const monthly_plans = this.castToObject<MonthlyPlan[]>("monthly_plans");
    const yearly_plans = this.castToObject<YearlyPlan[]>("yearly_plans");
    const monthlyText = this.castToString(this.getPropValue("text"));
    const yearlyText = this.castToString(this.getPropValue("text1"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const line = this.getPropValue("line");

    const badgeColors = [
      "var(--composer-primary-color)",
      "var(--composer-secondary-color)",
      "var(--composer-tertiary-color)",
    ];

    const shouldRenderIconAndDiscount = monthlyText && yearlyText;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("up-text")}>
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
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
            {shouldRenderIconAndDiscount && this.renderDurationItems()}
          </Base.VerticalContent>
          <Base.ListGrid
            gridCount={{
              pc: this.getPropValue("itemCount"),
              tablet: 1,
              phone: 1,
            }}
            className={this.decorateCSS("card")}
          >
            {(planType === "monthly-plans" ? monthly_plans : yearly_plans).map(
              (pricing: any, index: number) => {
                return (
                  <div
                    className={`${this.decorateCSS("card-item-count")} ${
                      this.getPropValue("animations") &&
                      this.getPropValue("animations")
                        .map((animation: string) => this.decorateCSS(animation))
                        .join(" ")
                    } `}
                  >
                    <Base.VerticalContent
                      key={index}
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
                        <Base.H2
                          className={`${this.decorateCSS("badge")}`}
                          style={{
                            backgroundColor:
                              badgeColors[index % badgeColors.length],
                            borderColor:
                              badgeColors[index % badgeColors.length],
                          }}
                        >
                          {pricing.badge}
                        </Base.H2>
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

                      {pricing.item.length > 0 && (
                        <Base.VerticalContent
                          className={this.decorateCSS("features")}
                        >
                          {pricing.item.map((data: any, index: number) => (
                            <Base.H5
                              className={this.decorateCSS("features-element")}
                              key={`price7-list-${index}`}
                            >
                              <ComposerIcon
                                name={data.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                              <div
                                className={this.decorateCSS(
                                  "features-element-text"
                                )}
                              >
                                {" "}
                                {data.itemText}
                              </div>
                            </Base.H5>
                          ))}
                        </Base.VerticalContent>
                      )}

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
