import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Logo {
  image: string;
  navigateTo: string;
}

interface Language {
  label: "code" | "name";
  icon: string;
  showLanguage: boolean;
  showDivider: boolean;
}

class Navbar5 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Type"));

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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaFacebook",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTwitter",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "RiInstagramFill",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
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
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTiktok",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
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
      type: "object",
      key: "language",
      displayer: "Language Settings",
      value: [
        {
          type: "select",
          key: "label",
          displayer: "Language Label",
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
          displayer: "Show Divider",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "page",
      key: "logo_navigate",
      displayer: "Logo Navigation",
      value: "",
    });

    this.addProp({
      type: "icon",
      key: "hamburger-icon",
      displayer: "Hamburger Icon",
      value: "RxHamburgerMenu",
    });

    this.addProp({
      type: "icon",
      key: "cross-icon",
      displayer: "Cross Icon",
      value: "MdCancel",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "UK BASED BRANDING AGENCY.",
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
              displayer: "Item Title",
              value: "HOME",
            },
            {
              type: "page",
              key: "itemLink",
              displayer: "Item Link",
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
              key: "itemTitle",
              displayer: "Item Title",
              value: "ABOUT",
            },
            {
              type: "page",
              key: "itemLink",
              displayer: "Item Link",
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
              key: "itemTitle",
              displayer: "Item Title",
              value: "SERVICES",
            },
            {
              type: "page",
              key: "itemLink",
              displayer: "Item Link",
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
              key: "itemTitle",
              displayer: "Item Title",
              value: "PROJECTS",
            },
            {
              type: "page",
              key: "itemLink",
              displayer: "Item Link",
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
              key: "itemTitle",
              displayer: "Item Title",
              value: "CONTACT",
            },
            {
              type: "page",
              key: "itemLink",
              displayer: "Item Link",
              value: "",
            },
          ],
        },
      ],
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
    const listItems = this.castToObject<any[]>("listItems");

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
      <>
      <Base.Navigator.Container
        id={"navbar5-height"}
        position={position}
        positionContainer={`${this.decorateCSS("container")} ${navActive ? this.decorateCSS("filledBackground") : ""}`}
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
                            <Base.Icon
                              propsIcon={{
                                className: this.decorateCSS("icon"),
                              }}
                              name={item.socialIcon}
                            />
                          </div>
                        </ComposerLink>
                      )
                  )}
                </div>
              )}
            </div>
          )}

          {currentLogo.image && (
            <div className={this.decorateCSS("logo")}>
              <ComposerLink path={currentLogo.navigateTo}>
                <img
                  src={currentLogo.image}
                  className={this.decorateCSS("logoImage")}
                  onClick={()=> this.closeNav()}
                />
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
                <Base.Icon
                  name={this.getPropValue("cross-icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("hamburgerIcon")} ${navActive && this.decorateCSS("activeHamburgerIcon")} `,
                    onClick: () => {
                      this.closeNav();
                    },
                  }}
                />
              ) : (
                <Base.Icon
                  name={this.getPropValue("hamburger-icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("hamburgerIcon")} ${navActive && this.decorateCSS("activeHamburgerIcon")} `,
                    onClick: () => {
                      this.openNav();
                    },
                  }}
                />
              )}
            </div>
          )}
        </Base.MaxContent>

        <div className={`${this.decorateCSS("dropdownMenu")} ${navActive ? this.decorateCSS("active") : ""} ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}>
          {upExist && (
            <div className={this.decorateCSS("up")}>
              {titleExist && (
                <div className={this.decorateCSS("leftPage")}>
                  <Base.H1 className={`${this.decorateCSS("title")} animate__animated ${this.getComponentState("dropdownMenuItemAnimationClass")}`}>{this.getPropValue("title")}</Base.H1>
                </div>
              )}
              {listItems.length > 0 && (
                <div className={this.decorateCSS("rightPage")}>
                  <div className={`${this.decorateCSS("items")} animate__animated ${this.getComponentState("dropdownMenuItemAnimationClass")}`}>
                    {listItems.map((item: any, indexSocial: number) => {
                      const itemTitleExist = this.castToString(item.itemTitle);
                      return (
                        itemTitleExist && (
                          <ComposerLink key={indexSocial} path={item.itemLink}>                         
                            <Base.H5 className={`${this.decorateCSS("item-title")} ${animations}`}
                            onClick={()=> this.closeNav()}
                            >
                              {item.itemTitle}
                            </Base.H5>
                          </ComposerLink>
                        )
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
      <Base.Overlay className={this.decorateCSS("overlay")} 
        onClick={() => this.closeNav()} 
        isVisible={isVisible}
      />
      </>
    );
  }
}

export default Navbar5;
