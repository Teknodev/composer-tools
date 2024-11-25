import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type NavItem = {
  title: JSX.Element;
  hasSubnav: boolean;
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
      additionalParams: { maxElementCount: 7 },
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
              type: "boolean",
              key: "hasSubnav",
              displayer: "Show Sub Navs?",
              value: true,
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
              type: "boolean",
              key: "hasSubnav",
              displayer: "Show Sub Navs?",
              value: true,
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

    this.addProp({
      type: "icon",
      key: "imageIcon",
      displayer: "Image Icon",
      value: "IoSearchOutline",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next Icon",
      value: "HiArrowRight",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev Icon",
      value: "HiArrowLeft",
    });

    this.setComponentState("activeNav", 0);
    this.setComponentState("activeSubnav", null);
    this.setComponentState("focusedImage", 0);
    this.setComponentState("isFocused", false);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  getName(): string {
    return "Image Gallery 4";
  }
  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      this.prevImage();
    } else if (event.key === "ArrowRight") {
      this.nextImage();
    } else if (event.key === "Escape") {
      this.closeFocus();
    }
  };

  switchNav(index: number) {
    this.setComponentState("activeNav", index);
    this.setComponentState("activeSubnav", null);
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
    if (!arr?.length) return [];

    return arr.filter((el) => el !== undefined);
  }

  getImages(): Image[] {
    const activeNav: number = this.getComponentState("activeNav");
    const activeSubnav: number = this.getComponentState("activeSubnav");
    const navItems = this.castToObject<NavItem[]>("navItems");

    if (!navItems || !navItems[activeNav]) return [];
    let result: any[] = [];
    result = navItems[activeNav]?.images;

    if (typeof activeSubnav === "number") {
      result = navItems[activeNav]?.subnavItems[activeSubnav]?.images;
      return this.makeArrayPure(result);
    }

    navItems[activeNav].subnavItems.forEach((item) => {
      result = result.concat(item.images);
    });

    return this.makeArrayPure(result);
  }
  changeImage = (direction: string) => {
    const focusedImageIndex = this.getComponentState("focusedImage");
    const currentGallery = this.getImages();
    const galleryLength = currentGallery.length;
    let newIndex;
    if (direction === "prev") {
      newIndex = (focusedImageIndex - 1 + galleryLength) % galleryLength;
    } else if (direction === "next") {
      newIndex = (focusedImageIndex + 1) % galleryLength;
    }
    this.setComponentState("focusedImage", newIndex);
  };

  prevImage = () => {
    this.changeImage("prev");
  };

  nextImage = () => {
    this.changeImage("next");
  };
  render() {
    const itemsPerRow: number = this.getPropValue("itemsPerRow");
    const activeNav: number = this.getComponentState("activeNav");
    const activeSubnav: number = this.getComponentState("activeSubnav");
    const navItems = this.castToObject<NavItem[]>("navItems");
    const subnavItems = navItems[activeNav]?.subnavItems;
    const showActiveNavSubnavs = navItems[activeNav]?.hasSubnav;
    const galleryItems = this.getImages();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("gallery-wrapper")}>
            {(navItems?.length > 0 || subnavItems?.length > 0) && (
              <Base.VerticalContent className={this.decorateCSS("gallery-nav")}>
                {navItems?.length > 0 && (
                  <div
                    className={`${this.decorateCSS("nav-list")} ${this.decorateCSS("hide-scrollbar")}`}
                  >
                    {navItems?.map((item: NavItem, index: number) => {
                      if (!this.castToString(item.title)) return null;
                      return (
                        <div
                          key={index}
                          className={this.decorateCSS("list-item")}
                        >
                          {this.castToString(item.title) && (
                            <button
                              className={`${this.decorateCSS("button")} ${activeNav === index ? this.decorateCSS("active") : ""}`}
                              onClick={() => {
                                this.switchNav(index);
                              }}
                            >
                              {item.title}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                {showActiveNavSubnavs && subnavItems?.length > 0 && (
                  <div
                    className={`${this.decorateCSS("subnav-list")} ${this.decorateCSS("hide-scrollbar")}`}
                  >
                    {(subnavItems || []).map(
                      (item: SubnavItem, index: number) => {
                        if (!this.castToString(item.title)) return null;
                        return (
                          <div
                            key={index}
                            className={this.decorateCSS("list-item")}
                          >
                            {this.castToString(item.title) && (
                              <button
                                className={`${this.decorateCSS("button")} ${activeSubnav === index ? this.decorateCSS("active") : ""}`}
                                onClick={() => {
                                  this.switchSubnav(index);
                                }}
                              >
                                {item.title}
                              </button>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {galleryItems?.length > 0 && (
              <Base.ListGrid gridCount={{ pc: itemsPerRow }} className={this.decorateCSS("gallery-container")}>
                {galleryItems.map((item: Image, index: number) => {
                  if (!item.image) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("gallery-item")}

                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.image}
                          className={this.decorateCSS("gallery-image")}
                        />
                      )}
                      {this.getPropValue("imageIcon") && (
                        <div className={this.decorateCSS("icon-overlay")}
                          onClick={() => {
                            this.focusImage(index)
                          }}>
                          <ComposerIcon
                            name={this.getPropValue("imageIcon")}
                            propsIcon={{ className: this.decorateCSS("icon") }}

                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}
          </div>

          {galleryItems[this.getComponentState("focusedImage")]?.image && (
            <div
              className={`
                ${this.decorateCSS("gallery-item-fullscreen")}
                ${this.getComponentState("isFocused") ? this.decorateCSS("show-fullscreen") : ""}
              `}
            >
              {this.getPropValue("nextIcon") && (
                <div className={this.decorateCSS("right-arrow")} onClick={this.nextImage}>
                  <ComposerIcon
                    name={this.getPropValue("nextIcon")}
                    propsIcon={{ className: this.decorateCSS("icon") }}

                  />
                </div>
              )}
              {this.getPropValue("prevIcon") && (
                <div className={this.decorateCSS("left-arrow")} onClick={this.prevImage}>
                  <ComposerIcon
                    name={this.getPropValue("prevIcon")}
                    propsIcon={{ className: this.decorateCSS("icon") }}
                  />
                </div>
              )}
              <div className={this.decorateCSS("fullscreen-container")}>
                <div className={this.decorateCSS("focused-image-container")}>
                  {galleryItems[this.getComponentState("focusedImage")].image && (
                    <img
                      className={this.decorateCSS("focused-image")}
                      src={
                        galleryItems[this.getComponentState("focusedImage")].image
                      }
                      alt={galleryItems[this.getComponentState("focusedImage")].image}
                    />
                  )}
                  {this.getPropValue("close-icon") && (
                    <button
                      onClick={() => {
                        this.closeFocus();
                      }}
                      className={this.decorateCSS("close-button")}
                    >
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("close-icon") }}
                        name={this.getPropValue("close-icon")}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery4;
