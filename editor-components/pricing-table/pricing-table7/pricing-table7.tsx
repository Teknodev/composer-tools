import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { ToggleButton } from "@mui/material";

type PricingItem = {
  itemText: string;
  icon: string;
};


type MonthlyPlan = {
  badge: string;
  price: string;
  duration: string;
  text: string;
  description: string;
  buttonText: string;
  link: string;
  item: PricingItem[];
  isActive: boolean;
  popular_settings: any;
}[];
type YearlyPlan = {
  badge: string;
  price: string;
  duration: string;
  text: string;
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
      value: "TAILORED PRICING"
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "FLEXİBLE PRİCİNG OPTİONS"
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
      displayer: "Text",
      value: "Monthly",
    });
    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Text 1",
      value: "Yearly",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "HiArrowDownLeft"
    });
    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Text 2",
      value: "(Save 20%)",
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
                    displayer: "Text",
                    value: "Most Popular"
                  },
                  {
                    type: "boolean",
                    key: "is_popular",
                    displayer: "Is Popular?",
                    value: false
                  },
                ]
              },
              {
                type: "string",
                key: "badge",
                displayer: "badge",
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
                value: "/ month",
              },
              {
                type: "string",
                key: "text",
                displayer: "Text",
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
                displayer: "Item",
                value: [
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Case Management",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Task Management",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                key: "isActive",
                displayer: "ıs active",
                value: false,
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
                    displayer: "Text",
                    value: "Most Popular"
                  },
                  {
                    type: "boolean",
                    key: "is_popular",
                    displayer: "Is Popular?",
                    value: true
                  },
                ]
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
                value: "/ month",
              },
              {
                type: "string",
                key: "text",
                displayer: "Text",
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
                displayer: "Item",
                value: [
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Unlimited eSignature",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Custom Fields",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Client Intake Management",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                key: "isActive",
                displayer: "ıs active",
                value: true,
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
                    displayer: "Text",
                    value: "Most Popular"
                  },
                  {
                    type: "boolean",
                    key: "is_popular",
                    displayer: "Is Popular?",
                    value: false
                  },
                ]
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
                value: "/ month",
              },
              {
                type: "string",
                key: "text",
                displayer: "Text",
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
                displayer: "Item",
                value: [
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Everything in Basic & Pro",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "MyCase Drive",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Advanced Document",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Full Text Search",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                key: "isActive",
                displayer: "ıs active",
                value: false,
              }
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
                    displayer: "Text",
                    value: "Most Popular"
                  },
                  {
                    type: "boolean",
                    key: "is_popular",
                    displayer: "Is Popular?",
                    value: false
                  },
                ]
              },
              {
                type: "string",
                key: "badge",
                displayer: "badge",
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
                key: "text",
                displayer: "Text",
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
                displayer: "Item",
                value: [
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Case Management",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Task Management",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                key: "isActive",
                displayer: "ıs active",
                value: false,
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
                    displayer: "Text",
                    value: "Most Popular"
                  },
                  {
                    type: "boolean",
                    key: "is_popular",
                    displayer: "Is Popular?",
                    value: true
                  },
                ]
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
                key: "text",
                displayer: "Text",
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
                displayer: "Item",
                value: [
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Unlimited eSignature",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Custom Fields",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Client Intake Management",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                key: "isActive",
                displayer: "ıs active",
                value: true,
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
                    displayer: "Text",
                    value: "Most Popular"
                  },
                  {
                    type: "boolean",
                    key: "is_popular",
                    displayer: "Is Popular?",
                    value: false
                  },
                ]
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
                key: "text",
                displayer: "Text",
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
                displayer: "Item",
                value: [
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Everything in Basic & Pro",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "MyCase Drive",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Advanced Document",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item-list",
                    displayer: "Item List",
                    value: [
                      {
                        type: "string",
                        key: "icon",
                        displayer: "Icon",
                        value: "CiCircleCheck"
                      },
                      {
                        type: "string",
                        key: "itemText",
                        displayer: "Item Text",
                        value: "Full Text Search",
                      },
                    ],
                  },
                ],
              },
              {
                type: "boolean",
                key: "isActive",
                displayer: "ıs active",
                value: false,
              }
            ],
          },
        ]
      })
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
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


  render() {

    const planType = this.getComponentState("plan_type");
    const monthly_plans: MonthlyPlan[] = this.castToObject<any>("monthly_plans");
    const yearly_plans: YearlyPlan[] = this.castToObject<any>("yearly_plans");

    console.log(planType);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-text")}>
            <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
            <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
            <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>
            <div className={this.decorateCSS("wrapper")}>
              <span className={this.decorateCSS("text")}>{this.getPropValue("text")}</span>

              <div className={this.decorateCSS("switch")} onClick={() => this.setComponentState("plan_type", (this.getComponentState("plan_type") == "monthly-plans") ? "yearly-plans" : "monthly-plans")}>
                <input className={this.decorateCSS("input")} type="checkbox" checked={planType == "yearly-plans"} />
                <span className={`${this.decorateCSS("slider")} ${this.decorateCSS("round")}`}></span>
              </div>

              <span className={this.decorateCSS("text1")}>{this.getPropValue("text1")}</span>

              <ComposerIcon name={this.getPropValue("icon")} propsIcon={{
                className: this.decorateCSS("icon")
              }} />
              <span className={this.decorateCSS("text2")}>{this.getPropValue("text2")}</span>
            </div>
          </div>
          <div className={this.decorateCSS("card")}>
            {(planType === "monthly-plans" ? monthly_plans : yearly_plans).map((pricing: any, index: number) => (
              <div className={this.decorateCSS("card-item-count")} style={{ width: 90 / this.getPropValue("itemCount") + "%" }}>
                <div key={index} className={`${this.decorateCSS("price")} ${pricing.isActive && this.decorateCSS("active")}`}>
                  {pricing.isActive && pricing.popular_settings && pricing.popular_settings[0] && pricing.popular_settings[0].value && (
                    <div className={`${this.decorateCSS("popular-box")} ${pricing.popular_settings[1] && pricing.popular_settings[1].value && this.decorateCSS("active")}`}>
                      <span className={this.decorateCSS("popular-text")}>{pricing.popular_settings[0].value}</span>
                    </div>
                  )}
                  <div className={`${this.decorateCSS("badge")} ${this.decorateCSS(`badge-${pricing.badge.toLowerCase()}`)}`}>{pricing.badge}</div>
                  <h1 className={this.decorateCSS("price-text")}>
                    {pricing.price}
                    <p className={this.decorateCSS("duration-text")}>{pricing.duration}</p>
                  </h1>
                  <span className={this.decorateCSS("text")}>{pricing.text}</span>
                  <p className={this.decorateCSS("description")}>{pricing.description}</p>
                  <div className={this.decorateCSS("features")}>
                    {pricing.item.map((data: any, index: number) => (
                      <li key={`price7-list-${index}`}>
                        <ComposerIcon name={data.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                        {data.itemText}
                      </li>
                    ))}
                  </div>
                  <ComposerLink path={pricing.link}>
                    <span className={this.decorateCSS("button")}>{pricing.buttonText}</span>
                  </ComposerLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTable7;
