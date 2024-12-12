import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Slideshow } from "@mui/icons-material";

type Card = {
  image: string;
  title: JSX.Element;
  description: JSX.Element;
  url: string;
};

type Button = {
  text: JSX.Element;
  link: string;
};

class Feature10 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Moving to the cloud, made simple"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We've helped plenty of SaaS startups and scaleups develop reliable, secure infrastructure."
    });
    this.addProp({
      type: "icon",
      key: "rightArrow",
      displayer: "Right Arrow",
      value: "GoArrowRight"
    });
    this.addProp({
      type: "icon",
      key: "leftArrow",
      displayer: "Right Arrow",
      value: "GoArrowLeft"
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67372f90506a40002c2aba0e?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Lets Get Digital Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for Lets Get Digital without increasing costs."
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6737443e506a40002c2ac5ae?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dataswitcher Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Acme implemented ES Foundation at Dataswitcher to improve scalability around peak conversions."
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67374467506a40002c2ac5c9?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "AI Maid Help Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for AI Maid Help without increasing costs."
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67374467506a40002c2ac5c9?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "AI Maid Help Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for AI Maid Help without increasing costs."
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67374467506a40002c2ac5c9?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "AI Maid Help Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for AI Maid Help without increasing costs."
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67374467506a40002c2ac5c9?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "AI Maid Help Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for AI Maid Help without increasing costs."
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            }
          ]
        }
      ]
    });
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "View all case studies"
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: ""
        },
      ]
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  getName(): string {
    return "Feature 10";
  }

  render() {
    const sliderRef = this.getComponentState("slider-ref");
    const cards = this.castToObject<Card[]>("cards");

    const title = this.getPropValue("title");
    const titleExist = !!this.getPropValue("title", { as_string: true });

    const description = this.getPropValue("description");
    const descriptionExist = !!this.getPropValue("description", { as_string: true });

    const button = this.castToObject<Button>("button");
    const settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 725,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 868,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <Base.VerticalContent className={this.decorateCSS("section-wrapper")}>
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("section-title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("section-description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
            <div className={this.decorateCSS("arrow-container")}>
              <button
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
                className={this.decorateCSS("arrow-left")}>
                <ComposerIcon name={this.getPropValue("leftArrow")} propsIcon={{ className: this.decorateCSS("icon") }} ></ComposerIcon>
              </button>
              <button
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
                className={this.decorateCSS("arrow-right")}>
                <ComposerIcon name={this.getPropValue("rightArrow")} propsIcon={{ className: this.decorateCSS("icon") }}></ComposerIcon>
              </button>
            </div>

            <div className={this.decorateCSS("cards-container")}>
              {cards?.length > 0 && (
                <ComposerSlider
                  ref={sliderRef}
                  {...settings}
                  className={this.decorateCSS("carousel")}
                >

                  {cards.map((item: Card, index: number) => {
                    const titleExist = !!this.castToString(item.title);
                    const descExist = !!this.castToString(item.description);

                    if (!item.image && !titleExist && !descExist) return null;

                    return (
                      <ComposerLink path={item.url}>
                        <div
                          key={index}
                          className={this.decorateCSS("card-container")}
                        >
                          {item.image && (
                            <img className={this.decorateCSS("image")} src={item.image} alt={this.castToString(item.title)} />
                          )}
                          <div className={this.decorateCSS("bottom")}>
                            {titleExist && (
                              <div className={this.decorateCSS("title")}>
                                {item.title}
                              </div>
                            )}
                            {descExist && (
                              <div className={this.decorateCSS("description")}>
                                {item.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </ComposerLink>
                    );
                  })}
                </ComposerSlider>
              )}
            </div>
            <div className={this.decorateCSS("button-wrapper")}>
              {!!this.castToString(button.text) && (
                <Base.Button className={this.decorateCSS("button")}>
                  <ComposerLink path={button.link}>
                    {button.text}
                  </ComposerLink>
                </Base.Button>
              )}
            </div>


          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature10;

