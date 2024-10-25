import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type PricingItems = {
  cardTitle: JSX.Element;
  cardPrice: JSX.Element;
  cardDuration: JSX.Element;
  cardIcon: string;
  cardList: ListItem[];
  cardButtonText: JSX.Element;
  cardButtonLink: string;
};

type ListItem = {
  listIcon: string;
  cardListItem: JSX.Element;
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
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
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
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now",
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: "",
            },
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
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now",
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: "",
            },
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
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now",
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: "",
            },
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
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now",
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing Table 2";
  }

  render() {
    const subtitle = this.castToString(
      this.getPropValue("pricing-table-subtitle")
    );
    const title = this.castToString(this.getPropValue("pricing-table-title"));
    const description = this.castToString(
      this.getPropValue("pricing-table-description")
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("table")}>
            <Base.VerticalContent>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}

              {description && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
            <Base.ListGrid
              gridCount={{
                pc: this.getPropValue("itemCount"),
                tablet: 2,
                phone: 1,
              }}
              className={this.decorateCSS("item-div")}
            >
              {this.castToObject<PricingItems[]>("pricingTableItem").map(
                (table: PricingItems, index: number) => {
                  table.cardList.map((listItem: ListItem, index: number) => {
                    return "";
                  });
                  const cardTitle = this.castToString(table.cardTitle);
                  const cardPrice = this.castToString(table.cardPrice);
                  const cardDuration = this.castToString(table.cardDuration);

                  return (
                    <Base.VerticalContent
                      className={this.decorateCSS("card-item-count")}
                    >
                      <div
                        key={index}
                        className={this.decorateCSS("item-card")}
                      >
                        <div className={this.decorateCSS("card-upper")}>
                          {cardTitle && (
                            <Base.H3 className={this.decorateCSS("card-title")}>
                              {cardTitle}
                            </Base.H3>
                          )}
                          {(cardPrice || cardDuration) && (
                            <div className={this.decorateCSS("card-price")}>
                              <span className={this.decorateCSS("price")}>
                                {table.cardPrice}
                              </span>
                              <span className={this.decorateCSS("duration")}>
                                {table.cardDuration}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className={this.decorateCSS("card-bottom")}>
                          {table.cardIcon && (
                            <div className={this.decorateCSS("card-img")}>
                              <ComposerIcon name={table.cardIcon} />
                            </div>
                          )}
                          {table.cardList.length > 0 && (
                            <ul className={this.decorateCSS("card-list")}>
                              {table.cardList.map(
                                (listItem: ListItem, index: number) => {
                                  const cardListItem = this.castToString(
                                    listItem.cardListItem
                                  );
                                  const listIcon = listItem.listIcon;

                                  return (
                                    <>
                                      {cardListItem && (
                                        <li
                                          key={index}
                                          className={this.decorateCSS(
                                            "card-list-item"
                                          )}
                                        >
                                          <ComposerIcon name={listIcon} />
                                          <span
                                            className={this.decorateCSS(
                                              "list-item"
                                            )}
                                          >
                                            {listItem.cardListItem}
                                          </span>
                                        </li>
                                      )}
                                    </>
                                  );
                                }
                              )}
                            </ul>
                          )}
                          {this.castToString(table.cardButtonText) && (
                            <ComposerLink path={table.cardButtonLink}>
                              <button
                                className={this.decorateCSS("card-button")}
                              >
                                {table.cardButtonText}
                              </button>
                            </ComposerLink>
                          )}
                        </div>
                      </div>
                    </Base.VerticalContent>
                  );
                }
              )}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PricingTable2;
