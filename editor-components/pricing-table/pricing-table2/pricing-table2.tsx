import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type PricingItems = {
  button: any;
  cardTitle: React.JSX.Element;
  cardPrice: React.JSX.Element;
  cardDuration: React.JSX.Element;
  cardIcon: string;
  cardList: ListItem[];
  buttonType: INPUTS.CastedButton;
};

type ListItem = {
  listIcon: string;
  cardListItem: React.JSX.Element;
};

class PricingTable2 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "pricing-table-subtitle",
      displayer: "Subtitle",
      value: "WORK PACKAGES",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title",
      displayer: "Title",
      value: "Pricing Plans",
    });
    this.addProp({
      type: "string",
      key: "pricing-table-description",
      displayer: "Desctiption",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
      max: 5,
    });

    this.addProp({
      type: "array",
      key: "pricingTableItem",
      displayer: "Pricing Table Item",
      value: [
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Icon",
              value: "TfiAnnouncement",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON("button", "Button", "Select Now", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Icon",
              value: "FaExternalLinkAlt",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON("button", "Button", "Select Now", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Icon",
              value: "FaAnchor",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON("button", "Button", "Select Now", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "tableItem",
          displayer: "Table Item",
          value: [
            {
              type: "string",
              key: "cardTitle",
              displayer: "Pricing Title",
              value: "Basic Package",
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450",
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month",
            },
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Icon",
              value: "IoIosAirplane",
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
                {
                  type: "object",
                  displayer: "List Item",
                  key: "listItem",
                  value: [
                    {
                      type: "string",
                      key: "cardListItem",
                      displayer: "List Item",
                      value: "Website Design",
                    },
                    {
                      type: "icon",
                      key: "listIcon",
                      displayer: "List Icon",
                      value: "FaCheck",
                    },
                  ],
                },
              ],
            },
            INPUTS.BUTTON("button", "Button", "Select Now", "", null, null, "Primary"),
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Pricing 2";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("pricing-table-subtitle"));
    const title = this.castToString(this.getPropValue("pricing-table-title"));
    const description = this.castToString(this.getPropValue("pricing-table-description"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("table")}>
            {(subtitle || title || description) && (
              <Base.VerticalContent className={this.decorateCSS("up-content")}>
                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("pricing-table-subtitle")}</Base.SectionSubTitle>}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("pricing-table-title")}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("pricing-table-description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
            <Base.ListGrid
              gridCount={{
                pc: this.getPropValue("itemCount"),
                tablet: 2,
                phone: 1,
              }}
              className={this.decorateCSS("item-div")}
            >
              {this.castToObject<PricingItems[]>("pricingTableItem").map((table: PricingItems, index: number) => {
                const cardTitle = this.castToString(table.cardTitle);
                const cardPrice = this.castToString(table.cardPrice);
                const cardDuration = this.castToString(table.cardDuration);

                return (
                  <Base.VerticalContent className={this.decorateCSS("card-item-count")}>
                    <div key={index} className={this.decorateCSS("item-card")}>
                      <Base.VerticalContent className={`${this.decorateCSS("card-upper")} ${cardTitle || cardPrice || cardDuration ? "" : this.decorateCSS("hidden")}`}>
                        {cardTitle && <Base.H2 className={this.decorateCSS("card-title")}>{table.cardTitle}</Base.H2>}
                        {(cardPrice || cardDuration) && (
                          <div className={this.decorateCSS("card-price")}>
                            {cardPrice && <Base.H1 className={this.decorateCSS("price")}>{table.cardPrice}</Base.H1>}
                            {cardDuration && <Base.H2 className={this.decorateCSS("duration")}>{table.cardDuration}</Base.H2>}
                          </div>
                        )}
                      </Base.VerticalContent>

                      <Base.VerticalContent className={this.decorateCSS("card-bottom")}>
                        {table.cardIcon && (
                          <div className={this.decorateCSS("card-img")}>
                            <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={table.cardIcon} />
                          </div>
                        )}
                        {table.cardList.length > 0 && (
                          <Base.VerticalContent className={this.decorateCSS("card-list")}>
                            {table.cardList.map((listItem: ListItem, index: number) => {
                              const cardListItem = this.castToString(listItem.cardListItem);
                              const listIcon = listItem.listIcon;
                              return (
                                <>
                                  {cardListItem && (
                                    <span key={index} className={this.decorateCSS("card-list-item")}>
                                      <ComposerIcon
                                        name={listIcon}
                                        propsIcon={{
                                          className: this.decorateCSS("list-icon"),
                                        }}
                                      />
                                      <span className={this.decorateCSS("list-item")}>{listItem.cardListItem}</span>
                                    </span>
                                  )}
                                </>
                              );
                            })}
                          </Base.VerticalContent>
                        )}
                        {this.castToString(table.button.text) && (
                          <ComposerLink path={table.button.url}>
                            <Base.Button buttonType={table.button.type} className={this.decorateCSS("card-button")}>
                              {table.button.text}
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </Base.VerticalContent>
                    </div>
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable2;
