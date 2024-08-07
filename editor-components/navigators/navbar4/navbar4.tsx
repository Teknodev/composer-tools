import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface LeftItem {
  label: string;
  link: string;
}

interface RightItem {
  icon: string;
  link: string;
}
class Navbar4 extends BaseNavigator {
  getName(): string {
    return "Navbar 4";
  }

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "img-ham",
      displayer: "Image",
      value: "IoMenu",
    });
    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
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
              type: "string",
              key: "label",
              value: "Home",
              displayer: "Text",
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
              type: "string",
              key: "label",
              value: "About",
              displayer: "Text",
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
              type: "string",
              key: "label",
              value: "Contact",
              displayer: "Text",
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

    this.addProp({
      type: "string",
      key: "center-text",
      displayer: "Center Text",
      value: "Company Name",
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Right Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value: "FaFacebook",
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
              value: "AiFillTwitterCircle",
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
              value: "FaLinkedin",
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
    this.state["componentProps"]["navActive"] = true;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    const leftItems = this.castToObject<[]>("left-items");
    const hasLeftItems = leftItems && leftItems.length > 0;
    const rightItems = this.castToObject<[]>("right-items");
    const hasRightItems = rightItems && rightItems.length > 0;

    const midTextClass =
      hasLeftItems && hasRightItems
        ? `${this.decorateCSS("mid-text--center")}`
        : hasLeftItems
        ? `${this.decorateCSS("mid-text--end")}`
        : `${this.decorateCSS("mid-text--start")}`;

    console.log(midTextClass);
    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {hasLeftItems && (
              <div className={this.decorateCSS("content-left")}>
                {leftItems.map((leftItem: LeftItem) => {
                  return (
                    <ComposerLink path={leftItem.link}>
                      <span className={this.decorateCSS("text")}>
                        {leftItem.label}
                      </span>
                    </ComposerLink>
                  );
                })}
              </div>
            )}

            <div>
              <ComposerIcon
                propsIcon={{
                  onClick: () => this.navClick(),
                  className: `${this.decorateCSS("img-hamburger")} ${
                    this.getComponentState("navActive")
                      ? this.decorateCSS("rotate")
                      : ""
                  }    `,
                }}
                name={this.getPropValue("img-ham")}
              />
              {this.getComponentState("navActive") && (
                <div className={this.decorateCSS("navbar-child")}>
                  {this.castToObject<[LeftItem]>("left-items").map(
                    (item: LeftItem, index: number) => {
                      return (
                        <ComposerLink key={index} path={item.link}>
                          <h3 key={index}>{item.label}</h3>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            {this.castToString(this.getPropValue("center-text")) && (
              <div className={midTextClass}>
                <h1 className={this.decorateCSS("text")}>
                  {this.castToString(this.getPropValue("center-text"))}
                </h1>
              </div>
            )}

            {hasRightItems && (
              <div className={this.decorateCSS("content-right")}>
                {rightItems.map((rightItem: RightItem) => {
                  return (
                    <ComposerLink path={rightItem.link}>
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("icons") }}
                        name={rightItem.icon}
                      />
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar4;
