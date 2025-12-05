import * as React from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./navbar8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Icon = {
  icon: TypeMediaInputValue;
  url: string;
};

type MenuItems = {
  title: React.JSX.Element;
  url: string;
};

interface Logo {
  image: TypeMediaInputValue;
  navigateTo: string;
}

interface Language {
  label: "code" | "name";
  icon: TypeMediaInputValue;
  showLanguage: boolean;
  showDivider: boolean;
}

class Navbar8 extends BaseNavigator {
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
            availableTypes: ["icon"],
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
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      additionalParams: {
        availableTypes: ["icon"],
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
        availableTypes: ["icon"],
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
              type: "media",
              key: "icon",
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
                availableTypes: ["icon"],
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
                availableTypes: ["icon"],
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
                availableTypes: ["icon"],
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
    setTimeout(() => {
      this.setComponentState("backgroundChange", false);
    }, 200);
  }

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

    const dropdownDescription = this.castToString(
      this.getPropValue("dropdownDescription")
    );
    const dropdownTitle = this.castToString(this.getPropValue("dropdownTitle"));

    const titleContainer = title || subtitle;

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

    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")

    return (
      <Base.Navigator.Container screenSize={1960} position={position} positionContainer={`${this.decorateCSS("container")} ${backgroundChange ? this.decorateCSS("openedContainer") : ""}`} 
      hamburgerNavActive={isMenuOpen}
      setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
      >
        <Base.MaxContent
          className={`${this.decorateCSS("maxContent")} ${
            transparentBackground && !backgroundChange
              ? this.decorateCSS("transparentBackground")
              : ""
            } ${backgroundChange ? this.decorateCSS("openedMaxContent") : ""}`}
        >
          {currentLogo.image && (
            <div onClick={() => this.setComponentState("isMenuOpen", false)} className={this.decorateCSS("logo")}>
              <ComposerLink path={currentLogo.navigateTo}>
                <Base.Media
                  value={currentLogo.image}
                  className={`${this.decorateCSS("logoImage")} ${backgroundChange ? this.decorateCSS("openedLogoImage") : ""}`}
                  onClick={()=> this.handleCloseMenu()}
                />
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
                icon={language.icon?.name || "IoIosArrowDown"}
                dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${backgroundChange && this.decorateCSS("openedLabel")} ${animations}`}
                iconClassName={`${this.decorateCSS("localizationIcon")} ${backgroundChange && this.decorateCSS("openedIcon")}`}
                dropdownItemClassName={this.decorateCSS("localizationItem")}
                dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                divider={language.showDivider}
              />
            )}
            {isMenuOpen ? (
              <div onClick={this.handleCloseMenu}>
                <Base.Media
                  value={this.getPropValue("closeIcon")}
                  className={`${this.decorateCSS("closeIcon")} ${backgroundChange && this.decorateCSS("openedCloseIcon")}`}
                />
              </div>
            ) : (
              <div onClick={this.handleMenuClick}>
                <Base.Media
                  value={this.getPropValue("hamburgerIcon")}
                  className={`${this.decorateCSS("menuIcon")} ${backgroundChange && this.decorateCSS("openedMenuIcon")}`}
                />
              </div>
            )}
          </div>

        </Base.MaxContent>
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
              {rightSide && (
                <div className={this.decorateCSS("dropdownRightSide")}>
                  {dropdownTitle && (
                    <Base.H3 className={this.decorateCSS("dropdownTitle")}>
                      {this.getPropValue("dropdownTitle")}
                    </Base.H3>
                  )}
                  <div className={this.decorateCSS("line")}></div>
                  {dropdownDescription && (
                    <Base.P className={this.decorateCSS("dropdownDescription")}>
                      {this.getPropValue("dropdownDescription")}
                    </Base.P>
                  )}
                </div>
              )}
              {divider && dividerCondition && (
                <div className={this.decorateCSS("divider")}></div>
              )}
              {leftSide && (
                <div className={this.decorateCSS("dropdownItemList")}>
                  <div className={this.decorateCSS("dropdownItemContent")}>
                  {itemList.map((item: MenuItems, index: number) =>  {
                    return this.castToString(item.title) && ( 
                      <div
                          className={`${this.decorateCSS("dropdownItem")}`}
                          key={index}
                          onClick={() => this.setComponentState("isMenuOpen", false)}
                        >
                      <ComposerLink path={item.url}>
                            <Base.H3 className={`${this.decorateCSS("dropdownItem")} ${animations}`}
                            onClick={()=> this.handleCloseMenu()}
                            >
                              {item.title}
                            </Base.H3>
                        </ComposerLink>
                       </div>
                    )
                  }
                  )}
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
