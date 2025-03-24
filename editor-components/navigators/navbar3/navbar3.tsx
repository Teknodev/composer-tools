import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Lane {
  contact: JSX.Element;
  news: JSX.Element;
}

type Item = {
  title: JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: Item[];
};

interface Logo {
  image: string;
  navigateTo: string;
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
  showDivider: boolean;
}

class Navbar3 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Position"));

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
                      value: "Fashion Home",
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
                      value: "Winery Home",
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
                      value: "New Arrivals",
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
                      value: "Men & Women",
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
                      value: "Trend Collection",
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
                      value: "Creative",
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
              value: "Shop",
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
                      value: "Products",
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
                              value: "New Arrivals",
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
              value: "Pages",
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
                      value: "About Us",
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
                      value: "Lookbook",
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
                      value: "Typography",
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
                      value: "Shortcodes",
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
                      value: "Cooming Soon",
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
                      value: "Page 404",
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
              value: "News",
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
                      value: "Blog Posts",
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
                      value: "Masonary",
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
              value: "Contacts",
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
                      value: "Contacts Sub Item",
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
                              value: "Contacts Sub Sub Item ",
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
              value: "FaTelegram",
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
      type: "icon",
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      value: "MdMenu",
    });

    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "RxCross2",
    });

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("isBigScreen", false);
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
    }, 100);
  };

  handleCloseMenu = () => {
    Base.Navigator.changeScrollBehaviour("auto");
    this.setComponentState("hamburgerNavActive", false);

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
        ? absoluteLogo
        : defaultLogo;

    const language = this.castToObject<Language>("language");

    const laneContainer =
      this.castToString(lane.contact) ||
      this.castToString(lane.news) ||
      language.showLanguage;

    const isBigScreen = this.getComponentState("isBigScreen");
    const isVisible = (!isBigScreen && hamburgerNavActive)
    return (
      <>
        {laneContainer && (
          <Base.Container className={this.decorateCSS("laneContainer")}>
            <Base.MaxContent className={this.decorateCSS("lane")}>
              {this.castToString(lane.contact) && (
                <div className={this.decorateCSS("laneContact")}>
                  {lane?.contact}
                </div>
              )}
              {this.castToString(lane.news) && (
                <div className={this.decorateCSS("laneNews")}>{lane?.news}</div>
              )}

              {language.showLanguage && (
                <div className={this.decorateCSS("loacalizationContainer")}>
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
                </div>
              )}
            </Base.MaxContent>
          </Base.Container>
        )}

        <Base.Navigator.Container
          position={position}
          className={this.decorateCSS("pcNavbarContainer")}
          positionContainer={this.decorateCSS("pcNavbarPositionContainer")}
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
                  <img
                    src={currentLogo.image}
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
                        {item.menuType === "Dropdown" &&
                          item.sub_items?.length > 0 && (
                            <div className={this.decorateCSS("dropdown")}>
                              {item.sub_items?.map(
                                (subItem: Item, subIndex: number) =>
                                  this.castToString(subItem.title) && (
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
                                        <ComposerLink
                                          path={subItem.navigate_to}
                                        >
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
                                          subItem.sub_items.some((item: Item) =>
                                            this.castToString(item.title)
                                          ) && (
                                            <ComposerIcon
                                              name={this.getPropValue(
                                                "rightIcon"
                                              )}
                                              propsIcon={{
                                                className:
                                                  this.decorateCSS("rightIcon"),
                                              }}
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
                                                  <div
                                                    key={subSubIndex}
                                                    className={this.decorateCSS(
                                                      "subdropdownItem"
                                                    )}
                                                  >
                                                    <ComposerLink
                                                      path={
                                                        subSubItem.navigate_to
                                                      }
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
              </nav>
            )}

            {icons?.length > 0 && (
              <div className={this.decorateCSS("icons")}>
                {icons?.map((item: any, index: number) => {
                  return (
                    item.icon && (
                      <ComposerLink path={item.page}>
                        <div className={this.decorateCSS("icon-element")}>
                          <ComposerIcon
                            name={item.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                            }}
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
                  <img
                    src={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                  />
                </ComposerLink>
              </div>
            )}

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
                  onClick: () => this.handleOpenMenu(),
                }}
              />
            )}

            <div
              className={`${this.decorateCSS("hamburgerNav")} ${
                hamburgerNavActive ? this.decorateCSS("active") : ""
              }`}
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
                                  <span
                                    className={`${this.decorateCSS(
                                      "hamburgerMenuItemTitle"
                                    )}`}
                                    onClick={() => this.handleCloseMenu()}
                                  >
                                    {item.title}
                                  </span>
                                </ComposerLink>
                                {item.menuType === "Dropdown" && (
                                  <ComposerIcon
                                    name={this.getPropValue("dropdownIcon")}
                                    propsIcon={{
                                      className: `${this.decorateCSS(
                                        "dropdownIcon"
                                      )} ${
                                        this.getComponentState(
                                          "subNavActiveIndex"
                                        ) === index
                                          ? this.decorateCSS("active")
                                          : ""
                                      }`,
                                    }}
                                  />
                                )}
                              </div>
                              {item.menuType === "Dropdown" && (
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
                                              <span
                                                className={this.decorateCSS(
                                                  "hamburgerDropdownItemTitle"
                                                )}
                                                onClick={() => this.handleCloseMenu()}
                                              >
                                                {subItem.title}
                                              </span>
                                            </ComposerLink>
                                            {subItem.sub_items.length > 0 &&
                                              subItem.sub_items.some(
                                                (item: any) =>
                                                  this.castToString(item.title)
                                              ) && (
                                                <ComposerIcon
                                                  name={this.getPropValue(
                                                    "rightIcon"
                                                  )}
                                                  propsIcon={{
                                                    className: `${this.decorateCSS(
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
                                                    }`,
                                                  }}
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
                                                          <span
                                                            className={this.decorateCSS(
                                                              "hamburgerSubSubmenuItemTitle"
                                                            )}
                                                            onClick={() => this.handleCloseMenu()}
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

                        {language.showLanguage && (
                          <ComposerLanguage
                            type="accordion"
                            title={language.label}
                            headerClassName={`${this.decorateCSS(
                              "localization"
                            )}`}
                            itemClassName={`${this.decorateCSS(
                              "localizationItem"
                            )}`}
                            titleClassName={  
                              this.decorateCSS("localizationItemTitle")
                            }
                            accordionIconClassName={this.decorateCSS("accordionIcon")}
                          />
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
      </>
    );
  }
}

export default Navbar3;
