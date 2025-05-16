import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface MenuItems {
  title: React.JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItems[];
}

interface Logo {
  image: string;
  navigateTo: string;
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
  showLocalizationAlways: boolean;
  showDivider: boolean;
}

class Navbar1 extends BaseNavigator {

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
        INPUTS.BUTTON(
          "button",
          "Button",
          "Contact Us",
          "",
          null,
          null,
          "Primary"
        ),
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
          key: "showLocalizationAlways",
          displayer: "Pin to Navbar",
          value:true      
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
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2"]
      }
    })

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("isBigScreen", false);
    this.setComponentState("navbarOverflowShow", false);

  }

  static getName(): string {
    return "Navbar 1";
  }

  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapper = Base.Navigator.getWrapperContainer();
    this.setComponentState("changeBackground", wrapper.scrollY === 0);
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
  }

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

  componentWillUnmount(): void {
    this.handleCloseMenu();
  }

  render() {
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");
    const menuItems = this.castToObject<MenuItems[]>("menuItems");
    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");
    const isScrolled = this.getComponentState("isScrolled");
    const isBigScreen = this.getComponentState("isBigScreen");

    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;

    const changeBackground = this.getComponentState("changeBackground");

    const currentLogo =
      (transparentBackground && !changeBackground) || (hamburgerNavActive && isBigScreen)
        ? absoluteLogo
        : defaultLogo;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const divider = this.getPropValue("divider");
    const language = this.castToObject<Language>("language");

    const isVisible = hamburgerNavActive && !isBigScreen

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <>
        <Base.Navigator.Container
          position={position}
          hamburgerNavActive={hamburgerNavActive}
          positionContainer={`${this.decorateCSS("navbarContainer")} ${changeBackground ? this.decorateCSS("filledBackground") : ""
            }`}
          setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
          setIsBigScreen={(value: boolean) => this.setComponentState("isBigScreen", value)}
          className={this.decorateCSS("filledBackground")}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
              }`}
          >
            {currentLogo && (
              <div onClick={() => {
                this.handleCloseMenu()
              }} className={this.decorateCSS("logo")}>
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
                {this.getPropValue("menuItems") &&
                  menuItems.map(
                    (item: any, index: any) =>
                      this.castToString(item.title) && (
                        <div
                          key={index}
                          className={this.decorateCSS("menuItemContainer")}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("menuItem")}>
                              <span className={`${this.decorateCSS("menuItemTitle")} ${animations}`}>
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
                              {item.sub_items?.map(
                                (subItem: any, subIndex: number) =>
                                  this.castToString(subItem.title) && (
                                    <div key={subIndex} className={`${this.decorateCSS("dropdownItemContainer")} ${animations}`}>
                                      <div
                                        onClick={() => {
                                          this.setComponentState("hamburgerNavActive", false)
                                        }}
                                        className={`${this.decorateCSS("dropdownItem")}`}
                                      >
                                        <ComposerLink path={subItem.navigate_to}>
                                          <div
                                            className={this.decorateCSS(
                                              "dropdownItemContent"
                                            )}
                                          >
                                            <span
                                              className={`${this.decorateCSS("dropdownItemTitle")} ${animations}`}
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
                                                  onClick={() => this.setComponentState("hamburgerNavActive", false)}
                                                >
                                                  <ComposerLink
                                                    path={subSubItem.navigate_to}
                                                  >
                                                    <span
                                                      className={`${this.decorateCSS("subdropdownItemTitle")} ${animations}`}
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

            <div className={this.decorateCSS("rightSide")}>
              {buttons.length > 0 && (
                <div className={this.decorateCSS("buttons")}>
                  {buttons.map((button) => (
                    <ComposerLink path={button.url}>
                      <Base.Button
                        className={`${this.decorateCSS("button")} ${transparentBackground && !hamburgerNavActive
                            ? this.decorateCSS(`${button.type}`)
                            : ""
                          }`}
                        buttonType={button.type}
                      >
                        {button.text}
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}

              {language.showLanguage && (
                <ComposerLanguage
                  type="dropdown"
                  title={language.label}
                  icon={language.icon}
<<<<<<< HEAD
                  dropdownButtonClassName={this.decorateCSS("localization")}
                  dropdownLabelClassName={`${this.decorateCSS("localizationLabel")}  ${animations}`}
                  iconClassName={`${this.decorateCSS("languageIcon")} ${animations}`}
=======
                  dropdownButtonClassName={`${this.decorateCSS("localization")} ${language.showLocalizationAlways && this.decorateCSS("active")}`}
                  dropdownLabelClassName={`${this.decorateCSS(
                    "localizationLabel"
                  )}`}
                  iconClassName={this.decorateCSS("languageIcon")}
>>>>>>> main
                  dropdownItemClassName={this.decorateCSS("localizationItem")}
                  dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                  divider={language.showDivider}
                />
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
            </div>
          </Base.MaxContent>

          <div
            className={`${this.decorateCSS("hamburgerNav")} ${hamburgerNavActive ? this.decorateCSS("active") : ""
              } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
          >
            <Base.Container className={this.decorateCSS("hamburgerNavContainer")}>
              <Base.MaxContent
                className={this.decorateCSS("hamburgerNavMaxContent")}
              >
                {menuItems.length > 0 && (
                  <nav className={this.decorateCSS("hamburgerMenu")}>
                    {menuItems.map((item: MenuItems, index: number) => (
                      <div
                        key={index}
                        className={this.decorateCSS("hamburgerMenuItem")}
                      >
                        <div
                          className={`${this.decorateCSS("hamburgerMenuItemHeader")} ${animations}`}
                          onClick={() => this.navClick(index)}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <span
                              onClick={() => this.handleCloseMenu()}
                              className={`${this.decorateCSS("hamburgerMenuItemTitle")} ${animations}`}
                            >
                              {item.title}
                            </span>
                          </ComposerLink>
                          {item.menuType === "Dropdown" && (
                            <ComposerIcon
                              name={this.getPropValue("dropdownIcon")}
                              propsIcon={{
                                className: `${this.decorateCSS("dropdownIcon")} ${this.getComponentState("subNavActiveIndex") ===
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
                            onClick={() => this.handleCloseMenu()}
                            className={`${this.decorateCSS("hamburgerSubmenu")} ${this.getComponentState("subNavActiveIndex") ===
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
                                      className={`${this.decorateCSS("hamburgerSubmenuItemHeader")} ${animations}`}
                                      onClick={() =>
                                        this.subNavClick(`${index}-${subIndex}`)
                                      }
                                    >
                                      <ComposerLink path={subItem.navigate_to}>
                                        <span
                                          className={`${this.decorateCSS("hamburgerMenuItemTitle")} ${animations}`}
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
                                              )} ${this.getComponentState(
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
                                          )} ${this.getComponentState(
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
                                                className={`${this.decorateCSS("hamburgerSubSubmenuItem")} ${animations}`}
                                              >
                                                <ComposerLink
                                                  path={subSubItem.navigate_to}
                                                >
                                                  <span
                                                    className={`${this.decorateCSS("hamburgerSubSubmenuItemTitle")} ${animations}`}
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
                    {divider && language.showLanguage && !language.showLocalizationAlways && (
                      <div className={this.decorateCSS("divider")}></div>
                    )}
                    <div className={`${this.decorateCSS("accordionLocalization")} ${!language.showLocalizationAlways && this.decorateCSS("active")}`}>
                      {language.showLanguage && (
                        <ComposerLanguage
                          type="accordion"
                          title={language.label}
                          headerClassName={`${this.decorateCSS("localization")}`}
                          itemClassName={`${this.decorateCSS("localizationItem")} ${animations}`}
                          titleClassName={`${this.decorateCSS("localizationTitle")} ${animations}`}
                        />
                      )}
                    </div>
                  </nav>
                )}
              </Base.MaxContent>
            </Base.Container>
          </div>

        </Base.Navigator.Container>
        <Base.Overlay
          className={this.decorateCSS("overlay")}
          isVisible={isVisible}
          onClick={() => this.handleCloseMenu()}
        />
      </>

    );
  }
}

export default Navbar1;
