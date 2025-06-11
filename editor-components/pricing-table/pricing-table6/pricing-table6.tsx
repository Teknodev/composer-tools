import * as React from "react";
import styles from "./pricing-table6.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Pricing = {
  title: React.JSX.Element;
  product: Array<{
    cardTitle1: string;
    description: string;
    badge: React.JSX.Element;
    property: string;
    title: React.JSX.Element;
    subtitle: string;
    product: {
      per: string;
      price: string;
      plan: string;
      tag: React.JSX.Element;
      check_icon: string;
      circle_icon: string;
    }[];
    right_items: {
      enable: boolean;
      text: React.JSX.Element;
      badge: React.JSX.Element;
      title: React.JSX.Element;
      list: {
        property: string;
        dash_icon: string;
      }[];
      buttons: INPUTS.CastedButton[];
    };
  }>;
};

class PricingMultipleTwo extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Affordable pricing",
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
          key: "plan-title",
          displayer: "Plans",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Annual",
            },
            {
              type: "array",
              key: "product",
              displayer: "Product",
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
                      value: "GoCircle",
                    },
                    {
                      type: "icon",
                      key: "check_icon",
                      displayer: "Check Icon",
                      value: "CiCircleCheck",
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
                      displayer: "Tag",
                      value: "SAVE 20%",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "10$",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Info",
                      value: "Per month",
                    },
                    {
                      type: "object",
                      key: "right_items",
                      displayer: "Right Items",
                      value: [
                        {
                          type: "string",
                          key: "badge",
                          displayer: "Badge",
                          value: "PRIMARY",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "Offer save 20%",
                        },
                        {
                          type: "array",
                          key: "list",
                          displayer: "List Items",
                          value: [
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "array",
                          key: "buttons",
                          displayer: "Buttons",
                          value: [INPUTS.BUTTON("button", "Button", "Join this plan", "", null, null, "Primary")],
                        },
                      ],
                    },
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
                      value: "GoCircle",
                    },
                    {
                      type: "icon",
                      key: "check_icon",
                      displayer: "Check Icon",
                      value: "CiCircleCheck",
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
                      displayer: "Tag",
                      value: "SAVE 30%",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "19$",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Info",
                      value: "Per month",
                    },
                    {
                      type: "object",
                      key: "right_items",
                      displayer: "Right Items",
                      value: [
                        {
                          type: "string",
                          key: "badge",
                          displayer: "Badge",
                          value: "POPULAR",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "Offer save 30%",
                        },
                        {
                          type: "array",
                          key: "list",
                          displayer: "List Items",
                          value: [
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "array",
                          key: "buttons",
                          displayer: "Buttons",
                          value: [INPUTS.BUTTON("button", "Button", "Join this plan", "", null, null, "Primary")],
                        },
                      ],
                    },
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
                      value: "GoCircle",
                    },
                    {
                      type: "icon",
                      key: "check_icon",
                      displayer: "Check Icon",
                      value: "CiCircleCheck",
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
                      displayer: "Tag",
                      value: "SAVE 35%",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "28$",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Info",
                      value: "Per month",
                    },
                    {
                      type: "object",
                      key: "right_items",
                      displayer: "Right Items",
                      value: [
                        {
                          type: "string",
                          key: "badge",
                          displayer: "Badge",
                          value: "PREMIUM",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "Offer save 35%",
                        },
                        {
                          type: "array",
                          key: "list",
                          displayer: "List Items",
                          value: [
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "array",
                          key: "buttons",
                          displayer: "Buttons",
                          value: [INPUTS.BUTTON("button", "Button", "Join this plan", "", null, null, "Primary")],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "plan-title",
          displayer: "Plans",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Yearly",
            },
            {
              type: "array",
              key: "product",
              displayer: "Product",
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
                      value: "GoCircle",
                    },
                    {
                      type: "icon",
                      key: "check_icon",
                      displayer: "Check Icon",
                      value: "CiCircleCheck",
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
                      displayer: "Tag",
                      value: "SAVE 20%",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "5$",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Info",
                      value: "Per year",
                    },
                    {
                      type: "object",
                      key: "right_items",
                      displayer: "Right Items",
                      value: [
                        {
                          type: "string",
                          key: "badge",
                          displayer: "Badge",
                          value: "PRIMARY",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "Offer save 20%",
                        },
                        {
                          type: "array",
                          key: "list",
                          displayer: "List Items",
                          value: [
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "array",
                          key: "buttons",
                          displayer: "Buttons",
                          value: [INPUTS.BUTTON("button", "Button", "Join this plan", "", null, null, "Primary")],
                        },
                      ],
                    },
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
                      value: "GoCircle",
                    },
                    {
                      type: "icon",
                      key: "check_icon",
                      displayer: "Check Icon",
                      value: "CiCircleCheck",
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
                      displayer: "Tag",
                      value: "SAVE 30%",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "10$",
                    },

                    {
                      type: "string",
                      key: "per",
                      displayer: "Info",
                      value: "Per year",
                    },
                    {
                      type: "object",
                      key: "right_items",
                      displayer: "Right Items",
                      value: [
                        {
                          type: "string",
                          key: "badge",
                          displayer: "Badge",
                          value: "POPULAR",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "Offer save 30%",
                        },
                        {
                          type: "array",
                          key: "list",
                          displayer: "List Items",
                          value: [
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCancel",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "array",
                          key: "buttons",
                          displayer: "Buttons",
                          value: [INPUTS.BUTTON("button", "Button", "Join this plan", "", null, null, "Primary")],
                        },
                      ],
                    },
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
                      value: "GoCircle",
                    },
                    {
                      type: "icon",
                      key: "check_icon",
                      displayer: "Check Icon",
                      value: "CiCircleCheck",
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
                      displayer: "Tag",
                      value: "SAVE 35%",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "15$",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Info",
                      value: "Per year",
                    },
                    {
                      type: "object",
                      key: "right_items",
                      displayer: "Right Items",
                      value: [
                        {
                          type: "string",
                          key: "badge",
                          displayer: "Badge",
                          value: "PREMIUM",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "Offer save 35%",
                        },
                        {
                          type: "array",
                          key: "list",
                          displayer: "List Items",
                          value: [
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                            {
                              type: "object",
                              key: "list_item",
                              displayer: "List Item",
                              value: [
                                {
                                  type: "boolean",
                                  key: "enable",
                                  displayer: "Active",
                                  value: true,
                                },
                                {
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "FcCheckmark",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: "array",
                          key: "buttons",
                          displayer: "Buttons",
                          value: [INPUTS.BUTTON("button", "Button", "Join this plan", "", null, null, "Primary")],
                        },
                      ],
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
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2", "animation3"],
      additionalParams:{
        selectItems:["animation1", "animation2", "animation3", "animation4"]
      }
    })

    this.setActiveTab(0);
    this.setActivePlan(0);
  }
  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    this.setActivePlan(0);
  }
  setActivePlan(activeTabIndex: number) {
    this.setComponentState("activePlan", activeTabIndex);
  }
  static getName(): string {
    return "Pricing 6";
  }
  render(): React.ReactNode {
    const plans = this.castToObject<Pricing[]>("plans");
    const activeTab = this.getComponentState("activeTab");
    const hasPlans = Array.isArray(plans) && plans.length > 0 && activeTab !== undefined && plans[activeTab];
    const plan = hasPlans ? plans[activeTab].product : [];
    const planIndex = this.getComponentState("activePlan");
    const rightItemExist = plan[planIndex]?.right_items?.list.length > 0;
    const animations = this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            <Base.VerticalContent className={this.decorateCSS("up-page")}>
              {this.castToString(this.getPropValue("badge")) && <Base.SectionSubTitle className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
              {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            </Base.VerticalContent>
            {hasPlans && (
              <div className={this.decorateCSS("plan-items")}>
                {plans.map((plan: any, index: number) => {
                  const title2 = this.castToString(plan.getPropValue("title"));
                  return (
                    title2 && (
                      <Base.P className={this.decorateCSS("plan-title") + " " + (this.getComponentState("activeTab") === index && this.decorateCSS("activeTab"))} onClick={() => this.setActiveTab(index)}>
                        {plan.getPropValue("title")}
                      </Base.P>
                    )
                  );
                })}
              </div>
            )}
            {hasPlans && (
              <div className={this.decorateCSS("down-page")}>
                {plan.length > 0 && (
                  <>
                    <div className={this.decorateCSS("left-page")}>
                      {plan.map((tab: any, index: number) => (
                        <div className={`${this.decorateCSS("listArray") + " " + (this.getComponentState("activePlan") == index && this.decorateCSS("active"))} 
                        ${this.getPropValue("animations")  && animations} `} 
                        onClick={() => this.setActivePlan(index)} key={index}>
                          <div className={this.decorateCSS("plan-icons")}>
                            <Base.Icon propsIcon={{ className: this.decorateCSS("icon") }} name={planIndex == index ? tab.check_icon : tab.circle_icon}></Base.Icon>
                            <Base.P className={this.decorateCSS("plan")}> {tab.plan}</Base.P>
                          </div>
                          {this.castToString(tab.tag) && <Base.P className={this.decorateCSS("tag")}> {tab.tag}</Base.P>}
                          <div className={this.decorateCSS("item-price")}>
                            <Base.H5 className={this.decorateCSS("price")}>{tab.price}</Base.H5>
                            <Base.H5 className={this.decorateCSS("per")}> {tab.per}</Base.H5>
                          </div>
                        </div>
                      ))}
                    </div>
                    {rightItemExist && (
                      <div className={`${this.decorateCSS("right-page")} ${this.getPropValue("animations")  
                      && animations} `}>
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                          {plan[planIndex].right_items.badge && this.castToString(plan[planIndex].right_items.badge) && <Base.H5 className={this.decorateCSS("badge")}>{plan[planIndex].right_items.badge}</Base.H5>}
                          {this.castToString(plan[planIndex].right_items.title) && <Base.H2 className={this.decorateCSS("title")}>{plan[planIndex].right_items.title}</Base.H2>}

                          <div className={this.decorateCSS("list-body")}>
                            {plan[planIndex]?.right_items?.list?.map((listItem: any, listItemIndex: number) => {
                              const property = listItem.getPropValue("property");
                              const iconValue = listItem.getPropValue("dash_icon");
                              const enableValue = listItem.getPropValue("enable");

                              const listValue = this.castToString(property);

                              return (
                                (listValue || iconValue) && (
                                  <div key={listItemIndex} className={`${this.decorateCSS("list-item")} ${!enableValue && this.decorateCSS("list-item-disabled")}`}>
                                    <Base.Icon
                                      propsIcon={{
                                        className: this.decorateCSS("dash_icon"),
                                      }}
                                      name={iconValue}
                                    />
                                    <Base.P className={this.decorateCSS("property")}>{property}</Base.P>
                                  </div>
                                )
                              );
                            })}
                          </div>

                          {plan[planIndex]?.right_items?.buttons.length > 0 && (
                            <div className={this.decorateCSS("body-bottom")}>
                              <div className={this.decorateCSS("button-container")}>
                                {plan[planIndex]?.right_items?.buttons.map((button: any, buttonIndex: number) => {
                                  const buttonText = this.castToString(button.getPropValue("text"));
                                  return (
                                    buttonText && (
                                      <ComposerLink key={buttonIndex} path={button.getPropValue("url")}>
                                        <Base.Button
                                          buttonType={button.getPropValue("type")}
                                          className={this.decorateCSS("button")}
                                        >
                                          {buttonText}
                                        </Base.Button>
                                      </ComposerLink>
                                    )
                                  );
                                })}
                              </div>
                              {plan[planIndex]?.right_items?.text && (
                                <span className={this.decorateCSS("bottom-text")}>
                                  {plan[planIndex].right_items.text}
                                </span>
                              )}
                            </div>
                          )}

                        </Base.VerticalContent>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingMultipleTwo;
