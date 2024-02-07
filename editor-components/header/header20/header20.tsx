import * as React from "react";
import styles from "./header20.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type icons = {
  url: string;
  image: string;
};
class HeaderComponent20 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      displayer: "Items",
      key: "items",
      value: [
        {
          type: "object",
          displayer: "Item Left Top",
          key: "left-top-item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value:
                "I Create User-friendly Mobile Applications and Web Experiences ❤️",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64f5e27c057bdf002c2c29ff?alt=media&timestamp=1693835875557",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "Sign Up",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },

        {
          type: "object",
          displayer: "Directions",
          key: "directions",
          value: [
            {
              type: "object",
              displayer: "Direction-1",
              key: "direction1",
              value: [
                {
                  type: "string",
                  displayer: "Direction-1",
                  key: "direction1",
                  value: "Product Design",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Direction-2",
              key: "direction2",
              value: [
                {
                  type: "string",
                  displayer: "Direction-1",
                  key: "direction1",
                  value: "UX Research",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Direction-3",
              key: "direction3",
              value: [
                {
                  type: "string",
                  displayer: "Direction-1",
                  key: "direction1",
                  value: "Prototyping",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Direction-4",
              key: "direction4",
              value: [
                {
                  type: "string",
                  displayer: "Direction-1",
                  key: "direction1",
                  value: "Prototyping",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              displayer: "Direction-5",
              key: "direction5",
              value: [
                {
                  type: "string",
                  displayer: "Direction-1",
                  key: "direction1",
                  value: "Front-End Development",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "socialMedias",
      displayer: "Social Medias",
      value: [
        {
          type: "object",
          key: "box",
          displayer: "Twitter",
          value: [
            {
              type: "image",
              key: "image",
              value: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Facebook",
          value: [
            {
              type: "image",
              key: "image",
              value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Pinterest",
          value: [
            {
              type: "image",
              key: "image",
              value: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Linkedin",
          value: [
            {
              type: "image",
              key: "image",
              value: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Telegram",
          value: [
            {
              type: "image",
              key: "image",
              value: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-20";
  }

  render() {
    let items: any = this.castToObject("items");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("background-image")}>
              <img src={items[0].image} alt={items[0].title} />
            </div>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("title")}>
                  <h1 className={this.decorateCSS("items")}>{items[0].title}</h1>
                </div>
                <div className={this.decorateCSS("button-and-input")}>
                  <input
                    placeholder="Your email address"
                    className={this.decorateCSS("input")}
                    type="text"
                  />
                  <ComposerLink path={items[0].button[1].value}>
                    <div className={this.decorateCSS("button")}>
                      <button>{items[0].button[0].value}</button>
                    </div>
                  </ComposerLink>
                </div>
                <div className={this.decorateCSS("icons")}>
                  <li>
                    {this.castToObject<icons[]>("socialMedias").map(
                      (icons: any, index: number) => (
                        <ComposerLink key={index} path={icons.url}>
                          <div className={this.decorateCSS("icon-div")}>
                            <img
                              src={icons.image}
                              alt={`Small Image ${index + 1}`}
                              key={index}
                            />
                          </div>
                        </ComposerLink>
                      )
                    )}
                  </li>
                </div>
              </div>
              <div className={this.decorateCSS("bottom")}>
                <li>
                  <a href={items[1].direction1[1].value}>
                    {items[1].direction1[0].value}
                  </a>
                  <a href={items[1].direction2[1].value}>
                    {items[1].direction2[0].value}
                  </a>
                  <a href={items[1].direction3[1].value}>
                    {items[1].direction3[0].value}
                  </a>
                  <a href={items[1].direction4[1].value}>
                    {items[1].direction4[0].value}
                  </a>
                  <a href={items[1].direction5[1].value}>
                    {items[1].direction5[0].value}
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent20;
