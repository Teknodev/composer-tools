import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content10.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Content10 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      displayer: "Video",
      key: "video",
      value: "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
    });

    this.addProp({
      type: "image",
      displayer: "Cover image of video",
      key: "cover_image",
      value: "https://images.pexels.com/photos/4448847/pexels-photo-4448847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    });

    this.addProp({
      type: "icon",
      displayer: "Icon of play button",
      key: "play_icon",
      value: "FaPlay"
    });

    this.addProp({
      type: "array",
      displayer: "Cards",
      key: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "TbChartHistogram"
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Future One"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "EFECTIVITY FIRST"
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi."
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GrClose"
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Future Two"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "NO SIDE EFFECT"
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi."
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GiFruitBowl"
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Future Three"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ORGANIC PRODUCT"
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi."
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GiScooter"
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Future Four"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "QUICK DELEVARY"
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi."
            }
          ]
        }
      ]
    })

    this.setComponentState("is_video_visible", false);


  }

  getName(): string {
    return "Content 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("cards")}>
            {this.getPropValue("cards").map((card: any, index: number) => <div key={index} className={this.decorateCSS("card")}>
              <div className={this.decorateCSS("icon-box")}>
                <ComposerIcon name={card.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
              </div>
              <div className={this.decorateCSS("labels")}>
                <span className={this.decorateCSS("subtitle")}>{card.getPropValue("subtitle")}</span>
                <h1 className={this.decorateCSS("title")}>{card.getPropValue("title")}</h1>
                <p className={this.decorateCSS("description")}>{card.getPropValue("description")}</p>
              </div>
            </div>)}
          </div>
          <div className={this.decorateCSS("video-container")}>
            <img className={this.decorateCSS("image")} src={this.getPropValue("cover_image")} alt="Cover image" />

            <div className={this.decorateCSS("play-icon-box")} onClick={() => {
              this.setComponentState("is_video_visible", true)
            }}>
              <ComposerIcon name={this.getPropValue("play_icon")} propsIcon={{ className: this.decorateCSS("play-icon") }} />
            </div>
          </div>
          {this.getComponentState("is_video_visible") && <div className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
            <video onClick={(event) => event.stopPropagation()} controls className={this.decorateCSS("player")} src={this.getPropValue("video")}></video>
          </div>}
        </div>
      </div>
    );
  }
}

export default Content10;
