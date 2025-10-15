import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce5.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";

interface ImageGallery {
  sectionTitle: React.JSX.Element;
  sliderContent: Contents[];
}

interface Contents {
  collection: React.JSX.Element;
  sectionImage: { type: "image"; url: string };
}

class ECommerce5 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Categories",
    });

    this.addProp({
      type: "array",
      key: "slides",
      displayer: "Catagories",
      value: [
        {
          type: "object",
          key: "imageGallery",
          displayer: "Category Properties",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Women",
            },
            {
              type: "array",
              key: "sliderContent",
              displayer: "Image Gallery",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-dress.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Dress",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-partywear.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Partywear",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-jewelry.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Jewelry",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-tops.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Tops",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-bottoms.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Bottoms",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-sportwear.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Sportwear",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Category Properties",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Men",
            },
            {
              type: "array",
              key: "sliderContent",
              displayer: "Image Gallery",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-sportwear.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Sportwear",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-dress.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Dress",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-partywear.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Partywear",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-jewelry.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Jewelry",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-bottoms.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Bottoms",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Category Card",
                  value: [
                    {
                      type: "media",
                      key: "sectionImage",
                      displayer: "Section Image",
                      additionalParams: {
                          availableTypes: ["image", "video"],
                      },
                      value: {
                          type: "image",
                          url: "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-tops.jpg",
                      },
                    },
                    {
                      type: "string",
                      key: "collection",
                      displayer: "Collection Name",
                      value: "Tops",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "slidesToShow",
      displayer: "Slides To Show",
      value: 6,
      max: 6,
    });
  }

  static getName(): string {
    return "ECommerce 5";
  }

  render() {
    const slides = this.castToObject<ImageGallery[]>("slides");
    const activeCategoryIndex = this.getComponentState("activeCategory") ?? 0;
    const content = slides[activeCategoryIndex]?.sliderContent || [];
    const maxSlidesToShow = this.getPropValue("slidesToShow", {
      as_string: true,
    });
    const dynamicSlidesToShow = Math.min(content.length, maxSlidesToShow);

    const settings = {
      arrows: false,
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      infinite: content.length > dynamicSlidesToShow,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      centerMode: false,
      customPaging: (i: number) => (
        <button
          className={
            this.getComponentState("current-slide") === i
              ? this.decorateCSS("currentPaging")
              : this.decorateCSS("defaultClass")
          }
        ></button>
      ),
      slidesToShow: dynamicSlidesToShow,
      slidesToScroll: 1,
      afterChange: (currentSlide: number) => {
        this.setComponentState("current-slide", currentSlide);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(dynamicSlidesToShow, 4),
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(dynamicSlidesToShow, 3),
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: Math.min(dynamicSlidesToShow, 2),
            slidesToScroll: 1,
          },
        },
      ],
    };
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const overlay = this.getPropValue("overlay");

    return (
      <Base.Container isFull className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("title-tab")}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}

            <div className={this.decorateCSS("section-title-container")}>
              {slides.map((item: ImageGallery, index: number) => {
                const sectionTitle = this.castToString(item.sectionTitle);
                return (
                  sectionTitle && (
                    <Base.H4
                      key={index}
                      className={
                        activeCategoryIndex === index
                          ? this.decorateCSS("section-active")
                          : this.decorateCSS("section")
                      }
                      onClick={() => {
                        const currentIndex = this.getComponentState("activeCategory");
                        if (currentIndex !== index) {
                          this.setComponentState("animate", true);
                          setTimeout(() => {
                            this.setComponentState("activeCategory", index);
                            this.setComponentState("animate", false);
                          }, 300);
                        }
                      }}
                    >
                      {item.sectionTitle}
                    </Base.H4>
                  )
                );
              })}
            </div>
          </div>
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getComponentState("animate")
                ? this.decorateCSS("fade-slide-out")
                : this.decorateCSS("fade-slide-in")
            }`}
          >
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider
                {...settings}
                className={this.decorateCSS("carousel")}
              >
                {content.map((item: Contents) => {
                  const collectionExist = this.castToString(item.collection);
                  return (
                    <div
                      className={this.decorateCSS("slider-inner-div")}
                      key={item.sectionImage?.url + item.collection}
                    >
                      {item.sectionImage?.url && (
                        <div className={this.decorateCSS("image-box")}>
                          <div className={this.decorateCSS("image-wrapper")}>
                            <Base.Media
                              value={item.sectionImage}
                              className={this.decorateCSS("image")}
                            />
                            {overlay && (
                              <div className={this.decorateCSS("overlay")}></div>
                            )}
                          </div>
                        </div>
                      )}
                      {collectionExist && (
                        <Base.P className={this.decorateCSS("collection")}>
                          {item.collection}
                        </Base.P>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ECommerce5;
