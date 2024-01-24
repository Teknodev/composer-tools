import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Navbar6 extends BaseNavigator {
  getName(): string {
    return "Navbar 6";
  }
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type : "boolean",
      key : "sticky",
      displayer : "Is sticky",
      value : false,
    })

    this.addProp({
      type: "array",
      key: "left-items",
      displayer: "Left Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "ABOUT US",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "SERVICES",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "PRICING",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "center-image",
      displayer: "Center Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Right Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "PORTFOLIO",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "BLOG",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "CONTACT",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
    this.state["componentProps"]["navActive"] = true;
  }//constructor end

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render() {

    const leftItems = this.getPropValue("left-items");
    const rightItems = this.getPropValue("right-items");

    //Combining left and right items (arrays)
    const combinedItems = [...leftItems, ...rightItems]

    return (
      <div className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => {
                return (
                  <ComposerLink path={leftItem.value[1].value}>
                    <span className={this.decorateCSS("text")}>
                      {leftItem.value[0].value}
                    </span>
                  </ComposerLink>
                );
              })}
            </div>

            <div className={this.decorateCSS("middle")}>
              <img src={this.getPropValue("center-image")} alt=""></img>
            </div>

            <div className={this.decorateCSS("content-right")}>
              {this.getPropValue("right-items").map((rightItem: any) => {
                return (
                  <ComposerLink path={rightItem.value[1].value}>
                    <span className={this.decorateCSS("right-item-value")}>{rightItem.value[0].value}</span>
                  </ComposerLink>
                );
              })}
            </div>
            <img
              className={`${this.decorateCSS("img-hamburger")} ${this.getComponentState("navActive") ? this.decorateCSS("rotate") : ""}`}
              src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187"
              alt=""
              onClick={() => {
                this.navClick();
              }}
            />
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {combinedItems.map((item: any, index: number) => (
                  <ComposerLink
                    key={index}
                    path={item.value[1].value}
                  >
                    <h3 key={index}>{item.value[0].value}</h3>
                  </ComposerLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar6;
