
import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface GalleryItem {
  image: string;
  caption: React.JSX.Element;
}

class ImageGallery5 extends BaseImageGallery {
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
          displayer: "Image Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20b8c2f8a5b002ce65828?alt=media",
            },
            {
              type: "string",
              key: "caption",
              displayer: "Caption",
              value: "Gallery Image 1 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c6a2f8a5b002ce65834?alt=media",
            },
            {
              type: "string",
              key: "caption",
              displayer: "Caption",
              value: "Gallery Image 2 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c962f8a5b002ce65840?alt=media",
            },
            {
              type: "string",
              key: "caption",
              displayer: "Caption",
              value: "Gallery Image 3 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cbc2f8a5b002ce6584c?alt=media",
            },
            {
              type: "string",
              key: "caption",
              displayer: "Caption",
              value: "Gallery Image 4 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cd82f8a5b002ce65858?alt=media",
            },
            {
              type: "string",
              key: "caption",
              displayer: "Caption",
              value: "Gallery Image 5 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cee2f8a5b002ce6586d?alt=media",
            },
            {
              type: "string",
              key: "caption",
              displayer: "Caption",
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

    this.setComponentState("is_image_clicked", false);
    this.setComponentState("clicked_image_index", 0);
    this.setComponentState("moreImages", 0);
  }

  static getName(): string {
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

  handleKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowLeft":
        this.handlePrevImage();
        break;
      case "ArrowRight":
        this.handleNextImage();
        break;
      case "Escape":
        this.handleCloseClick();
        break;
      default:
        break;
    }
  }
  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))

  };
  render() {
    const galleries = this.castToObject<GalleryItem[]>("gallery");
    const isImageClicked = this.getComponentState("is_image_clicked");
    const clickedImageIndex = this.getComponentState("clicked_image_index");
    const nextIcon = this.getPropValue("nextIcon");
    const prevIcon = this.getPropValue("prevIcon");
    const imageIndex = this.getPropValue("imageIndex");
    const closeIcon = this.getPropValue("closeIcon");
    if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        ref={this.imageGalleryRef}
        tabIndex={0}
        onKeyDown={this.handleKeyPress}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid
            className={this.decorateCSS("images")}
            gridCount={{ pc: this.getPropValue("itemCount") }}
          >
            {galleries.slice(0, this.getComponentState("imageCount")).map((galleryItem: any, index: number) => {
              return (
                <div className={this.decorateCSS("image-container")}>
                  {galleryItem.image && (
                    <img
                      src={galleryItem.image}
                      alt={galleryItem.image}
                      className={this.decorateCSS("image")}
                      onClick={() => this.handleImageClick(index)}
                    />
                  )}
                </div>
              );
            })}
          </Base.ListGrid>
          {(galleries.length > this.getComponentState("imageCount")) && (
            <div className={this.decorateCSS("button-wrapper")}>
              <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                {button.text}
              </Base.Button>
            </div>
          )}
          {isImageClicked && (
            <div
              className={this.decorateCSS("overlay")}
              onClick={() => this.handleCloseClick()}
            >
              <div className={this.decorateCSS("overlay-content")}>
                <div className={this.decorateCSS("middle-content")}>
                  {closeIcon && (
                    <button className={this.decorateCSS("image-close-button")}>
                      <ComposerIcon name={closeIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                    </button>
                  )}
                  {galleries[clickedImageIndex].image && (
                    <div className={this.decorateCSS("large-image-container")}>
                      {prevIcon && (
                        <button
                          className={this.decorateCSS("prev-button")}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.handlePrevImage();
                          }}
                        >
                          <ComposerIcon name={prevIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                        </button>
                      )}
                      <img
                        src={galleries[clickedImageIndex].image}
                        alt={galleries[clickedImageIndex].image}
                        className={this.decorateCSS("large-image")}
                        onClick={(e) => {
                          e.stopPropagation();
                          this.handleNextImage();
                        }}
                      />
                      {nextIcon && (
                        <button
                          className={this.decorateCSS("next-button")}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.handleNextImage();
                          }}
                        >
                          <ComposerIcon name={nextIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                        </button>
                      )}
                    </div>

                  )}
                  <div className={this.decorateCSS("caption-container")}>
                    {imageIndex && (
                      <div className={this.decorateCSS("image-caption")}>
                        {clickedImageIndex + 1} of {galleries.length}
                      </div>
                    )}
                    <div className={this.decorateCSS("gallery-image")}>
                      {galleries[clickedImageIndex].caption}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery5;