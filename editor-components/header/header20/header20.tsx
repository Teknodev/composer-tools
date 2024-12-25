import * as React from "react";
import styles from "./header20.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type SliderItem = {
  title: string;
  number: string;
  image: string;
  link: string;
  buttomRow: {
    comment: JSX.Element;
  };
};

type SocialIcon = {
  icon_text: JSX.Element;
  link: string;
}

class Header20 extends BaseHeader {
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
      type: "icon",
      key: "up_icon",
      displayer: "Up icon",
      value: "IoIosArrowUp",
    });
    this.addProp({
      type: "icon",
      key: "down_icon",
      displayer: "Down icon",
      value: "IoIosArrowDown",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdb020655f8002cac28ee?alt=media&timestamp=1735121684770",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdb280655f8002cac2911?alt=media&timestamp=1735121722008",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
              value: [
                {
                  type: "string",
                  key: "comment",
                  displayer: "Comment",
                  value: "Design",
                },
              ],
            }
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdb4a0655f8002cac2922?alt=media&timestamp=1735121756578",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdb770655f8002cac2943?alt=media&timestamp=1735121805812",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdba80655f8002cac2a22?alt=media&timestamp=1735121850070",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdbca0655f8002cac2a2d?alt=media&timestamp=1735121884806",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdbec0655f8002cac2a3f?alt=media&timestamp=1735121919413",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdc130655f8002cac2b43?alt=media&timestamp=1735121969630",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdc400655f8002cac2e66?alt=media&timestamp=1735122014675",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdc720655f8002cac3093?alt=media&timestamp=1735122055884",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bdc9f0655f8002cac3193?alt=media&timestamp=1735122101509",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "object",
              key: "buttomRow",
              displayer: "Buttom Row",
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
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "IoMdShare",
        },
        {
          type: "string",
          key: "iconText",
          displayer: "Icon Text",
          value: "Follow Us",
        },
      ]
    });

    this.addProp({
      type: "array",
      key: "social_icons",
      displayer: "Social Icons",
      value: [
        {
          type: "object",
          key: "icon_1",
          displayer: "Icon 1",
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
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_2",
          displayer: "Icon 2",
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
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_3",
          displayer: "Icon 3",
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
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_4",
          displayer: "Icon 4",
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
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icon_5",
          displayer: "Icon 5",
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
              displayer: "Link",
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

  getName(): string {
    return "Header-20";
  }

  goToSlide = (nextSlide: number) => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(nextSlide);
    }
    if (this.titleSliderRef.current) {
      this.titleSliderRef.current.slickGoTo(nextSlide);
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
      index > 0
        ? { ...slider[index - 1], position: "previous" }
        : { title: "", number: "", position: "previous", isPlaceholder: true },
      { ...slider[index], position: "current" },
      index < totalSlides - 1
        ? { ...slider[index + 1], position: "next" }
        : { title: "", number: "", position: "next", isPlaceholder: true }
    ].map((title) => ({
      ...title,
      link: "link" in title ? title.link : undefined,
    }));
  };

  render() {
    const currentSlide = this.getComponentState("slider");

    const settings = {
      dots: false,
      infinite: false,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      verticalSwiping: true,
      swipeToSlide: true,
      draggable: true,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("slider", next);
        this.setComponentState("titleSlider", next);
        this.setComponentState("commentSlider", next);
      },
    };

    const titleSettings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      centerMode: true,
      centerPadding: "0",
    };

    const slider = this.castToObject<SliderItem[]>("slider");
    const up_icon = this.getPropValue("up_icon");
    const down_icon = this.getPropValue("down_icon");
    const icons = this.castToObject<SocialIcon[]>("social_icons");

    const activeIndex = this.getComponentState("slider");
    const imageless = !slider[activeIndex]?.image;
    const overlay = this.getPropValue("overlay");

    const iconText = this.castToObject<any>("iconsHeader");
    console.log(iconText.icon);
    console.log(iconText.iconText)

    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider ref={this.sliderRef} {...settings} >
          {slider.map((slide, index) => (
            <div
              className={this.decorateCSS("image-container")}
              key={`title-key-${index}`}
            >
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={this.decorateCSS("image")}
                />
              )}
              {(overlay && !imageless) && (
                <div className={this.decorateCSS("overlay")}
                  key={`title-key-${index}`}
                ></div>
              )}
            </div>
          ))}
        </ComposerSlider>

        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("item")}>
            <div className={`${this.decorateCSS("content-container")} ${imageless && this.decorateCSS("imageless")}`}>
              <div className={this.decorateCSS("title-container")}>
                <ComposerSlider ref={this.titleSliderRef} {...titleSettings}>
                  {this.getTitlesToShow(currentSlide).map((slide, index) => (
                    <div
                      key={`title-${index}`}
                      className={this.decorateCSS(slide.position)}
                    >
                      {slide.position === "current" && slide.link ? (
                        <ComposerLink path={slide.link} isFullWidth={true}>
                          <h2 className={this.decorateCSS("title")}>
                            {slide.title}
                          </h2>
                          <span className={this.decorateCSS("number")}>
                            {slide.number}
                          </span>
                        </ComposerLink>
                      ) : slide.isPlaceholder ? (
                        <h2 className={this.decorateCSS("title")}>&nbsp;</h2>
                      ) : (
                        <h2
                          className={`${this.decorateCSS(
                            "title"
                          )} ${this.decorateCSS(slide.position)}`}
                        >
                          {slide.title}
                          <span className={this.decorateCSS("number")}>
                            {slide.number}
                          </span>
                        </h2>
                      )}
                    </div>
                  ))}
                </ComposerSlider>
              </div>
              <div className={this.decorateCSS("buttomRow")}>
                {(this.castToString(slider[currentSlide].buttomRow.comment) ||
                  up_icon ||
                  down_icon) && <div className={this.decorateCSS("left")}>
                    {(up_icon || down_icon) && (
                      <div className={this.decorateCSS("navigation")}>
                        {up_icon &&
                          <ComposerIcon
                            name={up_icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                              onClick: this.handleUpClick,
                            }}
                          />
                        }
                        {down_icon &&
                          <ComposerIcon
                            name={down_icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                              onClick: this.handleDownClick,
                            }}
                          />
                        }
                      </div>
                    )
                    }
                    {this.castToString(slider[currentSlide].buttomRow.comment) &&
                      <div className={this.decorateCSS("comment")}>
                        {slider[currentSlide].buttomRow.comment}
                      </div>}
                  </div>}
                {(this.castToString(iconText.iconText) ||
                  iconText.icon ||
                  icons.length > 0) &&
                  <div className={this.decorateCSS("comment-and-icon-text-container")}>
                    <div className={this.decorateCSS("icon-text-container")}>
                      {this.castToString(iconText.iconText) &&
                        <div className={this.decorateCSS("icon_text")}>
                          {iconText.iconText}
                        </div>}
                      {iconText.icon && (
                        <ComposerIcon
                          name={iconText.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon-next-to-text"),
                          }}
                        />
                      )}
                      {(!(this.castToString(iconText.iconText) && !iconText.icon) || icons.length > 0) &&
                        <div className={this.decorateCSS("social-icons")}>
                          {icons.map((icon, i) => (
                            <div className={this.decorateCSS("icon")}>
                              <ComposerLink path={icon.link}>
                                {icon.icon_text}
                              </ComposerLink>
                            </div>
                          ))}
                        </div>}
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header20;