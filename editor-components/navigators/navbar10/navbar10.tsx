import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Navbar10 extends BaseNavigator {
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
    });
    this.addProp({
      type: "icon",
      key: "hamburger-icon",
      displayer: "Hamburger Icon",
      value: "RxHamburgerMenu",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "DESERT GLOW",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "cosmetics",
    });
    this.addProp({
      type: "string",
      key: "leftItem",
      displayer: "Left Item",
      value: "27 13 Lowe Haven, Apt. 13 East Johnathon, TN 99367"
    });
    this.addProp({
      type: "string",
      key: "rightItem",
      displayer: "Right Item",
      value: "+ 1235 2355 98"
    });
    this.addProp({
      type: "page",
      key: "url",
      displayer: "Url",
      value: ""
    });
    this.addProp({
      type: "array",
      key: "rightIcon",
      displayer: "Right Icon",
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
                "FaPhoneVolume",
              displayer: "Icon",
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
              displayer: "Item",
              value: "Home"
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
              value: "Phone"
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
              value: "Whatsapp"
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ]
        }
      ]
    });
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  getName(): string {
    return "Navbar 10";
  }

  render() {
    const navActive = this.getComponentState("navActive");
    return (
      <div className={`${this.decorateCSS("container")} ${this.decorateCSS(this.getPropValue("position"))} `}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
            <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
          </div>
          <div className={this.decorateCSS("down-page")}>
            <div className={this.decorateCSS("leftItem")}>{this.getPropValue("leftItem")}</div>
            <div className={this.decorateCSS("bar")}>
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return (
                    <ComposerLink key={indexItemList} path={data.url}>
                      <span className={this.decorateCSS("data-value")}>{data.item}</span>
                    </ComposerLink>
                  );
                }
              )}
            </div>
            <div className={this.decorateCSS("right")}>
              {this.castToObject<[]>("rightIcon").map((icons: any) => {
                return (
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("icons") }}
                    name={icons.icon}
                  />
                );
              })}
              <ComposerLink path={this.getPropValue("url")}>
                <span className={this.decorateCSS("rightItem")}>{this.getPropValue("rightItem")}</span>
              </ComposerLink>
            </div>
          </div>
          <div className={this.decorateCSS("responsive")}>
            <div className={this.decorateCSS("navbar")}>
              <ComposerIcon
                name={this.getPropValue("hamburger-icon")}
                propsIcon={{
                  className: `${this.decorateCSS("hamburger-icon")}  `,
                  onClick: () => {
                    this.navClick();
                  },
                }}
              />
            </div>
            {navActive && (
              <div className={this.decorateCSS("down-page")}>
                <div className={this.decorateCSS("leftItem")}>{this.getPropValue("leftItem")}</div>
                <div className={this.decorateCSS("bar")}>
                  {this.castToObject<[]>("itemList").map(
                    (data: any, indexItemList: number) => {
                      return (
                        <ComposerLink key={indexItemList} path={data.url}>
                          <span className={this.decorateCSS("data-value")}>{data.item}</span>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
                <div className={this.decorateCSS("right")}>
                  {this.castToObject<[]>("rightIcon").map((icons: any) => {
                    return (
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("icons") }}
                        name={icons.icon}
                      />
                    );
                  })}
                  <ComposerLink path={this.getPropValue("url")}>
                    <span className={this.decorateCSS("rightItem")}>{this.getPropValue("rightItem")}</span>
                  </ComposerLink>
                </div>
              </div>
            )}
          </div>
          <div className={this.decorateCSS("responsive-mobil")}>
            <div className={this.decorateCSS("navbar")}>
              <ComposerIcon
                name={this.getPropValue("hamburger-icon")}
                propsIcon={{
                  className: `${this.decorateCSS("hamburger-icon")}  `,
                  onClick: () => {
                    this.navClick();
                  },
                }}
              />
            </div>
            {navActive && (
              <div className={this.decorateCSS("down-page")}>
                <div className={this.decorateCSS("bar")}>
                  {this.castToObject<[]>("itemList").map(
                    (data: any, indexItemList: number) => {
                      return (
                        <ComposerLink key={indexItemList} path={data.url}>
                          <span className={this.decorateCSS("data-value")}>{data.item}</span>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
                <div className={this.decorateCSS("right")}>
                  {this.castToObject<[]>("rightIcon").map((icons: any) => {
                    return (
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("icons") }}
                        name={icons.icon}
                      />
                    );
                  })}
                  <ComposerLink path={this.getPropValue("url")}>
                    <span className={this.decorateCSS("rightItem")}>{this.getPropValue("rightItem")}</span>
                  </ComposerLink>
                </div>
                <div className={this.decorateCSS("leftItem")}>{this.getPropValue("leftItem")}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar10;