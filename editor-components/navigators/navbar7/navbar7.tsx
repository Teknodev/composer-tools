import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";

interface Logo {
  image: string;
  imageLink: string;
}

interface Icon {
  icon: string;
  page: string;
}

interface MenuItem {
  title: JSX.Element;
  navigate_to: string;
  menuType: string;
  sub_items: MenuItem[];
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
  showDivider: boolean;
}

class Navbar7 extends BaseNavigator {
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
          displayer: "Show LanguageDivider",
          value: true,
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

    this.state["componentProps"]["isScrolled"] = false;
    this.state["componentProps"]["isMobileMenuOpen"] = false;
    this.state["componentProps"]["navActive"] = false;
    this.state["componentProps"]["subNavActiveIndex"] = null;
    this.state["componentProps"]["subNavActive"] = null;
    this.state["componentProps"]["changeBackground"] = false;

  }

  getName(): string {
    return "Navbar 7";
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

  handleOpenMenu = () => {
    document.documentElement.style.overflow = "hidden";
    this.setComponentState("changeBackground", true);

    setTimeout(() => {
      this.setComponentState("isMobileMenuOpen", true);
    }, 100);
  };

  handleCloseMenu = () => {
    document.documentElement.style.overflow = "";
    this.setComponentState("isMobileMenuOpen", false);
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
    const changeBackground = this.getComponentState("changeBackground");


      const currentLogo =
      transparentBackground && !changeBackground ? absoluteLogo : defaultLogo;

    const icons = this.castToObject<Icon[]>("icons");
    const menuItems = this.castToObject<MenuItem[]>("menuItems");
    const isMobileMenuOpen = this.getComponentState("isMobileMenuOpen");

    const language = this.castToObject<Language>("language");

    const isOverlayOpen = this.getComponentState("isOverlayOpen");
    

    return (
      <>
        <Base.Navigator.Container
          position={position}
          positionContainer={`${this.decorateCSS("pcNavbarContainer")} ${
            changeBackground ? this.decorateCSS("filledBackground") : ""
          }`}
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
                <ComposerLink path={currentLogo.imageLink}>
                  <img
                    src={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                  />
                </ComposerLink>
              </div>
            )}

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
                                {subItem.sub_items.length > 0 &&
                                  subItem.sub_items.some((item: any) =>
                                    this.castToString(item.title)
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
                              {subItem.sub_items.length > 0 &&
                                subItem.sub_items.some((item: any) =>
                                  this.castToString(item.title)
                                ) && (
                                  <div
                                    className={this.decorateCSS("subdropdown")}
                                  >
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
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            )}

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
                {language.showLanguage && (
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
                )}
              </div>
            )}
          </Base.MaxContent>
        </Base.Navigator.Container>

        <Base.Navigator.Container
          position={position}
          positionContainer={`${this.decorateCSS(
            "smallDeviceNavbar"
          )} ${changeBackground ? this.decorateCSS("filledBackground") : ""}`}
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
                <ComposerLink path={currentLogo.imageLink}>
                  <img
                    src={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                  />
                </ComposerLink>
              </div>
            )}

            {isMobileMenuOpen ? (
              <ComposerIcon
                name={this.getPropValue("closeIcon")}
                propsIcon={{
                  className: this.decorateCSS("mobileCloseButton"),
                  onClick: () => this.handleCloseMenu(),
                }}
              />
            ) : (
              <ComposerIcon
                name={this.getPropValue("menuIcon")}
                propsIcon={{
                  className: `${this.decorateCSS("mobileMenuButton")}`,
                  onClick: () => this.handleOpenMenu(),
                }}
              />
            )}

            <div
              className={`${this.decorateCSS("mobileMenu")} ${
                isMobileMenuOpen ? this.decorateCSS("open") : ""
              }`}
            >
              <div className={this.decorateCSS("mobileMenuContent")}>
              {menuItems.length > 0 && (
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
                          <span
                            className={this.decorateCSS(
                              "hamburgerMenuItemTitle"
                            )}
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
                  <ComposerLanguage
                    type="accordion"
                    title="name"
                    headerClassName={this.decorateCSS("languageAccordion")}
                    itemClassName={this.decorateCSS("languageAccordionItem")}
                  />
                </nav>
              )}

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
        
            </div>
          </Base.MaxContent>
        </Base.Navigator.Container>
      </>
    );
  }
}

export default Navbar7;
