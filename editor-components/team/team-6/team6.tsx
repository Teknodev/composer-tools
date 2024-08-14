import * as React from "react";
import styles from "./team6.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import { useState } from 'react';
import { features } from "monaco-editor/esm/metadata";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Feature = {
  feature: JSX.Element;
  icon: string;
}

type Card = {
  image: string;
  name: JSX.Element;
  position: JSX.Element;
  description: JSX.Element;
  features: Feature[];
};

type Button = {
  link: string;
  text: string;
  isPrimary: boolean;
};


class Team6 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title",
      value: "TEAM",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Building the future together.",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b18bbd2970002c627ce0?alt=media&timestamp=1719502692150",
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
              value:
                "https://images.pexels.com/photos/8434878/pexels-photo-8434878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
              value:
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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
                      value: "CiCircleCheck"
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


    this.setComponentState("activeIndex", null)

  }

  getName(): string {
    return "Team 6";
  }

  render() {

    const handleButton = (index: number) => {
      if (this.getComponentState("activeIndex") === index) {
        this.setComponentState("activeIndex", null)
      } else {
        this.setComponentState("activeIndex", index)
      }
    };

    const title1Exist = this.getPropValue("title1", { as_string: true });
    const descriptionExist = this.getPropValue("description", { as_string: true });
    const shouldRenderUpPage = title1Exist && descriptionExist;
    const image = this.getPropValue("image");
    const positionExist: [] = this.getPropValue("position", { as_string: true });
    const nameExist: [] = this.getPropValue("name", { as_string: true });


    const items = this.castToObject<Card[]>("items");
    const itemCount = this.getPropValue('itemCount')
    console.log("Item Count:", itemCount);


    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(title1Exist || descriptionExist) && (
              <div className={this.decorateCSS("up-page")}>
                <div className={this.decorateCSS("text-group")}>
                  {title1Exist && (
                    <h1
                      className={this.decorateCSS("title1")}
                    >
                      {this.getPropValue("title1")}
                    </h1>
                  )}
                  {descriptionExist && (
                    <p
                      className={this.decorateCSS("description")}
                    >
                      {this.getPropValue("description")}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className={this.decorateCSS("down-page")}
              style={{

              }}

            >
              {this.castToObject<Card[]>("items").length > 0 && this.castToObject<Card[]>("items").map(
                (card: Card, indexItems: number) => (
                  <div
                    key={indexItems}
                    className={this.decorateCSS("all-card")}
                    style={{
                      width: `calc((100% / ${this.getPropValue("itemCount")}) - 60px)`,
                    }}
                  >

                    <div className={this.decorateCSS("top")}>

                      <div className={this.decorateCSS("image-wrapper")}>

                        <button
                          onClick={() => handleButton(indexItems)}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: '0',
                            margin: '0',
                            outline: 'none',
                            cursor: 'pointer',
                            width: '100%'
                          }}
                        >
                          {this.getComponentState("activeIndex") === indexItems ? (
                            <RemoveCircle className={this.decorateCSS("image-icon")} style={{
                              position: 'absolute',
                              top: '5px',
                              right: '5px',
                              zIndex: '1',
                              fontSize: '24px',
                              color: 'var(--font-color-primary)',
                              opacity: '0.6',

                            }} />
                          ) : (
                            <AddCircle className={this.decorateCSS("image-icon")} style={{
                              position: 'absolute',
                              top: '5px',
                              right: '5px',
                              zIndex: '1',
                              fontSize: '24px',
                              color: 'var(--font-color-primary)',
                              opacity: '0.6'
                            }} />
                          )}
                          {card.image && (
                            <img
                              className={`${this.decorateCSS("image")} ${this.getComponentState("activeIndex") === indexItems ? this.decorateCSS("shrink") : ""}`}
                              src={card.image}
                              alt={this.castToString(card.name)}
                            />
                          )}

                          <div
                            className={this.decorateCSS("overlay-bar")}
                          >
                            {this.castToString(card.name) && <h5 className={this.decorateCSS("card-name")}>{card.name}</h5>}
                            {this.castToString(card.name) && this.castToString(card.position) && <div className={this.decorateCSS("separator")}></div>}
                            {this.castToString(card.position) && <h2 className={this.decorateCSS("position")}>{card.position}</h2>}

                            {this.getComponentState("activeIndex") === indexItems && card.features.length > 0 && (
                              <ul className={this.decorateCSS("features")}>
                                {card.features.map((feature: Feature, idx: number) => (
                                  <li key={idx}>
                                    <ComposerIcon name={feature.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                    {feature.feature}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default Team6;   