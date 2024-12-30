import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
      type: "image",
      key: "logo_default",
      displayer: "Logo 1",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676a9ac20655f8002caba0b7?alt=media",
    });

    this.addProp({
      type: "image",
      key: "logo_transparent",
      displayer: "Logo 2",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });

    this.addProp({
      type: "page",
      key: "logo_navigate",
      displayer: "Logo Navigation",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "language",
      displayer: "Language",
      value: true,
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
      value: "hellocrafto@gmail.com",
    });

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    });

    this.setComponentState("isScrolled", false);
  }

  getName(): string {
    return "Navbar 5";
  }

  navClick() {
    const isActive = this.getComponentState("navActive");

    if (isActive) {
      this.setComponentState("isClosing", true);
      this.setComponentState("navActive", false);

      setTimeout(() => {
        this.setComponentState("isClosing", false);
      }, 800);
    } else {
      this.setComponentState("navActive", true);
    }
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
    const navbarElement = document.getElementById(`navbar5-height`);
    const isScrolled = this.getComponentState("isScrolled");

    const navActive = this.getComponentState("navActive");
    const logoDefault = this.getPropValue("logo_default");
    const logoTransparent = this.getPropValue("logo_transparent");

    const position = this.getPropValue("position");
    const logo =
      position === "Absolute" ||
      (position === "Sticky Transparent" && !isScrolled)
        ? logoTransparent
        : logoDefault;

    const social = this.castToObject<any[]>("social");
    const listItems = this.castToObject<any[]>("listItems");

    const titleExist = this.castToString(this.getPropValue("title"));

    const upExist = titleExist || listItems.length > 0;

    const language = this.getPropValue("language");
    const line = this.getPropValue("line");
    const divider = this.getPropValue("divider");

    const bottomTextExist = this.castToString(this.getPropValue("bottomText"));
    const bottomText2Exist = this.castToString(
      this.getPropValue("bottomText2")
    );

    const hamburgerIcon = this.getPropValue("hamburger-icon");
    const crossIcon = this.getPropValue("cross-icon");

    const iconsExist = hamburgerIcon || crossIcon;


    const isClosing = this.getComponentState("isClosing");

    return (
      <>
        <Base.Navigator.Container id={"navbar5-height"} position={position}>
          <Base.MaxContent className={this.decorateCSS("maxContent")}>
            {social.length > 0 && (
              <div className={this.decorateCSS("social-media-box")}>
                {social.length > 0 && (
                  <div className={this.decorateCSS("social")}>
                    {social.map(
                      (item: any, indexSocial: number) =>
                        item.socialIcon && (
                          <ComposerLink
                            key={indexSocial}
                            path={item.socialLink}
                          >
                            <ComposerIcon
                              propsIcon={{
                                className: this.decorateCSS("icon"),
                              }}
                              name={item.socialIcon}
                            />
                          </ComposerLink>
                        )
                    )}
                  </div>
                )}
              </div>
            )}

            {logo && (
              <ComposerLink
                className={this.decorateCSS("image-container")}
                path={this.getPropValue("logo_navigate")}
              >
                <div className={this.decorateCSS("image-box")}>
                  <img
                    className={this.decorateCSS("image")}
                    src={logo}
                    alt=""
                  />
                </div>
              </ComposerLink>
            )}

            {(language || iconsExist) && (
              <div className={this.decorateCSS("navbar")}>
                {language && (
                  <ComposerLanguage
                    type="dropdown"
                    dropdownClassName={this.decorateCSS("language")}
                  />
                )}

                <ComposerIcon
                  name={
                    navActive
                      ? this.getPropValue("cross-icon")
                      : this.getPropValue("hamburger-icon")
                  }
                  propsIcon={{
                    className: `${this.decorateCSS("hamburger-icon")} ${
                      navActive && this.decorateCSS("active-hamburger-icon")
                    } `,
                    onClick: () => {
                      this.navClick();
                    },
                  }}
                />
              </div>
            )}
          </Base.MaxContent>


          <div
            className={`${this.decorateCSS("downPage")} ${
              navActive ? this.decorateCSS("active") : ""
            } ${isClosing ? this.decorateCSS("closing") : ""}`}
          >
            <Base.MaxContent>
          
              {upExist && (
                <div className={this.decorateCSS("up")}>
                  {titleExist && (
                    <div className={this.decorateCSS("leftPage")}>
                      <Base.H1 className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.H1>
                    </div>
                  )}
                  {listItems.length > 0 && (
                    <div className={this.decorateCSS("rightPage")}>
                      {listItems.length > 0 && (
                        <div className={this.decorateCSS("items")}>
                          {listItems.map((item: any, indexSocial: number) => {
                            const itemTitleExist = this.castToString(
                              item.itemTitle
                            );
                            return (
                              itemTitleExist && (
                                <ComposerLink
                                  key={indexSocial}
                                  path={item.pageLink}
                                >
                                  <Base.H5
                                    className={this.decorateCSS("item-title")}
                                  >
                                    {item.itemTitle}
                                  </Base.H5>
                                </ComposerLink>
                              )
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {line && <div className={this.decorateCSS("line")}></div>}

              {(bottomTextExist || bottomText2Exist) && (
                <div className={this.decorateCSS("down")}>
                  {bottomTextExist && (
                    <Base.P className={this.decorateCSS("text1")}>
                      {this.getPropValue("bottomText")}
                    </Base.P>
                  )}
                  {divider && (
                    <div className={this.decorateCSS("divider")}></div>
                  )}
                  {bottomText2Exist && (
                    <Base.P className={this.decorateCSS("text2")}>
                      {" "}
                      {this.getPropValue("bottomText2")}
                    </Base.P>
                  )}
                </div>
              )}
            </Base.MaxContent>
          </div>
        </Base.Navigator.Container>

     
      </>
    );
  }
}

export default Navbar5;
