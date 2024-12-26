import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Lane {
  contact: string;
  news: string;
}

type TImage = {
  image: string;
  imageLink: string;
};

type Item = {
  title: JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: Item[];
  tagObject?: {
    tag: string;
    tagColor: string;
  };

};

type Button = {
  text: JSX.Element;
  link: string;
};

type Social = {
  icon: string;
  link: string;
};

class Navbar3 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

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

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Position"));

    this.addProp({
      type: "array",
      key: "logo-items",
      displayer: "Logos",
      value: [
        INPUTS.LOGO(
          "logo",
          "Logo",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573"
        ),
        INPUTS.LOGO(
          "logo",
          "Logo",
          "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573"
        ),
      ],
      additionalParams: {
        maxElementCount: 2,
      },
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
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Buy Theme",
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
    const lane = this.castToObject<Lane>("lane");
    const position = this.getPropValue("position");
    const logos = this.castToObject<TImage[]>("logo-items");
    const menuItems = this.castToObject<Item[]>("menuItems");
    const logo = position === "Absolute" ? logos[0] : logos[1];
    console.log("position", position);

    console.log("title", this.castToString(menuItems[0].sub_items[0].title));


    return (
      <>
        <Base.Navigator.NavbarLane className={this.decorateCSS("lane")}>
          <Base.P>{lane?.contact}</Base.P>
          <Base.P>{lane?.news}</Base.P>
          <ComposerLanguage type="dropdown" />
        </Base.Navigator.NavbarLane>
        <Base.Navigator.NavbarContainer>
          <Base.Navigator.NavbarPosition position={position}>
            <Base.Navigator.NavbarMaxContent
              className={this.decorateCSS("maxContent")}
            >
              <ComposerLink path={logos[0].imageLink}>
                <div className={this.decorateCSS("logo")}>
                  <img src={logos[0].image} alt={""} />
                </div>
                {}
              </ComposerLink>
              <nav className={this.decorateCSS("menuContainer")}>
                <div className={this.decorateCSS("menu")}>
                  {this.getPropValue("menuItems") &&
                    menuItems.map((item: any, index: any) => (
                      <div key={index} className={this.decorateCSS("menuItem")}>
                        <ComposerLink path={item.navigate_to}>
                          <span>{item.title}</span>
                        </ComposerLink>
                        {item.menuType === "Dropdown" && (
                          <>
                            <ComposerIcon
                              name={this.getPropValue("dropdownIcon")}
                              propsIcon={{
                                className: this.decorateCSS("dropdownIcon"),
                              }}
                            />
                            <div className={this.decorateCSS("dropdown")}>
                              {item.sub_items?.map(
                                (subItem: any, subIndex: number) => (
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
                                          <span>{subItem.title}</span>
                                        </div>
                                      </ComposerLink>
                                      {subItem.sub_items &&
                                      subItem.sub_items.length > 0 &&
                                        (subItem.sub_items.length === 1 && this.castToString(subItem.sub_items[0].title))  && (
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
                                    {subItem.sub_items &&  subItem.sub_items.length > 0 &&
                                        (subItem.sub_items.length === 1 && this.castToString(subItem.sub_items[0].title))  && (
                                      <div
                                        className={this.decorateCSS(
                                          "subdropdown"
                                          )}
                                        >
                                          {subItem.sub_items.map(
                                            (
                                              subSubItem: Item,
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
                                                  <span>
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
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </nav>
              <Base.P>icons</Base.P>
            </Base.Navigator.NavbarMaxContent>
          </Base.Navigator.NavbarPosition>
        </Base.Navigator.NavbarContainer>
      </>
    );
  }
}

export default Navbar3;
