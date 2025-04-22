import * as React from "react";
import styles from "./header24.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ISliderData = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  image: string;
  flower_image: string;
  background_image: string;
  buttons: IButton[];
};
type IButton = INPUTS.CastedButton;

class Header24 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Icon",
      value: "IoIosArrowBack",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Icon",
      value: "IoIosArrowForward",
    });
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
              value: "Best Roses In Amazing Colour",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "When you order a bouqet of flowers ,your goal is to impress that someone special needed.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c2?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c3?alt=media&timestamp=1719483639150",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "VIEW MORE", "", null, null, "Primary")],
            },
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
              value: "Fresh Tulips The Perfect Choice.",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "A symbol of simple love,charity,paradise on earth, heavenly and reminder of the passion life.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267be?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bf?alt=media&timestamp=1719483639150",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "VIEW MORE", "", null, null, "Primary")],
            },
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
              value: "Lovely Flowers for Your Holiday",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Make your life lovely.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c0?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Flower Image",
              key: "flower_image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267bd?alt=media&timestamp=1719483639150",
            },
            {
              type: "image",
              displayer: "Background Image",
              key: "background_image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66619f13bd2970002c6267c1?alt=media&timestamp=1719483639150",
            },
            {
              type: "array",
              displayer: "Buttons",
              key: "buttons",
              value: [INPUTS.BUTTON("button", "Button", "TO SHOP", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "VIEW MORE", "", null, null, "Primary")],
            },
          ],
        },
      ],
    });
    this.setComponentState("previousIndex", -1);
    this.setComponentState("currentIndex", 0);
    this.setComponentState("arrowDisabled", false);
    this.setComponentState("slider-ref", React.createRef());
  }
  static getName(): string {
    return "Header 24";
  }
  changeCurrentSlide(slideIndex: number) {
    this.setComponentState("currentIndex", slideIndex);
  }
  handleArrowClick(slideIndex: number, direction: "next" | "prev") {
    if (!this.getComponentState("arrowDisabled")) {
      this.changeCurrentSlide(slideIndex);
      this.setComponentState("arrowDisabled", true);
      setTimeout(() => {
        this.setComponentState("arrowDisabled", false);
      }, 1000);
    }
  }
  handleClickDot = (index: number) => {
    const sliderRef = this.getComponentState("slider-ref");
    sliderRef.current.slickGoTo(index)
  }

  render() {
    const slider = this.castToObject<ISliderData[]>("slider");

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      beforeChange: (previous: number, current: number) => {
        this.setComponentState("previousChange", previous);
        this.setComponentState("currentChange", current);
        this.setComponentState("currentIndex", current);
      },
      afterChange: (current: number) => {
        setTimeout(() => {
          this.setComponentState("previousChange", -1);
          this.setComponentState("currentChange", -1);
        }, 500);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");
    const currentBackgroundImage =this.getPropValue("slider")[this.getComponentState("currentIndex")]?.getPropValue("background_image");

    return (
      <>
      <Base.Container className={`${this.decorateCSS("container")} ${!currentBackgroundImage && this.decorateCSS("no-image")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {slider.length > 0 && (
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                {slider.map((item: ISliderData, index: number) => (
                  <div className={this.decorateCSS("item")} key={`key${index}`}>
                    <div className={`${this.decorateCSS("main-content")} ${!item.image && this.decorateCSS("no-image-content")}`}>
                      {(item.flower_image || this.castToString(item.title) || this.castToString(item.description) || item.buttons.length > 0) && (
                        <div className={this.decorateCSS("left")}>
                          <div className={this.decorateCSS("content")}>
                            {item.flower_image && (
                              <div
                                className={`${this.decorateCSS("flower")}
                            ${this.getComponentState("currentIndex") == index && this.decorateCSS("active")}`}
                              >
                                <img src={item.flower_image} alt={this.castToString(item.title)} />
                              </div>
                            )}
                            {this.castToString(item.title) && (
                              <Base.SectionTitle
                                className={`${this.decorateCSS("title")} ${!item.background_image && this.decorateCSS("title-no-image")}
                            ${this.getComponentState("currentIndex") == index && this.decorateCSS("active")}
                             ${!item.image && this.decorateCSS("no-image")}
                            `}
                              >
                                {item.title}
                              </Base.SectionTitle>
                            )}
                            {this.castToString(item.description) && (
                              <div
                                className={`${this.decorateCSS("description")} ${!item.background_image && this.decorateCSS("description-no-image")}
                            ${this.getComponentState("currentIndex") == index && this.decorateCSS("active")}
                            ${!item.image && this.decorateCSS("no-image")}
                            `}
                              >
                                {item.description}
                              </div>
                            )}
                            <div
                              className={`${this.decorateCSS("buttons")}
                            ${this.getComponentState("currentIndex") == index && this.decorateCSS("active")}
                            `}
                            >
                              {item.buttons.map((item: IButton, index: number) => (
                                <div className={this.decorateCSS("button-wrapper")}>
                                  {this.castToString(item.text) && (
                                    <ComposerLink path={item.url}>
                                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                        {item.text}
                                      </Base.Button>
                                    </ComposerLink>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {item.image && (
                        <div className={this.decorateCSS("right")}>
                          <div className={this.decorateCSS("image-wrapper")}>
                            <img src={item.image} alt={this.castToString(item.title)} className={`${this.decorateCSS("image")} ${this.getComponentState("currentIndex") == index && this.decorateCSS("active")}`} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </ComposerSlider>
            )}
          </div>
          <div className={this.decorateCSS("dots-container")}>
          {slider.map((item,index:number)=>{
            return(
            <div className={this.decorateCSS("dots")} onClick={()=>this.handleClickDot(index)}>
              <div className={`${this.decorateCSS("number")} ${!currentBackgroundImage && this.decorateCSS("no-image")}`}>{(index + 1)}</div>
              <div className={`${this.decorateCSS("line")} ${this.getComponentState("currentIndex") == index && this.decorateCSS("active")} ${!currentBackgroundImage && this.decorateCSS("no-image")}`}></div>
            </div>
            )
          })}
          </div>

        </Base.MaxContent>
        <div className={this.decorateCSS("background-wrapper")}>
        <div className={this.decorateCSS("background-container")} >
            {currentBackgroundImage && (
              <div className={this.decorateCSS("background-image-container")}>
                <img src={currentBackgroundImage} alt={currentBackgroundImage} className={this.decorateCSS("background-image")} />
              </div>
            )}
        </div> 
      </div>
      {slider.length > 1 && (
        <div className={this.decorateCSS("arrow-wrapper")}>
            <div className={currentBackgroundImage ? this.decorateCSS("arrow-prev-wrapper") : this.decorateCSS("arrow-prev-wrapper-no-image")}
            onClick={() => {sliderRef.current.slickPrev();}}>
              <div className={this.decorateCSS("arrow-prev")}>
                <ComposerIcon name={this.getPropValue("prevIcon")} propsIcon={{ className: this.decorateCSS("icon") }} />
              </div>
            </div>
          <div
            className={currentBackgroundImage ? this.decorateCSS("arrow-next-wrapper") : this.decorateCSS("arrow-next-wrapper-no-image")}
            onClick={() => {sliderRef.current.slickNext();}}>
              <div className={this.decorateCSS("arrow-next")}>
                <ComposerIcon name={this.getPropValue("nextIcon")} propsIcon={{ className: this.decorateCSS("icon") }} />
              </div>
          </div>
        </div>
      )}
      </Base.Container>

      </>

    );
  }
}

export default Header24;
