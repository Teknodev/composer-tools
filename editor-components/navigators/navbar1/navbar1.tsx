import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";

class Navbar1 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
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
              value: "Lorem ipsum dolor sit",
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
    return "Navbar 1";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <nav>
            <img src={this.getPropValue("image")} width={200} />
            <div className={this.decorateCSS("items")}>
              {this.castToObject<[]>("itemList").map(
                (data: any, index: number) => {
                  return <h3 key={index}>{data.value}</h3>;
                }
              )}
              {this.castToObject<[]>("buttonList").map(
                (data: any, index: number) => {
                  return (
                    <ComposerLink path={data.value[1].value}>
                      <button key={index}>{data.value[0].value}</button>
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

export default Navbar1;
