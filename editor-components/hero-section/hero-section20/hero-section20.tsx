import * as React from "react";
import styles from "./hero-section20.module.scss";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderItem = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  number: React.JSX.Element;
  media: TypeMediaInputValue;
  url: string;
};

type SocialItem = {
  icon: TypeMediaInputValue;
  text: React.JSX.Element;
  url: string;
};

type Follow = {
  icon: TypeMediaInputValue;
  text: React.JSX.Element;
};

type Navigation = {
  upIcon: TypeMediaInputValue;
  downIcon: TypeMediaInputValue;
};

const slide = (title: string, number: string, subtitle: string, mediaUrl: string): TypeUsableComponentProps => ({
  type: "object",
  key: "item",
  displayer: "Item",
  value: [
    {
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
    },
    {
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: subtitle,
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: title,
    },
    {
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    },
    {
      type: "string",
      key: "number",
      displayer: "Number",
      value: number,
    },
    {
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: mediaUrl,
      },
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

const social = (text: string): TypeUsableComponentProps => ({
  type: "object",
  key: "social",
  displayer: "Social",
  value: [
    {
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "",
      },
    },
    {
      type: "string",
      key: "text",
      displayer: "Text",
      value: text,
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

class HeroSection20 extends BaseHeroSection {
  sliderRef: React.RefObject<any>;
  titleSliderRef: React.RefObject<any>;
  constructor(props?: any) {
    super(props, styles);

    this.sliderRef = React.createRef();
    this.titleSliderRef = React.createRef();

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "upIcon",
          displayer: "Up Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoIosArrowUp",
          },
        },
        {
          type: "media",
          key: "downIcon",
          displayer: "Down Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoIosArrowDown",
          },
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        slide("SNEAKERS", "01", "Branding", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/01hero.jpg"),
        slide("EVEREST", "02", "Design", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/02hero.jpg"),
        slide("RED ROOM", "03", "Photography", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/03hero.jpg"),
        slide("ONLY DANCE", "04", "Video", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/04hero.jpg"),
        slide("FOREST", "05", "Photography", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/05hero.jpg"),
        slide("BLACK BOOK", "06", "Branding", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/06hero.jpg"),
        slide("HANNAH", "07", "Photography", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/07hero.jpg"),
        slide("CROSS BIKE", "08", "Photography", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/08hero.jpg"),
        slide("ROBOT", "09", "Design", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/09hero.jpg"),
        slide("COLOR DUST", "10", "Design", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/10hero.jpg"),
        slide("KATYA", "11", "Photography", "http://clapat.ro/themes/hervin-wordpress/wp-content/uploads/2019/05/11hero.jpg"),
      ],
    });

    this.addProp({
      type: "object",
      key: "follow",
      displayer: "Follow",
      value: [
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoMdShare",
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "Follow Us",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Icons",
      value: [
        social("In"),
        social("Fb"),
        social("Be"),
        social("Tw"),
        social("Db"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.setComponentState("slider", 0);
  }

  static getName(): string {
    return "Hero Section 20";
  }

  hasMedia(media?: unknown) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  goToSlide = (nextSlide: number) => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(nextSlide);
    }
    if (this.titleSliderRef.current) {
      this.titleSliderRef.current.slickGoTo(nextSlide + 1);
    }
    this.setComponentState("slider", nextSlide);
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

  renderTitle(slide: SliderItem) {
    const titleExist = this.castToString(slide.title);
    const numberExist = this.castToString(slide.number);
    return (
      <>
        <div className={this.decorateCSS("title-stroke")}>
          {titleExist && <Base.H2 className={this.decorateCSS("title-text")}>{slide.title}</Base.H2>}
          {numberExist && <Base.P className={this.decorateCSS("number")}>{slide.number}</Base.P>}
        </div>
        <div className={this.decorateCSS("title-solid")}>
          {titleExist && <Base.H2 className={this.decorateCSS("title-text")}>{slide.title}</Base.H2>}
          {numberExist && <Base.P className={this.decorateCSS("number")}>{slide.number}</Base.P>}
        </div>
      </>
    );
  }

  render() {
    const currentSlide = this.getComponentState("slider");
    const animation = this.getPropValue("animation");
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));
    const slider = this.castToObject<SliderItem[]>("slider");

    const settings = {
      ...sliderSettings,
      dots: false,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      draggable: true,
      speed: animation ? sliderSettings.speed : 0,
      beforeChange: (current: number, next: number) => {
        const maxSlide = slider.length - 1;
        const isLoopingForward = current === maxSlide && next === 0;
        const isLoopingBackward = current === 0 && next === maxSlide;
        const skipAnimation = isLoopingForward || isLoopingBackward || !animation;

        this.setComponentState("slider", next);

        if (this.titleSliderRef.current) {
          this.titleSliderRef.current.slickGoTo(next + 1, skipAnimation);
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
      speed: animation ? 600 : 0,
      cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      initialSlide: 1,
    };

    const navigation = this.castToObject<Navigation>("arrows");
    const upIconExist = sliderSettings.arrows && this.hasMedia(navigation?.upIcon);
    const downIconExist = sliderSettings.arrows && this.hasMedia(navigation?.downIcon);
    const socials = this.castToObject<SocialItem[]>("socials").filter(
      (item: SocialItem) => this.castToString(item.text) || this.hasMedia(item.icon)
    );
    const follow = this.castToObject<Follow>("follow");
    const followTextExist = this.castToString(follow?.text);
    const followIconExist = this.hasMedia(follow?.icon);

    const activeItem = slider[currentSlide];
    const imageless = !this.hasMedia(activeItem?.media);
    const overlay = this.getPropValue("overlay");

    const activeLogoExist = this.hasMedia(activeItem?.logo);
    const activeSubtitleExist = this.castToString(activeItem?.subtitle);
    const activeDescriptionExist = this.castToString(activeItem?.description);
    const metaExist = activeLogoExist || activeSubtitleExist || activeDescriptionExist;

    return (
      <div className={`${this.decorateCSS("container")} ${!animation ? this.decorateCSS("no-animation") : ""}`}>
        <ComposerSlider ref={this.sliderRef} {...settings} className={this.decorateCSS("media-slider")}>
          {slider.map((item: SliderItem, index: number) => {
            const mediaExist = this.hasMedia(item.media);
            return (
              <div className={this.decorateCSS("image-container")} key={`media-key-${index}`}>
                {mediaExist && <Base.Media value={this.withVideoSettings(item.media)} className={this.decorateCSS("image")} />}
                {overlay && mediaExist && <div className={this.decorateCSS("overlay")}></div>}
              </div>
            );
          })}
        </ComposerSlider>

        {slider.length > 0 && (
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("item")}>
              <div className={`${this.decorateCSS("content-container")} ${imageless ? this.decorateCSS("imageless") : ""}`}>
                <div className={this.decorateCSS("title-container")}>
                  <ComposerSlider ref={this.titleSliderRef} {...titleSettings} className={this.decorateCSS("title-slider")}>
                    <div key="placeholder-start" className={this.decorateCSS("title-slide")}>
                      <div className={this.decorateCSS("title-wrapper")}>
                        <div className={this.decorateCSS("title-stroke")}>
                          <Base.H2 className={this.decorateCSS("title-text")}>&nbsp;</Base.H2>
                        </div>
                      </div>
                    </div>
                    {slider.map((item: SliderItem, index: number) => {
                      const isCurrent = index === currentSlide;
                      const isImageless = !this.hasMedia(item.media);
                      const wrapperClass = `${this.decorateCSS("title-wrapper")} ${isCurrent ? this.decorateCSS("current") : ""} ${isCurrent && isImageless ? this.decorateCSS("imageless-title") : ""}`;
                      return (
                        <div key={`title-${index}`} className={this.decorateCSS("title-slide")}>
                          {item.url && isCurrent ? (
                            <ComposerLink path={item.url} isFullWidth={true}>
                              <div className={wrapperClass}>{this.renderTitle(item)}</div>
                            </ComposerLink>
                          ) : (
                            <div className={wrapperClass}>{this.renderTitle(item)}</div>
                          )}
                        </div>
                      );
                    })}
                    <div key="placeholder-end" className={this.decorateCSS("title-slide")}>
                      <div className={this.decorateCSS("title-wrapper")}>
                        <div className={this.decorateCSS("title-stroke")}>
                          <Base.H2 className={this.decorateCSS("title-text")}>&nbsp;</Base.H2>
                        </div>
                      </div>
                    </div>
                  </ComposerSlider>
                </div>
                <div className={this.decorateCSS("bottom-row")}>
                  {(metaExist || upIconExist || downIconExist) && (
                    <div className={this.decorateCSS("left")}>
                      {(upIconExist || downIconExist) && (
                        <div className={this.decorateCSS("navigation")}>
                          {upIconExist && (
                            <div className={this.decorateCSS("icon")} onClick={this.handleUpClick}>
                              <Base.Media className={this.decorateCSS("icon-element")} value={navigation.upIcon} />
                            </div>
                          )}
                          {downIconExist && (
                            <div className={this.decorateCSS("icon")} onClick={this.handleDownClick}>
                              <Base.Media className={this.decorateCSS("icon-element")} value={navigation.downIcon} />
                            </div>
                          )}
                        </div>
                      )}
                      {metaExist && (
                        <Base.VerticalContent className={this.decorateCSS("comment")}>
                          {activeLogoExist && <Base.Media value={activeItem.logo} className={this.decorateCSS("logo")} />}
                          {activeSubtitleExist && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{activeItem.subtitle}</Base.SectionSubTitle>
                          )}
                          {activeDescriptionExist && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>{activeItem.description}</Base.SectionDescription>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  )}
                  {(followTextExist || followIconExist || socials.length > 0) && (
                    <div className={this.decorateCSS("comment-and-icon-text-container")}>
                      <div className={this.decorateCSS("icon-text-container")}>
                        {followTextExist && <Base.P className={this.decorateCSS("follow-text")}>{follow.text}</Base.P>}
                        {followIconExist && <Base.Media value={follow.icon} className={this.decorateCSS("icon-next-to-text")} />}
                        {socials.length > 0 && (
                          <div className={this.decorateCSS("social-icons")}>
                            {socials.map((item: SocialItem, index: number) => (
                              <div className={this.decorateCSS("icon")} key={index}>
                                <ComposerLink path={item.url}>
                                  <div className={this.decorateCSS("social-link")}>
                                    {this.hasMedia(item.icon) && <Base.Media value={item.icon} className={this.decorateCSS("social-icon")} />}
                                    {this.castToString(item.text) && <Base.P className={this.decorateCSS("social-text")}>{item.text}</Base.P>}
                                  </div>
                                </ComposerLink>
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
