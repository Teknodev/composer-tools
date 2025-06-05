import * as React from "react";
import styles from "./header18.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

import { Base } from "../../../composer-base-components/base/base";

type Slide = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  description_title: React.JSX.Element;
  image: string;
};

type Social = {
  url: string;
  text: string;
};

class Header18 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "cover",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194c2bd2970002c625e7e?alt=media&timestamp=1719483639150",
    });

    this.addProp({
      type: "boolean",
      key: "showPagination",
      displayer: "Show Pagination",
      value: true,
    });

    this.addProp({
      type: "array",
      displayer: "Slider Items",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item",
          key: "item",
          value: [
            {
              type: "string",
              displayer: "Subtitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Painting",
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
              value: "Painting is the application of pigments to a support surface that establishes an image, design or decoration.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef2?alt=media&timestamp=1719483639150",
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
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Scultpure",
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
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ligula eu ligula congue vestibulum.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194c2bd2970002c625e7f?alt=media&timestamp=1719483639150",
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
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Architecture",
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
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu justo sed libero consectetur consequat.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef1?alt=media&timestamp=1719483639150",
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
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Ceramics",
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
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida felis sed nisl consequat, nec ultricies velit commodo.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef3?alt=media&timestamp=1719483639150",
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
              displayer: "Subitle",
              key: "subtitle",
              value: "visual art forms",
            },
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "Photography",
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
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor justo ac lorem tincidunt, at convallis tortor efficitur.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/666194ffbd2970002c625ef4?alt=media&timestamp=1719483639150",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Medias",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "facebook",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "instagram",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "dribbble",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "BsArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "BsArrowRight",
    });

    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active-index", 0);
  }

  static getName(): string {
    return "Header 18";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex: number, index: number) => {
        if (oldIndex === index) return;
        setTimeout(() => {
          this.setComponentState("active-index", index);
        }, 1200);
      },
    };

    const slides = this.castToObject<Slide[]>("slider");
    const sliderCount = slides?.length;
    const progressPercentage = ((this.getComponentState("active-index") + 1) / sliderCount) * 100;

    const socials = this.castToObject<Social[]>("socials");

    const prevIcon = this.getPropValue("prev_icon");
    const nextIcon = this.getPropValue("next_icon");

    const prevIconExist = !!prevIcon;
    const nextIconExist = !!nextIcon;

    const renderBottomPage = socials?.length > 0 || prevIconExist || nextIconExist;

    const cover = this.getPropValue("cover");

    const showPagination = !!this.getPropValue("showPagination");
    const sliderRef = this.getComponentState("slider-ref");

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")} style={{ background: `url(${cover})` }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {slides?.length > 0 && (
            <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider")}>
              {slides.map((item: Slide, index: number) => {
                const titleExist = this.castToString(item.title);
                const subtitleExist = this.castToString(item.subtitle);

                const descTitleExist = this.castToString(item.description_title);
                const descExist = this.castToString(item.description);

                return (
                  <div className={this.decorateCSS("slide")} key={index}>
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("text-content")}>
                          {(titleExist || subtitleExist) && (
                            <div className={this.decorateCSS("text-content")}>
                              {subtitleExist && <Base.H5 className={`${this.decorateCSS("subtitle")} ${!cover && this.decorateCSS("subtitle-no-image")}`}>{item.subtitle}</Base.H5>}
                              {titleExist && <Base.H2 className={`${this.decorateCSS("title")} ${!cover && this.decorateCSS("title-no-image")}`}>{item.title}</Base.H2>}
                            </div>
                          )}
                          {showPagination && slides.length > 1 && (
                            <div className={`${this.decorateCSS("pagination")} ${!cover && this.decorateCSS("pagination-no-image")}`}>
                              <Base.H5 className={this.decorateCSS("active-slide")}>{(this.getComponentState("active-index") + 1).toString().padStart(2, "0")}</Base.H5>
                              <div className={`${this.decorateCSS("progress-bar")} ${!cover && this.decorateCSS("progress-bar-no-image")}`}>
                                <div className={`${this.decorateCSS("active")} ${!cover && this.decorateCSS("active-no-image")}`} style={{ width: `${progressPercentage}%` }} />
                              </div>
                              <Base.H5 className={this.decorateCSS("slide-count")}>{sliderCount.toString().padStart(2, "0")}</Base.H5>
                            </div>
                          )}
                        </div>
                      </div>
                      {!!item.image && <img src={item.image} className={this.decorateCSS("image")} />}
                      {(descTitleExist || descExist) && (
                        <div className={`${this.decorateCSS("description-div")} ${!cover && this.decorateCSS("description-div-no-image")}`}>
                          {descTitleExist && <Base.H3 className={this.decorateCSS("description-title")}>{item.description_title}</Base.H3>}
                          {descExist && <Base.P className={this.decorateCSS("item-description")}>{item.description}</Base.P>}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </ComposerSlider>
          )}
          {renderBottomPage && (
            <div className={this.decorateCSS("page-bottom")}>
              {socials?.length > 0 && (
                <div className={this.decorateCSS("socials")}>
                  {socials.map((item: Social, index: number) => (
                    <ComposerLink path={item.url} key={index}>
                      <Base.H5 className={`${this.decorateCSS("name")} ${!cover && this.decorateCSS("name-no-image")}`}>{item.text}</Base.H5>
                    </ComposerLink>
                  ))}
                </div>
              )}
              {prevIconExist && slides.length > 1 && (
                <Base.Icon
                  name={this.getPropValue("prev_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("prev-icon")} ${!cover && this.decorateCSS("prev-icon-no-image")}`,
                    onClick: () => sliderRef.current.slickPrev(),
                  }}
                />
              )}
              {nextIconExist && slides.length > 1 && (
                <Base.Icon
                  name={this.getPropValue("next_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("next-icon")} ${!cover && this.decorateCSS("next-icon-no-image")}`,

                    onClick: () => sliderRef.current.slickNext(),
                  }}
                />
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header18;
