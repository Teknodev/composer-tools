import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content15.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ITabs = {
  tabText: JSX.Element;
  icon: string;
  image_container: {
    image: string;
    box1: {
      box1_text: JSX.Element;
      price: JSX.Element;
    };
    box2: {
      text: JSX.Element;
      box2_icon: string;
      link: string;
    };
  };
  content_container: {
    title_1: JSX.Element;
    title_2: JSX.Element;
    description: JSX.Element;
    icons_container: Array<{
      icon_container: {
        icon: string;
        text: JSX.Element;
      };
    }>;
  };
};

class Content15 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "tab",
          displayer: "Tab 1",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab 1 Text",
              value: "01 Premium cottage",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Tab 1 Icon",
              value: "GoArrowRight",
            },
            {
              type: "object",
              key: "image_container",
              displayer: "Image Container",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value:
                    "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-14.jpg",
                },
                {
                  type: "object",
                  key: "box1",
                  displayer: "Box 1",
                  value: [
                    {
                      type: "string",
                      key: "box1_text",
                      displayer: "Text",
                      value: "Starting from",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "$50.00",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "box2",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "BOOK NOW",
                    },
                    {
                      type: "icon",
                      key: "box2_icon",
                      displayer: "Button Icon",
                      value: "GoArrowRight",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              key: "content_container",
              displayer: "Content Container",
              value: [
                {
                  type: "string",
                  key: "title_1",
                  displayer: "Subtitle",
                  value: "Phenomenal view",
                },
                {
                  type: "string",
                  key: "title_2",
                  displayer: "Title",
                  value: "Premium cottage",
                },
                {
                  type: "string",
                  key: "description",
                  displayer: "Description",
                  value:
                    "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
                },
                {
                  type: "array",
                  key: "icons_container",
                  displayer: "Icons Container",
                  value: [
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 1 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiFrenchFries",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "BREAKFAST INCLUDED",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 2 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiRobe",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "LAUNDRY FACILITY",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 3 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "FaCarRear",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "PICKUP AND DROP",
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
          key: "tab",
          displayer: "Tab 2",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab 2 Text",
              value: "02 Studios with terrace",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Tab 2 Icon",
              value: "GoArrowRight",
            },
            {
              type: "object",
              key: "image_container",
              displayer: "Image Container",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value:
                    "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-16.jpg",
                },
                {
                  type: "object",
                  key: "box1",
                  displayer: "Box 1",
                  value: [
                    {
                      type: "string",
                      key: "box1_text",
                      displayer: "Text",
                      value: "Starting from",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "$50.00",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "box2",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "BOOK NOW",
                    },
                    {
                      type: "icon",
                      key: "box2_icon",
                      displayer: "Button Icon",
                      value: "GoArrowRight",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              key: "content_container",
              displayer: "Content Container",
              value: [
                {
                  type: "string",
                  key: "title_1",
                  displayer: "Subtitle",
                  value: "Garden view",
                },
                {
                  type: "string",
                  key: "title_2",
                  displayer: "Title",
                  value: "Studios with terrace",
                },
                {
                  type: "string",
                  key: "description",
                  displayer: "Description",
                  value:
                    "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
                },
                {
                  type: "array",
                  key: "icons_container",
                  displayer: "Icons Container",
                  value: [
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 1 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiRobe",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "LAUNDRY FACILITY",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 2 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiFrenchFries",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "BREAKFAST INCLUDED",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 3 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "FaCarRear",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "PICKUP AND DROP",
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
          key: "tab",
          displayer: "Tab 3",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab 3 Text",
              value: "03 Premium pavilions",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Tab 3 Icon",
              value: "GoArrowRight",
            },
            {
              type: "object",
              key: "image_container",
              displayer: "Image Container",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value:
                    "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-17.jpg",
                },
                {
                  type: "object",
                  key: "box1",
                  displayer: "Box 1",
                  value: [
                    {
                      type: "string",
                      key: "box1_text",
                      displayer: "Text",
                      value: "Starting from",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "$50.00",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "box2",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "BOOK NOW",
                    },
                    {
                      type: "icon",
                      key: "box2_icon",
                      displayer: "Button Icon",
                      value: "GoArrowRight",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              key: "content_container",
              displayer: "Content Container",
              value: [
                {
                  type: "string",
                  key: "title_1",
                  displayer: "Subtitle",
                  value: "Phenomenal view",
                },
                {
                  type: "string",
                  key: "title_2",
                  displayer: "Title",
                  value: "Premium pavilions",
                },
                {
                  type: "string",
                  key: "description",
                  displayer: "Description",
                  value:
                    "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
                },
                {
                  type: "array",
                  key: "icons_container",
                  displayer: "Icons Container",
                  value: [
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 1 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiFrenchFries",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "BREAKFAST INCLUDED",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 2 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiRobe",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "LAUNDRY FACILITY",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 3 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "FaCarRear",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "PICKUP AND DROP",
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
          key: "tab",
          displayer: "Tab 4",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab 4 Text",
              value: "04 The luxury villa",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Tab 4 Icon",
              value: "GoArrowRight",
            },
            {
              type: "object",
              key: "image_container",
              displayer: "Image Container",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value:
                    "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-18.jpg",
                },
                {
                  type: "object",
                  key: "box1",
                  displayer: "Box 1",
                  value: [
                    {
                      type: "string",
                      key: "box1_text",
                      displayer: "Text",
                      value: "Starting from",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "$50.00",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "box2",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "BOOK NOW",
                    },
                    {
                      type: "icon",
                      key: "box2_icon",
                      displayer: "Button Icon",
                      value: "GoArrowRight",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              key: "content_container",
              displayer: "Content Container",
              value: [
                {
                  type: "string",
                  key: "title_1",
                  displayer: "Subtitle",
                  value: "Garden view",
                },
                {
                  type: "string",
                  key: "title_2",
                  displayer: "Title",
                  value: "The luxury villa",
                },
                {
                  type: "string",
                  key: "description",
                  displayer: "Description",
                  value:
                    "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
                },
                {
                  type: "array",
                  key: "icons_container",
                  displayer: "Icons Container",
                  value: [
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 1 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiRobe",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "LAUNDRY FACILITY",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 2 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiFrenchFries",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "BREAKFAST INCLUDED",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 3 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "FaCarRear",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "PICKUP AND DROP",
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
          key: "tab",
          displayer: "Tab 5",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab 5 Text",
              value: "05 Grand deluxe room",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Tab 5 Icon",
              value: "GoArrowRight",
            },
            {
              type: "object",
              key: "image_container",
              displayer: "Image Container",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value:
                    "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-19.jpg",
                },
                {
                  type: "object",
                  key: "box1",
                  displayer: "Box 1",
                  value: [
                    {
                      type: "string",
                      key: "box1_text",
                      displayer: "Text",
                      value: "Starting from",
                    },
                    {
                      type: "string",
                      key: "price",
                      displayer: "Price",
                      value: "$50.00",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "box2",
                  displayer: "Button",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "BOOK NOW",
                    },
                    {
                      type: "icon",
                      key: "box2_icon",
                      displayer: "Button Icon",
                      value: "GoArrowRight",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              key: "content_container",
              displayer: "Content Container",
              value: [
                {
                  type: "string",
                  key: "title_1",
                  displayer: "Subtitle",
                  value: "Mountain view",
                },
                {
                  type: "string",
                  key: "title_2",
                  displayer: "Title",
                  value: "Grand deluxe room",
                },
                {
                  type: "string",
                  key: "description",
                  displayer: "Description",
                  value:
                    "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
                },
                {
                  type: "array",
                  key: "icons_container",
                  displayer: "Icons Container",
                  value: [
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 1 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiFrenchFries",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "BREAKFAST INCLUDED",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 2 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "GiRobe",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "LAUNDRY FACILITY",
                        },
                      ],
                    },
                    {
                      type: "object",
                      key: "icon_container",
                      displayer: "Icon 3 Container",
                      value: [
                        {
                          type: "icon",
                          key: "icon",
                          displayer: "Icon",
                          value: "FaCarRear",
                        },
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value: "PICKUP AND DROP",
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
    this.setActiveTab(0);
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 1);
  }

  getName(): string {
    return "Content 15";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs")}>
            <div className={this.decorateCSS("tab-1")}>
              <div className={this.decorateCSS("tab-buttons")}>
                {this.castToObject<ITabs[]>("tabs").map(
                  (tab: ITabs, index: number) => {
                    const isTabTextVisible = this.castToString(tab.tabText);
                    const isTabIconVisible = tab.icon;
                    const isTabVisible = isTabTextVisible || isTabIconVisible;
                    return (
                      isTabVisible && (
                        <div
                          className={
                            this.decorateCSS("tab-button") +
                            " " +
                            (this.getComponentState("activeTab") == index &&
                              this.decorateCSS("active"))
                          }
                          onClick={() => this.setActiveTab(index)}
                        >
                          {isTabTextVisible && (
                            <div className={this.decorateCSS("tabText")}>
                              {tab.tabText}
                            </div>
                          )}
                          {isTabIconVisible && (
                            <ComposerIcon
                              name={tab.icon}
                              propsIcon={{
                                className: this.decorateCSS("icon"),
                              }}
                            />
                          )}
                        </div>
                      )
                    );
                  }
                )}
              </div>
            </div>
            {this.castToObject<ITabs[]>("tabs").map(
              (tab: ITabs, index: number) => {
                const isBox1Visible =
                  this.castToString(tab.image_container.box1.box1_text) ||
                  this.castToString(tab.image_container.box1.price);
                const isBox2Visible =
                  this.castToString(tab.image_container.box2.text) ||
                  tab.image_container.box2.box2_icon;
                const isBoxContainerVisible = isBox1Visible || isBox2Visible;
                const isImageContainerVisible =
                  tab.image_container.image || isBoxContainerVisible;

                const isIconContainerVisible =
                  tab.content_container.icons_container.length > 0;

                const isContentContainerVisible =
                  this.castToString(tab.content_container.title_1) ||
                  this.castToString(tab.content_container.title_2) ||
                  this.castToString(tab.content_container.description) ||
                  isIconContainerVisible;

                return (
                  <div
                    className={
                      this.decorateCSS("tab") +
                      " " +
                      (this.getComponentState("activeTab") == index &&
                        this.decorateCSS("active")) +
                      " " +
                      (this.getComponentState("startedIndex") == index &&
                        this.decorateCSS("start"))
                    }
                  >
                    <div className={this.decorateCSS("content")}>
                      {isImageContainerVisible && (
                        <div className={this.decorateCSS("image_container")}>
                          <img
                            className={this.decorateCSS("image")}
                            src={tab.image_container.image}
                          />
                          {isBoxContainerVisible && (
                            <div className={this.decorateCSS("box_container")}>
                              {isBox1Visible && (
                                <div className={this.decorateCSS("box1")}>
                                  <div
                                    className={this.decorateCSS("box1_text")}
                                  >
                                    {tab.image_container.box1.box1_text}
                                  </div>
                                  <div className={this.decorateCSS("price")}>
                                    {tab.image_container.box1.price}
                                  </div>
                                </div>
                              )}
                              {isBox2Visible && (
                                <div className={this.decorateCSS("box2")}>
                                  <ComposerLink
                                    page={tab.image_container.box2.link}
                                    isFullWidth={true}
                                  >
                                    <div
                                      className={this.decorateCSS("box2_text")}
                                    >
                                      {tab.image_container.box2.text}
                                    </div>
                                    <ComposerIcon
                                      name={tab.image_container.box2.box2_icon}
                                      propsIcon={{
                                        className:
                                          this.decorateCSS("box2_icon"),
                                      }}
                                    />
                                  </ComposerLink>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      {isContentContainerVisible && (
                        <div className={this.decorateCSS("content_container")}>
                          {this.castToString(tab.content_container.title_1) && (
                            <div className={this.decorateCSS("title_1")}>
                              {tab.content_container.title_1}
                            </div>
                          )}
                          {this.castToString(tab.content_container.title_2) && (
                            <div className={this.decorateCSS("title_2")}>
                              {tab.content_container.title_2}
                            </div>
                          )}
                          {this.castToString(
                            tab.content_container.description
                          ) && (
                            <div className={this.decorateCSS("description")}>
                              {tab.content_container.description}
                            </div>
                          )}
                          {isIconContainerVisible && (
                            <div
                              className={this.decorateCSS("icons_container")}
                            >
                              {tab.content_container.icons_container.map(
                                (iconContainer) => {
                                  const isIconVisible = iconContainer.icon_container.icon;
                                    const isTextVisible = this.castToString(
                                    iconContainer.icon_container.text
                                    );
                                  const isIconContainerVisible =
                                    isIconVisible || isTextVisible;
                                  return (
                                    isIconContainerVisible && (
                                      <div
                                        className={this.decorateCSS(
                                          "icon_container"
                                        )}
                                      >
                                        {isIconVisible && (
                                          <ComposerIcon
                                            name={iconContainer.icon_container.icon}
                                            propsIcon={{
                                              className:
                                                this.decorateCSS("icon"),
                                            }}
                                          />
                                        )}
                                        {isTextVisible && (
                                          <div
                                            className={this.decorateCSS("text")}
                                          >
                                            {iconContainer.icon_container.text}
                                          </div>
                                        )}
                                      </div>
                                    )
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content15;
