import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";

type Icon = {
  icon: string;
  url: string;
}

type Navigator = {
  item: JSX.Element;
  url: string;
}

class Navbar7 extends BaseNavigator {
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
      key: "image",
      displayer: "Logo Image",
      value:
        "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "page",
      key: "logo_navigate",
      displayer: "Logo Navigation",
      value: ""
    })
    this.addProp({
      type: "icon",
      key: "hamburger",
      displayer: "Nav Bar",
      value: "HiOutlineMenuAlt2",
    });
    this.addProp({
      type: "icon",
      key: "menuBarItemIcon",
      displayer: "Menu Bar Item Icon",
      value: "BiRightArrowAlt",
    });
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Media",
      value: [
        {
          type: "object",
          key: "iconss",
          displayer: "Items",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Facebook",
              value: "IoPersonOutline",
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
          key: "iconss",
          displayer: "Items",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Google",
              value: "CiSearch",
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
          key: "iconss",
          displayer: "Items",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Vk",
              value: "CiHeart",
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
          key: "iconss",
          displayer: "Items",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Wifi",
              value: "SlBasket",
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
      type: "array",
      key: "main-navigator",
      displayer: "Navigator",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Home",
              displayer: "Item",
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
              value: "SHOP",
              displayer: "Item",
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
              value: "PRODUCT",
              displayer: "Item",
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
              value: "BLOG",
              displayer: "Item",
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
              value: "PAGES",
              displayer: "Item",
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
              value: "CONTACT",
              displayer: "Item",
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
  }

  getName(): string {
    return "Navbar 7";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {

    const icons = this.castToObject<Icon[]>("icons");
    const navigators = this.castToObject<Navigator[]>("main-navigator");

    const navActive = this.getComponentState("navActive");

    const menuBarItemIcon = this.getPropValue("menuBarItemIcon");

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} 
        ${this.decorateCSS(this.getPropValue("position"))} 
        ${navActive && this.decorateCSS("active")}
          }`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("navbar")}>
              <ComposerIcon
                name={this.getPropValue("hamburger")}
                propsIcon={{
                  className: `${this.decorateCSS("img-hamburger")}  `,
                  onClick: () => {
                    this.navClick();
                  },
                }}
              />
            </div>
            {this.getPropValue("image") &&
              <div className={this.decorateCSS("img-container")}>
                <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                  alt=""
                />
              </div>}
            <div
              className={`${this.decorateCSS("navigator")} ${this.getComponentState("navActive") &&
                this.decorateCSS("active")
                }`}
            >
              <ul className={this.decorateCSS("navigator-list")}>
                {navigators.map(
                  (data: Navigator, index: number) => {
                    return (
                      <ComposerLink path={data.url}>
                        <li className={this.decorateCSS("navigator-item")}>
                          {data.item}
                        </li>
                      </ComposerLink>
                    );
                  }
                )}
              </ul>
            </div>
            <div className={this.decorateCSS("icons-container")}>
              <ul className={this.decorateCSS("icon-list")}>
                {icons.map(
                  (data: Icon, index: number) => {
                    return (
                      <ComposerLink path={data.url}>
                        <li className={this.decorateCSS("icon-item")}>
                          <ComposerIcon name={data.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                        </li>
                      </ComposerLink>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          {navActive && (
            <div className={this.decorateCSS("down-page")}>
              <div className={this.decorateCSS("page-container")}>
                <div className={this.decorateCSS("navigator-list")}>
                  {navigators.map(
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

                          <div className={this.decorateCSS("icon-wrapper")}>
                            <ComposerIcon
                              propsIcon={{ className: this.decorateCSS("icon") }}
                              name={menuBarItemIcon}
                            />
                          </div>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Navbar7;
