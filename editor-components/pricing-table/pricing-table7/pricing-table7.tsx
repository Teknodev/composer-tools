import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
  buttonText: string;
  link: string;
  item: PricingItem[];
  isActive: boolean;
  popular_settings: any;
  isHoverActive: boolean;
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
  isHoverActive: boolean;
}[];

class PricingTable7 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TAILORED PRICING"
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "FLEXIBLE PRICING OPTIONS"
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description ",
      value: "Whether you're a startup,a growing business,or an enterprise,our pricing plans are designed to accommodate various requirements."
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
      value: "HiArrowDownLeft"
    });
    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Plan's Discount",
      value: "(Save 20%)",
    });
    this.addProp({
      type: "boolean",
      key: "isHoverActive",
      displayer: "Hover Activation",
      value: true,
    });

    this.addProp(
      {
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
                    value: "Most Popular"
                  },
                ]
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
                value: "Get your 14 day free trial."
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "Our Basic Plan is the perfect entry point for those seeking essential features to get started."
              },
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Purchase Now",
              },
              {
                type: "page",
                key: "link",
                displayer: "Button Link",
                value: "",
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
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                    value: "Most Popular"
                  },

                ]
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
                value: "Billed $276 per website annually."
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "Step up your game with our Pro Plan designed for those who demand more from their experience."
              },
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Purchase Now",
              },
              {
                type: "page",
                key: "link",
                displayer: "Button Link",
                value: "",
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
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                    value: "Most Popular"
                  },

                ]
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
                value: "Billed $276 per website annually."
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "The Advanced Plan is the pinnacle of our offerings,meticulously curated for those who demand excellence in every aspect."
              },
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Purchase Now",
              },
              {
                type: "page",
                key: "link",
                displayer: "Button Link",
                value: "",
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
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
        ]
      },
    );
    this.addProp(
      {
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
                    value: "Most Popular"
                  },

                ]
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
                value: "Get your 14 day free trial."
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "Our Basic Plan is the perfect entry point for those seeking essential features to get started."
              },
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Purchase Now",
              },
              {
                type: "page",
                key: "link",
                displayer: "Button Link",
                value: "",
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
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                    value: "Most Popular"
                  },
                ]
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
                value: "Billed $276 per website annually."
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "Step up your game with our Pro Plan designed for those who demand more from their experience."
              },
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Purchase Now",
              },
              {
                type: "page",
                key: "link",
                displayer: "Button Link",
                value: "",
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
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                    value: "Most Popular"
                  },
                ]
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
                value: "Billed $276 per website annually."
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "The Advanced Plan is the pinnacle of our offerings,meticulously curated for those who demand excellence in every aspect."
              },
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Purchase Now",
              },
              {
                type: "page",
                key: "link",
                displayer: "Button Link",
                value: "",
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
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
                        value: "CiCircleCheck"
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
        ]
      })
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Items per Row",
      value: 3,
      max: 3
    });

    this.setComponentState("plan_type", "monthly-plans");
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
  }

  getName(): string {
    return "Pricing Table 7";
  }


  togglePlanType() {
    const currentPlanType = this.getComponentState("plan_type");
    const newPlanType = currentPlanType === "monthly-plans" ? "yearly-plans" : "monthly-plans";
    this.setComponentState("plan_type", newPlanType);
  }

  renderDurationItems() {
    const planType = this.getComponentState("plan_type");
    const monthlyText = this.getPropValue("text", { as_string: true });
    const yearlyText = this.getPropValue("text1", { as_string: true });
    const durationIcon = this.getPropValue("icon");
    const plansDiscountText = this.getPropValue("text2");

    return (
      <div className={this.decorateCSS("duration-items")}>
        <span className={this.decorateCSS("text")}>{monthlyText}</span>
        <div className={this.decorateCSS("switch")} onClick={this.togglePlanType.bind(this)}>
          <input className={this.decorateCSS("input")} type="checkbox" checked={planType === "yearly-plans"} />
          <span className={`${this.decorateCSS("slider")} ${this.decorateCSS("round")}`}></span>
        </div>
        <span className={this.decorateCSS("text1")}>{yearlyText}</span>
        <ComposerIcon name={durationIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
        <span className={this.decorateCSS("text2")}>{plansDiscountText}</span>
      </div>
    );
  }


  render() {
    const planType = this.getComponentState("plan_type");
    const monthly_plans = this.castToObject<MonthlyPlan[]>("monthly_plans");
    const yearly_plans = this.castToObject<YearlyPlan[]>("yearly_plans");
    const monthlyText = this.getPropValue("text", { as_string: true });
    const yearlyText = this.getPropValue("text1", { as_string: true });
    const subtitle = this.getPropValue("subtitle", { as_string: true });
    const title = this.getPropValue("title", { as_string: true });
    const description = this.getPropValue("description", { as_string: true });
    const isHoverActive = this.getPropValue("isHoverActive", { as_string: true });

    const badgeColors = [
      'var(--composer-primary-color)',
      'var(--composer-secondary-color)',
      'var(--composer-tertiary-color)',
    ];

    const shouldRenderIconAndDiscount = monthlyText && yearlyText;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-text")}>
            {subtitle && <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>}
            {title && <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>}
            {description && <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>}
            {shouldRenderIconAndDiscount && this.renderDurationItems()}
          </div>
          <div className={this.decorateCSS("card")}>
            {(planType === "monthly-plans" ? monthly_plans : yearly_plans).map((pricing: any, index: number) => {
              return (

                <div className={this.decorateCSS("card-item-count")} style={{
                  width: `calc((100% / ${this.getPropValue("itemCount")}) - 20px)`,
                }}>

                  <div key={index} className={`${this.decorateCSS("price")} ${pricing.isActive && this.decorateCSS("active")} && 
                  ${isHoverActive ? this.decorateCSS("price-hover") : ""}
                  }`}>

                    {this.castToString(pricing.popular_settings.text) && pricing.isActive && (
                      <div className={`${this.decorateCSS("popular-box")} ${this.decorateCSS("active")}`}>
                        <span className={this.decorateCSS("popular-text")}>{pricing.popular_settings.text}</span>
                      </div>
                    )}
                    {this.castToString(pricing.badge) && (
                      <div className={`${this.decorateCSS("badge")}`}
                        style={{
                          backgroundColor: badgeColors[index % badgeColors.length],
                          borderColor: badgeColors[index % badgeColors.length],
                        }}
                      >{pricing.badge}
                      </div>
                    )}
                    {[pricing.price, pricing.duration].some(this.castToString) && (
                      <div className={this.decorateCSS("price-text")}>
                        <h1 className={this.decorateCSS("price-title")}>{pricing.price}</h1>
                        <p className={this.decorateCSS("duration-text")}>{pricing.duration}</p>
                      </div>
                    )}
                    {this.castToString(pricing.promoText) && <span className={this.decorateCSS("promoText")}>{pricing.promoText}</span>}
                    {[pricing.promoText, pricing.price, pricing.duration].some(this.castToString) && (
                      <>
                        <hr className={this.decorateCSS("divider")} />
                      </>
                    )}

                    {this.castToString(pricing.description) &&
                      <p className={this.decorateCSS("description")}>{pricing.description}</p>
                    }

                    {pricing.item.length > 0 && <ul className={this.decorateCSS("features")}>
                      {pricing.item.map((data: any, index: number) => (
                        <li key={`price7-list-${index}`}>
                          <ComposerIcon name={data.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                          {data.itemText}
                        </li>
                      ))}
                    </ul>}

                    {this.castToString(pricing.buttonText) &&
                      <ComposerLink path={pricing.link}>
                        <span
                          className={`${this.decorateCSS("button")} ${pricing.isActive ? this.decorateCSS("button-active") : ""}`}
                        >
                          {this.castToString(pricing.buttonText)}
                        </span>
                      </ComposerLink>
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTable7;
