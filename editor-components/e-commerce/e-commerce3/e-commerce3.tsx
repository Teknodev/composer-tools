import * as React from "react";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import styles from "./e-commerce3.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";

type Tab = {
  title: string,
  description: string,
  weight: number,
  unit: string,
  dimensions: string,
  colors: Color[],
  materials: Material[],
}

type Color = {
  name: string,
}

type Material = {
  name: string,
}

class ECommerce3 extends BaseECommerce {
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
          displayer: "Tab",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Additional information",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "number",
              key: "weight",
              displayer: "Weight",
              value: 2,
            },
            {
              type: "select",
              key: "unit",
              displayer: "Weight Unit",
              value: "kg",
              additionalParams: {
                selectItems: ["kg","lb"],
              }
            },
            {
              type: "string",
              key: "dimensions",
              displayer: "Dimensions",
              value: "10x10x15 cm",
            },
            {
              type: "array",
              key: "colors",
              displayer: "Colors",
              value: [
                {
                  type: "object",
                  key: "color",
                  displayer: "Color",
                  value: [
                    {
                      type: "string",
                      key: "name",
                      displayer: "Name",
                      value: "Beige",
                    },
                  ]
                },
                {
                    type: "object",
                    key: "color",
                    displayer: "Color",
                    value: [
                      {
                        type: "string",
                        key: "name",
                        displayer: "Name",
                        value: "Black",
                      },
                    ]
                  }
              ]
            },
            {
              type: "array",
              key: "materials",
              displayer: "Materials",
              value: [
                {
                  type: "object",
                  key: "material",
                  displayer: "Materials",
                  value: [
                    {
                      type: "string",
                      key: "name",
                      displayer: "Name",
                      value: "Metal",
                    },
                  ]
                },
                {
                  type: "object",
                  key: "material",
                  displayer: "Material",
                  value: [
                    {
                      type: "string",
                      key: "name",
                      displayer: "Name",
                      value: "Wood",
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
            type: "object",
            key: "tab",
            displayer: "Tab",
            value: [
              {
                type: "string",
                key: "title",
                displayer: "Title",
                value: "Description",
              },
              {
                type: "string",
                key: "description",
                displayer: "Description",
                value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames.",
              },
              {
                type: "number",
                key: "weight",
                displayer: "Weight",
                value: null,
              },
              {
                type: "select",
                key: "unit",
                displayer: "Weight Unit",
                value: null,
                additionalParams: {
                  selectItems: ["kg","lb"],
                }
              },
              {
                type: "string",
                key: "dimensions",
                displayer: "Dimensions",
                value: "",
              },
              {
                type: "array",
                key: "colors",
                displayer: "Colors",
                value: [
                  {
                    type: "object",
                    key: "color",
                    displayer: "Color",
                    value: [
                      {
                        type: "string",
                        key: "name",
                        displayer: "Name",
                        value: "",
                      },
                    ]
                  },
                ]
              },
              {
                type: "array",
                key: "materials",
                displayer: "Materials",
                value: [
                  {
                    type: "object",
                    key: "material",
                    displayer: "Materials",
                    value: [
                      {
                        type: "string",
                        key: "name",
                        displayer: "Name",
                        value: "",
                      },
                    ]
                  },
                ]
              }
            ]
          }
      ]
    });
    this.setComponentState("activeTab", 0);
  }

  static getName(): string {
    return "ECommerce 3";
  }
  
  render() {
    const handleChangeTab = (index: number) => {
      this.setComponentState("activeTab", index);
    }

    const tabs = this.castToObject<Tab[]>("tabs");
    const activeTab = this.getComponentState("activeTab");

    return (
      <div className={this.decorateCSS("container")}>
        <Base.Container className={this.decorateCSS("container-top")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("tab-buttons")}>
              {tabs.map((item: Tab, index: number) => {
                return (
                  <div className={`${this.decorateCSS("tab")} ${index === activeTab && this.decorateCSS("active")}`} onClick={() => handleChangeTab(index)}>
                    <span className={this.decorateCSS("title")}>{item.title}</span>
                  </div>
                )
              })}
            </div>
          </Base.MaxContent>
        </Base.Container>
        <Base.Container className={this.decorateCSS("container-bottom")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("section")}>
              <div className={this.decorateCSS("tabs")}>
                {tabs.map((item: Tab, index: number) => (
                  index === activeTab && (
                    <div className={this.decorateCSS("tab")}>
                      <Base.VerticalContent className={this.decorateCSS("vertical")}>
                        {item.title && <Base.H2 className={this.decorateCSS("title")}>{item.title}</Base.H2>}
                        {item.description && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
                        <div className={this.decorateCSS("content")}>
                          <div className={this.decorateCSS("left")}>
                            {item.weight && <span className={this.decorateCSS("item")}>Weight</span>}
                            {this.castToString(item.dimensions) && <span className={this.decorateCSS("item")}>Dimensions</span>}
                            {item.colors.length > 0 && this.castToString(item.colors[0].name) ? <span className={this.decorateCSS("item")}>Color</span> : ""}
                            {item.materials.length > 0 && this.castToString(item.materials[0].name) ? <span className={this.decorateCSS("item")}>Material</span> : ""}
                          </div>
                          <div className={this.decorateCSS("right")}>
                            {item.weight && <span className={this.decorateCSS("item")}>{item.weight + " " + item.unit}</span>}
                            {this.castToString(item.dimensions)  && <span className={this.decorateCSS("item")}>{item.dimensions}</span>}
                            {item.colors.length > 0 && (
                              <div className={this.decorateCSS("box")}>
                                {item.colors.map((value: Color, index: number) => {
                                  const lenght = item.colors.length;
                                  return (
                                    <span className={this.decorateCSS("item")}>{value.name}{index+1 !== lenght && ", "}</span>
                                  )
                                })}
                              </div>
                            )}
                            {item.materials.length > 0 && (
                              <div className={this.decorateCSS("box")}>
                                {item.materials.map((value: Material, index: number) => {
                                  const lenght = item.materials.length;
                                  return (
                                    <span className={this.decorateCSS("item")}>{value.name}{index+1 !== lenght && ", "}</span>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </Base.VerticalContent>
                    </div>
                  )
                ))}
              </div>
            </div>
          </Base.MaxContent>
        </Base.Container>
      </div>
    )
  }
}

export default ECommerce3;