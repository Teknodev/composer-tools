import * as React from "react";
import styles from "./banner6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Item = {
  subtitle: String,
  icon: JSX.Element,
  title: String,
  description: String,
  image: JSX.Element,
  button: Button,
}

type Button = {
  title: String,
  page: String,
}

class banner6 extends BaseBanner {
  constructor(props: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "banner-items",
      displayer: "Banner Items",
      value: [
        {
          type: "object",
          key: "sliderItem",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Explore the World!",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Subtitle Icon",
              value: "BiWorld",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Let's Make Your Best Trip Ever!",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67d2fff5fb049c002cc0dde4?alt=media",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "title",
                  displayer: "Button Title",
                  value: "Explore Now",
                },
                {
                  type: "page",
                  key: "page",
                  displayer: "Page",
                  value: "",
                }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Discover New Horizons!",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Subtitle Icon",
              value: "BiWorld",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Embark On An Epic Journey!",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67d2fff5fb049c002cc0dde4?alt=media",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "title",
                  displayer: "Button Title",
                  value: "Explore Now",
                },
                {
                  type: "page",
                  key: "page",
                  displayer: "Page",
                  value: "",
                }
              ]
            }
          ],
        },
        {
          type: "object",
          key: "sliderItem",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Experience the Unseen!",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Subtitle Icon",
              value: "BiWorld",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Discover Hidden Gems!",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67d2fff5fb049c002cc0dde4?alt=media",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "title",
                  displayer: "Button Title",
                  value: "Explore Now",
                },
                {
                  type: "page",
                  key: "page",
                  displayer: "Page",
                  value: "",
                }
              ]
            }
          ],
        },
      ]
    });
  }

  static getName() : string {
    return "Banner 6";
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      dotsClass: `${this.decorateCSS("dots")}`,
    };

    const bannerItems = this.castToObject<Item[]>("banner-items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {bannerItems.map((item: Item, index: number) => {
                  return (
                    <div className={this.decorateCSS("carousel-item")}>
                      <div className={this.decorateCSS("carousel-wrapper")}>
                        <div className={this.decorateCSS("left-content")}>
                          <Base.VerticalContent className={this.decorateCSS("content")}>
                            {item.subtitle && (
                              <div className={this.decorateCSS("subtitle-content")}>
                                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                  {item.subtitle}
                                </Base.SectionSubTitle>
                                <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
                              </div>
                            )}
                            {item.title && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>{item.title}</Base.SectionTitle>
                            )}
                            {item.description && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>{item.description}</Base.SectionDescription>
                            )}
                            {item.button.title && (
                                <Base.Button className={this.decorateCSS("button")}>
                                  <ComposerLink path={item.button.page} className={this.decorateCSS("button-link")}>{item.button.title}</ComposerLink>
                                </Base.Button>
                            )}
                          </Base.VerticalContent>
                        </div>
                        {item.image && (
                          <div className={this.decorateCSS("right-content")}>
                            <img className={this.decorateCSS("image")} src={item.image} />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default banner6;