import * as React from "react";
import styles from "./pricing-table8.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

import { BasePricingTable, TypeMediaInputValue } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type IIconBoxes = {
  subtitle: React.JSX.Element;
  bars: any;
  description: React.JSX.Element;
  list: any;
  title: React.JSX.Element;
  image: string;
  price: React.JSX.Element;
  priceBig: React.JSX.Element;
  plan: React.JSX.Element;
  icon?: TypeMediaInputValue;
  background?: TypeMediaInputValue;
  buttons?: INPUTS.CastedButton[];
};

interface PricingTableSettings {
  line: boolean;
  animations: string[];
}

class PricingTable8 extends BasePricingTable {
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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "headerButtons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Basic",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$50",
            },
            {
              type: "string",
              key: "priceBig",
              displayer: "Big Price",
              value: "50",
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Basic plan",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Plan Title",
              value: "Basic plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "AiOutlinePlus" },
            },
            {
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695f6c57f959f6002d804798?alt=media",
              },
            },
            {
              type: "array",
              key: "bars",
              displayer: "Bars",
              value: [
                {
                  type: "object",
                  key: "bar",
                  displayer: "1st Bar",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Bar1",
                      value: "500 Gb",
                    },
                    {
                      type: "string",
                      key: "percent",
                      displayer: "Percent",
                      value: "70",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "bar",
                  displayer: "2nd Bar",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Bar2",
                      value: "3 Years",
                    },
                    {
                      type: "string",
                      key: "percent",
                      displayer: "Percent",
                      value: "50",
                    },
                  ],
                },
              ],
            },

          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Medium",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$100",
            },
            {
              type: "string",
              key: "priceBig",
              displayer: "Big Price",
              value: "100",
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Medium plan",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Plan Title",
              value: "Medium plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "MdDoneAll" },
            },
            {
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695f6e70f959f6002d8050e9?alt=media",
              },
            },
            {
              type: "array",
              key: "bars",
              displayer: "Bars",
              value: [
                {
                  type: "object",
                  key: "bar",
                  displayer: "1st Bar",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Bar1",
                      value: "500 Gb",
                    },
                    {
                      type: "string",
                      key: "percent",
                      displayer: "Percent",
                      value: "30",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "bar",
                  displayer: "2nd Bar",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Bar2",
                      value: "3 Years",
                    },
                    {
                      type: "string",
                      key: "percent",
                      displayer: "Percent",
                      value: "30",
                    },
                  ],
                },
              ],
            },

          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$100",
            },
            {
              type: "string",
              key: "priceBig",
              displayer: "Big Price",
              value: "100",
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Professional plan",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Plan Title",
              value: "Professional plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "AiOutlinePlus" },
            },
            {
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/695f6c8af959f6002d8047f4?alt=media",
              },
            },
            {
              type: "array",
              key: "bars",
              displayer: "Bars",
              value: [
                {
                  type: "object",
                  key: "bar",
                  displayer: "1st Bar",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Bar1",
                      value: "500 Gb",
                    },
                    {
                      type: "string",
                      key: "percent",
                      displayer: "Percent",
                      value: "70",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "bar",
                  displayer: "2nd Bar",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Bar2",
                      value: "3 Years",
                    },
                    {
                      type: "string",
                      key: "percent",
                      displayer: "Percent",
                      value: "70",
                    },
                  ],
                },
              ],
            },

          ],
        },
      ],
      additionalParams: {
        maxElementCount: 3,
      },
    });

    this.setComponentState("currentIndex", 0);
    this.setComponentState("slider-ref", React.createRef());

    this.addProp({
      type: "array",
      key: "footerButtons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Continue", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "settings",
      displayer: "Settings",
      value: [
        {
          type: "boolean",
          key: "line",
          displayer: "Line",
          value: true,
        },
        {
          type: "multiSelect",
          key: "animations",
          displayer: "Animations",
          value: ["animation1", "animation2", "animation3"],
          additionalParams: {
            selectItems: ["animation1", "animation2", "animation3"],
          },
        },
      ],
    });
  }

  static getName(): string {
    return "Pricing 8";
  }

  private hasMediaContent(media?: TypeMediaInputValue): boolean {
    if (!media) return false;
    return !!((media as any).name || (media as any).url || (media as any).src);
  }

  private hasButtonContent(button: INPUTS.CastedButton): boolean {
    const textExist = this.castToString(button.text);
    const iconExist = this.hasMediaContent(button.icon);
    return !!(textExist || iconExist);
  }

  private hasAnyButtonContent(buttons: INPUTS.CastedButton[]): boolean {
    return buttons.some((btn) => this.hasButtonContent(btn));
  }

  private hasCardContent(card: IIconBoxes): boolean {
    const titleExist = this.castToString(card.title);
    const priceExist = this.castToString(card.price);
    const priceBigExist = this.castToString(card.priceBig);
    const planExist = this.castToString(card.plan);
    const iconExist = this.hasMediaContent(card.icon);
    return !!(
      titleExist ||
      priceExist ||
      priceBigExist ||
      planExist ||
      iconExist
    );
  }

  private hasPricingContainerContent(card: IIconBoxes): boolean {
    const priceExist = this.castToString(card.price);
    const planExist = this.castToString(card.plan);
    return !!(priceExist || planExist);
  }

  private hasLowerContainerContent(card: IIconBoxes): boolean {
    const planTitleExist = this.castToString(card.subtitle);
    const descriptionExist = this.castToString(card.description);
    const hasBars =
      card.bars &&
      card.bars.length > 0 &&
      card.bars.some((bar: any) => this.castToString(bar.title));

    return !!(planTitleExist || descriptionExist || hasBars);
  }

  private hasPlanDescContent(card: IIconBoxes): boolean {
    const planTitleExist = this.castToString(card.subtitle);
    const descriptionExist = this.castToString(card.description);
    return !!(planTitleExist || descriptionExist);
  }

  private hasBarsContent(bars: any[]): boolean {
    if (!bars || bars.length === 0) return false;
    return bars.some((bar: any) => this.castToString(bar.title));
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")}`,
      afterChange: (index: any) =>
        this.setComponentState("currentIndex", index),
    };

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const cards = this.castToObject<IIconBoxes[]>("cards");
    const currentIndex = this.getComponentState("currentIndex");
    const headerButtons = this.castToObject<INPUTS.CastedButton[]>("headerButtons");
    const footerButtons = this.castToObject<INPUTS.CastedButton[]>("footerButtons");
    const settingsGroup = this.castToObject<PricingTableSettings>("settings");
    const line = settingsGroup.line;

    const hasCardsWithContent = cards.some((card) => this.hasCardContent(card));

    const hasHeaderButtons = this.hasAnyButtonContent(headerButtons);
    const hasFooterButtons = this.hasAnyButtonContent(footerButtons);

    const currentCard = cards[currentIndex];
    const hasLowerContent =
      currentCard && this.hasLowerContainerContent(currentCard);

    const handleCardClick = (index: number) => {
      this.setComponentState("currentIndex", index);
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist || hasHeaderButtons) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {hasHeaderButtons && (
                <div className={this.decorateCSS("header-buttons")}>
                  {headerButtons.map((item, index) => {
                    const btnTextExist = this.castToString(item.text);
                    const btnIconValue = item.icon as unknown as TypeMediaInputValue;
                    const btnIconExist = btnIconValue && (btnIconValue.type === "icon" ? btnIconValue.name : (btnIconValue as any).url);

                    if (!btnTextExist && !btnIconExist) return null;

                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {btnIconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={btnIconValue as any} />
                          )}
                          {btnTextExist && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                        </Base.Button>
                      </ComposerLink>
                    )
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("box")}>
            {hasCardsWithContent && (
              <ComposerSlider
                {...settings}
                className={this.decorateCSS("carousel")}
                ref={this.getComponentState("slider-ref")}
              >
                {cards.map((card: IIconBoxes, index: number) => {
                  if (!this.hasCardContent(card)) return null;

                  const cardTitleExist = this.castToString(card.title);
                  const cardPriceBigExist = this.castToString(card.priceBig);
                  const hasPricingContainer =
                    this.hasPricingContainerContent(card);
                  const iconExist = this.hasMediaContent(card.icon);
                  const bgExist = this.hasMediaContent(card.background);
                  const isIconImage = !!(
                    iconExist && card.icon?.type === "image"
                  );

                  return (
                    <div
                      className={this.decorateCSS("card-item-count")}
                      key={index}
                    >
                      <Base.VerticalContent
                        className={this.decorateCSS("pricing")}
                      >
                        {bgExist && (
                          <Base.Media
                            value={card.background}
                            className={this.decorateCSS("card-bg")}
                          />
                        )}
                        {cardTitleExist && (
                          <Base.H2 className={this.decorateCSS("title")}>
                            {card.title}
                          </Base.H2>
                        )}
                        <div className={this.decorateCSS("price-stack")}>
                          {hasPricingContainer && (
                            <div
                              className={this.decorateCSS("pricing-container")}
                            >
                              {cardPriceBigExist && (
                                <Base.H1
                                  className={this.decorateCSS("price-big")}
                                >
                                  {card.priceBig}
                                </Base.H1>
                              )}
                              {this.castToString(card.price) && (
                                <Base.H2 className={this.decorateCSS("price")}>
                                  {card.price}
                                </Base.H2>
                              )}

                              {this.castToString(card.plan) && (
                                <Base.P className={this.decorateCSS("plan")}>
                                  {card.plan}
                                </Base.P>
                              )}
                            </div>
                          )}
                        </div>

                        {iconExist && (
                          <Base.Media
                            value={card.icon}
                            className={`${this.decorateCSS("icon")} ${isIconImage ? this.decorateCSS("icon-image") : ""}`}
                          />
                        )}
                      </Base.VerticalContent>
                    </div>
                  );
                })}
              </ComposerSlider>
            )}

            {hasCardsWithContent && (
              <div className={this.decorateCSS("upper-container")}>
                {cards.map((card, index) => {
                  if (!this.hasCardContent(card)) return null;

                  const cardTitleExist = this.castToString(card.title);
                  const cardPriceBigExist = this.castToString(card.priceBig);
                  const hasPricingContainer =
                    this.hasPricingContainerContent(card);
                  const iconExist = this.hasMediaContent(card.icon);
                  const bgExist = this.hasMediaContent(card.background);
                  const isIconImage = !!(
                    iconExist && card.icon?.type === "image"
                  );

                  return (
                    <div
                      className={`${this.decorateCSS("card-item-count")} ${index === Math.floor(cards.length / 2) ? this.decorateCSS("middle-card") : ""} ${settingsGroup.animations ? settingsGroup.animations.map((animation: string) => this.decorateCSS(animation)).join(" ") : ""}`}
                      key={index}
                      onClick={() => handleCardClick(index)}
                    >
                      <Base.VerticalContent
                        className={this.decorateCSS("pricing")}
                      >
                        {bgExist && (
                          <Base.Media
                            value={card.background}
                            className={this.decorateCSS("card-bg")}
                          />
                        )}
                        {cardTitleExist && (
                          <Base.H2 className={this.decorateCSS("title")}>
                            {card.title}
                          </Base.H2>
                        )}
                        <div className={this.decorateCSS("price-stack")}>
                          {cardPriceBigExist && (
                            <Base.H2 className={this.decorateCSS("price-big")}>
                              {card.priceBig}
                            </Base.H2>
                          )}
                          {hasPricingContainer && (
                            <div
                              className={this.decorateCSS("pricing-container")}
                            >
                              {this.castToString(card.price) && (
                                <Base.H2 className={this.decorateCSS("price")}>
                                  {card.price}
                                </Base.H2>
                              )}
                              {this.castToString(card.plan) && (
                                <Base.P className={this.decorateCSS("plan")}>
                                  {card.plan}
                                </Base.P>
                              )}
                            </div>
                          )}
                        </div>
                        {iconExist && (
                          <Base.Media
                            value={card.icon}
                            className={`${this.decorateCSS("icon")} ${isIconImage ? this.decorateCSS("icon-image") : ""}`}
                          />
                        )}
                      </Base.VerticalContent>
                    </div>
                  );
                })}
              </div>
            )}

            {(hasLowerContent || hasFooterButtons) && (
              <Base.VerticalContent className={this.decorateCSS("footer-content")}>
                {hasLowerContent && (
                  <div
                    className={`${this.decorateCSS("lower-container")} ${!line ? this.decorateCSS("center") : ""
                      }`}
                  >
                    {this.hasPlanDescContent(currentCard) && (
                      <Base.VerticalContent
                        className={this.decorateCSS("plan-desc")}
                      >
                        {this.castToString(currentCard.subtitle) && (
                          <Base.H4 className={this.decorateCSS("text")}>
                            {currentCard.subtitle}
                          </Base.H4>
                        )}
                        {this.castToString(currentCard.description) && (
                          <Base.P className={this.decorateCSS("description-text")}>
                            {currentCard.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    )}

                    {line && this.hasBarsContent(currentCard.bars) && (
                      <div className={this.decorateCSS("bar-rows")}>
                        <div className={this.decorateCSS("bar-row")}>
                          {currentCard.bars.map((bar: any, index: any) => {
                            const barTitleExist = this.castToString(bar.title);
                            if (!barTitleExist) return null;

                            return (
                              <div
                                className={this.decorateCSS("bar-desc")}
                                key={index}
                              >
                                <Base.H6 className={this.decorateCSS("bar-title")}>
                                  {bar.title}
                                </Base.H6>
                                <div className={this.decorateCSS("bar-percent")}>
                                  <div
                                    className={this.decorateCSS("percent")}
                                    style={{
                                      width: `${this.castToString(bar.percent) || "0"}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {hasFooterButtons && (
                  <div className={this.decorateCSS("button-position")}>
                    {footerButtons.map((item, index) => {
                      const btnTextExist = this.castToString(item.text);
                      const btnIconValue = item.icon as unknown as TypeMediaInputValue;
                      const btnIconExist = btnIconValue && (btnIconValue.type === "icon" ? btnIconValue.name : (btnIconValue as any).url);

                      if (!btnTextExist && !btnIconExist) return null;

                      return (
                        <ComposerLink key={index} path={item.url}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {btnIconExist && (
                              <Base.Media className={this.decorateCSS("button-icon")} value={btnIconValue as any} />
                            )}
                            {btnTextExist && (
                              <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      )
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default PricingTable8;
