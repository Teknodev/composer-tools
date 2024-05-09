import * as React from "react";
import styles from "./header18.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
type Item = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  description_title: string;
  text: string;
};

class Header18 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value:
        "https://img.freepik.com/free-photo/gray-texture_1253-246.jpg",
    });
    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "PiArrowLeftThin",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "PiArrowRightThin",
    });
    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Painting",
            },
            {
              type: "string",
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Painting is the application of pigments to a support surface that establishes an image,design or decoration.",
            },
            {
              type: "image",
              displayer: "İmage",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },

        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Painting",
            },
            {
              type: "string",
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Painting is the application of pigments to a support surface that establishes an image,design or decoration.",
            },
            {
              type: "image",
              displayer: "İmage",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Painting",
            },
            {
              type: "string",
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Description Title",
              key: "description_title",
              value: "Definition",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Painting is the application of pigments to a support surface that establishes an image,design or decoration.",
            },
            {
              type: "image",
              displayer: "İmage",
              key: "image",
              value:
                "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Medias",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "",
            },
            {
              type: "string",
              key: "icon_name",
              displayer: "Icon",
              value: "facebook",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "",
            },
            { type: "string", key: "icon_name", displayer: "Icon", value: "instagram" },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon Item",
          value: [
            {
              type: "page",
              key: "navigate_icon",
              displayer: "Icon Link",
              value: "",
            },
            { type: "string", key: "icon_name", displayer: "Icon", value: "dribbble" },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active-index", 0);

  }

  getName(): string {
    return "Header-18";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 2000,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        setTimeout(() => {
          this.setComponentState("active-index", newIndex);
        }, 1200);
      },
    };



    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

          <div className={this.decorateCSS("header18")}>
            <ComposerSlider
              {...settings}
              ref={this.getComponentState("slider-ref")}
              className={this.decorateCSS("slider-style")}
            >
              {this.castToObject<Item[]>("slider").map(
                (item: Item, index: number) => (
                  <div key={index}>
                    <div className={this.decorateCSS("card")}>
                      <img
                        src={item.image}
                        alt={""}
                        className={this.decorateCSS("image")}
                      />
                      <div className={this.decorateCSS("text-content")}>
                        <span className={this.decorateCSS("subtitle")}>{item.subtitle}</span>
                        <span className={this.decorateCSS("title")}>{item.title}</span>
                      </div>
                      <div className={this.decorateCSS("description-div")}>
                        <span className={this.decorateCSS("description_title")}>{item.description_title}</span>
                        <span className={this.decorateCSS("item-description")}>
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </ComposerSlider>
            <div className={this.decorateCSS("icons")}>
              {this.getPropValue("icons").map((item: any) => (
                <ComposerLink path={item.getPropValue("navigate_icon")}>
                  <span className={this.decorateCSS("icon_name")}>{item.getPropValue("icon_name")}</span>

                </ComposerLink>
              ))}
            </div>
            <ComposerIcon
              name={this.getPropValue("prev_icon")}
              propsIcon={{
                className: `${this.decorateCSS(
                  "prev-icon"
                )} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") &&
                this.decorateCSS("un-visible")
                  }`,
                size: 40,
                onClick: () => {
                  this.getComponentState("slider-ref").current.slickPrev();
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
                size: 40,
                onClick: () => {
                  this.getComponentState("slider-ref").current.slickNext();
                },
              }}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default Header18;
