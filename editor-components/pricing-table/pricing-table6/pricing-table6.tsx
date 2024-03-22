import * as React from "react";
import styles from "./pricing-table6.module.scss";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Badge } from "@mui/material";
import { plan } from "../../../../classes/bucket";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Pricing = {
  cardTitle1: string;
  list: {
    property: string,
    is_active: boolean
  }[];
  buttons: { buttonTitle: string; url: string; isPrimary: boolean }[];
  price: number;
  description: string;
  activeTag: string;
  active: boolean;
  currency: string;
  per: string;
  plan: string;
  tag: string;
  badge: string;
  property: string;
  title: string;
  subtitle: string;
  active_icon: string;
  deactive_icon: string;
  check_icon: string;
  circle_icon: string;


};


class PricingMultipleTwo extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "AFFORDABLE PRICING",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Choose the plan that's right for you",
    });

    this.addProp({
      type: "array",
      key: "plans",
      displayer: "Plans",
      value: [
        {
          type: "object",
          key: "listArray",
          displayer: "Left Items",
          value: [

            {
              type: "icon",
              key: "circle_icon",
              displayer: "Circle Icon",
              value: "GiCircle"
            },
            {
              type: "icon",
              key: "check_icon",
              displayer: "Check Icon",
              value: "CiCircleCheck"
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Primary",
            },
            {
              type: "string",
              key: "tag",
              displayer: "tag",
              value: "Save 20%",
            },
            {
              type: "number",
              key: "price",
              displayer: "Price",
              value: 20,
            },
            {
              type: "string",
              key: "currency",
              displayer: "Currency",
              value: "$",
            },

            {
              type: "string",
              key: "per",
              displayer: "Per",
              value: "per month",
            },
            {
              type: "array",
              key: "list",
              displayer: "Right Items",
              value: [

                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Find places near hotels and camp",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: true
                    },



                  ]
                },
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Track record and reward programs",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: false
                    },
                  ]
                },
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Shows transportation option",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: false
                    },
                  ]
                },

              ],
            },
            {
              type: "icon",
              key: "active_icon",
              displayer: "Active Icon",
              value: "IoCheckmark"
            },
            {
              type: "icon",
              key: "deactive_icon",
              displayer: "Deactive Icon",
              value: "IoCloseOutline"
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "PRIMARY",
            },
            {
              type: "string",
              key: "title",
              displayer: "title",
              value: "The most primary plan",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "Join this plan",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "subtitle",
              value: "Offer save 20%*"
            }
          ],
        },
        {
          type: "object",
          key: "listArray",
          displayer: "Left Items",
          value: [

            {
              type: "icon",
              key: "circle_icon",
              displayer: "Circle Icon",
              value: "GiCircle"
            },
            {
              type: "icon",
              key: "check_icon",
              displayer: "Check Icon",
              value: "CiCircleCheck"
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Popular",
            },
            {
              type: "string",
              key: "tag",
              displayer: "tag",
              value: "Save 30%",
            },
            {
              type: "number",
              key: "price",
              displayer: "Price",
              value: 19,
            },
            {
              type: "string",
              key: "currency",
              displayer: "Currency",
              value: "$",
            },

            {
              type: "string",
              key: "per",
              displayer: "Per",
              value: "per month",
            },
            {
              type: "array",
              key: "list",
              displayer: "Right Items",
              value: [
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Find places near hotels and camp",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: true
                    },


                  ]
                },
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Track record and reward programs",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: true
                    },
                  ]
                },
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Shows transportation option",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: false
                    },
                  ]
                },

              ],
            },
            {
              type: "icon",
              key: "active_icon",
              displayer: "Active Icon",
              value: "IoCheckmark"
            },
            {
              type: "icon",
              key: "deactive_icon",
              displayer: "Deactive Icon",
              value: "IoCloseOutline"
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "POPULAR",
            },
            {
              type: "string",
              key: "title",
              displayer: "title",
              value: "The most popular plan",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "Join this plan",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "subtitle",
              value: "Offer save 30%*"

            }
          ],
        },
        {
          type: "object",
          key: "listArray",
          displayer: "Left Items",
          value: [

            {
              type: "icon",
              key: "circle_icon",
              displayer: "Circle Icon",
              value: "GiCircle"
            },
            {
              type: "icon",
              key: "check_icon",
              displayer: "Check Icon",
              value: "CiCircleCheck"
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Premium",
            },
            {
              type: "string",
              key: "tag",
              displayer: "tag",
              value: "Save 35%",
            },
            {
              type: "number",
              key: "price",
              displayer: "Price",
              value: 28,
            },
            {
              type: "string",
              key: "currency",
              displayer: "Currency",
              value: "$",
            },

            {
              type: "string",
              key: "per",
              displayer: "Per",
              value: "per month",
            },
            {
              type: "array",
              key: "list",
              displayer: "Right Items",
              value: [

                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Find places near hotels and camp",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: true
                    },



                  ]
                },
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Track record and reward programs",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: true
                    },
                  ]
                },
                {
                  type: "object",
                  key: "list_item",
                  displayer: "List Item",
                  value: [
                    {
                      type: "string",
                      key: "property",
                      displayer: "Property",
                      value: "Shows transportation option",
                    },
                    {
                      type: "boolean",
                      displayer: "Is Active",
                      key: "is_active",
                      value: true
                    },
                  ]
                },
              ],
            },
            {
              type: "icon",
              key: "active_icon",
              displayer: "Active Icon",
              value: "IoCheckmark"
            },
            {
              type: "icon",
              key: "deactive_icon",
              displayer: "Deactive Icon",
              value: "IoCloseOutline"
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "PREMİUM",
            },
            {
              type: "string",
              key: "title",
              displayer: "title",
              value: "The most premium plan",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "button",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "buttonText",
                      displayer: "Button Text",
                      value: "Join this plan",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "subtitle",
              value: "Offer save 35%*"

            }

          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
    this.addProp({
      type: "string",
      key: "contact",
      displayer: "Contact",
      value: "Contact",
    });

    this.addProp({
      type: "string",
      key: "contactTitle",
      displayer: "Contact Title",
      value: "Looking for a corporate solution? Contact crafto",
    });
    this.setActiveTab(0);
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);

  }

  getName(): string {
    return "Pricing 6";
  }



  render(): React.ReactNode {

    const plan = this.castToObject<Pricing[]>("plans")[this.getComponentState("activeTab")]

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</div>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("left-page")}>
                {this.castToObject<Pricing[]>("plans").map(
                  (tab: Pricing, index: number) => (
                    <div className={this.decorateCSS("listArray") + " " + ((this.getComponentState("activeTab") == index) && this.decorateCSS("active"))} onClick={() => this.setActiveTab(index)}>

                      <div className={this.decorateCSS("pricing")}>
                        <div className={this.decorateCSS("plan-icons")}>
                          <div className={this.decorateCSS("icons")}>
                            <ComposerIcon name={this.getComponentState("activeTab") === index ? tab.check_icon : tab.circle_icon}></ComposerIcon>
                          </div>

                          <div className={this.decorateCSS("plan")}> {tab.plan}</div>
                        </div>
                        <div className={this.decorateCSS("tag")}> {tab.tag}</div>
                        <div className={this.decorateCSS("item-price")}>
                          <div className={this.decorateCSS("item-price1")}>
                            <h5 className={this.decorateCSS("price")}> {tab.currency}</h5>
                            <h5 className={this.decorateCSS("currency")}> {tab.price}</h5>
                          </div>
                          <h5 className={this.decorateCSS("per")}> {tab.per}</h5>
                        </div>
                      </div>
                    </div>
                  )
                )}

              </div>
              <div className={this.decorateCSS("right-page")}>
                <span className={this.decorateCSS("badge")}>{plan.badge}</span>
                <h1 className={this.decorateCSS("title")}>{plan.title}</h1>
                <div className={this.decorateCSS("list-body")}>
                  {plan.list.map((item, itemIndex: number) => (
                    <div className={this.decorateCSS("li")} key={itemIndex}>

                      <ComposerIcon
                        propsIcon={{
                          className: item.is_active ? this.decorateCSS("active-icon") : this.decorateCSS("deactive-icon")
                        }}
                        name={item.is_active ? plan.active_icon : plan.deactive_icon}
                      />

                      <div className={this.decorateCSS("property")}>{item.property}</div>


                    </div>
                  ))}


                  <div className={this.decorateCSS("body-bottom")}>
                    <div className={this.decorateCSS("buttons")}>
                      {plan.buttons.map((button: any, buttonIndex: number) => (
                        <ComposerLink key={buttonIndex} url={button.url}>
                          <button className={this.decorateCSS("button")}> {button.buttonText} </button>
                        </ComposerLink>
                      ))}
                    </div>


                    <span className={this.decorateCSS("subtitle")}>{plan.subtitle}</span>
                  </div>
                </div>

              </div>
            </div>
            <div className={this.decorateCSS("page-bottom")}>
              <div className={this.decorateCSS("contact")}>{this.getPropValue("contact")}</div>
              <div className={this.decorateCSS("contactTitle")}>{this.getPropValue("contactTitle")}</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default PricingMultipleTwo;