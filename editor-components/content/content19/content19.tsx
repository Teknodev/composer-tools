import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseContent } from "../../EditorComponent";
import styles from "./content19.module.scss";

class Content19 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title-text",
      displayer: "Above description",
      value: "We Think About Reflections On The Wisdom From The Planets"
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Donec orci enim, vulputate et rutrum id, varius at nibh. Sed sagittis feugiat augue maximus hendrerit. Phasellus volutpat dictum sem, sed dignissim diam sodales eu. Suspendisse ut lorem posuere, tincidunt leo a, ultricies odio. Nulla porta sagittis turpis vel tristique. Curabitur ac maximus est. Proin placerat mauris eu eros varius imperdiet id at ligula."
    });
    this.addProp({
      type: "video",
      displayer: "Video Link",
      key: "video",
      value: "https://www.youtube.com/embed/yB7MtnWmYzI"
    });
  
    this.addProp({
      type:"image",
      key:"author-icon",
      displayer:"Author Image",
      value:"https://kamleshyadav.com/wp/astrologer/demo8/wp-content/uploads/sites/9/2021/12/about-user.svg"
    });
    this.addProp({
      type: "string",
      key: "author-name",
      displayer: "Author Name",
      value: "Tarot &amp; Horoscope"
    });
    this.addProp({
      type: "string",
      key: "author-description",
      displayer: "Author Description",
      value: "15 years of Experience with"
    });
    this.addProp({
      type:"image",
      key:"video-image",
      displayer:"Video Image",
      value:"https://kamleshyadav.com/wp/astrologer/demo8/wp-content/uploads/sites/9/2021/09/video-bg.jpg"
    });

    this.addProp({
      type:"string",
      key:"button-text",
      displayer:"Button Text",
      value:"Read More"
    });
    this.addProp({
      type:"page",
      key:"button-url",
      displayer:"Button URL",
      value:"https://google.com"
    });
    this.addProp({
      type:"image",
      key:"play-icon",
      displayer:"Play Image",
      value:"	https://kamleshyadav.com/wp/astrologer/demo8/wp-content/uploads/sites/9/2021/09/play.png"

    })

    this.setComponentState("is_video_visible", false);

  }

  getName(): string {
    return "Content 19";
  }
  render() {
    const videoImage = this.getPropValue("video-image");
    const authorImage=this.getPropValue("author-icon");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("video-part")}>
              <img alt="" src={videoImage} className={this.decorateCSS("video-images")} />
              {videoImage && (
                <div className={this.decorateCSS("play-part")}>
                  <span className="as-play" onClick={() => {
                    this.setComponentState("is_video_visible", true);
                  }}>
                    <div className={this.decorateCSS("play-container")}>
                      <div className={this.decorateCSS("outer-circle")}></div>
                      <div className={this.decorateCSS("inner-circle")}></div>
                      <img alt="" src={this.getPropValue("play-icon")} className={this.decorateCSS("play-image")}></img>
                    </div>
                  </span>
                </div>
              )}
            </div>
            <div className={this.decorateCSS("text-side")}>
              <p className={this.decorateCSS("title-text")}>{this.getPropValue("title-text")}</p>
              <h1 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h1>
              <div className={this.decorateCSS("description-author")}>
                {authorImage &&(
                  <div className={this.decorateCSS("author-icon")}>
                   <img alt="" src={this.getPropValue("author-icon")} className={this.decorateCSS("author-icon-photo")}></img>
                  </div>
                )}
                <div className={this.decorateCSS("author-info")}>
                  <p className={"author-description-text"}>{this.getPropValue("author-description")}</p>
                  <h1 className={"author--text"}>{this.getPropValue("author-name")}</h1>
                </div>
              </div>
              <a className={this.decorateCSS("button")} href={this.getPropValue("button-url")}>{this.getPropValue("button-text")}</a>
            </div>
          </div>
          {this.getComponentState("is_video_visible") && (
            <div className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
              <video onClick={(event) => event.stopPropagation()} controls className={this.decorateCSS("player")} src={this.getPropValue("video")}></video>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content19;