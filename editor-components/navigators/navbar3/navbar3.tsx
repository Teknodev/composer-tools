import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: string;
  title: string;
  sub_items: Array<Button>;
  url: string;
  isPrimary: string;
  description: string;
};


type Card = {
 title: string;
 description: string;
 link: string
};

class Navbar3 extends BaseNavigator {
 
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Hamburger Button",
      value:
        "GiHamburgerMenu",
    });

    this.addProp({
      type: "icon",
      displayer: "Right Icon",
      key: "right_icon",
      value: "FaChevronRight",
    });


    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });


    this.addProp({
      type: "string",
      key:"right-item",
      displayer: "Right Item",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing."
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

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });



    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              value: "HOME",
              displayer: "Title",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleUp",
              displayer: "Icon",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleDown",
              displayer: "Icon",
            },
            {
              type: "array",
              key: "itemList",
              displayer: "SubItems",
              value: [ 
              {
                type: "object",
                key: "items",
                displayer: "Items",
                value: [ 
                  {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: "Main Home",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "",
                    displayer: "Navigate To",
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
                ]
              }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              value: "ABOUT",
              displayer: "Title",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleUp",
              displayer: "Icon",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleDown",
              displayer: "Icon",
            },
            {
              type: "array",
              key: "itemList",
              displayer: "SubItems",
              value: [ 
              {
                type: "object",
                key: "items",
                displayer: "Items",
                value: [ 
                  {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: "Main Home",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "",
                    displayer: "Navigate To",
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
                ]
              }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              value: "GAMES",
              displayer: "Title",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleUp",
              displayer: "Icon",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleDown",
              displayer: "Icon",
            },
            {
              type: "array",
              key: "itemList",
              displayer: "SubItems",
              value: [ 
              {
                type: "object",
                key: "items",
                displayer: "Items",
                value: [ 
                  {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: "Main Home",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "",
                    displayer: "Navigate To",
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
                ]
              }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              value: "PAGE",
              displayer: "Title",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleUp",
              displayer: "Icon",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleDown",
              displayer: "Icon",
            },
            {
              type: "array",
              key: "itemList",
              displayer: "SubItems",
              value: [ 
              {
                type: "object",
                key: "items",
                displayer: "Items",
                value: [ 
                  {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: "Main Home",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "",
                    displayer: "Navigate To",
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
                ]
              }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "title",
              value: "BLOG",
              displayer: "Title",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleUp",
              displayer: "Icon",
            },
            {
              type: "icon",
              key: "icon",
              value:
                "FaAngleDown",
              displayer: "Icon",
            },
            {
              type: "array",
              key: "itemList",
              displayer: "SubItems",
              value: [ 
              {
                type: "object",
                key: "items",
                displayer: "Items",
                value: [ 
                  {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: "Main Home",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "",
                    displayer: "Navigate To",
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
                ]
              }
              ]
            }
          ],
        },
      ],
    });
    
    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Contact",
        },

        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "boolean",
          key: "isPrimary",
          displayer: "Is Primary",
          value: false,
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

    this.state["componentProps"]["navActive"] = true;
    this.state["componentProps"]["subNavActive"] = null;
  }

  getName(): string {
    return "Navbar 3";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  subNavCLick(index: any) {
    let value = this.getComponentState("subNavActive");
    this.setComponentState("subNavActive", value === index ? null : index);
  }


  activeIndex: number = -1;
  

  render(): ReactNode {
    const handleButton = (index: number) => {
      this.activeIndex = this.activeIndex === index ? -1 : index;
      this.forceUpdate();
    };

    const rightItem = this.getPropValue("right-item");

    return (
      <div  
        className={`${this.decorateCSS("container")} ${
        this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""}`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
          <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => {
                return (
                  <ComposerLink path={leftItem.value[1].value} className={this.decorateCSS("icons-link")}>
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("icons") }}
                      name={leftItem.value[0].value}
                    />
                  </ComposerLink>
                );
              })}
            </div>
            <div className={this.decorateCSS("content-right")}>
              <p className={this.decorateCSS("right-item")}>
                {rightItem}
              </p>
          </div>
          </div>
          <div className={this.decorateCSS("bottom-line")}>
          <nav className={this.decorateCSS("top-burger")}>
          <div className={this.decorateCSS("secondline-content")}>
          <div className={this.decorateCSS("logo-image")}>
              <img
                src={this.getPropValue("image")}
                width={200}
                height={170}
                alt=""
              />
            </div>
          <div className={this.decorateCSS("right-page")}>
           {this.castToObject<any>("itemList").map(
            (data: any, indexItemList: number, ItemList: any) => {
              return (
                <div key={indexItemList} className={this.decorateCSS("card")}>
                <div className={`${this.activeIndex === indexItemList
                      ? this.decorateCSS("little-container")
                      : this.decorateCSS("active-container")}`}
                    onClick={() => handleButton(indexItemList)}>

                  <div className={this.decorateCSS("title")}>
                    <h3 className={this.decorateCSS("card-title")}>{data.title}</h3>
                  </div>
                  <div className={this.decorateCSS("icon")}>
                      <ComposerIcon
                          propsIcon={{className: this.decorateCSS("icon-svg")}}
                          name={
                            this.activeIndex === indexItemList
                              ? "FaAngleUp"
                              : "FaAngleDown"
                          }
                        />
                  </div>
                </div>
                <div className={this.decorateCSS("text-box")}>
                {data.itemList?.map((item: any) => (
                <ComposerLink key={indexItemList} path={item.link}>
                  <div
                    className={`${this.activeIndex === indexItemList
                      ? this.decorateCSS("text")
                      : this.decorateCSS("hide")
                    }`}
                  >
                    {item.description}
                    <div
                      className={`${this.activeIndex === indexItemList
                        ? this.decorateCSS("sub-items")
                        : this.decorateCSS("sub-item-hide")
                      }`}
                    >
                      {item.sub_items?.map((subItem: any) => (
                        <div
                          className={`${this.activeIndex === indexItemList
                            ? this.decorateCSS("sub-item")
                            : this.decorateCSS("sub-item-hide")
                          }`}
                        >
                          <span className={this.decorateCSS("sub-item-text")}>
                            {subItem.title}{" "}
                            {subItem.sub_items?.length > 0 && (
                              <ComposerIcon
                                name={this.getPropValue("right_icon")}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
                              />
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                   
                  </ComposerLink>
                ))}
                </div> 
              </div>
              );
            }
          )}      
           </div>
            {this.castToObject<Button[]>("buttons").map(
              (item: Button, indexButtons: number) => {
                return (
                  <div className={this.decorateCSS("button-box")}>
                  <ComposerLink key={indexButtons} path={item.url}>
                    <button
                      className={`${this.decorateCSS("button")} ${
                        item.isPrimary ? this.decorateCSS("primary") : ""
                      }`}
                    >
                      {item.buttonText}
                    </button>
                  </ComposerLink>
                  </div> 
                );
              }
            )}
          </div>
          </nav>
          </div>
          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <div  className={`${this.decorateCSS("img-hamburger")} ${
                  this.getComponentState("navActive")
                  ? this.decorateCSS("rotate")
                  : ""
                  }`}
                  onClick={() => {
                  this.navClick();
                }}>
              <ComposerIcon
                name={this.getPropValue("icon")}
                propsIcon={{ width: 200 }} 
                  />
                  </div>
            </div>
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("itemList").map(
                  (data: any, indexItemList: number) => {
                    return ( 
                      <div key={indexItemList} className={this.decorateCSS("card")}>
                      <div className={`${this.activeIndex === indexItemList
                        ? this.decorateCSS("little-container")
                        : this.decorateCSS("active-container")}`}
                        onClick={() => handleButton(indexItemList)}>
                          
                        <div className={this.decorateCSS("title")}>
                          <h3 className={this.decorateCSS("card-title")}>{data.title}</h3>
                        </div>
           
                        <div className={this.decorateCSS("icon")}>
                          <ComposerIcon
                            propsIcon={{
                              className: this.decorateCSS("icon-svg"),
                              onClick: () => handleButton(indexItemList),
                            }}
                            name={
                              this.activeIndex === indexItemList
                                ? "FaAngleUp"
                                : "FaAngleDown"
                            }
                          />
                        </div>
                      </div>
                     <div className={this.decorateCSS("text-box")}>
                     {data.itemList?.map((item: any) => (
                      <ComposerLink key={indexItemList} path={item.link}>
                        <h3
                          className={`${this.activeIndex === indexItemList
                            ? this.decorateCSS("text")
                            : this.decorateCSS("hide")
                          }`}
                        >
                          {item.description}
                        </h3>
                          <div
                            className={`${this.activeIndex === indexItemList
                              ? this.decorateCSS("sub-item")
                              : this.decorateCSS("sub-item-hide")
                            }`}
                          >
                            {item.sub_items?.map((subItem: any) => (
                              <div
                                className={`${this.activeIndex === indexItemList
                                  ? this.decorateCSS("sub-item")
                                  : this.decorateCSS("sub-item-hide")
                                }`}
                              >
                                <span className={this.decorateCSS("sub-item-text")}>
                                  {subItem.title}
                                  {/* {subItem.sub_items?.length > 0 && (
                                    // <ComposerIcon
                                    //   name={this.getPropValue("right_icon")}
                                    //   propsIcon={{
                                    //     className: this.decorateCSS("icon"),
                                    //   }}
                                    // />
                                  )} */}
                                </span>
                              </div>
                            ))}
                          </div>
                        </ComposerLink>
                      ))}
                      </div>
                    </div>
                    );
                  }
                )}
              </div>
            )}
              {this.castToObject<Button[]>("buttons").map(
              (item: Button, indexButtons: number) => {
                return (
                  <div className={this.decorateCSS("button-box")}>
                  <ComposerLink key={indexButtons} path={item.url}>
                    <button
                      className={`${this.decorateCSS("button")} ${
                        item.isPrimary ? this.decorateCSS("primary") : ""
                      }`}
                    >
                      {item.buttonText}
                    </button>
                  </ComposerLink>
                  </div> 
                );
              }
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar3;
