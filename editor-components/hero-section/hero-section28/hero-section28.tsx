import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section28.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "composer-tools/composer-base-components/base/base";

class HeroSection28 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "play_icon",
      displayer: "Play Icon",
      value: { type: "icon", name: "IoPlay" },
      additionalParams: { availableTypes: ["icon", "image"] },
    });
    this.addProp({
      type: "media",
      key: "close_icon",
      displayer: "Close Icon",
      value: { type: "icon", name: "IoCloseOutline" },
      additionalParams: { availableTypes: ["icon", "image"] },
    });
    this.addProp({
      type: "boolean",
      key: "textAnimation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: { type: "image", url: "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/dark-poison-large-1400x700.jpg" },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "media",
              key: "video",
              displayer: "Video",
              value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151" },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "string",
              key: "tag",
              displayer: "Tag",
              value: "ACTION",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dark Poison",
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Subtitle",
              value: "Official Season 1 Trailer",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "NOW AVAILABLE ON STREAMING SERVICES",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: { type: "image", url: "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/front-lines-1400x700.jpg" },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "media",
              key: "video",
              displayer: "Video",
              value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151" },
              additionalParams: { availableTypes: ["video"] },
            },
            {
              type: "string",
              key: "tag",
              displayer: "Tag",
              value: "ACTION",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Frontlines",
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Subtitle",
              value: "Official Season 1 Trailer",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "NOW AVAILABLE ON STREAMING SERVICES",
            },
          ],
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "media",
              key: "logo",
              displayer: "Logo",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: { type: "image", url: "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/dep-space-1400x700.jpg" },
              additionalParams: { availableTypes: ["image", "video"] },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "media",
              key: "video",
              displayer: "Video",
              value: { type: "video", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a35bbd2970002c626c45?alt=media&timestamp=1719483639151" },
              additionalParams: { availableTypes: ["video"] },
            },
            {
              type: "string",
              key: "tag",
              displayer: "Tag",
              value: "TECHNOLOGY",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Deep Space",
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Subtitle",
              value: "Worldwide Premiere",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "NOW AVAILABLE ON STREAMING SERVICES",
            },
          ],
        },
      ],
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("active-index", 0);
    this.setComponentState("play-video", false);
  }
  static getName(): string {
    return "Hero Section 28";
  }

  render() {
    const slides = this.getPropValue("slider");

    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 800,
      autoplay: this.getPropValue("autoplay") && !this.getComponentState("play-video"),
      autoplaySpeed: 3000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: `slick-dots ${this.decorateCSS("customDots")}`,
      fade: true,
      customPaging: (i: any) => (
        <div
          className={`${this.decorateCSS("dot")} ${this.getComponentState("active-index") == i &&
            this.decorateCSS("activeDot")
            } ${slides[this.getComponentState("active-index")].getPropValue("image") && this.decorateCSS("withImageDot")}`}
        />
      ),
      afterChange: (index: number) => {
        this.setComponentState("play-video", false);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex === newIndex) return;
        if (this.getPropValue("textAnimation"))
          this.setComponentState("animation-active", true);
        setTimeout(() => {
          this.setComponentState("animation-active", false);
        }, 400)
        this.setComponentState("play-video", false);
        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("active-index", newIndex);
      },
    };

    return (
      <div className={`${this.decorateCSS("container")} ${this.getComponentState("play-video") && this.decorateCSS("with-overlay")}`}>
        <ComposerSlider
          {...settings}
          className={this.decorateCSS("carousel")}
        >
          {slides.map((item: any, indexSlider: number) => (
            <div className={this.decorateCSS("content")} key={indexSlider}>
              {item.getPropValue("image") && (
                <div className={this.decorateCSS("image-box")}>
                  <Base.Media
                    className={this.decorateCSS("bg-img")}
                    value={item.getPropValue("image")}
                  />
                  {item.getPropValue("overlay") && (
                    <div className={this.decorateCSS("image-overlay")} />
                  )}
                </div>
              )}

              {this.getPropValue("play_icon") && (
                <div
                  className={`${this.decorateCSS("play-button")} ${item.getPropValue("image") && this.decorateCSS("withImage")
                    }`}
                  onClick={
                    item.getPropValue("video")
                      ? () => this.setComponentState("play-video", true)
                      : () => { }
                  }
                >
                  <Base.Media value={this.getPropValue("play_icon")} />
                </div>
              )}
              <div
                className={`${this.decorateCSS("slide-content")}
                ${!this.getComponentState("animation-active") &&
                  this.decorateCSS("visible")
                  }`}
                onClick={
                  item.getPropValue("video") ? () => this.setComponentState("play-video", true)
                    : () => { }
                }
              >
                {this.castToString(item.getPropValue("tag")) && (
                  <>
                    {item.getPropValue("logo") && (
                      <Base.Media
                        className={this.decorateCSS("logo")}
                        value={item.getPropValue("logo")}
                      />
                    )}
                    <Base.H5
                      className={`${this.decorateCSS("tag")} ${item.getPropValue("image") &&
                        this.decorateCSS("withImage")
                        } ${!item.getPropValue("image") && this.decorateCSS("noImage")} ${this.getPropValue("line") && this.decorateCSS("hasLine")}`}
                    >
                      {item.getPropValue("tag")}
                    </Base.H5>
                  </>
                )}
                {this.castToString(item.getPropValue("title")) && (
                  <Base.H1
                    className={`${this.decorateCSS("title")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      } ${!item.getPropValue("image") && this.decorateCSS("noImage")}`}
                  >
                    {item.getPropValue("title")}
                  </Base.H1>
                )}
                {this.castToString(item.getPropValue("sub_title")) && (
                  <Base.H3
                    className={`${this.decorateCSS("sub_title")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      } ${!item.getPropValue("image") && this.decorateCSS("noImage")}`}
                  >
                    {item.getPropValue("sub_title")}
                  </Base.H3>
                )}
                {this.castToString(item.getPropValue("description")) && (
                  <Base.P
                    className={`${this.decorateCSS("description")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      } ${!item.getPropValue("image") && this.decorateCSS("noImage")}`}
                  >
                    {item.getPropValue("description")}
                  </Base.P>
                )}
              </div>
            </div>
          ))}
        </ComposerSlider>
        {this.getComponentState("play-video") && slides[this.getComponentState("active-index")]?.getPropValue("video") && (
          <Base.Overlay
            isVisible={this.getComponentState("play-video")}
            onClick={() => this.setComponentState("play-video", false)}
            className={this.decorateCSS("overlay")}
          >
            <div 
              className={this.decorateCSS("video-container")}
              onClick={(e) => e.stopPropagation()}
            >
              <Base.Media
                autoPlay
                className={this.decorateCSS("video-iframe")}
                value={slides[this.getComponentState("active-index")].getPropValue("video")}
              />
            </div>
            {this.getPropValue("close_icon") && (
              <div
                className={this.decorateCSS("close-button")}
                onClick={() => this.setComponentState("play-video", false)}
              >
                <Base.Media
                  className={this.decorateCSS("close-button-icon")}
                  value={this.getPropValue("close_icon")}
                />
              </div>
            )}
          </Base.Overlay>
        )}
      </div>
    );
  }
}

export default HeroSection28;

