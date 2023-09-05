import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table2.module.scss";

type PricingItems = {
  cardTitle: string,
  cardPrice: string,
  cardDuration: string,
  cardImg: string,
  cardList: string[],
  cardButtonText: string,
  cardButtonLink: string
  map(arg0: (table: PricingItems, index: number) => React.JSX.Element): React.ReactNode;
};

type PricingProps = {
  items: PricingItems[]
  map(arg0: (table: PricingItems, index: number) => React.JSX.Element): React.ReactNode;
};
class PricingTable2 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "pricing-table-subtitle",
      displayer: "Subtitle",
      value: "WORK PACKAGES"
    });
    this.addProp({
      type: "string",
      key: "pricing-table-title",
      displayer: "Title",
      value: "Pricing Plans"
    });
    this.addProp({
      type: "string",
      key: "pricing-table-description",
      displayer: "Desctiption",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
              value: "Basic Package"
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month"
            },
            {
              type: "image",
              key: "cardImg",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3423f057bdf002c295a4b?alt=media&timestamp=1692615215226"
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Website Design"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Graphic Designing"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Web Development"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Business Consulting"
                },
              ]
            },
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            }
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
              value: "Basic Package"
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month"
            },
            {
              type: "image",
              key: "cardImg",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3423f057bdf002c295a4a?alt=media&timestamp=1692615215226"
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Website Design"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Graphic Designing"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Web Development"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Business Consulting"
                },
              ]
            },
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            }
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
              value: "Basic Package"
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month"
            },
            {
              type: "image",
              key: "cardImg",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3423f057bdf002c295a49?alt=media&timestamp=1692615215226"
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Website Design"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Graphic Designing"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Web Development"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Business Consulting"
                },
              ]
            },
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            }
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
              value: "Basic Package"
            },
            {
              type: "string",
              key: "cardPrice",
              displayer: "Price",
              value: "$450"
            },
            {
              type: "string",
              key: "cardDuration",
              displayer: "Duration",
              value: "/month"
            },
            {
              type: "image",
              key: "cardImg",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3423f057bdf002c295a4c?alt=media&timestamp=1692615215226"
            },
            {
              type: "array",
              key: "cardList",
              displayer: "Feature List",
              value: [
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Website Design"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Graphic Designing"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Web Development"
                },
                {
                  type: "string",
                  key: "cardListItem",
                  displayer: "List Item",
                  value: "✅ Business Consulting"
                },
              ]
            },
            {
              type: "string",
              key: "cardButtonText",
              displayer: "Button Text",
              value: "Select Now"
            },
            {
              type: "page",
              key: "cardButtonLink",
              displayer: "Button Link",
              value: ""
            }
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
  }

  getName(): string {
    return "Pricing Table 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
  <div className={this.decorateCSS("max-content")}>
    <div className={this.decorateCSS("table")}>
      <h3 className={this.decorateCSS("subtitle")}>{this.getPropValue("pricing-table-subtitle")}</h3>
      <h1 className={this.decorateCSS("title")}>{this.getPropValue("pricing-table-title")}</h1>
      <p className={this.decorateCSS("description")}>{this.getPropValue("pricing-table-description")}</p>
      <div className={this.decorateCSS("item-div")}>
        {this.castToObject<PricingProps>("pricingTableItem").map(
          (table: PricingItems, index: number) => {
            table.cardList.map((listItem: string, index: number) => {
               return '';
            } )
            return (
              <div className={this.decorateCSS("card-item-count")} style={{
                width: 90 / this.getPropValue("itemCount") + "%",
              }}>
              <div key={index} className={this.decorateCSS("item-card")}>
                <div className={this.decorateCSS("card-upper")}>
                  <h3 className={this.decorateCSS("card-title")}>{table.cardTitle}</h3>
                  <div className={this.decorateCSS("card-price")}>
                    <span className={this.decorateCSS("price")}>{table.cardPrice}</span>
                    <span className={this.decorateCSS("duration")}>{table.cardDuration}</span>
                  </div>
                </div>
                <div className={this.decorateCSS("card-bottom")}>
                  <div className={this.decorateCSS("card-img")}>
                    <img src={table.cardImg} alt="card-img" />
                  </div>
                  <ul className={this.decorateCSS("card-list")}>
                    {table.cardList.map((listItem: any, index: number) => {
                      return (
                        <li key={index} className={this.decorateCSS("card-list-item")}>
                          <span className={this.decorateCSS("list-item")}>{listItem.value}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <ComposerLink path={table.cardButtonLink}>
                    <button className={this.decorateCSS("card-button")}>{table.cardButtonText}</button>
                  </ComposerLink>
                </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default PricingTable2;
