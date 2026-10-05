import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderItem = {
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  url?: string;
};

type Arrows = {
  leftIcon: TypeMediaInputValue;
  rightIcon: TypeMediaInputValue;
};

const mediaUrl = (id: string) =>
  `https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/${id}?alt=media&timestamp=1719483639150`;

const sliderItem = (title: string, mediaId: string): TypeUsableComponentProps => ({
  type: "object",
  key: "sliderItem",
  displayer: "Slider Item",
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
      value: "",
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
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: mediaUrl(mediaId),
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

class HeroSection12 extends BaseHeroSection {
  leftSliderRef: any;
  rightSliderRef: any;
  isPhone: boolean = false;
  containerRef: React.RefObject<HTMLDivElement | null>;
  resizeObserver: ResizeObserver | null = null;

  constructor(props?: any) {
    super(props, styles);
    this.containerRef = React.createRef();

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "leftSliderItems",
      displayer: "Left Slider",
      value: [
        sliderItem("Autumn Stuff", "66618f99bd2970002c625904"),
        sliderItem("Breakfast", "66618f99bd2970002c625905"),
        sliderItem("The Notebook", "66618f99bd2970002c6258fe"),
        sliderItem("Little Pumpkin", "66618f99bd2970002c625901"),
        sliderItem("Autumn Evening", "66618f99bd2970002c625903"),
      ],
    });

    this.addProp({
      type: "array",
      key: "rightSliderItems",
      displayer: "Right Slider",
      value: [
        sliderItem("Pumpkin Pie", "66618f99bd2970002c625900"),
        sliderItem("Coffee Time", "66618f99bd2970002c6258ff"),
        sliderItem("Autumn Stories", "66618f99bd2970002c6258fd"),
        sliderItem("Still Life", "66618f99bd2970002c625902"),
        sliderItem("Boooo!", "66618f99bd2970002c625906"),
      ],
    });

    this.addProp({
      type: "object",
      key: "arrows",
      displayer: "Arrows",
      value: [
        {
          type: "media",
          key: "leftIcon",
          displayer: "Left Slider Arrow Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "HiOutlineChevronDown",
          },
        },
        {
          type: "media",
          key: "rightIcon",
          displayer: "Right Slider Arrow Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "HiOutlineChevronUp",
          },
        },
      ],
    });

    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );

    this.leftSliderRef = React.createRef();
    this.rightSliderRef = React.createRef();
    this.isPhone = false;
  }

  componentDidMount() {
    super.componentDidMount?.();

    if (this.containerRef.current) {
      this.resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          const width = entries[0].contentRect.width;
          const isPhone = width <= 1024;
          if (this.isPhone !== isPhone) {
            this.isPhone = isPhone;
            this.forceUpdate();
          }
        }
      });
      this.resizeObserver.observe(this.containerRef.current);
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount?.();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  static getName(): string {
    return "Hero Section 12";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  renderSliderItem(item: SliderItem, index: number, showOverlay: boolean) {
    const hasImage = this.hasMedia(item.media);
    const hasLogo = this.hasMedia(item.logo);
    const isSubtitleExist = this.castToString(item.subtitle);
    const isTitleExist = this.castToString(item.title);
    const isDescriptionExist = this.castToString(item.description);
    return (
      <div key={index} className={this.decorateCSS("slider-item")}>
        {hasImage && (
          <div className={this.decorateCSS("image-overlay-container")}>
            <Base.Media className={this.decorateCSS("slider-item-image")} value={this.withVideoSettings(item.media)} />
            {showOverlay && <div className={this.decorateCSS("image-overlay")} />}
          </div>
        )}
        {(hasLogo || isSubtitleExist || isTitleExist || isDescriptionExist) && (
          <Base.VerticalContent
            className={`${this.decorateCSS("slider-item-content")} ${!hasImage ? this.decorateCSS("no-image-text") : ""}`}
          >
            {hasLogo && (
              <Base.Media
                value={item.logo}
                className={`${this.decorateCSS("logo")} ${item.logo.type == "image" ? this.decorateCSS("logo-image") : ""}`}
              />
            )}
            {isSubtitleExist && (
              <Base.SectionSubTitle className={this.decorateCSS("slider-item-subtitle")}>{item.subtitle}</Base.SectionSubTitle>
            )}
            {isTitleExist && (
              <ComposerLink path={item.url}>
                <Base.SectionTitle className={this.decorateCSS("slider-item-text")}>{item.title}</Base.SectionTitle>
              </ComposerLink>
            )}
            {isDescriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("slider-item-description")}>
                {item.description}
              </Base.SectionDescription>
            )}
          </Base.VerticalContent>
        )}
      </div>
    );
  }

  render() {
    const isVertical = !this.isPhone;
    const arrows = this.castToObject<Arrows>("arrows");
    const hasLeftIcon = this.hasMedia(arrows?.leftIcon);
    const hasRightIcon = this.hasMedia(arrows?.rightIcon);
    const sliderSettings = this.transformSliderValues(this.getPropValue("settings"));

    const settings = {
      ...sliderSettings,
      vertical: isVertical,
      verticalSwiping: isVertical,
      swipe: true,
    };

    const decorateIcon = { className: this.decorateCSS("icon") };
    const leftSliderItems = this.castToObject<SliderItem[]>("leftSliderItems");
    const rightSliderItems = this.castToObject<SliderItem[]>("rightSliderItems");

    const showOverlay = this.getPropValue("overlay");

    const leftSliderSettings = {
      ...settings,
      arrows: !!sliderSettings.arrows && hasLeftIcon,
      beforeChange: () => {
        if (rightSliderItems.length > 0) {
          this.rightSliderRef.slickPrev();
        }
      },
      prevArrow: (
        <LeftSliderArrow
          givenClass={this.decorateCSS("left-slider-button")}
          customFunction={() => {
            if (rightSliderItems.length > 0) {
              this.rightSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={arrows.leftIcon}
        />
      ),
      nextArrow: (
        <LeftSliderArrow
          givenClass={this.decorateCSS("left-slider-button")}
          customFunction={() => {
            if (rightSliderItems.length > 0) {
              this.rightSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={arrows.leftIcon}
        />
      ),
    };

    const rightSliderSettings = {
      ...settings,
      arrows: !!sliderSettings.arrows && hasRightIcon,
      beforeChange: () => {
        if (leftSliderItems.length > 0) {
          this.leftSliderRef.slickPrev();
        }
      },
      prevArrow: (
        <RightSliderArrow
          givenClass={this.decorateCSS("right-slider-button")}
          customFunction={() => {
            if (leftSliderItems.length > 0) {
              this.leftSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={arrows.rightIcon}
        />
      ),
      nextArrow: (
        <RightSliderArrow
          givenClass={this.decorateCSS("right-slider-button")}
          customFunction={() => {
            if (leftSliderItems.length > 0) {
              this.leftSliderRef.slickPrev();
            }
          }}
          decorateIcon={decorateIcon}
          icon={arrows.rightIcon}
        />
      ),
    };

    return (
      <div className={this.decorateCSS("container")} ref={this.containerRef}>
        <div className={this.decorateCSS("max-content")}>
          {this.isPhone && !!sliderSettings.arrows && (hasLeftIcon || hasRightIcon) && (
            <div className={this.decorateCSS("mobile-slider-buttons")}>
              <div
                className={this.decorateCSS("left-slider-button")}
                onClick={() => {
                  if (leftSliderItems.length > 0) {
                    this.leftSliderRef.slickNext();
                  }
                  if (rightSliderItems.length > 0) {
                    this.rightSliderRef.slickNext();
                  }
                }}
              >
                {hasLeftIcon && <Base.Media value={arrows.leftIcon} {...decorateIcon} />}
              </div>
              <div
                className={this.decorateCSS("right-slider-button")}
                onClick={() => {
                  if (leftSliderItems.length > 0) {
                    this.leftSliderRef.slickNext();
                  }
                  if (rightSliderItems.length > 0) {
                    this.rightSliderRef.slickPrev();
                  }
                }}
              >
                {hasRightIcon && <Base.Media value={arrows.rightIcon} {...decorateIcon} />}
              </div>
            </div>
          )}

          <div className={this.decorateCSS("slider-container")}>

            {leftSliderItems.length > 0 && (
              <ComposerSlider
                key={`left-slider-${isVertical ? 'vertical' : 'horizontal'}`}
                className={`${this.decorateCSS("left-slider")}
              ${
                rightSliderItems.length < 1 &&
                this.decorateCSS("no-slider-items")
              }`}
                ref={(slider: any) => (this.leftSliderRef = slider)}
                {...leftSliderSettings}
              >
                {leftSliderItems.map((item: SliderItem, index: number) => this.renderSliderItem(item, index, showOverlay))}
              </ComposerSlider>
            )}

            {rightSliderItems.length > 0 && (
              <ComposerSlider
                key={`right-slider-${isVertical ? 'vertical' : 'horizontal'}`}
                className={`${this.decorateCSS("right-slider")}
              ${
                leftSliderItems.length < 1 &&
                this.decorateCSS("no-slider-items")
              }`}
                ref={(slider: any) => (this.rightSliderRef = slider)}
                {...rightSliderSettings}
              >
                {rightSliderItems.map((item: SliderItem, index: number) => this.renderSliderItem(item, index, showOverlay))}
              </ComposerSlider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function LeftSliderArrow(props?: any) {
  const { onClick, customFunction, icon } = props;

  return (
    <div
      className={props.givenClass}
      onClick={() => {
        onClick();
        customFunction();
      }}
    >
      <Base.Media value={icon} {...props.decorateIcon} />
    </div>
  );
}

function RightSliderArrow(props?: any) {
  const { onClick, customFunction, icon } = props;

  return (
    <div
      className={props.givenClass}
      onClick={() => {
        onClick();
        customFunction();
      }}
    >
      <Base.Media value={icon} {...props.decorateIcon} />
    </div>
  );
}

export default HeroSection12;

