import { BaseNavigator } from "../../EditorComponent";
import React, { useState } from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

const menuType = {
  selectItems: ["Dropdown", "Normal"],
};

type NavbarSubSection = {
  text: JSX.Element;
  link: string;
  image: string;
};

type Navbar = {
  label: JSX.Element;
  menu_type: any;
  icon: string;
  link: string;
  section: NavbarSubSection[];
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

    this.addProp({
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      displayer: "Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item1",
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
                      value:
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      displayer: "Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item1",
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      value:
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                      value:
                        "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      displayer: "Image",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["navActive"] = false;
    this.state["componentProps"]["dropdownActive"] = false;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
    this.setComponentState("navClosing", value);
  }

  dropdownClick(index: number, activeValue: boolean) {
    let value: boolean = this.getComponentState("dropdownActive");
    this.setComponentState("activeDropdownIndex", index);
    if (activeValue) {
      this.setComponentState("dropdownActive", !value);
    } else {
      this.setComponentState("dropdownActive", true);
    }
  }

  handleMouseEnter(index: number) {
    this.setComponentState("is-dropdown-open", true);
    this.setComponentState("dropdown-active-index", index);
  }

  handleMouseLeave() {
    this.setComponentState("is-dropdown-open", false);
    this.setComponentState("dropdown-active-index", null);
  }

  render() {
    const extendable = this.castToObject<Navbar[]>("extendable") ?? [];
    const navActive = this.getComponentState("navActive");

    const dropdownActive = this.getComponentState("dropdownActive");
    const activeDropdownIndex = this.getComponentState("activeDropdownIndex");

    return (
      <>
        <div
          className={`${this.decorateCSS("container")} ${
            this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
          }`}
        >
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("content")}>
              <div className={this.decorateCSS("content-left")}>
                <img src={this.getPropValue("center-image")} alt="logo" />
              </div>

              <div className={this.decorateCSS("content-right")}>
                {
                  <div
                    className={`${this.decorateCSS("navbar-child")} ${
                      navActive
                        ? this.decorateCSS("active")
                        : this.decorateCSS("closing")
                    }`}
                  >
                    {extendable.map((item: Navbar, index: number) => {
                      const hasValue = this.castToString(item.label);
                      const isActive = activeDropdownIndex === index;

                      return (
                        <>
                          {hasValue && (
                            <>
                              {item?.menu_type === "Dropdown" ? (
                                <>
                                  {window.innerWidth < 769 ? (
                                    <>
                                      <div
                                        className={this.decorateCSS(
                                          "right-section"
                                        )}
                                      >
                                        <h3
                                          className={this.decorateCSS(
                                            "extendable"
                                          )}
                                        >
                                          <ComposerLink
                                            path={item?.link}
                                            key={index}
                                          >
                                            <div
                                              className={this.decorateCSS(
                                                "dropdown-content-tablet-telephone"
                                              )}
                                            >
                                              {item?.label}
                                            </div>
                                          </ComposerLink>
                                        </h3>
                                        <div
                                          className={
                                            dropdownActive && isActive
                                              ? this.decorateCSS("rotate")
                                              : ""
                                          }
                                          onClick={() =>
                                            this.dropdownClick(index, isActive)
                                          }
                                        >
                                          <ComposerIcon name={item?.icon} />
                                        </div>
                                      </div>
                                      {item?.section.length > 0 && (
                                        <ul
                                          className={this.decorateCSS(
                                            `${
                                              dropdownActive && isActive
                                                ? ""
                                                : "ul-none"
                                            }`
                                          )}
                                        >
                                          {item?.section.map(
                                            (
                                              dropdownItem: NavbarSubSection,
                                              dropdownIndex: number
                                            ) => {
                                              const text = this.castToString(
                                                dropdownItem?.text
                                              );
                                              const url = dropdownItem?.link;

                                              return (
                                                <div
                                                  className={`${this.decorateCSS(
                                                    "right-slider"
                                                  )} ${this.decorateCSS(
                                                    dropdownActive && isActive
                                                      ? "active-child"
                                                      : "inactive"
                                                  )}`}
                                                >
                                                  {text &&
                                                    dropdownActive &&
                                                    isActive && (
                                                      <li key={index}>
                                                        <ComposerLink
                                                          path={url}
                                                          isFullWidth={true}
                                                        >
                                                          {text}
                                                        </ComposerLink>
                                                      </li>
                                                    )}
                                                </div>
                                              );
                                            }
                                          )}
                                        </ul>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {item?.label && (
                                        <h3
                                          className={this.decorateCSS(
                                            "extendable"
                                          )}
                                          onMouseEnter={() =>
                                            this.handleMouseEnter(index)
                                          }
                                          onMouseLeave={() =>
                                            this.handleMouseLeave()
                                          }
                                        >
                                          <div
                                            className={`${this.decorateCSS(
                                              "extendable-title-content"
                                            )}
                                            ${
                                              this.getComponentState(
                                                "is-dropdown-open"
                                              ) &&
                                              this.getComponentState(
                                                "dropdown-active-index"
                                              ) === index &&
                                              this.decorateCSS("active")
                                            }`}
                                          >
                                            <ComposerLink path={item?.link}>
                                              {item?.label}
                                            </ComposerLink>
                                            {item?.section.length > 0 && (
                                              <ComposerIcon name={item?.icon} />
                                            )}
                                          </div>

                                          {item?.section.length > 0 &&
                                            this.getComponentState(
                                              "dropdown-active-index"
                                            ) === index && (
                                              <div
                                                className={this.decorateCSS(
                                                  "dropdown-content"
                                                )}
                                              >
                                                <div
                                                  className={this.decorateCSS(
                                                    "container-border"
                                                  )}
                                                >
                                                  {item?.section?.map(
                                                    (
                                                      dropdownItem: NavbarSubSection,
                                                      index: number
                                                    ) => {
                                                      const text =
                                                        dropdownItem?.text;
                                                      const url =
                                                        dropdownItem?.link;
                                                      const image =
                                                        dropdownItem?.image;

                                                      if (image || text) {
                                                        return (
                                                          <>
                                                            {image ? (
                                                              <ComposerLink
                                                                path={url}
                                                                key={index}
                                                              >
                                                                <div
                                                                  className={this.decorateCSS(
                                                                    "image-container"
                                                                  )}
                                                                >
                                                                  <div
                                                                    className={this.decorateCSS(
                                                                      "image-overlay"
                                                                    )}
                                                                  >
                                                                    {image && (
                                                                      <img
                                                                        src={
                                                                          image
                                                                        }
                                                                        alt=""
                                                                        className={this.decorateCSS(
                                                                          "image"
                                                                        )}
                                                                      />
                                                                    )}
                                                                    <div
                                                                      className={this.decorateCSS(
                                                                        "text-overlay"
                                                                      )}
                                                                    >
                                                                      {text}
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </ComposerLink>
                                                            ) : (
                                                              <>
                                                                {this.castToString(
                                                                  text
                                                                ) && (
                                                                  <ComposerLink
                                                                    path={url}
                                                                  >
                                                                    <div
                                                                      className={this.decorateCSS(
                                                                        "no-image-text"
                                                                      )}
                                                                    >
                                                                      {text}
                                                                    </div>
                                                                  </ComposerLink>
                                                                )}
                                                              </>
                                                            )}
                                                          </>
                                                        );
                                                      }

                                                      return null;
                                                    }
                                                  )}
                                                </div>
                                              </div>
                                            )}
                                        </h3>
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <h3>
                                  <ComposerLink key={index} path={item?.link}>
                                    <div>{item?.label}</div>
                                  </ComposerLink>
                                </h3>
                              )}
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                }

                <div
                  className={this.decorateCSS("hamburger-container")}
                  onClick={() => this.navClick()}
                >
                  <span
                    className={`${this.decorateCSS("hamburger")} ${
                      navActive ? this.decorateCSS("open") : ""
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
