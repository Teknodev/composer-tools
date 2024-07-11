import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type IMessages = {
  title: string;
  button: string;
  description?: string;
  icon?: string;
  iconColor?: string;
  backgroundColor: string;
};

class Feature12 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "upper-title",
      displayer: "Upper Title",
      value: "BEST FEATURES",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "SERVICES",
    });
    this.addProp({
      type: "string",
      key: "title-backing-text",
      displayer: "Title Backing Text",
      value: "services",
    });
    this.addProp({
      type: "object",
      key: "message",
      displayer: "Message",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Best Of Our Features",
        },
        {
          type: "string",
          key: "button",
          displayer: "Button",
          value: "SEE ALL SERVICES",
        },
        {
          type: "string",
          key: "background-image",
          displayer: "background",
          value: "https://avo.themescamp.com/wp-content/uploads/2020/09/1-2.jpg",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "message-card",
      displayer: "Message Card",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphic Clean Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Consectetur adipiscing elit",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "PiPaintBucketFill",
            },
            {
              type: "color",
              key: "backgroundColor",
              displayer: "Background Color",
              value: "#181b21",
            },
          ],
        },
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Web & Mobile Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Sed do eiusmod tempor incididunt.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoPhonePortrait",
            },
            {
              type: "color",
              key: "backgroundColor",
              displayer: "Background Color",
              value: "#1a1e25",
            },
          ],
        },
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Social Media Marketing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Uttt labore et dolore magna aliqua.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "HiPresentationChartLine",
            },
            {
              type: "color",
              key: "backgroundColor",
              displayer: "Background Color",
              value: "#20242c",
            },
          ],
        },
      ],
    });

    const val = this.getPropValue("itemCount") > 5 ? 5 : 4;
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: val,
    });
  }

  getName(): string {
    return "Feature 12";
  }

  render() {
    const upperTitle = this.getPropValue("upper-title");
    const title = this.getPropValue("title");
    const titleBackingText = this.getPropValue("title-backing-text");
    const itemCount = this.getPropValue("itemCount");
    const messageCards = this.castToObject<IMessages[]>("message-card");
    const firstItem = this.getPropValue("message");
    const firstCardTitle = firstItem[0].value;
    const buttonText = firstItem[1].value;
    const backgroundImage = firstItem[2].value;
    if (itemCount > 5) {
      this.setProp("itemCount", 5);
    }

    return (
      <div className={this.decorateCSS("container")} style={{ paddingBottom: "0px" }}>
        <div className={this.decorateCSS("upper-title")} style={{ fontSize: "1.2em", textAlign: "center" }}>
          {upperTitle}
        </div>
        <div className={this.decorateCSS("shadow-header-title")} style={{ fontSize: "12.5em", textAlign: "center", marginBottom: "20px" }}>
          {titleBackingText}
        </div>
        <div className={this.decorateCSS("header-title")} style={{ fontSize: "5em", textAlign: "center", marginTop: "35px" }}>
          {title}
        </div>
        <div className={this.decorateCSS("max-content")} style={{ marginTop: "20px" }}>
          <div className={this.decorateCSS("content")}>
            {firstItem.length > 0 && (
              <div
                className={this.decorateCSS("card-item-first")}
                style={{
                  width: `${100 / itemCount}%`,
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url(${backgroundImage})`,
                 
                }}
              >
                <div className={this.decorateCSS("blurry-background")}></div>
                <h3 className={this.decorateCSS("title")}>{firstCardTitle}</h3>
                <button className={this.decorateCSS("button")}>
                  {buttonText}
                </button>
              </div>
            )}

            {messageCards.map((message: IMessages, index: number) => {
              const shouldRender = message.title || message.description || message.button || message.icon;

              if (shouldRender) {
                return (
                  <div
                    className={`
                      ${this.decorateCSS("card-item-count")}
                      ${this.decorateCSS(`card-item-${index % 3}`)}
                    `}
                    style={{
                      width: `${100 / itemCount}%`,
                      marginBottom: "100px",
                      height: "50vh",
                      backgroundColor: message.backgroundColor,
                    }}
                    key={index}
                  >
                    <div className={this.decorateCSS("message")}>
                      <div className={this.decorateCSS("Icon")}>
                        <ComposerIcon propsIcon={{ className: this.decorateCSS("Icon") }} name={message.icon} />
                      </div>
                      <h3 className={this.decorateCSS("title")}>{message.title}</h3>
                      <p className={this.decorateCSS("long-text")}>{message.description}</p>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature12;
