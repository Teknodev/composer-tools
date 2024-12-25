import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";
import { Base } from "composer-tools/composer-base-components/base/base";

interface Item {
  title: JSX.Element;
  navigate_to: string;
  sub_items: Array<Item>;
}
interface ButtonType {
  text: JSX.Element;
  link: string;

}

class Navbar1 extends BaseNavigator {
  navigatorRef: React.RefObject<any>;
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image_light",
      displayer: "Image Light",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "image",
      key: "image_dark",
      displayer: "Image Dark",
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
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Default",
      additionalParams: {
        selectItems: ["Normal", "Absolute", "StickyColorful", "StickyTransparent"]
      }
    })

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
      type: "boolean",
      displayer: "Language Active",
      key: "languageActive",
      value: true,
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
              value: "About Us",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                      ]
                    }
                  ]
                }
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
    this.setComponentState("hamburgerNavActive", true)
    this.setComponentState("navActive", null)
    this.setComponentState("subNavActive", null)
    this.setComponentState("maxheight", 0);
  }

  getName(): string {
    return "Navbar 1";
  }

  hamburgerNavClick() {
    let value: boolean = this.getComponentState("hamburgerNavActive");
    this.setComponentState("hamburgerNavActive", !value);
    this.updateMaxHeight();
  }

  navCLick(index: number) {
    let value = this.getComponentState("navActive");
    this.setComponentState("navActive", value === index ? null : index);
    this.updateMaxHeight();
  }
  subNavCLick(index: number) {
    let value = this.getComponentState("subNavActive");
    this.setComponentState("subNavActive", value === index ? null : index);
    this.updateMaxHeight();
  }
  updateMaxHeight(): void {
    const languageElement = document.querySelector(`.${this.decorateCSS("languagemobile")}`) as HTMLElement;
    const navigatorElement = document.querySelector(`.${this.decorateCSS("navigator")}`) as HTMLElement;
    if (languageElement || navigatorElement) {
      const navigatorHeight = navigatorElement.offsetHeight;
      const languageHeight = languageElement.offsetHeight;
      const newMaxHeight = languageHeight + navigatorHeight;
      this.setComponentState("maxheight", newMaxHeight);
    }
  }

  render() {
    const logoText = this.getPropValue("logo_text");
    const imageUrl = this.getPropValue("image-url");
    const textUrl = this.getPropValue("logo_text_url");
    const navActive = this.getComponentState("hamburgerNavActive");
    const logoSrc = this.getPropValue(navActive ? "image_light" : "image_dark");
    return (
      <div
        className={`${this.decorateCSS("container")} ${this.decorateCSS(this.getPropValue("position"))}`}
      >
        <div className={this.decorateCSS("max-content")}>
          {logoSrc ?
            <ComposerLink path={imageUrl}>
              <img className={this.decorateCSS("logo")} src={logoSrc} alt="" />
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
                      {(item.title || ((item.sub_items?.length > 0))) && (
                        <div className={this.decorateCSS("title-wrapper")}>
                          {item.title && (
                            <ComposerLink path={item.navigate_to}>
                              <span className={this.decorateCSS("title")} >
                                {item.title}
                              </span>
                            </ComposerLink>
                          )}
                          {((item.sub_items?.length > 0)) && (
                            <ComposerIcon
                              name={this.getPropValue("down_icon")}
                              propsIcon={{ className: this.decorateCSS("down_icon") }}
                            />
                          )}
                        </div>
                      )}
                      {item.sub_items?.length > 0 && (
                        <div className={this.decorateCSS("sub-items")}>
                          {(item.sub_items?.length > 0) &&
                            item.sub_items.map((subItem: Item) => {
                              return (
                                <div className={this.decorateCSS("sub-item")}>
                                  {(subItem.sub_items.length > 0) && (
                                    <div className={this.decorateCSS("sub-item-text-wrapper")}>
                                      {subItem.sub_items?.length > 0 &&
                                        subItem.sub_items.map((subItem) => {
                                          const subitemExist = this.castToString(subItem.title)
                                          return subitemExist && (
                                            <span className={this.decorateCSS("sub-item-text")}>
                                              <ComposerLink path={subItem.navigate_to}>
                                                {subItem.title}
                                              </ComposerLink>
                                              <div className={this.decorateCSS("list")}>
                                                {(subItem.sub_items.length > 0) && (
                                                  subItem.sub_items.map((subitem: Item) => {
                                                    const subitemExist = this.castToString(subitem.title)
                                                    return subitemExist && (
                                                      <div className={this.decorateCSS("list-item")}>
                                                        <ComposerLink path={subitem.navigate_to}>
                                                          {subitem.title}
                                                        </ComposerLink>
                                                      </div>
                                                    )
                                                  })
                                                )}
                                              </div>

                                            </span>
                                          )
                                        })}
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={this.decorateCSS("right")}>
            {(this.getPropValue("buttonList").length > 0) && (
              <div className={this.decorateCSS("button-child")}>
                {this.castToObject<ButtonType[]>("buttonList").map(
                  (data: any, indexButtonList: number) => {
                    return (
                      <ComposerLink path={data.link}>
                        <Base.Button className={this.decorateCSS("button")}>{this.castToString(data.text)}</Base.Button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            )}
            {this.getPropValue("hamburger_icon") && (
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
            )}
            {this.getPropValue("languageActive") && (
              <div className={this.decorateCSS("language")}>
                <ComposerLanguage type="dropdown" title="code"></ComposerLanguage>
              </div>
            )}
          </div>
          <div className={this.decorateCSS("navigator-mobile")}
            style={this.getComponentState("hamburgerNavActive")
              ? { maxHeight: `${this.getComponentState("maxheight")}px` }
              : undefined}>
            <div className={this.decorateCSS("navigator")}>
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("items").map(
                  (item: Item, indexItemList: number,) => {
                    return (
                      <div className={this.decorateCSS("menu-item")}>
                        <div
                          className={this.decorateCSS("item")}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("title")} onClick={() => {
                              this.navCLick(indexItemList);
                            }}>
                              <div className={this.decorateCSS("title-wrapper")}>
                                {item.title && (
                                  <ComposerLink path={item.navigate_to}>
                                    <span className={this.decorateCSS("title-text")} >
                                      {item.title}
                                    </span>
                                  </ComposerLink>
                                )}
                                {((item.sub_items?.length > 0)) && (
                                  <ComposerIcon
                                    name={this.getPropValue("down_icon")}
                                    propsIcon={{ className: this.decorateCSS("down_icon") }}
                                  />
                                )}
                              </div>
                            </div>
                          </ComposerLink>
                          {((item.sub_items?.length > 0) && this.getComponentState("navActive") == indexItemList) && (
                            <div className={this.decorateCSS("sub-items")}>
                              {(item.sub_items?.length > 0) &&
                                item.sub_items.map((subItem: Item) => {
                                  return (
                                    <div className={this.decorateCSS("sub-item")}>
                                      {(subItem.sub_items.length > 0) && (
                                        <div className={this.decorateCSS("sub-item-text-wrapper")} >
                                          {(subItem.sub_items?.length > 0) &&
                                            subItem.sub_items.map((subItem2, index: number) => {
                                              const titleExist = this.castToString(subItem2.title);
                                              return titleExist && (
                                                <span className={this.decorateCSS("sub-item-text")}>
                                                  <div className={this.decorateCSS("item-text")} onClick={() => { this.subNavCLick(index) }}>
                                                    <ComposerLink path={subItem2.navigate_to}>
                                                      {subItem2.title}
                                                    </ComposerLink>
                                                  </div>
                                                  {this.getComponentState("subNavActive") == index && (
                                                    <div className={this.decorateCSS("list")}>
                                                      {(subItem2.sub_items.length > 0) && (
                                                        subItem2.sub_items.map((subitem: Item) => {
                                                          const titleExist = this.castToString(subitem.title);
                                                          return titleExist && (
                                                            <div className={this.decorateCSS("list-item")}>
                                                              <ComposerLink path={subitem.navigate_to}>
                                                                {subitem.title}
                                                              </ComposerLink>
                                                            </div>
                                                          )
                                                        })
                                                      )}
                                                    </div>
                                                  )}

                                                </span>
                                              )
                                            })}
                                        </div>
                                      )}
                                    </div>
                                  )
                                })}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div className={this.decorateCSS("button-child")}>
                {this.castToObject<ButtonType[]>("buttonList").map(
                  (data: any, indexButtonList: number) => {
                    return (
                      <ComposerLink path={data.link}>
                        <Base.Button className={this.decorateCSS("button")}>{this.castToString(data.text)}</Base.Button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
              {this.getPropValue("languageActive") && (
                <div className={this.decorateCSS("languagemobile")} onClick={this.updateMaxHeight.bind(this)}>
                  <ComposerLanguage type="accordion" title="code"></ComposerLanguage>
                </div>
              )}
            </div>

          </div>
        </div>
      </div >
    );
  }
}

export default Navbar1;