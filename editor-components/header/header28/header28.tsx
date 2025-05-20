import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header28.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Header28 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "play_icon",
      displayer: "Play Icon",
      value: "IoPlay",
    });
    this.addProp({
      type: "icon",
      key: "close_icon",
      displayer: "Close Icon",
      value: "IoCloseOutline",
    });
    this.addProp({
      type: "boolean",
      key: "textAnimation",
      displayer: "Text Animation",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/dark-poison-large-1400x700.jpg",
            },
            {
              type: "video",
              key: "video",
              displayer: "Video Embeded Link",
              value:
                "https://www.youtube.com/embed/UvAIMAlm48c?si=lSauLnwvWi-ezEZV",
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
              displayer: "Sub Title",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/front-lines-1400x700.jpg",
            },
            {
              type: "video",
              key: "video",
              displayer: "Video",
              value:
                "https://www.youtube.com/embed/UvAIMAlm48c?si=lSauLnwvWi-ezEZV",
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
              displayer: "Sub Title",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://viseo.progressionstudios.com/wp-content/uploads/2017/04/dep-space-1400x700.jpg",
            },
            {
              type: "video",
              key: "video",
              displayer: "Video",
              value:
                "https://www.youtube.com/embed/UvAIMAlm48c?si=lSauLnwvWi-ezEZV",
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
              displayer: "Sub Title",
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
    return "Header 28";
  }

  render() {
    const slides = this.getPropValue("slider");

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 800,
      autoplay: true,
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
      <div className={this.decorateCSS("container")}>
        <ComposerSlider
          {...settings}
          className={this.decorateCSS("carousel")}
        >
          {slides.map((item: any, indexSlider: number) => (
            <div className={this.decorateCSS("content")} key={indexSlider}>
              {item.getPropValue("image") && (
                <div className={this.decorateCSS("image-box")}>
                  <img
                    className={this.decorateCSS("bg-img")}
                    src={item.getPropValue("image")}
                    alt={"slider-image"}
                  />
                </div>
              )}

              {item.getPropValue("video") && (
                <div
                  className={`${this.decorateCSS("video-player-container")} ${this.getComponentState("play-video") &&
                    this.decorateCSS("video-player")
                    }`}
                  onClick={() => {
                    this.setComponentState("play-video", false);
                  }}
                >
                  {this.getComponentState("play-video") && (
                    <iframe
                      className={this.decorateCSS("video-iframe")}
                      width="70%"
                      height="60%"
                      src={item.getPropValue("video")}
                      title="Video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  )}
                  {this.getPropValue("close_icon") && (
                    <div
                      className={this.decorateCSS("close-button")}
                      onClick={() =>
                        this.setComponentState("play-video", false)
                      }
                    >
                      <ComposerIcon
                        propsIcon={{
                          className: this.decorateCSS("close-button-icon"),
                        }}
                        name={this.getPropValue("close_icon")}
                      />
                    </div>
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
                  <ComposerIcon name={this.getPropValue("play_icon")} />
                </div>
              )}
              <div
                className={`${this.decorateCSS("slide-content")}
                ${!this.getComponentState("animation-active") &&
                  this.decorateCSS("visible")
                  }`}
                onClick={
                  item.getPropValue("video")
                    ? () => this.setComponentState("play-video", true)
                    : () => { }
                }
              >
                {this.castToString(item.getPropValue("tag")) && (
                  <span
                    className={`${this.decorateCSS("tag")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      }`}
                  >
                    {item.getPropValue("tag")}
                  </span>
                )}
                {this.castToString(item.getPropValue("title")) && (
                  <h1
                    className={`${this.decorateCSS("title")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      }`}
                  >
                    {item.getPropValue("title")}
                  </h1>
                )}
                {this.castToString(item.getPropValue("sub_title")) && (
                  <h3
                    className={`${this.decorateCSS("sub_title")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      }`}
                  >
                    {item.getPropValue("sub_title")}
                  </h3>
                )}
                {this.castToString(item.getPropValue("description")) && (
                  <p
                    className={`${this.decorateCSS("description")} ${item.getPropValue("image") &&
                      this.decorateCSS("withImage")
                      }`}
                  >
                    {item.getPropValue("description")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </ComposerSlider>
      </div>
    );
  }
}

export default Header28;
