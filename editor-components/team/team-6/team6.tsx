import * as React from "react";
import styles from "./team6.module.scss";
import { Team } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

type Feature = {
  feature: React.JSX.Element;
  icon: string;
};

type Card = {
  image: string;
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
      key: "title1",
      displayer: "Subtitle",
      value: "TEAM",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Title",
      value: "Building the future together.",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b18bbd2970002c627ce0?alt=media&timestamp=1719502692150",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/8434878/pexels-photo-8434878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "CiCircleCheck",
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
      max: 5,
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

    const title1Exist = this.getPropValue("title1", { as_string: true });
    const descriptionExist = this.getPropValue("description", { as_string: true });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(title1Exist || descriptionExist) && (
              <div className={this.decorateCSS("up-page")}>
                <Base.VerticalContent className={this.decorateCSS("text-group")}>
                  {title1Exist && <Base.SectionSubTitle className={this.decorateCSS("title1")}>{this.getPropValue("title1")}</Base.SectionSubTitle>}
                  {descriptionExist && <Base.SectionTitle className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionTitle>}
                </Base.VerticalContent>
              </div>
            )}

            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("items").map((card: Card, indexItems: number) => {
                const cardNameExist = this.castToString(card.name);
                const cardPositionExist = this.castToString(card.position);
                const hasCard = cardNameExist || cardPositionExist || card.image || card.features.length > 0;

                return (
                  hasCard && (
                    <div key={indexItems} className={this.decorateCSS("all-card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                      <div className={this.decorateCSS("top")}>
                        <div className={this.decorateCSS("image-wrapper")}>
                          {card.image ? (
                            <div onClick={() => handleButton(indexItems)} className={this.decorateCSS("image-button")}>
                              {card.features.length > 0 &&
                                (this.getComponentState("activeIndex") === indexItems ? (
                                  <Base.Icon name={this.getPropValue("closingIcon")} propsIcon={{ className: this.decorateCSS("image-icon") }} />
                                ) : (
                                  <Base.Icon name={this.getPropValue("openingIcon")} propsIcon={{ className: this.decorateCSS("image-icon") }} />
                                ))}
                              <div className={this.decorateCSS("image-container")}>
                                <img 
                                  className={`${this.decorateCSS("image")} ${this.getComponentState("activeIndex") === indexItems && card.features.length > 0 ? this.decorateCSS("shrink") : ""}`} 
                                  src={card.image} 
                                  alt={this.castToString(card.name)} 
                                  data-animation={this.getPropValue("hoverAnimation").join(" ")} 
                                />
                              </div>
                              <div className={this.decorateCSS("card-info")}>
                                {cardNameExist && <Base.H2 className={this.decorateCSS("card-name")}>{card.name}</Base.H2>}
                                {cardPositionExist && <Base.H4 className={this.decorateCSS("position")}>{card.position}</Base.H4>}
                                
                                {this.getComponentState("activeIndex") === indexItems && card.features.length > 0 && (
                                  <Base.VerticalContent className={this.decorateCSS("features")}>
                                    {card.features.map((feature: Feature, idx: number) => (
                                      <div key={idx} className={this.decorateCSS("feature")}>
                                        <Base.Icon
                                          name={feature.icon}
                                          propsIcon={{
                                            className: this.decorateCSS("icon"),
                                          }}
                                        />
                                        <Base.P className={this.decorateCSS("feature-element")}>{feature.feature}</Base.P>
                                      </div>
                                    ))}
                                  </Base.VerticalContent>
                                )}
                              </div>
                            </div>
                          ) : (
                            <Base.VerticalContent className={`${this.decorateCSS("overlay-bar")} ${this.decorateCSS("overlay-visible")}`}>
                              {cardNameExist && <Base.H2 className={this.decorateCSS("card-name")}>{card.name}</Base.H2>}
                              {cardPositionExist && <Base.H4 className={this.decorateCSS("position")}>{card.position}</Base.H4>}

                              {card.features.length > 0 && (
                                <Base.VerticalContent className={this.decorateCSS("features")}>
                                  {card.features.map((feature: Feature, idx: number) => (
                                    <div key={idx} className={this.decorateCSS("feature")}>
                                      <Base.Icon
                                        name={feature.icon}
                                        propsIcon={{
                                          className: this.decorateCSS("icon"),
                                        }}
                                      />
                                      <Base.P className={this.decorateCSS("feature-element")}>{feature.feature}</Base.P>
                                    </div>
                                  ))}
                                </Base.VerticalContent>
                              )}
                            </Base.VerticalContent>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </Base.ListGrid>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team6;
