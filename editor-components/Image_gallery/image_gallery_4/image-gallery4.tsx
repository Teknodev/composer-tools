import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type NavItem = {
  title: JSX.Element;
  hasSubnav: string;
  subnavItems: SubnavItem[];
  images: Image[];
};

type SubnavItem = {
  title: JSX.Element;
  images: Image[];
};

type Image = {
  image: string;
};

class ImageGallery4 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "navItems",
      displayer: "Nav Items",
      value: [
        {
          type: "object",
          key: "nav-item",
          displayer: "Nav Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Nav Title",
              value: "Meat",
            },
            {
              type: "select",
              key: "hasSubnav",
              displayer: "Show Sub Navs?",
              value: "No",
              additionalParams: {
                selectItems: ["Yes", "No"],
              },
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35b8f07399d002cb493dd?alt=media",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "subnavItems",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Beef",
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35bc507399d002cb49422?alt=media",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35bea07399d002cb4942e?alt=media",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Pork",
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c0607399d002cb4943b?alt=media",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c5a07399d002cb49448?alt=media",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Lamb",
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c8007399d002cb49454?alt=media",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c9e07399d002cb49466?alt=media",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "nav-item",
          displayer: "Nav Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Nav Title",
              value: "Seafood",
            },
            {
              type: "select",
              key: "hasSubnav",
              displayer: "Show Sub Navs?",
              value: "Yes",
              additionalParams: {
                selectItems: ["Yes", "No"],
              },
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image-item",
                  displayer: "Image",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35cc307399d002cb49472?alt=media",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "subnavItems",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Fish",
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35cea07399d002cb49488?alt=media",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35d1107399d002cb494a8?alt=media",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Octopus",
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35d4007399d002cb49503?alt=media",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "image",
                              key: "image",
                              displayer: "Image",
                              value:
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35d4e07399d002cb49516?alt=media",
                            },
                          ],
                        },
                      ],
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
      type: "number",
      key: "itemsPerRow",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });

    this.addProp({
      type: "icon",
      key: "close-icon",
      displayer: "Close Icon",
      value: "RxCross1",
    });

    this.setComponentState("activeNav", 0);
    this.setComponentState("activeSubnav", 0);
    this.setComponentState("focusedImage", 0);
    this.setComponentState("isFocused", false);
  }

  getName(): string {
    return "Image Gallery 4";
  }

  switchNav(index: number) {
    this.setComponentState("activeNav", index);
    this.setComponentState("activeSubnav", 0);
  }

  switchSubnav(index: number) {
    this.setComponentState("activeSubnav", index);
  }

  focusImage(index: number) {
    this.setComponentState("focusedImage", index);
    this.setComponentState("isFocused", true);
  }

  closeFocus() {
    this.setComponentState("focusedImage", null);
    this.setComponentState("isFocused", false);
  }

  makeArrayPure(arr: any[]): Image[] {
    return arr.filter((el) => el !== undefined);
  }

  render() {
    const itemsPerRow: number = this.getPropValue("itemsPerRow");

    const activeNav: number = this.getComponentState("activeNav");
    const activeSubnav: number = this.getComponentState("activeSubnav");

    const navItems = this.castToObject<NavItem[]>("navItems");
    const subnavItems = navItems[activeNav]?.subnavItems;

    const mainNavGalleryItems = navItems[activeNav]?.images;

    const doesActiveNavHasSubnav = navItems[activeNav]?.hasSubnav === "Yes";

    // if main-nav has subnav then show subnav's images too, otherwise do not show.
    const combinedImages = doesActiveNavHasSubnav
      ? mainNavGalleryItems.concat(
          navItems[activeNav]?.subnavItems[activeSubnav]?.images,
        )
      : mainNavGalleryItems;

    const galleryItems = this.makeArrayPure(combinedImages);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("gallery-wrapper")}>
            {(navItems?.length > 0 || subnavItems?.length > 0) && (
              <nav className={this.decorateCSS("gallery-nav")}>
                {navItems?.length > 0 && (
                  <ul
                    className={`${this.decorateCSS("nav-list")} ${this.decorateCSS("hide-scrollbar")}`}
                  >
                    {navItems?.map((item: NavItem, index: number) => {
                      if (!this.castToString(item.title)) return null;
                      return (
                        <li
                          key={index}
                          className={this.decorateCSS("list-item")}
                        >
                          <button
                            className={
                              activeNav === index
                                ? this.decorateCSS("active")
                                : ""
                            }
                            onClick={() => {
                              this.switchNav(index);
                            }}
                          >
                            {item.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {doesActiveNavHasSubnav && subnavItems?.length > 0 && (
                  <ul
                    className={`${this.decorateCSS("subnav-list")} ${this.decorateCSS("hide-scrollbar")}`}
                  >
                    {(subnavItems || []).map(
                      (item: SubnavItem, index: number) => {
                        if (!this.castToString(item.title)) return null;
                        return (
                          <li
                            key={index}
                            className={this.decorateCSS("list-item")}
                          >
                            <button
                              className={
                                activeSubnav === index
                                  ? this.decorateCSS("active")
                                  : ""
                              }
                              onClick={() => {
                                this.switchSubnav(index);
                              }}
                            >
                              {item.title}
                            </button>
                          </li>
                        );
                      },
                    )}
                  </ul>
                )}
              </nav>
            )}
            {galleryItems?.length > 0 && (
              <div
                className={this.decorateCSS("gallery-container")}
                style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}
              >
                {galleryItems.map((item: Image, index: number) => {
                  if (!item.image) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("gallery-item")}
                    >
                      <img
                        onClick={() => {
                          this.focusImage(index);
                        }}
                        src={item.image}
                        alt="gallery item"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {galleryItems[this.getComponentState("focusedImage")]?.image && (
            <div
              className={`
                ${this.decorateCSS("gallery-item-fullscreen")}
                ${this.getComponentState("isFocused") ? this.decorateCSS("show-fullscreen") : ""}
              `}
              onClick={() => {
                this.closeFocus();
              }}
            >
              <div className={this.decorateCSS("fullscreen-container")}>
                {this.getPropValue("close-icon") && (
                  <button
                    onClick={() => {
                      this.closeFocus();
                    }}
                    className={this.decorateCSS("close-button")}
                  >
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("Icon") }}
                      name={this.getPropValue("close-icon")}
                    />
                  </button>
                )}
                <img
                  className={this.decorateCSS("focused-image")}
                  src={
                    galleryItems[this.getComponentState("focusedImage")].image
                  }
                  alt="gallery item"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImageGallery4;
