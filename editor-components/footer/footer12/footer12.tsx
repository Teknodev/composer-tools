import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFooter } from "../../EditorComponent";
import styles from "./footer12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type ImageOrEmoji = {
  image?: string;
  icon?: string;
  url?: JSX.Element;
};

class Footer12Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "logo",
      displayer: "Logo",
      value: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png",
    });
    this.addProp({
      type: "page",
      key: "logo-url",
      displayer: "Logo Url",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "logo-text",
      displayer: "Logo Text",
      value: "Lorem",
    });
    this.addProp({
      type: "page",
      key: "logo-text-url",
      displayer: "Logo Text Url",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "link-list",
      additionalParams: {
        maxElementCount: 6,
      },
      displayer: "Link List",
      value: [
        {
          type: "object",
          key: "footer-text",
          displayer: "Text Values",
          value: [
            {
              type: "string",
              key: "refText",
              displayer: "Referral Text",
              value: "Privacy Policy",
            },
            {
              type: "page",
              key: "path",
              displayer: "Path",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "refText",
                      displayer: "Referral Text",
                      value: "Privacy Policy",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                }
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-text",
          displayer: "Text Values",
          value: [
            {
              type: "string",
              key: "refText",
              displayer: "Referral Text",
              value: "Distance sales contract",
            },
            {
              type: "page",
              key: "path",
              displayer: "Path",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "refText",
                      displayer: "Referral Text",
                      value: "Privacy Policy",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                }
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-text",
          displayer: "Text Values",
          value: [
            {
              type: "string",
              key: "refText",
              displayer: "Referral Text",
              value: "Terms of use and membership agreement",
            },
            {
              type: "page",
              key: "path",
              displayer: "Path",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "refText",
                      displayer: "Referral Text",
                      value: "Privacy Policy",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                }
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-text",
          displayer: "Text Values",
          value: [
            {
              type: "string",
              key: "refText",
              displayer: "Referral Text",
              value: "Consumer rights, withdrawal, cancellation, return conditions",
            },
            {
              type: "page",
              key: "path",
              displayer: "Path",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "refText",
                      displayer: "Referral Text",
                      value: "Privacy Policy",
                    },
                    {
                      type: "page",
                      key: "path",
                      displayer: "Path",
                      value: "",
                    },
                  ],
                }
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "image-emoji-list",
      additionalParams: {
        maxElementCount: 5,
      },
      displayer: "İmage List",
      value: [
        {
          type: "object",
          key: "imageOrEmojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCcVisa",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66fa9094cf1798002cc71d01?alt=media"
            },
            {
              type: "page",
              key: "url",
              displayer: "İmage Url",
              value: "",
            }
          ],
        },
        {
          type: "object",
          key: "imageOrEmojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCcMastercard",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66fa90c5cf1798002cc71d0e?alt=media"
            },
            {
              type: "page",
              key: "url",
              displayer: "İmage Url",
              value: "",
            }
          ],
        },
      ]
    });
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Copyright © 2023 Teknodev LTD.All rights reserved.",
    })


  }

  getName(): string {
    return "Footer 12";
  }
  render() {
    const logoImage = this.getPropValue("logo");
    const logoText = this.getPropValue("logo-text");
    const imageUrl = this.getPropValue("logo-url");
    const textUrl = this.getPropValue("logo-text-url");
    const linkList = this.castToObject<any[]>("link-list");
    const imagesAndEmojis = this.castToObject<ImageOrEmoji[]>("image-emoji-list");
    const downText = this.getPropValue("text");
    let subItemList: []

    console.log(linkList);

    const childCount = [
      logoImage || this.castToString(logoText),
      linkList.length > 0,
      imagesAndEmojis.length > 0
    ].filter(Boolean).length;

    const widthPercentage = childCount > 0 ? 100 / childCount : 100;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <div className={this.decorateCSS("main-content")}>
              {(logoImage || this.castToString(logoText)) &&
                <div className={this.decorateCSS("image-wrapper")}
                  style={{
                    width: `calc(${widthPercentage}% - 20px)`,
                  }}>
                  {logoImage ? (
                    <ComposerLink path={imageUrl}>
                      <img src={logoImage} className={this.decorateCSS("img")} alt="" />
                    </ComposerLink>
                  ) : (
                    <ComposerLink path={textUrl}>
                      <span className={this.decorateCSS("logo-text")}>{logoText}</span>
                    </ComposerLink>
                  )}
                </div>}

              <div className={this.decorateCSS("text-contents")}>

                {linkList.length > 0 && (
                  <div className={this.decorateCSS("link-container")}>
                    {linkList.map((item: any, index) => (
                      <div key={item.key || index} className={this.decorateCSS("link-item")}>
                        <ComposerLink path={item.path}>
                          <span className={this.decorateCSS("ref-text")}>{item.refText}</span>
                        </ComposerLink>

                        {/* Eğer sub_items mevcutsa, alt öğeleri göster */}
                        {item.sub_items && item.sub_items.length > 0 && (
                          <div className={this.decorateCSS("sub-item-list")}>
                            {item.sub_items.map((subItem: any, subIndex: number) => (
                              <div key={subItem.key || subIndex} className={this.decorateCSS("sub-item")}>
                                <ComposerLink path={subItem.path}>
                                  <span className={this.decorateCSS("ref-text")}>{subItem.refText}</span>
                                </ComposerLink>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {this.castToString(downText) &&
                  <div className={this.decorateCSS("down-text")}>
                    <span className={this.decorateCSS("text")}>{downText}</span>
                  </div>}
              </div>
              {imagesAndEmojis.length > 0 && <div
                className={this.decorateCSS("image-emoji-wrapper")}
                style={{
                  width: `calc(${widthPercentage}% - 20px)`,
                }}
              >
                {imagesAndEmojis.map((value: ImageOrEmoji, index: number) => (
                  <>
                    {
                      value.image ? (
                        <div className={this.decorateCSS("image-wrapper")}>
                          <img
                            src={value.image}
                            alt={this.castToString(value.url)}
                            className={this.decorateCSS("image")}
                          />
                        </div>
                      ) : (
                        <div className={this.decorateCSS("icon-wrapper")}>
                          <ComposerIcon
                            name={value.icon}
                            propsIcon={{
                              className: `${this.decorateCSS("icon")}`,
                            }}
                          />
                        </div>
                      )
                    }
                  </>
                ))}
              </div>}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Footer12Page;

