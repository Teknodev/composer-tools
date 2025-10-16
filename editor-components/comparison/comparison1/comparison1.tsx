import * as React from "react";
import { BaseComparison } from "../../EditorComponent";
import styles from "./comparison1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface Card {
  direction: boolean;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  button: INPUTS.CastedButton;
  leftImage: { type: string; url: string };
  rightImage: { type: string; url: string };
  description: React.JSX.Element;
  leftText: string;
  rightText: string;
}
class Comparison1 extends BaseComparison {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "cover-image",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68ecd3cdffd791002b81d875?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    })
    
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Compare",
    })

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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Compare",
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
              type: "media",
              key: "leftImage",
              displayer: "Left Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b8d0bd2970002c628671?alt=media&timestamp=1719561551671",
              },
            },
            {
              type: "string",
              key: "leftText",
              displayer: "Left Text",
              value: "Before",
            },
            {
              type: "media",
              key: "rightImage",
              displayer: "Right Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b8d0bd2970002c628670?alt=media&timestamp=1719561551671",
              },
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
    const coverImage = this.getPropValue("cover-image");
    const overlay = this.getPropValue("overlay");
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: coverImage?.url && `url(${coverImage.url})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("up-page")}>
            {isSubtitleExist && (
              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${coverImage?.url
                ? this.decorateCSS("with-image")
                : ""
              }`}>
                {subtitle}
              </Base.SectionSubTitle>
            )}
            {isTitleExist && (
              <Base.SectionTitle
                className={
                  `${this.decorateCSS("title")} ${coverImage?.url
                    ? this.decorateCSS("with-image")
                    : ""
                  }`
                }
              >
                {title}
              </Base.SectionTitle>
            )}
          </Base.VerticalContent>
          {this.castToObject<Card[]>("cards").map(
            (card: Card, indexCards: number) => {
              return (
                <Base.ContainerGrid key={indexCards} className={
                  `${this.decorateCSS("card")} ${card.direction ? styles["reverse"] : ""
                  }`
                }
                >
                  {(this.castToString(card.title) ||
                    this.castToString(card.description) || this.castToString(card.subtitle) || this.castToString(card.button.text)) && (
                      <Base.VerticalContent
                        className={this.decorateCSS("left-card")}
                      >
                        {this.castToString(card.subtitle) && (
                          <Base.SectionSubTitle className={this.decorateCSS("card-subtitle")}>
                            {card.subtitle}
                          </Base.SectionSubTitle>
                        )}
                        {this.castToString(card.title) && (
                          <Base.SectionTitle className={this.decorateCSS("card-title")}>
                            {card.title}
                          </Base.SectionTitle>
                        )}
                        {this.castToString(card.description) && (
                          <Base.SectionDescription className={this.decorateCSS("card-description")}>
                            {card.description}
                          </Base.SectionDescription>
                        )}
                        {this.castToString(card.button.text) && (
                          <ComposerLink path={card.button.url}>
                            <Base.Button buttonType={card.button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{card.button.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </Base.VerticalContent>
                    )}

                  {(card.leftImage?.url || card.rightImage?.url) && (
                    <div className={this.decorateCSS("right-card")}>
                      <div
                        className={`${this.decorateCSS("image-container")} ${card.leftImage?.url && card.rightImage?.url ? styles["active"] : ""}`}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {card.leftImage?.url && (
                          <Base.Media
                            value={card.leftImage}
                            className={this.decorateCSS("left-image")}
                            style={{
                              clipPath: card.rightImage?.url ? undefined : 'none'
                            }}
                          />
                        )}

                        {card.rightImage?.url && (
                          <Base.Media
                            ref={this.getComponentState("foregroundImageRef")}
                            value={card.rightImage}
                            className={this.decorateCSS("right-image")}
                            style={{
                              clipPath: card.leftImage?.url ? undefined : 'none'
                            }}
                          />
                        )}

                        {(card.rightImage?.url || card.leftImage?.url) && (
                          <div className={this.decorateCSS("slider-wrapper")}>
                            {overlay && <div className={this.decorateCSS("overlay")} />}
                            {card.rightImage?.url && card.leftImage?.url && (
                              <input
                                type="range"
                                min="0"
                                max="100"
                                defaultValue="50"
                                className={this.decorateCSS("slider")}
                                id={`slider-${indexCards}`}
                                onChange={this.handleSliderChange}
                              />
                            )}
                            {card.rightImage?.url && card.leftImage?.url && (
                              <>
                                <div className={this.decorateCSS("comparison-text")}>
                                  {this.castToString(card.leftText) && <Base.P
                                    className={this.decorateCSS("left-text")}
                                  >
                                    {card.leftText}
                                  </Base.P>}
                                  {this.castToString(card.rightText) && <Base.P className={this.decorateCSS("right-text")}>
                                    {card.rightText}
                                  </Base.P>}
                                </div>
                                <div
                                  ref={this.getComponentState("sliderButtonRef")}
                                  className={this.decorateCSS("slider-button")}
                                ></div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Base.ContainerGrid>
              );
            }
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Comparison1;