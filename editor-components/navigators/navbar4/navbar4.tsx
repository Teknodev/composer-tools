import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";

interface Logo {
  image: string;
  imageLink: string;
}

interface Information {
  image: string;
  title: JSX.Element;
  description: JSX.Element;
}

interface MenuItems {
  title: JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItems[];
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
  showDivider: boolean;
}

class Navbar4 extends BaseNavigator {
  static getName(): string {
    return "Navbar 4";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Position"));

    this.addProp({
      type: "object",
      key: "information",
      displayer: "Information",
      value: [
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6777cde60655f8002cb0377c?alt=media",
          displayer: "Image",
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc964?alt=media&timestamp=1735826277716",
          displayer: "Image",
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
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc965?alt=media&timestamp=1735826277716",
          displayer: "Image",
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
              type: "icon",
              key: "icon",
              value: "BiLogoFacebookCircle",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
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
              type: "image",
              key: "icon",
              value: "FaTwitter",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
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
              type: "image",
              key: "icon",
              value: "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
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
              type: "image",
              key: "icon",
              value: "FaLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "page",
              displayer: "Page",
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
              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
              displayer: "Navigate to",
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
                      displayer: "Navigate to",
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
                              displayer: "Navigate to",
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
      displayer: "Language",
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
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "GrLanguage",
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
      type: "icon",
      key: "dropdownIcon",
      displayer: "Menu Icon",
      value: "GoPlus",
    });

    this.addProp({
      type: "icon",
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      value: "MdMenu",
    });

    this.addProp({
      type: "icon",
      key: "rightIcon",
      displayer: "Right Arrow Icon",
      value: "MdKeyboardArrowRight",
    });
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "IoMdClose",
    });

    this.addProp({
      type: "string",
      key: "hamburgerMenuTitle",
      displayer: "Hamburger Menu Title",
      value: "MENU",
    });

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("isBigScreen", false);
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
    }, 100);
  };

  handleCloseMenu = () => {
    Base.Navigator.changeScrollBehaviour("auto");

    this.setComponentState("hamburgerNavActive", false);
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



    return (
      <>
        {topBar && (
          <Base.Container className={this.decorateCSS("laneContainer")}>
            {topBar && (
              <Base.MaxContent className={this.decorateCSS("laneContent")}>
                {informationContainer && (
                  <div className={this.decorateCSS("informationContainer")}>
                    {information.image && (
                      <div
                        className={this.decorateCSS(
                          "informationImageContainer"
                        )}
                      >
                        <img
                          src={information.image}
                          alt=""
                          className={this.decorateCSS("informationImage")}
                        />
                      </div>
                    )}
                    {informationTextContainer && (
                      <div
                        className={this.decorateCSS("informationTextContainer")}
                      >
                        {informationTitle && (
                          <h6 className={this.decorateCSS("informationTitle")}>
                            {information.title}
                          </h6>
                        )}
                        {informationDescription && (
                          <p
                            className={this.decorateCSS(
                              "informationDescription"
                            )}
                          >
                            {information.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {defaultLogo.image && (
                  <div className={this.decorateCSS("logo")}>
                    <ComposerLink path={defaultLogo.imageLink}>
                      {defaultLogo.image && (
                        <img
                          src={defaultLogo.image}
                          className={this.decorateCSS("logo-img")}
                        />
                      )}
                    </ComposerLink>
                  </div>
                )}
                {icons.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {icons.map((icon) => (
                      <ComposerLink path={icon.page}>
                        <ComposerIcon
                          name={icon.icon}
                          propsIcon={{ className: this.decorateCSS("icon") }}
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
          <ComposerLink path={defaultLogo.imageLink}>
            <img
              src={defaultLogo.image}
              alt=""
              className={this.decorateCSS("smallDeviceLogoImg")}
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
                          className={this.decorateCSS("menuItemContainer")}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("menuItem")}>
                              {item.menuType === "Dropdown" && (
                                <ComposerIcon
                                  name={this.getPropValue("dropdownIcon")}
                                  propsIcon={{
                                    className: this.decorateCSS("dropdownIcon"),
                                  }}
                                />
                              )}
                              <span
                                className={this.decorateCSS("menuItemTitle")}
                              >
                                {item.title}
                              </span>
                            </div>
                          </ComposerLink>
                          {item.menuType === "Dropdown" && (
                            <div className={this.decorateCSS("dropdown")}>
                              {item.sub_items?.map(
                                (subItem: any, subIndex: number) => this.castToString(subItem.title) && (
                                  <div
                                    key={subIndex}
                                    className={this.decorateCSS(
                                      "dropdownItemContainer"
                                    )}
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
                                          <span
                                            className={this.decorateCSS(
                                              "dropdownItemTitle"
                                            )}
                                          >
                                            {subItem.title}
                                          </span>
                                        </div>
                                      </ComposerLink>
                                      {subItem.sub_items.length > 0 &&
                                        subItem.sub_items.some((item: any) =>
                                          this.castToString(item.title)
                                        ) && (
                                          <ComposerIcon
                                            name={this.getPropValue("dropdownIcon")}
                                            propsIcon={{
                                              className:
                                                this.decorateCSS("rightIcon"),
                                            }}
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
                                                className={this.decorateCSS(
                                                  "subdropdownItem"
                                                )}
                                              >
                                                <ComposerLink
                                                  path={subSubItem.navigate_to}
                                                >
                                                  <span
                                                    className={this.decorateCSS(
                                                      "dropdownItemTitle"
                                                    )}
                                                  >
                                                    {subSubItem.title}
                                                  </span>
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
                <ComposerLanguage
                  type="dropdown"
                  title={language.label}
                  icon={language.icon}
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
            <div className={this.decorateCSS("hamburgerIconContainer")}>
              {isHamburgerActive ? (
                <ComposerIcon
                  name={this.getPropValue("closeIcon")}
                  propsIcon={{
                    className: this.decorateCSS("closeIcon"),
                    onClick: this.handleCloseMenu,
                  }}
                />
              ) : (
                <ComposerIcon
                  name={this.getPropValue("hamburgerIcon")}
                  propsIcon={{
                    className: this.decorateCSS("hamburgerIcon"),
                    onClick: this.handleOpenMenu,
                  }}
                />
              )}
              <span className={this.decorateCSS("hamburgerMenuTitle")}>
                {hamburgerMenuTitle}
              </span>
            </div>

            <div
              className={`${this.decorateCSS("hamburgerNav")} ${
                isHamburgerActive
                  ? this.decorateCSS("active")
                  : ""
              }`}
            >
              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map((item: MenuItems, index: number) => (
                    <div
                      key={index}
                      className={this.decorateCSS("hamburgerMenuItem")}
                    >
                      <div
                        className={this.decorateCSS("hamburgerMenuItemHeader")}
                        onClick={() => this.navClick(index)}
                      >
                        <ComposerLink path={item.navigate_to}>
                          <span
                            className={`${this.decorateCSS(
                              "hamburgerMenuItemTitle"
                            )}`}
                          >
                            {item.title}
                          </span>
                        </ComposerLink>
                        {item.menuType === "Dropdown" && (
                          <ComposerIcon
                            name={this.getPropValue("dropdownIcon")}
                            propsIcon={{
                              className: `${this.decorateCSS("dropdownIcon")} ${
                                this.getComponentState("subNavActiveIndex") ===
                                index
                                  ? this.decorateCSS("active")
                                  : ""
                              }`,
                            }}
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
                                    className={this.decorateCSS(
                                      "hamburgerSubmenuItemHeader"
                                    )}
                                    onClick={() =>
                                      this.subNavClick(`${index}-${subIndex}`)
                                    }
                                  >
                                    <ComposerLink path={subItem.navigate_to}>
                                      <span
                                        className={this.decorateCSS(
                                          "hamburgerDropdownItemTitle"
                                        )}
                                      >
                                        {subItem.title}
                                      </span>
                                    </ComposerLink>
                                    {subItem.sub_items.length > 0 &&
                                      subItem.sub_items.some((item: any) =>
                                        this.castToString(item.title)
                                      ) && (
                                        <ComposerIcon
                                          name={this.getPropValue("rightIcon")}
                                          propsIcon={{
                                            className: `${this.decorateCSS(
                                              "rightIcon"
                                            )} ${
                                              this.getComponentState(
                                                "subNavActive"
                                              ) === `${index}-${subIndex}`
                                                ? this.decorateCSS("active")
                                                : ""
                                            }`,
                                          }}
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
                                                <span
                                                  className={this.decorateCSS(
                                                    "hamburgerSubSubmenuItemTitle"
                                                  )}
                                                >
                                                  {subSubItem.title}
                                                </span>
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

                    {language.showLanguage && (
                      <ComposerLanguage
                        type="accordion"
                        title={language.label}
                        headerClassName={`${this.decorateCSS("localization")}`}
                        itemClassName={`${this.decorateCSS(
                          "localizationItem"
                        )}`}
                        titleClassName={`${this.decorateCSS(
                          "localizationTitle"
                        )}`}
                        
                      />
                    )}

                </nav>
              )}
            </div>
          </Base.MaxContent>

          <div
          className={`${this.decorateCSS("overlay")} ${
            isHamburgerActive ? this.decorateCSS("overlayActive") : ""
          }`}
          onClick={() => this.handleCloseMenu()}
        />
        </Base.Navigator.Container>
      </>
    );
  }
}

export default Navbar4;
