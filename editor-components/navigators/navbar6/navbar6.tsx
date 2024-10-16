import { BaseNavigator } from "../../EditorComponent";
import React, { useState } from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
                type: "select",
                key: "menu_type",
                displayer: "Type",
                value: "Dropdown",
                additionalParams: menuType,
              },
              {
                type: "icon",
                key: "icon",
                displayer: "Dropdown Icon",
                value: "FaChevronDown",
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
                        value: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        value: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        value: "https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        displayer: "Image",
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
            displayer: "Main Text",
            value: [
              {
                type: "string",
                key: "label",
                value: "BLOG",
                displayer: "Text",
              },
              {
                type: "select",
                key: "menu_type",
                displayer: "Type",
                value: "Normal",
                additionalParams: menuType,
              },
              {
                type: "icon",
                key: "icon",
                displayer: "Dropdown Icon",
                value: "FaChevronDown",
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
                        value: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        value: "https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        value: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        displayer: "Image",
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
            displayer: "Main Text",
            value: [
              {
                type: "string",
                key: "label",
                value: "CONTACT",
                displayer: "Text",
              },
              {
                type: "select",
                key: "menu_type",
                displayer: "Type",
                value: "Normal",
                additionalParams: menuType,
              },
              {
                type: "icon",
                key: "icon",
                displayer: "Dropdown Icon",
                value: "FaChevronDown",
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
                        value: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        value: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        value: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        displayer: "Image",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }

    )

    this.state["componentProps"]["navActive"] = false;
    this.state["componentProps"]["dropdownActive"] = false;

  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
    this.setComponentState("navClosing", value);
  }

  dropdownClick(index: number) {
    let value: boolean = this.getComponentState("dropdownActive");
    this.setComponentState("activeDropdownIndex", index);
    this.setComponentState("dropdownActive", !value);
  }

  render() {
    const extendable = this.getPropValue("extendable") ?? [];
    const navActive = this.getComponentState("navActive");

    const dropdownActive = this.getComponentState("dropdownActive");
    const activeDropdownIndex = this.getComponentState("activeDropdownIndex");

    return (
      <>
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
                {(
                  <div
                    className={`${this.decorateCSS("navbar-child")} ${navActive ? this.decorateCSS("active") : this.decorateCSS("closing")
                      }`}
                  >
                    {extendable.map((item: any, index: number) => {
                      const hasValue = item?.value?.[0]?.value;

                      return (
                        <>
                          {hasValue && (
                            <>
                              {item?.value?.[1]?.value === "Dropdown" ? (
                                <>
                                  {window.innerWidth < 769 ?
                                    <>
                                      <div className={this.decorateCSS("right-section")}>
                                        <h3 className={this.decorateCSS("extendable")} >
                                          <ComposerLink path={item?.value[3].value} key={index}>
                                            <div className={this.decorateCSS("dropdown-content-tablet-telephone")} >
                                              {item?.value?.[0]?.value}
                                            </div>
                                          </ComposerLink>
                                        </h3>
                                        <div className={dropdownActive ? this.decorateCSS("rotate") : ""} onClick={() => this.dropdownClick(index)}>
                                          <ComposerIcon name={item?.value[2].value} />
                                        </div>
                                      </div>
                                      {item?.value?.[4]?.value?.length > 0 && (
                                        <ul className={this.decorateCSS(`${dropdownActive ? "" : "ul-none"}`)} >
                                          {item?.value?.[4]?.value?.map((dropdownItem: any, dropdownIndex: number) => {
                                            const text = dropdownItem?.value?.[0]?.value;
                                            const url = dropdownItem?.value?.[1].value;

                                            return (
                                              <div className={`${this.decorateCSS("rightSlider")} ${dropdownActive ? this.decorateCSS("activeChild") : this.decorateCSS("inactive")
                                                }`}>
                                                {dropdownActive && activeDropdownIndex === index &&
                                                  <li key={index}>
                                                    <ComposerLink path={url} isFullWidth={true}>
                                                      {text}
                                                    </ComposerLink>
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
                                        <div className={this.decorateCSS("extendable-title-content")}>
                                          <ComposerLink path={item?.value[3].value}>{item?.value?.[0]?.value}</ComposerLink>
                                          <ComposerIcon name={item?.value[2].value} />

                                        </div>

                                        {item?.value?.[4]?.value?.length > 0 && (
                                          <div className={this.decorateCSS("dropdown-content")}>
                                            {item?.value?.[4]?.value?.map((dropdownItem: any, index: number) => {
                                              const text = dropdownItem?.value?.[0]?.value;
                                              const url = dropdownItem?.value?.[1]?.value;
                                              const image = dropdownItem?.value?.[2]?.value;

                                              if (image || text) {
                                                return (
                                                  <>
                                                    {image ? "" :
                                                      <ComposerLink path={url}>
                                                        <div className={this.decorateCSS("no-image-text")}>{text}</div>
                                                      </ComposerLink>
                                                    }
                                                    <ComposerLink path={url} key={index}>
                                                      <div className={this.decorateCSS("image-container")}>
                                                        <div className={this.decorateCSS("image-overlay")}>
                                                          {image && <img src={image} alt="" className={this.decorateCSS("image")} />}
                                                          <div className={this.decorateCSS("text-overlay")}>
                                                            {text}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </ComposerLink>
                                                  </>
                                                );
                                              }

                                              return null;
                                            })}


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

      </>
    );
  }
}

export default Navbar6;