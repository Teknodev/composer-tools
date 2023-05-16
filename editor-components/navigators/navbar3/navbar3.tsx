import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";

class Navbar3 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Items",
      value: [
        {
          type: "string",
          key: "items",
          value: "Features",
          displayer: "Item",
        },
        {
          type: "string",
          key: "items",
          value: "Solutions",
          displayer: "Item",
        },
        {
          type: "string",
          key: "items",
          value: "Resources",
          displayer: "Item",
        },
        {
          type: "string",
          key: "items",
          value: "Pricing",
          displayer: "Item",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttonList",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "buttonItems",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              value: "Learn More",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Link",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Navbar 3";
  }

  render() {
    return (
      <div
        className={
          this.getPropValue("sticky")
            ? this.decorateCSS("container-sticky")
            : this.decorateCSS("container")
        }
      >
        <div className={this.decorateCSS("max-content")}>
          <nav className={this.decorateCSS("navigator")}>
            <div className={this.decorateCSS("items")}>
              <img src={this.getPropValue("image")} width={200} />
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return <h3 key={indexItemList}>{data.value}</h3>;
                }
              )}
            </div>
            <div className={this.decorateCSS("button-child")}>
              {this.castToObject<[]>("buttonList").map(
                (data: any, indexButtonList: number) => {
                  return (
                    <ComposerLink key={indexButtonList} path={data.value[1].value}>
                      <button>{data.value[0].value}</button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar3;
