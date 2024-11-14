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

}

class ImageGallery1 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
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
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Design Blast"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Cropo Identity"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"

                    }
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
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Tailoring Inteo"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-207.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"

                    }
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
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Design Blast"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Cropo Identity",
                      value: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"

                    }
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Image",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "image",
                      key: "cardImage",
                      displayer: "Card Image",
                      value: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"

                    }
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
    console.log("click", sectionTitle)
    return this.setComponentState("selectedSection", sectionTitle);
  }


  render() {
    const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
    const selectedSection = this.getComponentState("selectedSection");
    const seenImages = new Set<string>();
    console.log("render", selectedSection)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section-title-container")}>
            {
              <button
                className={this.decorateCSS("section-title")}
                onClick={() => this.handleSectionClick(null)}
              >
                All
              </button>
            }
            {
              imageGallery.map((item: ImageGallery, index: number) => (
                <button
                  key={index}
                  className={this.decorateCSS("section-title")}
                  onClick={() => this.handleSectionClick(item.sectionTitle)}
                >
                  {item.sectionTitle}
                </button>
              ))
            }

          </div>
          {imageGallery
            .filter(
              (item: ImageGallery) =>
                !selectedSection ||
                (item.sectionTitle &&
                  selectedSection &&
                  this.castToString(item.sectionTitle) === this.castToString(selectedSection))
            )
            .map((item: ImageGallery, index: number) => (
              <Base.ListGrid key={index} gridCount={{ pc: 3 }}>
                {item.images
                  .filter((image: Image) => {
                    if (seenImages.has(image.cardImage)) {
                      return false; // Eğer `cardImage` zaten `Set` içindeyse, bu görüntüyü atla
                    }
                    seenImages.add(image.cardImage); // Yeni `cardImage` URL'sini Set'e ekle
                    return true; // Aksi halde göster
                  })
                  .map((image: Image, imgIndex: number) => (
                    <div
                      key={imgIndex}
                      className={this.decorateCSS("card-container")}
                    >
                      <img
                        alt={image.cardImage}
                        src={image.cardImage}
                        className={this.decorateCSS("image")}
                      />
                      <div className={this.decorateCSS("title")}>
                        {image.title}
                      </div>
                    </div>
                  ))}
              </Base.ListGrid>
            ))}
        </Base.MaxContent>

      </Base.Container>
    );
  }
}

export default ImageGallery1;
