import { BaseNavigator } from "../../EditorComponent";
import React, { useState } from "react";
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
      type: "image",
      key: "center-image",
      displayer: "Center Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp(
      {
        type: "array",
        key: "extendable",
        displayer: "Extendable",
        value: [
          {
            type: "object",
            key: "item",
            displayer: "Main Text",
            value: [
              {
                type: "string",
                key: "label",
                value: "HOME",
                displayer: "Text",
              },
              {
                type: "page",
                key: "link",
                value: "",
                displayer: "Navigate To",
              },
              {
                type: "array",
                key: "section",
                displayer: "Home Section",
                value: [
                  {
                    type: "object",
                    key: "item1",
                    displayer: "Home Section Item",
                    value: [
                      {
                        type: "string",
                        key: "text",
                        value: "Creative 01",
                        displayer: "Info Text 1",
                      },
                      {
                        type: "page",
                        key: "link",
                        value: "",
                        displayer: "Navigate To",
                      },
                      {
                        type: "image",
                        key: "image",
                        value: "https://picsum.photos/200/200",
                        displayer: "Image",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item2",
                    displayer: "Home Section Item",
                    value: [
                      {
                        type: "string",
                        key: "text",
                        value: "Creative 02",
                        displayer: "Info Text 2",
                      },
                      {
                        type: "page",
                        key: "link",
                        value: "",
                        displayer: "Navigate To",
                      },
                      {
                        type: "image",
                        key: "image",
                        value: "https://picsum.photos/200/200",
                        displayer: "Image",
                      },
                    ],
                  },
                  {
                    type: "object",
                    key: "item3",
                    displayer: "Home Section Item",
                    value: [
                      {
                        type: "string",
                        key: "text",
                        value: "Creative 03",
                        displayer: "Info Text 3",
                      },
                      {
                        type: "page",
                        key: "link",
                        value: "",
                        displayer: "Navigate To",
                      },
                      {
                        type: "image",
                        key: "image",
                        value: "https://picsum.photos/200/200",
                        displayer: "Image",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]
      }

    )

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
              value: "ABOUT",
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

    this.state["componentProps"]["navActive"] = false;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {
    const extendable = this.getPropValue("extendable");
    const rightItems = this.getPropValue("right-items");
    const navActive = this.getComponentState("navActive");

    // console.log(extendable[0].value[2].value[0].value , "arr")

    console.log(extendable[0].value[2].value, "arr")


    console.log(extendable[0].value[2].displayer)
    // console.log(rightItems, "right")

    return (
      <div
        className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
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
                  className={`${this.decorateCSS("navbar-child")} ${navActive ? this.decorateCSS("active") : this.decorateCSS("inactive")
                    }`}
                >
                  {[...extendable, ...rightItems].map((item: any, index: number) => (
                    <>
                      <ComposerLink path={item.value[1].value}>
                        {item.displayer === "Main Text" ? (
                          <h3 className={this.decorateCSS("extendable")}>
                            {item.value[0].value}
                            {item.value[2].value.length > 0 && <div className={this.decorateCSS("dropdown-content")}>
                                {item.value[2].value.map((dropdownItem: any, index: number) => {
                                  return (
                                    <a href={dropdownItem.value[1].value}>
                                      <div key={index} className={this.decorateCSS("image-container")}>
                                      <img src={dropdownItem.value[2].value} alt="" className={this.decorateCSS("image")}/>
                                      <div className={this.decorateCSS("text-overlay")}>{dropdownItem.value[0].value}</div>
                                    </div>
                                    </a>
                                )})}
                              </div>}
                          </h3>
                        ) : (
                          <h3>{item.value[0].value}</h3>
                        )}
                      </ComposerLink>
                    </>
                  ))}
                </div>

              )}

              <div
                className={this.decorateCSS("hamburger-container")}
                onClick={() => this.navClick()}
              >
                <span
                  className={`${this.decorateCSS("hamburger")} ${navActive ? this.decorateCSS("open") : ""
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