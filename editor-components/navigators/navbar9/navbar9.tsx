import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Navbar9 extends BaseNavigator {
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
      type: "icon",
      key: "hamburger-icon",
      displayer: "Hamburger Icon",
      value: "RxHamburgerMenu",
    });
    this.addProp({
      type: "object",
      key: "title",
      displayer: "Title",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "DESERT GLOW",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
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
      value: "27 13 Lowe Haven, Apt. 13 East Johnathon, TN 99367",
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
              value: "Phone",
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
              value: "Whatsapp",
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
      key: "rightContent",
      displayer: "Right Content",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "FaPhoneVolume",
              displayer: "Icon",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "+ 1235 2355 98",
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

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  getName(): string {
    return "Navbar 9";
  }

  renderRightContent() {
    return this.castToObject<[]>("rightContent").map((item: any) => {
      return (
        <div className={this.decorateCSS("rightItem")}>
          <ComposerIcon propsIcon={{ className: this.decorateCSS("icons") }} name={item.icon} />
          <ComposerLink path={item.url}>
            <span className={this.decorateCSS("text")}>{item.text}</span>
          </ComposerLink>
        </div>
      );
    });
  }

  render() {
    const navActive = this.getComponentState("navActive");
    const title = this.castToObject<any>("title");

    return (
      <div
        className={`${this.decorateCSS("container")} ${this.decorateCSS(
          this.getPropValue("position")
        )} `}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("header")}>
              <ComposerLink path={title.link}>
                <span className={this.decorateCSS("title")}>{title.text}</span>
              </ComposerLink>
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
            </div>
            <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
          </div>
          <div className={this.decorateCSS("down-page")}>
            <div className={this.decorateCSS("leftItem")}>{this.getPropValue("leftItem")}</div>
            <div className={this.decorateCSS("bar")}>
              {this.castToObject<[]>("itemList").map((data: any, indexItemList: number) => {
                return (
                  <ComposerLink key={indexItemList} path={data.url}>
                    <span className={this.decorateCSS("data-value")}>{data.item}</span>
                  </ComposerLink>
                );
              })}
            </div>
            <div className={this.decorateCSS("right")}>{this.renderRightContent()}</div>
          </div>
          <div className={this.decorateCSS("responsive")}>
            {navActive && (
              <div className={this.decorateCSS("down-page")}>
                <div className={this.decorateCSS("leftItem")}>{this.getPropValue("leftItem")}</div>
                <div className={this.decorateCSS("bar")}>
                  {this.castToObject<[]>("itemList").map((data: any, indexItemList: number) => {
                    return (
                      <ComposerLink key={indexItemList} path={data.url}>
                        <span className={this.decorateCSS("data-value")}>{data.item}</span>
                      </ComposerLink>
                    );
                  })}
                </div>
                {this.renderRightContent()}
              </div>
            )}
          </div>
          <div className={this.decorateCSS("responsive-mobil")}>
            {navActive && (
              <div className={this.decorateCSS("down-page")}>
                <div className={this.decorateCSS("bar")}>
                  {this.castToObject<[]>("itemList").map((data: any, indexItemList: number) => {
                    return (
                      <ComposerLink key={indexItemList} path={data.url}>
                        <span className={this.decorateCSS("data-value")}>{data.item}</span>
                      </ComposerLink>
                    );
                  })}
                </div>
                {this.renderRightContent()}
                <div className={this.decorateCSS("leftItem")}>{this.getPropValue("leftItem")}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar9;
