import * as React from "react";
import styles from "./team6.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

type Feature = {
  feature: React.JSX.Element;
  icon: TypeMediaInputValue;
};

type Card = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  position: React.JSX.Element;
  description: React.JSX.Element;
  features: Feature[];
};

class Team6 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TEAM",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Building the future together.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "icon",
      key: "openingIcon",
      displayer: "Opening Icon",
      value: "IoAddCircleOutline",
    });

    this.addProp({
      type: "icon",
      key: "closingIcon",
      displayer: "Closing Icon",
      value: "IoRemoveCircleOutline",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b18bbd2970002c627ce0?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sarah Johnson",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Marketing Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Able to generate innovative ideas and solutions.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Effective in conveying ideas and collaborating with team members.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Focuses on accuracy and thoroughness in tasks.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Able to assess and interpret data to make informed decisions.",
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
          displayer: "Items",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "David Smith",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Software Engineer",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Skilled at finding solutions to complex technical issues.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Comfortable with changing technologies and environments.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Works well with team members to achieve common goals.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Writes clean, maintainable, and efficient code.",
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
          displayer: "Items",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://images.pexels.com/photos/8434878/pexels-photo-8434878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Emily Davis",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Graphic Designer",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Has a strong sense of design and visual aesthetics.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Expert in graphic design software like Adobe Photoshop and Illustrator.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Finds unique solutions to design challenges.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Ensures precision and quality in every design project.",
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
          displayer: "Items",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Michael Brown",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Financial Analyst",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Makes decisions based on thorough analysis and data interpretation.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Plans and executes financial strategies effectively.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Ability to analyze financial reports and trends.",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item-list",
                  displayer: "Custom Fields",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      displayer: "Icon",
                      value: {
                        type: "icon",
                        name: "CiCircleCheck"
                      },
                    },
                    {
                      type: "string",
                      key: "feature",
                      displayer: "Feature",
                      value: "Meticulous in reviewing financial data and reports.",
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
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
    this.setComponentState("activeIndex", null);
  }

  static getName(): string {
    return "Team 6";
  }

  render() {
    const handleButton = (index: number) => {
      if (this.getComponentState("activeIndex") === index) {
        this.setComponentState("activeIndex", null);
      } else {
        this.setComponentState("activeIndex", index);
      }
    };

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasContent) && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("items").map((card: Card, indexItems: number) => {
              const cardNameExist = this.castToString(card.name);
              const cardPositionExist = this.castToString(card.position);
              const cardDescriptionExist = this.castToString(card.description);
              const hasCard = cardNameExist || cardPositionExist || cardDescriptionExist || card.profileImage || card.features.length > 0;

              return (
                hasCard && (
                  <div key={indexItems} className={this.decorateCSS("all-card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                    <div className={this.decorateCSS("image-wrapper")}>
                      <div onClick={() => handleButton(indexItems)} className={this.decorateCSS("image-button")}>
                        {card.features.length > 0 &&
                          (this.getComponentState("activeIndex") === indexItems ? (
                            <Base.Icon name={this.getPropValue("closingIcon")} propsIcon={{ className: this.decorateCSS("image-icon") }} />
                          ) : (
                            <Base.Icon name={this.getPropValue("openingIcon")} propsIcon={{ className: this.decorateCSS("image-icon") }} />
                          ))}
                        <div className={this.decorateCSS("image-container")}>
                          <Base.Media
                            value={card.profileImage}
                            className={`${this.decorateCSS("image")} ${this.getComponentState("activeIndex") === indexItems && card.features.length > 0 ? this.decorateCSS("shrink") : ""}`}
                            data-animation={this.getPropValue("hoverAnimation").join(" ")}
                          />
                        </div>
                        <Base.VerticalContent className={this.decorateCSS("card-info")}>
                          {cardNameExist && <Base.H2 className={this.decorateCSS("card-name")}>{card.name}</Base.H2>}
                          {cardPositionExist && <Base.H4 className={this.decorateCSS("card-position")}>{card.position}</Base.H4>}
                          {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>}
                          {this.getComponentState("activeIndex") === indexItems && card.features.length > 0 && (
                            <Base.VerticalContent className={this.decorateCSS("features")}>
                              {card.features.map((feature: Feature, idx: number) => (
                                <div key={idx} className={this.decorateCSS("feature")}>
                                  {feature.icon && <Base.Media value={feature?.icon} className={`${this.decorateCSS("icon")} ${feature?.icon?.type === "image" && this.decorateCSS("has-image")}`} />}
                                  {feature.feature && <Base.P className={this.decorateCSS("feature-element")}>{feature.feature}</Base.P>}
                                </div>
                              ))}
                            </Base.VerticalContent>
                          )}
                        </Base.VerticalContent>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team6;