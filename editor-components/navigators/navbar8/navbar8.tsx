import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { TiThSmall } from "react-icons/ti";

type Icon = {
  icon: string;
  url: string;
}

type Navigator = {
  item: JSX.Element;
  url: string;
}

class Navbar8 extends BaseNavigator {

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Normal",
      additionalParams: {
        selectItems: ["Normal", "Absolute", "StickyColorful", "StickyTransparent"]
      }
    });
    this.addProp({
      type: "image",
      key: "first_logo",
      displayer: "Logo 1",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676a9b610655f8002caba136?alt=media",
    });
    this.addProp({
      type: "image",
      key: "second_logo",
      displayer: "Logo 2",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676a9b8f0655f8002caba13f?alt=media",
    });

    this.addProp({
      type: "page",
      key: "logo_navigate",
      displayer: "Logo Navigation",
      value: ""
    })
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "LOREM IPSUM",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "PHOTOGRAPHY & DESIGN",
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
      value: "RxCross2",
    });
    this.addProp({
      type: "string",
      key: "dropdownTitle",
      displayer: "Dropdown Title",
      value: "Lorem Ipsum",
    });
    this.addProp({
      type: "boolean",
      key: "drowdownStick",
      displayer: "Drowdown Stick",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Amidst the ever-shifting landscapes of creativity, I emerge as a dynamic professional, blending boundless energy with an adaptable nature and a profoundly artistic perspective."
    });
    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Dropdown Divider",
      value: true,
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
            }
          ]
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
          ]
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
          ]
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
          ]
        },
      ]
    });
    this.addProp({
      type: "string",
      key: "icon-text",
      displayer: "Icon Text",
      value: "FOLLOW ME",
    });
    this.addProp({
      type: "array",
      key: "social-media-items",
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
              value:
                "FaFacebook",
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
              value:
                "AiFillTwitterCircle",
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
              value:
                "FaLinkedin",
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
    this.setComponentState("scrollY", 0);
    this.setComponentState("isOpening", false);
  }

  getName(): string {
    return "Navbar 8";
  }

  navClick() {
    const isActive = this.getComponentState("navActive");

    if (isActive) {
      this.setComponentState("isClosing", true);
      setTimeout(() => {
        this.setComponentState("isClosing", false);
        this.setComponentState("navActive", false);
      }, 500);
    } else {
      this.setComponentState("navActive", true);
    }
  }

  componentDidMount(): void {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      console.log("scrollY", scrollY);
      this.setComponentState("scrollY", scrollY);
    })
  }

  render() {
    const navActive = this.getComponentState("navActive");
    const isClosing = this.getComponentState("isClosing");
    const isOpening = this.getComponentState("isOpening");

    const scrollY = this.getComponentState("scrollY");

    const navbarElement = document.getElementById("navbar8-height");
    const navbarHeight = navbarElement?.clientHeight || "auto";

    const navbarDownPageElement = document.getElementById("navbar8-down-page");
    const navbarDownPageHeight = navbarDownPageElement?.clientHeight || "auto";

    const position = this.getPropValue("position");

    const imageDark = this.getPropValue("second_logo");
    const imageLight = this.getPropValue("first_logo");

    const stickyAndTransparent = (position === "StickyTransparent" && (scrollY > navbarHeight));

    const logoSrc = (
      stickyAndTransparent || position === "Normal" || position === "StickyColorful"
        ? imageDark
        : imageLight
    );

    const itemList = this.castToObject<Navigator[]>("itemList");
    const icons = this.castToObject<Icon[]>("social-media-items");

    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const dropdownTitle = this.getPropValue("dropdownTitle");
    const description = this.getPropValue("description");
    const divider = this.getPropValue("divider");
    const iconText = this.getPropValue("icon-text");

    const color = this.getPropValue("color");
    const downPageRef = React.createRef<HTMLDivElement>();

    return (
      <div className={`${this.decorateCSS("parent")} 
      ${this.decorateCSS(position)} 
      ${this.decorateCSS(color)}
      ${stickyAndTransparent && this.decorateCSS("Colorful")}`}>
        <Base.Container
          className={`${this.decorateCSS("container")} ${navActive && this.decorateCSS("active")}`}
          id="navbar8-height"
        >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <nav className={this.decorateCSS("bar")}>
              {logoSrc &&
                <div className={this.decorateCSS("image-box")}>
                  <ComposerLink path={this.getPropValue("logo_navigate")}>
                    <img className={this.decorateCSS("image")} src={logoSrc} alt="" />
                  </ComposerLink>
                </div>}
              {(this.castToString(title) || this.castToString(subtitle)) &&
                <div className={this.decorateCSS("middle")}>
                  {this.castToString(title) &&
                    <div className={`${this.decorateCSS("title")} ${navActive && this.decorateCSS("active-title")}`}>
                      {title}
                    </div>}
                  {this.castToString(subtitle) &&
                    <div className={`${this.decorateCSS("subtitle")} ${navActive && this.decorateCSS("active-subtitle")}`}>
                      {subtitle}
                    </div>}
                </div>}
              {itemList.length > 0 &&
                <div className={this.decorateCSS("navbar")}>
                  <ComposerLanguage className={this.decorateCSS("language")}></ComposerLanguage>
                  <ComposerIcon
                    name={navActive ? this.getPropValue("cross-icon") : this.getPropValue("hamburger-icon")}
                    propsIcon={{
                      className: `${this.decorateCSS("hamburger-icon")} ${navActive && this.decorateCSS("active-hamburger-icon")} `,
                      onClick: () => {
                        this.navClick();
                      },
                    }}
                  />
                </div>}
            </nav>
          </Base.MaxContent>
        </Base.Container>
        <Base.Container
          style={{ maxHeight: (isOpening || navActive) ? `calc(${navbarDownPageHeight}px + 60px)` : '0px' }}
          className={`${this.decorateCSS("down-page-container")} 
              ${(isOpening || navActive) && !isClosing ? this.decorateCSS("active") : ''} 
              ${isClosing ? this.decorateCSS("closing") : ''} 
              ${this.decorateCSS(color)}`}>
          <Base.MaxContent id="navbar8-down-page" className={this.decorateCSS("down-page")}>
            {(this.castToString(dropdownTitle) || this.castToString(description)) &&
              <div className={this.decorateCSS("left-page")}>
                {this.castToString(dropdownTitle) && <div className={this.decorateCSS("dropdownTitle")}>{dropdownTitle}</div>}
                {this.getPropValue("drowdownStick") && <div className={this.decorateCSS("stick")}></div>}
                {this.castToString(description) && <div className={this.decorateCSS("description")}>{description}</div>}
              </div>}
            {divider && <div className={this.decorateCSS("divider")}></div>}
            {(itemList.length > 0 ||
              icons.length > 0 ||
              this.castToString(iconText)) &&
              <div className={this.decorateCSS("right-page")}>
                {itemList.length > 0 &&
                  <div className={this.decorateCSS("items")}>
                    {itemList.map(
                      (data: Navigator, indexItemList: number) => {
                        return (
                          <ComposerLink
                            key={indexItemList}
                            path={data.url}
                          >
                            <Base.H3 className={this.decorateCSS("item-title")} key={indexItemList}
                              onClick={() => this.setComponentState("navActive", false)}>
                              {data.item}
                            </Base.H3>
                          </ComposerLink>
                        );
                      }
                    )}
                  </div>}
                {(icons.length > 0 || this.castToString(iconText)) &&
                  <div className={this.decorateCSS("social-media-box")}>
                    {this.castToString(iconText) && <Base.H4 className={this.decorateCSS("icon-text")}>{iconText}</Base.H4>}
                    {icons.length > 0 &&
                      <div className={this.decorateCSS("icon-group")}>
                        {icons.map((icons: Icon) => {
                          return (
                            <ComposerLink path={icons.url}>
                              <ComposerIcon
                                propsIcon={{ className: this.decorateCSS("icon") }}
                                name={icons.icon}
                              />
                            </ComposerLink>
                          );
                        })}
                      </div>}
                  </div>}
              </div>}
          </Base.MaxContent>
        </Base.Container>
      </div >
    );
  }
}

export default Navbar8;