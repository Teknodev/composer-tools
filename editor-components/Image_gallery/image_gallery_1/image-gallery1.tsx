import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { TiHeadphones } from "react-icons/ti";

interface ImageGallery {
  sectionTitle: JSX.Element;
  images: Image[];

}
interface Image {
  title: JSX.Element;
  cardImage: string;
  section: JSX.Element

}

class ImageGallery1 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line Active",
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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"

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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"

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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"

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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-207.jpg"
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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"
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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"

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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"

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
                      type: "image",
                      key: "cardImage",
                      displayer: "Cropo Identity",
                      value: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"

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
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"

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

    })
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Load More"
    })
    this.setComponentState("selectedSection", "All");
    this.setComponentState("selectedIndex", -1);
    this.setComponentState("moreImages", 0);
  }


  getName(): string {
    return "Image Gallery 1";
  }
  handleSectionClick(sectionTitle: JSX.Element, index: number): void {
    this.setComponentState("selectedSection", this.castToString(sectionTitle));
    this.setComponentState("selectedIndex", index)
    this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
    this.setComponentState("moreImages", 0);
  }
  handleSectionClickAll(): void {
    this.setComponentState("selectedSection", "All");
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
    const seenImages = new Set<string>();
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
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section-title-container")}>
            {
              <button
                className={`${this.decorateCSS("section-title")} ${selectedSection === "All" ? this.decorateCSS("active-section-title") : ""}`}
                onClick={() => this.handleSectionClickAll()}
              >
                All
              </button>
            }
            {
              imageGallery.map((item: ImageGallery, index: number) => (
                <button
                  key={index}
                  className={`${this.decorateCSS("section-title")} ${this.castToString(item.sectionTitle) === selectedSection ? this.decorateCSS("active-section-title") : ""}`}
                  onClick={() => this.handleSectionClick(item.sectionTitle, index)}
                >
                  {item.sectionTitle}
                </button>
              ))
            }
          </div>
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }}>
            {imageGallery
              .filter(
                (item: ImageGallery) =>
                  selectedSection == "All" ||
                  (item.sectionTitle &&
                    selectedSection &&
                    this.castToString(item.sectionTitle) === selectedSection)
              )
              .reduce((acc: Image[], item: ImageGallery) => {
                acc.push(...item.images);
                return acc;
              }, [])
              .slice(0, this.getComponentState("imageCount"))
              .map((image: Image, imgIndex: number) => (
                <div key={imgIndex} className={this.decorateCSS("card-container")}>
                  <div className={this.decorateCSS("image-container")}>
                    {image.cardImage && (
                      <img
                        alt={image.cardImage}
                        src={image.cardImage}
                        className={this.decorateCSS("image")}
                      />
                    )}
                  </div>
                  <div className={this.decorateCSS("text-container")}>
                    {this.castToString(image.title) && (
                      <div className={this.decorateCSS("title")}>{image.title}</div>
                    )}
                    {this.getPropValue("lineActive") && (
                      <div className={this.decorateCSS("line")}></div>
                    )}
                    {this.castToString(image.section) && (
                      <div className={this.decorateCSS("section")}>{image.section}</div>
                    )}
                  </div>
                </div>
              ))}
          </Base.ListGrid>
          {(this.getComponentState("imageCount") < selectedImageGallery.length) && (
            <div className={this.decorateCSS("button-wrapper")}>
              <Base.Button className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                {this.getPropValue("buttonText")}
              </Base.Button>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery1;