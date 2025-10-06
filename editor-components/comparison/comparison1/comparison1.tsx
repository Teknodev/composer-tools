import * as React from "react";
import { BaseComparison } from "../../EditorComponent";
import styles from "./comparison1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface Card {
  direction: boolean;
  title: React.JSX.Element;
  button: INPUTS.CastedButton;
  leftImage: string;
  rightImage: string;
  description: React.JSX.Element;
  leftText: string;
  rightText: string;
}
class Comparison1 extends BaseComparison {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b8d0bd2970002c62866f?alt=media&timestamp=1719561551671",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "LOREM IPSUM",
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
              type: "boolean",
              key: "direction",
              displayer: "Reverse Direction",
              value: false,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "BEDROOM RENOVATION",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            INPUTS.BUTTON("button", "Button", "VIEW DETAILS", "", null, null, "Primary"),
            {
              type: "image",
              key: "leftImage",
              displayer: "Left Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b8d0bd2970002c628671?alt=media&timestamp=1719561551671",
            },
            {
              type: "string",
              key: "leftText",
              displayer: "Left Text",
              value: "Before",
            },
            {
              type: "image",
              key: "rightImage",
              displayer: "Right Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b8d0bd2970002c628670?alt=media&timestamp=1719561551671",
            },
            {
              type: "string",
              key: "rightText",
              displayer: "Right Text",
              value: "After",
            },
          ],
        },
      ],
    });
    
    this.setComponentState("foregroundImageRef", React.createRef());
    this.setComponentState("sliderButtonRef", React.createRef());

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
  }

  static getName(): string {
    return "Comparison 1";
  }

  handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const slider = event.target as HTMLInputElement;
    const foregroundImage = this.getComponentState("foregroundImageRef").current;
    const sliderButton = this.getComponentState("sliderButtonRef").current;
    
    if (foregroundImage && sliderButton) {
      const sliderValue = Number(slider.value);
      foregroundImage.style.clipPath = `inset(0% 0% 0% ${sliderValue}%)`;
      sliderButton.style.left = `${sliderValue}%`;
    }
  };

  render() {
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {this.castToString(this.getPropValue("title")) && (
            <Base.SectionTitle
              className={
                `${this.decorateCSS("title")} ${!this.getPropValue("cover-image")
                  ? this.decorateCSS("no-image")
                  : ""
                }`
              }
            >
              {this.getPropValue("title")}
            </Base.SectionTitle>
          )}
          <div className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("cards").map(
              (card: Card, indexCards: number) => {
                return (
                  <Base.ContainerGrid key={indexCards} className={
                    `${this.decorateCSS("card")} ${card.direction ? styles["reverse"] : ""
                    }`
                  }
                  >
                    {(this.castToString(card.title) ||
                      this.castToString(card.description)) && (
                        <Base.VerticalContent
                          className={this.decorateCSS("left-card")}
                        >
                          {this.castToString(card.title) && (
                            <Base.H2 className={this.decorateCSS("card-title")}>
                              {card.title}
                            </Base.H2>
                          )}
                          {this.castToString(card.description) && (
                            <Base.P className={this.decorateCSS("description")}>
                              {card.description}
                            </Base.P>
                          )}
                          {this.castToString(card.button.text) && (
                            <ComposerLink path={card.button.url}>
                              <Base.Button buttonType={card.button.type} className={this.decorateCSS("button")}>
                                {card.button.text}
                              </Base.Button>
                            </ComposerLink>
                          )}
                        </Base.VerticalContent>
                      )}

                    {(card.leftImage || card.rightImage) && (
                      <div className={this.decorateCSS("right-card")}>
                        <div
                          className={`${this.decorateCSS("image-container")} ${card.leftImage && card.rightImage ? styles["active"] : ""}`}
                          data-animation={this.getPropValue("hoverAnimation").join(" ")}
                        >
                          {card.leftImage && (
                            <img
                              src={card.leftImage}
                              alt=""
                              className={this.decorateCSS("background-image")}
                            />
                          )}

                          {card.rightImage && (
                            <img
                              ref={this.getComponentState("foregroundImageRef")}
                              src={card.rightImage}
                              alt=""
                              className={this.decorateCSS("foreground-image")}
                            />
                          )}

                          {card.rightImage && card.leftImage && (
                            <div className={this.decorateCSS("slider-wrapper")}>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                defaultValue="50"
                                className={this.decorateCSS("slider")}
                                id={`slider-${indexCards}`}
                                onChange={this.handleSliderChange}
                              />
                              <div className={this.decorateCSS("text")}>
                                <div
                                  className={this.decorateCSS("left-text")}
                                >
                                  {card.leftText}
                                </div>
                                <div className={this.decorateCSS("right-text")}>
                                  {card.rightText}
                                </div>
                              </div>
                              <div
                                ref={this.getComponentState("sliderButtonRef")}
                                className={this.decorateCSS("slider-button")}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Base.ContainerGrid>
                );
              }
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Comparison1;