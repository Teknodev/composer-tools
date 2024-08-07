import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type LeftItem = {
  label: string;
  link: string;
};

type RightItem = {
  label: string;
  link: string;
};

type CombinedItem = {
  label: string;
  link: string;
};
class Navbar6 extends BaseNavigator {
  getName(): string {
    return "Navbar 6";
  }

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "icon",
      key: "hamburger",
      displayer: "Hamburger Icon",
      value: "IoMenu",
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
              value: "ABOUT US",
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
              value: "SERVICES",
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
              value: "PRICING",
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
      type: "image",
      key: "center-image",
      displayer: "Center Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
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
              type: "string",
              key: "label",
              value: "PORTFOLIO",
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
              value: "BLOG",
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
              value: "CONTACT",
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
    this.state["componentProps"]["navActive"] = true;
  } //constructor ends

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {
    const leftItems = this.castToObject<[]>("left-items");
    const hasleftItems = leftItems.length > 0;
    const rightItems = this.castToObject<[]>("right-items");
    const hasrightItems = rightItems.length > 0;

    //Combining left and right items (arrays)
    const combinedItems = [...leftItems, ...rightItems];

    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {hasleftItems && (
              <div className={this.decorateCSS("content-left")}>
                {leftItems.map((leftItem: LeftItem, index: number) => {
                  return (
                    <ComposerLink path={leftItem.link} key={index}>
                      <span className={this.decorateCSS("text")}>
                        {leftItem.label}
                      </span>
                    </ComposerLink>
                  );
                })}
              </div>
            )}

            {this.getPropValue("center-image") && (
              <div className={this.decorateCSS("middle")}>
                <img src={this.getPropValue("center-image")} alt=""></img>
              </div>
            )}

            {hasrightItems && (
              <div className={this.decorateCSS("content-right")}>
                {rightItems.map((rightItem: RightItem, index: number) => {
                  return (
                    <ComposerLink path={rightItem.link} key={index}>
                      <span className={this.decorateCSS("text")}>
                        {rightItem.label}
                      </span>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
            <ComposerIcon
              propsIcon={{
                className: `${this.decorateCSS("img-hamburger")} ${
                  this.getComponentState("navActive")
                    ? this.decorateCSS("rotate")
                    : ""
                }`,
                onClick: () => this.navClick(),
              }}
              name={this.getPropValue("hamburger")}
            />
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {combinedItems.map((item: CombinedItem, index: number) => (
                  <ComposerLink key={index} path={item.link}>
                    <h3 key={index}>{item.label}</h3>
                  </ComposerLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar6;
