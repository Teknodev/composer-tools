import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFooter, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./footer2.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type MenuItem = {
  text: React.JSX.Element;
  pageLink: string;
};

type Column = {
  categoryTitle: React.JSX.Element;
  menuItems: MenuItem[];
};

type BackgroundMedia = {
  media: TypeMediaInputValue;
  overlay: boolean;
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
      key: "columns",
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
              displayer: "Footer Title",
              value: "New York Office",
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "555-1234" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "info@archy.com" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "123 Main Street, Suite 200 City: Anytown State: StateName" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
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
              displayer: "Footer Title",
              value: "Paris Office",
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "+33 1 23 45 67 89" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "info@archyparis.com" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "123 Rue de la Paix, 75002 Paris, France" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
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
              displayer: "Footer Title",
              value: "Berlin Office",
            },
            {
              type: "array",
              key: "menuItems",
              displayer: "Footer Text",
              value: [
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "+49 30 12345678" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "info@archyberlin.com" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
                  ],
                },
                {
                  type: "object",
                  key: "menuItem",
                  displayer: "Item",
                  value: [
                    { type: "string", key: "text", displayer: "Text", value: "Mauerstrasse 45, 10117 Berlin, Germany" },
                    { type: "page", key: "pageLink", displayer: "Navigate To", value: "" },
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
      key: "footerDescription",
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

    const columns = this.castToObject<Column[]>("columns");
    const footerDescExist = this.castToString(this.getPropValue("footerDescription"));

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
      <Base.Container className={`${this.decorateCSS("container")} ${position === "Absolute" ? this.decorateCSS("absolute") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("footer-page")}>
            {imageExist && (
              <Base.Media
                value={imageWithSettings}
                className={this.decorateCSS("background-media")}
              />
            )}
            {(columns.length > 0 || imageExist) && (
              <Base.MaxContent
                className={`${this.decorateCSS("items")} ${!imageExist ? this.decorateCSS("no-image") : ""}`}>
                {columns.map((column: Column, colIndex: number) => {
                  const menuItems: MenuItem[] = column.menuItems || [];
                  const categoryTitleExist = this.castToString(column.categoryTitle);
                  const hasItems = menuItems.some((item: MenuItem) => this.castToString(item.text));
                  if (!categoryTitleExist && !hasItems) return null;
                  return (
                    <div key={colIndex} className={this.decorateCSS("list")}>
                      {categoryTitleExist && <Base.H3 className={this.decorateCSS("title")}>{column.categoryTitle}</Base.H3>}
                      {menuItems.map((item: MenuItem, itemIndex: number) => {
                        const textExist = this.castToString(item.text);
                        return (
                          textExist && (
                            <ComposerLink key={itemIndex} path={item.pageLink}>
                              <Base.P
                                className={this.decorateCSS("text")}
                                data-animation={item.pageLink ? this.getPropValue("hoverAnimation").join(" ") : ""}
                                data-has-link={Boolean(item.pageLink)}
                              >
                                {item.text}
                              </Base.P>
                            </ComposerLink>
                          )
                        );
                      })}
                    </div>
                  );
                })}
              </Base.MaxContent>
            )}
            {overlay && imageExist && <div className={this.decorateCSS("background-overlay")}></div>}
          </div>
          <Base.MaxContent>
            {footerDescExist && (
              <div className={this.decorateCSS("footer-bottom")}>
                <Base.P className={this.decorateCSS("footer-text")}>{this.getPropValue("footerDescription")}</Base.P>
              </div>
            )}
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Footer2Page;
