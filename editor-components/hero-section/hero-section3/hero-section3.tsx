import * as React from "react";
import styles from "./hero-section3.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  title: string;
  image: string;
  description: string;
  type: string;
  button: INPUTS.CastedButton;
};

class HeroSection3 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item 1",
          key: "item1",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "New lookbok Ready for the summer",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Explore the modern glamour within all of Wize Styles.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624501?alt=media&timestamp=1719483639150",
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "1",
              additionalParams: {
                selectItems: ["1", "2", "3"],
              },
            },
            INPUTS.BUTTON("button", "Button", "Discover More", "", "", "", "Primary")
          ],
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "We are Fashion Revolution",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624502?alt=media&timestamp=1719483639150",
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "2",
              additionalParams: {
                selectItems: ["1", "2", "3"],
              },
            },
            INPUTS.BUTTON("button", "Button", "Discover More", "", "", "", "Primary")
          ],
        },
        {
          type: "object",
          displayer: "Item 3",
          key: "item3",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Your Fashion Summer",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Enjoy the New Collection with Wize Fashion Store.Best women's fashion tips and style guide.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617eb2bd2970002c624503?alt=media&timestamp=1719483639150",
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "3",
              additionalParams: {
                selectItems: ["1", "2", "3"],
              },
            },
            INPUTS.BUTTON("button", "Button", "Discover More", "", null, null, "Primary")
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Enable Animation",
      value: true,
    });

    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("activeSlide", 0);
  }

  static getName(): string {
    return "Hero Section 3";
  }

  handleSlideChange(index: number) {
    if (this.getComponentState("sliderRef")) {
      this.getComponentState("sliderRef").current.slickGoTo(index);
    }
  }

  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        setTimeout(() => {
          this.setComponentState("activeSlide", next);
        }, 100);
      },
    };

    const activeSlide = this.getComponentState("activeSlide");
    const animation = this.getPropValue("animation");

    return (
      <Base.Container className={this.decorateCSS("container")} isFull={true}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <ComposerSlider
            ref={this.getComponentState("sliderRef")}
            {...settings}
            className={`${this.decorateCSS("slider")} ${animation && this.decorateCSS("with-animation")}`}
          >
            {this.castToObject<ISliderData[]>("slider").map((item: ISliderData, index: number) => {
              const title = this.castToString(item.title as any);
              const description = this.castToString(item.description as any);
              const buttonText = this.castToString(item.button.text);
              const showContent = title || description || buttonText;

              return (
                <div
                  className={`${this.decorateCSS("wrapper")} ${this.decorateCSS(
                    `type-${item.type}`
                  )} ${index === activeSlide && this.decorateCSS("active-slide")}
                  ${!item.image && this.decorateCSS("full-text-container")}
                  ${!showContent && this.decorateCSS("full-image")}
                  `}
                >
                  {!showContent && item.type === "3" ? null : (
                    <div className={this.decorateCSS("content-bg")} />
                  )}

                  <div className={this.decorateCSS("content")}>
                    {showContent && (
                      <Base.VerticalContent className={this.decorateCSS("text-container")}>
                        {title && <Base.H1 className={this.decorateCSS("title")}>{item.title}</Base.H1>}
                        {(description || buttonText) && (
                          <Base.VerticalContent
                            className={`${this.decorateCSS("bottom-section")} ${description && this.decorateCSS("bottom-section-line")
                              }`}
                          >
                            {description && (
                              <Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>
                            )}
                            {buttonText && (
                              <Base.Row className={this.decorateCSS("button-container")}>
                                <ComposerLink path={item.button.url}>
                                  <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                                    {item.button.text}
                                  </Base.Button>
                                </ComposerLink>
                              </Base.Row>
                            )}
                          </Base.VerticalContent>
                        )}
                      </Base.VerticalContent>
                    )}
                    {item.image && (
                      <div className={this.decorateCSS("image-container")}>
                        <img
                          className={this.decorateCSS("image")}
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </ComposerSlider>
          <div className={this.decorateCSS("pagination")}>
            {this.castToObject<ISliderData[]>("slider").map((slider: ISliderData, index) => (
              <div
                className={`${this.decorateCSS("page-number")} ${activeSlide === index && this.decorateCSS("active")
                  }`}
                onClick={() => this.handleSlideChange(index)}
              >
                0{index + 1}
              </div>
            ))}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection3;

