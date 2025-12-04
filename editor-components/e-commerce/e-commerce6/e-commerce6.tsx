import * as React from "react";
import { BaseECommerce, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./e-commerce6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

type ITabs = {
  subTitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  tabText: React.JSX.Element;
  icon: string;
  image_container: {
    image: string;
    box1_text: React.JSX.Element;
    box1_lowerText: React.JSX.Element;
    box2_text: React.JSX.Element;
    box2_icon: string;
    link: string;
  };
  icons_container: Array<{ icon: string; text: React.JSX.Element }>;
};

class ECommerce6 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);

    const dummyData = (
      tabTitle: string,
      image: string,
      boxText: string,
      box1_lowerText: string,
      box2Text: string,
      contentTitle: string,
      contentSubtitle: string,
      contentDescription: string,
      icon1Text: string,
      icon2Text: string,
      icon3Text: string
    ) => {
      return {
        type: "object",
        key: "tab",
        displayer: "Tab 1",
        value: [
          {
            type: "string",
            key: "tabText",
            displayer: "Tab 1 Text",
            value: tabTitle,
          },
          {
            type: "string",
            key: "subTitle",
            displayer: "Subtitle",
            value: contentSubtitle,
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: contentTitle,
          },
          {
            type: "string",
            key: "description",
            displayer: "Description",
            value: contentDescription,
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
                value: image,
              },
              {
                type: "string",
                key: "box1_text",
                displayer: "Box1 Text",
                value: boxText,
              },
              {
                type: "string",
                key: "box1_lowerText",
                displayer: "Box1 Lower Text",
                value: box1_lowerText,
              },
              {
                type: "string",
                key: "box2_text",
                displayer: "Button Text",
                value: box2Text,
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
                    value: "FaCarRear",
                  },
                  {
                    type: "string",
                    key: "text",
                    displayer: "Text",
                    value: icon1Text,
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
                    value: "FaCarRear",
                  },
                  {
                    type: "string",
                    key: "text",
                    displayer: "Text",
                    value: icon2Text,
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
                    value: icon3Text,
                  },
                ],
              },
            ],
          },
        ],
      } as TypeUsableComponentProps;
    };

    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        dummyData(
          "01 Premium cottage",
          "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-14.jpg",
          "Starting from",
          "$50.00",
          "BOOK NOW",
          "Phenomenal view",
          "Premium cottage",
          "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
          "BREAKFAST INCLUDED",
          "LAUNDRY FACILITY",
          "PICKUP AND DROP"
        ),
        dummyData(
          "02 Studios with terrace",
          "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-16.jpg",
          "Starting from",
          "$50.00",
          "BOOK NOW",
          "Garden view",
          "Studios with terrace",
          "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
          "BREAKFAST INCLUDED",
          "LAUNDRY FACILITY",
          "PICKUP AND DROP"
        ),
        dummyData(
          "03 Premium pavilions",
          "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-17.jpg",
          "Starting from",
          "$50.00",
          "BOOK NOW",
          "Phenomenal view",
          "Premium pavilions",
          "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
          "BREAKFAST INCLUDED",
          "LAUNDRY FACILITY",
          "PICKUP AND DROP"
        ),
        dummyData(
          "04 The luxury villa",
          "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-18.jpg",
          "Starting from",
          "$50.00",
          "BOOK NOW",
          "Phenomenal view",
          "Premium pavilions",
          "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
          "BREAKFAST INCLUDED",
          "LAUNDRY FACILITY",
          "PICKUP AND DROP"
        ),
        dummyData(
          "05 Grand deluxe room",
          "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-19.jpg",
          "Starting from",
          "$50.00",
          "BOOK NOW",
          "Phenomenal view",
          "Premium pavilions",
          "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
          "BREAKFAST INCLUDED",
          "LAUNDRY FACILITY",
          "PICKUP AND DROP"
        ),
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1"]
      }
    });
    this.setActiveTab(0);
  }

  setActiveTab(activeTabIndex: number) {
    this.setComponentState("activeTab", activeTabIndex);
    setTimeout(() => {
      this.setComponentState("startedIndex", activeTabIndex);
    }, 50);
  }

  static getName(): string {
    return "ECommerce 6";
  }

  render() {
    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
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
                        `${this.decorateCSS("tab-button")} ${this.getComponentState("activeTab") === index
                          ? this.decorateCSS("active")
                          : ""
                        }`
                      }
                      onClick={() => this.setActiveTab(index)}
                      data-animation={this.getPropValue("hoverAnimation").join(" ")}
                    >
                      {isTabTextVisible && (
                        <div className={this.decorateCSS("tabText")}>
                          {tab.tabText}
                        </div>
                      )}
                      {isTabIconVisible && (
                        <Base.Icon
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
          {this.castToObject<ITabs[]>("tabs").map(
            (tab: ITabs, index: number) => {
              const isBox1Visible =
                this.castToString(tab.image_container.box1_text) ||
                this.castToString(tab.image_container.box1_lowerText);
              const isBox2Visible =
                this.castToString(tab.image_container.box2_text) ||
                tab.image_container.box2_icon;
              const isBoxContainerVisible = isBox1Visible || isBox2Visible;
              const isImageContainerVisible = tab.image_container.image;

              const isIconContainerVisible = tab.icons_container.length > 0;

              const isContentContainerVisible =
                this.castToString(tab.subTitle) ||
                this.castToString(tab.title) ||
                this.castToString(tab.description) ||
                isIconContainerVisible;

              return (
                <div
                  className={
                    `${this.decorateCSS("tab")} ${this.getComponentState("activeTab") === index
                      ? this.decorateCSS("active")
                      : ""
                    } ${this.getComponentState("startedIndex") === index
                      ? this.decorateCSS("start")
                      : ""
                    }`
                  }
                >
                  <div className={this.decorateCSS("content")}>
                    {isImageContainerVisible && (
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={tab.image_container.image}
                          data-animation={this.getPropValue("hoverAnimation").join(" ")}
                        />
                        {isBoxContainerVisible && (
                          <div className={this.decorateCSS("box-container")}>
                            {isBox1Visible && (
                              <div className={this.decorateCSS("box1")}>
                                <div className={this.decorateCSS("box1-text")}>
                                  {tab.image_container.box1_text}
                                </div>
                                <div className={this.decorateCSS("box1-lower-text")}>
                                  {tab.image_container.box1_lowerText}
                                </div>
                              </div>
                            )}
                            {isBox2Visible && (
                              <ComposerLink path={tab.image_container.link}>
                                <div 
                                  className={this.decorateCSS("box2")}
                                  data-animation={this.getPropValue("hoverAnimation").join(" ")}
                                >
                                  <div
                                    className={this.decorateCSS("box2-text")}
                                  >
                                    {tab.image_container.box2_text}
                                  </div>
                                  <Base.Icon
                                    name={tab.image_container.box2_icon}
                                    propsIcon={{
                                      className: this.decorateCSS("box2-icon"),
                                    }}
                                  />
                                </div>
                              </ComposerLink>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    {isContentContainerVisible && (
                      <Base.VerticalContent
                        className={this.decorateCSS("content-container")}
                      >
                        {this.castToString(tab.subTitle) && (
                          <Base.SectionSubTitle
                            className={this.decorateCSS("subtitle")}
                          >
                            {tab.subTitle}
                          </Base.SectionSubTitle>
                        )}
                        {this.castToString(tab.title) && (
                          <Base.SectionTitle
                            className={this.decorateCSS("title")}
                          >
                            {tab.title}
                          </Base.SectionTitle>
                        )}
                        {this.castToString(tab.description) && (
                          <Base.SectionDescription
                            className={this.decorateCSS("description")}
                          >
                            {tab.description}
                          </Base.SectionDescription>
                        )}
                        {isIconContainerVisible && (
                          <div className={this.decorateCSS("icons-container")}>
                            {tab.icons_container.map((iconContainer) => {
                              const isTextVisible = this.castToString(
                                iconContainer.text
                              );
                              const isIconContainerVisible =
                                iconContainer.icon || isTextVisible;
                              return (
                                isIconContainerVisible && (
                                  <div className={this.decorateCSS("icon-container")}>
                                    {iconContainer.icon && (
                                      <Base.Icon
                                        name={iconContainer.icon}
                                        propsIcon={{
                                          className: this.decorateCSS("icon"),
                                        }}
                                      />
                                    )}
                                    {isTextVisible && (
                                      <div className={this.decorateCSS("text")}>
                                        {iconContainer.text}
                                      </div>
                                    )}
                                  </div>
                                )
                              );
                            })}
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ECommerce6;
