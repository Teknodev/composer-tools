import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";

type ImageType={
  value:string;
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
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20b8c2f8a5b002ce65828?alt=media"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image2",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c6a2f8a5b002ce65834?alt=media"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image3",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c962f8a5b002ce65840?alt=media"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image4",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cbc2f8a5b002ce6584c?alt=media"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image5",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cd82f8a5b002ce65858?alt=media"
        },
        {
          type: "image",
          key: "imageGallery",
          displayer: "Image6",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cee2f8a5b002ce6586d?alt=media"
        }
      ]
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 5,
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
    const galleries = this.castToObject<ImageType[]>("gallery");
    let currentIndex = this.getComponentState("clicked_image_index");
    currentIndex = (currentIndex + 1) % galleries.length;
    this.setComponentState("clicked_image_index", currentIndex);
  }

  handlePrevImage() {
    const galleries = this.castToObject<ImageType[]>("gallery");
    let currentIndex = this.getComponentState("clicked_image_index");
    currentIndex = (currentIndex - 1 + galleries.length) % galleries.length;
    this.setComponentState("clicked_image_index", currentIndex);
  }

  render() {
    const galleries = this.castToObject<ImageType[]>("gallery");
    const isImageClicked = this.getComponentState("is_image_clicked");
    const clickedImageIndex = this.getComponentState("clicked_image_index");
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("images")}
                style={{gridTemplateColumns: `repeat(${this.getPropValue("itemCount")}, 1fr)`}}
            >
              {this.castToObject<ImageType[]>("gallery").map((image: ImageType, index: number) => (
                <div 
                className={this.decorateCSS("image-container")} 
                key={index}
                >
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
