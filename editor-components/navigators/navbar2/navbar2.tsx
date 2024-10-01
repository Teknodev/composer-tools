import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Navbar2 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value:
        "MdMenu",
    });
    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "boolean",
      key: "middle",
      displayer: "Item List Middle",
      value: false,
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Title",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
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
    this.setComponentState("navActive", false);
    this.setComponentState("isAnimating", false);
    this.setComponentState("isVisible", false);
  }
  getName(): string {
    return "Navbar 2";
  }
  navClick() {
    const isActive = this.getComponentState("navActive");
    this.setComponentState("navActive", !isActive);

    if (!isActive) {
      this.setComponentState("isAnimating", true);
      this.setComponentState("isVisible", true);
    } else {
      this.setComponentState("isAnimating", false);
      setTimeout(() => {
        this.setComponentState("isVisible", false);
      }, 1000);
    }
  }


  render() {
    const title = this.castToString(this.getPropValue("title"));
    const image = this.getPropValue("image");
    const active = this.getComponentState("navActive");
    return (
      <div className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("nav")}>
            {image ? (
              <div className={this.decorateCSS("image-container")}>
                <img src={image} className={this.decorateCSS("image")} alt="Image" />
              </div>
            ) : (
              title && (
                <div className={this.decorateCSS("title")}>
                  {title}
                </div>
              )
            )}

            <div className={this.decorateCSS("item-container")}>
              <div
                className={`${this.decorateCSS("items")} ${this.getPropValue("middle") ? this.decorateCSS("middle") : ""
                  }`}
              >
                {this.castToObject<[]>("itemList").map(
                  (data: any, indexItemList: number) => {
                    return (
                      <ComposerLink
                        path={data.value[1].value}
                      >
                        <div className={this.decorateCSS("item-title")} key={indexItemList}>{data.value[0].value}</div>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              {image ? (
                <div className={this.decorateCSS("image-container")}>
                  <img src={image} className={this.decorateCSS("image")} alt="Image" />
                </div>
              ) : (
                title && (
                  <div className={this.decorateCSS("title")}>
                    {title}
                  </div>
                )
              )}
              <ComposerIcon

                propsIcon={{
                  className: `${this.decorateCSS("img-hamburger")} ${this.getComponentState("navActive")
                    ? this.decorateCSS("rotate")
                    : ""
                    }`,
                  onClick: () => {
                    this.navClick();
                  }
                }}
                name={this.getPropValue("icon")}
              />
            </div>
            {this.getComponentState("isVisible") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("itemList").map((data: any, indexItemList: number) => {
                  const delay = indexItemList * 0.3;
                  return (
                    <div
                      className={`${this.decorateCSS("mobile-item")} ${this.getComponentState("isAnimating")
                        ? this.decorateCSS("open")
                        : this.decorateCSS("close")
                        }`}
                      key={indexItemList}
                    >
                      <ComposerLink path={data.value[1].value}>
                        <div className={this.decorateCSS("mobile-item-text")} style={{ animationDelay: `${delay}s` }}>{data.value[0].value}</div>
                      </ComposerLink>
                    </div>
                  );
                })}
              </div>
            )}


          </div>
        </div>
      </div>
    );
  }
}

export default Navbar2;