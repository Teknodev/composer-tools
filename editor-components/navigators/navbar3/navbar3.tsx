import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  title: string;
  navigate_to: string;
  menu_type: string;
  sub_items: Item[];
};

type Button = {
  text: JSX.Element;
  link: string;
};

type Social = {
  icon: string;
  link: string;
};

const menuType = {
  selectItems: ["Dropdown", "Normal"],
};

class Navbar3 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ab8a1e03b007002cc7386f?alt=media",
    });
    this.addProp({
      type: "page",
      key: "image-url",
      displayer: "Image Url",
      value: "",
    });

    this.addProp({
      type: "icon",
      key: "hamburger_icon",
      displayer: "Hamburger Icon",
      value: "IoMenu",
    });

    this.addProp({
      type: "string",
      key: "logo_text",
      displayer: "Logo Text",
      value: "Lorem",
    });
    this.addProp({
      type: "page",
      key: "logo_text_url",
      displayer: "Logo Text Url",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "icon",
      displayer: "Down Icon",
      key: "down_icon",
      value: "FaChevronDown",
    });

    this.addProp({
      type: "icon",
      displayer: "Right Icon",
      key: "right_icon",
      value: "FaChevronRight",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
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
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
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
                      value: "MAIN HOME",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "CLOUD GAME",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "ONLINE GAMING",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
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
              value: "ABOUT",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
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
                      value: "Section 1",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Section 2",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
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
              value: "GAMES",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
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
                      value: "Section 1",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Section 2",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
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
              value: "PAGE",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
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
                      value: "PRICING PLAN",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "GET STARTED",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "HOW TO PLAY",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "SUPPORT",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "DOWNLOAD",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "FAQ",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "CONTACT US",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "404",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
              value: "BLOG",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
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
                      value: "GRID STYLE",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "BLOG SIDEBAR",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
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
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "SINGLE BLOG",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
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
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
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
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
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
      type: "boolean",
      key: "isItemsCentered",
      displayer: "Is nav items centered?",
      value: false,
    });

    this.addProp({
      type: "array",
      key: "right-items",
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
              value: "TiSocialFacebook",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "LiaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "TiSocialLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "socials_description",
      displayer: "Text",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    });

    this.addProp({
      type: "array",
      key: "buttonList",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "buttonItems",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              value: "PLAY NOW",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Link",
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["hamburgerNavActive"] = true;
    this.state["componentProps"]["navActive"] = null;
    this.state["componentProps"]["subNavActive"] = null;
    this.state["componentProps"]["selectCardIndex"] = null;
  }

  getName(): string {
    return "Navbar 3";
  }

  hamburgerNavClick() {
    let value: boolean = this.getComponentState("hamburgerNavActive");
    this.setComponentState("hamburgerNavActive", !value);
  }

  navCLick(index: number) {
    const currentValue = this.getComponentState("subNavActiveIndex");
    if (currentValue === index) {
      this.setComponentState("navActive", !this.getComponentState("navActive"));
      this.setComponentState("subNavActiveIndex", null);
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActiveIndex", null);
      this.setComponentState("navActive", false);
      this.setComponentState("subNavActive", null);

      this.setComponentState("navActive", true);
      this.setComponentState("subNavActiveIndex", index);
    }
  }

  subNavCLick(index: any) {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", null);

      this.setComponentState("subNavActive", index);
    }
  }
  render() {
    const logoImage = this.getPropValue("image");
    const logoText = this.getPropValue("logo_text");
    const imageUrl = this.getPropValue("image-url");
    const textUrl = this.getPropValue("logo_text_url");

    const socialDescExist: string = this.getPropValue("socials_description", {
      as_string: true,
    });
    const socialDesc: JSX.Element = this.getPropValue("socials_description");

    const socials = this.castToObject<Social[]>("right-items");
    const buttons = this.castToObject<Button[]>("buttonList");
    const items = this.castToObject<Item[]>("items");

    const isItemsCentered: boolean = this.getPropValue("isItemsCentered");

    const centerItemsStyle = {
      marginRight: "50%",
      transform: "translateX(50%)",
    };

    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div
            className={`${socialDescExist ? this.decorateCSS("contentTop") : ""}`}
          >
            <div className={this.decorateCSS("contentTop")}>
              {socials.length > 0 && (
                <div className={this.decorateCSS("content-item")}>
                  <div className={this.decorateCSS("contentLeft")}>
                    {socials.map((social: Social, index: number) => {
                      if (social.icon)
                        return (
                          <ComposerLink path={social.link} key={index}>
                            <ComposerIcon
                              propsIcon={{
                                className: this.decorateCSS("icons"),
                              }}
                              name={social.icon}
                            />
                          </ComposerLink>
                        );
                    })}
                  </div>
                  {socialDescExist && (
                    <div className={this.decorateCSS("right-Text")}>
                      {socialDesc}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={this.decorateCSS("contentDown")}>
            {logoImage ? (
              <ComposerLink path={imageUrl}>
                <img
                  className={this.decorateCSS("logo-img")}
                  src={logoImage}
                  width={200}
                  alt=""
                />
              </ComposerLink>
            ) : (
              <ComposerLink path={textUrl}>
                <span className={this.decorateCSS("logo-text")}>
                  {logoText}
                </span>
              </ComposerLink>
            )}

            <nav
              className={this.decorateCSS("pc-navigator")}
              style={
                isItemsCentered && buttons.length === 0 ? centerItemsStyle : {}
              }
            >
              <div className={this.decorateCSS("items")}>
                {items.map((item: Item, indexItemList: number) => {
                  return (
                    <div className={this.decorateCSS("menu-item")}>
                      <ComposerLink key={indexItemList} path={item.navigate_to}>
                        <div className={this.decorateCSS("item")}>
                          <span
                            className={this.decorateCSS("title")}
                            key={indexItemList}
                          >
                            {item.title}{" "}
                            {item.sub_items?.length > 0 &&
                              item.menu_type === "Dropdown" && (
                                <ComposerIcon
                                  name={this.getPropValue("down_icon")}
                                  propsIcon={{
                                    className: this.decorateCSS("icon"),
                                  }}
                                />
                              )}
                          </span>
                          {item.menu_type !== "Normal" && (
                            <div className={this.decorateCSS("sub-items")}>
                              {item.sub_items?.length > 0 &&
                                item.sub_items.map((subItem) => (
                                  <div className={this.decorateCSS("sub-item")}>
                                    <span
                                      className={this.decorateCSS(
                                        "sub-item-text",
                                      )}
                                    >
                                      {subItem.title}{" "}
                                      {subItem.sub_items?.length > 0 &&
                                        subItem.menu_type === "Dropdown" && (
                                          <ComposerIcon
                                            name={this.getPropValue(
                                              "right_icon",
                                            )}
                                            propsIcon={{
                                              className:
                                                this.decorateCSS("icon"),
                                            }}
                                          />
                                        )}
                                    </span>
                                    {subItem.menu_type !== "Normal" && (
                                      <div className={this.decorateCSS("list")}>
                                        {subItem.sub_items?.length > 0 &&
                                          subItem.sub_items.map((subItem2) => (
                                            <span
                                              className={this.decorateCSS(
                                                "list-item",
                                              )}
                                            >
                                              {subItem2.title}
                                            </span>
                                          ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </ComposerLink>
                    </div>
                  );
                })}
              </div>
            </nav>
            {buttons.length > 0 && (
              <div className={this.decorateCSS("button-child")}>
                {buttons.map((button: Button, indexButtonList: number) => {
                  if (this.castToString(button.text))
                    return (
                      <ComposerLink key={indexButtonList} path={button.link}>
                        <button className={this.decorateCSS("button")}>
                          {button.text}
                        </button>
                      </ComposerLink>
                    );
                })}
              </div>
            )}

            {this.getPropValue("hamburger_icon") && (
              <div className={this.decorateCSS("hamburger-navbar")}>
                <ComposerIcon
                  name={this.getPropValue("hamburger_icon")}
                  propsIcon={{
                    className: this.decorateCSS("hamburger-icon"),
                    onClick: () => {
                      this.hamburgerNavClick();
                    },
                  }}
                />
              </div>
            )}

            <nav className={this.decorateCSS("navigator-mobile")}>
              {this.getComponentState("hamburgerNavActive") && (
                <div className={this.decorateCSS("navbar-child")}>
                  {items.map((item: Item, indexItemList: number) => {
                    return (
                      <div
                        className={this.decorateCSS("menu-item")}
                        key={indexItemList}
                      >
                        <div
                          className={this.decorateCSS("item")}
                          onClick={() => {
                            this.navCLick(indexItemList);
                          }}
                        >
                          <ComposerLink path={item.navigate_to}></ComposerLink>
                          <div className={this.decorateCSS("title")}>
                            <span className={this.decorateCSS("title-text")}>
                              {item.title}
                            </span>
                            {item.sub_items?.length > 0 &&
                              item.menu_type === "Dropdown" && (
                                <ComposerIcon
                                  name={this.getPropValue("down_icon")}
                                />
                              )}
                          </div>
                        </div>

                        {item.menu_type !== "Normal" &&
                          this.getComponentState("subNavActiveIndex") ===
                            indexItemList && (
                            <div className={this.decorateCSS("sub-items")}>
                              {this.getComponentState("navActive") &&
                                item.sub_items?.length > 0 &&
                                item.sub_items.map((subItem, subIndex) => (
                                  <>
                                    <div
                                      className={this.decorateCSS("sub-item")}
                                      onClick={() => {
                                        this.subNavCLick(subIndex);
                                      }}
                                    >
                                      <div
                                        className={this.decorateCSS(
                                          "sub-item-title",
                                        )}
                                      >
                                        <span
                                          className={this.decorateCSS(
                                            "sub-item-title-text",
                                          )}
                                        >
                                          {subItem.title}
                                        </span>
                                        {subItem.sub_items?.length > 0 &&
                                          subItem.menu_type === "Dropdown" && (
                                            <ComposerIcon
                                              name={this.getPropValue(
                                                "down_icon",
                                              )}
                                              propsIcon={{
                                                className:
                                                  this.decorateCSS("down-icon"),
                                              }}
                                            />
                                          )}
                                      </div>
                                    </div>
                                    {this.getComponentState("subNavActive") ===
                                      subIndex &&
                                      subItem.menu_type !== "Normal" && (
                                        <div
                                          className={this.decorateCSS("list")}
                                        >
                                          {subItem.sub_items?.map(
                                            (subItem2) => (
                                              <span
                                                className={this.decorateCSS(
                                                  "list-item",
                                                )}
                                              >
                                                {subItem2.title}
                                              </span>
                                            ),
                                          )}
                                        </div>
                                      )}
                                  </>
                                ))}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar3;
