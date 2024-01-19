import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { EventEmitter } from "../../../EventEmitter";

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
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "select",
      key: "select",
      displayer: "Location of Items",
      value: "Center",
      additionalParams: {
        selectItems: ["Left", "Right" , "Center"],
      }
    })

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
    this.state["componentProps"]["navActive"] = true;
  }

  getName(): string {
    return "Navbar 1";
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {
    const selectValue = this.getPropValue("select");
    return (
      <div className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
        <nav>
            <img src={this.getPropValue("image")} width={200} alt=""/>
            <div className={`${this.decorateCSS("items")} ${selectValue === "Left" ? this.decorateCSS("left") : selectValue === "Right" ? this.decorateCSS("right") : selectValue === "Center" && ""}`}>{this.castToObject<[]>("itemList").map(
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
            <div className={this.decorateCSS("button-child")}>
              {this.castToObject<[]>("buttonList").map(
                (data: any, indexButtonList: number) => {
                  return (
                    <ComposerLink
                      key={indexButtonList}
                      path={data.value[1].value}
                    >
                      <button>{data.value[0].value}</button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
          </nav>
          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <img src={this.getPropValue("image")} width={200} alt=""/>
              <img
                alt=""
                className={this.decorateCSS("img-hamburger")}
                src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187"
                onClick={() => {
                  this.navClick();
                }}
              />
            </div>
            {this.getComponentState("navActive") && (
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

export default Navbar1;
