import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";

class Navbar5 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Default",
      additionalParams: {
        selectItems: ["Default", "Sticky", "Absolute"],
      },
    });

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
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaVine",
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
      key: "image_light",
      displayer: "Image Light",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });

    this.addProp({
      type: "image",
      key: "image_dark",
      displayer: "Image Dark",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
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
  }

  getName(): string {
    return "Navbar 5";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {
    const navActive = this.getComponentState("navActive");
    const logoSrc = this.getPropValue(navActive ? "image_light" : "image_dark");

    const social = this.castToObject<any[]>("social");
    const listItems = this.castToObject<any[]>("listItems");

    const titleExist = this.castToString(this.getPropValue("title"));

    const upExist = titleExist || listItems.length > 0;

    const language = this.getPropValue("language");
    const line = this.getPropValue("line");
    const divider = this.getPropValue("divider");

    const bottomTextExist = this.castToString(this.getPropValue("bottomText"));
    const bottomText2Exist = this.castToString(this.getPropValue("bottomText2"));

    const hamburgerIcon = this.getPropValue("hamburger-icon");
    const crossIcon = this.getPropValue("cross-icon");

    const iconsExist = hamburgerIcon || crossIcon;

    const navbarExist = social.length > 0 || logoSrc || iconsExist || language;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${this.decorateCSS(this.getPropValue("position"))} ${navActive && this.decorateCSS("active")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {navbarExist && (
            <nav className={this.decorateCSS("bar")}>
              {social.length > 0 && (
                <div className={this.decorateCSS("social-media-box")}>
                  {social.length > 0 && (
                    <div className={this.decorateCSS("social")}>
                      {social.map(
                        (item: any, indexSocial: number) =>
                          item.socialIcon && (
                            <ComposerLink key={indexSocial} path={item.socialLink}>
                              <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={item.socialIcon} />
                            </ComposerLink>
                          )
                      )}
                    </div>
                  )}
                </div>
              )}

              {logoSrc && (
                <ComposerLink className={this.decorateCSS("image-container")} path={this.getPropValue("logo_navigate")}>
                  <div className={this.decorateCSS("image-box")}>
                    <img className={this.decorateCSS("image")} src={logoSrc} width={200} alt="" />
                  </div>
                </ComposerLink>
              )}

              {(language || iconsExist) && (
                <div className={this.decorateCSS("navbar")}>
                  {language && <ComposerLanguage className={this.decorateCSS("language")} />}

                  <ComposerIcon
                    name={navActive ? this.getPropValue("cross-icon") : this.getPropValue("hamburger-icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("hamburger-icon")} ${navActive && this.decorateCSS("active-hamburger-icon")} `,
                      onClick: () => {
                        this.navClick();
                      },
                    }}
                  />
                </div>
              )}
            </nav>
          )}

          {navActive && (
            <div className={this.decorateCSS("down-page")}>
              {upExist && (
                <div className={this.decorateCSS("up")}>
                  {titleExist && (
                    <div className={this.decorateCSS("left-page")}>
                      <Base.H1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H1>
                    </div>
                  )}
                  {listItems.length > 0 && (
                    <div className={this.decorateCSS("right-page")}>
                      {listItems.length > 0 && (
                        <div className={this.decorateCSS("item")}>
                          {listItems.map((item: any, indexSocial: number) => {
                            const itemTitleExist = this.castToString(item.itemTitle);
                            return (
                              itemTitleExist && (
                                <ComposerLink key={indexSocial} path={item.pageLink}>
                                  <Base.H5 className={this.decorateCSS("item-title")}>{item.itemTitle}</Base.H5>
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
                  {bottomTextExist && <Base.P className={this.decorateCSS("text1")}>{this.getPropValue("bottomText")}</Base.P>}
                  {divider && <div className={this.decorateCSS("divider")}></div>}
                  {bottomText2Exist && <Base.P className={this.decorateCSS("text2")}> {this.getPropValue("bottomText2")}</Base.P>}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Navbar5;
