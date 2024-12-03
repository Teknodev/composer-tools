import * as React from "react";
import styles from "./pricing-table6.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Pricing = {
  title: JSX.Element;
  product: Array<{
    cardTitle1: string;
    description: string;
    badge: JSX.Element;
    property: string;
    title: JSX.Element;
    subtitle: string;
    product: {
      per: string;
      price: string;
      plan: string;
      tag: JSX.Element;
      check_icon: string;
      circle_icon: string;
    }[];
    right_items: {
      enable: boolean;
      text: JSX.Element;
      badge: JSX.Element;
      title: JSX.Element;
      list: {
        property: string;
        dash_icon: string;
      }[];
      buttons: {
        buttonTitle: JSX.Element;
        url: string;
        buttonText: JSX.Element;
        disabled: boolean;
      }[];
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
                                {
                                  type: "boolean",
                                  key: "disabled",
                                  displayer: "Animation Enabled",
                                  value: true,
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
                                {
                                  type: "boolean",
                                  key: "disabled",
                                  displayer: "Animation Enabled",
                                  value: true,
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
                                {
                                  type: "boolean",
                                  key: "disabled",
                                  displayer: "Animation Enabled",
                                  value: true,
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
                                {
                                  type: "boolean",
                                  key: "disabled",
                                  displayer: "Animation Enabled",
                                  value: true,
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
                                {
                                  type: "boolean",
                                  key: "disabled",
                                  displayer: "Animation Enabled",
                                  value: true,
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
                                {
                                  type: "boolean",
                                  key: "disabled",
                                  displayer: "Animation Enabled",
                                  value: true,
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
            },
          ],
        },
      ],
    });
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
  getName(): string {
    return "Pricing 6";
  }
  render(): React.ReactNode {
    const plans = this.castToObject<Pricing[]>("plans");
    const activeTab = this.getComponentState("activeTab");
    const hasPlans = Array.isArray(plans) && plans.length > 0 && activeTab !== undefined && plans[activeTab];
    const plan = hasPlans ? plans[activeTab].product : [];
    const planIndex = this.getComponentState("activePlan");

    const rightItemExist = plan[planIndex]?.right_items?.list.length > 0;

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
                        {title2}
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
                        <div className={this.decorateCSS("listArray") + " " + (this.getComponentState("activePlan") == index && this.decorateCSS("active"))} onClick={() => this.setActivePlan(index)} key={index}>
                          <div className={this.decorateCSS("plan-icons")}>
                            <div className={this.decorateCSS("icons")}>
                              <ComposerIcon name={planIndex == index ? tab.check_icon : tab.circle_icon}></ComposerIcon>
                            </div>
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
                      <div className={this.decorateCSS("right-page")}>
                        <Base.VerticalContent className={this.decorateCSS("content")}>
                          {plan[planIndex].right_items.badge && this.castToString(plan[planIndex].right_items.badge) && <Base.H5 className={this.decorateCSS("badge")}>{plan[planIndex].right_items.badge}</Base.H5>}
                          {this.castToString(plan[planIndex].right_items.title) && <Base.H2 className={this.decorateCSS("title")}>{plan[planIndex].right_items.title}</Base.H2>}

                          <div className={this.decorateCSS("list-body")}>
                            {plan[planIndex]?.right_items?.list?.map((listItem: any, listItemIndex: number) => {
                              const listValue = listItem.value.find((item: any) => item.key === "property").value;
                              const iconValue = listItem.value.find((item: any) => item.key === "dash_icon").value;
                              const enableValue = listItem?.value?.find((item: any) => item.key === "enable")?.value;

                              return (
                                (listValue || iconValue) && (
                                  <div key={listItemIndex} className={enableValue ? this.decorateCSS("list-item") : this.decorateCSS("list-item-disabled")}>
                                    <ComposerIcon
                                      propsIcon={{
                                        className: this.decorateCSS("dash_icon"),
                                      }}
                                      name={iconValue}
                                    />
                                    <Base.P className={this.decorateCSS("property")}>{listValue}</Base.P>
                                  </div>
                                )
                              );
                            })}
                          </div>

                          {plan[planIndex]?.right_items?.buttons.length > 0 && (
                            <div className={this.decorateCSS("body-bottom")}>
                              <div className={this.decorateCSS("buttons")}>
                                {plan[planIndex]?.right_items?.buttons.map((button: any, buttonIndex: number) => {
                                  const buttonText = this.castToString(button.getPropValue("buttonText"));
                                  const buttonUrl = button.getPropValue("url");
                                  const isDisabled = button.getPropValue("disabled");

                                  return (
                                    buttonText && (
                                      <ComposerLink key={buttonIndex} path={buttonUrl}>
                                        <Base.Button className={`${this.decorateCSS("button")} ${!isDisabled ? this.decorateCSS("disabled") : ""}`}>{buttonText}</Base.Button>
                                      </ComposerLink>
                                    )
                                  );
                                })}
                              </div>
                              {plan[planIndex].right_items.text && <Base.P className={this.decorateCSS("bottom-text")}>{plan[planIndex].right_items.text}</Base.P>}
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
