import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

//CLASS
class Navbar4 extends BaseNavigator {
  getName(): string {
    return "Navbar 4";
  }

  //constructor
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "img-ham",
      displayer: "Image",
      value:
        "IoMenu",
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
    this.state["componentProps"]["navActive"] = true;
  } //constructor end

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    //RETURN
    return (
      <div
        className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
          }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => {
                return (
                  <ComposerLink path={leftItem.value[1].value}>
                    <span className={this.decorateCSS("text")}>
                      {leftItem.value[0].value}
                    </span>
                  </ComposerLink>
                );
              })}
            </div>

            <div>
              <ComposerIcon

                propsIcon={{
                  onClick: () => this.navClick(),
                  className: `${this.decorateCSS("img-hamburger")} ${this.getComponentState("navActive")
                    ? this.decorateCSS("rotate")
                    : ""
                    }    `
                }}
                name={this.getPropValue("img-ham")}

              />
              {this.getComponentState("navActive") && (
                <div className={this.decorateCSS("navbar-child")}>
                  {this.castToObject<[]>("left-items").map(
                    (item: any, index: number) => {
                      return (
                        <ComposerLink key={index} path={item.value[1].value}>
                          <h3 key={index}>{item.value[0].value}</h3>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            <div className={this.decorateCSS("middle")}>
              <h1 className={this.decorateCSS("center-text")}>
                {this.getPropValue("center-text")}
              </h1>
            </div>

            <div className={this.decorateCSS("content-right")}>
              {this.getPropValue("right-items").map((leftItem: any) => {
                return (
                  <ComposerLink path={leftItem.value[1].value}>
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("icons") }}
                      name={leftItem.value[0].value}
                    />
                  </ComposerLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
    //RETURN End
  }
}
//End Class

//Higher Order Component
export default Navbar4;
