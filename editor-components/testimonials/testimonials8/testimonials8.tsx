import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  image: string;
  name: JSX.Element;
  nameId: JSX.Element;
  description: JSX.Element;
  starNumber: number;
  starIcon: string;
  lineActive: boolean;
};
interface ArrowItem {
  nextArrow: string,
  prevArrow: string
}

class Testimonials8Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Some of out valuable customers feedback",
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388a?alt=media&timestamp=1719483639150",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Erle Philomena",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "Erle_Philomena",
              displayer: "Name Id",
            },
            {
              type: "string",
              key: "description",
              value:
                "I have been using pagedone for several months now, and I must say that it has made my life a lo easier. The platform's intuitive interface and ease of use have allowed me to managed my finances more effectively and make informed incestment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort. Moreover, the personalized insights and recommendations have helped me maximize my profits and miimize my risks. Overall, I am highly satisfied with and recommend it to anyone looking to simplfy their financal managment. ",
              displayer: "Description",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Star Number",
              value: 5,
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Star Icon",
              value: "FaStar",

            },
            {
              type: "boolean",
              key: "lineActive",
              displayer: "Line Active",
              value: true,

            },

          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666173eabd2970002c62388b?alt=media&timestamp=1719483639150",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Shonda Kadence",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "Shonda_Kadence",
              displayer: "Name Id",
            },
            {
              type: "string",
              key: "description",
              value:
                "Grunge design is all about creating a rough, raw, and edgy look. It can be a great way to add personality and attitude to a design.",
              displayer: "Description",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Star Number",
              value: 5,
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Star Icon",
              value: "FaStar",

            },
            {
              type: "boolean",
              key: "lineActive",
              displayer: "Line Active",
              value: true,

            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661740cbd2970002c623895?alt=media&timestamp=1719483639150",
              displayer: "Image",
            },
            {
              type: "string",
              key: "name",
              value: "Laurie Darwin",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "Laurie_Darwin",
              displayer: "Name Id",
            },
            {
              type: "string",
              key: "description",
              value:
                "Responsive design is a must for modern websites and interfaces. It ensures that content is displayed optimally on different screen sizes and devices.",
              displayer: "Description",
            },
            {
              type: "number",
              key: "starNumber",
              displayer: "Star Number",
              value: 5,
            },
            {
              type: "icon",
              key: "starIcon",
              displayer: "Star Icon",
              value: "FaStar",
            },
            {
              type: "boolean",
              key: "lineActive",
              displayer: "Line Active",
              value: true,
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "icon",
          key: "prevArrow",
          displayer: "Prev Icon",
          value: "GrLinkPrevious"
        },
        {
          type: "icon",
          key: "nextArrow",
          displayer: "Next Icon",
          value: "GrLinkNext"
        }

      ]
    });
    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }

  getName(): string {
    return "Testimonials 8";
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active_index", next);
      },
    };
    const arrows = this.castToObject<ArrowItem>("arrows");
    const sliderRef = this.getComponentState("slider-ref");
    const cards = this.castToObject<Item[]>("card-items");
    console.log("card", cards.length)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          <div className={this.decorateCSS("testimonials8")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.H1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H1>
            )}
            <div className={this.decorateCSS("content")}>
              {(arrows.prevArrow && (cards.length > 1)) && (
                <button className={this.decorateCSS("prevArrow")} onClick={() => {
                  sliderRef.current.slickPrev();
                }}>
                  <ComposerIcon name={arrows.prevArrow} propsIcon={{ className: this.decorateCSS("arrow") }}></ComposerIcon>
                </button>
              )}
              <ComposerSlider {...settings} ref={sliderRef} >
                {cards.map((item: Item, index: number) => (
                  <div className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("topContainer")}>
                      {item.image && (
                        <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />
                      )}
                      <div className={this.decorateCSS("personal")}>
                        {this.castToString(item.name) && (
                          <div className={this.decorateCSS("name")}>
                            {item.name}
                          </div>
                        )}
                        {this.castToString(item.nameId) && (
                          <div className={this.decorateCSS("personTitle")}>
                            {item.nameId}
                          </div>
                        )}
                      </div>
                    </div>
                    {this.castToString(item.description) && (
                      <Base.P className={this.decorateCSS("description")}>
                        {item.description}
                      </Base.P>
                    )}

                    <div className={this.decorateCSS("bottomContainer")}>
                      {((item.starNumber > 0) && (item.starIcon)) && (
                        <div className={this.decorateCSS("star")}>
                          {[...Array(Number(item.starNumber))].map(
                            (_: any, index: number) => (
                              <ComposerIcon name={item.starIcon} />
                            )
                          )}
                        </div>
                      )}
                      {item.lineActive && (
                        <div className={this.decorateCSS("line")}></div>
                      )}
                      {(item.starNumber > 0) && (
                        <div className={this.decorateCSS("starNumber")}>
                          {item.starNumber}
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </ComposerSlider>
              {(arrows.nextArrow && (cards.length > 1)) && (
                <button className={this.decorateCSS("nextArrow")} onClick={() => {
                  sliderRef.current.slickNext();
                }}>
                  <ComposerIcon name={arrows.nextArrow} propsIcon={{ className: this.decorateCSS("arrow") }}></ComposerIcon>
                </button>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>

    );
  }
}

export default Testimonials8Page;
