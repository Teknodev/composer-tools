import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Navbar7 extends BaseNavigator {
  getName(): string {
    return "Navbar 7";
  }

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "gallery1",
      displayer: "Gallery",
      value:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAbFBMVEX///8AAAD8/PwGBgYJCQnU1NQXFxenp6dERERlZWUcHBzw8PDJyck1NTWrq6v4+PiFhYWfn5/g4OArKyt4eHhPT09MTEw9PT0TExMwMDA4ODiMjIzd3d1sbGzy8vK4uLhgYGB/f3+VlZXBwcHTGOwfAAAEeElEQVR4nO2ca3uiMBBGQby01Kr1UttaV7f9//9xvVQJyeQCmQy6fc8neICZnN0hJJiSZQAAAAAAAAAAAAAAAAAAuEd6m+d+zk//YSzrMV0nsDhRyJosU3nk+UpUpEwn8iYqks4jzyESI5IiKm/MoJQQcUbljRmUEiLOqLwxg1JCxBmVN2ZQSog4o/LGDEp5ZyLz5aJwDyriKBbLuYTIJMUESqM/SS8yTvq/ceE8nUoq8iDhkeevyUUECutIP7mIjMe5+RD5lSKJwmcQiUmUOj5EmiZKHR8iTROljg+RLPtcvgsNpuqU+wGnyHQrMkanmfGJPH10JXFiwyYiNNWwUXwyibx0ZXBhyySS7GfAUBZMIp10VyoFk0hX7a+AyC8QaXxxBBDxB4RIKyDiDwiRVkDEHxAirYCIPyBEWgERf0Dy4unLqszzcvUyjWu3I6+6V21HBKQuHg0vx4ajyJZb86p71XZEQPPi3qN69LEX3Xoyr7pXbUcENC+ueRxMoltP5lX3qu2IgMbFo1yDs7oERabDXKNkvOMFRYh3kC8MBkZeda/ajgioX7wyRRiX3guKEEv4SwYDI6+6V21HBNQvNj3Orzd5+M9FbG1pFPAWSiuJSBc3exIRovtlfCJ6RIYRAW/hgXjlNSKgf4gy4TAw8uqtaJnKIaIPGrcM7Sfy6q048hAT0DeM3woM48+8bVvUsEvkUF3XPrjkrKvM9UCMDmid6hZFuRrJTXWjA97Ky4fogIwiT03yqnsROVOIDIYD7zn3IDIv82dvD3cHIn/e8+vypZC86l5EWnaR3mm5UeErrtsX2Z9j+Yrr5kX+XoJ5iuvWRaqxv6e4blxkpyyPdBdXtyK+TnVQW/3lLK5ORZ7W7kf2vD4VcxZXlyKHjvX5j+P40yKv4yquLkWOs5O1fRRMfCXFUVwdimxO5zxYTfaGh6u4zJOlRCY/J71a6oX82ou9uDoTGV87pBXZuC+6ZdbiIs/upxdRO6Q9YbKjPezFRZ69Ti5S75DM3+DG1uXDtuIiT455ARgk0tMW0Osvhj6Nd3kVluKiTm3+Vq6pyKOeclk7bDxAVCzFRXm4HlIsIhv3v/PU/YcbdHHpZ/XXkS+WA0QmetIjm+vhHvHa3ipN5I1rfwMRy438dTm+9XjQxSUvMrfdyD8/8RJ1p0MVl7iI40Y+FTVZdzpEcUmL6B2vSjHJsu+gvz8hiktaxOh4a+3bDd5CPKjiEhbx3AD94M/pGcUlKxJ0AwRhFJeoiH0E1Ry9uCRFrB1vK2a2vMlFnCOo5mjFJSfi6nhbUS8uORFnx9uKGZ03sUjAyKMpteKSEuHreBXU4hIS4ex4FWZU3pQivB1vhVJcIiLMHa9CVVwSIuwdr8LMzJtOhL/jrSj0z1UITnXTABF/QIhE5mUPCJHIvOwBuwIiELltkc6/VBPzu6GK7zeB5Hwwich8ydfBl7+NYXT8Xap3vgXF38mmUQF8zNk8DhOp3X7RyT0/fB2xrrcHAAAAAAAAAAAAAAAAAAAAAPw+/gES/zSIz2SHXQAAAABJRU5ErkJggg==",
    });
    this.addProp({
      type: "string",
      key: "telephone1",
      displayer: "Telephone",
      value:
        "data:image/jpeg;base64,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",
    });
    this.addProp({
      type: "string",
      key: "instagram",
      displayer: "Instagram",
      value:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/029981ad3cb6fecf5c4fc85e988a7260~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1708848000&x-signature=eIPemgeY%2B%2FiR9CUTBJ%2BWxU49pN4%3D",
    });
    this.addProp({
      type: "string",
      key: "facebook",
      displayer: "Facebook",
      value:
        " https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR40R9vNYpkwGLFFvDRhIduvdSiMfWXZH4HmYGR8TY5X4a5Bo12",
    });
    this.addProp({
      type: "string",
      key: "pinterest",
      displayer: "Pinterest",
      value:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcdo50nh3JGGA7wBJy4EKQEAOkAi_V8au-STs0Vwvh-U6nfHy4",
    });
    this.addProp({
      type: "string",
      key: "messenger",
      displayer: "Messenger",
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_lOgW7EKTWjV3vyRqQRB9Q9sQJ_faXk_KMoWzhrTUQ&s",
    });
    this.addProp({
      type: "string",
      key: "youtube",
      displayer: "Youtube",
      value:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_3K0eNkaTmS_1acI3nFZusLveRFnZ8-2NmPDVeoEoyy0Gnj-h",
    });

    this.addProp({
      type: "string",
      key: "img-ham",
      displayer: "Icon",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187",
    });

    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
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
              type: "string",
              key: "label",
              value: "TREATMENTS",
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
              value: "PRICES",
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
      type: "string",
      key: "gallery",
      displayer: "Gallery",
      value: "SMILE GALLERY",
    });

    this.addProp({
      type: "string",
      key: "center-text",
      displayer: "Center Text",
      value: "+44 20 863 88648",
    });

    this.addProp({
      type: "image",
      key: "left-image",
      displayer: "Left Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/logo.png",
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
              type: "number",
              key: "insta",
              value: 1,
              displayer: "İnstagram",
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
      type: "array",
      key: "right-items-2",
      displayer: "Right Items 2",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "face",
              value: 1,
              displayer: "facebook",
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
      type: "array",
      key: "right-items-3",
      displayer: "Right Items 3",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "pinterest",
              value: 1,
              displayer: "Pinterest",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-4",
      displayer: "Right Items 4",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "messenger",
              value: 1,
              displayer: "Messenger",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-5",
      displayer: "Right Items 5",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "youtube",
              value: 1,
              displayer: "YouTube",
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["navActive"] = true;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    return (
      <div
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""
        }`}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("middle")}>
              <img
                src={this.getPropValue("left-image")}
                className={this.decorateCSS("image")}
              />
            </div>
            <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => (
                <ComposerLink path={leftItem.value[1].value}>
                  <span className={this.decorateCSS("text")}>
                    {leftItem.value[0].value}
                  </span>
                </ComposerLink>
              ))}
            </div>
            <img
              className={`${this.decorateCSS("img-hamburger")} ${
                this.getComponentState("navActive")
                  ? this.decorateCSS("rotate")
                  : ""
              }`}
              src={this.getPropValue("img-ham")}
              alt=""
              onClick={() => {
                this.navClick();
              }}
            />
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("left-items").map(
                  (item: any, index: number) => {
                    return (
                      <ComposerLink key={index} path={item.value[1].value}>
                        <h3 key={index}>{item.value[0].value}</h3>
                      </ComposerLink>
                    );
                  }
                )}
                <div className={this.decorateCSS("svgDropdownContainer")}>
                  <svg
                    key={"logo-navbar7"}
                    width="28"
                    height="28"
                    viewBox="-0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="2" />
                    <path
                      d="M24,23H4v-4H0V0h20v4h4V23z M6,21h16V6h-2v13H6V21z M3.2,17H18v-1.6l-4-4.8l-3.9,4.9l-3-3L3.2,17z M2,2v13.3l4.9-5.8l3,3
			L14,7.4l4,4.8V2H2z"
                    />
                  </svg>
                  <h3 className={this.decorateCSS("gallery")}>
                    {this.getPropValue("gallery")}
                  </h3>
                </div>
              </div>
            )}

            {
              <div className={this.decorateCSS("middle-3")}>
                <div className={this.decorateCSS("svg-container")}>
                  <img
                    className={this.decorateCSS("middle-icons")}
                    src={this.getPropValue("gallery1")}
                    alt=""
                  />
                </div>

                <h1 className={this.decorateCSS("gallery")}>
                  {this.getPropValue("gallery")}
                </h1>
              </div>
            }

            <div className={this.decorateCSS("middle-2")}>
              <div className={this.decorateCSS("svg-container")}>
                <img
                  className={this.decorateCSS("middle-icons")}
                  src={this.getPropValue("telephone1")}
                  alt=""
                />
              </div>

              <b>
                <div className={this.decorateCSS("center-text")}>
                  {this.getPropValue("center-text")}
                </div>
              </b>
            </div>

            <div className={this.decorateCSS("content-right")}>
              {this.getPropValue("right-items").map(
                (item: any, index: number) => (
                  <div
                    key={`svg-container-${index}`}
                    className={this.decorateCSS("svg-container2")}
                  >
                    <img
                      className={this.decorateCSS("images")}
                      src={this.getPropValue("instagram")}
                      alt=""
                    />
                    <img
                      className={this.decorateCSS("images")}
                      src={this.getPropValue("facebook")}
                      alt=""
                    />
                    <img
                      className={`${this.decorateCSS(
                        "images"
                      )} ${this.decorateCSS("pinterest")}`}
                      src={this.getPropValue("pinterest")}
                      alt=""
                    />

                    <img
                      className={this.decorateCSS("images")}
                      src={this.getPropValue("messenger")}
                      alt=""
                    />

                    <img
                      className={this.decorateCSS("images")}
                      src={this.getPropValue("youtube")}
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar7;
