import { BaseNavigator } from "../../EditorComponent";
import React, { useState } from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

const menuType = {
  selectItems: ["Dropdown", "Normal"],
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
                displayer: "Extendable Section",
                value: [
                  {
                    type: "object",
                    key: "item1",
                    displayer: "Extendable Section Item",
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
                    displayer: "Extendable Section Item",
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
                    displayer: "Extendable Section Item",
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
              {
                type: "select",
                key: "menu_type",
                displayer: "Type",
                value: "Dropdown",
                additionalParams: menuType,
              },
            ],
          },
          {
            type: "object",
            key: "item",
            displayer: "Main Text",
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
              {
                type: "array",
                key: "section",
                displayer: "Extendable Section",
                value: [
                  {
                    type: "object",
                    key: "item1",
                    displayer: "Extendable Section Item",
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
                    displayer: "Extendable Section Item",
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
                    displayer: "Extendable Section Item",
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
              {
                type: "select",
                key: "menu_type",
                displayer: "Type",
                value: "Normal",
                additionalParams: menuType,
              },
            ],
          },
          ,
          {
            type: "object",
            key: "item",
            displayer: "Main Text",
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
              {
                type: "array",
                key: "section",
                displayer: "Extendable Section",
                value: [
                  {
                    type: "object",
                    key: "item1",
                    displayer: "Extendable Section Item",
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
                    displayer: "Extendable Section Item",
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
                    displayer: "Extendable Section Item",
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
              {
                type: "select",
                key: "menu_type",
                displayer: "Type",
                value: "Normal",
                additionalParams: menuType,
              },
            ],
          },
        ],
      }

    )

    // this.addProp({
    //   type: "array",
    //   key: "right-items",
    //   displayer: "Right Items",
    //   value: [
    //     {
    //       type: "object",
    //       key: "item",
    //       displayer: "Item",
    //       value: [
    //         {
    //           type: "string",
    //           key: "label",
    //           value: "ABOUT",
    //           displayer: "Text",
    //         },
    //         {
    //           type: "page",
    //           key: "link",
    //           value: "",
    //           displayer: "Navigate To",
    //         },
    //       ],
    //     },
    //     {
    //       type: "object",
    //       key: "item",
    //       displayer: "Item",
    //       value: [
    //         {
    //           type: "string",
    //           key: "label",
    //           value: "BLOG",
    //           displayer: "Text",
    //         },
    //         {
    //           type: "page",
    //           key: "link",
    //           value: "",
    //           displayer: "Navigate To",
    //         },
    //       ],
    //     },
    //     {
    //       type: "object",
    //       key: "item",
    //       displayer: "Item",
    //       value: [
    //         {
    //           type: "string",
    //           key: "label",
    //           value: "CONTACT",
    //           displayer: "Text",
    //         },
    //         {
    //           type: "page",
    //           key: "link",
    //           value: "",
    //           displayer: "Navigate To",
    //         },
    //       ],
    //     },
    //   ],
    // });

    this.state["componentProps"]["navActive"] = false;
    this.state["componentProps"]["dropdownActive"] = false;

  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  dropdownClick() {
    let value: boolean = this.getComponentState("dropdownActive");
    this.setComponentState("dropdownActive", !value);
  }

  render() {
    const extendable = this.getPropValue("extendable") ?? [];
    // const rightItems = this.getPropValue("right-items");
    const navActive = this.getComponentState("navActive");
    const dropdownActive = this.getComponentState("dropdownActive");



    // console.log(extendable[0].value[2].value[0].value , "arr")

    console.log("window", window.innerWidth);
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
                  {extendable.map((item: any, index: number) => {
                    // `item.value`'ın var olup olmadığını kontrol ediyoruz
                    const hasValue = item?.value?.[0]?.value;

                    return (
                      <>
                        {hasValue && (
                          <>

                            {item?.value?.[3]?.value === "Dropdown" ? (
                              <>
                                {window.innerWidth < 769 ?
                                  <>
                                    <h3 className={this.decorateCSS("extendable")}>
                                      <ComposerLink key={index} path={item?.value?.[1]?.value}>
                                        <div onClick={() => this.dropdownClick()} >
                                          {item?.value?.[0]?.value.length > 9 ? `${item.value[0].value.slice(0, 9)}...` : item?.value?.[0]?.value}
                                        </div>
                                      </ComposerLink>
                                    </h3>
                                    {item?.value?.[2]?.value?.length > 0 && (
                                      <ul style={{ display: `${dropdownActive ? "" : "none"}` }}>
                                        {item?.value?.[2]?.value?.map((dropdownItem: any, index: number) => {
                                          const text = dropdownItem?.value?.[0]?.value;
                                          const url = dropdownItem?.value?.[1]?.value;
                                          return (
                                            <div className={`${this.decorateCSS("rightSlider")} ${dropdownActive ? this.decorateCSS("active") : this.decorateCSS("inactive")
                                              }`}>
                                              {dropdownActive &&
                                                <li key={index} style={{ listStyleType: "none", margin: "5px " }}>
                                                  <a href={url}>
                                                    {text.length > 15 ? `${text.slice(0, 13)}...` : text}
                                                  </a>
                                                </li>
                                              }
                                            </div>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </> :

                                  <>
                                    <h3 className={this.decorateCSS("extendable")}>
                                      <div>{item?.value?.[0]?.value}</div>
                                      {item?.value?.[2]?.value?.length > 0 && (
                                        <div className={this.decorateCSS("dropdown-content")}>

                                          {item?.value?.[2]?.value?.some((dropdownItem: any) =>
                                            dropdownItem?.value?.[0]?.value || dropdownItem?.value?.[1]?.value || dropdownItem?.value?.[2]?.value
                                          ) && (
                                              item?.value?.[2]?.value?.map((dropdownItem: any, index: number) => {
                                                const text = dropdownItem?.value?.[0]?.value;
                                                const url = dropdownItem?.value?.[1]?.value;
                                                const image = dropdownItem?.value?.[2]?.value;

                                                console.log("image", image)
                                                if (image || text) {
                                                  return (
                                                    <>
                                                      {image ? "" :
                                                        <a href={url || "#"}>
                                                          <div style={{
                                                            textAlign: "center",
                                                            marginBottom: "5px",
                                                            fontSize: "14px"
                                                          }}>{text}</div>
                                                        </a>
                                                      }
                                                      <a href={url || "#"} key={index}>
                                                        <div className={this.decorateCSS("image-container")}>
                                                          {image && <img src={image} alt="" className={this.decorateCSS("image")} />}
                                                          <div className={this.decorateCSS("text-overlay")}>
                                                            {text}
                                                          </div>
                                                        </div>
                                                      </a>
                                                    </>

                                                  );
                                                }

                                                return null;
                                              })
                                            )}
                                        </div>
                                      )}
                                    </h3>
                                  </>
                                }
                              </>
                            ) : (
                              <h3>
                                <ComposerLink key={index} path={item?.value?.[1]?.value}>
                                  <div>{item?.value?.[0]?.value}</div>
                                </ComposerLink>
                              </h3>
                            )}
                          </>
                        )}
                      </>
                    );
                  })}

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