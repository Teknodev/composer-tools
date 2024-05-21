import * as React from "react";
import styles from "./pricing-table6.module.scss";
import { BasePricingTable } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Pricing = {
  title: string;
  product: Array<{
    cardTitle1: string;
    list: {
      property: string;
      is_active: boolean;
    }[];
    buttons: { buttonTitle: string; url: string; isPrimary: boolean }[];
    description: string;
    activeTag: string;
    active: boolean;
    badge: string;
    property: string;
    title: string;
    subtitle: string;
    dash_icon: string;
    product: {
      per: string;
      price: number;
      currency: string;
      plan: string;
      tag: string;
      check_icon: string;
      circle_icon: string;
    }[];
  }>;
};

class PricingMultipleTwo extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Ödeme Planlarımız",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "SİZİN İÇİN EN UYGUN OLANI TERCİH EDİN",
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
              value: "Aylık",
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
                      value: "GiCircle",
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
                      value: "Ürün 1",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%10 kar edin",
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
                      value: "TL",
                    },

                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Aylık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 1",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
                  displayer: "Left Items",
                  value: [
                    {
                      type: "icon",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      value: "GiCircle",
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
                      value: "Ürün 2",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%20 kar edin",
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
                      value: "TL",
                    },

                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Aylık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 2",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
                  displayer: "Left Items",
                  value: [
                    {
                      type: "icon",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      value: "GiCircle",
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
                      value: "Ürün 3",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%30 kar edin",
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
                      value: "TL",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Aylık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 3",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
                  displayer: "Left Items",
                  value: [
                    {
                      type: "icon",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      value: "GiCircle",
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
                      value: "Ürün 4",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%40 kar edin",
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
                      value: "TL",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Aylık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 4",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
              value: "Yıllık",
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
                      value: "GiCircle",
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
                      value: "Ürün 1",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%10 kar edin",
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
                      value: "TL",
                    },

                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Yıllık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 1",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
                  displayer: "Left Items",
                  value: [
                    {
                      type: "icon",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      value: "GiCircle",
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
                      value: "Ürün 2",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%20 kar edin",
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
                      value: "TL",
                    },

                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Yıllık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 2",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
                  displayer: "Left Items",
                  value: [
                    {
                      type: "icon",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      value: "GiCircle",
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
                      value: "Ürün 3",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%30 kar edin",
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
                      value: "TL",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Yıllık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 3",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
                  displayer: "Left Items",
                  value: [
                    {
                      type: "icon",
                      key: "circle_icon",
                      displayer: "Circle Icon",
                      value: "GiCircle",
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
                      value: "Ürün 4",
                    },
                    {
                      type: "string",
                      key: "tag",
                      displayer: "tag",
                      value: "%40 kar edin",
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
                      value: "TL",
                    },
                    {
                      type: "string",
                      key: "per",
                      displayer: "Per",
                      value: "Yıllık",
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
                              value: "3 saatlik eğitim(VR terapi + platform kullanımı)",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Sınırsız teknik destek",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: true,
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
                              value: "Ayda 3 saat süpervizyon",
                            },
                            {
                              type: "boolean",
                              displayer: "Is Active",
                              key: "is_active",
                              value: false,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "icon",
                      key: "dash_icon",
                      displayer: "Dash Icon",
                      value: "GoDash",
                    },
                    {
                      type: "string",
                      key: "badge",
                      displayer: "Badge",
                      value: "Ürün 4",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "title",
                      value: "Ayda 60 saatlik paket",
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
                              value: "Bu planı satın al",
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
    const plan =
      this.castToObject<Pricing[]>("plans")[this.getComponentState("activeTab")].product;
    const planIndex = this.getComponentState("activePlan");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("plan-items")}>
              {this.getPropValue("plans").map((plan: any, index: number) => (
                <div
                  className={
                    this.decorateCSS("plan-title") +
                    " " +
                    (this.getComponentState("activeTab") == index &&
                      this.decorateCSS("activeTab"))
                  }
                  onClick={() => this.setActiveTab(index)}
                >
                  {plan.getPropValue("title")}
                </div>
              ))}
            </div>
            <div className={this.decorateCSS("down-page")}>
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
                  >
                    <div className={this.decorateCSS("plan-icons")}>
                      <div className={this.decorateCSS("icons")}>
                        <ComposerIcon
                          name={
                            this.getComponentState("activePlan") == index
                              ? tab.check_icon
                              : tab.circle_icon
                          }
                        ></ComposerIcon>
                      </div>
                      <div className={this.decorateCSS("plan")}> {tab.plan}</div>
                    </div>
                    {tab.tag !== "" && (
                      <div className={this.decorateCSS("tag")}> {tab.tag}</div>
                    )}

                    <div className={this.decorateCSS("item-price")}>
                      <h5 className={this.decorateCSS("price")}> {tab.price}</h5>
                      <h5 className={this.decorateCSS("currency")}> {tab.currency}</h5>
                    </div>
                    <h5 className={this.decorateCSS("per")}> {tab.per}</h5>
                  </div>
                ))}
              </div>
              <div className={this.decorateCSS("right-page")}>
                <span className={this.decorateCSS("badge")}>{plan[planIndex].badge}</span>
                <h1 className={this.decorateCSS("title")}>{plan[planIndex].title}</h1>
                <div className={this.decorateCSS("list-body")}>
                  {plan[planIndex].list.map((item, itemIndex: number) => (
                    <div className={this.decorateCSS("li")} key={itemIndex}>
                      <ComposerIcon
                        propsIcon={{
                          className: this.decorateCSS("dash_icon"),
                        }}
                        name={plan[planIndex].dash_icon}
                      />
                      <div className={this.decorateCSS("property")}>{item.property}</div>
                    </div>
                  ))}
                  <div className={this.decorateCSS("body-bottom")}>
                    <div className={this.decorateCSS("buttons")}>
                      {plan[planIndex].buttons.map((button: any, buttonIndex: number) => (
                        <ComposerLink key={buttonIndex} url={button.url}>
                          <button className={this.decorateCSS("button")}>
                            {" "}
                            {button.buttonText}{" "}
                          </button>
                        </ComposerLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingMultipleTwo;
