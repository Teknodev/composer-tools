import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type IMessages = {
  title: JSX.Element;
  description?: JSX.Element;
  icon?: string;
  backgroundColor: string;
};

type FirstItemType = {
  title: JSX.Element;
  button: JSX.Element;
  backgroundImage: string;
  overlay: boolean;
};

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
      displayer: "Behind the Title",
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
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a356692f8a5b002ce695ac?alt=media",
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Blur Overlay",
          value: true,
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
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
      max: 4,
    });
  }

  getName(): string {
    return "Feature 12";
  }

  render() {
    const upperTitleExist = this.getPropValue("upperTitle", {
      as_string: true,
    });
    const titleExist = this.getPropValue("title", { as_string: true });
    const titleBackingTextExist = this.getPropValue("titleBackingText", {
      as_string: true,
    });

    const upperTitle = this.getPropValue("upperTitle");
    const title = this.getPropValue("title");
    const titleBackingText = this.getPropValue("titleBackingText");

    const itemCount = this.getPropValue("itemCount");

    const messageCards = this.castToObject<IMessages[]>("messageCard");
    const firstItem = this.castToObject<FirstItemType>("message");

    const firstCardTitleExist = this.castToString(firstItem.title);
    const buttonTextExist = this.castToString(firstItem.button);

    const backgroundImage = firstItem.backgroundImage;
    const overlay = firstItem.overlay;

    return (
      <div className={this.decorateCSS("container")}>
        <header className={this.decorateCSS("header")}>
          {upperTitleExist && (
            <div className={this.decorateCSS("upper-title")}>{upperTitle}</div>
          )}
          {titleBackingTextExist && (
            <div className={this.decorateCSS("shadow-header-title")}>
              {titleBackingText}
            </div>
          )}
          {titleExist && (
            <div className={this.decorateCSS("header-title")}>{title}</div>
          )}
        </header>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(firstCardTitleExist || buttonTextExist) && (
              <div
                className={this.decorateCSS("card-item-first")}
                style={{
                  width: `${100 / itemCount}%`,
                  backgroundImage: `${overlay ? "linear-gradient(color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%), color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%))," : ""} url(${backgroundImage})`,
                }}
              >
                {firstCardTitleExist && (
                  <h3 className={this.decorateCSS("title")}>
                    {firstItem.title}
                  </h3>
                )}
                {buttonTextExist && (
                  <button className={this.decorateCSS("button")}>
                    {firstItem.button}
                  </button>
                )}
              </div>
            )}

            {messageCards?.length > 0 &&
              messageCards.map((message: IMessages, index: number) => {
                const descExist = this.castToString(message.description);
                const titleExist = this.castToString(message.title);

                const shouldRender = descExist || titleExist;

                if (!shouldRender) return null;
                else
                  return (
                    <div
                      className={this.decorateCSS("card-item-count")}
                      style={{
                        width: `${100 / itemCount}%`,
                        backgroundColor: `color-mix(in srgb, var(--composer-html-background), var(--composer-font-color-primary) ${10 + (index % (itemCount - 1)) * 5}%)`,
                      }}
                      key={index}
                    >
                      {(message.icon || titleExist || descExist) && (
                        <div className={this.decorateCSS("message")}>
                          {message.icon && (
                            <div className={this.decorateCSS("Icon")}>
                              <ComposerIcon
                                propsIcon={{
                                  className: this.decorateCSS("Icon"),
                                }}
                                name={message.icon}
                              />
                            </div>
                          )}
                          {titleExist && (
                            <h3 className={this.decorateCSS("title")}>
                              {message.title}
                            </h3>
                          )}
                          {descExist && (
                            <p className={this.decorateCSS("long-text")}>
                              {message.description}
                            </p>
                          )}
                        </div>
                      )}
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
