import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Item = {
  image: string;
  text: JSX.Element;
  author: JSX.Element;
  position: JSX.Element;
};

type Button = {
  buttonText: JSX.Element;
  url: string;
  buttonIcon: string;
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
      key: "subtitle",
      displayer: "Title",
      value: "What our client say",
    });
    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "title",
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
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
              value: "",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });
    this.addProp({
      type: "string",
      key: "hiliteTitle",
      displayer: "Bottom Title",
      value: "CLIENT SAYS",
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
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
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
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
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
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
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
          displayer: "Content",
          value: [
            {
              type: "image",
              key: "image",
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
      autoplay: true,
      autoplaySpeed: 30000000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: this.decorateCSS("slider"),
    };

    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const hiliteTitle = this.castToString(this.getPropValue("hiliteTitle"));
    const hasButtons = this.castToObject<Button[]>("buttons").length > 0;
    const showLine = this.getPropValue("showLine");

    return (
      <Base.Container className={this.decorateCSS("container")} isFull={true}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container2")}>
            <Base.ContainerGrid className={this.decorateCSS("testimonials10")}>
              {(title || subtitle || description || hasButtons) && (
                <Base.GridCell className={this.decorateCSS("left-content")}>
                  {title && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {this.getPropValue("title")}
                    </Base.SectionSubTitle>
                  )}
                  {subtitle && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {this.getPropValue("subtitle")}
                    </Base.SectionTitle>
                  )}
                  {description && (
                    <Base.P className={this.decorateCSS("description")}>
                      {this.getPropValue("description")}{" "}
                    </Base.P>
                  )}

                  <div className={this.decorateCSS("button-group")}>
                    {this.castToObject<Button[]>("buttons").map(
                      (button: Button, index: number) => {

                        if (this.castToString(button.buttonText))
                          return (
                            <ComposerLink
                              key={`ts10-btn-${index}`}
                              path={button.url}
                            >
                              <button className={this.decorateCSS("button")}>
                                {button.buttonText}
                              </button>
                            </ComposerLink>
                          );
                      }
                    )}
                  </div>
                </Base.GridCell>
              )}
              <Base.GridCell className={this.decorateCSS("right-content")}>
                <div className={this.decorateCSS("slider-style")}>
                  <ComposerSlider
                    {...settings}
                    ref={this.getComponentState("slider-ref")}
                  >
                    {this.castToObject<Item[]>("profile-itemList").map(
                      (item: Item, index: number) => (
                        <div className={
                          item.image
                            ? this.decorateCSS("slider-inner-div-with-image")
                            : this.decorateCSS("slider-inner-div")
                        }>
                          <div className={this.decorateCSS("slider-card")}>
                            {(this.castToString(item.text) ||
                              this.castToString(item.position) ||
                              this.castToString(item.author)) && (
                                <div className={this.decorateCSS("header-page-container")}>
                                  <div className={this.decorateCSS("header-page")}>
                                    {item.image && (
                                      <div className={this.decorateCSS("img-div")}>
                                        <img
                                          alt=""
                                          src={item.image}
                                          className={this.decorateCSS("img")}
                                        />
                                      </div>
                                    )}
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
                                      {this.castToString(item.text) && (
                                        <Base.P className={this.decorateCSS("text")}>
                                          {this.castToString(item.text)}
                                        </Base.P>
                                      )}
                                      {this.castToString(item.author) && (
                                        <h2 className={this.decorateCSS("author")}>
                                          {this.castToString(item.author)}
                                        </h2>
                                      )}
                                      {this.castToString(item.position) && (
                                        <h3 className={this.decorateCSS("position")}>
                                          {this.castToString(item.position)}
                                        </h3>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                      )
                    )}
                  </ComposerSlider>

                </div>
                {hiliteTitle && (
                  <div className={this.decorateCSS("hiliteTitle")}>
                    {this.getPropValue("hiliteTitle")}
                  </div>
                )}
              </Base.GridCell>
            </Base.ContainerGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials10Page;