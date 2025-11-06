import { ReactNode } from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./navbar4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Logo {
  image: TypeMediaInputValue;
  navigateTo: string;
}

interface Information {
  image: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
}

interface MenuItems {
  title: React.JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItems[];
}

interface Language {
  label: "code" | "name";
  icon: TypeMediaInputValue;
  showLanguage: boolean;
  showLocalizationAlways: boolean;
  showDivider: boolean;
}

class Navbar4 extends BaseNavigator {
  static getName(): string {
    return "Navbar 4";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Type"));

    this.addProp({
      type: "object",
      key: "information",
      displayer: "Information",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6777cde60655f8002cb0377c?alt=media",
          },
        },
        {
          type: "string",
          key: "title",
          value: "Title Text",
          displayer: "Title",
        },
        {
          type: "string",
          key: "description",
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          displayer: "Description Text",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6847f1914e31d2002b32b378?alt=media",
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
          key: "image",
          displayer: "Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6847f1f54e31d2002b32b3d7?alt=media",
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
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "BiLogoFacebookCircle",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
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
              value: "HOME",
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
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
                      value: "FASHION HOME",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "WINERY HOME",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "NEW ARRIVALS",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "MEN & WOMEN",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "TREND COLLECTION",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "CREATIVE",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
              value: "FEATURES",
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
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
                      value: "SUB ITEM1",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
              value: "POST BLOCKS",
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
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
                      value: "ABOUT US",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "LOOKBOOK",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "TYPOGRAPHY",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "SHORTCODES",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "COMING SOON",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "PAGE 404",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
              value: "NEWS",
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
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
                      value: "BLOG POSTS",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                      value: "MASONARY",
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
                      additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
              value: "CONTACTS",
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
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
                      value: "CONTACTS SUB ITEM",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
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
                              value: "CONTACTS SUB SUB ITEM ",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
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
              value: "BUY THEME",
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
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
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
      key: "language",
      displayer: "Language Settings",
      value: [
        {
          type: "select",
          key: "label",
          displayer: "Language Label",
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
          displayer: "Show Language",
          value: true,
        },
        {
          type: "boolean",
          key: "showDivider",
          displayer: "Show Divider",
          value: false,
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
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "GoPlus",
          },
        },
        {
          type: "media",
          key: "rightIcon",
          displayer: "Right Arrow Icon",
          additionalParams: {
            availableTypes: ["icon"],
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
            availableTypes: ["icon"],
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
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdClose",
          },
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "hamburgerMenuTitle",
      displayer: "Hamburger Menu Title",
      value: "MENU",
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2", "animation3"]
      }
    });

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("isBigScreen", false);
    this.setComponentState("navbarOverflowShow", false);
  }

  hamburgerNavClick() {
    let value: boolean = this.getComponentState("hamburgerNavActive");
    this.setComponentState("hamburgerNavActive", !value);
  }

  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapper = Base.Navigator.getWrapperContainer();
    this.setComponentState("backgroundChange", wrapper.scrollY === 0);
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
      this.setComponentState("backgroundChange", false);
    }, 200);
  };

  navClick(index: number) {
    const isActive = this.getComponentState("subNavActiveIndex") === index;
    this.setComponentState("navActive", !isActive);
    this.setComponentState("subNavActiveIndex", isActive ? null : index);
    this.setComponentState("subNavActive", null);
  }

  subNavClick(index: any) {
    const isActive = this.getComponentState("subNavActive") === index;
    this.setComponentState("subNavActive", isActive ? null : index);
  }


  render(): ReactNode {
    const icons = this.castToObject<any[]>("icons");
    const position = this.getPropValue("position");
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const information = this.castToObject<Information>("information");
    const menuItems = this.castToObject<MenuItems[]>("menuItems");
    const hamburgerMenuTitle: string = this.getPropValue("hamburgerMenuTitle");
    const navigationIcons = this.castToObject<{
      dropdownIcon?: TypeMediaInputValue;
      rightIcon?: TypeMediaInputValue;
      hamburgerIcon?: TypeMediaInputValue;
      closeIcon?: TypeMediaInputValue;
    }>("navigationIcons");

    const informationTitle = this.castToString(information.title);
    const informationDescription = this.castToString(information.description);

    const informationTextContainer = informationTitle || informationDescription;

    const informationContainer = information.image || informationTextContainer;

    const topBar =
      informationContainer || defaultLogo.image || icons.length > 0;

    const isHamburgerActive = this.getComponentState("hamburgerNavActive");
    const backgroundChange = this.getComponentState("backgroundChange");
    const language = this.castToObject<Language>("language");

    const isScrolled = this.getComponentState("isScrolled");
    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const isStickyTranparentAndScrolled = isStickyTransparent && !isScrolled;

    const isBigScreen = this.getComponentState("isBigScreen")
    
    const isVisible = isHamburgerActive && !isBigScreen;

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ");

    return (
      <>
        {topBar && (
          <Base.Container className={this.decorateCSS("upperContainer")}>
            {topBar && (
              <Base.MaxContent className={this.decorateCSS("content")}>
                {informationContainer && (
                  <div className={this.decorateCSS("informationContainer")}>
                    {information.image && (
                      <div
                        className={this.decorateCSS(
                          "informationImageContainer"
                        )}
                      >
                        <Base.Media
                          value={information.image}
                          className={this.decorateCSS("informationImage")}
                        />
                      </div>
                    )}
                    {informationTextContainer && (
                      <div
                        className={this.decorateCSS("informationTextContainer")}
                      >
                        {informationTitle && (
                          <Base.P className={this.decorateCSS("informationTitle")}>
                            {information.title}
                          </Base.P>
                        )}
                        {informationDescription && (
                          <Base.P
                            className={this.decorateCSS(
                              "informationDescription"
                            )}
                          >
                            {information.description}
                          </Base.P>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {defaultLogo.image && (
                  <div className={this.decorateCSS("logo")}>
                    <ComposerLink path={defaultLogo.navigateTo}>
                      {defaultLogo.image && (
                        <Base.Media
                          value={defaultLogo.image}
                          className={this.decorateCSS("image")}
                        />
                      )}
                    </ComposerLink>
                  </div>
                )}
                {icons.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {icons.map((icon) => (
                      <ComposerLink path={icon.page}>
                        <Base.Media
                          value={icon.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </Base.MaxContent>
            )}
          </Base.Container>
        )}
        <div className={this.decorateCSS("smallDevicelogo")}>
          <ComposerLink path={defaultLogo.navigateTo}>
            <Base.Media
              value={defaultLogo.image}
              className={this.decorateCSS("smallDeviceLogoImg")}
              onClick={()=> this.handleCloseMenu()}
            />
          </ComposerLink>
        </div>
        <Base.Navigator.Container
          position={position}
          positionContainer={`${this.decorateCSS("pcNavbarPosition")} ${
            backgroundChange ? this.decorateCSS("activeBackground") : ""
          }`}
          className={this.decorateCSS("pcNavbarContainer")}
          hamburgerNavActive={isHamburgerActive}
          setIsBigScreen={(value: boolean) => this.setComponentState("isBigScreen", value)}
          setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
          screenSize={960}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              isStickyTranparentAndScrolled || isAbsolute
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            {menuItems.length > 0 && (
              <nav className={this.decorateCSS("pcNavbar")}>
                <div className={this.decorateCSS("menu")}>
                  {menuItems.map(
                    (item: any, index: any) =>
                      this.castToString(item.title) && (
                        <div
                          key={index}
                          className={`${this.decorateCSS("menuItemContainer")} ${animations}`}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("menuItem")}>
                              {item.menuType === "Dropdown" && (
                                <Base.Media
                                  value={navigationIcons?.dropdownIcon}
                                  className={this.decorateCSS("dropdownIcon")}
                                />
                              )}
                              <Base.P className={`${this.decorateCSS("menuItemTitle")} ${animations}`}>
                                {item.title}
                              </Base.P>
                            </div>
                          </ComposerLink>
                          {item.menuType === "Dropdown" && (
                            <div className={this.decorateCSS("dropdown")}>
                              {item.sub_items?.map(
                                (subItem: any, subIndex: number) => this.castToString(subItem.title) && (
                                  <div
                                    key={subIndex}
                                    className={`${this.decorateCSS("dropdownItemContainer")} ${animations}`}
                                  >
                                    <div
                                      className={this.decorateCSS(
                                        "dropdownItem"
                                      )}
                                    >
                                      <ComposerLink path={subItem.navigate_to}>
                                        <div
                                          className={this.decorateCSS(
                                            "dropdownItemContent"
                                          )}
                                        >
                                          <Base.P className={`${this.decorateCSS("dropdownItemTitle")} ${animations}`}>
                                            {subItem.title}
                                          </Base.P>
                                        </div>
                                      </ComposerLink>
                                      {subItem.sub_items.length > 0 &&
                                        subItem.sub_items.some((item: any) =>
                                          this.castToString(item.title)
                                        ) && (
                                          <Base.Media
                                            value={navigationIcons?.rightIcon}
                                            className={this.decorateCSS("rightIcon")}
                                          />
                                        )}
                                    </div>
                                    {subItem.sub_items.length > 0 &&
                                      subItem.sub_items.some((item: any) =>
                                        this.castToString(item.title)
                                      ) && (
                                        <div
                                          className={this.decorateCSS(
                                            "subdropdown"
                                          )}
                                        >
                                          {subItem.sub_items.map(
                                            (
                                              subSubItem: MenuItems,
                                              subSubIndex: number
                                            ) => this.castToString(subSubItem.title) && (
                                              <div
                                                key={subSubIndex}
                                                className={`${this.decorateCSS("subdropdownItem")} ${animations}`}
                                              >
                                                <ComposerLink
                                                  path={subSubItem.navigate_to}
                                                >
                                                  <Base.P
                                                    className={this.decorateCSS(
                                                      "dropdownItemTitle"
                                                    )}
                                                  >
                                                    {subSubItem.title}
                                                  </Base.P>
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
                        </div>
                      )
                  )}
                </div>
              </nav>
            )}
            <div className={this.decorateCSS("localizationContainer")}>
              {language.showLanguage && (
                <Base.Language
                  type="dropdown"
                  title={language.label}
                  icon={language.icon?.name || "GrLanguage"}
                  dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                  dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                  iconClassName={this.decorateCSS("languageIcon")}
                  dropdownItemClassName={this.decorateCSS("localizationItem")}
                  dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                  divider={language.showDivider}
                />
              )}
            </div>
            <div className={this.decorateCSS("mobileRight")}>
            <div className={this.decorateCSS("hamburgerIconContainer")}>
              {isHamburgerActive ? (
                <div onClick={this.handleCloseMenu}>
                  <Base.Media
                    value={navigationIcons?.closeIcon}
                    className={this.decorateCSS("closeIcon")}
                  />
                </div>
              ) : (
                <div onClick={this.handleOpenMenu}>
                  <Base.Media
                    value={navigationIcons?.hamburgerIcon}
                    className={this.decorateCSS("hamburgerIcon")}
                  />
                </div>
              )}
              <Base.P className={this.decorateCSS("hamburgerMenuTitle")}>
                {hamburgerMenuTitle}
              </Base.P>
            </div> 
            <div className={this.decorateCSS("mobileLocalizationContainer")}>
              {(language.showLanguage && language.showLocalizationAlways) && (
                <Base.Language
                  type="dropdown"
                  title={language.label}
                  icon={language.icon?.name || "GrLanguage"}
                  dropdownButtonClassName={`${this.decorateCSS(
                    "localization"
                  )}`}
                  dropdownLabelClassName={`${this.decorateCSS(
                    "localizationLabel"
                  )}`}
                  iconClassName={this.decorateCSS("languageIcon")}
                  dropdownItemClassName={this.decorateCSS("localizationItem")}
                  dropdownContentClassName={this.decorateCSS(
                    "localizationContent"
                  )}
                  divider={language.showDivider}
                />
              )}
            </div>
            </div>


            <div
              className={`${this.decorateCSS("hamburgerNav")} ${
                isHamburgerActive
                  ? this.decorateCSS("active")
                  : ""
              } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
            >
              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map((item: MenuItems, index: number) => (
                    <div
                      key={index}
                      className={`${this.decorateCSS("hamburgerMenuItem")} `}
                    >
                      <div
                        className={`${this.decorateCSS("hamburgerMenuItemHeader")} ${animations} ${this.getComponentState("subNavActiveIndex") === index ? this.decorateCSS("active"): ""}`}
                        onClick={() => this.navClick(index)}
                      >
                        <ComposerLink path={item.navigate_to}>
                          <Base.P
                            className={`${this.decorateCSS(
                              "hamburgerMenuItemTitle"
                            )}`}
                            onClick={()=> this.handleCloseMenu()}
                          >
                            {item.title}
                          </Base.P>
                        </ComposerLink>
                        {item.menuType === "Dropdown" && (
                          <Base.Media
                            value={navigationIcons?.dropdownIcon}
                            className={`${this.decorateCSS("dropdownIcon")} ${
                              this.getComponentState("subNavActiveIndex") ===
                              index
                                ? this.decorateCSS("active")
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      {item.menuType === "Dropdown" && (
                        <div
                          className={`${this.decorateCSS("hamburgerSubmenu")} ${
                            this.getComponentState("subNavActiveIndex") ===
                            index
                              ? this.decorateCSS("active")
                              : ""
                          }`}
                        >
                          {item.sub_items?.map(
                            (subItem: MenuItems, subIndex: number) =>
                              this.castToString(subItem.title) && (
                                <div
                                  key={subIndex}
                                  className={this.decorateCSS(
                                    "hamburgerSubmenuItem"
                                  )}
                                >
                                  <div
                                    className={`${this.decorateCSS("hamburgerSubmenuItemHeader")} ${animations} ${
                                      this.getComponentState("subNavActive") === `${index}-${subIndex}` ? this.decorateCSS("active") : ""}`}
                                    onClick={() =>
                                      this.subNavClick(`${index}-${subIndex}`)
                                    }
                                  >
                                    <ComposerLink path={subItem.navigate_to}>
                                      <Base.P
                                        className={this.decorateCSS(
                                          "hamburgerDropdownItemTitle"
                                        )}
                                        onClick={()=> this.handleCloseMenu()}
                                      >
                                        {subItem.title}
                                      </Base.P>
                                    </ComposerLink>
                                    {subItem.sub_items.length > 0 &&
                                      subItem.sub_items.some((item: any) =>
                                        this.castToString(item.title)
                                      ) && (
                                        <Base.Media
                                          value={navigationIcons?.rightIcon}
                                          className={`${this.decorateCSS(
                                            "rightIcon"
                                          )} ${
                                            this.getComponentState(
                                              "subNavActive"
                                            ) === `${index}-${subIndex}`
                                              ? this.decorateCSS("active")
                                              : ""
                                          }`}
                                        />
                                      )}
                                  </div>
                                  {subItem.sub_items.length > 0 &&
                                    subItem.sub_items.some((item: any) =>
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
                                            subSubItem: MenuItems,
                                            subSubIndex: number
                                          ) => (
                                            <div
                                              key={subSubIndex}
                                              className={this.decorateCSS(
                                                "hamburgerSubSubmenuItem"
                                              )}
                                            >
                                              <ComposerLink
                                                path={subSubItem.navigate_to}
                                              >
                                                <Base.P
                                                  className={this.decorateCSS(
                                                    "hamburgerSubSubmenuItemTitle"
                                                  )}
                                                  onClick={()=> this.handleCloseMenu()}
                                                >
                                                  {subSubItem.title}
                                                </Base.P>
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
                    </div>
                  ))}

                    {(language.showLanguage && !language.showLocalizationAlways) && (
                      <Base.Language
                        type="accordion"
                        title={language.label}
                        headerClassName={`${this.decorateCSS("localization")}`}
                        itemClassName={`${this.decorateCSS("localizationItem")} ${animations}`}
                        titleClassName={`${this.decorateCSS("localizationTitle")} ${animations}`}
                      />
                    )}

                </nav>
              )}
            </div>
          </Base.MaxContent>
        </Base.Navigator.Container>
        <Base.Overlay
          className={`${this.decorateCSS("overlay")} ${
            isHamburgerActive ? this.decorateCSS("active") : ""
          }`}
          onClick={() => this.handleCloseMenu()}
          isVisible = {isVisible}
        />
      </>
    );
  }
}

export default Navbar4;
