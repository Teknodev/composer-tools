import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import styles from "./e-commerce5.module.scss";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageGallery {
  sectionTitle: React.JSX.Element;
  sliderContent: Contents[];
}

interface Contents {
  collection: React.JSX.Element;
  sectionImage: string;
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-dress.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-partywear.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-jewelry.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-tops.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-bottoms.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-sportwear.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-sportwear.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-dress.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-partywear.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-jewelry.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-bottoms.jpg",
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
                      type: "image",
                      key: "sectionImage",
                      displayer: "Section Image",
                      value:
                        "https://vineta-html.vercel.app/images/cls-categories/fashion/circle-tops.jpg",
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
    const activeGenderIndex = this.getComponentState("sectionTitle") ?? 0;
    const content = slides[activeGenderIndex]?.sliderContent || [];
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
    const category = this.getPropValue("title");

    const title = this.castToString(category);

    return (
      <div className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("title-tab")}>
            {title && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}

            <div className={this.decorateCSS("section-title-container")}>
              {slides.map((item: ImageGallery, index: number) => {
                const sectionTitle = this.castToString(item.sectionTitle);
                return (
                  sectionTitle && (
                    <div
                      key={index}
                      className={
                        activeGenderIndex === index
                          ? this.decorateCSS("section-active")
                          : this.decorateCSS("section")
                      }
                      onClick={() => {
                        const currentIndex =
                          this.getComponentState("sectionTitle");
                        if (currentIndex !== index) {
                          this.setComponentState("animate", true);

                          setTimeout(() => {
                            this.setComponentState("sectionTitle", index);
                            this.setComponentState("animate", false);
                          }, 300);
                        }
                      }}
                    >
                      {sectionTitle}
                    </div>
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
                  const collection = this.castToString(item.collection);
                  return (
                    <div
                      className={this.decorateCSS("slider-inner-div")}
                      key={item.sectionImage + item.collection}
                    >
                      {item.sectionImage && (
                        <div className={this.decorateCSS("image-box")}>
                          <div className={this.decorateCSS("image-wrapper")}>
                            <img
                              alt=""
                              src={item.sectionImage}
                              className={this.decorateCSS("img")}
                            />
                          </div>
                        </div>
                      )}
                      {collection && (
                        <div className={this.decorateCSS("collection")}>
                          {collection}
                        </div>
                      )}
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </div>
    );
  }
}

export default ECommerce5;
