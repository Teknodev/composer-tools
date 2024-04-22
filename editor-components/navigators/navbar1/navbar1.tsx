import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface Item {
  title: string,
  navigate_to: string,
  sub_items: Array<Item>;
}
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
      type: "image",
      key: "image2",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187",
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
      value: "FaChevronDown"
    })

    this.addProp({
      type: "icon",
      displayer: "Right Icon",
      key: "right_icon",
      value: "FaChevronRight"
    })

    this.addProp({
      type: "select",
      key: "select",
      displayer: "Location of Items",
      value: "Center",
      additionalParams: {
        selectItems: ["Left", "Right", "Center"],
      },
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
              value: "Hakkımızda"
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: ""
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
                      value: "Section 1"
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: ""
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
                              value: "1 Column Blog"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
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
                              value: "2 Column Blog"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
                        },
                      ]
                    }
                  ]
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
                      value: "Section 2"
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: ""
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
                              value: "Value 1"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
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
                              value: "Value 2"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
                        },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        }, {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ürünler"
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: ""
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
                      value: "Section 1"
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: ""
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
                              value: "1 Column Blog"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
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
                              value: "2 Column Blog"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
                        },
                      ]
                    }
                  ]
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
                      value: "Section 2"
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: ""
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
                              value: "Value 1"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
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
                              value: "Value 2"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
                        },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
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
              value: "Materyaller"
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: ""
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
                      value: "Section 1"
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: ""
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
                              value: "1 Column Blog"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
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
                              value: "2 Column Blog"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
                        },
                      ]
                    }
                  ]
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
                      value: "Section 2"
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate to",
                      value: ""
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
                              value: "Value 1"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
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
                              value: "Value 2"
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: ""
                            },
                          ]
                        },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
      ]
    });
    this.addProp({
      type: "boolean",
      key: "is_box_visible",
      displayer: "is box visible",
      value: true,

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
    this.state["componentProps"]["navActive"] = true;
    this.state["componentProps"]["subNavActive"] = true;

  }

  getName(): string {
    return "Navbar 1";
  }

  navClick() {
    console.log("active")
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  subNavCLick(){
      let value: boolean = this.getComponentState("subNavActive");
      this.setComponentState("subNavActive", !value);
  }

  
  render() {
    const selectValue = this.getPropValue("select");
    return (
      <div
        className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
          }`}
      >
        <div className={this.decorateCSS("max-content")}>
        <img src={this.getPropValue("image")} width={200} alt="" />

      
      <nav className={this.decorateCSS("pc-navigator")}>
            <div
              className={`${this.decorateCSS("items")} ${selectValue === "Left"
                ? this.decorateCSS("left")
                : selectValue === "Right"
                  ? this.decorateCSS("right")
                  : selectValue === "Center" && ""
                }`}
            >
              {this.castToObject<[]>("items").map(
                (item: Item, indexItemList: number) => {
                  return (
                    <div className={this.decorateCSS("menu-item")}>
                         <ComposerLink
                      key={indexItemList}
                      path={item.navigate_to}
                     
                    >
                      <div className={this.decorateCSS("item")}>
                        
                        <span className={this.decorateCSS("title")} key={indexItemList}>{item.title} {item.sub_items?.length >
                          0 && <ComposerIcon name={this.getPropValue("down_icon")} propsIcon={{ className: this.decorateCSS("icon") }} />}</span>
                        <div className={this.decorateCSS("sub-items")}>
                          {item.sub_items?.length > 0 && item.sub_items.map(subItem =>
                            <div className={this.decorateCSS("sub-item")}>

                              <span>{subItem.title} {subItem.sub_items?.length > 0 && this.getPropValue("is_box_visible")
                                && <ComposerIcon name={this.getPropValue("right_icon")} propsIcon={{ className: this.decorateCSS("icon") }} />}</span>
                              <div className={this.decorateCSS("list")}>
                                {subItem.sub_items?.length > 0 && subItem.sub_items.map(subItem2 =>
                                  <span className={this.decorateCSS("list-item")}>{subItem2.title}</span>)
                                }
                              </div>
                            </div>
                          )
                          }
                        </div>
                      </div>
                    </ComposerLink>
                    </div>
                 
                  );
                }
              )}
            </div>
           
          </nav>
          <div className={this.decorateCSS("button-child")}>
              {this.castToObject<[]>("buttonList").map(
                (data: any, indexButtonList: number) => {
                  return (
                    <ComposerLink
                      key={indexButtonList}
                      path={data.value[1].value}
                    >
                      <button>{data.value[0].value}</button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
    



            <div className={this.decorateCSS("hamburger-navbar")}>
              <img
                alt=""
                className={`${this.decorateCSS("img-hamburger")} ${this.getComponentState("navActive")
                  ? this.decorateCSS("rotate")
                  : ""
                  }`}
                src={this.getPropValue("image2")}
                onClick={() => {
                  this.navClick();
                }}
              />
            </div>

          <nav className={this.decorateCSS("navigator-mobile")}>
          {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("items").map(
                  (item: Item, indexItemList: number) => {
                    return (
                      <ComposerLink
                        key={indexItemList}
                        path={item.navigate_to}
                      >

                        <div className={this.decorateCSS("item")}
                           onClick={() => {
                            this.subNavCLick();
                          }}
                        >
                          <span className={this.decorateCSS("title")} key={indexItemList}>{item.title} {item.sub_items?.length > 0 && <ComposerIcon name={this.getPropValue("down_icon")} />}</span>
                          {this.getComponentState("subNavActive") &&        <div className={this.decorateCSS("sub-items")}>
                            {item.sub_items?.length > 0 && item.sub_items.map(subItem =>
                             
                             
                             <div className={this.decorateCSS("sub-item")}
                           
                              >

                                <span>{subItem.title} {subItem.sub_items?.length > 0 && this.getPropValue("is_box_visible")
                                  && <ComposerIcon name={this.getPropValue("right_icon")} />}</span>
                                <div className={this.decorateCSS("list")}>
                                  {subItem.sub_items?.length > 0 && subItem.sub_items.map(subItem2 =>
                                    <span className={this.decorateCSS("list-item")}>{subItem2.title}</span>)
                                  }
                                </div>
                              </div>
                            )
                            }
                          </div>}
                        </div>


                      </ComposerLink>
                    );
                  }
                )}
              </div>
            )}
          </nav>
       
        </div>
      </div>
    );
  }
}

export default Navbar1;
