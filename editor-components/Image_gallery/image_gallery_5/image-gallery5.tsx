import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class ImageGalleryComponent5 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "Gallery",
      value: [
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image1",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20b8c2f8a5b002ce65828?alt=media",
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image2",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c6a2f8a5b002ce65834?alt=media",
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image3",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c962f8a5b002ce65840?alt=media",
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image4",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cbc2f8a5b002ce6584c?alt=media",
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image5",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cd82f8a5b002ce65858?alt=media",
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image6",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cee2f8a5b002ce6586d?alt=media",
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 5,
    });

    this.addProp({
      type: "string",
      key: "prevButtonText",
      displayer: "Previous Button Text",
      value: "<",
    });

    this.addProp({
      type: "string",
      key: "nextButtonText",
      displayer: "Next Button Text",
      value: ">",
    });

    this.addProp({
      type: "string",
      key: "imageCaptionText",
      displayer: "Image Caption Text",
      value: "Gallery Image",
    });

    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "fa-solid fa-times", 
    });

    this.setComponentState("is_image_clicked", false);
    this.setComponentState("clicked_image_index", 0);
  }

  getName(): string {
    return "Image Gallery 5";
  }

  handleImageClick(index: number) {
    this.setComponentState("is_image_clicked", true);
    this.setComponentState("clicked_image_index", index);
  }

  handleCloseClick() {
    this.setComponentState("is_image_clicked", false);
  }

  handleNextImage() {
    const galleries = this.getPropValue("gallery");
    let currentIndex = this.getComponentState("clicked_image_index");
    currentIndex = (currentIndex + 1) % galleries.length;
    this.setComponentState("clicked_image_index", currentIndex);
  }

  handlePrevImage() {
    const galleries = this.getPropValue("gallery");
    let currentIndex = this.getComponentState("clicked_image_index");
    currentIndex = (currentIndex - 1 + galleries.length) % galleries.length;
    this.setComponentState("clicked_image_index", currentIndex);
  }

  render() {
    const galleries = this.getPropValue("gallery");
    const isImageClicked = this.getComponentState("is_image_clicked");
    const clickedImageIndex = this.getComponentState("clicked_image_index");
    const prevButtonText = this.getPropValue("prevButtonText");
    const nextButtonText = this.getPropValue("nextButtonText");
    const imageCaptionText = this.getPropValue("imageCaptionText");
    const closeIcon = this.getPropValue("closeIcon");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div
            className={this.decorateCSS("images")}
            style={{
              gridTemplateColumns: `repeat(${this.getPropValue(
                "itemCount"
              )}, 1fr)`,
            }}
          >
            {galleries.map((image: any, index: number) => (
              <div className={this.decorateCSS("image-container")} key={index}>
                <img
                  src={image.value}
                  alt=""
                  className={this.decorateCSS("image")}
                  onClick={() => this.handleImageClick(index)}
                />
              </div>
            ))}
          </div>
          {isImageClicked && (
            <div
              className={this.decorateCSS("overlay")}
              onClick={() => this.handleCloseClick()}
            >
              <div className={this.decorateCSS("overlay-content")}>
                <button
                  className={this.decorateCSS("close-button")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.handleCloseClick();
                  }}
                >
                </button>
                <div className={this.decorateCSS("middle-content")}>
                  <img
                    src={galleries[clickedImageIndex].value}
                    alt=""
                    className={this.decorateCSS("large-image")}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.handleNextImage();
                    }}
                  />
                <button className={this.decorateCSS("image-close-button")}>
                  <ComposerIcon name={closeIcon} />
                </button>
                  <div className={this.decorateCSS("image-caption")}>
                    {clickedImageIndex + 1} of {galleries.length}
                  </div>
                  <div className={this.decorateCSS("gallery-image")}>
                    {imageCaptionText}
                  </div>
                </div>
                <button
                  className={this.decorateCSS("prev-button")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.handlePrevImage();
                  }}
                >
                  {prevButtonText}
                </button>
                <button
                  className={this.decorateCSS("next-button")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.handleNextImage();
                  }}
                >
                  {nextButtonText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImageGalleryComponent5;
