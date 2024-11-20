import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery1.module.scss";
import { Base } from "../../../composer-base-components/base/base";

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
                      displayer: "Title",
                      value: "Design Blast"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Cropo Identity"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Tailoring Inteo"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Design Blast"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Title",
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
    this.setComponentState("selectedSection", null as JSX.Element);

  }


  getName(): string {
    return "Image Gallery 1";
  }
  handleSectionClick(sectionTitle: JSX.Element): void {
    return this.setComponentState("selectedSection", sectionTitle);
  }


  render() {
    const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
    const selectedSection = this.getComponentState("selectedSection");
    console.log(selectedSection)
    const seenImages = new Set<string>();
    console.log("render", selectedSection)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section-title-container")}>
            {
              <button
                className={`${this.decorateCSS("section-title")} ${selectedSection === null ? this.decorateCSS("active-section-title") : ""}`}
                onClick={() => this.handleSectionClick(null)}
              >
                All
              </button>
            }
            {
              imageGallery.map((item: ImageGallery, index: number) => (
                <button
                  key={index}
                  className={`${this.decorateCSS("section-title")} ${selectedSection !== null && this.castToString(item.sectionTitle) === this.castToString(selectedSection) ? this.decorateCSS("active-section-title") : ""}`}
                  onClick={() => this.handleSectionClick(item.sectionTitle)}
                >
                  {item.sectionTitle}
                </button>
              ))
            }

          </div>
          <Base.ListGrid gridCount={{ pc: 3 }}>
            {imageGallery
              .filter(
                (item: ImageGallery) =>
                  !selectedSection ||
                  (item.sectionTitle &&
                    selectedSection &&
                    this.castToString(item.sectionTitle) === this.castToString(selectedSection))
              )
              .reduce((acc: Image[], item: ImageGallery) => {
                acc.push(...item.images);
                return acc;
              }, [])
              .filter((image: Image) => {
                if (seenImages.has(image.cardImage)) {
                  return false;
                }
                seenImages.add(image.cardImage);
                return true;
              })
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

        </Base.MaxContent>

      </Base.Container>
    );
  }
}

export default ImageGallery1;
