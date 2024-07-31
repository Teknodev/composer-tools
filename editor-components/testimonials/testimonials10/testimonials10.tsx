import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

//SLIDER
import Slider from "react-slick";

type CardData = {
  // leftMiddle: number;
};

interface Button {
  buttonText: string;
  url: string;
}

type Item = {
  [x: string]: string;
  text: string;
  author: string;
  position: string;
};
class Testimonials10Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "quoteicon",
      displayer: " quoteicon",
      value: "FaQuoteLeft",
    });
    this.addProp({
      type: "icon",
      key: "nexticon",
      displayer: " nexticon",
      value: "FaArrowRightLong",
    });
    this.addProp({
      type: "icon",
      key: "previcon",
      displayer: "previcon",
      value: "FaArrowLeftLong",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What our client say",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Happy With Customers & Clients",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "I feel very happy and be proud to connect with this industry. i presume this is a very productive and professional industry.i wish very good luck & success for this industry",
    });

    this.addProp({
      type: "string",
      key: "hiliteTitle",
      displayer: "hiliteTitle",
      value: "CLIENT SAYS",
    });

    this.addProp({
      type: "object",
      key: "buttonObject",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Contact Us",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "https://www.google.com/",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "profile-itemList",
      displayer: "Profile",
      value: [
        {
          type: "object",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Image",
              value:
                "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Alex Madson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Image",
              value:
                "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Image",
              value:
                "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Name",
            },
            {
              type: "string",
              key: "position",
              value: "Position",
              displayer: "Contractor",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Image",
              value:
                "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Image",
              value:
                "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Position",
            },
          ],
        },
      ],
    });

    this.setComponentState("slider-ref", React.createRef());
  }
  getName(): string {
    return "Testimonials 10";
  }
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: this.decorateCSS("slider"),
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container2")}>
            <div className={this.decorateCSS("testimonials10")}>
              <div className={this.decorateCSS("left-content")}>
                <h3 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </h3>
                <h5 className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </h5>
                <p className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}{" "}
                </p>

                <div className={this.decorateCSS("button-group")}>
                  <ComposerLink
                    path={this.castToObject<any>("buttonObject").url}
                  >
                    <div className={this.decorateCSS("buttonText")}>
                      <button className={`${this.decorateCSS("buttonObject")}`}>
                        {this.castToObject<any>("buttonObject").buttonText}
                      </button>
                    </div>
                  </ComposerLink>
                </div>
              </div>
              <div className={this.decorateCSS("slider-style")}>
                <ComposerSlider
                  {...settings}
                  ref={this.getComponentState("slider-ref")}
                >
                  {this.castToObject<Item[]>("profile-itemList").map(
                    (item: Item, index: number) => (
                      <div
                        className={this.decorateCSS("slider-inner-div")}
                        key={index}
                      >
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            alt=""
                            src={item.badge}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <div className={this.decorateCSS("icons")}>
                            <ComposerIcon
                              name={this.getPropValue("previcon")}
                              propsIcon={{
                                className: this.decorateCSS("previcon"),
                                onClick: () =>
                                  this.getComponentState(
                                    "slider-ref"
                                  ).current.slickPrev(),
                              }}
                            />
                            <ComposerIcon
                              name={this.getPropValue("nexticon")}
                              propsIcon={{
                                className: this.decorateCSS("nexticon"),
                                onClick: () =>
                                  this.getComponentState(
                                    "slider-ref"
                                  ).current.slickNext(),
                              }}
                            />
                          </div>
                          <div className={this.decorateCSS("iconquote")}>
                            <ComposerIcon
                              name={this.getPropValue("quoteicon")}
                              propsIcon={{
                                className: this.decorateCSS("quoteicon"),
                                onClick: () =>
                                  this.getComponentState(
                                    "slider-ref"
                                  ).current.slickNext(),
                              }}
                            />
                          </div>
                          <div className={this.decorateCSS("card")}>
                            <p className={this.decorateCSS("text")}>
                              {item.text}
                            </p>

                            <h2 className={this.decorateCSS("author")}>
                              {item.author}
                            </h2>

                            <h3 className={this.decorateCSS("position")}>
                              {item.position}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </ComposerSlider>
                <span className={this.decorateCSS("hiliteTitle")}>
                  {this.getPropValue("hiliteTitle")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials10Page;
