import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";

interface Logo {
  image: TypeMediaInputValue;
  navigateTo: string;
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

interface Icons {
  icon: TypeMediaInputValue;
  page: string;
}

class Navbar9 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Type"));

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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc964?alt=media&timestamp=1735826277716",
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
          value: true,
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
              value: "Catalog",
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
              value: "About Us",
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
              value: "Blog",
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
              value: "Mormal",
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
                name: "FaTelegram",
              },
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
              displayer: "Page",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "dropdownIcon",
      displayer: "Dropdown Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "MdArrowDropDown",
      },
    });
    this.addProp({
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
    });

    this.addProp({
      type: "media",
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaBars",
      },
    });

    this.addProp({
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
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2", "animation3"],
      additionalParams:{
        selectItems:["animation1", "animation2", "animation3"]
      }
    });

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("changeBackground", false);
    this.setComponentState("isBigScreen", false);
    this.setComponentState("navbarOverflowShow", false);
  }

  static getName(): string {
    return "Navbar 9";
  }


  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapperContainer = Base.Navigator.getWrapperContainer();
    this.setComponentState("changeBackground", wrapperContainer?.scrollY === 0);
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
    const position = this.getPropValue("position");
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const isScrolled = this.getComponentState("isScrolled");
    const isBigScreen = this.getComponentState("isBigScreen");

    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");

    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;
    const changeBackground = this.getComponentState("changeBackground");
    const currentLogo =
      ((transparentBackground && !changeBackground) || (hamburgerNavActive && isBigScreen)) && !isScrolled
        ? absoluteLogo
        : defaultLogo;

    const menuItems = this.castToObject<MenuItems[]>("menuItems");
    const overlay = this.getPropValue("overlay");
    const language = this.castToObject<Language>("language");
    const icons = this.castToObject<Icons[]>("icons");

    const isVisible= !isBigScreen && hamburgerNavActive;

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <>
        <Base.Navigator.Container
          position={position}
          className={`${this.decorateCSS("container")}`}
          positionContainer={`${this.decorateCSS("navbarContainer")} ${
            overlay && ((isStickyTransparent || isAbsolute) && !isScrolled) ? this.decorateCSS("overlay") : ""
          } ${changeBackground ? this.decorateCSS("filledBackground") : ""}`}
          hamburgerNavActive={hamburgerNavActive}
          setIsBigScreen={(value: boolean) => this.setComponentState("isBigScreen", value)}
          setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
        >
          <Base.MaxContent className={`${this.decorateCSS("maxContent")} ${transparentBackground ? this.decorateCSS("transparentBackground") : ""}`}>
            {currentLogo.image && (
              <ComposerLink path={currentLogo.navigateTo}>
                <div className={this.decorateCSS("logo")}>
                  <Base.Media
                    value={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                    onClick={()=> this.handleCloseMenu()}
                  />
                </div>
              </ComposerLink>
            )}

            <div className={this.decorateCSS("pcNavbarContainer")}>
              {language.showLanguage && (
                <div className={this.decorateCSS("localizationContainer")}>
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
                </div>
              )}

              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("pcNavbar")}>
                  {menuItems.map((item: any, index: any) => (
                    <div key={index} className={`${this.decorateCSS("menuItemContainer")} ${animations}`}>
                      <ComposerLink path={item.navigate_to}>
                        <div className={this.decorateCSS("menuItem")}>
                          <Base.P
                            className={this.decorateCSS("menuItemTitle")}
                          >
                            {item.title}
                          </Base.P>
                          {item.menuType === "Dropdown" && (
                            <Base.Media
                              value={this.getPropValue("dropdownIcon")}
                              className={this.decorateCSS("dropdownIcon")}
                            />
                          )}
                        </div>
                      </ComposerLink>
                      {item.menuType === "Dropdown" && (
                        <div className={this.decorateCSS("dropdown")}>
                          {item.sub_items?.map(
                            (subItem: any, subIndex: number) => (
                              <div
                                key={subIndex}
                                className={`${this.decorateCSS("dropdownItemContainer")} ${animations}`}
                              >
                                <div
                                  className={`${this.decorateCSS("dropdownItem")} ${animations}`}
                                >
                                  <ComposerLink path={subItem.navigate_to}>
                                    <div
                                      className={this.decorateCSS(
                                        "dropdownItemContent"
                                      )}
                                    >
                                      <Base.P
                                        className={this.decorateCSS(
                                          "dropdownItemTitle"
                                        )}
                                      >
                                        {subItem.title}
                                      </Base.P>
                                    </div>
                                  </ComposerLink>
                                  {subItem.sub_items.length > 0 &&
                                    subItem.sub_items.some((item: any) =>
                                      this.castToString(item.title)
                                    ) && (
                                      <Base.Media
                                        value={this.getPropValue("rightIcon")}
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
                                        ) => (
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
                  ))}
                </nav>
              )}

              {icons.length > 0 && (
                <div className={this.decorateCSS("icons")}>
                  {icons.map((icon: Icons, index: number) => (
                    <ComposerLink key={index} path={icon.page}>
                      <div className={`${this.decorateCSS("icon-container")} ${animations}`}  onClick={()=> this.handleCloseMenu()}>
                        <Base.Media
                          value={icon.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
            <div className={this.decorateCSS("mobileRight")}>
            {hamburgerNavActive ? (
              <div onClick={() => this.handleCloseMenu()}>
                <Base.Media
                  value={this.getPropValue("closeIcon")}
                  className={this.decorateCSS("hamburgerIcon")}
                />
              </div>
            ) : (
              <div onClick={() => this.handleOpenMenu()}>
                <Base.Media
                  value={this.getPropValue("hamburgerIcon")}
                  className={`${this.decorateCSS("hamburgerIcon")} ${
                    transparentBackground ? this.decorateCSS("whiteColor") : ""
                  }`}
                />
              </div>
            )}
              {(language.showLanguage && language.showLocalizationAlways) && (
                <div className={this.decorateCSS("localizationContainer")}>
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
                </div>
              )}
            </div>

          </Base.MaxContent>
          <div
            className={`${this.decorateCSS("hamburgerNav")} ${
              this.getComponentState("hamburgerNavActive")
                ? this.decorateCSS("active")
                : ""
            } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
          >
            <Base.Container className={this.decorateCSS("hamburgerContainer")}>
              <Base.MaxContent
                className={this.decorateCSS("hamburgerMaxContent")}
              >
                {menuItems.length > 0 && (
                  <nav className={this.decorateCSS("hamburgerMenu")}>
                    {menuItems.map((item: MenuItems, index: number) => this.castToString(item.title) && (
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
                              className={this.decorateCSS(
                                "hamburgerMenuItemTitle"
                              )}
                              onClick={()=> this.handleCloseMenu()}
                            >
                              {item.title}
                            </Base.P>
                          </ComposerLink>
                          {item.menuType === "Dropdown" && (
                            <Base.Media
                              value={this.getPropValue("dropdownIcon")}
                              className={`${this.decorateCSS("dropdownIcon")} ${
                                this.getComponentState("subNavActiveIndex") === index
                                  ? this.decorateCSS("active")
                                  : ""
                              }`}
                            />
                          )}
                        </div>
                        {item.menuType === "Dropdown" && (
                          <div
                            className={`${this.decorateCSS(
                              "hamburgerSubmenu"
                            )} ${
                              this.getComponentState("subNavActiveIndex") ===
                              index
                                ? this.decorateCSS("active")
                                : ""
                            }`}
                          >
                            {item.sub_items?.map(
                              (subItem: MenuItems, subIndex: number) => this.castToString(subItem.title) && (
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
                                      <Base.P
                                        className={this.decorateCSS(
                                          "hamburgerDropdownItemTitle"
                                        )}
                                        onClick={()=>this.handleCloseMenu()}
                                      >
                                        {subItem.title}
                                      </Base.P>
                                    </ComposerLink>
                                    {subItem.sub_items.length > 0 &&
                                      subItem.sub_items.some((item: any) => this.castToString(item.title)) && (
                                        this.castToString(item.title)
                                      ) && (
                                        <Base.Media
                                          value={this.getPropValue("rightIcon")}
                                          className={`${this.decorateCSS("dropdownIcon")} ${
                                            this.getComponentState("subNavActive") === `${index}-${subIndex}`
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
                                          ) => this.castToString(subSubItem.title) && (
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
                          headerClassName={`${this.decorateCSS(
                            "localization"
                          )}`}
                          itemClassName={`${this.decorateCSS(
                            "localizationItem"
                          )}`}
                          titleClassName={this.decorateCSS("localizationTitle")}
                        />
                      )}

                  </nav>
                )}
                {icons.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {icons.map((icon: Icons, index: number) => (
                      <ComposerLink key={index} path={icon.page}>
                        <div className={`${this.decorateCSS("icon-container")} ${animations}`} onClick={()=> this.handleCloseMenu()}>
                          <Base.Media value={icon.icon} className={this.decorateCSS("icon")} />
                        </div>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </Base.MaxContent>
            </Base.Container>
          </div>
        </Base.Navigator.Container>
        <Base.Overlay
          className={this.decorateCSS("hamburgerOverlay")}
          onClick={() => this.handleCloseMenu()}
          isVisible={isVisible}
        />
      </>
    );
  }
}

export default Navbar9;
