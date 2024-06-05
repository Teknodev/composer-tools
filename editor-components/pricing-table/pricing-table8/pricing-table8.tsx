import * as React from "react";
import styles from "./pricing-table8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { BasePricingTable, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";


type IIconBoxes = {
  list: any;
  title: string;
  image: string;
  price: string;
  priceBig: string;
  plan: string;
  link: string;
  iconsButton: Button;
};

type Button = {
  icon: string;
  url: string;
}

type Buttons = {
  buttonText: string;
  url: string;
}

type Bar = {
  barTitle: string;
  percent: string;
  color: any;
};

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
              type: "object",
              key: "iconsButton",
              displayer: "Icons Button",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Button icon",
                  value: "AiOutlinePlus",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Link",
                  value: "",
                },
              ],
            }
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
              type: "object",
              key: "iconsButton",
              displayer: "Icons Button",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Button icon",
                  value: "RiCheckDoubleFill",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Link",
                  value: "",
                },
              ],
            }
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
              value: "Ultimate",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$150",
            },
            {
              type: "string",
              key: "priceBig",
              displayer: "Big Price",
              value: "150",
            },
            {
              type: "string",
              key: "plan",
              displayer: "Plan",
              value: "Medium plan",
            },
            {
              type: "object",
              key: "iconsButton",
              displayer: "Icons Button",
              value: [
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Button icon",
                  value: "AiOutlinePlus",
                },
                {
                  type: "page",
                  key: "url",
                  displayer: "Link",
                  value: "",
                },
              ],
            }
          ],
        },
      ],
      additionalParams: {
        maxElementCount:  3
      }
    });

    this.addProp({
      type: "string",
      key: "plan-title",
      displayer: "Plan Title",
      value: "Proffesional plan",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum corporis, cumque repudiandae eius, eligendi assumenda quia ab accusantium optio, aut temporibus quis. Optio libero mollitia doloribus fugit consequuntur pariatur?",
    });

    this.addProp({
      type: "array",
      key: "bars",
      displayer: "Bar",
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
            {
              type: "color",
              key: "color",
              displayer: "Color",
              value: "orange",
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
            {
              type: "color",
              key: "color",
              displayer: "Color",
              value: "purple",
            },
          ],
        },
      ],
    });

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "CONTINUE",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

  }

  getName(): string {
    return "Pricing Table 8";
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("box")}>

            <div className={this.decorateCSS("upper-container")}>
              {this.castToObject<IIconBoxes[]>("cards").map((card: IIconBoxes, index: number) => (
                <div className={`${this.decorateCSS("card-item-count")} ${index === Math.floor(this.getPropValue("cards").length / 2) ? this.decorateCSS("middle-card") : ""} `}
                >
                  <div className={this.decorateCSS("pricing")} key={index}>
                    <h3 className={this.decorateCSS("title")}>{card.title}</h3>
                    <p className={this.decorateCSS("price")}>{card.price}</p>
                    <div className={this.decorateCSS("price-big")}>{card.priceBig}</div>
                    <p className={this.decorateCSS("plan")}>{card.plan}</p>

                    <ComposerLink path={card.iconsButton.url}>
                      <ComposerIcon name={card.iconsButton.icon} propsIcon={{
                        className: this.decorateCSS("icon")
                      }} />
                    </ComposerLink>
                  </div>
                </div>
              ))}
            </div>

            <ComposerSlider
              {...settings}
              className={this.decorateCSS("carousel")}
            >
              {this.castToObject<IIconBoxes[]>("cards").map((card: IIconBoxes, index: number) => (
                <div className={`${this.decorateCSS("card-item-count")}`}
                >
                  <div className={this.decorateCSS("pricing")} key={index}>
                    <h3 className={this.decorateCSS("title")}>{card.title}</h3>
                    <p className={this.decorateCSS("price")}>{card.price}</p>
                    <div className={this.decorateCSS("price-big")}>{card.priceBig}</div>
                    <p className={this.decorateCSS("plan")}>{card.plan}</p>

                    <ComposerLink path={card.iconsButton.url}>
                      <ComposerIcon name={card.iconsButton.icon} propsIcon={{
                        className: this.decorateCSS("icon")
                      }} />
                    </ComposerLink>

                  </div>
                </div>
              ))}
            </ComposerSlider>

            <div className={this.decorateCSS("lower-container")}>

              <div className={this.decorateCSS("plan-desc")}>
                <h1 className={this.decorateCSS("text")}>{this.getPropValue("plan-title")}</h1>
                <p className={this.decorateCSS("description-text")}>{this.getPropValue("description")}</p>
              </div>

              <div className={this.decorateCSS("bar-rows")}>
                <div className={this.decorateCSS("bar-row")}>
                  {this.castToObject<Bar[]>("bars").map((bar: Bar, index: number) => (
                    <div className={this.decorateCSS("bar-desc")} key={index}>
                      <h3 className={this.decorateCSS("bar-title")}>{bar.barTitle}</h3>

                      <div className={this.decorateCSS("bar-percent")}>
                        <div className={this.decorateCSS("percent-background")}></div>
                        <div className={this.decorateCSS("percent")} style={{ width: `${bar.percent}%`, backgroundColor: `${bar.color}` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={this.decorateCSS("button-position")}>
              {this.castToObject<Buttons[]>("buttons").map(
                (item: Buttons, index: number) => {
                  return (
                    <ComposerLink path={item.url} key={index}>
                      <div className={this.decorateCSS("button")}>
                        {item.buttonText}
                      </div>
                    </ComposerLink>
                  );
                })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PricingTable8;
