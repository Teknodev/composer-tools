import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: string;
};

class Navbar5 extends BaseNavigator {
  getName(): string {
    return "Navbar 5";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });

    this.addProp({
      type: "string",
      key: "center-text",
      displayer: "Center Text",
      value: "Title",
    });

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
              type: "image",
              key: "icon",
              value:
                "https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png",
              displayer: "Icon",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png",
              displayer: "Icon",
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
              type: "image",
              key: "icon",
              value:
                "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png",
              displayer: "Icon",
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

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Contact",
        },

        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
        {
          type: "boolean",
          key: "isPrimary",
          displayer: "Is Primary",
          value: false,
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
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
  } // constructor end

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => {
                return (
                  <ComposerLink path={leftItem.value[1].value}>
                    <img src={leftItem.value[0].value} width={20} height={20} alt="" />
                  </ComposerLink>
                );
              })}
            </div>

            <div className={this.decorateCSS("logo-image")}>
              <img
                src={this.getPropValue("image")}
                width={200}
                height={170}
                alt=""
              />
            </div>


          </div>


          <div className={this.decorateCSS("containerRight")}>
            {this.castToObject<Button[]>("buttons").map(
              (item: Button, indexButtons: number) => {
                return (
                  <ComposerLink key={indexButtons} path={item.url}>
                    <button
                      className={`${this.decorateCSS("button")} ${item.isPrimary ? this.decorateCSS("primary") : ""
                        }`}
                    >
                      {item.buttonText}
                    </button>
                  </ComposerLink>
                );
              }
            )}
          </div>

        </div>

        <div className={this.decorateCSS("secondline-content")}>
          {this.castToObject<[]>("itemList").map(
            (data: any, indexItemList: number) => {
              return (
                <ComposerLink key={indexItemList} path={data.value[1].value}>
                  
                  <span className={this.decorateCSS("data-value")}>{data.value[0].value}</span>
                </ComposerLink>
              );
            }
          )}
          <img
            className={this.decorateCSS("img-hamburger")}
            src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187"
            alt=""
            onClick={() => {
              this.navClick();
            }}
          />
          {this.getComponentState("navActive") && (
            <div className={this.decorateCSS("navbar-child")}>
              {this.castToObject<[]>("itemList").map((item: any, index: number) => {
                return (
                  <ComposerLink
                    key={index}
                    path={item.value[1].value}
                    >
                      <h3 key={index}>{item.value[0].value}</h3>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default Navbar5;