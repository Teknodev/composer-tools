import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";


type Image = {
  image: string;
  imageLink: string;
};

type Item = {
  title: JSX.Element;
  navigate_to: string;
};

class Navbar2 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Position"));
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
      type: "icon",
      key: "menuIcon",
      displayer: "Menu Icon",
      value: "FaBars",
    });

    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "IoMdClose",
    });

    this.state["componentProps"]["isMobileMenuOpen"] = false;
  }
  getName(): string {
    return "Navbar 2";
  }

  toggleMobileMenu = () => {
    this.setComponentState(
      "isMobileMenuOpen",
      !this.getComponentState("isMobileMenuOpen")
    );
  };


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

    const position = this.getPropValue("position");
    const logos = this.castToObject<Image[]>("logo-items");
    const logo = position === "Absolute" || position === "Sticky Transparent" ? logos[0] : logos[1];
    const menuItems = this.castToObject<Item[]>("menuItems");

    const isMobileMenuOpen = this.getComponentState("isMobileMenuOpen");

    return (
      <Base.Navigator.Container position={position}>
         <Base.MaxContent className={this.decorateCSS("maxContent")}>
         <ComposerLink path={logo.imageLink}>
              <div className={this.decorateCSS("logo")}>
                <img src={logo.image} alt={""} className={this.decorateCSS("logoImg")}/>
              </div>
            </ComposerLink>
    <nav className={this.decorateCSS("pcNavbar")}>
            <div className={this.decorateCSS("menu")}>
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
                        {item.sub_items?.map(
                          (subItem: any, subIndex: number) => (
                            <div
                              key={subIndex}
                              className={this.decorateCSS(
                                "dropdownItemContainer"
                              )}
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
                                {subItem.sub_items &&
                                  subItem.sub_items.length > 0 &&
                                  subItem.sub_items.length === 1 &&
                                  this.castToString(
                                    subItem.sub_items[0].title
                                  ) && (
                                    <ComposerIcon
                                      name={this.getPropValue("rightIcon")}
                                      propsIcon={{
                                        className:
                                          this.decorateCSS("rightIcon"),
                                      }}
                                    />
                                  )}
                              </div>
                              {subItem.sub_items &&
                                subItem.sub_items.length > 0 &&
                                subItem.sub_items.length === 1 &&
                                this.castToString(
                                  subItem.sub_items[0].title
                                ) && (
                                  <div
                                    className={this.decorateCSS("subdropdown")}
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
                ))}
            </div>
          </nav>

            <button 
              className={this.decorateCSS("mobileMenuButton")}
              onClick={this.toggleMobileMenu}
            >
              <ComposerIcon name={this.getPropValue("menuIcon")} propsIcon={{className: this.decorateCSS("menuIcon")}} />
            </button>

            <div className={`${this.decorateCSS("mobileMenu")} ${isMobileMenuOpen ? this.decorateCSS("open") : ""}`}>
              <button 
                className={this.decorateCSS("mobileCloseButton")}
                onClick={this.toggleMobileMenu}
              >
                <ComposerIcon name={this.getPropValue("closeIcon")} />
              </button>
              
              <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={this.decorateCSS("hamburgerMenuItem")}
                    >
                      <div
                        className={this.decorateCSS("hamburgerMenuItemHeader")}
                        onClick={() => this.navCLick(index)}
                      >
                        <ComposerLink path={item.navigate_to}>
                          <span className={this.decorateCSS("hamburgerMenuItemTitle")}>{item.title}</span>
                        </ComposerLink>
                        {item.menuType === "Dropdown" && (
                          <ComposerIcon
                            name={this.getPropValue("rightIcon")}
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
                                    this.subNavCLick(`${index}-${subIndex}`)
                                  }
                                >
                                  <ComposerLink path={subItem.navigate_to}>
                                    <span className={this.decorateCSS("hamburgerDropdownItemTitle")}>{subItem.title}</span>
                                  </ComposerLink>
                                  {subItem.sub_items &&
                                     subItem.sub_items.length > 0 &&
                                     subItem.sub_items.length === 1 &&
                                     this.castToString(
                                       subItem.sub_items[0].title
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
                                {subItem.sub_items &&
                                    subItem.sub_items.length > 0 &&
                                    subItem.sub_items.length === 1 &&
                                    this.castToString(
                                      subItem.sub_items[0].title
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
                                              <span className={this.decorateCSS("hamburgerSubSubmenuItemTitle")}>{subSubItem.title}</span>
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
            </div>
         </Base.MaxContent>
      </Base.Navigator.Container>
    );
  }
}

export default Navbar2;