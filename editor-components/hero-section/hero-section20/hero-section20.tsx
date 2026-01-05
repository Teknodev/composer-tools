import * as React from "react";
import styles from "./hero-section20.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "composer-tools/composer-base-components/base/base";

type SliderItem = {
  title: string;
  number: string;
  image: TypeMediaInputValue;
  link: string;
  buttomRow: {
    comment: React.JSX.Element;
  };
};

type SocialIcon = {
  icon_text: React.JSX.Element;
  link: string;
};

class HeroSection20 extends BaseHeroSection {
  sliderRef: React.RefObject<any>;
  titleSliderRef: React.RefObject<any>;
  commentSliderRef: React.RefObject<any>;
  constructor(props?: any) {
    super(props, styles);

    this.sliderRef = React.createRef();
    this.titleSliderRef = React.createRef();
    this.commentSliderRef = React.createRef();

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "media",
      key: "up_icon",
      displayer: "Up Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowUp",
      },
    });
    this.addProp({
      type: "media",
      key: "down_icon",
      displayer: "Down Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowDown",
      },
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "SNEAKERS",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "01",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/01hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Branding",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "EVEREST",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "02",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/02hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Design",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "RED ROOM",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "03",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/03hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Photography",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ONLY DANCE",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "04",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/04hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Video",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FOREST",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "05",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/05hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Photography",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "BLACK BOOK",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "06",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/06hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Branding",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "HANNAH",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "07",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/07hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Photography",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CROSS BIKE",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "08",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/08hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Photography",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ROBOT",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "09",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/09hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Design",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "COLOR DUST",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "10",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/10hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Design",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "KATYA",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "11",
            },
            {
              type: "media",
              displayer: "Media",
              key: "image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/11hero.jpg",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Bottom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Photography",
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "iconsHeader",
      displayer: "Icons Header",
      value: [
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdShare",
          },
        },
        {
          type: "string",
          key: "iconText",
          displayer: "Icon Text",
          value: "Follow Us",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "social_icons",
      displayer: "Social Icons",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "string",
              key: "icon_text",
              displayer: "Icon Text",
              value: "In",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "string",
              key: "icon_text",
              displayer: "Icon Text",
              value: "Fb",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "string",
              key: "icon_text",
              displayer: "Icon Text",
              value: "Be",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "string",
              key: "icon_text",
              displayer: "Icon Text",
              value: "Tw",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "string",
              key: "icon_text",
              displayer: "Icon Text",
              value: "Db",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.setComponentState("slider", 0);
    this.setComponentState("titleSlider", 0);
    this.setComponentState("commentSlider", 0);
  }

  static getName(): string {
    return "Hero Section 20";
  }

  goToSlide = (nextSlide: number) => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(nextSlide);
    }
    if (this.titleSliderRef.current) {
      this.titleSliderRef.current.slickGoTo(nextSlide + 1);
    }
    if (this.commentSliderRef.current) {
      this.commentSliderRef.current.slickGoTo(nextSlide);
    }
    this.setComponentState("slider", nextSlide);
    this.setComponentState("titleSlider", nextSlide);
    this.setComponentState("commentSlider", nextSlide);
  };

  handleUpClick = () => {
    const currentSlide = this.getComponentState("slider");
    const nextSlide = Math.max(currentSlide - 1, 0);
    this.goToSlide(nextSlide);
  };

  handleDownClick = () => {
    const currentSlide = this.getComponentState("slider");
    const maxSlide = this.castToObject<SliderItem[]>("slider").length - 1;
    const nextSlide = Math.min(currentSlide + 1, maxSlide);
    this.goToSlide(nextSlide);
  };

  getTitlesToShow = (index: number) => {
    const slider = this.castToObject<SliderItem[]>("slider");
    const totalSlides = slider.length;

    return [
      index > 0 ? { ...slider[index - 1], position: "previous" } : { title: "", number: "", position: "previous", isPlaceholder: true },
      { ...slider[index], position: "current" },
      index < totalSlides - 1 ? { ...slider[index + 1], position: "next" } : { title: "", number: "", position: "next", isPlaceholder: true },
    ].map((title) => ({
      ...title,
      link: "link" in title ? title.link : undefined,
    }));
  };

  render() {
    const currentSlide = this.getComponentState("slider");

    const settings = {
      dots: false,
      infinite: true,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      verticalSwiping: true,
      swipeToSlide: true,
      draggable: true,
      autoplay: this.getPropValue("autoplay"),
      beforeChange: (current: number, next: number) => {
        const maxSlide = this.castToObject<SliderItem[]>("slider").length - 1;
        const isLoopingForward = current === maxSlide && next === 0;
        const isLoopingBackward = current === 0 && next === maxSlide;
        const skipAnimation = isLoopingForward || isLoopingBackward;
        
        this.setComponentState("slider", next);
        this.setComponentState("titleSlider", next);
        this.setComponentState("commentSlider", next);
        
        if (this.titleSliderRef.current) {
          this.titleSliderRef.current.slickGoTo(next + 1, skipAnimation);
        }
        if (this.commentSliderRef.current) {
          this.commentSliderRef.current.slickGoTo(next);
        }
      },
    };

    const titleSettings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      vertical: true,
      verticalSwiping: false,
      swipeToSlide: false,
      draggable: false,
      centerMode: true,
      centerPadding: "0",
      speed: 600,
      cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      initialSlide: 1,
    };

    const slider = this.castToObject<SliderItem[]>("slider");
    const up_icon = this.getPropValue("up_icon") as TypeMediaInputValue | undefined;
    const down_icon = this.getPropValue("down_icon") as TypeMediaInputValue | undefined;
    const icons = this.castToObject<SocialIcon[]>("social_icons");

    const activeIndex = this.getComponentState("slider");
    const imageless = !slider[activeIndex]?.image;
    const overlay = this.getPropValue("overlay");

    const iconText = this.castToObject<any>("iconsHeader");

    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider ref={this.sliderRef} {...settings}>
          {slider.map((slide, index) => (
            <div className={this.decorateCSS("image-container")} key={`title-key-${index}`}>
              {slide.image && <Base.Media value={slide.image} className={this.decorateCSS("image")} autoPlay muted loop playsInline controls={false} />}
              {overlay && !imageless && <div className={this.decorateCSS("overlay")} key={`title-key-${index}`}></div>}
            </div>
          ))}
        </ComposerSlider>

        {slider.length > 0 && (
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("item")}>
              <div className={`${this.decorateCSS("content-container")} ${imageless && this.decorateCSS("imageless")}`}>
                <div className={this.decorateCSS("title-container")}>
                  <ComposerSlider ref={this.titleSliderRef} {...titleSettings}>
                    <div key="placeholder-start">
                      <div className={this.decorateCSS("title-wrapper")}>
                        <h2 className={this.decorateCSS("title-stroke")}>&nbsp;</h2>
                      </div>
                    </div>
                    {slider.map((slide, index) => {
                      const isCurrent = index === currentSlide;
                      return (
                        <div key={`title-${index}`}>
                          {slide.link && isCurrent ? (
                            <ComposerLink path={slide.link} isFullWidth={true}>
                              <div className={`${this.decorateCSS("title-wrapper")} ${isCurrent ? this.decorateCSS("current") : ""}`}>
                                <h2 className={this.decorateCSS("title-stroke")}>
                                  {slide.title}
                                  <span className={this.decorateCSS("number")}>{slide.number}</span>
                                </h2>
                                <h2 className={this.decorateCSS("title-solid")}>
                                  {slide.title}
                                  <span className={this.decorateCSS("number")}>{slide.number}</span>
                                </h2>
                              </div>
                            </ComposerLink>
                          ) : (
                            <div className={`${this.decorateCSS("title-wrapper")} ${isCurrent ? this.decorateCSS("current") : ""}`}>
                              <h2 className={this.decorateCSS("title-stroke")}>
                                {slide.title}
                                <span className={this.decorateCSS("number")}>{slide.number}</span>
                              </h2>
                              <h2 className={this.decorateCSS("title-solid")}>
                                {slide.title}
                                <span className={this.decorateCSS("number")}>{slide.number}</span>
                              </h2>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <div key="placeholder-end">
                      <div className={this.decorateCSS("title-wrapper")}>
                        <h2 className={this.decorateCSS("title-stroke")}>&nbsp;</h2>
                      </div>
                    </div>
                  </ComposerSlider>
                </div>
                <div className={this.decorateCSS("buttomRow")}>
                  {(this.castToString(slider[currentSlide].buttomRow.comment) || up_icon || down_icon) && (
                    <div className={this.decorateCSS("left")}>
                      {(up_icon || down_icon) && (
                        <div className={this.decorateCSS("navigation")}>
                          {up_icon && (
                            <div
                              className={this.decorateCSS("icon")}
                              onClick={this.handleUpClick}
                            >
                              <Base.Media className={this.decorateCSS("icon-element")} value={up_icon} />
                            </div>
                          )}
                          {down_icon && (
                            <div
                              className={this.decorateCSS("icon")}
                              onClick={this.handleDownClick}
                            >
                              <Base.Media className={this.decorateCSS("icon-element")} value={down_icon} />
                            </div>
                          )}
                        </div>
                      )}
                      {this.castToString(slider[currentSlide].buttomRow.comment) && <div className={this.decorateCSS("comment")}>{slider[currentSlide].buttomRow.comment}</div>}
                    </div>
                  )}
                  {(this.castToString(iconText.iconText) || iconText.icon || icons.length > 0) && (
                    <div className={this.decorateCSS("comment-and-icon-text-container")}>
                      <div className={this.decorateCSS("icon-text-container")}>
                        {this.castToString(iconText.iconText) && <div className={this.decorateCSS("icon_text")}>{iconText.iconText}</div>}
                        {iconText.icon && (
                          <Base.Media
                            value={iconText.icon as TypeMediaInputValue}
                            className={this.decorateCSS("icon-next-to-text")}
                          />
                        )}
                        {(!(this.castToString(iconText.iconText) && !iconText.icon) || icons.length > 0) && (
                          <div className={this.decorateCSS("social-icons")}>
                            {icons.map((icon, i) => (
                              <div className={this.decorateCSS("icon")}>
                                <ComposerLink path={icon.link}>{icon.icon_text}</ComposerLink>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HeroSection20;

