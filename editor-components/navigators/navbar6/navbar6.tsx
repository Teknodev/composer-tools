import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";

interface Logo {
  image: string;
  imageLink: string;
  alt: string;
}

interface Icon {
  icon: string;
  page: string;
}

interface MenuItem {
  title: string;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItem[];
}

class Navbar6 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Position"));

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
          value: "Logo",
          displayer: "Alt",
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
          value: "Logo",
          displayer: "Alt",
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

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    });

    this.state["componentProps"]["isScrolled"] = false;
    this.state["componentProps"]["hamburgerNavActive"] = false;
    this.state["componentProps"]["navActive"] = false;
    this.state["componentProps"]["subNavActiveIndex"] = null;
    this.state["componentProps"]["subNavActive"] = null;
    this.state["componentProps"]["changeBackground"] = false;
  }

  getName(): string {
    return "Navbar 6";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
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
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");
    const isScrolled = this.getComponentState("isScrolled");
    const transparentBackground =
      (position === "Sticky Transparent" || position === "Absolute") &&
      !isScrolled;

    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");

    const currentLogo =
      transparentBackground && !hamburgerNavActive ? absoluteLogo : defaultLogo;
    const icons = this.castToObject<Icon[]>("icons");
    const menuItems = this.castToObject<MenuItem[]>("menuItems");

    const changeBackground = this.getComponentState("changeBackground");
    const divider = this.getPropValue("divider");

    return (
      <Base.Navigator.Container
        position={position}
        positionContainer={
          changeBackground ? this.decorateCSS("filledBackground") : ""
        }
      >
        <Base.MaxContent
          className={`${this.decorateCSS("maxContent")} ${
            transparentBackground
              ? this.decorateCSS("transparentBackground")
              : ""
          }`}
        >
          {menuItems.length > 0 && (
            <nav className={this.decorateCSS("pcNavbar")}>
              {menuItems.map((item: any, index: any) => (
                <div
                  key={index}
                  className={this.decorateCSS("menuItemContainer")}
                >
                  <ComposerLink path={item.navigate_to}>
                    <div className={this.decorateCSS("menuItem")}>
                      <span
                        className={`${this.decorateCSS("menuItemTitle")} ${
                          transparentBackground
                            ? this.decorateCSS("whiteColor")
                            : ""
                        }`}
                      >
                        {item.title}
                      </span>
                      {item.menuType === "Dropdown" && (
                        <ComposerIcon
                          name={this.getPropValue("dropdownIcon")}
                          propsIcon={{
                            className: `${this.decorateCSS("dropdownIcon")} ${
                              transparentBackground
                                ? this.decorateCSS("whiteColor")
                                : ""
                            }`,
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
                                    subSubItem: MenuItem,
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
          )}

          {currentLogo && (
            <div className={this.decorateCSS("logoContainer")}>
              <ComposerLink path={currentLogo.imageLink}>
                <img src={currentLogo.image} alt={currentLogo.alt} />
              </ComposerLink>
            </div>
          )}

          <div className={this.decorateCSS("iconsContainer")}>
            {icons?.length > 0 && (
              <div className={this.decorateCSS("icons")}>
                {icons.map((icon: Icon, index: number) => (
                  <ComposerLink path={icon.page}>
                    <ComposerIcon
                      name={icon.icon}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
                  </ComposerLink>
                ))}
              </div>
            )}
            {divider && icons.length > 0 && (
              <div className={this.decorateCSS("divider")}></div>
            )}
            <ComposerLanguage
              type="dropdown"
              title="name"
              dropdownClassName={this.decorateCSS("localizationLabel")}
            />
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
              name={this.getPropValue("menuIcon")}
              propsIcon={{
                className: `${this.decorateCSS("hamburgerIcon")}`,
                onClick: () => this.hamburgerNavClick(),
              }}
            />
          )}

          <div
            className={`${this.decorateCSS("mobileMenu")} ${
              hamburgerNavActive ? this.decorateCSS("open") : ""
            }`}
          >
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
                      <span
                        className={this.decorateCSS("hamburgerMenuItemTitle")}
                      >
                        {item.title}
                      </span>
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
                        this.getComponentState("subNavActiveIndex") === index
                          ? this.decorateCSS("active")
                          : ""
                      }`}
                    >
                      {item.sub_items?.map((subItem: any, subIndex: number) => (
                        <div
                          key={subIndex}
                          className={this.decorateCSS("hamburgerSubmenuItem")}
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
                              <span
                                className={this.decorateCSS(
                                  "hamburgerMenuItemTitle"
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
                                      this.getComponentState("subNavActive") ===
                                      `${index}-${subIndex}`
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
                                  (subSubItem: any, subSubIndex: number) => (
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
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ComposerLanguage
                type="accordion"
                title="name"
                headerClassName={this.decorateCSS("languageAccordion")}
                itemClassName={this.decorateCSS("languageAccordionItem")}
              />
            </nav>

            {icons.length > 0 && (
              <div className={this.decorateCSS("iconsContainer")}>
                {icons.map((icon: Icon, index: number) => (
                  <ComposerLink path={icon.page}>
                    <ComposerIcon
                      name={icon.icon}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
                  </ComposerLink>
                ))}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Navigator.Container>
    );
  }
}

export default Navbar6;
