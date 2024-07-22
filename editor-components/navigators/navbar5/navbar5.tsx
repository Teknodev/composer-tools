import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: string;
};

type LeftItem = {
  icon: string;
  link: string;
};

type Item = {
  item: string;
  url: string;
};

class Navbar5 extends BaseNavigator {
  getName(): string {
    return "Navbar 5";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Mobile Icon",
      value: "GiHamburgerMenu",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp({
      type: "string",
      key: "center-text",
      displayer: "Center Text",
      value: "Title",
    });

    this.addProp({
      type: "array",
      key: "left-items",
      displayer: "Left Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "icon",
              value:
                "https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "https://www.google.com/",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttonList",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Contact",
            },

            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "https://www.google.com/",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is Primary",
              value: false,
            },
          ],
        },
      ],
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
              value: "Features",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
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
              value: "Solutions",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
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
              value: "Resources",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
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
              value: "Pricing",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://www.google.com/",
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["navActive"] = true;
  }

  navClick() {
    this.setComponentState("navActive", !this.getComponentState("navActive"));
  }

  render(): ReactNode {
    const leftItems = this.castToObject<[]>("left-items");
    const hasLeftItems = leftItems && leftItems.length > 0;
    const itemList = this.castToObject<[]>("itemList");
    const hasItemList = itemList && itemList.length > 0;
    const buttonList = this.castToObject<Button[]>("buttonList");
    const hasButtonList = buttonList && buttonList.length > 0;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {hasLeftItems && (
              <div className={this.decorateCSS("content-left")}>
                {leftItems.map((leftItem: LeftItem) => {
                  return (
                    <ComposerLink path={leftItem.link}>
                      <img src={leftItem.icon} width={20} height={20} alt="" />
                    </ComposerLink>
                  );
                })}
              </div>
            )}

            {this.getPropValue("image") && (
              <div className={this.decorateCSS("logo-image")}>
                <img
                  src={this.getPropValue("image")}
                  width={200}
                  height={170}
                  alt=""
                />
              </div>
            )}

            {hasButtonList &&
              this.castToObject<Button[]>("buttonList").map(
                (item: Button, indexButtons: number) => {
                  return (
                    <ComposerLink key={indexButtons} path={item.url}>
                      <button
                        className={`${this.decorateCSS("button")} ${
                          item.isPrimary ? this.decorateCSS("primary") : ""
                        }`}
                      >
                        {item.buttonText}
                      </button>
                    </ComposerLink>
                  );
                }
              )}
          </div>

          <div className={this.decorateCSS("bottom-line")}></div>

          {hasItemList && (
            <div className={this.decorateCSS("secondline-content")}>
              {itemList.map((data: Item, indexItemList: number) => {
                return (
                  <ComposerLink key={indexItemList} path={data.url}>
                    <span className={this.decorateCSS("data-value")}>
                      {data.item}
                    </span>
                  </ComposerLink>
                );
              })}
            </div>
          )}

          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <h2 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h2>
              <ComposerIcon
                propsIcon={{
                  className: `${this.decorateCSS("img-hamburger")} ${
                    this.getComponentState("navActive")
                      ? this.decorateCSS("rotate")
                      : ""
                  }`,
                  onClick: () => {
                    this.navClick();
                  },
                }}
                name={this.getPropValue("icon")}
              />
            </div>
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<Item[]>("itemList").map(
                  (data: Item, indexItemList: number) => {
                    return (
                      <div className={this.decorateCSS("mobile-item")}>
                        <ComposerLink key={indexItemList} path={data.url}>
                          <h3 key={indexItemList}>{data.item}</h3>
                        </ComposerLink>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar5;
