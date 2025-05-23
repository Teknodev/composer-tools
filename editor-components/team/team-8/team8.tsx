import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: string;
  imagesubtitle: React.JSX.Element;
  imagetitle: React.JSX.Element;
};

class Team8 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "OUR PLAYERS",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Senior players with the highest improvement in all games.",
    });

    this.addProp({
      type: "image",
      key: "backroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ace46d03b007002cc763cb?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slides",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Joseph Hall",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Pinch Hitter",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0822803b007002cc7714f?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Steve Gareth",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Relief Pitcher",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0828d03b007002cc77195?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Juan Quadra",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Closer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b082e503b007002cc771bb?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Robert Caton",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Middle Reliever",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0833903b007002cc771e4?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "James Strans",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Pinch Runner",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0838203b007002cc771fe?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "David Davis",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Long Reliever",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0884803b007002cc77454?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Joshua Olds",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Closer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0e2e803b007002cc79759?alt=media",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "slidesToShow",
      displayer: "Slides To Show",
      value: 5,
      max: 10,
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "team 8";
  }

  render() {
    const slides = this.castToObject<Card[]>("slides");

    const settings = {
      arrows: false,
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      customPaging: (i: number) => <button className={this.getComponentState("current-slide") === i ? this.decorateCSS("currentPaging") : ""}></button>,
      slidesToShow: slides.length < this.getPropValue("slidesToShow") ? slides.length : this.getPropValue("slidesToShow"),
      slidesToScroll: 1,
      afterChange: (currentSlide: number) => {
        this.setComponentState("current-slide", currentSlide);
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      centerPadding: "0px",
    };

    const titleExist = this.getPropValue("title", { as_string: true });
    const descriptionExist = this.getPropValue("description", {
      as_string: true,
    });

    const imageExist = this.getPropValue("backroundImage");

    return (
      <div className={this.decorateCSS("container")}>
        <Base.Container
          className={this.decorateCSS("background-image")}
          style={{
            backgroundImage: `url(${this.getPropValue("backroundImage")})`,
          }}
        >
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <Base.VerticalContent className={this.decorateCSS("text-box")}>
              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>

            <div className={this.decorateCSS("wrapper")}>
              <div className={this.decorateCSS("slider-parent")}>
                <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                  {slides.map((item: Card, index: number) => {
                    const titleExist = this.castToString(item.imagetitle);
                    const subtitleExist = this.castToString(item.imagesubtitle);
                    const hasSlider = titleExist || subtitleExist || item.image;

                    return (
                      hasSlider && (
                        <div className={`${this.decorateCSS("slider-inner-div")} ${!imageExist && this.decorateCSS("no-image") }`} key={index} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                          <Base.VerticalContent className={this.decorateCSS("content-div")}>
                          {item.image && (
                            <div className={this.decorateCSS("img-div")}>
                            <div className={this.decorateCSS("image-box")}>
                              <img alt="" src={item.image} className={this.decorateCSS("img")} />
                            </div>
                            </div>
                          )}
                          {(titleExist || subtitleExist) && (
                            <Base.VerticalContent className={this.decorateCSS("header-page")}>
                            {titleExist && <Base.P className={`${this.decorateCSS("item-title")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.imagetitle}</Base.P>}
                            {subtitleExist && <Base.H2 className={`${this.decorateCSS("first-header")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.imagesubtitle}</Base.H2>}
                            </Base.VerticalContent>
                          )}
                          </Base.VerticalContent>
                        </div>
                      )
                    );
                  })}
                </ComposerSlider>
              </div>
            </div>
            {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
          </Base.MaxContent>
        </Base.Container>
      </div>
    );
  }
}

export default Team8;
