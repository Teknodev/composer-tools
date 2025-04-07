import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Item = {
  image: string;
  text: React.JSX.Element;
  author: React.JSX.Element;
  position: React.JSX.Element;
};

type Button = {
  buttonType: INPUTS.CastedButton;
};

class Testimonials10Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Happy With Customers & Clients",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "What our client say",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "I feel very happy and be proud to connect with this industry. i presume this is a very productive and professional industry.i wish very good luck & success for this industry",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Contact Us", null, null, null, "Primary")],
      additionalParams: {
        maxElementCount: 2,
      },
    });

    this.addProp({
      type: "array",
      key: "profile-itemList",
      displayer: "Testimonials",
      value: [
        {
          type: "object",
          key: "object",
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Alex Madson",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Author Image",
              value: "https://gridvalley.net/wp/industroz/wp-content/uploads/2020/04/pic3-5.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "Review Text",
              value: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
            },
            {
              type: "string",
              key: "author",
              value: "Helen Lee",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "position",
              value: "Contractor",
              displayer: "Author Position",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "quoteicon",
      displayer: "Quote Icon",
      value: "FaQuoteLeft",
    });
    this.addProp({
      type: "icon",
      key: "nexticon",
      displayer: " Next Icon",
      value: "FaArrowRightLong",
    });
    this.addProp({
      type: "icon",
      key: "previcon",
      displayer: "Prev Icon",
      value: "FaArrowLeftLong",
    });

    this.addProp({
      type: "string",
      key: "hiliteTitle",
      displayer: "Bottom Title",
      value: "CLIENT SAYS",
    });

    this.setComponentState("slider-ref", React.createRef());
  }
  static getName(): string {
    return "Testimonials 10";
  }
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: this.decorateCSS("slider"),
    };

    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const hiliteTitle = this.castToString(this.getPropValue("hiliteTitle"));
    const hasButtons = this.castToObject<Button[]>("buttons").length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("overlay-left")}> </div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container2")}>
            <div className={this.decorateCSS("testimonials10")}>
              {(title || subtitle || description || hasButtons) && (
                <div className={this.decorateCSS("left-content")}>
                  {(title || subtitle || description || this.castToObject<Button[]>("buttons").length > 0) && (
                    <Base.VerticalContent className={this.decorateCSS("content")}>
                      {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                      {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                      {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")} </Base.SectionDescription>}

                      <div className={this.decorateCSS("button-group")}>
                        {this.castToObject<Button[]>("buttons").map((button: any, index: number) => {
                          if (this.castToString(button.text))
                            return (
                              <ComposerLink key={`ts10-btn-${index}`} path={button.url}>
                                <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                  {button.text}
                                </Base.Button>
                              </ComposerLink>
                            );
                        })}
                      </div>
                    </Base.VerticalContent>
                  )}
                </div>
              )}
              {(this.getPropValue("profile-itemList").length > 0 || this.castToString(this.getPropValue("hiliteTitle"))) && (
                <div className={`${this.decorateCSS("right-content")} ${this.castToString(this.getPropValue("hiliteTitle")) && this.decorateCSS("right-content-padding")}`}>
                  <div className={this.decorateCSS("slider-style")}>
                    <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>
                      {this.castToObject<Item[]>("profile-itemList").map((item: Item, index: number) => (
                        <div className={this.decorateCSS("slider-inner-div")}>
                          <div className={this.decorateCSS("slider-card")}>
                            {(this.castToString(item.text) || this.castToString(item.position) || this.castToString(item.author)) && (
                              <div className={`${this.decorateCSS("header-page-container")} ${!item.image && this.decorateCSS("header-page-container-no-image")}`}>
                                <div className={this.decorateCSS("header-page")}>
                                  <div className={this.decorateCSS("top-container")}>
                                    {item.image && (
                                      <div className={this.decorateCSS("img-div")}>
                                        <img alt="" src={item.image} className={this.decorateCSS("img")} />
                                      </div>
                                    )}
                                    <div className={this.decorateCSS("icons")}>
                                      <ComposerIcon
                                        name={this.getPropValue("previcon")}
                                        propsIcon={{
                                          className: this.decorateCSS("previcon"),
                                          onClick: () => this.getComponentState("slider-ref").current.slickPrev(),
                                        }}
                                      />
                                      <ComposerIcon
                                        name={this.getPropValue("nexticon")}
                                        propsIcon={{
                                          className: this.decorateCSS("nexticon"),
                                          onClick: () => this.getComponentState("slider-ref").current.slickNext(),
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className={this.decorateCSS("iconquote")}>
                                    <ComposerIcon
                                      name={this.getPropValue("quoteicon")}
                                      propsIcon={{
                                        className: this.decorateCSS("quoteicon"),
                                        onClick: () => this.getComponentState("slider-ref").current.slickNext(),
                                      }}
                                    />
                                  </div>
                                  <div className={this.decorateCSS("card")}>
                                    {this.castToString(item.text) && <Base.P className={this.decorateCSS("text")}>{item.text}</Base.P>}
                                    {this.castToString(item.author) && <Base.P className={this.decorateCSS("author")}>{item.author}</Base.P>}
                                    {this.castToString(item.position) && <Base.P className={this.decorateCSS("position")}>{item.position}</Base.P>}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </ComposerSlider>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
        {hiliteTitle && <div className={this.decorateCSS("hiliteTitle")}>{this.getPropValue("hiliteTitle")}</div>}
      </Base.Container>
    );
  }
}

export default Testimonials10Page;
