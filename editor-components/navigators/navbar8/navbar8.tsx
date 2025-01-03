import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { TiThSmall } from "react-icons/ti";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Icon = {
  icon: string;
  url: string;
};

type MenuItems = {
  item: JSX.Element;
  url: string;
};

interface Logo {
  image: string;
  navigateTo: string;
  alt: string;
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
}

class Navbar8 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Type"));

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
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc965?alt=media&timestamp=1735826277716",
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
          value: "IoIosArrowDown",
        },
        {
          type: "boolean",
          key: "showLanguage",
          displayer: "Show Language",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      value: "RxHamburgerMenu",
    });
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "RxCross2",
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
              key: "item",
              displayer: "Item",
              value: "Home",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
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
              key: "item",
              displayer: "Item",
              value: "About",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
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
              key: "item",
              displayer: "Item",
              value: "Portfolio",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
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
              key: "item",
              displayer: "Item",
              value: "Contact",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "dropdownTitle",
      value: "Lorem Ipsum",
      displayer: "Menu Title",
    });

    this.addProp({
      type: "string",
      key: "dropdownDescription",
      value:
        "Amidst the ever-shifting landscapes of creativity, I emerge as a dynamic professional, blending boundless energy with an adaptable nature and a profoundly artistic perspective.",
      displayer: "Menu Description",
    });

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Dropdown Divider",
      value: true,
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
              type: "icon",
              key: "icon",
              value: "FaFacebook",
              displayer: "Icon",
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
              type: "icon",
              key: "icon",
              value: "AiFillTwitterCircle",
              displayer: "Icon",
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
              type: "icon",
              key: "icon",
              value: "FaLinkedin",
              displayer: "Icon",
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

    this.setComponentState("isScrolled", false);
    this.setComponentState("isMenuOpen", false);
    this.setComponentState("backgroundChange", false)
  }

  getName(): string {
    return "Navbar 8";
  }

  handleMenuClick = () => {
    this.setComponentState("backgroundChange", true);
    setTimeout(() => {
    this.setComponentState("isMenuOpen", true);
    }, 100);
  };

  handleCloseMenu = () => {
    this.setComponentState("isMenuOpen", false);
    setTimeout(() => {
      this.setComponentState("backgroundChange", false);
    }, 200);
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

  render() {
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");

    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));

    const language = this.castToObject<Language>("language");

    const itemList = this.castToObject<MenuItems[]>("itemList");

    const backgroundChange = this.getComponentState("backgroundChange");
    const isScrolled = this.getComponentState("isScrolled");
    const menuOpen = this.getComponentState("isMenuOpen");
    const transparentBackground =
      (position === "Sticky Transparent" || position === "Absolute") && !isScrolled && !backgroundChange;

    const dropdownSocialMediaTitle = this.castToString(
      this.getPropValue("dropdownSocialMediaTitle")
    );
    const socialMediaLinks = this.castToObject<Icon[]>("socialMediaLinks");

    const dropdownDescription = this.castToString(
      this.getPropValue("dropdownDescription")
    );
    const dropdownTitle = this.castToString(this.getPropValue("dropdownTitle"));

    const titleContainer = title || subtitle;

    const currentLogo =
      transparentBackground && !menuOpen ? absoluteLogo : defaultLogo;

    const isMenuOpen = this.getComponentState("isMenuOpen");
    const divider = this.getPropValue("divider");

    const rightSide = dropdownTitle || dropdownDescription;

    const leftSide =
      itemList.length > 0 ||
      socialMediaLinks.length > 0 ||
      dropdownSocialMediaTitle;

    const dividerCondition = leftSide && rightSide;

    const socialMediaLinksCondition =
      socialMediaLinks.length > 0 || dropdownSocialMediaTitle;

    return (
      <Base.Navigator.Container position={position} positionContainer={`${this.decorateCSS("container")} ${backgroundChange ? this.decorateCSS("fillBackground") : ""}`}>
        <Base.MaxContent
          className={`${this.decorateCSS("maxContent")} ${
            transparentBackground
              ? this.decorateCSS("transparentBackground")
              : ""
          }`}
        >
          {currentLogo && (
            <div className={this.decorateCSS("logo")}>
              <ComposerLink href={currentLogo.navigateTo}>
                <img
                  src={currentLogo.image}
                  className={this.decorateCSS("logoImage")}
                />
              </ComposerLink>
            </div>
          )}
          {titleContainer && (
            <div className={this.decorateCSS("titleContainer")}>
              {title && <h1 className={this.decorateCSS("title")}>{title}</h1>}
              {subtitle && (
                <h4 className={this.decorateCSS("subtitle")}>{subtitle}</h4>
              )}
            </div>
          )}

          <div className={this.decorateCSS("icons")}>
            {language.showLanguage && (
              <ComposerLanguage
                type="dropdown"
                title={language.label}
                icon={
                  <ComposerIcon
                    name={language.icon}
                    propsIcon={{
                      className: `${this.decorateCSS("language-icon")}`,
                    }}
                  />
                }
                dropdownClassName={this.decorateCSS("localizationDropdown")}
              />
            )}
            {isMenuOpen ? (
      
                <ComposerIcon
                  name={this.getPropValue("closeIcon")}
                  propsIcon={{
                    className: this.decorateCSS("closeIcon"), onClick: this.handleCloseMenu
                  }}
                />
            ) : (

                <ComposerIcon
                  name={this.getPropValue("hamburgerIcon")}
                  propsIcon={{
                    className: this.decorateCSS("menuIcon"), onClick: this.handleMenuClick
                  }}
                />
            )}
          </div>

          <Base.Container
            className={`${this.decorateCSS("dropdownMenuContainer")} ${
              isMenuOpen ? this.decorateCSS("open") : ""
            }`}
          >
            <Base.MaxContent
              className={this.decorateCSS("dropdownMenuContent")}
            >
              {rightSide && (
                <div className={this.decorateCSS("dropdownRightSide")}>
                  {dropdownTitle && (
                    <h1 className={this.decorateCSS("dropdownTitle")}>
                      {dropdownTitle}
                    </h1>
                  )}
                  {dropdownDescription && (
                    <p className={this.decorateCSS("dropdownDescription")}>
                      {dropdownDescription}
                    </p>
                  )}
                </div>
              )}
              {divider && dividerCondition && (
                <div className={this.decorateCSS("divider")}></div>
              )}
              {leftSide && (
                <div className={this.decorateCSS("dropdownItemList")}>
                  {itemList.map((item: any, index: number) => (
                    <div
                      className={this.decorateCSS("dropdownItem")}
                      key={index}
                    >
                      <ComposerLink href={item.url}>
                        <p className={this.decorateCSS("dropdownItem")}>
                          {item.item}
                        </p>
                      </ComposerLink>
                    </div>
                  ))}
                  {socialMediaLinksCondition && (
                    <div className={this.decorateCSS("socialMediaLinks")}>
                      <h1 className={this.decorateCSS("socialMediaLinksTitle")}>
                        {dropdownSocialMediaTitle}
                      </h1>
                      <div className={this.decorateCSS("socialMediaLinksList")}>
                        {socialMediaLinks.map((item: any, index: number) => (
                          <div
                            className={this.decorateCSS("socialMediaLink")}
                            key={index}
                          >
                            <ComposerLink href={item.url}>
                              <ComposerIcon
                                name={item.icon}
                                propsIcon={{
                                  className:
                                    this.decorateCSS("socialMediaIcon"),
                                }}
                              />
                            </ComposerLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Base.MaxContent>
          </Base.Container>
        </Base.MaxContent>
      </Base.Navigator.Container>
    );
  }
}

export default Navbar8;
