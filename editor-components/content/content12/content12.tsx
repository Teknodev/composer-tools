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
      value: "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
    });

    this.addProp({
      type: "image",
      displayer: "Cover image of video",
      key: "cover-image",
      value: "https://stockholm36.qodeinteractive.com/wp-content/uploads/2020/05/h-video-01.jpg"
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
