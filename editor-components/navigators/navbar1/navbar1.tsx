import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface Item {
  title: JSX.Element;
  navigate_to: string;
  sub_items: Array<Item>;
  menu_type: string;
}

interface Button {
  text: string;
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
      value: "IoMenu",
    });

    this.addProp({
      type: "string",
      key: "logo_text",
      displayer: "Logo Text",
      value: "Lorem",
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
    const logoText = this.castToString(this.getPropValue("logo_text"));
    const imageUrl = this.getPropValue("image-url");
    const textUrl = this.getPropValue("logo_text_url");
    const items = this.castToObject<[]>("items");
    const hasItems = items && items.length > 0;
    const buttonList = this.castToObject<Button[]>("buttonList");
    const hasButtonList = buttonList && buttonList.length > 0;

    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          {logoImage ? (
            <ComposerLink path={imageUrl}>
              <img src={logoImage} width={200} alt="Logo" />
            </ComposerLink>
          ) : logoText ? (
            (console.log(logoText),
            (
              <ComposerLink path={textUrl}>
                <span className={this.decorateCSS("logo-text")}>
                  {this.getPropValue("logo_text")}
                </span>
              </ComposerLink>
            ))
          ) : null}

          {hasItems && (
            <nav className={this.decorateCSS("pc-navigator")}>
              <div
                className={`${this.decorateCSS("items")} ${
                  selectValue === "Left"
                    ? this.decorateCSS("left")
                    : selectValue === "Right"
                    ? this.decorateCSS("right")
                    : selectValue === "Center" && ""
                }`}
              >
                {items.map((item: Item, indexItemList: number) => {
                  const isTitleExist = this.castToString(item.title);

                  if (isTitleExist)
                    return (
                      <div
                        className={this.decorateCSS("menu-item")}
                        key={indexItemList}
                      >
                        <ComposerLink path={item.navigate_to}>
                          <div className={this.decorateCSS("item")}>
                            <span className={this.decorateCSS("title")}>
                              {item.title}{" "}
                              {item.sub_items?.length > 0 &&
                                item.menu_type === "Dropdown" && (
                                  <ComposerIcon
                                    name={this.getPropValue("down_icon")}
                                    propsIcon={{
                                      className: this.decorateCSS("icon"),
                                    }}
                                  />
                                )}
                            </span>
                            {item.menu_type !== "Normal" && (
                              <div className={this.decorateCSS("sub-items")}>
                                {item.sub_items?.length > 0 &&
                                  item.sub_items.map((subItem, index) => (
                                    <div
                                      className={this.decorateCSS("sub-item")}
                                      key={index}
                                    >
                                      <span
                                        className={this.decorateCSS(
                                          "sub-item-text"
                                        )}
                                      >
                                        {subItem.title}{" "}
                                        {subItem.sub_items?.length > 0 &&
                                          subItem.menu_type === "Dropdown" && (
                                            <ComposerIcon
                                              name={this.getPropValue(
                                                "right_icon"
                                              )}
                                              propsIcon={{
                                                className:
                                                  this.decorateCSS("icon"),
                                              }}
                                            />
                                          )}
                                      </span>
                                      {subItem.menu_type !== "Normal" && (
                                        <div
                                          className={this.decorateCSS("list")}
                                        >
                                          {subItem.sub_items?.length > 0 &&
                                            subItem.sub_items.map(
                                              (subItem2, index) => (
                                                <span
                                                  className={this.decorateCSS(
                                                    "list-item"
                                                  )}
                                                  key={index}
                                                >
                                                  {subItem2.title}
                                                </span>
                                              )
                                            )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        </ComposerLink>
                      </div>
                    );
                })}
              </div>
            </nav>
          )}

          {hasButtonList && (
            <div className={this.decorateCSS("button-child")}>
              {this.castToObject<Button[]>("buttonList").map(
                (data: any, indexButtonList: number) => {
                  return (
                    <ComposerLink key={indexButtonList} path={data.link}>
                      <button className={this.decorateCSS("button")}>
                        {data.text}
                      </button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
          )}

          <div className={this.decorateCSS("hamburger-navbar")}>
            <ComposerIcon
              name={this.getPropValue("hamburger_icon")}
              propsIcon={{
                className: this.decorateCSS("hamburger-icon"),
                onClick: () => {
                  this.hamburgerNavClick();
                },
              }}
            />
          </div>

          {hasItems && (
            <nav className={this.decorateCSS("navigator-mobile")}>
              {this.getComponentState("hamburgerNavActive") && (
                <div className={this.decorateCSS("navbar-child")}>
                  {items.map((item: Item, indexItemList: number) => {
                    return (
                      <div
                        className={this.decorateCSS("menu-item")}
                        key={indexItemList}
                      >
                        <div
                          className={this.decorateCSS("item")}
                          onClick={() => {
                            this.navCLick();
                          }}
                        >
                          <ComposerLink path={item.navigate_to}></ComposerLink>
                          <div className={this.decorateCSS("title")}>
                            <span className={this.decorateCSS("title-text")}>
                              {item.title}{" "}
                            </span>
                            {item.sub_items?.length > 0 &&
                              item.menu_type === "Dropdown" && (
                                <ComposerIcon
                                  name={this.getPropValue("down_icon")}
                                />
                              )}
                          </div>
                        </div>

                        {item.menu_type !== "Normal" && (
                          <div className={this.decorateCSS("sub-items")}>
                            {this.getComponentState("navActive") &&
                              item.sub_items?.length > 0 &&
                              item.sub_items.map((subItem, subIndex) => (
                                <>
                                  <div
                                    className={this.decorateCSS("sub-item")}
                                    onClick={() => {
                                      this.subNavCLick(subIndex);
                                    }}
                                    key={subIndex}
                                  >
                                    <div
                                      className={this.decorateCSS(
                                        "sub-item-title"
                                      )}
                                    >
                                      <span
                                        className={this.decorateCSS(
                                          "sub-item-title-text"
                                        )}
                                      >
                                        {subItem.title}{" "}
                                      </span>
                                      {subItem.sub_items?.length > 0 &&
                                        subItem.menu_type === "Dropdown" && (
                                          <ComposerIcon
                                            name={this.getPropValue(
                                              "down_icon"
                                            )}
                                            propsIcon={{
                                              className:
                                                this.decorateCSS("down-icon"),
                                            }}
                                          />
                                        )}
                                    </div>
                                  </div>
                                  {this.getComponentState("subNavActive") ===
                                    subIndex &&
                                    subItem.menu_type !== "Normal" && (
                                      <div className={this.decorateCSS("list")}>
                                        {subItem.sub_items?.map((subItem2) => (
                                          <span
                                            className={this.decorateCSS(
                                              "list-item"
                                            )}
                                            key={subIndex}
                                          >
                                            {subItem2.title}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                </>
                              ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </nav>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar1;
