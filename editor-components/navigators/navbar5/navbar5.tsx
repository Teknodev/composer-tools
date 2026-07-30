import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar5.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface MenuItems {
  itemTitle: React.JSX.Element;
  itemLink: string;
  menuType: string;
  sub_items: MenuItems[];
}

interface Logo {
  image: TypeMediaInputValue;
  text: React.JSX.Element;
  navigateTo: string;
}

interface Language {
  label: "code" | "name";
  icon: TypeMediaInputValue;
  showLanguage: boolean;
  showDivider: boolean;
}

class Navbar5 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Type"));

    this.addProp({
      type: "array",
      key: "social",
      displayer: "Social",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaFacebook",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
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
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "RiInstagramFill",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "socialIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaTiktok",
              },
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Navigate To",
              value: "",
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
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc965?alt=media&timestamp=1735826277716",
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "",
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
            availableTypes: ["image", "icon"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc964?alt=media&timestamp=1735826277716",
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "",
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
          key: "showLanguage",
          displayer: "Show Language",
          value: true,
        },
        {
          type: "boolean",
          key: "showDivider",
          displayer: "Divider",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "hamburger-icon",
      displayer: "Hamburger Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "RxHamburgerMenu",
      },
    });

    this.addProp({
      type: "media",
      key: "cross-icon",
      displayer: "Cross Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "MdCancel",
      },
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Uk based branding agency.",
    });

    this.addProp({
      type: "select",
      key: "menuAlignment",
      displayer: "Menu Alignment",
      value: "Center",
      additionalParams: { selectItems: ["Left", "Center"] },
    });

    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Title",
              value: "Home",
            },
            {
              type: "page",
              key: "itemLink",
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
              value: [],
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
              key: "itemTitle",
              displayer: "Title",
              value: "About",
            },
            {
              type: "page",
              key: "itemLink",
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
              value: [],
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
              key: "itemTitle",
              displayer: "Title",
              value: "Services",
            },
            {
              type: "page",
              key: "itemLink",
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
                      key: "itemTitle",
                      displayer: "Title",
                      value: "Branding",
                    },
                    {
                      type: "page",
                      key: "itemLink",
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
                              key: "itemTitle",
                              displayer: "Title",
                              value: "Identity design",
                            },
                            {
                              type: "page",
                              key: "itemLink",
                              displayer: "Navigate To",
                              value: "",
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
                              key: "itemTitle",
                              displayer: "Title",
                              value: "Art direction",
                            },
                            {
                              type: "page",
                              key: "itemLink",
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
                      key: "itemTitle",
                      displayer: "Title",
                      value: "Strategy",
                    },
                    {
                      type: "page",
                      key: "itemLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [],
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
                      key: "itemTitle",
                      displayer: "Title",
                      value: "Digital",
                    },
                    {
                      type: "page",
                      key: "itemLink",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [],
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
              key: "itemTitle",
              displayer: "Title",
              value: "Projects",
            },
            {
              type: "page",
              key: "itemLink",
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
              value: [],
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
              key: "itemTitle",
              displayer: "Title",
              value: "Contact",
            },
            {
              type: "page",
              key: "itemLink",
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
              value: [],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "dropdownIcon",
      displayer: "Dropdown Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "MdArrowDropDown",
      },
    });

    this.addProp({
      type: "media",
      key: "rightIcon",
      displayer: "Sub Item Arrow Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "MdKeyboardArrowRight",
      },
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "bottomText",
      displayer: "Bottom Text",
      value: "Let's build something great together",
    });

    this.addProp({
      type: "string",
      key: "bottomText2",
      displayer: "Bottom Text 2",
      value: "support@blinkpage.app",
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
      value: ["animation1"],
      additionalParams:{
        selectItems:["animation1"]
      }
    });

    this.setComponentState("isScrolled", false);
    this.setComponentState("isBigScreen", false);
    this.setComponentState("navActive", false);
    this.setComponentState("navbarOverflowShow", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState(
      "dropdownMenuItemAnimationClass",
      "animate__fadeInUp"
    );
    this.setComponentState(
      "footerLeftTextAnimationClass",
      "animate__slideInLeft"
    );
    this.setComponentState(
      "footerRightTextAnimationClass",
      "animate__slideInRight"
    );
  }

  static getName(): string {
    return "Navbar 5";
  }

  openNav() {
    Base.Navigator.changeScrollBehaviour("hidden");
    this.setComponentState("navActive", true);
    setTimeout(() => {
      this.setComponentState("navbarOverflowShow", true);
    }, 300)
    this.setComponentState(
      "dropdownMenuItemAnimationClass",
      "animate__fadeInDown"
    );
    this.setComponentState(
      "footerLeftTextAnimationClass",
      "animate__slideInLeft"
    );
    this.setComponentState(
      "footerRightTextAnimationClass",
      "animate__slideInRight"
    );
  }

  closeNav() {
    Base.Navigator.changeScrollBehaviour("auto");
    this.setComponentState("navbarOverflowShow", false);
    this.setComponentState(
      "dropdownMenuItemAnimationClass",
      "animate__fadeInUp"
    );
    this.setComponentState(
      "footerLeftTextAnimationClass",
      "animate__slideOutLeft"
    );
    this.setComponentState(
      "footerRightTextAnimationClass",
      "animate__slideOutRight"
    );
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
  }

  navClick(index: number) {
    const isActive = this.getComponentState("subNavActiveIndex") === index;
    this.setComponentState("subNavActiveIndex", isActive ? null : index);
    this.setComponentState("subNavActive", null);
  }

  subNavClick(index: string) {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", index);
    }
  }

  onComponentWillUnmount(): void {
    this.closeNav();
  }

  render() {
    const isScrolled = this.getComponentState("isScrolled");
    const position = this.getPropValue("position");

    const navActive = this.getComponentState("navActive");
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");

    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;

    const currentLogo =
      transparentBackground && !navActive ? absoluteLogo : defaultLogo;

    const social = this.castToObject<any[]>("social");
    const listItems = this.castToObject<MenuItems[]>("listItems");

    const menuAlignment = this.getPropValue("menuAlignment");
    const dropdownIcon = this.getPropValue("dropdownIcon");
    const rightIcon = this.getPropValue("rightIcon");

    const titleExist = this.castToString(this.getPropValue("title"));

    const upExist = titleExist || listItems.length > 0;

    const language = this.castToObject<Language>("language");

    const line = this.getPropValue("line");
    const divider = this.getPropValue("divider");

    const bottomTextExist = this.castToString(this.getPropValue("bottomText"));
    const bottomText2Exist = this.castToString(
      this.getPropValue("bottomText2")
    );

    const hamburgerIcon = this.getPropValue("hamburger-icon");
    const crossIcon = this.getPropValue("cross-icon");

    const iconsExist = hamburgerIcon || crossIcon;
    
    const isVisible = navActive;

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <div className={this.decorateCSS("navbar-root")}>
      <Base.Navigator.Container
        id={"navbar5-height"}
        position={position}
        positionContainer={`${this.decorateCSS("navbarContainer")} ${navActive ? this.decorateCSS("filledBackground") : ""} ${navActive ? this.decorateCSS("hamburgerActive") : ""}`}
        hamburgerNavActive={navActive}
        setIsBigScreen={(value: boolean) => {
          this.setComponentState("isBigScreen", value);
        }}
        setIsScrolled={(value: boolean) => {
          this.setComponentState("isScrolled", value);
        }}
        screenSize={1960}
        className={this.decorateCSS("container")}
      >
        <Base.MaxContent className={`${this.decorateCSS("maxContent")} ${transparentBackground && !navActive ? this.decorateCSS("transparentBackground") : ""}`}>
          {social.length > 0 && (
            <div className={this.decorateCSS("socialMediaBox")}>
              {social.length > 0 && (
                <div className={this.decorateCSS("social")}>
                  {social.map(
                    (item: any, indexSocial: number) =>
                      item.socialIcon && (
                        <ComposerLink key={indexSocial} path={item.socialLink}>
                          <div onClick={()=> this.closeNav()} className={this.decorateCSS("icon-container")}>
                            <Base.Media
                              value={item.socialIcon}
                              className={this.decorateCSS("icon")}
                            />
                          </div>
                        </ComposerLink>
                      )
                  )}
                </div>
              )}
            </div>
          )}

          {(currentLogo.image || this.castToString(currentLogo.text)) && (
            <div className={this.decorateCSS("logo")}>
              <ComposerLink path={currentLogo.navigateTo}>
                <div className={this.decorateCSS("logoContent")} onClick={()=> this.closeNav()}>
                  {currentLogo.image && (
                    <Base.Media
                      value={currentLogo.image}
                      className={this.decorateCSS("logoImage")}
                    />
                  )}
                  {this.castToString(currentLogo.text) && (
                    <Base.H4 className={this.decorateCSS("logoText")}>
                      {currentLogo.text}
                    </Base.H4>
                  )}
                </div>
              </ComposerLink>
            </div>
          )}

          {(language || iconsExist) && (
            <div className={this.decorateCSS("navbar")}>
              {language.showLanguage && (
                <Base.Language
                  type="dropdown"
                  title={language.label}
                  icon={language.icon}
                  dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                  dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                  iconClassName={this.decorateCSS("languageIcon")}
                  dropdownItemClassName={this.decorateCSS("localizationItem")}
                  dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                  divider={language.showDivider}
                />
              )}
              {navActive ? (
                <div
                  className={this.decorateCSS("crossIconWrapper")}
                  onClick={() => this.closeNav()}
                >
                  <Base.Media
                    value={this.getPropValue("cross-icon")}
                    className={`${this.decorateCSS("hamburgerIcon")} ${navActive && this.decorateCSS("activeHamburgerIcon")} `}
                  />
                </div>
              ) : (
                <div
                  className={this.decorateCSS("hamburgerIconWrapper")}
                  onClick={() => this.openNav()}
                >
                  <Base.Media
                    value={this.getPropValue("hamburger-icon")}
                    className={`${this.decorateCSS("hamburgerIcon")} ${navActive && this.decorateCSS("activeHamburgerIcon")} `}
                  />
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>

        <div className={`${this.decorateCSS("dropdownMenu")} ${navActive ? this.decorateCSS("active") : ""} ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}>
          {upExist && (
            <div className={`${this.decorateCSS("up")} ${menuAlignment === "Center" ? this.decorateCSS("alignCenter") : ""}`}>
              {titleExist && (
                <div className={this.decorateCSS("leftPage")}>
                  <Base.H1 className={`${this.decorateCSS("title")} animate__animated ${this.getComponentState("dropdownMenuItemAnimationClass")}`}>{this.getPropValue("title")}</Base.H1>
                </div>
              )}
              {listItems.length > 0 && (
                <div className={this.decorateCSS("rightPage")}>
                  <div className={`${this.decorateCSS("items")} animate__animated ${this.getComponentState("dropdownMenuItemAnimationClass")}`}>
                    {listItems.map((item: MenuItems, index: number) => {
                      const itemTitleExist = this.castToString(item.itemTitle);
                      if (!itemTitleExist) return null;

                      const subItems = item.sub_items || [];
                      const hasSubItems =
                        item.menuType === "Dropdown" &&
                        subItems.some((subItem: MenuItems) =>
                          this.castToString(subItem.itemTitle)
                        );

                      return (
                        <div key={index} className={this.decorateCSS("menuItem")}>
                          <div
                            className={this.decorateCSS("menuItemHeader")}
                            onClick={() => hasSubItems && this.navClick(index)}
                          >
                            <ComposerLink path={item.itemLink}>
                              <Base.H3
                                className={`${this.decorateCSS("item-title")} ${animations}`}
                                onClick={() => !hasSubItems && this.closeNav()}
                              >
                                {item.itemTitle}
                              </Base.H3>
                            </ComposerLink>
                            {hasSubItems && (
                              <Base.Media
                                value={dropdownIcon}
                                className={`${this.decorateCSS("dropdownIcon")} ${this.getComponentState("subNavActiveIndex") === index
                                    ? this.decorateCSS("active")
                                    : ""
                                  }`}
                              />
                            )}
                          </div>
                          {hasSubItems && (
                            <div
                              className={`${this.decorateCSS("submenu")} ${this.getComponentState("subNavActiveIndex") === index
                                  ? this.decorateCSS("active")
                                  : ""
                                }`}
                            >
                              {subItems.map((subItem: MenuItems, subIndex: number) => {
                                const subTitleExist = this.castToString(subItem.itemTitle);
                                if (!subTitleExist) return null;

                                const subSubItems = subItem.sub_items || [];
                                const hasSubSubItems = subSubItems.some(
                                  (subSubItem: MenuItems) =>
                                    this.castToString(subSubItem.itemTitle)
                                );

                                return (
                                  <div key={subIndex} className={this.decorateCSS("submenuItem")}>
                                    <div
                                      className={this.decorateCSS("submenuItemHeader")}
                                      onClick={() =>
                                        hasSubSubItems &&
                                        this.subNavClick(`${index}-${subIndex}`)
                                      }
                                    >
                                      <ComposerLink path={subItem.itemLink}>
                                        <Base.H5
                                          className={`${this.decorateCSS("submenuItemTitle")} ${animations}`}
                                          onClick={() => !hasSubSubItems && this.closeNav()}
                                        >
                                          {subItem.itemTitle}
                                        </Base.H5>
                                      </ComposerLink>
                                      {hasSubSubItems && (
                                        <Base.Media
                                          value={rightIcon}
                                          className={`${this.decorateCSS("rightIcon")} ${this.getComponentState("subNavActive") === `${index}-${subIndex}`
                                              ? this.decorateCSS("active")
                                              : ""
                                            }`}
                                        />
                                      )}
                                    </div>
                                    {hasSubSubItems && (
                                      <div
                                        className={`${this.decorateCSS("subSubmenu")} ${this.getComponentState("subNavActive") === `${index}-${subIndex}`
                                            ? this.decorateCSS("active")
                                            : ""
                                          }`}
                                      >
                                        {subSubItems.map(
                                          (subSubItem: MenuItems, subSubIndex: number) =>
                                            this.castToString(subSubItem.itemTitle) && (
                                              <div
                                                key={subSubIndex}
                                                className={this.decorateCSS("subSubmenuItem")}
                                              >
                                                <ComposerLink path={subSubItem.itemLink}>
                                                  <Base.P
                                                    className={`${this.decorateCSS("subSubmenuItemTitle")} ${animations}`}
                                                    onClick={() => this.closeNav()}
                                                  >
                                                    {subSubItem.itemTitle}
                                                  </Base.P>
                                                </ComposerLink>
                                              </div>
                                            )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {line && <div className={this.decorateCSS("line")}></div>}

          {(bottomTextExist || bottomText2Exist) && (
            <div className={this.decorateCSS("down")}>
              {bottomTextExist && <Base.P className={`${this.decorateCSS("text")} animate__animated ${this.getComponentState("footerLeftTextAnimationClass")}`}>{this.getPropValue("bottomText")}</Base.P>}
              {divider && <div className={this.decorateCSS("divider")}></div>}
              {bottomText2Exist && <Base.P className={`${this.decorateCSS("text")} animate__animated ${this.getComponentState("footerRightTextAnimationClass")}`}> {this.getPropValue("bottomText2")}</Base.P>}
            </div>
          )}
        </div>
      </Base.Navigator.Container>
      {isVisible && (
        <div
          className={this.decorateCSS("overlay")}
          onClick={() => this.closeNav()}
        />
      )}
      </div>
    );
  }
}

export default Navbar5;
