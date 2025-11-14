import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Item = {
  nav_title: React.JSX.Element;
  nav_navigate_to: string;
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

class Navbar2 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Type"));
    this.addProp({
      type: "array",
      key: "nav",
      displayer: "Menu",
      value: [
        {
          type: "object",
          key: "nav_item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "nav_title",
              displayer: "Title",
              value: "HOME",
            },
            {
              type: "page",
              key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Title",
                      value: "FASHION HOME",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
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
                              key: "nav_title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "nav_navigate_to",
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
          key: "nav_item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "nav_title",
              displayer: "Title",
              value: "FEATURES",
            },
            {
              type: "page",
              key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
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
                              key: "nav_title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "nav_navigate_to",
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
          key: "nav_item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "nav_title",
              displayer: "Title",
              value: "POST BLOCKS",
            },
            {
              type: "page",
              key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
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
                              key: "nav_title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "nav_navigate_to",
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
          key: "nav_item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "nav_title",
              displayer: "Title",
              value: "NEWS",
            },
            {
              type: "page",
              key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
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
                              key: "nav_title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "nav_navigate_to",
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
          key: "nav_item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "nav_title",
              displayer: "Title",
              value: "CONTACTS",
            },
            {
              type: "page",
              key: "nav_navigate_to",
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
                      key: "nav_title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "nav_navigate_to",
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
                              key: "nav_title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "nav_navigate_to",
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
      key: "navigationIcons",
      displayer: "Navigation Icons",
      value: [
        {
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
            name: "IoMdClose",
          },
        },
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
      ],
    });

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
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
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2"]
      }
    })

    this.setComponentState("isScrolled", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("isBigScreen", false);
    this.setComponentState("navbarOverflowShow", false);
  }
  static getName(): string {
    return "Navbar 2";
  }

  toggleMobileMenu = () => {
    const isMobileMenuOpen = this.getComponentState("isMobileMenuOpen");
    this.setComponentState("isMobileMenuOpen", !isMobileMenuOpen);
    Base.Navigator.changeScrollBehaviour(!isMobileMenuOpen ? "hidden" : "auto");
    setTimeout(() => {
      this.setComponentState("navbarOverflowShow", true);
    }, 300)
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
    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;
    const isMobileMenuOpen = this.getComponentState("isMobileMenuOpen");
    const changeBackground = this.getComponentState("changeBackground");

    const currentLogo =
      transparentBackground ? absoluteLogo : defaultLogo;
    const menuItems = this.castToObject<Item[]>("nav");
    const divider = this.getPropValue("divider");
    const language = this.castToObject<Language>("language");
    const isBigScreen = this.getComponentState("isBigScreen");
    const isVisible = isMobileMenuOpen && !isBigScreen;
    const navigationIcons = this.castToObject<{
      hamburgerIcon: TypeMediaInputValue;
      closeIcon: TypeMediaInputValue;
      dropdownIcon: TypeMediaInputValue;
      rightIcon: TypeMediaInputValue;
    }>("navigationIcons");

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <>
       <Base.Navigator.Container
        position={position}
        positionContainer={`${this.decorateCSS("navbarContainer")} ${changeBackground ? this.decorateCSS("filledBackground") : ""}`}
        setIsBigScreen={(value) => this.setComponentState("isBigScreen", value)}
        setIsScrolled={(value) => this.setComponentState("isScrolled", value)}
        className={this.decorateCSS("filledBackground")}
      >
        <Base.MaxContent
          className={`${this.decorateCSS("maxContent")} ${
            transparentBackground
              ? this.decorateCSS("transparentBackground")
              : ""
          }`}
        >
          {currentLogo && (
            <ComposerLink path={currentLogo.navigateTo}>
              <div className={this.decorateCSS("logo")} onClick={()=> this.toggleMobileMenu()}>
                <Base.Media
                  value={currentLogo.image}
                  className={this.decorateCSS("image")}
                />
              </div>
            </ComposerLink>
          )}
          {menuItems.length > 0 && (
            <nav className={this.decorateCSS("pcNavbar")}>
              {menuItems.map(
                (item: any, index: any) =>
                  this.castToString(item.nav_title) && (
                    <div
                      key={index}
                      className={this.decorateCSS("menuItemContainer")}
                    >
                      <ComposerLink path={item.nav_navigate_to}>
                        <div className={this.decorateCSS("menuItem")}>
                          <Base.P className={`${this.decorateCSS("menuItemTitle")} ${animations}`}>
                            {item.nav_title}
                          </Base.P>
                          {item.menuType === "Dropdown" && (
                            <Base.Media
                              value={navigationIcons?.dropdownIcon}
                              className={this.decorateCSS("dropdownIcon")}
                            />
                          )}
                        </div>
                      </ComposerLink>
                      {item.menuType === "Dropdown" && (
                        <div className={this.decorateCSS("dropdown")}>
                          {item.sub_items?.map(
                            (subItem: any, subIndex: number) =>
                              this.castToString(subItem.nav_title) && (
                                <div
                                  key={subIndex}
                                  className={`${this.decorateCSS("dropdownItemContainer")} ${animations}`}
                                >
                                  <div
                                    className={this.decorateCSS("dropdownItem")}
                                  >
                                    <ComposerLink path={subItem.nav_navigate_to}>
                                      <div
                                        className={this.decorateCSS(
                                          "dropdownItemContent"
                                        )}
                                      >
                                        <span className={`${this.decorateCSS("dropdownItemTitle")} ${animations}`}>
                                          {subItem.nav_title}
                                        </span>
                                      </div>
                                    </ComposerLink>
                                    {subItem.sub_items.length > 0 &&
                                      subItem.sub_items.some((item: any) =>
                                        this.castToString(item.nav_title)
                                      ) && (
                                        <Base.Media
                                          value={navigationIcons?.rightIcon}
                                          className={this.decorateCSS("rightIcon")}
                                        />
                                      )}
                                  </div>
                                  {subItem.sub_items.length > 0 &&
                                    subItem.sub_items.some((item: any) =>
                                      this.castToString(item.nav_title)
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
                                          ) => (
                                            <div
                                              key={subSubIndex}
                                              className={`${this.decorateCSS("subdropdownItem")} ${animations}`}
                                            >
                                              <ComposerLink
                                                path={subSubItem.nav_navigate_to}
                                              >
                                                <Base.P
                                                  className={`${this.decorateCSS("dropdownItemTitle")} ${animations}`}
                                                >
                                                  {subSubItem.nav_title}
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
              {divider && <div className={this.decorateCSS("divider")} />}
              {language.showLanguage && (
                <Base.Language
                  type="dropdown"
                  title={language.label}
                  icon={language.icon && typeof language.icon === "object" && language.icon.type === "icon" ? language.icon.name : "GrLanguage"}
                  dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                  dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                  iconClassName={this.decorateCSS("languageIcon")}
                  dropdownItemClassName={`${this.decorateCSS("localizationItem")}`}
                  dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                  divider={language.showDivider} 
                />
              )}
            </nav>
          )}
          <div className={this.decorateCSS("mobileRight")}>
            {language.showLanguage && language.showLocalizationAlways && (
              <Base.Language
                type="dropdown"
                title={language.label}
                icon={language.icon && typeof language.icon === "object" && language.icon.type === "icon" ? language.icon.name : "GrLanguage"}
                dropdownButtonClassName={`${this.decorateCSS(
                  "localizationMobile"
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
            <div onClick={this.toggleMobileMenu}>
              <Base.Media
                value={navigationIcons?.hamburgerIcon}
                className={this.decorateCSS("menuIcon")}
              />
            </div>
          </div>

            <div className={`${this.decorateCSS("mobileMenu")} ${isMobileMenuOpen ? this.decorateCSS("open") : ""}
            ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}>
              <div onClick={this.toggleMobileMenu}>
                <Base.Media
                  value={navigationIcons?.closeIcon}
                  className={this.decorateCSS("closeIcon")}
                />
              </div>


              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map(
                    (item: any, index: number) =>
                      this.castToString(item.nav_title) && (
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
                            <ComposerLink path={item.nav_navigate_to}>

                              <Base.P className={`${this.decorateCSS("hamburgerMenuItemTitle")} ${animations}`}
                                onClick={()=> this.toggleMobileMenu()}
                              >
                                {item.nav_title}
                              </Base.P>
                            </ComposerLink>
                            {item.menuType === "Dropdown" && (
                              <Base.Media
                                value={navigationIcons?.rightIcon}
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
                                      <ComposerLink path={subItem.nav_navigate_to}>
                                        <Base.P className={`${this.decorateCSS("hamburgerMenuItemTitle")} ${animations}`}
                                          onClick={()=> this.toggleMobileMenu()}
                                        >
                                          {subItem.nav_title}
                                        </Base.P>
                                      </ComposerLink>
                                      {subItem.sub_items.length > 0 &&
                                        subItem.sub_items.some((item: any) =>
                                          this.castToString(item.nav_title)
                                        ) && (
                                          <Base.Media
                                            value={navigationIcons?.rightIcon}
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
                                        this.castToString(item.nav_title)
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
                                                  path={subSubItem.nav_navigate_to}
                                                >
                                                  <Base.P
                                                    className={`${this.decorateCSS("hamburgerSubSubmenuItemTitle")} ${animations}`}
                                                    onClick={()=> this.toggleMobileMenu()}
                                                  >
                                                    {subSubItem.nav_title}
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
                  {(!language.showLocalizationAlways && language.showLanguage) &&
                    <Base.Language
                    type="accordion"
                    title="name"
                    headerClassName={this.decorateCSS("languageAccordion")}
                    itemClassName={`${this.decorateCSS("languageAccordionItem")} ${animations}`}
                    titleClassName={`${this.decorateCSS("languageAccordionTitle")} ${animations}`}
                    accordionIconClassName={this.decorateCSS("languageAccordionIcon")}
                  /> 
                  }
                </nav>
              )}
            </div>
        </Base.MaxContent>

      </Base.Navigator.Container>
      <Base.Overlay
          className={this.decorateCSS("overlay")}
          onClick={() => this.toggleMobileMenu()}
          isVisible= {isVisible}
        />
      </>
    );
  }
}

export default Navbar2;
