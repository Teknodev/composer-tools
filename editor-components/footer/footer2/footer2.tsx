import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer2.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type MenuItem = {
  text: React.JSX.Element;
  pageLink: string;
  media: TypeMediaInputValue;
};

type Column = {
  categoryTitle: React.JSX.Element;
  categoryTitleLink: string;
  categoryTitleMedia: TypeMediaInputValue;
  menuItems: MenuItem[];
};

type BackgroundMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

const hasMedia = (media?: TypeMediaInputValue | null): boolean => {
  if (!media) return false;
  if (media.type === "icon") return !!media.name;
  return !!media.url;
};

class Footer2Page extends BaseFooter {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Default",
      additionalParams: {
        selectItems: ["Default", "Absolute"],
      },
    });

    this.addProp({
      type: "object",
      key: "backgroundMedia",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676295790655f8002ca84357?alt=media",
          },
          additionalParams: {
            availableTypes: ["image", "video"],
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "footer",
      displayer: "Footer",
      value: [
        {
          type: "object",
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "New York Office",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "555-1234" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "info@archy.com" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "123 Main Street, Suite 200 City: Anytown State: StateName" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "Paris Office",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "+33 1 23 45 67 89" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "info@archyparis.com" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "123 Rue de la Paix, 75002 Paris, France" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "footer-column",
          displayer: "Footer",
          value: [
            {
              type: "string",
              key: "categoryTitle",
              displayer: "Menu Item",
              value: "Berlin Office",
            },
            {
              type: "page",
              key: "categoryTitleLink",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "categoryTitleMedia",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Menu Subitem",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "+49 30 12345678" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "info@archyberlin.com" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "Mauerstrasse 45, 10117 Berlin, Germany" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                    {
                      type: "media",
                      key: "media",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "footerText",
      displayer: "Footer Text",
      value: "©2023 Blinkpage Inc. - SF",
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }

  static getName(): string {
    return "Footer 2";
  }

  render() {
    const backgroundMedia = this.castToObject<BackgroundMedia>("backgroundMedia");
    const image = backgroundMedia.media;
    const overlay = backgroundMedia.overlay;

    const footerData = this.castToObject<Column[]>("footer");
    const footerTextExist = this.castToString(this.getPropValue("footerText"));
    const alignmentValue = Base.getContentAlignment();

    const position = this.getPropValue("position");

    const imageExist = image && (image.type === "image" || image.type === "video") && image.url;

    const imageWithSettings = image?.type === "video" ? {
      ...image,
      settings: {
        autoplay: true,
        loop: true,
        muted: true,
        controls: false
      }
    } : image;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""} ${imageExist ? this.decorateCSS("has-image") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {imageExist && (
              <Base.Media
                value={imageWithSettings}
                className={this.decorateCSS("background-media")}
              />
            )}
            {(footerData.length > 0 || imageExist) && (
              <Base.MaxContent
                className={`${this.decorateCSS("items")} ${!imageExist ? this.decorateCSS("no-image") : ""}`}>
                {footerData.map((column: Column, colIndex: number) => {
                  const menuItems: MenuItem[] = column.menuItems || [];
                  const categoryTitleExist = this.castToString(column.categoryTitle);
                  const categoryMediaExist = hasMedia(column.categoryTitleMedia);
                  const hasItems = menuItems.some((item: MenuItem) => this.castToString(item.text) || hasMedia(item.media));
                  if (!categoryTitleExist && !categoryMediaExist && !hasItems) return null;
                  return (
                    <div key={colIndex} className={this.decorateCSS("list")}>
                      {(categoryTitleExist || categoryMediaExist) && (
                        <ComposerLink path={column.categoryTitleLink}>
                          <div className={this.decorateCSS("menu-media-wrapper")}>
                            {categoryMediaExist && (
                              <Base.Media value={column.categoryTitleMedia} className={this.decorateCSS("menu-title-media")} />
                            )}
                            {categoryTitleExist && <Base.H6 className={this.decorateCSS("title")}>{column.categoryTitle}</Base.H6>}
                          </div>
                        </ComposerLink>
                      )}
                      {menuItems.length > 0 && (
                        <Base.VerticalContent className={this.decorateCSS("text-items")}>
                          {menuItems.map((item: MenuItem, itemIndex: number) => {
                            const textExist = this.castToString(item.text);
                            const mediaExist = hasMedia(item.media);
                            const isLast = itemIndex === menuItems.length - 1;
                            return (
                              (textExist || mediaExist) && (
                                <ComposerLink key={itemIndex} path={item.pageLink}>
                                  <div className={this.decorateCSS("menu-media-wrapper")}>
                                    {mediaExist && (
                                      <Base.Media value={item.media} className={this.decorateCSS("menu-item-media")} />
                                    )}
                                    {textExist && (
                                      <Base.P
                                        className={`${this.decorateCSS("text")} ${isLast ? this.decorateCSS("text-last") : ""}`}
                                        data-animation={item.pageLink ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                        data-has-link={Boolean(item.pageLink)}
                                      >
                                        {item.text}
                                      </Base.P>
                                    )}
                                  </div>
                                </ComposerLink>
                              )
                            );
                          })}
                        </Base.VerticalContent>
                      )}
                    </div>
                  );
                })}
              </Base.MaxContent>
            )}
            {overlay && imageExist && <div className={this.decorateCSS("background-overlay")}></div>}
          </div>
          <Base.MaxContent>
            {footerTextExist && (
              <div className={this.decorateCSS("footer-bottom")}>
                <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerText")}</Base.P>
              </div>
            )}
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Footer2Page;
