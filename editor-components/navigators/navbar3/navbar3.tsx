import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Lane {
  contact: React.JSX.Element;
  news: React.JSX.Element;
}

type Item = {
  title: React.JSX.Element;
  navigate_to: string;
  menuType?: "Dropdown" | "Mega" | "Normal";
  mega_media?: TypeMediaInputValue;
  mega_overlay?: boolean;
  sub_item_badge: React.JSX.Element;
  sub_sub_item_badge: React.JSX.Element;
  sub_items: Item[];
};

interface Logo {
  // `defaultLogo` keeps the original keys; `absoluteLogo` was made unique with a
  // prefix by the unique-prop-key rename. currentLogo can be either, so it holds
  // both shapes (optional) and is normalized before use.
  image?: TypeMediaInputValue;
  navigateTo?: string;
  absoluteLogo_image?: TypeMediaInputValue;
  absoluteLogo_navigateTo?: string;
}

interface Language {
  label: "code" | "name";
  icon: TypeMediaInputValue;
  showLanguage: boolean;
  showLocalizationAlways: boolean;
  showDivider: boolean;
}

class Navbar3 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Type"));

    this.addProp({
      type: "object",
      key: "lane",
      displayer: "Top Lane",
      value: [
        {
          type: "string",
          key: "contact",
          displayer: "Contact",
          value: "Contact us 24/7: +8 500 123 4567",
        },
        {
          type: "string",
          key: "news",
          displayer: "News",
          value: "Express delivery and free returns within 28 days",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "language",
      displayer: "Language Settings",
      value: [
        {
          type: "select",
          key: "label",
          displayer: "Label",
          value: "code",
          additionalParams: {
            selectItems: ["code", "name"],
          },
        },
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "GrLanguage",
          },
        },
        {
          type: "boolean",
          key: "showLocalizationAlways",
          displayer: "Pin to Navbar",
          value: true,
        },
        {
          type: "boolean",
          key: "showLanguage",
          displayer: "Language",
          value: true,
        },  
        {
          type: "boolean",
          key: "showDivider",
          displayer: "Show Divider",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "defaultLogo",
      displayer: "Default Logo",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc965?alt=media&timestamp=1735826277716",
          },
        },
        {
          type: "page",
          key: "navigateTo",
          value: "",
          displayer: "Navigate To",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "absoluteLogo",
      displayer: "Absolute Logo",
      value: [
        {
          type: "media",
          key: "absoluteLogo_image",
          displayer: "Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc964?alt=media&timestamp=1735826277716",
          },
        },
        {
          type: "page",
          key: "absoluteLogo_navigateTo",
          value: "",
          displayer: "Navigate To",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "menuItems",
      displayer: "Menu",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Home",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Dropdown",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "media",
              key: "mega_media",
              displayer: "Mega Menu Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "" },
            },
            {
              type: "boolean",
              key: "mega_overlay",
              displayer: "Mega Menu Overlay",
              value: false,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Fashion Home",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Winery Home",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "New",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "New Arrivals",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "Hot",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Men & Women",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Trend Collection",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Creative",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "Coming Soon",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Shop",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Mega",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "media",
              key: "mega_media",
              displayer: "Mega Menu Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "" },
            },
            {
              type: "boolean",
              key: "mega_overlay",
              displayer: "Mega Menu Overlay",
              value: false,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Shop Styles",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Shop Grid Style 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Shop Grid Style 2",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "Hot",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Shop Boxed Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Lookbook Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Packery Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "New",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Masonry Style 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Masonry Style 2",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Classic Shop",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Creative",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "Coming Soon",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Single Products",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Classic Item Page",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "Sale",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Grid Items Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Default Item Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Modern Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Boxed Grid Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Sticky Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "Popular",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Fullwidth Style",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Fullwidth Sidebar",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Pages",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Dropdown",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "media",
              key: "mega_media",
              displayer: "Mega Menu Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "" },
            },
            {
              type: "boolean",
              key: "mega_overlay",
              displayer: "Mega Menu Overlay",
              value: false,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "About Us",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Lookbook",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Typography",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Shortcodes",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Coming Soon",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Page 404",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "News",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Dropdown",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "media",
              key: "mega_media",
              displayer: "Mega Menu Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "" },
            },
            {
              type: "boolean",
              key: "mega_overlay",
              displayer: "Mega Menu Overlay",
              value: false,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Fullwidth",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "With Left Sidebar",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "With Right Sidebar",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Masonry",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Masonry Fullwidth",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Masonry Without Sidebar",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Masonry With Right Sidebar",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Blog Single Post",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Fullwidth",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "With Right Sidebar",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "With Left Sidebar",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Gallery",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Contacts",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Normal",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "media",
              key: "mega_media",
              displayer: "Mega Menu Media",
              additionalParams: { availableTypes: ["image", "video"] },
              value: { type: "image", url: "" },
            },
            {
              type: "boolean",
              key: "mega_overlay",
              displayer: "Mega Menu Overlay",
              value: false,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
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

    this.addProp({
      type: "object",
      key: "navigationIcons",
      displayer: "Navigation Icons",
      value: [
        {
          type: "media",
          key: "dropdownIcon",
          displayer: "Dropdown Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "MdArrowDropDown",
          },
        },
        {
          type: "media",
          key: "rightIcon",
          displayer: "Right Arrow Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "MdKeyboardArrowRight",
          },
        },
        {
          type: "media",
          key: "hamburgerIcon",
          displayer: "Hamburger Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "MdMenu",
          },
        },
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "RxCross2",
          },
        },
      ],
    });
    
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "item_icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaTelegram",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "item_icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "item_icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "item_icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2"]
      }
    });
    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("isBigScreen", false);
    this.setComponentState("navbarOverflowShow", false);
  }

  static getName(): string {
    return "Navbar 3";
  }

  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const scroll = Base.Navigator.getWrapperContainer()?.scrollY;
    if (scroll < 50) {
      this.setComponentState("changeBackground", true);
    }
    setTimeout(() => {
      this.setComponentState("hamburgerNavActive", true);
      setTimeout(() => {
        this.setComponentState("navbarOverflowShow", true);
      }, 300)
    }, 100);
  };

  handleCloseMenu = () => {
    Base.Navigator.changeScrollBehaviour("auto");
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navbarOverflowShow", false);
    setTimeout(() => {
      this.setComponentState("changeBackground", false);
    }, 200);
  };

  navClick(index: number) {
    const isActive = this.getComponentState("subNavActiveIndex") === index;
    this.setComponentState("navActive", !isActive);
    this.setComponentState("subNavActiveIndex", isActive ? null : index);
    this.setComponentState("subNavActive", null);
  }

  subNavClick(index: any) {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", index);
    }
  }

  render() {
    const lane = this.castToObject<Lane>("lane");
    const position = this.getPropValue("position");

    const menuItems = this.castToObject<Item[]>("menuItems");
    const icons = this.castToObject<any[]>("icons");
    const navigationIcons = this.castToObject<{
      dropdownIcon?: TypeMediaInputValue;
      rightIcon?: TypeMediaInputValue;
      hamburgerIcon?: TypeMediaInputValue;
      closeIcon?: TypeMediaInputValue;
    }>("navigationIcons");

    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");

    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");
    const isScrolled = this.getComponentState("isScrolled");
    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;

    const changeBackground = this.getComponentState("changeBackground");

    const currentLogo =
      (transparentBackground && !changeBackground)
        ? { image: absoluteLogo.absoluteLogo_image, navigateTo: absoluteLogo.absoluteLogo_navigateTo }
        : { image: defaultLogo.image, navigateTo: defaultLogo.navigateTo };

    const language = this.castToObject<Language>("language");

    const laneContainer =
      this.castToString(lane.contact) ||
      this.castToString(lane.news) ||
      language.showLanguage;

    const isBigScreen = this.getComponentState("isBigScreen");
    const isVisible = (!isBigScreen && hamburgerNavActive);

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <div className={this.decorateCSS("navbar-root")}>
        {laneContainer && (
          <Base.Container className={this.decorateCSS("laneContainer")}>
            <Base.MaxContent className={this.decorateCSS("lane")}>
              {this.castToString(lane.contact) && (
                <Base.P className={this.decorateCSS("laneContact")}>
                  {lane?.contact}
                </Base.P>
              )}
              {this.castToString(lane.news) && (
                <Base.P className={this.decorateCSS("laneNews")}>{lane?.news}</Base.P>
              )}

              {language.showLanguage && (
                <div className={this.decorateCSS("loacalizationContainer")}>
                  <Base.Language
                    type="dropdown"
                    title={language.label}
                    icon={language.icon}
                    dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                    dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                    iconClassName={this.decorateCSS("languageIcon")}
                    dropdownItemClassName={this.decorateCSS("localizationItem")}
                    dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                    divider={language.showDivider}
                  />
                </div>
              )}
            </Base.MaxContent>
          </Base.Container>
        )}

        <Base.Navigator.Container
          position={position}
          className={this.decorateCSS("pcNavbarContainer")}
          positionContainer={`${this.decorateCSS("pcNavbarPositionContainer")} ${hamburgerNavActive ? this.decorateCSS("hamburgerActive") : ""}`}
          setIsBigScreen={(value: boolean) =>
            this.setComponentState("isBigScreen", value)
          }
          setIsScrolled={(value: boolean) =>
            this.setComponentState("isScrolled", value)
          }
          hamburgerNavActive={hamburgerNavActive}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            {currentLogo.image && (
              <div className={this.decorateCSS("logo")}>
                <ComposerLink path={currentLogo.navigateTo}>
                  <Base.Media
                    value={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                  />
                </ComposerLink>
              </div>
            )}
            {menuItems.length > 0 && (
              <nav className={this.decorateCSS("pcNavbar")}>
                {menuItems.map(
                  (item: Item, index: any) =>
                    this.castToString(item.title) && (
                      <div
                        key={index}
                        className={this.decorateCSS("menuItemContainer")}
                      >
                        <ComposerLink path={item.navigate_to}>
                          <div className={this.decorateCSS("menuItem")}>
                            <Base.P className={`${this.decorateCSS("menuItemTitle")} ${animations}`}>
                              {item.title}
                            </Base.P>
                            {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                              <Base.Media
                                value={navigationIcons?.dropdownIcon}
                                className={this.decorateCSS("dropdownIcon")}
                              />
                            )}
                          </div>
                        </ComposerLink>
                        {item.menuType === "Dropdown" &&
                          item.sub_items?.length > 0 && (
                            <div className={this.decorateCSS("dropdown")}>
                              {item.sub_items?.map(
                                (subItem: Item, subIndex: number) =>
                                  this.castToString(subItem.title) && (
                                    <div
                                      key={subIndex}
                                      className={`${this.decorateCSS("dropdownItemContainer")} ${animations}`}
                                    >
                                      <div
                                        className={this.decorateCSS(
                                          "dropdownItem"
                                        )}
                                      >
                                        <ComposerLink
                                          path={subItem.navigate_to}
                                        >
                                          <div
                                            className={this.decorateCSS(
                                              "dropdownItemContent"
                                            )}
                                          >
                                            <Base.P className={`${this.decorateCSS("dropdownItemTitle")} ${animations}`}>
                                              {subItem.title}
                                            </Base.P>
                                            {this.castToString(subItem.sub_item_badge) && (
                                              <Base.P className={this.decorateCSS("badge")}>
                                                {subItem.sub_item_badge}
                                              </Base.P>
                                            )}
                                          </div>
                                        </ComposerLink>
                                        {subItem.sub_items.length > 0 &&
                                          subItem.sub_items.some((item: Item) =>
                                            this.castToString(item.title)
                                          ) && (
                                            <Base.Media
                                              value={navigationIcons?.rightIcon}
                                              className={this.decorateCSS("rightIcon")}
                                            />
                                          )}
                                      </div>
                                      {subItem.sub_items.length > 0 &&
                                        subItem.sub_items.some((item: Item) =>
                                          this.castToString(item.title)
                                        ) && (
                                          <div
                                            className={this.decorateCSS(
                                              "subdropdown"
                                            )}
                                          >
                                            {subItem.sub_items.map(
                                              (
                                                subSubItem: Item,
                                                subSubIndex: number
                                              ) =>
                                                this.castToString(
                                                  subSubItem.title
                                                ) && (
                                                  <div key={subSubIndex} className={`${this.decorateCSS("subdropdownItem")} ${animations}`}>
                                                    <ComposerLink
                                                      path={
                                                        subSubItem.navigate_to
                                                      }
                                                    >
                                                      <div className={this.decorateCSS("subdropdownItemContent")}>
                                                        <Base.P
                                                          className={this.decorateCSS(
                                                            "dropdownItemTitle"
                                                          )}
                                                        >
                                                          {subSubItem.title}
                                                        </Base.P>
                                                        {this.castToString(subSubItem.sub_sub_item_badge) && (
                                                          <Base.P className={this.decorateCSS("badge")}>
                                                            {subSubItem.sub_sub_item_badge}
                                                          </Base.P>
                                                        )}
                                                      </div>
                                                    </ComposerLink>
                                                  </div>
                                                )
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  )
                              )}
                            </div>
                          )}
                        {item.menuType === "Mega" &&
                          item.sub_items?.length > 0 && (
                            <div className={this.decorateCSS("megaMenu")}>
                              {item.mega_media && item.mega_media.type !== "icon" && item.mega_media.url && (
                                <Base.Media
                                  value={item.mega_media}
                                  className={this.decorateCSS("megaMenuMedia")}
                                />
                              )}
                              {item.mega_overlay && item.mega_media && item.mega_media.type !== "icon" && item.mega_media.url && (
                                <div className={this.decorateCSS("megaMenuOverlay")} />
                              )}
                              <div className={this.decorateCSS("megaMenuColumns")}>
                                {item.sub_items.map(
                                  (column: Item, columnIndex: number) => {
                                    const columnTitleExist = this.castToString(column.title);
                                    const columnLinks = (column.sub_items || []).filter(
                                      (link: Item) => this.castToString(link.title)
                                    );
                                    return (
                                      (columnTitleExist || columnLinks.length > 0) && (
                                        <div
                                          key={columnIndex}
                                          className={this.decorateCSS("megaMenuColumn")}
                                        >
                                          {columnTitleExist && (
                                            <ComposerLink path={column.navigate_to}>
                                              <div className={this.decorateCSS("megaMenuColumnHeader")}>
                                                <Base.P className={this.decorateCSS("megaMenuColumnTitle")}>
                                                  {column.title}
                                                </Base.P>
                                                {this.castToString(column.sub_item_badge) && (
                                                  <Base.P className={this.decorateCSS("badge")}>
                                                    {column.sub_item_badge}
                                                  </Base.P>
                                                )}
                                              </div>
                                            </ComposerLink>
                                          )}
                                          {columnLinks.length > 0 && (
                                            <div className={this.decorateCSS("megaMenuLinks")}>
                                              {column.sub_items.map(
                                                (link: Item, linkIndex: number) =>
                                                  this.castToString(link.title) && (
                                                    <ComposerLink key={linkIndex} path={link.navigate_to}>
                                                      <div className={`${this.decorateCSS("megaMenuLink")} ${animations}`}>
                                                        <Base.P className={`${this.decorateCSS("megaMenuLinkTitle")} ${animations}`}>
                                                          {link.title}
                                                        </Base.P>
                                                        {this.castToString(link.sub_sub_item_badge) && (
                                                          <Base.P className={this.decorateCSS("badge")}>
                                                            {link.sub_sub_item_badge}
                                                          </Base.P>
                                                        )}
                                                      </div>
                                                    </ComposerLink>
                                                  )
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    )
                )}
              </nav>
            )}

            {icons?.length > 0 && (
              <div className={this.decorateCSS("icons")}>
                {icons?.map((item: any, index: number) => {
                  return (
                    item.item_icon && (
                      <ComposerLink path={item.page}>
                        <div className={this.decorateCSS("icon-element")}>
                          <Base.Media
                            value={item.item_icon}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      </ComposerLink>
                    )
                  );
                })}
              </div>
            )}
          </Base.MaxContent>
        </Base.Navigator.Container>

        <Base.Navigator.Container
          position={position}
          className={`${this.decorateCSS(
            "smallDeviceNavbarContainer"
          )} ${changeBackground ? this.decorateCSS("filledBackground") : ""}`}
          hamburgerNavActive={hamburgerNavActive}
          setIsBigScreen={(value: boolean) =>
            this.setComponentState("isBigScreen", value)
          }
          setIsScrolled={(value: boolean) =>
            this.setComponentState("isScrolled", value)
          }
          positionContainer={`${this.decorateCSS("smallDeviceNavbarPositionContainer")} ${hamburgerNavActive ? this.decorateCSS("hamburgerActive") : ""}`}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            {currentLogo.image && (
              <div className={this.decorateCSS("logo")} onClick={() => this.handleCloseMenu()}>
                <ComposerLink path={currentLogo.navigateTo}>
                  <Base.Media
                    value={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                  />
                </ComposerLink>
              </div>
            )}
            <div className={this.decorateCSS("mobileRight")}>
            {hamburgerNavActive ? (
              <div onClick={() => this.handleCloseMenu()}>
                <Base.Media
                  value={navigationIcons?.closeIcon}
                  className={this.decorateCSS("closeIcon")}
                />
              </div>
            ) : (
              <div onClick={() => this.handleOpenMenu()}>
                <Base.Media
                  value={navigationIcons?.hamburgerIcon}
                  className={this.decorateCSS("hamburgerIcon")}
                />
              </div>
            )}
            {icons?.length > 0 && (
              <div className={this.decorateCSS("mobileIcons")}>
                {icons?.map((item: any, index: number) =>
                  item.item_icon && (
                    <ComposerLink key={index} path={item.page}>
                      <div className={this.decorateCSS("icon-element")}>
                        <Base.Media
                          value={item.item_icon}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    </ComposerLink>
                  )
                )}
              </div>
            )}
            </div>


            <div
              className={`${this.decorateCSS("hamburgerNav")} ${
                hamburgerNavActive ? this.decorateCSS("active") : ""
              } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
            >
              <Base.Container
                className={this.decorateCSS("hamburgerNavContainer")}
              >
                <Base.MaxContent
                  className={this.decorateCSS("hamburgerNavMaxContent")}
                >
                  {menuItems.length > 0 && (
                    <nav className={this.decorateCSS("hamburgerMenu")}>
                      {menuItems.map(
                        (item: Item, index: number) =>
                          this.castToString(item.title) && (
                            <div
                              key={index}
                              className={this.decorateCSS("hamburgerMenuItem")}
                            >
                              <div
                                className={this.decorateCSS(
                                  "hamburgerMenuItemHeader"
                                )}
                                onClick={() => this.navClick(index)}
                              >
                                <ComposerLink path={item.navigate_to}>
                                  <Base.P
                                    className={`${this.decorateCSS(
                                      "hamburgerMenuItemTitle"
                                    )}`}
                                    onClick={() => this.handleCloseMenu()}
                                  >
                                    {item.title}
                                  </Base.P>
                                </ComposerLink>
                                {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                                  <Base.Media
                                    value={navigationIcons?.dropdownIcon}
                                    className={`${this.decorateCSS(
                                      "dropdownIcon"
                                    )} ${
                                      this.getComponentState(
                                        "subNavActiveIndex"
                                      ) === index
                                        ? this.decorateCSS("active")
                                        : ""
                                    }`}
                                  />
                                )}
                              </div>
                              {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                                <div
                                  className={`${this.decorateCSS(
                                    "hamburgerSubmenu"
                                  )} ${
                                    this.getComponentState(
                                      "subNavActiveIndex"
                                    ) === index
                                      ? this.decorateCSS("active")
                                      : ""
                                  }`}
                                >
                                  {item.sub_items?.map(
                                    (subItem: Item, subIndex: number) =>
                                      this.castToString(subItem.title) && (
                                        <div
                                          key={subIndex}
                                          className={this.decorateCSS(
                                            "hamburgerSubmenuItem"
                                          )}
                                        >
                                          <div
                                            className={this.decorateCSS(
                                              "hamburgerSubmenuItemHeader"
                                            )}
                                            onClick={() =>
                                              this.subNavClick(
                                                `${index}-${subIndex}`
                                              )
                                            }
                                          >
                                            <ComposerLink
                                              path={subItem.navigate_to}
                                            >
                                              <Base.P
                                                className={this.decorateCSS(
                                                  "hamburgerDropdownItemTitle"
                                                )}
                                                onClick={() => this.handleCloseMenu()}
                                              >
                                                {subItem.title}
                                              </Base.P>
                                            </ComposerLink>
                                            {this.castToString(subItem.sub_item_badge) && (
                                              <Base.P className={this.decorateCSS("badge")}>
                                                {subItem.sub_item_badge}
                                              </Base.P>
                                            )}
                                            {subItem.sub_items.length > 0 &&
                                              subItem.sub_items.some(
                                                (item: any) =>
                                                  this.castToString(item.title)
                                              ) && (
                                                <Base.Media
                                                  value={navigationIcons?.rightIcon}
                                                  className={`${this.decorateCSS(
                                                    "rightIcon"
                                                  )} ${
                                                    this.getComponentState(
                                                      "subNavActive"
                                                    ) ===
                                                    `${index}-${subIndex}`
                                                      ? this.decorateCSS(
                                                          "active"
                                                        )
                                                      : ""
                                                  }`}
                                                />
                                              )}
                                          </div>
                                          {subItem.sub_items.length > 0 &&
                                            subItem.sub_items.some(
                                              (item: any) =>
                                                this.castToString(item.title)
                                            ) && (
                                              <div
                                                className={`${this.decorateCSS(
                                                  "hamburgerSubSubmenu"
                                                )} ${
                                                  this.getComponentState(
                                                    "subNavActive"
                                                  ) === `${index}-${subIndex}`
                                                    ? this.decorateCSS("active")
                                                    : ""
                                                }`}
                                              >
                                                {subItem.sub_items.map(
                                                  (
                                                    subSubItem: Item,
                                                    subSubIndex: number
                                                  ) =>
                                                    this.castToString(
                                                      subSubItem.title
                                                    ) && (
                                                      <div
                                                        key={subSubIndex}
                                                        className={this.decorateCSS(
                                                          "hamburgerSubSubmenuItem"
                                                        )}
                                                      >
                                                        <ComposerLink
                                                          path={
                                                            subSubItem.navigate_to
                                                          }
                                                        >
                                                          <Base.P
                                                            className={this.decorateCSS(
                                                              "hamburgerSubSubmenuItemTitle"
                                                            )}
                                                            onClick={() => this.handleCloseMenu()}
                                                          >
                                                            {subSubItem.title}
                                                          </Base.P>
                                                        </ComposerLink>
                                                        {this.castToString(subSubItem.sub_sub_item_badge) && (
                                                          <Base.P className={this.decorateCSS("badge")}>
                                                            {subSubItem.sub_sub_item_badge}
                                                          </Base.P>
                                                        )}
                                                      </div>
                                                    )
                                                )}
                                              </div>
                                            )}
                                        </div>
                                      )
                                  )}
                                </div>
                              )}
                            </div>
                          )
                      )}

                    </nav>
                  )}
                </Base.MaxContent>
              </Base.Container>
            </div>
          </Base.MaxContent>
        </Base.Navigator.Container>

        <Base.Overlay
          clasName = {this.decorateCSS("overlay")}
          isVisible = {isVisible}
          onClick={() => this.handleCloseMenu()}
        />
      </div>
    );
  }
}

export default Navbar3;
