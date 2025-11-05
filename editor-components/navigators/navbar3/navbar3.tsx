import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Lane {
  contact: React.JSX.Element;
  news: React.JSX.Element;
}

type Item = {
  title: React.JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: Item[];
};

interface Logo {
  image: TypeMediaInputValue;
  navigateTo: string;
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
                              value: "New Arrivals",
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
                      value: "Lookbook",
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
                      value: "Typography",
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
                      value: "Shortcodes",
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
                      value: "Cooming Soon",
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
                      value: "Page 404",
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
                      value: "Masonary",
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
                              value: "Contacts Sub Sub Item ",
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
            name: "MdArrowDropDown",
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
        ? absoluteLogo
        : defaultLogo;

    const language = this.castToObject<Language>("language");

    const laneContainer =
      this.castToString(lane.contact) ||
      this.castToString(lane.news) ||
      language.showLanguage;

    const isBigScreen = this.getComponentState("isBigScreen");
    const isVisible = (!isBigScreen && hamburgerNavActive);

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <>
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
                            {item.menuType === "Dropdown" && (
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

            {icons?.length > 0 && (
              <div className={this.decorateCSS("icons")}>
                {icons?.map((item: any, index: number) => {
                  return (
                    item.icon && (
                      <ComposerLink path={item.page}>
                        <div className={this.decorateCSS("icon-element")}>
                          <Base.Media
                            value={item.icon}
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
            {(language.showLocalizationAlways && language.showLanguage) && 
              <div className={this.decorateCSS("loacalizationContainer")}>
                <Base.Language
                  type="dropdown"
                  title={language.label}
                  icon={language.icon && typeof language.icon === "object" && language.icon.type === "icon" ? language.icon.name : "GrLanguage"}
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
            }            
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
                                {item.menuType === "Dropdown" && (
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
                                              <Base.P
                                                className={this.decorateCSS(
                                                  "hamburgerDropdownItemTitle"
                                                )}
                                                onClick={() => this.handleCloseMenu()}
                                              >
                                                {subItem.title}
                                              </Base.P>
                                            </ComposerLink>
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

                        {(language.showLanguage && !language.showLocalizationAlways) && (
                          <Base.Language
                            type="accordion"
                            title={language.label}
                            headerClassName={`${this.decorateCSS("localization")}`}
                            itemClassName={`${this.decorateCSS("localizationItem")} ${animations}`}
                            titleClassName={`${this.decorateCSS("localizationItemTitle")} ${animations}`}
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
