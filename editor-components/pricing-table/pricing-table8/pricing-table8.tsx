import * as React from "react";
import styles from "./pricing-table8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type IIconBoxes = {
  planTitle: React.JSX.Element;
  bars: any;
  description: any;
  list: any;
  title: React.JSX.Element;
  image: string;
  price: React.JSX.Element;
  priceBig: React.JSX.Element;
  plan: React.JSX.Element;
  link: string;
  iconsButton: Button;
};

type Button = {
  icon: string;
  url: string;
};

type Buttons = INPUTS.CastedButton;

class PricingTable8 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);

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
              key: "planTitle",
              displayer: "Plan Title",
              value: "Basic plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
            },
            {
              type: "object",
              key: "iconsButton",
              displayer: "Icons Button",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Button Icon",
                  value: "AiOutlinePlus",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Link",
                  value: "",
                },
              ],
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
                      key: "barTitle",
                      displayer: "Bar1",
                      value: "500 Gb",
                    },
                    {
                      type: "number",
                      key: "percent",
                      displayer: "Percent",
                      value: 70,
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
                      key: "barTitle",
                      displayer: "Bar2",
                      value: "3 Years",
                    },
                    {
                      type: "number",
                      key: "percent",
                      displayer: "Percent",
                      value: 50,
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
              key: "planTitle",
              displayer: "Plan Title",
              value: "Medium plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
            },
            {
              type: "object",
              key: "iconsButton",
              displayer: "Icons Button",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Button Icon",
                  value: "AiOutlinePlus",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Link",
                  value: "",
                },
              ],
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
                      key: "barTitle",
                      displayer: "Bar1",
                      value: "500 Gb",
                    },
                    {
                      type: "number",
                      key: "percent",
                      displayer: "Percent",
                      value: 30,
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
                      key: "barTitle",
                      displayer: "Bar2",
                      value: "3 Years",
                    },
                    {
                      type: "number",
                      key: "percent",
                      displayer: "Percent",
                      value: 30,
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
              key: "planTitle",
              displayer: "Plan Title",
              value: "Professional plan",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
            },
            {
              type: "object",
              key: "iconsButton",
              displayer: "Icons Button",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Button Icon",
                  value: "AiOutlinePlus",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Link",
                  value: "",
                },
              ],
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
                      key: "barTitle",
                      displayer: "Bar1",
                      value: "500 Gb",
                    },
                    {
                      type: "number",
                      key: "percent",
                      displayer: "Percent",
                      value: 70,
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
                      key: "barTitle",
                      displayer: "Bar2",
                      value: "3 Years",
                    },
                    {
                      type: "number",
                      key: "percent",
                      displayer: "Percent",
                      value: 70,
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

    let button: TypeUsableComponentProps = INPUTS.BUTTON("buttonType", "Button", "CONTINUE", "", null, null, "Primary");

    this.setComponentState("currentIndex", 0);
    this.setComponentState("slider-ref", React.createRef());

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev icon",
      value: "IoMdArrowDropleft",
    });

    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next icon",
      value: "IoMdArrowDropright",
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1", "animation2", "animation3"],
      additionalParams:{
        selectItems:["animation1", "animation2", "animation3"]
      }
    })
  }

  static getName(): string {
    return "Pricing 8";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,
      afterChange: (index: any) => this.setComponentState("currentIndex", index),
    };

    const cards = this.castToObject<IIconBoxes[]>("cards");

    const prevIcon = this.getPropValue("prevIcon");
    const nextIcon = this.getPropValue("nextIcon");

    const handleCardClick = (index: number) => {
      this.setComponentState("currentIndex", index);
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("box")}>
            <ComposerSlider {...settings} className={this.decorateCSS("carousel")} ref={this.getComponentState("slider-ref")}>
              {this.castToObject<IIconBoxes[]>("cards").map((card: IIconBoxes, index: number) => {
                const cardTitleExist = this.castToString(card.title);
                const cardPriceExist = this.castToString(card.price);
                const cardPriceBigExist = this.castToString(card.priceBig);
                const cardPlanExist = this.castToString(card.plan);

                return (
                  <div className={this.decorateCSS("card-item-count")} key={index}>
                    <Base.VerticalContent className={this.decorateCSS("pricing")}>
                      {cardTitleExist && <Base.H3 className={this.decorateCSS("title")}>{card.title}</Base.H3>}
                      {cardPriceBigExist && <Base.H1 className={this.decorateCSS("price-big")}>{card.priceBig}</Base.H1>}
                      <div className={this.decorateCSS("pricing-container")}>
                        {cardPriceExist && <Base.H1 className={this.decorateCSS("price")}>{card.price}</Base.H1>}
                        {cardPlanExist && <Base.P className={this.decorateCSS("plan")}>{card.plan}</Base.P>}
                      </div>

                      {card.iconsButton.icon && (
                        <ComposerLink path={card.iconsButton.url}>
                          <Base.Icon
                            name={card.iconsButton.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                            }}
                          />
                        </ComposerLink>
                      )}
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </ComposerSlider>

            {prevIcon && (
              <Base.Icon
                name={this.getPropValue("prevIcon")}
                propsIcon={{
                  className: `${this.decorateCSS("prev_icon")}`,

                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
            )}
            {nextIcon && (
              <Base.Icon
                name={this.getPropValue("nextIcon")}
                propsIcon={{
                  className: `${this.decorateCSS("next_icon")}`,

                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
                  },
                }}
              />
            )}

            <div className={this.decorateCSS("upper-container")}>
              {this.castToObject<IIconBoxes[]>("cards").map((card, index) => {
                const cardTitleExist = this.castToString(card.title);
                const cardPriceExist = this.castToString(card.price);
                const cardPriceBigExist = this.castToString(card.priceBig);
                const cardPlanExist = this.castToString(card.plan);
                return (
                  <div className={`${this.decorateCSS("card-item-count")} ${index === Math.floor(cards.length / 2) ? this.decorateCSS("middle-card") : ""}
                  ${this.getPropValue("animations")  && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")}`} key={index} onClick={() => handleCardClick(index)}>
                    <Base.VerticalContent className={this.decorateCSS("pricing")}>
                      {cardTitleExist && <Base.H3 className={this.decorateCSS("title")}>{card.title}</Base.H3>}
                      {cardPriceBigExist && <Base.H1 className={this.decorateCSS("price-big")}>{card.priceBig}</Base.H1>}

                      <div className={this.decorateCSS("pricing-container")}>
                        {cardPriceExist && <Base.H1 className={this.decorateCSS("price")}>{card.price}</Base.H1>}
                        {cardPlanExist && <Base.P className={this.decorateCSS("plan")}>{card.plan}</Base.P>}
                      </div>

                      {card.iconsButton.icon && (
                        <ComposerLink path={card.iconsButton.url}>
                          <Base.Icon
                            name={card.iconsButton.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                            }}
                          />
                        </ComposerLink>
                      )}
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </div>

            <div className={this.decorateCSS("lower-container")}>
              <Base.VerticalContent className={this.decorateCSS("plan-desc")}>
                {this.castToString(cards[this.getComponentState("currentIndex")].planTitle) && <Base.H3 className={this.decorateCSS("text")}>{cards[this.getComponentState("currentIndex")].planTitle}</Base.H3>}
                {this.castToString(cards[this.getComponentState("currentIndex")].description) && <Base.P className={this.decorateCSS("description-text")}>{cards[this.getComponentState("currentIndex")].description}</Base.P>}
              </Base.VerticalContent>

              <div className={this.decorateCSS("bar-rows")}>
                <div className={this.decorateCSS("bar-row")}>
                  {cards[this.getComponentState("currentIndex")].bars.map((bar: any, index: any) => {
                    const barTitleExist = this.castToString(bar.barTitle);
                    return (
                      <div className={this.decorateCSS("bar-desc")} key={index}>
                        {barTitleExist && <Base.H5 className={this.decorateCSS("bar-title")}>{bar.barTitle}</Base.H5>}
                        <div className={this.decorateCSS("bar-percent")}>
                          <div
                            className={this.decorateCSS("percent")}
                            style={{
                              width: `${bar.percent}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={this.decorateCSS("button-position")}>
              {this.castToObject<Buttons[]>("buttons").map((item, index) => {
                const buttonExist = this.castToString(item.text);
                return (
                  buttonExist && (
                    <ComposerLink path={item.url} key={index}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        {item.text}
                      </Base.Button>
                    </ComposerLink>
                  )
                );
              })}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default PricingTable8;
