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
  overlay: boolean;
  buttomRow: {
    comment: string;
    icon: string;
    icon_text: string;
  };
};

class HeaderComponent20 extends BaseHeader {
  sliderRef: React.RefObject<any>;
  titleSliderRef: React.RefObject<any>;
  commentSliderRef: React.RefObject<any>;
  constructor(props?: any) {
    super(props, styles);

    this.sliderRef = React.createRef();
    this.titleSliderRef = React.createRef();
    this.commentSliderRef = React.createRef();

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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/01hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/02hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            }, {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/03hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/04hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/05hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/06hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/07hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/08hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/09hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/10hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
                "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/11hero.jpg",
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
                {
                  type: "icon",
                  key: "icon",
                  displayer: "Icon",
                  value: "IoMdShare",
                },
                {
                  type: "string",
                  key: "icon_text",
                  displayer: "Icon Text",
                  value: "Follow Us",
                },
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
            }
          ],
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
  throttle = <T extends (...args: any[]) => void>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };



  debounce = <T extends (...args: any[]) => void>(func: T, delay: number): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  handleWheel = this.throttle((event: React.WheelEvent) => {
    if (event.deltaY < 0) {
      console.log("yukarı");
      this.handleUpClick();
    } else if (event.deltaY > 0) {
      console.log("aşağı");
      this.handleDownClick();
    }
  }, 1200);




  getName(): string {
    return "Header-20";
  }

  handleUpClick = () => {
    console.log("up")
    const currentSlide = this.getComponentState("slider");
    const nextSlide = Math.max(currentSlide - 1, 0);
    console.log("next slider", nextSlide)

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

  handleDownClick = () => {
    console.log("down")
    const currentSlide = this.getComponentState("slider");
    const nextSlide = Math.min(
      currentSlide + 1,
      this.castToObject<SliderItem[]>("slider").length - 1
    );

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

  getTitlesToShow = (index: number) => {
    const slider = this.castToObject<SliderItem[]>("slider");
    const titlesToShow = [];

    if (index === 0) {
      titlesToShow.push({
        title: "",
        number: "",
        position: "previous",
        isPlaceholder: true,
      });
      titlesToShow.push({ ...slider[0], position: "current" });
      if (slider[1]) titlesToShow.push({ ...slider[1], position: "next" });
    } else if (index === slider.length - 1) {
      if (slider[slider.length - 2])
        titlesToShow.push({
          ...slider[slider.length - 2],
          position: "previous",
        });
      titlesToShow.push({ ...slider[slider.length - 1], position: "current" });
      titlesToShow.push({ title: "", number: "", position: "next" });
    } else {
      if (slider[index - 1])
        titlesToShow.push({ ...slider[index - 1], position: "previous" });
      titlesToShow.push({ ...slider[index], position: "current" });
      if (slider[index + 1])
        titlesToShow.push({ ...slider[index + 1], position: "next" });
    }

    return titlesToShow.map((title) => ({
      ...title,
      link: "link" in title ? title.link : undefined,
    }));
  };

  render() {
    const currentSlide = this.getComponentState("slider");
    const overlay = this.getPropValue("overlay");
    console.log("overlay", overlay)

    const settings = {
      dots: false,
      infinite: false,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      verticalSwiping: true,
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
    const icons = this.castToObject<
      Array<{
        icon_text: JSX.Element;
        link: string;
      }>
    >("social_icons");

    const isUpandDownButtonVisible = up_icon || down_icon;

    return (
      <div className={this.decorateCSS("container")} onWheel={this.handleWheel}>
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
              {slide.overlay && (
                <div className={this.decorateCSS("overlay")}
                  key={`title-key-${index}`}
                ></div>
              )}
            </div>
          ))}
        </ComposerSlider>

        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("item")}>

            <div className={this.decorateCSS("content-container")}>
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
                            <span className={this.decorateCSS("number")}>
                              {slide.number}
                            </span>
                          </h2>
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
                <div className={this.decorateCSS("navigation")}>
                  {isUpandDownButtonVisible && (
                    <ComposerIcon
                      name={up_icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                        onClick: this.handleUpClick,
                      }}
                    />
                  )}
                  {isUpandDownButtonVisible && (
                    <ComposerIcon
                      name={down_icon}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                        onClick: this.handleDownClick,
                      }}
                    />
                  )}
                </div>
                <div className={this.decorateCSS("comment")}>
                  {slider[currentSlide].buttomRow.comment}
                </div>
                <div
                  className={this.decorateCSS(
                    "comment-and-icon-text-container"
                  )}
                >

                  <div className={this.decorateCSS("icon-text-container")}>
                    <div className={this.decorateCSS("icon_text")}>
                      {slider[currentSlide].buttomRow.icon_text}
                    </div>
                    {slider[currentSlide]?.buttomRow.icon && (
                      <ComposerIcon
                        name={slider[currentSlide].buttomRow.icon}
                        propsIcon={{
                          className: this.decorateCSS("icon-next-to-text"),
                        }}
                      />
                    )}
                    <div className={this.decorateCSS("social-icons")}>
                      {icons.map((icon, i) => (
                        <a
                          key={`social-icon-${i}`}
                          className={this.decorateCSS(`icon-${i + 1}`)}
                          href={icon.link}
                          style={{
                            transition: "transform 0.3s ease, color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.2)";
                            e.currentTarget.style.fontWeight = "bold";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.fontWeight = "normal";
                          }}
                        >
                          {icon.icon_text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HeaderComponent20;