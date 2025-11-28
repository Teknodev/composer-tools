import * as React from "react";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import styles from "./e-commerce3.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";

type Tab = {
  tabTitle: React.JSX.Element,
  title: React.JSX.Element,
  description: React.JSX.Element,
  details: Details[],
  properties: Properties[];
}

type Details = {
  title: React.JSX.Element,
  value: React.JSX.Element,
}

type Properties = {
  title: React.JSX.Element,
  items: { title: React.JSX.Element }[], 
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
              key: "tabTitle",
              displayer: "Tab Title",
              value: "DESCRIPTION",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "DESCRIPTION",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames.",
            },
            {
              type: "array",
              key: "details",
              displayer: "Details",
              value: [
                {
                  type: "object",
                  key: "detail",
                  displayer: "Detail",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "value",
                      displayer: "Value",
                      value: "",
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab",
          value: [
            {
              type: "string",
              key: "tabTitle",
              displayer: "Tab Title",
              value: "ADDITIONAL INFORMATION",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ADDITIONAL INFORMATION",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "details",
              displayer: "Details",
              value: [
                {
                  type: "object",
                  key: "detail",
                  displayer: "Detail",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Weight",
                    },
                    {
                      type: "string",
                      key: "value",
                      displayer: "Value",
                      value: "2 kg",
                    }
                  ]
                },
                {
                  type: "object",
                  key: "detail",
                  displayer: "Detail",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Dimensions",
                    },
                    {
                      type: "string",
                      key: "value",
                      displayer: "Value",
                      value: "10x10x15 cm",
                    }
                  ]
                }
              ]
            },
            {
              type: "array",
              key: "properties",
              displayer: "Properties",
              value: [
                {
                  type: "object",
                  key: "property",
                  displayer: "Property",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Color",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Beige",
                            },
                          ]
                        },
                        {
                          type: "object",
                          key: "property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Black",
                            },
                          ]
                        },
                      ],
                    }
                  ]
                },
                {
                  type: "object",
                  key: "property",
                  displayer: "Property",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Material",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Metal",
                            },
                          ]
                        },
                        {
                          type: "object",
                          key: "property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Black",
                            },
                          ]
                        },
                      ],
                    }
                  ]
                },
              ]
            },
          ]
        },
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
                  <>
                    {this.castToString(item.tabTitle) && (
                      <div className={`${this.decorateCSS("tab")} ${index === activeTab && this.decorateCSS("active")}`} onClick={() => handleChangeTab(index)}>
                        <span className={this.decorateCSS("tab-title")}>{item.tabTitle}</span>
                      </div>
                    )}
                  </>                  
                )
              })}
            </div>
          </Base.MaxContent>
        </Base.Container>
        <Base.Container className={this.decorateCSS("container-bottom")}>
          <Base.MaxContent className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("section")}>
              <div className={this.decorateCSS("tabs")}>
                {tabs.map((item: Tab, index: number) => (
                  index === activeTab && (
                    <div className={this.decorateCSS("tab-content")}>
                      <Base.VerticalContent className={this.decorateCSS("vertical")}>
                        {this.castToString(item.title) && <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>}
                        {this.castToString(item.description) && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
                        <div className={this.decorateCSS("content")}>
                          <div className={this.decorateCSS("left")}>
                          {(item.details ?? []).map((detail: Details) => {
                            return this.castToString(detail.title) || this.castToString(detail.value)? (
                              <span className={this.decorateCSS("detail-title")}>{detail.title}</span>
                            ) : null;
                          })}
                          {(item.properties ?? []).map((property: Properties, index:number) => {
                            return (this.castToString(property.title) || property.items.length > 0) ? (
                              <span className={this.decorateCSS("property-title")}>{property.title}</span>
                            ) : null;
                          })}
                          </div>
                          <div className={this.decorateCSS("right")}>
                          {(item.details ?? []).map((detail: Details) => {
                            return this.castToString(detail.value) || this.castToString(detail.title) ? (
                              <span className={this.decorateCSS("detail-value")}>{detail.value}</span>
                            ) : null;
                          })}

                          {(item.properties ?? []).map((property: Properties) => (
                            <>
                            {(this.castToString(property.title)|| (property.items.length > 0)) && (
                              <div className={this.decorateCSS("box")}>
                              {(property.items ?? []).length > 0 ? property.items.map((propItem, index) => {
                                return(
                                  <>
                                      <span key={index} className={this.decorateCSS("property-value")}>
                                      {propItem.title}
                                      </span>
                                  </>
                                )
                              }
                              ) : (<span key={index} className={this.decorateCSS("property-value")}></span>)}
                            </div>
                            )}
                            </>
                          ))}
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
