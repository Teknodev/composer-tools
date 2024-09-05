import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
              value: "All",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 1",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcecf9e8fb8002c915408?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcf669e8fb8002c915437?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0079e8fb8002c91546b?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0079e8fb8002c91546b?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd02b9e8fb8002c915477?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0579e8fb8002c91548b?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0799e8fb8002c9154a1?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0b59e8fb8002c9154ae?alt=media",
                    },
                    {
                      type: "string",
                      key: "imageTitle",
                      displayer: "Image Title ",
                      value: "Image Title Content",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
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
    // const imageTitle = this.getPropValue("imageTitle", { as_string: true });

    const magnifierIcon = this.getPropValue("icon");
    const imgCount = `${currentImageIndex + 1} of ${currentGallery.length}`;
    return (
      <div className={this.decorateCSS("surface")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("section-selector-text")}>
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
            <div className={this.decorateCSS("modal")}>
              <div className={this.decorateCSS("modal-content")}>
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
