import { ReactNode } from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Logo {
  image: TypeMediaInputValue;
  navigateTo: string;
}

interface Icon {
  icon: TypeMediaInputValue;
  page: string;
}

interface MenuItem {
  title: React.JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItem[];
}

interface Language {
  label: "code" | "name";
  icon: TypeMediaInputValue;
  showLanguage: boolean;
  showLocalizationAlways: boolean;
  showDivider: boolean;
}

class Navbar6 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Type"));

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
                      value: "Fashion Home",
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
                      value: "Winery Home",
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
                      value: "New Arrivals",
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
                      value: "Men & Women",
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
                      value: "Trend Collection",
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
                      value: "Creative",
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
              value: "About Us",
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
              value: "Blog",
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
          displayer: "Show Language",
          value: true,
        },
        {
          type: "boolean",
          key: "showDivider",
          displayer: "Divider",
          value: false,
        },
      ],
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
    this.setComponentState("navbarOverflowShow", false);
  }

  static getName(): string {
    return "Navbar 6";
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
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");
    const isScrolled = this.getComponentState("isScrolled");
    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;
    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");
    const changeBackground = this.getComponentState("changeBackground");
    const currentLogo =
      transparentBackground && !changeBackground ? absoluteLogo : defaultLogo;
    const icons = this.castToObject<Icon[]>("icons");
    const menuItems = this.castToObject<MenuItem[]>("menuItems");
    const divider = this.getPropValue("divider");
    const language = this.castToObject<Language>("language");
    const isBigScreen = this.getComponentState("isBigScreen");
    const isVisible = hamburgerNavActive && !isBigScreen;
    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")
    return (
      <>
        <Base.Navigator.Container
          position={position}
          positionContainer={`${this.decorateCSS("container")} ${
            changeBackground ? this.decorateCSS("filledBackground") : ""
          }`}
          hamburgerNavActive={hamburgerNavActive}
          setIsScrolled={(value: boolean)=>{
            this.setComponentState("isScrolled", value);
          }}
          setIsBigScreen={(value: boolean)=>{
            this.setComponentState("isBigScreen", value);
          }}
          className={this.decorateCSS("container")}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            <div className={this.decorateCSS("pcNavbarContainer")}>
              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("pcNavbar")}>
                  {menuItems.map(
                    (item: any, index: any) =>
                      this.castToString(item.title) && (
                        <div
                          key={index}
                          className={this.decorateCSS("menuItemContainer")}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("menuItem")}>
                              <Base.P className={`${this.decorateCSS("menuItemTitle")} ${transparentBackground? this.decorateCSS("whiteColor"): ""} ${animations}`}>
                                {item.title}
                              </Base.P>
                              {item.menuType === "Dropdown" && (
                                <Base.Media
                                  value={this.getPropValue("dropdownIcon")}
                                  className={`${this.decorateCSS(
                                    "dropdownIcon"
                                  )} ${
                                    transparentBackground
                                      ? this.decorateCSS("whiteColor")
                                      : ""
                                  }`}
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
                                            value={this.getPropValue(
                                              "rightIcon"
                                            )}
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
                                              subSubItem: MenuItem,
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
                      )
                  )}
                </nav>
              )}

              {currentLogo.image && (
                <div className={this.decorateCSS("logo")}>
                  <ComposerLink path={currentLogo.navigateTo}>
                    <div onClick={()=> this.handleCloseMenu()}>
                      <Base.Media
                        value={currentLogo.image}
                        className={this.decorateCSS("logoImage")}
                      />
                    </div>
                  </ComposerLink>
                </div>
              )}

              {menuItems.length > 0 && language.showLanguage && (
                <div className={this.decorateCSS("iconsContainer")}>
                  {icons?.length > 0 && (
                    <div className={this.decorateCSS("icons")}>
                      {icons.map((icon: Icon, index: number) => (
                        <ComposerLink path={icon.page}>
                          <Base.Media
                            value={icon.icon}
                            className={this.decorateCSS("icon")}
                          />
                        </ComposerLink>
                      ))}
                    </div>
                  )}
                  {divider && icons.length > 0 && (
                    <div className={this.decorateCSS("divider")}></div>
                  )}
                  {language.showLanguage && (
                    <Base.Language
                      type="dropdown"
                      title={language.label}
                      icon={(language.icon?.type === "icon" ? language.icon.name : "GrLanguage") || "GrLanguage"}
                      dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                      dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                      iconClassName={this.decorateCSS("languageIcon")}
                      dropdownItemClassName={this.decorateCSS("localizationItem")}
                      dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                      divider={language.showDivider}
                    />
                  )}
                </div>
              )}
            </div>
            <div className={this.decorateCSS("mobileRight")}>
            {hamburgerNavActive ? (
              <div onClick={() => this.handleCloseMenu()}>
                <Base.Media
                  value={this.getPropValue("closeIcon")}
                  className={this.decorateCSS("closeIcon")}
                />
              </div>
            ) : (
              <div onClick={() => this.handleOpenMenu()}>
                <Base.Media
                  value={this.getPropValue("hamburgerIcon")}
                  className={this.decorateCSS("hamburgerIcon")}
                />
              </div>
            )}
                 {(language.showLanguage &&language.showLocalizationAlways) && (
                    <Base.Language
                      type="dropdown"
                      title={language.label}
                      icon={(language.icon?.type === "icon" ? language.icon.name : "GrLanguage") || "GrLanguage"}
                      dropdownButtonClassName={`${this.decorateCSS(
                        "localization"
                      )}`}
                      dropdownLabelClassName={`${this.decorateCSS(
                        "localizationLabel"
                      )}`}
                      iconClassName={this.decorateCSS("languageIcon")}
                      dropdownItemClassName={this.decorateCSS(
                        "localizationItem"
                      )}
                      dropdownContentClassName={this.decorateCSS(
                        "localizationContent"
                      )}
                      divider={language.showDivider}
                    />
                  )}
            </div>
              <div
                className={`${this.decorateCSS("mobileMenu")} ${
                  hamburgerNavActive ? this.decorateCSS("open") : ""
                } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={this.decorateCSS("hamburgerMenuItem")}
                    >
                      <div
                        className={this.decorateCSS("hamburgerMenuItemHeader")}
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
                            value={this.getPropValue("rightIcon")}
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
                            (subItem: any, subIndex: number) => (
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
                                        "hamburgerMenuItemTitle"
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
                                        value={this.getPropValue("rightIcon")}
                                        className={`${this.decorateCSS(
                                          "dropdownIcon"
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
                                          subSubItem: any,
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
                  {(language.showLanguage && !language.showLocalizationAlways) &&
                  <Base.Language
                    type="accordion"
                    title="name"
                    headerClassName={this.decorateCSS("languageAccordion")}
                    itemClassName={this.decorateCSS("languageAccordionItem")}
                    titleClassName={`${this.decorateCSS("languageAccordionTitle")} ${animations}`}
                  />
                  }
                </nav>

                {icons.length > 0 && (
                  <div className={this.decorateCSS("iconsContainer")}>
                    {icons.map((icon: Icon, index: number) => (
                      <ComposerLink path={icon.page}>
                        <div className={this.decorateCSS("icons")} onClick={()=> this.handleCloseMenu()}>
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

          </Base.MaxContent>
        </Base.Navigator.Container>
        <Base.Overlay
          className={this.decorateCSS("overlay")}
          onClick={() => this.handleCloseMenu()}
          isVisible={isVisible}
        />
      </>
    );
  }
}

export default Navbar6;
