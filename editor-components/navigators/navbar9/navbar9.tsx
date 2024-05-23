import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Navbar8 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Default",
      additionalParams: {
        selectItems: ["Default", "Sticky", "Absolute"]
      }
    })
    this.addProp({
      type: "image",
      key: "image_light",
      displayer: "Image Light",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "image",
      key: "image_dark",
      displayer: "Image Dark",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
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
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title 1",
      value: "Lorem Ipsum",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Amidst the ever-shifting landscapes of creativity, I emerge as a dynamic professional, blending boundless energy with an adaptable nature and a profoundly artistic perspective."
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
              key: "link",
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
              key: "link",
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
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

  }

  getName(): string {
    return "Navbar 9";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {
    const navActive = this.getComponentState("navActive");
    const logoSrc = this.getPropValue(navActive ? "image_light" : "image_dark");
    return (
      <div
        className={`${this.decorateCSS("container")} ${this.decorateCSS(this.getPropValue("position"))} ${navActive && this.decorateCSS("active")}`}
      >
        <div className={this.decorateCSS("max-content")}>
          <nav className={this.decorateCSS("bar")}>
            <div className={this.decorateCSS("image-box")}>
              <ComposerLink path={this.getPropValue("logo_navigate")}>
                <img className={this.decorateCSS("image")} src={logoSrc} width={200} alt="" />
              </ComposerLink>
            </div>
            <div className={this.decorateCSS("middle")}>
              <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>

              <div className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</div>
            </div>
            <div className={this.decorateCSS("navbar")}>
              <ComposerIcon
                name={navActive ? this.getPropValue("cross-icon") : this.getPropValue("hamburger-icon")}
                propsIcon={{
                  className: `${this.decorateCSS("hamburger-icon")}  `,
                  onClick: () => {
                    this.navClick();
                  },
                }}
              />
            </div>
          </nav>
          {navActive && (
            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("left-page")}>
                <div className={this.decorateCSS("title1")}>{this.getPropValue("title1")}</div>
                <div className={this.decorateCSS("stick")}></div>
                <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>
              </div>
              <div className={this.decorateCSS("right-page")}>
                <div className={this.decorateCSS("itemList")}>
                  <div className={this.decorateCSS("items")}>
                    {this.castToObject<[]>("itemList").map(
                      (data: any, indexItemList: number) => {
                        return (
                          <ComposerLink
                            key={indexItemList}
                            path={data.value[1].value}
                          >
                            <h3 className={this.decorateCSS("item-title")} key={indexItemList} onClick={() => this.setComponentState("navActive",false)}>{data.value[0].value}</h3>
                          </ComposerLink>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className={this.decorateCSS("social-media-box")}>
                  <h4 className={this.decorateCSS("icon-text")}>{this.getPropValue("icon-text")}</h4>
                  <div className={this.decorateCSS("icon-group")}>
                    {this.getPropValue("social-media-items").map((icons: any) => {
                      return (
                        <ComposerLink path={icons.value[1].value}>
                          <ComposerIcon
                            propsIcon={{ className: this.decorateCSS("icons") }}
                            name={icons.value[0].value}
                          />
                        </ComposerLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    );
  }
}

export default Navbar8;