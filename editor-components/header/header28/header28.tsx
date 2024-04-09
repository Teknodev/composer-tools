import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header28.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class HeaderComponent28 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrFormPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrFormNext",
    });
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
              type: "string",
              key: "video",
              displayer: "Video Embeded Link",
              value: "https://www.youtube.com/embed/UvAIMAlm48c?si=lSauLnwvWi-ezEZV",
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
              type: "string",
              key: "video",
              displayer: "Video",
              value: "https://www.youtube.com/embed/UvAIMAlm48c?si=lSauLnwvWi-ezEZV",
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
              type: "string",
              key: "video",
              displayer: "Video",
              value: "https://www.youtube.com/embed/UvAIMAlm48c?si=lSauLnwvWi-ezEZV",
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
    this.setComponentState("display-none", true);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("video-player-ref", React.createRef());
    this.setComponentState("play-video", false);
  }
  getName(): string {
    return "Header 28";
  }

  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("click", this.handleDocumentClick, true); // Using capture phase for broader catching
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("click", this.handleDocumentClick, true);
  }

  handleDocumentClick = (event: any) => {
    if (
      this.getComponentState("video-player-ref").current &&
      !this.getComponentState("video-player-ref").current.contains(event.target)
    ) {
      this.setComponentState("play-video", false);
    }
  };

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: `slick-dots ${this.decorateCSS("myCustomDots")}`,
      fade: true,
      afterChange: (index: number) => {
        this.setComponentState("animation-active", false);
        this.setComponentState("display-none", true);
        this.setComponentState("play-video", false);
      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;
        this.setComponentState("animation-active", true);
        this.setComponentState("play-video", false);
        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("display-none", false);

        this.setComponentState("active-index", newIndex);
      },
    };

    return (
      <div className={this.decorateCSS("container")}>
        <ComposerSlider
          {...settings}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("carousel")}
        >
          {this.getPropValue("slider").map((item: any, indexSlider: number) => (
            <div className={this.decorateCSS("content")} key={indexSlider}>
              <img src={item.getPropValue("image")} />
              <div
                className={`${this.decorateCSS("video-player-container")} ${
                  this.getComponentState("play-video") && this.decorateCSS("video-player")
                }`}
              >
                <iframe
                  width="70%"
                  height="60%"
                  src={item.getPropValue("video")}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div
                  className={this.decorateCSS("close-button")}
                  onClick={() => this.setComponentState("play-video", false)}
                >
                  <ComposerIcon name={this.getPropValue("close_icon")} />
                </div>
              </div>
              <div
                className={this.decorateCSS("play-button")}
                onClick={() => this.setComponentState("play-video", true)}
              >
                <ComposerIcon name={this.getPropValue("play_icon")} />
              </div>
              <div
                className={`${this.decorateCSS("slide-content")}  ${
                  !this.getComponentState("animation-active") &&
                  this.decorateCSS("visible")
                }`}
              >
                <span className={this.decorateCSS("tag")}>
                  {item.getPropValue("tag")}
                </span>
                <h1 className={this.decorateCSS("title")}>
                  {item.getPropValue("title")}
                </h1>
                <h3 className={this.decorateCSS("sub_title")}>
                  {item.getPropValue("sub_title")}
                </h3>
                <p className={this.decorateCSS("description")}>
                  {item.getPropValue("description")}
                </p>
              </div>
              <ComposerIcon
                name={this.getPropValue("next_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("next-icon")} ${this.decorateCSS(
                    "arrow"
                  )} ${
                    !this.getComponentState("display-none") &&
                    this.decorateCSS("un-visible")
                  }`,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext();
                  },
                }}
              />
              <ComposerIcon
                name={this.getPropValue("prev_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("prev-icon")} ${this.decorateCSS(
                    "arrow"
                  )}`,
                  size: 40,
                  onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev();
                  },
                }}
              />
            </div>
          ))}
        </ComposerSlider>
      </div>
    );
  }
}

export default HeaderComponent28;
