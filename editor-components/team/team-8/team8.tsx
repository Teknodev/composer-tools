import * as React from "react";
import { Team } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./team8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  title: JSX.Element;
  description: JSX.Element;
  image: string;
  imagesubtitle: JSX.Element;
  imagetitle: JSX.Element;
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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf7d00655f8002ca6b2e8?alt=media&timestamp=1734080481853",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf8050655f8002ca6b315?alt=media&timestamp=1734080534947",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf8330655f8002ca6b321?alt=media&timestamp=1734080579961",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf8600655f8002ca6b341?alt=media&timestamp=1734080624382",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf88c0655f8002ca6b348?alt=media&timestamp=1734080668985",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf8b50655f8002ca6b357?alt=media&timestamp=1734080709944",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf8e10655f8002ca6b378?alt=media&timestamp=1734080754036",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675bf9090655f8002ca6b39a?alt=media&timestamp=1734080794146",
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
  }

  getName(): string {
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
      centerPadding: 0,
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
              {titleExist && <Base.SectionTitle className={imageExist ? this.decorateCSS("title") : this.decorateCSS("no-image-title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={imageExist ? this.decorateCSS("description") : this.decorateCSS("no-image")}>{this.getPropValue("description")}</Base.SectionDescription>}
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
                        <div className={this.decorateCSS("slider-inner-div")} key={index}>
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
                                {titleExist && <Base.P className={imageExist ? this.decorateCSS("item-title") : this.decorateCSS("no-image")}>{item.imagetitle}</Base.P>}
                                {subtitleExist && <Base.H2 className={imageExist ? this.decorateCSS("first-header") : this.decorateCSS("no-image")}>{item.imagesubtitle}</Base.H2>}
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
