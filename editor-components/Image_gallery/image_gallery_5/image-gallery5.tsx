import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

class ImageGalleryComponent5 extends BaseImageGallery {
  private imageGalleryRef: React.RefObject<HTMLDivElement>;
  constructor(props?: any) {
    super(props, styles);
    this.imageGalleryRef = React.createRef();
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "Gallery",
      value: [
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image1",
          value: [
            {
              type: "image",
              key: "imageGallery",
              displayer: "Image1",
              value:
              "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20b8c2f8a5b002ce65828?alt=media",
            },
            {
              type: "string",
              key: "caption1",
              displayer: "Caption 1",
              value: "Gallery Image 1 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image2",
          value: [
            {
              type: "image",
              key: "imageGallery",
              displayer: "Image2",
              value:
              "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c6a2f8a5b002ce65834?alt=media",
            },
            {
              type: "string",
              key: "caption2",
              displayer: "Caption 2",
              value: "Gallery Image 2 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image3",
          value: [
            {
              type: "image",
              key: "imageGallery",
              displayer: "Image3",
              value:
              "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c962f8a5b002ce65840?alt=media",
            },
            {
              type: "string",
              key: "caption3",
              displayer: "Caption 3",
              value: "Gallery Image 3 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image4",
          value: [
            {
              type: "image",
              key: "imageGallery",
              displayer: "Image4",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cbc2f8a5b002ce6584c?alt=media",
            },
            {
              type: "string",
              key: "caption4",
              displayer: "Caption 4",
              value: "Gallery Image 4 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image5",
          value: [
            {
              type: "image",
              key: "imageGallery",
              displayer: "Image5",
              value:
              "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cd82f8a5b002ce65858?alt=media",
            },
            {
              type: "string",
              key: "caption5",
              displayer: "Caption 5",
              value: "Gallery Image 5 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image6",
          value: [
            {
              type: "image",
              key: "imageGallery",
              displayer: "Image6",
              value:
              "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cee2f8a5b002ce6586d?alt=media",
            },
            {
              type: "string",
              key: "caption6",
              displayer: "Caption 6",
              value: "Gallery Image 6 Caption",
            },
          ],
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
      type: "icon",
      key: "closeIcon",
      displayer: "Close Button Icon",
      value: "RxCross1",
    });

    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next Button Icon",
      value: "GrCaretNext",
    });

    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Previous Button Icon",
      value: "GrCaretPrevious",
    });
    this.addProp({
      type: "boolean",
      key: "imageIndex",
      displayer: "Image Index Enabled",
      value: true,
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

  handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.handlePrevImage();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      this.handleNextImage();
    }
  }

  render() {
    const galleries = this.getPropValue("gallery");
    const isImageClicked = this.getComponentState("is_image_clicked");
    const clickedImageIndex = this.getComponentState("clicked_image_index");
    const nextIcon = this.getPropValue("nextIcon");
    const prevIcon = this.getPropValue("prevIcon");
    const imageIndex = this.getPropValue("imageIndex");
    const closeIcon = this.getPropValue("closeIcon");

    return (
      <div
        className={this.decorateCSS("container")}
        ref={this.imageGalleryRef}
        tabIndex={0}
        onKeyDown={this.handleKeyPress}
      >
        <div className={this.decorateCSS("max-content")}>
          <Base.ListGrid
            className={this.decorateCSS("images")}
            gridCount={{pc: this.getPropValue("itemCount"), tablet: 2, phone: 1}}
          >
            {galleries.map((galleryItem: any, index: number) => {
              const image = galleryItem.value.find((item: any) => item.type === "image").value;
              return (
                <div className={this.decorateCSS("image-container")} key={index}>
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className={this.decorateCSS("image")}
                    onClick={() => this.handleImageClick(index)}
                  />
                </div>
              );
            })}
          </Base.ListGrid>
          {isImageClicked && (
            <div
              className={this.decorateCSS("overlay")}
              onClick={() => this.handleCloseClick()}
            >
              <div className={this.decorateCSS("overlay-content")}>
                <div className={this.decorateCSS("middle-content")}>
                  <img
                    src={galleries[clickedImageIndex].value.find((item: any) => item.type === "image").value}
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
                  <div className={this.decorateCSS("caption-container")}>
                  {imageIndex && (
                    <div className={this.decorateCSS("image-caption")}>
                      {clickedImageIndex + 1} of {galleries.length}
                    </div>
                  )}
                  <div className={this.decorateCSS("gallery-image")}>
                    {galleries[clickedImageIndex].value.find((item: any) => item.type === "string").value}
                  </div>
                  </div>
                </div>
                <button
                  className={this.decorateCSS("prev-button")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.handlePrevImage();
                  }}
                >
                  <ComposerIcon name={prevIcon} />
                </button>
                <button
                  className={this.decorateCSS("next-button")}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.handleNextImage();
                  }}
                >
                  <ComposerIcon name={nextIcon} />
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
