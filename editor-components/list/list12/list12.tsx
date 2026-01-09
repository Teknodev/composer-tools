import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list12.module.scss";

import { Base } from "../../../composer-base-components/base/base";

class List12 extends BaseList {
  static getName(): string {
    return "List 12";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Background Media",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/683dbb7557d0a6002b5dbba8?alt=media&timestamp=1748876160309",
      },
      additionalParams: {
        availableTypes: ["image", "video"],
      },
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Simplifying Payments, Fast and Secure",
    });


    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "object",
      key: "box1",
      displayer: "Box 1",
      value: [
        {
          type: "media",
          key: "item",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          additionalParams: {
            availableTypes: ["image", "video", "icon"],
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Text 1",
          value:
            "Experience contactless payments with just a tap of your card or phone.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "box2",
      displayer: "Box 2",
      value: [
        {
          type: "media",
          key: "item",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1682511145669-a0b9d9c1dc21?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          additionalParams: {
            availableTypes: ["image", "video", "icon"],
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Text 2",
          value:
            "Accept payments anywhere with reliable and portable card readers.",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "box3",
      displayer: "Box 3",
      value: [
        {
          type: "media",
          key: "item",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          additionalParams: {
            availableTypes: ["image", "video", "icon"],
          },
        },
        {
          type: "string",
          key: "text",
          displayer: "Text 3",
          value: "Send and receive money instantly, no matter where you are.",
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });
    this.addProp({
      type: "boolean",
      key: "backgroundOverlay",
      displayer: "Background Overlay",
      value: false,
    });
  }

  render() {
    const box1 = this.castToObject("box1");
    const box2 = this.castToObject("box2");
    const box3 = this.castToObject("box3");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const box1IsIcon = box1?.item && box1.item.type === "icon";
    const box2IsIcon = box2?.item && box2.item.type === "icon";
    const box3IsIcon = box3?.item && box3.item.type === "icon";
    const backgroundMedia = this.getPropValue("image") as TypeMediaInputValue | null;
    const hasBackgroundMedia = !!backgroundMedia;
    const imageOverlay = this.getPropValue("overlay");
    const backgroundOverlay = this.getPropValue("backgroundOverlay");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {hasBackgroundMedia && (
          <Base.Media
            value={backgroundMedia as TypeMediaInputValue}
            className={`${this.decorateCSS("background-media")} ${this.decorateCSS("media-el")}`}
          />
        )}
        {backgroundOverlay && hasBackgroundMedia && (
          <div className={this.decorateCSS("background-overlay")} />
        )}
        <Base.MaxContent isFull className={`${this.decorateCSS("max-content")} ${this.decorateCSS("alignment-center")}`}>
          <div className={this.decorateCSS("boxes")}>
            <div className={this.decorateCSS("leftBox")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
              {box1.item && (
                <div className={`${this.decorateCSS("circle")} ${box1IsIcon && this.decorateCSS("no-circle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")} ${this.getPropValue("hoverAnimation").join(" ")}`}>
                  <Base.Media
                    className={`${this.decorateCSS("img")} ${this.decorateCSS("media-el")}`}
                    value={box1.item}
                  />
                  {imageOverlay && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )}
              {this.castToString(box1.text) && (
                <div className={this.decorateCSS("titles")}>
                  <Base.P className={`${this.decorateCSS("text1")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>{box1.text}</Base.P>
                </div>
              )}
            </div>
            <div className={this.decorateCSS("middleBox")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${hasBackgroundMedia && this.decorateCSS("transparent-bg")}`}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(this.getPropValue("title")) && (
                <Base.SectionTitle className={this.decorateCSS("section-wrapper")}>
                  <div className={`${this.decorateCSS("title")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>{this.getPropValue("title")}</div>
                </Base.SectionTitle>
              )}
              {this.castToString(description) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {box2.item && (
                <div className={`${this.decorateCSS("circle")} ${box2IsIcon && this.decorateCSS("no-circle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")} ${this.getPropValue("hoverAnimation").join(" ")}`}>
                  <Base.Media
                    className={`${this.decorateCSS("img")} ${this.decorateCSS("media-el")}`}
                    value={box2.item}
                  />
                  {imageOverlay && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )}
              {this.castToString(box2.text) && (
                <div className={this.decorateCSS("titles")}>
                  <Base.P className={`${this.decorateCSS("text2")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>{box2.text}</Base.P>
                </div>
              )}
            </div>

            <div className={this.decorateCSS("rightBox")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
              {box3.item && (
                <div className={`${this.decorateCSS("circle")} ${box3IsIcon && this.decorateCSS("no-circle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")} ${this.getPropValue("hoverAnimation").join(" ")}`}>
                  <Base.Media
                    className={`${this.decorateCSS("img")} ${this.decorateCSS("media-el")}`}
                    value={box3.item}
                  />
                  {imageOverlay && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )}
              {this.castToString(box3.text) && (
                <div className={this.decorateCSS("titles")}>
                  <Base.P className={`${this.decorateCSS("text3")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>{box3.text}</Base.P>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default List12;
