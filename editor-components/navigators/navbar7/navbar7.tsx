import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
class Navbar7 extends BaseNavigator {
  getName(): string {
    return "Navbar 7";
  }

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "http://lark.mondotheme.com/wp-content/uploads/2016/01/logo-light.png",
    });

    this.addProp({
      type: "icon",
      key: "search",
      displayer: "Search Bar",
      value: "CiSearch",
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
              type: "string",
              key: "icon",
              displayer: "Twitter",
              value: "CiTwitter",
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
              type: "string",
              key: "icon",
              displayer: "Facebook",
              value: "CiFacebook",
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
              type: "string",
              key: "icon",
              displayer: "Google",
              value: "FaGooglePlusG",
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
              type: "string",
              key: "icon",
              displayer: "Vk",
              value: "SlSocialVkontakte",
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
              type: "string",
              key: "icon",
              displayer: "Wifi",
              value: "CiWifiOn",
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
              value: "Features",
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
              value: "Explore",
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
              value: "About",
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
              value: "Contact",
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

    this.state["componentProps"]["navActive"] = true;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("img-container")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt=""
              />
            </div>
            <div className={this.decorateCSS("list-items")}>
              {this.castToObject<[]>("main-navigator").map(
                (data: any, index: number) => {
                  return (
                    <ul key={index}>
                      <li>{data.item}</li>
                    </ul>
                  );
                }
              )}
              <ComposerIcon name={this.getPropValue("search")} />
            </div>
            <div className={this.decorateCSS("icon-items")}>
              {this.castToObject<[]>("icons").map(
                (data: any, index: number) => {
                  console.log(data);

                  return (
                    <ul key={index}>
                      <li>
                        <ComposerIcon name={data.icon} />
                      </li>
                    </ul>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar7;
