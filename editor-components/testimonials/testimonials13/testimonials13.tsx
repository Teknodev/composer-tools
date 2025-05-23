import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials13.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  image: string;
  text: React.JSX.Element;
  author: React.JSX.Element;
  subtitle: React.JSX.Element;
};
type Box = {
  topText: React.JSX.Element;
  number: number;
  bottomText: React.JSX.Element;
};

class Testimonials13Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TESTIMONIALS",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear What Our Client Have to Say",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "incidunt ut labore et dolore magna aliqua.tempor incidunt ut labore et dolore magna aliqua. tempor incidunt ut labore et dolore magna ",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev Icon",
      value: "FaArrowLeftLong",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next Icon",
      value: "FaArrowRightLong",
    });
    this.addProp({
      type: "icon",
      key: "sliderIcon",
      displayer: "Slider Icon",
      value: "ImQuotesLeft",
    });
    this.addProp({
      type: "array",
      key: "profiles",
      displayer: "Profiles",
      value: [
        {
          type: "object",
          key: "profile",
          displayer: "Profile",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f41?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "string",
              key: "author",
              value: "Alex Madson",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Student",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "profile",
          displayer: "Profile",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f3f?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Artist",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "profile",
          displayer: "Profile",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f40?alt=media&timestamp=1719483639150",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, dolorum dignissimos, natus qui tenetur obcaecati explicabo excepturi, placeat ullam odit cumque necessitatibus? Delectus quis suscipit magnam dolorum, unde odio reprehenderit!",
            },
            {
              type: "string",
              key: "author",
              value: "Michael Moore",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "subtitle",
              value: "Designer",
              displayer: "Author Position",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661792ebd2970002c623f3e?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "string",
      key: "boxHeader",
      displayer: "BoxTitle",
      value: "We Provide the best service for Clients",
    });

    this.addProp({
      type: "array",
      key: "rightBoxs",
      displayer: "Right Boxs",
      value: [
        {
          type: "object",
          key: "rightBox",
          displayer: "Right Box",
          value: [
            {
              type: "string",
              key: "topText",
              displayer: "Top Text",
              value: "People",
            },
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 100,
            },
            {
              type: "string",
              key: "bottomText",
              displayer: "Bottom Text",
              value: "Adipiscing elit, sed do.",
            },
          ],
        },
        {
          type: "object",
          key: "rightBox",
          displayer: "Right Box",
          value: [
            {
              type: "string",
              key: "topText",
              displayer: "Top Text",
              value: "Offices",
            },
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 12,
            },
            {
              type: "string",
              key: "bottomText",
              displayer: "Bottom Text",
              value: "Sed do eiusmod tempor.",
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Testimonials 13";
  }

  render() {
    const box = this.castToObject<Box[]>("rightBoxs");
    const card = this.castToObject<Card[]>("profiles");
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };
    const sliderRef = this.getComponentState("slider-ref");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("container-grid")}>
            {(this.castToString(this.getPropValue("subtitle")) ||
              this.castToString(this.getPropValue("title")) ||
              this.castToString(this.getPropValue("description")) ||
              card.length > 0 ||
              this.getPropValue("prevIcon") ||
              this.getPropValue("nextIcon") ||
              this.getPropValue("sliderIcon")) && (
              <Base.GridCell className={this.decorateCSS("grid-cell")}>
                <Base.VerticalContent className={this.decorateCSS("flexItem1")}>
                  {this.castToString(this.getPropValue("subtitle")) && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {this.castToString(this.getPropValue("description")) && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                  <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                    {card.map((item: Card, index: number) => (
                      <div className={this.decorateCSS("slider-inner-div")}>
                        <div className={this.decorateCSS("content-div")}>
                          {(this.getPropValue("prevIcon") || this.getPropValue("nextIcon") || item.image) && (
                            <div className={this.decorateCSS("image-arrow")}>
                              {this.getPropValue("prevIcon") && (
                                <button
                                  onClick={() => {
                                    sliderRef.current.slickPrev();
                                  }}
                                  className={this.decorateCSS("button")}
                                >
                                  <Base.Icon name={this.getPropValue("prevIcon")} propsIcon={{ className: this.decorateCSS("prev-arrow") }}></Base.Icon>
                                </button>
                              )}
                              {item.image && <div className={this.decorateCSS("img-div")}>{item.image && <img alt={item.image} src={item.image} className={this.decorateCSS("img")} />}</div>}
                              {this.getPropValue("nextIcon") && (
                                <button
                                  onClick={() => {
                                    sliderRef.current.slickNext();
                                  }}
                                  className={this.decorateCSS("button")}
                                >
                                  <Base.Icon name={this.getPropValue("nextIcon")} propsIcon={{ className: this.decorateCSS("next-arrow") }}></Base.Icon>
                                </button>
                              )}
                            </div>
                          )}
                          {(this.castToString(item.text) || this.getPropValue("sliderIcon") || this.castToString(item.author) || this.castToString(item.subtitle)) && (
                            <div className={this.decorateCSS("header-page")}>
                              {this.castToString(item.text) && (
                                <Base.P className={`${this.decorateCSS("item-description")} ${!(this.getPropValue("prevIcon") || this.getPropValue("nextIcon") || item.image) && this.decorateCSS("item-description-no-margin")}`}>{item.text}</Base.P>
                              )}
                              {(this.getPropValue("sliderIcon") || this.castToString(item.author) || this.castToString(item.subtitle)) && (
                                <Base.VerticalContent className={this.decorateCSS("bottom-container")}>
                                  {this.getPropValue("sliderIcon") && <Base.Icon name={this.getPropValue("sliderIcon")} propsIcon={{ className: this.decorateCSS("item-icon") }}></Base.Icon>}
                                  {this.castToString(item.author) && <Base.H2 className={this.decorateCSS("first-header")}>{item.author}</Base.H2>}
                                  {this.castToString(item.subtitle) && <Base.P className={this.decorateCSS("item-title")}>{item.subtitle}</Base.P>}
                                </Base.VerticalContent>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </ComposerSlider>
                </Base.VerticalContent>
              </Base.GridCell>
            )}

            {(this.getPropValue("image") || this.castToString(this.getPropValue("boxHeader")) || box.length > 0) && (
              <Base.GridCell className={this.decorateCSS("container3")}>
                <Base.ContainerGrid className={this.decorateCSS("containerGrid")}>
                  {this.getPropValue("image") && (
                    <Base.GridCell className={this.decorateCSS("flexItem2")}>
                      <img src={this.getPropValue("image")} alt={this.getPropValue("image")} />
                    </Base.GridCell>
                  )}
                  {(this.castToString(this.getPropValue("boxHeader")) || box.length > 0) && (
                    <Base.GridCell className={this.decorateCSS("flexItem3")}>
                      {this.castToString(this.getPropValue("boxHeader")) && <Base.H1 className={this.decorateCSS("item_title_text")}>{this.getPropValue("boxHeader")}</Base.H1>}
                      <div className={this.decorateCSS("container4")}>
                        {box.map((item: any, index: number) => (
                          <Base.VerticalContent className={this.decorateCSS("containerBottom")}>
                            {this.castToString(item.topText) && <div className={this.decorateCSS("topWriting")}>{item.topText}</div>}
                            {item.number && <div className={this.decorateCSS("middleWriting")}>{item.number}</div>}
                            {this.castToString(item.bottomText) && <div className={this.decorateCSS("bottomWriting")}>{item.bottomText}</div>}
                          </Base.VerticalContent>
                        ))}
                      </div>
                    </Base.GridCell>
                  )}
                </Base.ContainerGrid>
              </Base.GridCell>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Testimonials13Page;
