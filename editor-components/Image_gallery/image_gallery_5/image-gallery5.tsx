
import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

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
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "headerButtons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "Gallery",
      value: [
        {
          type: "object",
          key: "imageGallery",
          displayer: "Media Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
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
              displayer: "Text",
              value: "Gallery Image 1 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Media Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
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
              displayer: "Text",
              value: "Gallery Image 2 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Media Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
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
              displayer: "Text",
              value: "Gallery Image 3 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Media Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
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
              displayer: "Text",
              value: "Gallery Image 4 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Media Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
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
              displayer: "Text",
              value: "Gallery Image 5 Caption",
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Media Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
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
              displayer: "Text",
              value: "Gallery Image 6 Caption",
            },
          ],
        },
      ],
    });

    this.addProp({
        type: "object",
        key: "countSettings",
        displayer: "Count Settings",
        value: [
            {
                type: "number",
                key: "imageCountInitial",
                displayer: "Media Count Initial",
                value: 3
            },
            {
                type: "number",
                key: "imageCount",
                displayer: "More Media Count",
                value: 3
            },
            {
                type: "number",
                key: "itemCount",
                displayer: "Item Count in a Row",
                value: 3
            },
        ]
    });

    this.addProp({
      type: "object",
      key: "modal",
      displayer: "Modal",
      value: [
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Icon",
          value: {
            type: "icon",
            name: "RxCross1",
          },
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
        },
        {
          type: "media",
          key: "nextIcon",
          displayer: "Next Icon",
          value: {
            type: "icon",
            name: "GrCaretNext",
          },
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
        },
        {
          type: "media",
          key: "prevIcon",
          displayer: "Previous Icon",
          value: {
            type: "icon",
            name: "GrCaretPrevious",
          },
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
        },
        {
          type: "boolean",
          key: "imageIndex",
          displayer: "Page Number",
          value: true,
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Load More",
      value: [
        INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"),
      ],
    });

    this.setComponentState("is_image_clicked", false);
    this.setComponentState("clicked_image_index", 0);
    this.setComponentState("moreImages", 0);
  }

  static getName(): string {
    return "Image Gallery 5";
  }
  getCountSettings(): { imageCountInitial: number; imageCount: number; itemCount: number } {
      return this.castToObject<{ imageCountInitial: number; imageCount: number; itemCount: number }>("countSettings");
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
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getCountSettings().imageCount)

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
    if (this.getComponentState("imageCount") != this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"));

    const headerButtons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
    const hasHeaderButtons = headerButtons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        ref={this.imageGalleryRef}
        tabIndex={0}
        onKeyDown={this.handleKeyPress}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist || hasHeaderButtons) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {hasHeaderButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {headerButtons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("header-button")}>
                        <Base.P className={this.decorateCSS("header-button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid
            className={this.decorateCSS("images")}
            gridCount={{ pc: this.getCountSettings().itemCount, tablet: 3 }}
          >
            {galleries.slice(0, this.getComponentState("imageCount")).map((galleryItem: any, index: number) => {
              if (!galleryItem.image) return null;
              return (
                <div key={index} className={this.decorateCSS("image-container")} onClick={() => this.handleImageClick(index)}>
                  <Base.Media
                    value={galleryItem.image}
                    className={this.decorateCSS("image")}
                  />
                </div>
              );
            })}
          </Base.ListGrid>
          {(galleries.length > this.getComponentState("imageCount")) && hasButtons && (
            <div className={this.decorateCSS("button-wrapper")}>
              {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                <ComposerLink key={index} path={button.url}>
                  <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                  </Base.Button>
                </ComposerLink>
              ))}
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
                    {this.castToString(galleries[clickedImageIndex].caption) && (
                      <Base.P className={this.decorateCSS("image-caption")}>
                        {galleries[clickedImageIndex].caption}
                      </Base.P>
                    )}
                    {imageIndex && (
                      <Base.P className={this.decorateCSS("image-count")}>
                        {clickedImageIndex + 1} of {galleries.length}
                      </Base.P>
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