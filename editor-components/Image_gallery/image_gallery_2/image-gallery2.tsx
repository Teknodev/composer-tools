import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerModalClose from "../../../composer-base-components/close/close";

type ImageType = {
  image: string;
  imageTitle: JSX.Element;
};

type sectionType = {
  title: string;
  imageGallery: ImageType[];
};

class ImageGallery2 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.setComponentState("default", 0);
    this.setComponentState("modalOpen", false);
    this.setComponentState("currentImageIndex", 0);

    this.addProp({
      type: "boolean",
      key: "showAll",
      displayer: "Show All Category",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "gallery",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Nonveg",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 2",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db15cc343034002c4597b8?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Nonveg Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db161b343034002c4597d7?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Nonveg Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db1803343034002c459844?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Nonveg Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db1855343034002c459851?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Nonveg Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db1887343034002c459874?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Nonveg Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Nonveg Image",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Vegetarian",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 2",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66dec9e1343034002c45cd6b?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Vegetarian Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66deca37343034002c45cd7a?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Vegetarian Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66deca62343034002c45cd95?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Vegetarian Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66deca84343034002c45cdad?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Vegetarian Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decb45343034002c45ce26?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Vegetarian Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decba8343034002c45ce6f?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Vegetarian Image",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dessert",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 2",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decbec343034002c45ced2?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Dessert Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc22343034002c45cf43?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Dessert Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc48343034002c45cf57?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Dessert Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc61343034002c45cf65?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Dessert Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc7c343034002c45cf7c?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Dessert Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66decc96343034002c45cf93?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Dessert Image",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Drinks",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 2",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db18f2343034002c459890?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Drinks Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db191c343034002c45989c?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Drinks Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db194c343034002c4598b3?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Drinks Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db1977343034002c4598ce?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Drinks Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db199f343034002c4598f3?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Drinks Image",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66db19d0343034002c45990a?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title",
                      value: "Drinks Image",
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
      type: "icon",
      key: "icon",
      displayer: "Magnifier Icon",
      value: "FaSearch",
    });

    this.addProp({
      type: "icon",
      key: "nextImageIcon",
      displayer: "Next Image Icon",
      value: "PiArrowRight",
    });

    this.addProp({
      type: "icon",
      key: "previousImageIcon",
      displayer: "Previous Image Icon",
      value: "PiArrowLeft",
    });

    this.addProp({
      type: "icon",
      key: "closeModalIcon",
      displayer: "Close Modal Icon",
      value: "IoCloseOutline",
    });

    this.addProp({
      type: "boolean",
      key: "imgCounter",
      displayer: "Image Page Number",
      value: true,
    });
  }

  openModal = (index: number) => {
    this.setComponentState("modalOpen", true);
    this.setComponentState("currentImageIndex", index);
  };

  closeModal = () => {
    this.setComponentState("modalOpen", false);
  };

  changeImage = (direction: string) => {
    const currentImageIndex = this.getComponentState("currentImageIndex");
    const currentGallery = this.getCurrentGallery();
    const galleryLength = currentGallery.length;
    let newIndex;
    if (direction === "prev") {
      newIndex = (currentImageIndex - 1 + galleryLength) % galleryLength;
    } else if (direction === "next") {
      newIndex = (currentImageIndex + 1) % galleryLength;
    }
    this.setComponentState("currentImageIndex", newIndex);
  };

  prevImage = () => {
    this.changeImage("prev");
  };

  nextImage = () => {
    this.changeImage("next");
  };

  getCurrentGallery() {
    const galleryCollection = this.castToObject<sectionType[]>("gallery");
    const currentIndex: number = this.getComponentState("default");

    if (this.getPropValue("showAll") && currentIndex === -1) {
      return galleryCollection.flatMap((section) => section.imageGallery) || [];
    }
    return galleryCollection[currentIndex]?.imageGallery || [];
  }

  getName(): string {
    return "Image Gallery 2";
  }

  render() {
    const galleryCollection = this.getPropValue("gallery");
    const currentIndex = this.getComponentState("default");
    const modalOpen = this.getComponentState("modalOpen");
    const currentImageIndex = this.getComponentState("currentImageIndex");
    const currentGallery = this.getCurrentGallery();
    const currentImage = currentGallery[currentImageIndex];
    const nextImageIcon = this.getPropValue("nextImageIcon");
    const previousImageIcon = this.getPropValue("previousImageIcon");
    const closeModalIcon = this.getPropValue("closeModalIcon");
    const imgCounter = this.getPropValue("imgCounter");
    const magnifierIcon = this.getPropValue("icon");
    const imgCount = `${currentImageIndex + 1} of ${currentGallery.length}`;
    const showAll = this.getPropValue("showAll");

    return (
      <div className={this.decorateCSS("surface")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("section-selector-text")}>
              {showAll && (
                <h3
                  className={`${this.decorateCSS("section-text")} ${
                    currentIndex === -1 ? this.decorateCSS("active") : ""
                  }`}
                  onClick={() => this.setComponentState("default", -1)}
                >
                  All
                </h3>
              )}
              {galleryCollection.map((element: any, index: number) => (
                <h3
                  className={`${this.decorateCSS("section-text")} ${
                    index === currentIndex ? this.decorateCSS("active") : ""
                  }`}
                  key={index}
                  onClick={() => this.setComponentState("default", index)}
                >
                  {element.getPropValue("title")}
                </h3>
              ))}
            </div>
            <div className={this.decorateCSS("gallery-grid")}>
              {currentGallery.map((section: ImageType, imageIndex: number) => {
                if (!section.image) return null;
                return (
                  <div
                    className={this.decorateCSS("gallery-item")}
                    key={imageIndex}
                    onClick={() => this.openModal(imageIndex)}
                  >
                    <div className={this.decorateCSS("image-container")}>
                      <img
                        src={section.image}
                        alt={this.castToString(section.imageTitle)}
                        className={this.decorateCSS("gallery-image")}
                      />
                      <div className={this.decorateCSS("overlay")} />
                      <div className={this.decorateCSS("zoom-icon")}>
                        <ComposerIcon
                          propsIcon={{
                            className: this.decorateCSS("magnifier-icon"),
                          }}
                          name={magnifierIcon}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {modalOpen && (
            <div
              className={this.decorateCSS("modal")}
              onClick={this.closeModal}
            >
              <div
                className={this.decorateCSS("modal-content")}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={this.decorateCSS("close")}
                  onClick={this.closeModal}
                >
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("icon") }}
                    name={closeModalIcon}
                  />
                </div>
                <div
                  className={this.decorateCSS("prev")}
                  onClick={this.prevImage}
                >
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("icon") }}
                    name={previousImageIcon}
                  />
                </div>
                <div
                  className={this.decorateCSS("next")}
                  onClick={this.nextImage}
                >
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("icon") }}
                    name={nextImageIcon}
                  />
                </div>
                <div className={this.decorateCSS("image-container")}>
                  <img
                    src={currentImage.image as string}
                    className={this.decorateCSS("modal-image")}
                  />
                </div>
                <div className={this.decorateCSS("image-info")}>
                  <div className={this.decorateCSS("image-title")}>
                    {currentImage.imageTitle}
                  </div>
                  {imgCounter && (
                    <div className={this.decorateCSS("image-count")}>
                      {imgCount}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImageGallery2;
