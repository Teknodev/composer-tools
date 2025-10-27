
import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface GalleryItem {
  image: TypeMediaInputValue;
  caption: React.JSX.Element;
}

class ImageGallery5 extends BaseImageGallery {
  private imageGalleryRef: React.RefObject<HTMLDivElement | null>;
  constructor(props?: any) {
    super(props, styles);
    this.imageGalleryRef = React.createRef();

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
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20b8c2f8a5b002ce65828?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c6a2f8a5b002ce65834?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20c962f8a5b002ce65840?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cbc2f8a5b002ce6584c?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cd82f8a5b002ce65858?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a20cee2f8a5b002ce6586d?alt=media",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
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
      type: "object",
      key: "modal",
      displayer: "Modal",
      value: [
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Button Icon",
          value: {
            type: "icon",
            name: "RxCross1",
          },
          additionalParams: {
            availableTypes: ["icon"],
          },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Button Icon",
          value: {
            type: "icon",
            name: "GrCaretNext",
          },
          additionalParams: {
            availableTypes: ["icon"],
          },
        },
        {
          type: "media",
          key: "prevIcon",
          displayer: "Previous Button Icon",
          value: {
            type: "icon",
            name: "GrCaretPrevious",
          },
          additionalParams: {
            availableTypes: ["icon"],
          },
        },
        {
          type: "boolean",
          key: "imageIndex",
          displayer: "Image Index",
          value: true,
        },
      ],
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

  handleImageClick = (index: number) => {
    const galleries = this.getPropValue("gallery");
    if (galleries && galleries[index]) {
      this.setComponentState("is_image_clicked", true);
      this.setComponentState("clicked_image_index", index);
    }
  }

  handleCloseClick = () => {
    this.setComponentState("is_image_clicked", false);
  }

  handleNextImage = () => {
    const galleries = this.getPropValue("gallery");
    if (!galleries || galleries.length === 0) return;
    
    let currentIndex = this.getComponentState("clicked_image_index");
    currentIndex = (currentIndex + 1) % galleries.length;
    this.setComponentState("clicked_image_index", currentIndex);
  }

  handlePrevImage = () => {
    const galleries = this.getPropValue("gallery");
    if (!galleries || galleries.length === 0) return;
    
    let currentIndex = this.getComponentState("clicked_image_index");
    currentIndex = (currentIndex - 1 + galleries.length) % galleries.length;
    this.setComponentState("clicked_image_index", currentIndex);
  }

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (!this.getComponentState("is_image_clicked")) return;
    
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
    const modal = this.castToObject<any>("modal");
    const nextIcon = modal.nextIcon;
    const prevIcon = modal.prevIcon;
    const imageIndex = modal.imageIndex;
    const closeIcon = modal.closeIcon;
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
                <div className={this.decorateCSS("image-container")} onClick={() => this.handleImageClick(index)}>
                  {galleryItem.image && (
                    <Base.Media
                      value={galleryItem.image}
                      className={this.decorateCSS("image")}
                    />
                  )}
                </div>
              );
            })}
          </Base.ListGrid>
          {(galleries.length > this.getComponentState("imageCount")) && this.castToString(button.text) && (
            <div className={this.decorateCSS("button-wrapper")}>
              <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
              </Base.Button>
            </div>
          )}
          {isImageClicked && galleries[clickedImageIndex] && (
            <Base.Overlay isVisible={true} className={this.decorateCSS("overlay")} onKeyDown={this.handleKeyPress} tabIndex={0}>
              <div className={this.decorateCSS("modal-wrapper")} onClick={this.handleCloseClick}>
                <div className={this.decorateCSS("modal-content")} onClick={(e) => e.stopPropagation()}>
                  {closeIcon && (
                    <div className={this.decorateCSS("close")} onClick={(e) => { e.stopPropagation(); this.handleCloseClick(); }}>
                      <Base.Media value={closeIcon} className={this.decorateCSS("icon")} />
                    </div>
                  )}
                  
                  {galleries[clickedImageIndex].image && (
                    <div className={this.decorateCSS("image-container")}>
                      <Base.Media
                        value={galleries[clickedImageIndex].image}
                        className={this.decorateCSS("modal-image")}
                      />
                    </div>
                  )}
                  
                  <div className={this.decorateCSS("image-info")}>
                    <div className={this.decorateCSS("image-caption")}>
                      {galleries[clickedImageIndex].caption}
                    </div>
                    {imageIndex && (
                      <div className={this.decorateCSS("image-count")}>
                        {clickedImageIndex + 1} of {galleries.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {prevIcon && (
                <div className={this.decorateCSS("prev")} onClick={(e) => { e.stopPropagation(); this.handlePrevImage(); }}>
                  <Base.Media value={prevIcon} className={this.decorateCSS("icon")} />
                </div>
              )}
              
              {nextIcon && (
                <div className={this.decorateCSS("next")} onClick={(e) => { e.stopPropagation(); this.handleNextImage(); }}>
                  <Base.Media value={nextIcon} className={this.decorateCSS("icon")} />
                </div>
              )}
            </Base.Overlay>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery5;