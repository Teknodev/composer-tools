import * as React from "react";
import { BaseECommerce } from "../../EditorComponent";
import styles from "./e-commerce3.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Tab = {
  tabTitle: React.JSX.Element,
  subtitle: React.JSX.Element,
  title: React.JSX.Element,
  description: React.JSX.Element,
  details: Details[],
  properties: Properties[];
}

type Details = {
  details_detail_title: React.JSX.Element,
  value: React.JSX.Element,
}

type Properties = {
  properties_property_title: React.JSX.Element,
  items_property: { items_property_title: React.JSX.Element }[],
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
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
                      key: "details_detail_title",
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
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
                      key: "details_detail_title",
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
                      key: "details_detail_title",
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
                      key: "properties_property_title",
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
                          key: "items_property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "items_property_title",
                              displayer: "Title",
                              value: "Beige",
                            },
                          ]
                        },
                        {
                          type: "object",
                          key: "items_property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "items_property_title",
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
                      key: "properties_property_title",
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
                          key: "items_property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "items_property_title",
                              displayer: "Title",
                              value: "Metal",
                            },
                          ]
                        },
                        {
                          type: "object",
                          key: "items_property",
                          displayer: "Property",
                          value: [
                            {
                              type: "string",
                              key: "items_property_title",
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
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tab-buttons")}>
            {tabs.map((item: Tab, index: number) => (
              <>
                {this.castToString(item.tabTitle) && (
                  <div className={`${this.decorateCSS("tab")} ${index === activeTab && this.decorateCSS("active")}`} onClick={() => handleChangeTab(index)}>
                    <Base.H6 className={this.decorateCSS("tab-title")}>{item.tabTitle}</Base.H6>
                  </div>
                )}
              </>
            ))}
          </div>
        </Base.MaxContent>
        <div className={this.decorateCSS("container-bottom")}>
          <Base.MaxContent className={this.decorateCSS("content-wrapper")}>
            {tabs.map((item: Tab, index: number) => (
              index === activeTab && (
                <div className={this.decorateCSS("tab-content")}>
                  <Base.VerticalContent className={this.decorateCSS("vertical")}>
                    {this.castToString(item.subtitle) && <Base.H5 className={this.decorateCSS("subtitle")}>{item.subtitle}</Base.H5>}
                    {this.castToString(item.title) && <Base.H4 className={this.decorateCSS("title")}>{item.title}</Base.H4>}
                    {this.castToString(item.description) && <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>}
                    {(((item.details ?? []).some(d => this.castToString(d.details_detail_title) || this.castToString(d.value))) || ((item.properties ?? []).some(p => this.castToString(p.properties_property_title) || p.items_property.length > 0))) && (
                    <div className={this.decorateCSS("content")}>
                      <div className={this.decorateCSS("left")}>
                        {(item.details ?? []).map((detail: Details) => (
                          (this.castToString(detail.details_detail_title) || this.castToString(detail.value)) ? (
                            <Base.P className={this.decorateCSS("detail-title")}>{detail.details_detail_title}</Base.P>
                          ) : null
                        ))}
                        {(item.properties ?? []).map((property: Properties) => (
                          (this.castToString(property.properties_property_title) || property.items_property.length > 0) ? (
                            <Base.P className={this.decorateCSS("property-title")}>{property.properties_property_title}</Base.P>
                          ) : null
                        ))}
                      </div>
                      <div className={this.decorateCSS("right")}>
                        {(item.details ?? []).map((detail: Details) => (
                          (this.castToString(detail.value) || this.castToString(detail.details_detail_title)) ? (
                            <Base.P className={this.decorateCSS("detail-value")}>{detail.value}</Base.P>
                          ) : null
                        ))}
                        {(item.properties ?? []).map((property: Properties) => (
                          <>
                            {(this.castToString(property.properties_property_title) || property.items_property.length > 0) && (
                              <div className={this.decorateCSS("box")}>
                                {(property.items_property ?? []).length > 0 ? property.items_property.map((propItem, index) => (
                                  <Base.P key={index} className={this.decorateCSS("property-value")}>
                                    {propItem.items_property_title}
                                  </Base.P>
                                )) : null}
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                    )}
                  </Base.VerticalContent>
                </div>
              )
            ))}
          </Base.MaxContent>
        </div>
      </Base.Container>
    )
  }
}

export default ECommerce3;
