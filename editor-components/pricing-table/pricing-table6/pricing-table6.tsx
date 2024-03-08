import * as React from "react";
import styles from "./pricing-table6.module.scss";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Pricing = {
  cardTitle1: string;
  list: TypeUsableComponentProps[];
  buttons: { buttonTitle: string; url: string; isPrimary: boolean }[];
  price: number;
  description: string;
  activeTag: string;
  active: boolean;
  currency: string;
  per: string;
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
          displayer: "List Items",
          value: [
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Primary",
            },
            {
              type: "string",
              key: "gain",
              displayer: "Your Gain",
              value: "Save 20%",
            },
            {
              type: "string",
              key: "currency",
              displayer: "Currency",
              value: "$",
            },
            {
              type: "number",
              key: "price",
              displayer: "Price",
              value: 20,
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
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "badge",
                  displayer: "Badge",
                  value: "PRIMARY",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Find places near hotels and camp",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Track record and reward programs",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Shows transportation option",
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
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "listArray",
          displayer: "List Items",
          value: [
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Popular",
            },
            {
              type: "string",
              key: "gain",
              displayer: "Your Gain",
              value: "Save 30%",
            },
            {
              type: "string",
              key: "currency",
              displayer: "Currency",
              value: "$",
            },
            {
              type: "number",
              key: "price",
              displayer: "Price",
              value: 19,
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
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "badge",
                  displayer: "Badge",
                  value: "PRIMARY",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Find places near hotels and camp",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Track record and reward programs",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Shows transportation option",
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
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "listArray",
          displayer: "List Items",
          value: [
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Premium",
            },
            {
              type: "string",
              key: "gain",
              displayer: "Your Gain",
              value: "Save 35%",
            },
            {
              type: "string",
              key: "currency",
              displayer: "Currency",
              value: "$",
            },
            {
              type: "number",
              key: "price",
              displayer: "Price",
              value: 28,
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
              displayer: "List Items",
              value: [
                {
                  type: "string",
                  key: "badge",
                  displayer: "Badge",
                  value: "PRIMARY",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Find places near hotels and camp",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Track record and reward programs",
                },
                {
                  type: "string",
                  key: "property",
                  displayer: "Property",
                  value: "Shows transportation option",
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
                  ],
                },
              ],
            },
          ],
        },
      ],
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
  }

  getName(): string {
    return "Pricing 6";
  }

 
}

export default PricingMultipleTwo;
