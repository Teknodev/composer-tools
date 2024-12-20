import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface Item {
  title: string;
  navigate_to: string;
  sub_items: Array<Item>;
  menu_type: string;
}
interface ButtonType {
  text: JSX.Element;
  link: string;

}
const menuType = {
  selectItems: ["Dropdown", "Normal"],
};

class Navbar1 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "page",
      key: "image-url",
      displayer: "Image Url",
      value: "",
    });

    this.addProp({
      type: "icon",
      key: "hamburger_icon",
      displayer: "Hamburger Icon",
      value:
        "IoMenu",
    });

    this.addProp({
      type: "string",
      key: "logo_text",
      displayer: "Logo Text",
      value:
        "Lorem",
    });
    this.addProp({
      type: "page",
      key: "logo_text_url",
      displayer: "Logo Text Url",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "icon",
      displayer: "Down Icon",
      key: "down_icon",
      value: "FaChevronDown",
    });

    this.addProp({
      type: "icon",
      displayer: "Right Icon",
      key: "right_icon",
      value: "FaChevronRight",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Hakkımızda",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Section 1",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
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
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                          ],
                        },
                      ],
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
                      key: "title",
                      displayer: "Title",
                      value: "Section 2",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
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
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
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
              key: "title",
              displayer: "Title",
              value: "Ürünler",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Section 1",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
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
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                          ],
                        },
                      ],
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
                      key: "title",
                      displayer: "Title",
                      value: "Section 2",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
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
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
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
              key: "title",
              displayer: "Title",
              value: "Materyaller",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "select",
              key: "menu_type",
              displayer: "Type",
              value: "Normal",
              additionalParams: menuType,
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Section 1",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "1 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
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
                              key: "title",
                              displayer: "Title",
                              value: "2 Column Blog",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                          ],
                        },
                      ],
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
                      key: "title",
                      displayer: "Title",
                      value: "Section 2",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: "",
                    },
                    {
                      type: "select",
                      key: "menu_type",
                      displayer: "Type",
                      value: "Normal",
                      additionalParams: menuType,
                    },
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Value 1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
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
                              key: "title",
                              displayer: "Title",
                              value: "Value 2",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttonList",
      displayer: "Button",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "buttonItems",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              value: "Learn More",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Link",
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["hamburgerNavActive"] = true;
    this.state["componentProps"]["navActive"] = null;
    this.state["componentProps"]["subNavActive"] = null;
  }

  getName(): string {
    return "Navbar 1";
  }

  hamburgerNavClick() {
    let value: boolean = this.getComponentState("hamburgerNavActive");
    this.setComponentState("hamburgerNavActive", !value);
  }

  navCLick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }
  subNavCLick(index: any) {
    let value = this.getComponentState("subNavActive");
    this.setComponentState("subNavActive", value === index ? null : index);
  }

  render() {
    const selectValue = this.getPropValue("select");
    const logoImage = this.getPropValue("image");
    const logoText = this.getPropValue("logo_text");
    const imageUrl = this.getPropValue("image-url");
    const textUrl = this.getPropValue("logo_text_url");
    const items = this.castToObject<Item>("items");

    return (
      <div
        className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
          }`}
      >
        <div className={this.decorateCSS("max-content")}>
          {logoImage ?
            <ComposerLink path={imageUrl}>
              <img className={this.decorateCSS("logo")} src={logoImage} alt="" />
            </ComposerLink> :
            <ComposerLink path={textUrl}>
              <div className={this.decorateCSS("logo-text")}>{logoText}</div>
            </ComposerLink>
          }
          <div className={this.decorateCSS("pc-navigator")}>
            <div className={this.decorateCSS("items")}>
              {this.castToObject<[]>("items").map((item: Item, indexItemList: number) => {
                return (
                  <div className={this.decorateCSS("menu-item")}>
                    <div className={this.decorateCSS("item")}>
                      <ComposerLink path={item.navigate_to}>
                        <span className={this.decorateCSS("title")} >
                          {item.title}
                          {item.sub_items?.length > 0 &&
                            item.menu_type === "Dropdown" && (
                              <ComposerIcon
                                name={this.getPropValue("down_icon")}
                                propsIcon={{ className: this.decorateCSS("icon") }}
                              />
                            )}
                        </span>
                      </ComposerLink>
                      {item.menu_type !== "Normal" && (
                        <div className={this.decorateCSS("sub-items")}>
                          {item.sub_items?.length > 0 &&
                            item.sub_items.map((subItem) => (
                              <div className={this.decorateCSS("sub-item")}>
                                <ComposerLink path={subItem.navigate_to}>
                                  <span className={this.decorateCSS("sub-item-text")}>
                                    {subItem.title}
                                    {subItem.sub_items?.length > 0 &&
                                      subItem.menu_type === "Dropdown" && (
                                        <ComposerIcon
                                          name={this.getPropValue("right_icon")}
                                          propsIcon={{
                                            className: this.decorateCSS("right_icon"),
                                          }}
                                        />
                                      )}
                                  </span>
                                </ComposerLink>
                                {
                                  subItem.menu_type !== "Normal" && (
                                    <div className={this.decorateCSS("list")}>
                                      {subItem.sub_items?.length > 0 &&
                                        subItem.sub_items.map((subItem2) => (
                                          <span className={this.decorateCSS("list-item")}>
                                            <ComposerLink path={subItem2.navigate_to}>
                                              {subItem2.title}
                                            </ComposerLink>
                                          </span>
                                        ))}
                                    </div>
                                  )
                                }
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={this.decorateCSS("right")}>
            <div className={this.decorateCSS("button-child")}>
              {this.castToObject<ButtonType[]>("buttonList").map(
                (data: any, indexButtonList: number) => {
                  return (
                    <ComposerLink path={data.link}>
                      <button className={this.decorateCSS("button")}>{this.castToString(data.text)}</button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
            <div className={this.decorateCSS("hamburger-navbar")}>
              <div className={this.decorateCSS("hamburger-icon-container")}>
                <ComposerIcon
                  name={this.getPropValue("hamburger_icon")}
                  propsIcon={{
                    className: this.decorateCSS("hamburger-icon"),
                    onClick: () => {
                      this.hamburgerNavClick();
                    },
                  }} />
              </div>
            </div>
          </div>




          <div className={this.decorateCSS("navigator-mobile")}>
            {this.getComponentState("hamburgerNavActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("items").map(
                  (item: Item, indexItemList: number) => {
                    return (
                      <div className={this.decorateCSS("menu-item")}>
                        <div
                          className={this.decorateCSS("item")}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("title")} onClick={() => {
                              this.navCLick();
                            }}>
                              <div className={this.decorateCSS("title-content")}>
                                <span className={this.decorateCSS("title-text")}>{item.title} </span>
                                {item.sub_items?.length > 0 &&
                                  item.menu_type === "Dropdown" && (
                                    <ComposerIcon name={this.getPropValue("down_icon")} />
                                  )}
                              </div>


                            </div>
                          </ComposerLink>

                          {item.menu_type !== "Normal" && (
                            <div className={this.decorateCSS("sub-items")}>
                              {this.getComponentState("navActive") &&
                                item.sub_items?.length > 0 &&
                                item.sub_items.map((subItem, subIndex) => (
                                  <>
                                    <div
                                      className={this.decorateCSS("sub-item")}>
                                      <ComposerLink path={subItem.navigate_to}>
                                        <div className={this.decorateCSS("sub-item-title")} onClick={() => {
                                          this.subNavCLick(subIndex);
                                        }}>
                                          <div className={this.decorateCSS("sub-item-title-content")}>
                                            <span className={this.decorateCSS("sub-item-title-text")}>{subItem.title} </span>
                                            {subItem.sub_items?.length > 0 &&
                                              subItem.menu_type === "Dropdown" && (
                                                <ComposerIcon
                                                  name={this.getPropValue("down_icon")}
                                                  propsIcon={{
                                                    className: this.decorateCSS("down-icon")
                                                  }}
                                                />
                                              )}
                                          </div>
                                        </div>
                                      </ComposerLink>
                                      {this.getComponentState("subNavActive") === subIndex &&
                                        subItem.menu_type !== "Normal" && (
                                          <div className={this.decorateCSS("list")}>
                                            {subItem.sub_items?.map((subItem2) => (
                                              <ComposerLink path={subItem2.navigate_to}>
                                                <span className={this.decorateCSS("list-item")}>
                                                  {subItem2.title}
                                                </span>
                                              </ComposerLink>
                                            ))}
                                          </div>
                                        )}
                                    </div>

                                  </>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar1;
