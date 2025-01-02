import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface MenuItems {
  title: JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItems[];
}

interface Button {
  title: string;
  navigateTo: string;
}

interface Logo {
  image: string;
  navigateTo: string;
  alt: string;
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
}

class Navbar1 extends BaseNavigator {
  navigatorRef: React.RefObject<any>;
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Type"));

    this.addProp({
      type: "object",
      key: "defaultLogo",
      displayer: "Default Logo",
      value: [
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676a9ac20655f8002caba0b7?alt=media",
          displayer: "Image",
        },
        {
          type: "page",
          key: "navigateTo",
          value: "",
          displayer: "Navigate To",
        },
        {
          type: "string",
          key: "alt",
          value: "logo",
          displayer: "Logo",
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
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
          displayer: "Image",
        },
        {
          type: "page",
          key: "navigateTo",
          value: "",
          displayer: "Navigate To",
        },
        {
          type: "string",
          key: "alt",
          value: "logo",
          displayer: "Logo",
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
              key: "title",
              displayer: "Title",
              value: "Contact Us",
            },
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate to",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "menuIcon",
      displayer: "Menu Icon",
      value: "IoMdArrowDropdown",
    });

    this.addProp({
      type: "icon",
      key: "languageIcon",
      displayer: "Language Icon",
      value: "IoIosArrowDown",
    });

    this.addProp({
      type: "icon",
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      value: "RxHamburgerMenu",
    });
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "RxCross2",
    });

    this.addProp({
      type: "icon",
      key: "dropdownIcon",
      displayer: "Dropdown Icon",
      value: "MdArrowDropDown",
    });

    this.addProp({
      type: "icon",
      key: "rightIcon",
      displayer: "Right Arrow Icon",
      value: "MdKeyboardArrowRight",
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
      ],
    });

    this.state["componentProps"]["isScrolled"] = false;
    this.state["componentProps"]["hamburgerNavActive"] = false;
    this.state["componentProps"]["navActive"] = false;
    this.state["componentProps"]["subNavActiveIndex"] = null;
    this.state["componentProps"]["subNavActive"] = null;
    this.state["componentProps"]["changeBackground"] = false;
  }

  getName(): string {
    return "Navbar 1";
  }

  hamburgerNavClick() {
    this.setComponentState("hamburgerNavActive", true);
    this.setComponentState("changeBackground", true);
  }

  handleCloseMenu() {
    this.setComponentState("hamburgerNavActive", false);
    setTimeout(() => {
      this.setComponentState("changeBackground", false);
    }, 300);
  }
  navClick(index: number) {
    const currentValue = this.getComponentState("subNavActiveIndex");
    if (currentValue === index) {
      this.setComponentState("navActive", !this.getComponentState("navActive"));
      this.setComponentState("subNavActiveIndex", null);
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("navActive", true);
      this.setComponentState("subNavActiveIndex", index);
      this.setComponentState("subNavActive", null);
    }
  }

  subNavClick(index: any) {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", index);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    this.setComponentState("isScrolled", isScrolled);
  };

  render() {
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");
    const menuItems = this.castToObject<MenuItems[]>("menuItems");
    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");
    const isScrolled = this.getComponentState("isScrolled");
    const transparentBackground =(position === "Sticky Transparent" || position === "Absolute") && !isScrolled;
    const currentLogo =
      transparentBackground && !hamburgerNavActive ? absoluteLogo : defaultLogo;
    const buttons = this.castToObject<Button[]>("buttons");
    const changeBackground = this.getComponentState("changeBackground");

    const language = this.castToObject<Language>("language");

    return (
      <Base.Navigator.Container
        position={position}
        className={`${this.decorateCSS("navbarContainer")}`}
        positionContainer={
          changeBackground ? this.decorateCSS("filledBackground") : ""
        }

      >
        <Base.MaxContent   className={`${this.decorateCSS("maxContent")} ${
            transparentBackground
              ? this.decorateCSS("transparentBackground")
              : ""
          }`}>
          <div className={this.decorateCSS("logo")}>
            <ComposerLink path={currentLogo.image}>
              <img
                src={currentLogo.image}
                alt={""}
                className={this.decorateCSS("logoImage")}
              />
            </ComposerLink>
          </div>
          <nav className={this.decorateCSS("pcNavbar")}>
            {this.getPropValue("menuItems") &&
              menuItems.map((item: any, index: any) => (
                <div
                  key={index}
                  className={this.decorateCSS("menuItemContainer")}
                >
                  <ComposerLink path={item.navigate_to}>
                    <div className={this.decorateCSS("menuItem")}>
                      <span className={this.decorateCSS("menuItemTitle")}>
                        {item.title}
                      </span>
                      {item.menuType === "Dropdown" && (
                        <ComposerIcon
                          name={this.getPropValue("dropdownIcon")}
                          propsIcon={{
                            className: this.decorateCSS("dropdownIcon"),
                          }}
                        />
                      )}
                    </div>
                  </ComposerLink>
                  {item.menuType === "Dropdown" && (
                    <div className={this.decorateCSS("dropdown")}>
                      {item.sub_items?.map((subItem: any, subIndex: number) => (
                        <div
                          key={subIndex}
                          className={this.decorateCSS("dropdownItemContainer")}
                        >
                          <div className={this.decorateCSS("dropdownItem")}>
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
                                  name={this.getPropValue("rightIcon")}
                                  propsIcon={{
                                    className: this.decorateCSS("rightIcon"),
                                  }}
                                />
                              )}
                          </div>
                          {subItem.sub_items.length > 0 &&
                            subItem.sub_items.some((item: any) =>
                              this.castToString(item.title)
                            ) && (
                              <div className={this.decorateCSS("subdropdown")}>
                                {subItem.sub_items.map(
                                  (
                                    subSubItem: MenuItems,
                                    subSubIndex: number
                                  ) => (
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
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </nav>

          <div className={this.decorateCSS("rightSide")}>
            {buttons.length > 0 && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map((button: Button, index: number) => (
                  <ComposerLink path={button.navigateTo}>
                    <Base.Button className={this.decorateCSS("button")}>
                      {button.title}
                    </Base.Button>
                  </ComposerLink>
                ))}
              </div>
            )}
            <div className={this.decorateCSS("localizationContainer")}>
              {language.showLanguage && <ComposerLanguage
                type="dropdown"
                title={language.label}
                dropdownClassName={`${this.decorateCSS("localization")}`}
                icon={<ComposerIcon name={language.icon} propsIcon={{className: this.decorateCSS("languageIcon")}}/>}
              />}
            </div>
            {hamburgerNavActive ? (
            <ComposerIcon
              name={this.getPropValue("closeIcon")}
              propsIcon={{
                className: this.decorateCSS("closeIcon"),
                onClick: () => this.handleCloseMenu(),
              }}
            />
          ) : (
            <ComposerIcon
              name={this.getPropValue("hamburgerIcon")}
              propsIcon={{
                className: `${this.decorateCSS("hamburgerIcon")}`,
                onClick: () => this.hamburgerNavClick(),
              }}
            />
          )}
          </div>
        </Base.MaxContent>
        <div
          className={`${this.decorateCSS("hamburgerNav")} ${
            this.getComponentState("hamburgerNavActive")
              ? this.decorateCSS("active")
              : ""
          }`}
        >
          <Base.Container className={this.decorateCSS("hamburgerContainer")}>
            <Base.MaxContent
              className={this.decorateCSS("hamburgerMaxContent")}
            >
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
                          this.getComponentState("subNavActiveIndex") === index
                            ? this.decorateCSS("active")
                            : ""
                        }`}
                      >
                        {item.sub_items?.map(
                          (subItem: MenuItems, subIndex: number) => (
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
                                          "dropdownIcon"
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
                                      this.getComponentState("subNavActive") ===
                                      `${index}-${subIndex}`
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
                <div className={this.decorateCSS("accordionLocalization")}>
                 {language.showLanguage && <ComposerLanguage
                    type="accordion"
                    title={language.label}
                    headerClassName={`${this.decorateCSS("localization")}`}
                    contentClassName={`${this.decorateCSS(
                      "localizationItem"
                    )}`}
                  />}
                </div>
              </nav>
            </Base.MaxContent>
          </Base.Container>
        </div>
      </Base.Navigator.Container>
    );
  }
}

export default Navbar1;