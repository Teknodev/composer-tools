import * as React from "react";
import styles from "./content12.module.scss";
import { BaseContent } from "../../EditorComponent";


class Content12 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Play me here",
    });
    this.addProp({
      type: "video",
      displayer: "Video",
      key: "video",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e77bd0181a1002c334f66?alt=media&timestamp=1719564238038"
    });

    this.addProp({
      type: "image",
      displayer: "Cover image of video",
      key: "cover-image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ba4ebd2970002c628732?alt=media&timestamp=1719563672206"
    });

    this.setComponentState("is_video_visible", false);

  }

  getName(): string {
    return "Content-12";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("cover-image")})`,
        }}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("title")} onClick={() => {
            this.setComponentState("is_video_visible", true)
          }}>
            <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
          </div>
          {this.getComponentState("is_video_visible") && <div className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
            <video onClick={(event) => event.stopPropagation()} controls className={this.decorateCSS("player")} src={this.getPropValue("video")}></video>
          </div>}
        </div>
      </div>
    );
  }
}

export default Content12;
