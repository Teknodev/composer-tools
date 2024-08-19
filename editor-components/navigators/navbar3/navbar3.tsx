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
      type: "image",
      key: "image2",
      displayer: "Hamburger Button",
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
              value: "https://www.google.com.tr/?hl=tr",
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
              value: "https://www.google.com.tr/?hl=tr",
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
              value: "https://www.google.com.tr/?hl=tr",
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
                    value: "asasassa",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "https://www.google.com/",
                    displayer: "Navigate To",
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
              type: "array",
              key: "itemList",
              displayer: "Item 1",
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
                    value: "asasass1a",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "https://www.google.com/",
                    displayer: "Navigate To",
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
              type: "array",
              key: "itemList",
              displayer: "Item 2",
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
                    value: "asasassa2",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "https://www.google.com/",
                    displayer: "Navigate To",
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
              type: "array",
              key: "itemList",
              displayer: "Item 3",
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
                    value: "asasassa4",
                  },
                  {
                    type: "page",
                    key: "link",
                    value: "https://www.google.com/",
                    displayer: "Navigate To",
                  },
                ]
              }
              ]
            }
          ],
        }
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
          value: "https://www.google.com/",
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
  }

  getName(): string {
    return "Navbar 3";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }


  activeIndex: number = -1;

  render(): ReactNode {
    const handleButton = (index: number) => {
      this.activeIndex = this.activeIndex === index ? -1 : index;
    };
    const selectValue = this.getPropValue("select");

    

    return (
      <div  
      className={`${this.decorateCSS("container")} ${
        this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
      }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
          <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => {
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
          <div className={this.decorateCSS("bottom-line")}></div>
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
                <div className={this.decorateCSS("little-container")} onClick={() => handleButton(indexItemList)}>
                  <div className={this.decorateCSS("title")}>
                    <h3 className={this.decorateCSS("card-title")}>{data.title}</h3>
                  </div>
                  <div className={this.decorateCSS("icon")} 
                        >
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
                {data.itemList?.map((item:any) => <ComposerLink key={indexItemList} path={item.link}>
                <h3
                  className={`${this.activeIndex === indexItemList
                      ? this.decorateCSS("text")
                      : this.decorateCSS("hide")
                    }`}>
                  {item.description}
                </h3>
                </ComposerLink>)}
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
          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <img src={this.getPropValue("image")} width={200} alt="" />
              <img
                alt=""
                className={`${this.decorateCSS("img-hamburger")} ${
                  this.getComponentState("navActive")
                    ? this.decorateCSS("rotate")
                    : ""
                }`}
                src={this.getPropValue("image2")}
                onClick={() => {
                  this.navClick();
                }}
              />
            </div>
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("itemList").map(
                  (data: any, indexItemList: number) => {
                    return ( 
                      <div key={indexItemList} className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("little-container")}>
                        <div className={this.decorateCSS("title")}>
                          <h3 className={this.decorateCSS("card-title")}>{data.title}</h3>
                        </div>
                        <div className={this.decorateCSS("icon")}>
                          <img
                            alt=""
                            src={
                              this.activeIndex === indexItemList
                                ? "https://cdn-icons-png.flaticon.com/512/130/130906.png"
                                : "https://cdn-icons-png.flaticon.com/512/656/656979.png"
                            }
                            onClick={() => handleButton(indexItemList)}
                          />
                        </div>
                      </div>
                     <div className={this.decorateCSS("text-box")}>
                      {data.itemList?.map((item:any) => <ComposerLink key={indexItemList} path={item.link}>
                      <h3
                        className={`${this.activeIndex === indexItemList
                            ? this.decorateCSS("text")
                            : this.decorateCSS("hide")
                          }`}>
                        {item.description}
                      </h3>
                      </ComposerLink>)}
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
