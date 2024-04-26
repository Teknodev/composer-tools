import * as React from "react";
import styles from "./header31.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeUsableComponentProps } from "../../EditorComponent";
import { TiShoppingBag } from "react-icons/ti";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import Slider from "react-slick"

type ISliderData = {
  title: string;
  subtitle: string;
  sliderNumber: number;
  image: string;
  rightImage: string;
  leftImage: string;
  description: string;

};



class Header31 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaTwitter"
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: ""
        }
      ]
    };

    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebook"
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: ""
        }
      ]
    };

    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaInstagram"
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: ""
        }
      ]
    };
    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider Carousel",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project9/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project9/6.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BRANDS"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Time Tag Watch"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "01",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project4/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project4/13.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "BRANDS"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Under Armour"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "02",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project3/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project3/3.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Re Styling"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "03",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project8/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project8/2.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Toast 2019 Reel"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We are thrilled to share our new reel with you all! Special thanks to all of our talented friends."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "04",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project7/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project7/2.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Nile - Kabutha"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Striking and powerful Aston Martin Vantage captivates you at the first sight."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "05",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project6/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project6/4.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sleep Walker"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: ""
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "06",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project1/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project1/2.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "SPORTS"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Magista"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The Brief team has been sincerely committed to designing great communication around our projects."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "07",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project2/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project2/3.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "PHOTOGRAPHY"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Bastian Bux"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "08",
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              displayer: "Right Image",
              key: "rightImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project5/1.jpg",
            },
            {
              type: "image",
              displayer: "Left Image",
              key: "leftImage",
              value:
                "https://droow-dark.netlify.app/assets/img/project/project5/4.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "ARCHITECTURE"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Novara Conic"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Cal was first. The first public university in the great state of California. They are the pioneers."
            },
            {
              type: "string",
              key: "sliderNumber",
              displayer: "Slider Number",
              value: "09"
            },
          ]
        }
      ]
    });
    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrFormNext",
    });
    this.addProp({
      type: "icon",
      key: "social-icon",
      displayer: "Social Icon",
      value: "IoMdShare",
    });
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Media Platforms",
      value: [
        JSON.parse(JSON.stringify(twitter)),
        JSON.parse(JSON.stringify(facebook)),
        JSON.parse(JSON.stringify(instagram)),
      ]
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "VIEW CASE",
    });
    this.addProp({
      type: "icon",
      key: "circleIcon",
      displayer: "Circle Icon",
      value: "CiCircleChevRight"
    });
    this.addProp({
      type: "page",
      key: "url",
      displayer: "Url",
      value: ""
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("active-index", 0);
    this.setComponentState("display-none", true);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("second-slider-ref", React.createRef());
  }
  getName(): string {
    return "Header-31";
  }
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      accessibility: false,
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: this.decorateCSS("dots"),

      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("active-index", newIndex);
        this.getComponentState("slider-ref").current.slickGoTo(newIndex);
        this.getComponentState("second-slider-ref").current.slickGoTo(newIndex);
      },
    };
    const subtitle = this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].subtitle
    const title = this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].title
    const description = this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].description
    const circleIcon = this.getPropValue("circleIcon")
    const text = this.getPropValue("text", { as_string: true })

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("slider-parent")}>
            <ComposerSlider ref={this.getComponentState("slider-ref")} {...settings} className={this.decorateCSS("slider")}>
              {this.castToObject<ISliderData[]>("slider").map(
                (item: ISliderData, index: number) => (
                  <div key={index} className={this.decorateCSS("wrapper")}>
                    <div className={this.decorateCSS("right-slider")}>
                      <img
                        className={this.decorateCSS("background-right")}
                        src={item.rightImage}
                        alt={item.title}
                      />
                    </div>
                  </div>
                )
              )}
            </ComposerSlider>
          </div>
          <div className={this.decorateCSS("slider-container")}>

            <ComposerSlider ref={this.getComponentState("second-slider-ref")} {...settings} draggable={true} slidesToShow={3} vertical={true} verticalSwiping={true} centerMode={true} centerPadding={"0px"} className={this.decorateCSS("carousel")}>
              {this.castToObject<ISliderData[]>("slider").map(
                (item: ISliderData, index: number) => (
                  <div key={index} className={this.decorateCSS("swiper-wrapper")} >
                    {this.getComponentState("active-index") === index && (
                      <div className={this.decorateCSS("content")}>
                        <span className={this.decorateCSS("sliderNumber-left")}>
                          {this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].sliderNumber}
                        </span>
                      </div>
                    )}
                    <img
                      className={`${this.decorateCSS("background-left")} ${this.getComponentState("active-index") === index ? this.decorateCSS("active") : ""}`}
                      src={item.leftImage}
                      alt={item.title}
                      onClick={() => {
                        this.getComponentState("slider-ref").current.slickGoTo(index);
                        this.getComponentState("second-slider-ref").current.slickGoTo(index);
                      }}
                    />
                  </div>
                )
              )}
            </ComposerSlider>
            <div className={this.decorateCSS("slider-inner")}>
              {subtitle && <div className={this.decorateCSS("up-text")}>
                <div className={this.decorateCSS("stick")}></div>
                <span className={this.decorateCSS("subtitle")}>
                  {this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].subtitle}
                </span>
              </div>}

              {title && <span className={this.decorateCSS("title")}>
                {this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].title}
              </span>}
              {description && <p className={this.decorateCSS("description")}>
                {this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].description}
              </p>}
              {(text || circleIcon) &&
                <div className={this.decorateCSS("link")}>
                  {circleIcon && <ComposerIcon name={this.getPropValue("circleIcon")} propsIcon={{ className: this.decorateCSS("circle-icon") }} />}
                  {text && <span className={this.decorateCSS("text")}>{this.getPropValue("text")}</span>}
                </div>
              }
            </div>
          </div>
          <div className={this.decorateCSS("main-social")}>
            <ComposerIcon name={this.getPropValue("social-icon")} propsIcon={{
              className: this.decorateCSS("social-icon")
            }} />
            <div className={this.decorateCSS("icon-stick")}></div>
            <div className={this.decorateCSS("icon-list-container")}>
              {this.castToObject<any>("icons").map((icon: any, indexIcons: number) => {
                return (
                  <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                    <ComposerLink path={icon.url}>
                      <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                    </ComposerLink>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={this.decorateCSS("control-nav")}>
            <ComposerIcon
              name={this.getPropValue("prev_icon")}
              propsIcon={{
                className: `${this.decorateCSS(
                  "prev-icon"
                )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                this.decorateCSS("un-visible")
                  }`,
                size: 20,
                onClick: () => {
                  this.getComponentState("slider-ref").current.slickPrev();
                  this.getComponentState("second-slider-ref").current.slickPrev();
                },
              }}
            />
            <ComposerIcon
              name={this.getPropValue("next_icon")}
              propsIcon={{
                className: `${this.decorateCSS(
                  "next-icon"
                )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                this.decorateCSS("un-visible")
                  }`,
                size: 20,
                onClick: () => {
                  this.getComponentState("slider-ref").current.slickNext();
                  this.getComponentState("second-slider-ref").current.slickNext();
                },
              }}
            />
          </div>
          <div className={this.decorateCSS("control-num")}>
            <span className={this.decorateCSS("sliderNumber")}>
              {this.castToObject<ISliderData[]>("slider")[this.getComponentState("active-index")].sliderNumber}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header31;
