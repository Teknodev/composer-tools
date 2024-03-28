import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials13.module.scss";

//SLIDER
import Slider from "react-slick";
type CardData = {
  leftMiddle: number;
  // CardDescription: string;
};
type Card = {
  badge: string;
  text: string;
  author: string;
  subtitle: string;
};
//CLASS
class Testimonials13Page extends Testimonials {
  //constructor
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "writing",
      displayer: "Writing",
      value: "TESTIMONIALS",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear What Our Clients Have to Say",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "incidunt ut labore et dolore magna aliqua.tempor incidunt ut labore et dolore magna aliqua. tempor incidunt ut labore et dolore magna ",
    });
    this.addProp({
      type: "image",
      key: "bigImage1",
      displayer: "Image 1 : ",
      value:
        "https://re-bytes.ancorathemes.com/wp-content/uploads/elementor/thumbs/about-info-6-po9i9czqze6vcgdqt7l7z5pigujfoyidbksla0hquk.jpg",
    });

    //Carousel Prop Start
    this.addProp({
      type: "array",
      key: "profile-itemList",
      displayer: "Profile",
      value: [
        //1
        {
          type: "array",
          key: "object",
          displayer: "Object 1 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Badge 1",
              value:
                "https://re-bytes.ancorathemes.com/wp-content/uploads/2022/04/testimonials-image-3-150x150.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "string",
              key: "author",
              value: "Alex Madson",
              displayer: "Author",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Student",
              displayer: "Subtitle",
            },
          ],
        }, //1 end

        //2
        {
          type: "array",
          key: "object",
          displayer: "Object 2 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Badge 2",
              value:
                "https://re-bytes.ancorathemes.com/wp-content/uploads/2020/04/testimonials-image-1-150x150.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Artist",
              displayer: "Subtitle",
            },
          ],
        }, //2 end

        //3
        {
          type: "array",
          key: "object",
          displayer: "Object 3 :",
          value: [
            {
              type: "image",
              key: "badge",
              displayer: "Badge 3",
              value:
                "https://re-bytes.ancorathemes.com/wp-content/uploads/2020/04/testimonials-image-2-150x150.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "string",
              key: "author",
              value: "Michael Moore",
              displayer: "Author",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Designer",
              displayer: "Subtitle",
            },
          ],
        }, //3 end
      ],
    });
    //Carousel Prop End

    this.addProp({
      type: "string",
      key: "boxHeader",
      displayer: "BoxTitle",
      value: "We Provide the best service for Clients",
    });

    // RightBottomBox Prop Start
    this.addProp({
      type: "array",
      key: "rightBottomBox",
      displayer: "Box :",
      value: [
        {
          type: "object",
          key: "object",
          displayer: "Object Box",
          value: [
            {
              type: "string",
              key: "leftTop",
              displayer: "Top Writing",
              value: "People",
            },
            {
              type: "number",
              key: "leftMiddle",
              displayer: "Middle Writing",
              value: 100,
            },
            {
              type: "string",
              key: "leftBottom",
              displayer: "Bottom Writing",
              value: "Adipiscing elit, sed do.",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Object Box",
          value: [
            {
              type: "string",
              key: "rightTop",
              displayer: "Top Writing",
              value: "Offices",
            },
            {
              type: "number",
              key: "leftMiddle",
              displayer: "Middle Writing",
              value: 12,
            },
            {
              type: "string",
              key: "rightBottom",
              displayer: "Bottom Writing",
              value: "Sed do eiusmod tempor.",
            },
          ],
        },
      ],
    });
    // RightBottomBox Prop End
    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });

    this.castToObject<CardData[]>("rightBottomBox").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

  } //constructor end

  getName(): string {
    return "Testimonials 13";
  }

  //RENDER
  render() {
    //Settings
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


    //RETURN
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container2")}>
            <div className={this.decorateCSS("flexItem1")}>
              <span className={this.decorateCSS("writing")}>
                {this.getPropValue("writing")}
              </span>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.castToObject<Card[]>("profile-itemList").map(
                  (item: Card, index: number) => (
                    <div
                      className={this.decorateCSS("slider-inner-div")}
                      key={index}
                    >
                      <div className={this.decorateCSS("content-div")}>
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            alt=""
                            src={item.badge}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <span
                            className={`${this.decorateCSS(
                              "item-description"
                            )} ${this.decorateCSS("line-clamp8")}`}
                          >
                            {item.text}
                          </span>
                          <div
                            className={this.decorateCSS("item-author")}
                          ></div>
                          <span className={this.decorateCSS("first-header")}>
                            {item.author}
                          </span>
                          <span className={this.decorateCSS("item-title")}>
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
            <div className={this.decorateCSS("container3")}>
              <div className={this.decorateCSS("flexItem2")}>
                <img src={this.getPropValue("bigImage1")} alt="" />
              </div>
              <div
                id="flex_Item3"
                className={this.decorateCSS("flexItem3")}
              >
                <div className={this.decorateCSS("item_title_text")}>
                  {this.getPropValue("boxHeader")}
                </div>

                <div className={this.decorateCSS("container4")}>
                  {/* Map for box elements */}
                  {this.getPropValue("rightBottomBox").map(
                    (item: any, index: number) => (
                      <div
                        key={index}
                        className={this.decorateCSS("containerBottom")}
                      >
                        <div className={this.decorateCSS("topWriting")}>
                          {item.value[0].value}
                        </div>
                        <div className={this.decorateCSS("MiddleWriting")}>
                          {item.value[1].value}
                        </div>
                        <div className={this.decorateCSS("bottomWriting")}>
                          {item.value[2].value}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); //end RETURN
  } //end RENDER
} //end CLASS

//Higher Order Component
export default Testimonials13Page;