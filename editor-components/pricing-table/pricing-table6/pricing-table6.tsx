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
    subtitle: React.JSX.Element;
    property: string;
    title: React.JSX.Element;
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
      subtitle: React.JSX.Element;
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "Affordable pricing",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Choose the plan that's right for you",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary")],
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
                      type: "media",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "GoCircle" },
                    },
                    {
                      type: "media",
                      key: "check_icon",
                      displayer: "Check Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "CiCircleCheck" },
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
                          key: "subtitle",
                          displayer: "Subtitle",
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
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                            INPUTS.BUTTON(
                              "button",
                              "Button",
                              "LETS GO",
                              "",
                              "",
                              null,
                              "Primary"
                            ),
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
                      type: "media",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "GoCircle" },
                    },
                    {
                      type: "media",
                      key: "check_icon",
                      displayer: "Check Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "CiCircleCheck" },
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
                          key: "subtitle",
                          displayer: "Subtitle",
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
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                            INPUTS.BUTTON(
                              "button",
                              "Button",
                              "Join this plan",
                              "",
                              "",
                              null,
                              "Primary"
                            ),
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
                      type: "media",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "GoCircle" },
                    },
                    {
                      type: "media",
                      key: "check_icon",
                      displayer: "Check Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "CiCircleCheck" },
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
                          key: "subtitle",
                          displayer: "Subtitle",
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
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                            INPUTS.BUTTON(
                              "button",
                              "Button",
                              "Join this plan",
                              "",
                              "",
                              null,
                              "Primary"
                            ),
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
                      type: "media",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "GoCircle" },
                    },
                    {
                      type: "media",
                      key: "check_icon",
                      displayer: "Check Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "CiCircleCheck" },
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
                          key: "subtitle",
                          displayer: "Subtitle",
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
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                            INPUTS.BUTTON(
                              "button",
                              "Button",
                              "Join this plan",
                              "",
                              "",
                              null,
                              "Primary"
                            ),
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
                      type: "media",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "GoCircle" },
                    },
                    {
                      type: "media",
                      key: "check_icon",
                      displayer: "Check Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "CiCircleCheck" },
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
                          key: "subtitle",
                          displayer: "Subtitle",
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
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCancel" },
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
                            INPUTS.BUTTON(
                              "button",
                              "Button",
                              "Join this plan",
                              "",
                              "",
                              null,
                              "Primary"
                            ),
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
                      type: "media",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "GoCircle" },
                    },
                    {
                      type: "media",
                      key: "check_icon",
                      displayer: "Check Icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: { type: "icon", name: "CiCircleCheck" },
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
                          key: "subtitle",
                          displayer: "Subtitle",
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
                                  value:
                                    "3 hours of training (VR therapy + platform use)",
                                },
                                {
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                                  type: "media",
                                  key: "dash_icon",
                                  displayer: "Dash Icon",
                                  additionalParams: {
                                    availableTypes: ["icon", "image"],
                                  },
                                  value: { type: "icon", name: "FcCheckmark" },
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
                            INPUTS.BUTTON(
                              "button",
                              "Button",
                              "Join this plan",
                              "",
                              "",
                              null,
                              "Primary"
                            ),
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
    this.addProp({
      type: "multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2", "animation3"],
      additionalParams: {
        selectItems: ["animation1", "animation2", "animation3", "animation4"],
      },
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

  private getButtonsFromItem(buttons: any[]) {
    if (!Array.isArray(buttons)) return [];

    return buttons.map((btn: any) => {
      const parent = btn?.value ?? btn;
      const icon = this.getPropValue("icon", { parent_object: parent });
      const media = icon || null;
      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        media,
      };
    });
  }

  private hasAnyButton(buttons: { text?: string; media?: any }[]) {
    return buttons.some(
      (b: any) =>
        this.castToString(b?.text) ||
        (b as any).media?.name ||
        (b as any).media?.url ||
        (b as any).icon?.name ||
        (b as any).icon?.url
    );
  }

  static getName(): string {
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
    const rightItemExist = plan[planIndex]?.right_items?.list.length > 0;
    const animations = this.getPropValue("animations")
      .map((animation: string) => this.decorateCSS(animation))
      .join(" ");

    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);
    const descriptionExist = this.castToString(description);
    const hasAnyButton = this.hasAnyButton(buttons);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(titleExist || subtitleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("up-page")}>
                {subtitleExist && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("subtitle")}
                  >
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
                {hasAnyButton && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((btn, btnIndex: number) => {
                      const buttonText = btn.text;
                      const buttonMedia = btn.icon;
                      const buttonUrl = btn.url || "#";
                      const buttonType = btn.type;

                      const btnTextExist = this.castToString(buttonText);
                      const buttonMediaExist =
                        buttonMedia &&
                        ((buttonMedia as any).name || (buttonMedia as any).url);

                      if (!btnTextExist && !buttonMediaExist) return null;

                      return (
                        <ComposerLink
                          path={buttonUrl}
                          key={`top-btn-${btnIndex}`}
                        >
                          <Base.Button
                            buttonType={buttonType}
                            className={this.decorateCSS("button")}
                          >
                            {buttonMediaExist && (
                              <Base.Media
                                value={buttonMedia}
                                className={this.decorateCSS("button-icon")}
                              />
                            )}
                            {btnTextExist && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {buttonText}
                              </Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {hasPlans && (
              <div className={this.decorateCSS("plan-items")}>
                {plans.map((plan: any, index: number) => {
                  const title2 = this.castToString(plan.getPropValue("title"));
                  return (
                    title2 && (
                      <Base.P
                        className={
                          this.decorateCSS("plan-title") +
                          " " +
                          (this.getComponentState("activeTab") === index &&
                            this.decorateCSS("activeTab"))
                        }
                        onClick={() => this.setActiveTab(index)}
                      >
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
                      {plan.map((tab: any, index: number) => {
                        const planText = this.castToString(tab.plan);
                        const tagText = this.castToString(tab.tag);
                        const priceText = this.castToString(tab.price);
                        const perText = this.castToString(tab.per);
                        const hasIcon = tab.check_icon || tab.circle_icon;

                        if (
                          !planText &&
                          !tagText &&
                          !priceText &&
                          !perText &&
                          !hasIcon
                        ) {
                          return null;
                        }

                        return (
                          <div
                            className={`${
                              this.decorateCSS("listArray") +
                              " " +
                              (this.getComponentState("activePlan") == index &&
                                this.decorateCSS("active"))
                            } 
                          ${this.getPropValue("animations") && animations} `}
                            onClick={() => this.setActivePlan(index)}
                            key={index}
                          >
                            {(hasIcon || planText) && (
                              <div className={this.decorateCSS("plan-icons")}>
                                {hasIcon && (
                                  <Base.Media
                                    value={
                                      planIndex == index
                                        ? tab.check_icon
                                        : tab.circle_icon
                                    }
                                    className={this.decorateCSS("icon")}
                                  />
                                )}
                                {planText && (
                                  <Base.P className={this.decorateCSS("plan")}>
                                    {tab.plan}
                                  </Base.P>
                                )}
                              </div>
                            )}
                            
                            {tagText && (
                              <div className={this.decorateCSS("tag-wrapper")}>
                                <Base.P className={this.decorateCSS("tag")}>
                                  {tab.tag}
                                </Base.P>
                              </div>
                            )}
                            {(priceText || perText) && (
                              <div className={this.decorateCSS("item-price")}>
                                {priceText && (
                                  <Base.H5
                                    className={this.decorateCSS("price")}
                                  >
                                    {tab.price}
                                  </Base.H5>
                                )}
                                {perText && (
                                  <Base.H5 className={this.decorateCSS("per")}>
                                    {tab.per}
                                  </Base.H5>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {rightItemExist && (
                      <div
                        className={`${this.decorateCSS("right-page")} ${
                          this.getPropValue("animations") && animations
                        } `}
                      >
                        <Base.VerticalContent
                          className={this.decorateCSS("content")}
                        >
                          {(() => {
                            const subtitle =
                              plan[planIndex]?.right_items?.subtitle;
                            const title = plan[planIndex]?.right_items?.title;
                            const subtitleExist = this.castToString(subtitle);
                            const titleExist = this.castToString(title);

                            if (!subtitleExist && !titleExist) {
                              return null;
                            }

                            return (
                              <div className={this.decorateCSS("header-wrapper")}>
                                {titleExist && (
                                  <Base.H4
                                    className={this.decorateCSS("title")}
                                  >
                                    {title}
                                  </Base.H4>
                                )}
                                {subtitleExist && (
                                  <div className={this.decorateCSS("subtitle-wrapper")}>
                                      <Base.P
                                        className={this.decorateCSS("subtitle")}
                                      >
                                        {subtitle}
                                      </Base.P>
                                    </div>
                                )}
                              </div>
                            );
                          })()}

                          {plan[planIndex]?.right_items?.list?.length > 0 && (
                            <div className={this.decorateCSS("list-body")}>
                              {plan[planIndex]?.right_items?.list?.map(
                                (listItem: any, listItemIndex: number) => {
                                  const property =
                                    listItem.getPropValue("property");
                                  const iconValue =
                                    listItem.getPropValue("dash_icon");
                                  const enableValue =
                                    listItem.getPropValue("enable");

                                  const listValue = this.castToString(property);
                                  const hasIcon =
                                    iconValue &&
                                    (iconValue.name ||
                                      iconValue.url ||
                                      (typeof iconValue === "string" &&
                                        iconValue));

                                  if (!listValue && !hasIcon) {
                                    return null;
                                  }

                                  return (
                                    <div
                                      key={listItemIndex}
                                      className={`${this.decorateCSS(
                                        "list-item"
                                      )} ${
                                        !enableValue &&
                                        this.decorateCSS("list-item-disabled")
                                      }`}
                                    >
                                      {hasIcon && (
                                        <Base.Media
                                          value={iconValue}
                                          className={this.decorateCSS(
                                            "dash_icon"
                                          )}
                                        />
                                      )}
                                      {listValue && (
                                        <Base.P
                                          className={this.decorateCSS(
                                            "property"
                                          )}
                                        >
                                          {property}
                                        </Base.P>
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )}

                          {(plan[planIndex]?.right_items?.buttons?.length > 0 || plan[planIndex]?.right_items?.text) &&
                            (() => {
                              const buttons = this.getButtonsFromItem(
                                plan[planIndex].right_items.buttons
                              );
                              const hasButtons = this.hasAnyButton(buttons);
                              const bottomText =
                                plan[planIndex]?.right_items?.text;
                              const hasBottomText =
                                this.castToString(bottomText);

                              if (!hasButtons && !hasBottomText) {
                                return null;
                              }

                              return (
                                <div
                                  className={this.decorateCSS("body-bottom")}
                                >
                                  {hasButtons && (
                                    <div
                                      className={this.decorateCSS(
                                        "button-container"
                                      )}
                                    >
                                      {buttons.map(
                                        (btn: any, buttonIndex: number) => {
                                          const buttonText = this.castToString(
                                            btn.text
                                          );
                                          const buttonMedia = btn.media;
                                          const buttonMediaExist =
                                            buttonMedia &&
                                            ((buttonMedia as any).name ||
                                              (buttonMedia as any).url);

                                          if (
                                            !buttonText &&
                                            !buttonMediaExist
                                          ) {
                                            return null;
                                          }

                                          return (
                                            <ComposerLink
                                              key={buttonIndex}
                                              path={btn.url || "#"}
                                            >
                                              <Base.Button
                                                buttonType={btn.type}
                                                className={this.decorateCSS(
                                                  "button"
                                                )}
                                              >
                                                {buttonMediaExist && (
                                                  <Base.Media
                                                    value={buttonMedia}
                                                    className={this.decorateCSS(
                                                      "button-icon"
                                                    )}
                                                  />
                                                )}
                                                {buttonText && (
                                                  <Base.P
                                                    className={this.decorateCSS(
                                                      "button-text"
                                                    )}
                                                  >
                                                    {btn.text}
                                                  </Base.P>
                                                )}
                                              </Base.Button>
                                            </ComposerLink>
                                          );
                                        }
                                      )}
                                    </div>
                                  )}
                                  {hasBottomText && (
                                    <span
                                      className={this.decorateCSS(
                                        "bottom-text"
                                      )}
                                    >
                                      {bottomText}
                                    </span>
                                  )}
                                </div>
                              );
                            })()}
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
