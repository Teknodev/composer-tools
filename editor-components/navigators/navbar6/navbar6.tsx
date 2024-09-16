import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
      ],
    });

    this.state["componentProps"]["navActive"] = false;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {
    const leftItems = this.getPropValue("left-items");
    const rightItems = this.getPropValue("right-items");
    const navActive = this.getComponentState("navActive");

    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("content-left")}>
              <img src={this.getPropValue("center-image")} alt="logo" />
            </div>

            <div className={this.decorateCSS("content-right")}>
              {navActive && (
                <div
                  className={`${this.decorateCSS("navbar-child")} ${
                    navActive ? this.decorateCSS("active") : this.decorateCSS("inactive")
                  }`}
                >
                  {[...leftItems, ...rightItems].map(
                    (item: any, index: number) => (
                      <ComposerLink key={index} path={item.value[1].value}>
                        <h3>{item.value[0].value}</h3>
                      </ComposerLink>
                    )
                  )}
                </div>
              )}
              
              <div
                className={this.decorateCSS("hamburger-container")}
                onClick={() => this.navClick()}
              >
                <span
                  className={`${this.decorateCSS("hamburger")} ${
                    navActive ? this.decorateCSS("open") : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar6;