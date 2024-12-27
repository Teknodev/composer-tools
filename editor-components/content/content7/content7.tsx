import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { $flushMutations } from "lexical/LexicalUtils";
interface Card {
  direction: boolean;
  title: JSX.Element;
  button: {
    buttonText: JSX.Element;
    link: string;
  };
  leftImage: string;
  rightImage: string;
  description: JSX.Element;
  leftText: string;
  rightText: string;
}
class Content7 extends BaseContent {
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
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "string",
                  key: "buttonText",
                  displayer: "Button Text",
                  value: "VIEW DETAILS",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
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
  }

  getName(): string {
    return "Content 7";
  }

  handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const slider = event.target as HTMLInputElement;
    const foregroundImage = document.getElementById(`foregroundImage-${index}`);
    const sliderButton = document.getElementById(`slider-button-${index}`);
    if (foregroundImage && sliderButton) {
      const sliderValue = Number(slider.value);
      foregroundImage.style.clipPath = `inset(0% 0% 0% ${sliderValue}%)`;
      sliderButton.style.left = `${slider.value}%`;
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
                this.decorateCSS("title") +
                ` ${
                  !this.getPropValue("cover-image")
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
                  <Base.ContainerGrid key={indexCards} className={this.decorateCSS("card") + ` ${card.direction ? styles["reverse"] : ""}`}>
                    {(this.castToString(card.title) ||
                      this.castToString(card.description)) && (
                      <Base.VerticalContent
                        className={this.decorateCSS("left-card")}
                      >
                        {this.castToString(card.title) && (
                          <Base.H2 className={this.decorateCSS("title")}>
                            {card.title}
                          </Base.H2>
                        )}
                        {this.castToString(card.description) && (
                          <Base.P className={this.decorateCSS("description")}>
                            {card.description}
                          </Base.P>
                        )}
                        {this.castToString(card.button.buttonText) && (
                          <ComposerLink path={card.button.link}>
                            <Base.Button className={this.decorateCSS("button")}>
                              {card.button.buttonText}
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </Base.VerticalContent>
                    )}

                    {(card.leftImage || card.rightImage) && (
                      <div className={this.decorateCSS("right-card")}>
                        <div
                          className={
                            this.decorateCSS("image-container") +
                            ` ${
                              card.leftImage && card.rightImage
                                ? styles["active"]
                                : ""
                            }`
                          }
                        >
                          {card.leftImage && (
                            <img
                              src={card.leftImage}
                              alt=""
                              className={this.decorateCSS("background-image")}
                              id={`background-${indexCards}`}
                            />
                          )}

                          {card.rightImage && (
                            <img
                              src={card.rightImage}
                              alt=""
                              className={this.decorateCSS("foreground-image")}
                              id={`foregroundImage-${indexCards}`}
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
                                onChange={(e) =>
                                  this.handleSliderChange(e, indexCards)
                                }
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
                                className={this.decorateCSS("slider-button")}
                                id={`slider-button-${indexCards}`}
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

export default Content7;