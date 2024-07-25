import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
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
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "icon",
      key: "hamburger",
      displayer: "Nav Bar",
      value: "GiHamburgerMenu",
    });
    this.addProp({
      type: "array",
      key: "iconsSocial",
      displayer: "Social Media",
      value: [
        {
          type: "object",
          key: "icons",
          displayer: "Items",
          value: [
            {
              type: "icon",
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
          key: "icons",
          displayer: "Items",
          value: [
            {
              type: "icon",
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
          key: "icons",
          displayer: "Items",
          value: [
            {
              type: "icon",
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
          key: "icons",
          displayer: "Items",
          value: [
            {
              type: "icon",
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
          key: "icons",
          displayer: "Items",
          value: [
            {
              type: "icon",
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

    this.setComponentState("navActive", false);
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    const navItems = this.castToObject<[]>("main-navigator");
    const hasNavItems = navItems.length > 0;
    const socialIcons = this.castToObject<[]>("iconsSocial");
    const hasSocialIcons = socialIcons.length > 0;

    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.getPropValue("image") && (
              <div className={this.decorateCSS("img-container")}>
                <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                  alt=""
                />
              </div>
            )}
            {hasNavItems && (
              <div
                className={`${this.decorateCSS("list-items")} ${
                  this.getComponentState("navActive") &&
                  this.decorateCSS("active")
                }`}
              >
                {this.castToObject<[]>("main-navigator").map(
                  (data: any, index: number) => {
                    return (
                      <ul key={index}>
                        <ComposerLink path={data.url}>
                          <li className={this.decorateCSS("list-item")}>
                            {data.item}
                          </li>
                        </ComposerLink>
                      </ul>
                    );
                  }
                )}
              </div>
            )}
            {hasSocialIcons && (
              <div className={this.decorateCSS("icon-items")}>
                {this.castToObject<[]>("iconsSocial").map(
                  (data: any, index: number) => {
                    return (
                      <ul className={this.decorateCSS("icon-ul")} key={index}>
                        <ComposerLink path={data.url}>
                          <li className={this.decorateCSS("icon-item")}>
                            <ComposerIcon name={data.icon} />
                          </li>
                        </ComposerLink>
                      </ul>
                    );
                  }
                )}
              </div>
            )}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar7;
