import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ImageGallery {
  sectionTitle: React.JSX.Element;
  images: Image[];
}
interface Image {
  title: React.JSX.Element;
  cardImage: TypeMediaInputValue;
  section: React.JSX.Element;
  overlay: boolean;
}

class ImageGallery1 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line",
      value: true
    })
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
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    })
    this.addProp({
      type: "string",
      key: "allText",
      displayer: "All Button Text",
      value: "All",
    })
    this.addProp({
      type: "array",
      key: "imageGalleries",
      displayer: "Image Galleries",
      value: [
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Digital"
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Design Blast"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Photography"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Cropo Identity"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Packaging"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Graphics"
                    },
                  ]
                }

              ]
            }

          ]
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Branding"
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-207.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Tailoring Inteo"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Branding"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Application"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Graphics"
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Image Gallery",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Web"
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Design Blast"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Photograhy"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Application"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Graphics"
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Image",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title 1",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title 2",
                      value: "Graphics"
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));

    this.setComponentState("selectedSection", this.castToString(this.getPropValue("allText")));
    this.setComponentState("selectedIndex", -1);
    this.setComponentState("moreImages", 0);
  }

  static getName(): string {
    return "Image Gallery 1";
  }
  handleSectionClick(sectionTitle: React.JSX.Element, index: number): void {
    this.setComponentState("selectedSection", this.castToString(sectionTitle));
    this.setComponentState("selectedIndex", index)
    this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
    this.setComponentState("moreImages", 0);
  }
  handleSectionClickAll(): void {
    this.setComponentState("selectedSection", this.castToString(this.getPropValue("allText")));
    this.setComponentState("selectedIndex", -1)
    this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
    this.setComponentState("moreImages", 0);
  }

  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))
  };

  render() {
    if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));
    const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
    const selectedSection = this.getComponentState("selectedSection");
    const allImages = imageGallery.reduce((acc: Image[], gallery: ImageGallery) => {
      gallery.images.forEach((image) => {
        if (!acc.some((img) => img.cardImage === image.cardImage)) {
          acc.push(image);
        }
      });
      return acc;
    }, []);
    const sectionImage = (this.getComponentState("selectedIndex") != -1) ? imageGallery[this.getComponentState("selectedIndex")].images : "";
    const selectedImageGallery =
      this.getComponentState("selectedIndex") == -1 ? allImages
        : sectionImage;

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(imageGallery.length > 0 || this.castToString(this.getPropValue("allText"))) && (<Base.Row className={this.decorateCSS("tab-container")}>
            { this.castToString(this.getPropValue("allText")) && (
              <Base.H5
                className={`${this.decorateCSS("tab")} ${selectedSection === this.castToString(this.getPropValue("allText")) ? this.decorateCSS("active-tab") : ""}`}
                onClick={() => this.handleSectionClickAll()}
              >
                {this.getPropValue("allText")}
              </Base.H5>
            )}
            {imageGallery.length > 0 && (
              imageGallery.map((item: ImageGallery, index: number) => this.castToString(item.sectionTitle) && (
                <Base.H5
                  key={index}
                  className={`${this.decorateCSS("tab")} ${this.castToString(item.sectionTitle) === selectedSection ? this.decorateCSS("active-tab") : ""}`}
                  onClick={() => this.handleSectionClick(item.sectionTitle, index)}
                >
                  {item.sectionTitle}
                </Base.H5>
              ))
            )}
          </Base.Row>)}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}>
            {imageGallery
              .filter(
                (item: ImageGallery) =>
                  selectedSection == this.castToString(this.getPropValue("allText")) ||
                  (item.sectionTitle &&
                    selectedSection &&
                    this.castToString(item.sectionTitle) === selectedSection)
              )
              .reduce((acc: Image[], item: ImageGallery) => {
                acc.push(...item.images);
                return acc;
              }, [])
              .slice(0, this.getComponentState("imageCount"))
              .map((image: Image, imgIndex: number) => (image.cardImage || this.castToString(image.title) || this.castToString(image.section)) && (
                <div key={imgIndex} className={this.decorateCSS("card-container")}>
                  {image.cardImage && (
                    <div className={this.decorateCSS("image-container")}>
                    <Base.Media
                      value={image.cardImage}
                      className={this.decorateCSS("image")}
                    />
                    {image.overlay && (
                      <div className={this.decorateCSS("overlay")}></div>
                    )}
                    </div>)}
                  <div className={this.decorateCSS("text-container")}>
                    {this.castToString(image.title) && (
                      <Base.P className={this.decorateCSS("title")}>{image.title}</Base.P>
                    )}
                    {this.getPropValue("lineActive")  && (
                      <div className={this.decorateCSS("line")}></div>
                    )}
                    {this.castToString(image.section) && (
                      <Base.P className={this.decorateCSS("section")}>{image.section}</Base.P>
                    )}
                  </div>
                </div>
              ))}
          </Base.ListGrid>
          {(this.getComponentState("imageCount") < selectedImageGallery.length) && this.castToString(button.text) && (
            <div className={this.decorateCSS("button-wrapper")}>
              <Base.Button buttonType={button.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
              </Base.Button>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery1;