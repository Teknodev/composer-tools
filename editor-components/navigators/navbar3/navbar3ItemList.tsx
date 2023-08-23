import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BorderBottom } from "@mui/icons-material";

export default class Navbar3ItemList extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });


    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Features",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Solutions",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Resources",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Pricing",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["navActive"] = true;
  }
  getName(): string {
    return "Navbar 2";
  }
  navClick() {
    let value: boolean = this.state.componentProps["navActive"];
    this.state.componentProps["navActive"] = !value;
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
            <nav  style={{ display: "flex", alignItems: "center",  justifyContent: "center" }} className={this.decorateCSS("topnav")}>
            <div className={this.decorateCSS("bottom-line")}>
            <div className={`${this.decorateCSS("items")} ${this.getPropValue("middle") ? this.decorateCSS("middle") : ""}`}>
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return (
                    <ComposerLink
                      key={indexItemList}
                      path={data.value[1].value}>
                       
                        <a  key={indexItemList} style={{ fontSize: '24px',marginRight:"10px" }}>{data.value[0].value}</a>
                        
                    </ComposerLink>
                  );
                }
              )}
            </div>
            </div>
          </nav>
          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <img src={this.getPropValue("image")} width={200} />
              <img
                className={this.decorateCSS("img-hamburger")}
                src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187"
                onClick={() => {
                    this.navClick();
                }}
              />
            </div>
            {this.state.componentProps["navActive"] && (
            <div className={this.decorateCSS("navbar-child")}>
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return (
                    <ComposerLink
                      key={indexItemList}
                      path={data.value[1].value}
                    >
                      <h3 key={indexItemList}>{data.value[0].value}</h3>
                    </ComposerLink>
                  );
                }
              )}
            </div>
          )}
          </nav>
        </div>
      </div>
    );
  }
}