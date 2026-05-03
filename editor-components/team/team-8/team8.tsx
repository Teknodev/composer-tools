import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  imagesubtitle: React.JSX.Element;
  imagetitle: React.JSX.Element;
  description: React.JSX.Element;
  profileImage: TypeMediaInputValue;
};

class Team8 extends Team {
  constructor(props?: any) {
    super(props, styles);

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
      value: "OUR PLAYERS",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Senior players with the highest improvement in all games.",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0822803b007002cc7714f?alt=media",
              },
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0828d03b007002cc77195?alt=media",
              },
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b082e503b007002cc771bb?alt=media",
              },
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0833903b007002cc771e4?alt=media",
              },
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0838203b007002cc771fe?alt=media",
              },
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0884803b007002cc77454?alt=media",
              },
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
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0e2e803b007002cc79759?alt=media",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "backroundImage",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ace46d03b007002cc763cb?alt=media",
      },
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
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }

  static getName(): string {
    return "Team 8";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");

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
      slidesToShow: cards.length < this.getPropValue("slidesToShow") ? cards.length : this.getPropValue("slidesToShow"),
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

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;

    const imageExist = this.getPropValue("backroundImage") as TypeMediaInputValue | undefined;

    return (
      <Base.Container className={this.decorateCSS("container")} style={{ backgroundImage: imageExist?.type === "image" ? `url(${imageExist.url})` : undefined, }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent &&
            <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${imageExist && this.decorateCSS("has-image")}`}>
              {subtitle && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>}

          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {cards.map((item: Card, index: number) => {
                  const subtitleExist = this.castToString(item.imagesubtitle);
                  const titleExist = this.castToString(item.imagetitle);
                  const descriptionExist = this.castToString(item.description);
                  const hasSlider = titleExist || subtitleExist || descriptionExist || item.profileImage;

                  return (
                    hasSlider && (
                      <div className={`${this.decorateCSS("slider-inner-div")} ${!imageExist && this.decorateCSS("no-image")}`} key={index} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                        <Base.VerticalContent className={this.decorateCSS("content-div")}>
                          {item.profileImage && (
                            <div className={this.decorateCSS("image-box")}>
                              <Base.Media value={item.profileImage} className={this.decorateCSS("img")} />
                            </div>
                          )}
                          {(titleExist || subtitleExist) && (
                            <Base.VerticalContent className={this.decorateCSS("header-page")}>
                              {subtitleExist && <Base.H2 className={`${this.decorateCSS("card-subtitle")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.imagesubtitle}</Base.H2>}
                              {titleExist && <Base.P className={`${this.decorateCSS("card-title")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>{item.imagetitle}</Base.P>}
                              {descriptionExist && <Base.P className={`${this.decorateCSS("card-description")} ${imageExist && this.decorateCSS("image")}`}>{item.description}</Base.P>}
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
    );
  }
}

export default Team8;