import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";

interface ImageType {
  type: string;
  key: string;
  displayer: string;
  value: string;
}

class ImageGalleryComponent5 extends BaseImageGallery {
  constructor(probs?: any) {
    super(probs, styles);

    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "Gallery",
      value: [
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image1",
          value: "https://arty.flatheme.net/assets/images/p-clean-2-1.jpg"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image2",
          value: "https://arty.flatheme.net/assets/images/p-clean-2-2.jpg"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image3",
          value: "https://arty.flatheme.net/assets/images/p-clean-2-3.jpg"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image4",
          value: "https://arty.flatheme.net/assets/images/p-clean-2-4.jpg"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image5",
          value: "https://arty.flatheme.net/assets/images/p-clean-2-5.jpg"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image6",
          value: "https://arty.flatheme.net/assets/images/p-clean-2-6.jpg"
        }
      ]
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

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("images")}>
              {galleries.map((image: ImageType, index: number) => (
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
              <div className={this.decorateCSS("overlay")} onClick={() => this.handleCloseClick()}>
                <div className={this.decorateCSS("overlay-content")}>
                  <div className={this.decorateCSS("middle-content")}>
                    <button className={this.decorateCSS("close-button")} onClick={() => this.handleCloseClick()}>×</button>
                    <img src={galleries[clickedImageIndex].value} alt="" className={this.decorateCSS("large-image")} onClick={(e) =>  {e.stopPropagation();this.handleNextImage()}}/>
                    <div className={this.decorateCSS("image-caption")}>{clickedImageIndex + 1} of {galleries.length}</div>
                    <div className={this.decorateCSS("gallery-image")}>Gallery Image</div>
                  </div>
                  <button className={this.decorateCSS("prev-button")} onClick={(e) =>  {e.stopPropagation();this.handlePrevImage()}}>&lt;</button>
                  <button className={this.decorateCSS("next-button")} onClick={(e) =>  {e.stopPropagation();this.handleNextImage()}}>&gt;</button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default ImageGalleryComponent5;
