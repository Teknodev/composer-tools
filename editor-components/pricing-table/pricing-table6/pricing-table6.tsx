import * as React from "react";
import styles from "./pricing-table6.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
      price: number;
      currency: string;
      plan: string;
      tag: JSX.Element;
      check_icon: string;
      circle_icon: string;
    }[];
    right_items: {
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
          displayer: "Monthly Plans",
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
                      value: "Product 1",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 10%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 3000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
                      value: "Product 2",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 20%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 5000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
                      value: "Product 3",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 30%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 6000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
                      value: "Product 4",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 40%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 20000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
          displayer: "Yearly Plans",
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
                      value: "Product 1",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 10%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 30000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
                      value: "Product 2",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 20%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 50000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
                      value: "Product 3",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 30%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 60000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
                      value: "Product 4",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Tag",
                      value: "SAVE 40%",
                    },
                    {
                      type: "number",
                      key: "price",
                      displayer: "Price",
                      value: 80000,
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
                          value: "Product 1",
                        },
                        {
                          type: "string",
                          key: "title",
                          displayer: "Title",
                          value: "60 hour package per month",
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
                                  type: "string",
                                  key: "property",
                                  displayer: "Property",
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Unlimited technical support",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
                                },
                              ],
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
                                  value: "Hours of supervision per month",
                                },
                                {
                                  type: "icon",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  value: "GoDash",
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
    const hasPlans =
      Array.isArray(plans) &&
      plans.length > 0 &&
      activeTab !== undefined &&
      plans[activeTab];
    const plan = hasPlans ? plans[activeTab].product : [];
    const planIndex = this.getComponentState("activePlan");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              {this.castToString(this.getPropValue("badge")) && (
                <div className={this.decorateCSS("badge")}>
                  {this.getPropValue("badge")}
                </div>
              )}
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
            </div>
            {hasPlans && (
              <div className={this.decorateCSS("plan-items")}>
                {plans.map((plan: any, index: number) => {
                  const title2 = this.castToString(plan.getPropValue("title"));
                  return title2 ? (
                    <div
                      className={
                        this.decorateCSS("plan-title") +
                        " " +
                        (this.getComponentState("activeTab") === index &&
                          this.decorateCSS("activeTab"))
                      }
                      onClick={() => this.setActiveTab(index)}
                    >
                      {title2}
                    </div>
                  ) : null;
                })}
              </div>
            )}
            {hasPlans && (
              <div className={this.decorateCSS("down-page")}>
                {plan.length > 0 && (
                  <>
                    <div className={this.decorateCSS("left-page")}>
                      {plan.map((tab: any, index: number) => (
                        <div
                          className={
                            this.decorateCSS("listArray") +
                            " " +
                            (this.getComponentState("activePlan") == index &&
                              this.decorateCSS("active"))
                          }
                          onClick={() => this.setActivePlan(index)}
                          key={index}
                        >
                          <div className={this.decorateCSS("plan-icons")}>
                            <div className={this.decorateCSS("icons")}>
                              <ComposerIcon
                                name={
                                  planIndex == index
                                    ? tab.check_icon
                                    : tab.circle_icon
                                }
                              ></ComposerIcon>
                            </div>
                            <div className={this.decorateCSS("plan")}>
                              {" "}
                              {tab.plan}
                            </div>
                          </div>
                          {this.castToString(tab.tag) && (
                            <div className={this.decorateCSS("tag")}>
                              {" "}
                              {tab.tag}
                            </div>
                          )}
                          <div className={this.decorateCSS("item-price")}>
                            <h5 className={this.decorateCSS("price")}>
                              {tab.price?.toLocaleString()} {tab.currency}
                            </h5>
                            <h5 className={this.decorateCSS("per")}>
                              {" "}
                              {tab.per}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={this.decorateCSS("right-page")}>
                      <div className={this.decorateCSS("content")}>
                        {plan[planIndex].right_items.badge &&
                          this.castToString(
                            plan[planIndex].right_items.badge
                          ) && (
                            <span className={this.decorateCSS("badge")}>
                              {plan[planIndex].right_items.badge}
                            </span>
                          )}
                        {this.castToString(
                          plan[planIndex].right_items.title
                        ) && (
                          <h1 className={this.decorateCSS("title")}>
                            {plan[planIndex].right_items.title}
                          </h1>
                        )}

                        <div className={this.decorateCSS("list-body")}>
                          {plan[planIndex]?.right_items?.list?.map(
                            (listItem: any, listItemIndex: number) => (
                              <div
                                key={listItemIndex}
                                className={this.decorateCSS("list-item")}
                              >
                                <ComposerIcon
                                  propsIcon={{
                                    className: this.decorateCSS("dash_icon"),
                                  }}
                                  name={
                                    listItem.value.find(
                                      (item: any) => item.key === "dash_icon"
                                    ).value
                                  }
                                />
                                <div className={this.decorateCSS("property")}>
                                  {
                                    listItem.value.find(
                                      (item: any) => item.key === "property"
                                    ).value
                                  }
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        {plan[planIndex]?.right_items?.buttons.length > 0 && (
                          <div className={this.decorateCSS("body-bottom")}>
                            <div className={this.decorateCSS("buttons")}>
                              {plan[planIndex]?.right_items?.buttons.map(
                                (button: any, buttonIndex: number) => {
                                  const buttonText = button.value.find(
                                    (item: any) => item.key === "buttonText"
                                  ).value;

                                  const isDisabled = button.value.find(
                                    (item: any) => item.key === "disabled"
                                  ).value;

                                  return (
                                    buttonText && (
                                      <ComposerLink
                                        key={buttonIndex}
                                        url={
                                          button.value.find(
                                            (item: any) => item.key === "url"
                                          ).value
                                        }
                                      >
                                        <button
                                          className={`${this.decorateCSS(
                                            "button"
                                          )} ${
                                            isDisabled
                                              ? ""
                                              : this.decorateCSS("disabled") 
                                          }`}
                                          disabled={!isDisabled}
                                        >
                                          {buttonText}
                                        </button>
                                      </ComposerLink>
                                    )
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PricingMultipleTwo;
