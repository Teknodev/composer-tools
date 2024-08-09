import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
type IMessages = {
  title: JSX.Element;
  description?: JSX.Element ;
  icon?: string;
  backgroundColor: string;
};

type FirstItemType = {
  title:JSX.Element;
  button:JSX.Element;
  backgroundImage:string;
}

class Feature12 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "upperTitle",
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
      key: "titleBackingText",
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
          type: "image",
          key: "backgroundImage",
          displayer: "Background Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a356692f8a5b002ce695ac?alt=media",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "messageCard",
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

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
      max:4
    });
  }

  getName(): string {
    return "Feature 12";
  }

  render() {
    const upperTitle = this.getPropValue("upperTitle");
    const title = this.getPropValue("title");
    const titleBackingText = this.getPropValue("titleBackingText");
    const itemCount = this.getPropValue("itemCount");
    const messageCards = this.castToObject<IMessages[]>("messageCard");
    const firstItem = this.castToObject<FirstItemType>("message");
    const firstCardTitle = this.castToString(firstItem.title);
    const buttonText =this.castToString(firstItem.button);
    const backgroundImage = firstItem.backgroundImage;
   
    return (
      <div className={this.decorateCSS("container")}>
        {upperTitle&&
        <div className={this.decorateCSS("upper-title")}>
          {upperTitle}
        </div>
  }
      {titleBackingText&&
        <div className={this.decorateCSS("shadow-header-title")}>
          {titleBackingText}
        </div>
  }
      {title&&
        <div className={this.decorateCSS("header-title")}>
          {title}
        </div>
  }
        <div className={this.decorateCSS("max-content")}>
          
          <div className={this.decorateCSS("content")}>
            {(firstCardTitle || buttonText ) &&
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
              }
  
           

            {messageCards.map((message: IMessages, index: number) => {
              const shouldRender = this.castToString(message.description) || this.castToString(message.title);
                if(!shouldRender)
                  return null;
                else
                return (
                 
                  <div
                    className={`
                      ${this.decorateCSS("card-item-count")}
                      ${this.decorateCSS(`card-item-${index % 3}`)}
                    `}
                    style={{
                      width: `${100 / itemCount}%`,
                      
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
             
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature12;
