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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c281a0655f8002ca6d4c6?alt=media&timestamp=1734092845901",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c28430655f8002ca6d4e8?alt=media&timestamp=1734092886976",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c28720655f8002ca6d510?alt=media&timestamp=1734092931956",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c28980655f8002ca6d542?alt=media&timestamp=1734092972393",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c28cc0655f8002ca6d5a6?alt=media&timestamp=1734093022116",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c28f00655f8002ca6d5c0?alt=media&timestamp=1734093057792",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c29130655f8002ca6d62f?alt=media&timestamp=1734093093631",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c293c0655f8002ca6d665?alt=media&timestamp=1734093137559",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c29600655f8002ca6d70f?alt=media&timestamp=1734093169920",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c298d0655f8002ca6d737?alt=media&timestamp=1734093214346",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c29ae0655f8002ca6d744?alt=media&timestamp=1734093249330",
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
                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c29d50655f8002ca6d74b?alt=media&timestamp=1734093288705",
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

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Load More"
    })
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
    this.setComponentState("focusedImage", null);
    this.setComponentState("isFocused", false);
    this.setComponentState("moreImages", 0);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  getName(): string {
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
                                this.handleSectionClick(index);
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
                                  this.handleSubSectionClick(index);
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
                {galleryItems.slice(0, this.getComponentState("imageCount")).map((item: Image, index: number) => {
                  if (!item.image) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("gallery-item")}

                    >
                      {item.image && (
                        <div className={this.decorateCSS("gallery-image-container")}>
                          <img
                            src={item.image}
                            alt={item.image}
                            className={this.decorateCSS("gallery-image")}
                          ></img>
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
            {(this.getComponentState("imageCount") < galleryItems.length) && (
              <div className={this.decorateCSS("button-wrapper")}>
                <Base.Button className={this.decorateCSS("button")} onClick={this.handleButtonClick} >{this.getPropValue("buttonText")}</Base.Button>
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
                <div className={this.decorateCSS("focused-image-container")} onClick={(e) => e.stopPropagation()}>
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