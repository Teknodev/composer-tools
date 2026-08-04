import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar8.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Icon = {
  icon: TypeMediaInputValue;
  url: string;
};

type MenuItems = {
  title: React.JSX.Element;
  url: string;
  menuType: string;
  sub_items: MenuItems[];
};

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

class Navbar8 extends BaseNavigator {
  slideTimer: ReturnType<typeof setInterval> | null = null;

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
      type: "array",
      key: "heroMedia",
      displayer: "Background Media",
      value: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop",
      ].map((url) => ({
        type: "object",
        key: "slide",
        displayer: "Slide",
        value: [
          {
            type: "media",
            key: "media",
            displayer: "Media",
            additionalParams: { availableTypes: ["image", "video"] },
            value: { type: "image", url },
          },
        ],
      })),
    });

    this.addProp({
      type: "boolean",
      key: "heroMode",
      displayer: "Full Screen Hero",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "heroOverlay",
      displayer: "Background Overlay",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "slideDuration",
      displayer: "Slide Duration (s)",
      value: 5,
    });

    this.addProp({
      type: "array",
      key: "categories",
      displayer: "Categories",
      value: ["Architecture", "Wedding", "Commercial", "Lifestyle", "Fashion"].map(
        (label) => ({
          type: "object",
          key: "category",
          displayer: "Category",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: label,
            },
          ],
        })
      ),
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem Ipsum",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "PHOTOGRAPHY & DESIGN",
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
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoIosArrowDown",
          },
        },
        {
          type: "boolean",
          key: "showLanguage",
          displayer: "Show Language",
          value: false,
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
      key: "hamburgerIcon",
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
      key: "closeIcon",
      displayer: "Close Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "RxCross2",
      },
    });

    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Home",
            },
            {
              type: "page",
              key: "url",
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
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "About",
            },
            {
              type: "page",
              key: "url",
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
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Portfolio",
            },
            {
              type: "page",
              key: "url",
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
                      value: "Photography",
                    },
                    {
                      type: "page",
                      key: "url",
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
                              value: "Portraits",
                            },
                            {
                              type: "page",
                              key: "url",
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
                              key: "title",
                              displayer: "Title",
                              value: "Editorial",
                            },
                            {
                              type: "page",
                              key: "url",
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
                      value: "Design",
                    },
                    {
                      type: "page",
                      key: "url",
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
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Contact",
            },
            {
              type: "page",
              key: "url",
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
      type: "string",
      key: "dropdownSocialMediaTitle",
      displayer: "Dropdown Links Title",
      value: "FOLLOW ME",
    });

    this.addProp({
      type: "array",
      key: "socialMediaLinks",
      displayer: "Social Media Items",
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
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaFacebook",
              },
            },
            {
              type: "page",
              key: "url",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "AiFillTwitterCircle",
              },
            },
            {
              type: "page",
              key: "url",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaPinterestP",
              },
            },
            {
              type: "page",
              key: "url",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
            {
              type: "page",
              key: "url",
              value: "",
              displayer: "Navigate To",
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

    this.setComponentState("isMenuOpen", false);
    this.setComponentState("backgroundChange", false)
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Navbar 8";
  }

  handleMenuClick = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapperContainer = Base.Navigator.getWrapperContainer();
    this.setComponentState("backgroundChange", wrapperContainer?.scrollY === 0);
    setTimeout(() => {
    this.setComponentState("isMenuOpen", true);
    }, 100);
  };
  handleCloseMenu = () => {
    Base.Navigator.changeScrollBehaviour("auto");
    this.setComponentState("isMenuOpen", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    setTimeout(() => {
      this.setComponentState("backgroundChange", false);
    }, 200);
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

  onComponentDidMount(): void {
    const slides = this.castToObject<any[]>("heroMedia") || [];
    if (slides.length < 2) return;
    const seconds = Number(this.getPropValue("slideDuration")) || 5;
    this.slideTimer = setInterval(() => {
      const total = (this.castToObject<any[]>("heroMedia") || []).length;
      if (total < 2) return;
      const next = ((this.getComponentState("activeSlide") ?? 0) + 1) % total;
      this.setComponentState("activeSlide", next);
    }, seconds * 1000);
  }

  onComponentWillUnmount(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    }
    this.handleCloseMenu();
  }

  render() {
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");

    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));

    const language = this.castToObject<Language>("language");

    const itemList = this.castToObject<MenuItems[]>("itemList");

    const dropdownIcon = this.getPropValue("dropdownIcon");
    const rightIcon = this.getPropValue("rightIcon");

    const backgroundChange = this.getComponentState("backgroundChange");

    const isScrolled = this.getComponentState("isScrolled");
    const isStickyTransparent = position === "Sticky Transparent";
    const isStickyColorful = position === "Sticky Colorful"
    const isDefault = position === "Default"
    const isAbsolute = position === "Absolute";
    const transparentBackground = isAbsolute || (isStickyTransparent && !isScrolled);
    const colorfullBackground = isStickyColorful || isDefault;
    const currentLogo =
      ((colorfullBackground && backgroundChange) || (transparentBackground && !backgroundChange))
        ? absoluteLogo
        : defaultLogo;

    const dropdownSocialMediaTitle = this.castToString(
      this.getPropValue("dropdownSocialMediaTitle")
    );
    const socialMediaLinks = this.castToObject<Icon[]>("socialMediaLinks");

    const titleContainer = title || subtitle;

    const isMenuOpen = this.getComponentState("isMenuOpen");

    const leftSide =
      itemList.length > 0 ||
      socialMediaLinks.length > 0 ||
      dropdownSocialMediaTitle;

    const socialMediaLinksCondition =
      socialMediaLinks.length > 0 || dropdownSocialMediaTitle;

    const heroMedia = this.castToObject<{ media: any }[]>("heroMedia") || [];
    const heroOverlay = this.getPropValue("heroOverlay");
    const heroMode = this.getPropValue("heroMode");
    const categories = this.castToObject<any[]>("categories") || [];
    const activeSlide = this.getComponentState("activeSlide") ?? 0;
    const categoryTexts = categories.filter((c: any) => this.castToString(c?.text));

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <Base.Navigator.Container screenSize={1960} position={position} positionContainer={`${this.decorateCSS("container")} ${heroMode ? this.decorateCSS("heroMode") : ""} ${backgroundChange ? this.decorateCSS("openedContainer") : ""} ${isMenuOpen ? this.decorateCSS("hamburgerActive") : ""}`} 
      hamburgerNavActive={isMenuOpen}
      setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
      >
        {heroMode && heroMedia.length > 0 && (
          <div className={this.decorateCSS("heroMediaLayer")}>
            {heroMedia.map((slide: any, index: number) =>
              slide?.media ? (
                <div
                  key={index}
                  className={`${this.decorateCSS("heroSlide")} ${index === activeSlide % heroMedia.length ? this.decorateCSS("activeSlide") : ""}`}
                >
                  <Base.Media value={slide.media} className={this.decorateCSS("heroSlideMedia")} />
                </div>
              ) : null
            )}
            {heroOverlay && <div className={this.decorateCSS("heroMediaOverlay")} />}
          </div>
        )}
        <Base.MaxContent
          className={`${this.decorateCSS("maxContent")} ${
            transparentBackground && !backgroundChange
              ? this.decorateCSS("transparentBackground")
              : ""
            } ${backgroundChange ? this.decorateCSS("openedMaxContent") : ""}`}
        >
          {(currentLogo.image || this.castToString(currentLogo.text)) && (
            <div onClick={() => this.setComponentState("isMenuOpen", false)} className={this.decorateCSS("logo")}>
              <ComposerLink path={currentLogo.navigateTo}>
                <div className={this.decorateCSS("logoContent")} onClick={()=> this.handleCloseMenu()}>
                  {currentLogo.image && (
                    <Base.Media
                      value={currentLogo.image}
                      className={`${this.decorateCSS("logoImage")} ${backgroundChange ? this.decorateCSS("openedLogoImage") : ""}`}
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
          {titleContainer && (
            <div className={this.decorateCSS("titleContainer")}>
              <div className={this.decorateCSS("titleContainerContent")}>
                {title && <Base.H1 className={`${this.decorateCSS("title")} ${backgroundChange ? this.decorateCSS("openedTitle") : ""}`}>{this.getPropValue("title")}</Base.H1>}
                {subtitle && (
                  <Base.P className={`${this.decorateCSS("subtitle")} ${backgroundChange ? this.decorateCSS("openedSubtitle") : ""}`}>{this.getPropValue("subtitle")}</Base.P>
                )}
              </div>
            </div>
          )}

          <div className={this.decorateCSS("icons")}>
          {language.showLanguage && (
              <Base.Language
                type="dropdown"
                title={language.label}
                icon={language.icon}
                dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${backgroundChange && this.decorateCSS("openedLabel")} ${animations}`}
                iconClassName={`${this.decorateCSS("localizationIcon")} ${backgroundChange && this.decorateCSS("openedIcon")}`}
                dropdownItemClassName={this.decorateCSS("localizationItem")}
                dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                divider={language.showDivider}
              />
            )}
            {isMenuOpen ? (
              <div className={this.decorateCSS("closeIconWrapper")} onClick={this.handleCloseMenu}>
                <Base.Media
                  value={this.getPropValue("closeIcon")}
                  className={`${this.decorateCSS("closeIcon")} ${backgroundChange && this.decorateCSS("openedCloseIcon")}`}
                />
              </div>
            ) : (
              <div className={this.decorateCSS("menuIconWrapper")} onClick={this.handleMenuClick}>
                <Base.Media
                  value={this.getPropValue("hamburgerIcon")}
                  className={`${this.decorateCSS("menuIcon")} ${backgroundChange && this.decorateCSS("openedMenuIcon")}`}
                />
              </div>
            )}
          </div>

        </Base.MaxContent>

        {heroMode && (categoryTexts.length > 0 || socialMediaLinks.length > 0) && (
          <Base.MaxContent className={this.decorateCSS("heroBottomContent")}>
            <div className={this.decorateCSS("heroBottom")}>
              {categoryTexts.length > 0 && (
                <div className={this.decorateCSS("heroCategories")}>
                  {categories.map((category: any, index: number) =>
                    this.castToString(category?.text) ? (
                      <Base.P key={index} className={this.decorateCSS("heroCategory")}>
                        {category.text}
                      </Base.P>
                    ) : null
                  )}
                </div>
              )}
              {socialMediaLinks.length > 0 && (
                <div className={this.decorateCSS("heroSocial")}>
                  {socialMediaLinks.map((item: any, index: number) => (
                    <ComposerLink key={index} path={item.url}>
                      <div className={`${this.decorateCSS("heroSocialIconContainer")} ${animations}`}>
                        <Base.Media value={item.icon} className={this.decorateCSS("heroSocialIcon")} />
                      </div>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
          </Base.MaxContent>
        )}
        <div
          className={`${
            isMenuOpen ? this.decorateCSS("overlay") : ""
          }`}
          onClick={() => this.handleCloseMenu()}
        />
               <Base.Container
            className={`${this.decorateCSS("dropdownMenuContainer")} ${
              isMenuOpen ? this.decorateCSS("open") : ""
            }`}
          >
            <Base.MaxContent
              className={this.decorateCSS("dropdownMenuContent")}
            >
              {leftSide && (
                <div className={this.decorateCSS("dropdownItemList")}>
                  <div className={this.decorateCSS("dropdownItemContent")}>
                  {itemList.map((item: MenuItems, index: number) => {
                    if (!this.castToString(item.title)) return null;

                    const subItems = item.sub_items || [];
                    const hasSubItems =
                      item.menuType === "Dropdown" &&
                      subItems.some((subItem: MenuItems) =>
                        this.castToString(subItem.title)
                      );

                    return (
                      <div className={this.decorateCSS("menuItem")} key={index}>
                        <div
                          className={this.decorateCSS("menuItemHeader")}
                          onClick={() => hasSubItems && this.navClick(index)}
                        >
                          <ComposerLink path={item.url}>
                            <Base.H3
                              className={`${this.decorateCSS("dropdownItem")} ${animations}`}
                              onClick={() => !hasSubItems && this.handleCloseMenu()}
                            >
                              {item.title}
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
                              if (!this.castToString(subItem.title)) return null;

                              const subSubItems = subItem.sub_items || [];
                              const hasSubSubItems = subSubItems.some(
                                (subSubItem: MenuItems) =>
                                  this.castToString(subSubItem.title)
                              );

                              return (
                                <div
                                  key={subIndex}
                                  className={this.decorateCSS("submenuItem")}
                                >
                                  <div
                                    className={this.decorateCSS("submenuItemHeader")}
                                    onClick={() =>
                                      hasSubSubItems &&
                                      this.subNavClick(`${index}-${subIndex}`)
                                    }
                                  >
                                    <ComposerLink path={subItem.url}>
                                      <Base.H5
                                        className={`${this.decorateCSS("submenuItemTitle")} ${animations}`}
                                        onClick={() =>
                                          !hasSubSubItems && this.handleCloseMenu()
                                        }
                                      >
                                        {subItem.title}
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
                                          this.castToString(subSubItem.title) && (
                                            <div
                                              key={subSubIndex}
                                              className={this.decorateCSS("subSubmenuItem")}
                                            >
                                              <ComposerLink path={subSubItem.url}>
                                                <Base.P
                                                  className={`${this.decorateCSS("subSubmenuItemTitle")} ${animations}`}
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
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  </div>

                  {socialMediaLinksCondition && (
                    <div className={this.decorateCSS("socialMediaWrapper")}>
                    <div className={this.decorateCSS("socialMediaLinks")}>
                      <Base.H5 className={this.decorateCSS("socialMediaLinksTitle")}>
                        {this.getPropValue("dropdownSocialMediaTitle")}
                      </Base.H5>
                      <div className={this.decorateCSS("socialMediaLinksList")}>
                        {socialMediaLinks.map((item: any, index: number) => (
                          <div
                            className={this.decorateCSS("socialMediaLink")}
                            key={index}
                            onClick={() => this.setComponentState("isMenuOpen", false)}
                          >
                            <ComposerLink path={item.url}>
                              <div className={`${this.decorateCSS("socialMediaIconContainer")} ${animations}`} onClick={()=> this.handleCloseMenu()}>
                              <Base.Media
                                value={item.icon}
                                className={this.decorateCSS("socialMediaIcon")}
                              />
                              </div>
                            </ComposerLink>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>

                  )}
                </div>
              )}
            </Base.MaxContent>
          </Base.Container>
      </Base.Navigator.Container>
    );
  }
}

export default Navbar8;
