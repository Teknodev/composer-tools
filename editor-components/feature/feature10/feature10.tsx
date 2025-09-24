import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature10.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  image: string;
  title: React.JSX.Element;
  description: React.JSX.Element;
  url: string;
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
    this.addProp(INPUTS.BUTTON("button", "Button", "View our services", "", null, null, "Primary"));
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Feature 10";
  }

  render() {
    const sliderRef = this.getComponentState("slider-ref");
    const cards = this.castToObject<Card[]>("cards");

    const title = this.getPropValue("title");

    const description = this.getPropValue("description");

    const button = this.castToObject<INPUTS.CastedButton>("button");
    const settings = {
      arrows: false,
      dots: false,
      speed: 725,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: cards.length > 2 ? 3 : cards.length,
      slidesToScroll: 1,
      infinity: true,

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
      beforeChange: (_: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <Base.VerticalContent className={this.decorateCSS("section-wrapper")}>
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("section-title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("section-description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
            {(this.getPropValue("leftArrow") || this.getPropValue("rightArrow")) && (
              <div className={this.decorateCSS("arrow-container")}>
                {this.getPropValue("leftArrow") && (
                  <button
                    onClick={() => {
                      sliderRef.current.slickPrev();
                    }}
                    className={this.decorateCSS("arrow-left")}>
                    <Base.Icon name={this.getPropValue("leftArrow")} propsIcon={{ className: this.decorateCSS("icon") }} ></Base.Icon>
                  </button>
                )}
                {this.getPropValue("rightArrow") && (
                  <button
                    onClick={() => {
                      sliderRef.current.slickNext();
                    }}
                    className={this.decorateCSS("arrow-right")}>
                    <Base.Icon name={this.getPropValue("rightArrow")} propsIcon={{ className: this.decorateCSS("icon") }}></Base.Icon>
                  </button>
                )}
              </div>
            )}
            <div className={this.decorateCSS("cards-container")}>
              {cards?.length > 0 && (
                <ComposerSlider
                  ref={sliderRef}
                  {...settings}
                  className={`${this.decorateCSS("carousel")} 
                    ${!(this.castToString(title) || this.castToString(description) || this.getPropValue("leftArrow") || this.getPropValue("rightArrow")) && this.decorateCSS("no-padding")}`}
                >

                  {cards.map((item: Card, index: number) => {
                    const titleExist = !!this.castToString(item.title);
                    const descExist = !!this.castToString(item.description);

                    if (!item.image && !titleExist && !descExist) return null;

                    return (
                      <ComposerLink path={item.url}>
                        <div
                          key={index}
                          className={`${this.decorateCSS("card-container")} ${!(titleExist || descExist) && this.decorateCSS("fit-content")}`}
                        >
                          {item.image && (
                            <img className={`${this.decorateCSS("image")} ${!(titleExist || descExist) && this.decorateCSS("border-radius")}`} src={item.image} alt={this.castToString(item.title)} />
                          )}
                          {(titleExist || descExist) && (
                            <div className={this.decorateCSS("bottom")}>
                              {titleExist && (
                                <Base.H3 className={this.decorateCSS("title")}>
                                  {item.title}
                                </Base.H3>
                              )}
                              {descExist && (
                                <Base.P className={this.decorateCSS("description")}>
                                  {item.description}
                                </Base.P>
                              )}
                            </div>
                          )}
                        </div>
                      </ComposerLink>
                    );
                  })}
                </ComposerSlider>
              )}
            </div>
            <div className={this.decorateCSS("button-wrapper")}>
              {!!this.castToString(button.text) && (
                <ComposerLink path={button.url}>
                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                    {button.text}
                  </Base.Button>
                </ComposerLink>
              )}
            </div>


          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature10;

