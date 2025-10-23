import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery4.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type NavItem = {
  title: React.JSX.Element;
  hasSubnav: boolean;
  subnavItems: SubnavItem[];
  images: Image[];
};

type SubnavItem = {
  title: React.JSX.Element;
  images: Image[];
};

type Image = {
  image: TypeMediaInputValue;
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
                      type: "media",
                      key: "image",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35b8f07399d002cb493dd?alt=media",
                      },
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
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
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35bc507399d002cb49422?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35bea07399d002cb4942e?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
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
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c0607399d002cb4943b?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c5a07399d002cb49448?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
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
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c8007399d002cb49454?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35c9e07399d002cb49466?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
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
                      type: "media",
                      key: "image",
                      displayer: "Image",
                      value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35cc307399d002cb49472?alt=media",
                      },
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
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
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35cea07399d002cb49488?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35d1107399d002cb494a8?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
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
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35d4007399d002cb49503?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "image-item",
                          displayer: "Image",
                          value: [
                            {
                              type: "media",
                              key: "image",
                              displayer: "Image",
                              value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c35d4e07399d002cb49516?alt=media",
                              },
                              additionalParams: {
                                availableTypes: ["image", "video"],
                              },
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
      type: "number",
      key: "imageCountInitial",
      displayer: "Image Count Initial",
      value: 3
    })
    this.addProp({
      type: "number",
      key: "imageCount",
      displayer: "More Image Count",
      value: 3
    })

    this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));

    this.addProp({
      type: "media",
      key: "close-icon",
      displayer: "Close Icon",
      value: {
        type: "icon",
        name: "RxCross1",
      },
      additionalParams: {
        availableTypes: ["icon"],
      },
    });
    this.addProp({
      type: "media",
      key: "imageIcon",
      displayer: "Image Icon",
      value: {
        type: "icon",
        name: "IoSearchOutline",
      },
      additionalParams: {
        availableTypes: ["icon"],
      },
    });
    this.addProp({
      type: "media",
      key: "nextIcon",
      displayer: "Next Icon",
      value: {
        type: "icon",
        name: "HiArrowRight",
      },
      additionalParams: {
        availableTypes: ["icon"],
      },
    });
    this.addProp({
      type: "media",
      key: "prevIcon",
      displayer: "Prev Icon",
      value: {
        type: "icon",
        name: "HiArrowLeft",
      },
      additionalParams: {
        availableTypes: ["icon"],
      },
    });


    this.setComponentState("activeNav", 0);
    this.setComponentState("activeSubnav", null);
    this.setComponentState("focusedImage", null);
    this.setComponentState("isFocused", false);
    this.setComponentState("moreImages", 0);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  static getName(): string {
    return "Image Gallery 4";
  }
  handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft":
        this.prevImage();
        break;
      case "ArrowRight":
        this.nextImage();
        break;
      case "Escape":
        this.closeFocus();
        break;
      default:
        break;
    }
  };

  handleSectionClick(index: number): void {
    this.setComponentState("activeNav", index);
    this.setComponentState("activeSubnav", null);
    this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
    this.setComponentState("moreImages", 0);
  }
  handleSubSectionClick(index: number): void {
    this.setComponentState("activeSubnav", index);
    this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
    this.setComponentState("moreImages", 0);
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

  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))

  };
  render() {
    const itemsPerRow: number = this.getPropValue("itemsPerRow");
    const activeNav: number = this.getComponentState("activeNav");
    const activeSubnav: number = this.getComponentState("activeSubnav");
    const navItems = this.castToObject<NavItem[]>("navItems");
    const subnavItems = navItems[activeNav]?.subnavItems;
    const showActiveNavSubnavs = navItems[activeNav]?.hasSubnav;
    const galleryItems = this.getImages();
    if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

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
                            <Base.H5
                              className={`${this.decorateCSS("button")} ${activeNav === index ? this.decorateCSS("active") : ""}`}
                              onClick={() => {
                                this.handleSectionClick(index);
                              }}
                            >
                              {item.title}
                            </Base.H5>
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
                              <Base.H5
                                className={`${this.decorateCSS("button")} ${activeSubnav === index ? this.decorateCSS("active") : ""}`}
                                onClick={() => {
                                  this.handleSubSectionClick(index);
                                }}
                              >
                                {item.title}
                              </Base.H5>
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
                {galleryItems.slice(0, this.getComponentState("imageCount")).map((item: Image, index: number) => {
                  if (!item.image) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("gallery-item")}

                    >
                      {item.image && (
                        <div className={this.decorateCSS("gallery-image-container")}>
                          <Base.Media
                            value={item.image}
                            className={this.decorateCSS("gallery-image")}
                          />
                          <div className={this.decorateCSS("gallery-image-overlay")}
                            onClick={() => {
                              this.focusImage(index)
                            }}></div>
                        </div>

                      )}
                      {this.getPropValue("imageIcon") && (
                        <div className={this.decorateCSS("icon-overlay")} onClick={() => {
                          this.focusImage(index)
                        }}>
                          <Base.Media
                            value={this.getPropValue("imageIcon")}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}
            {(this.getComponentState("imageCount") < galleryItems.length) && this.castToString(button.text) && (
              <div className={this.decorateCSS("button-wrapper")}>
                <Base.Button className={this.decorateCSS("button")}
                  buttonType={button.type}
                  onClick={this.handleButtonClick}>
                  <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                </Base.Button>
              </div>
            )}

          </div>

          {galleryItems[this.getComponentState("focusedImage")]?.image && (
            <div
              className={this.getComponentState("isFocused") ? this.decorateCSS("gallery-item-fullscreen") : ""}
              onClick={() => {
                this.closeFocus();
              }}
            >
              {this.getPropValue("nextIcon") && (
                <div className={this.decorateCSS("right-arrow")} onClick={this.nextImage}>
                  <Base.Media
                    value={this.getPropValue("nextIcon")}
                    className={this.decorateCSS("icon")}

                  />
                </div>
              )}
              {this.getPropValue("prevIcon") && (
                <div className={this.decorateCSS("left-arrow")} onClick={this.prevImage}>
                  <Base.Media
                    value={this.getPropValue("prevIcon")}
                    className={this.decorateCSS("icon")}
                  />
                </div>
              )}
              <div className={this.decorateCSS("fullscreen-container")}>
                <div className={this.decorateCSS("focused-image-container")} onClick={(e) => e.stopPropagation()}>
                  {galleryItems[this.getComponentState("focusedImage")].image && (
                    <Base.Media
                      className={this.decorateCSS("focused-image")}
                      value={galleryItems[this.getComponentState("focusedImage")].image}
                    />
                  )}
                  {this.getPropValue("close-icon") && (
                    <button
                      onClick={() => {
                        this.closeFocus();
                      }}
                      className={this.decorateCSS("close-button")}
                    >
                      <Base.Media
                        value={this.getPropValue("close-icon")}
                        className={this.decorateCSS("close-icon")}
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