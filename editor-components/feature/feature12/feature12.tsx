import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  title: JSX.Element;
  description: JSX.Element;
  icon: string;
};

type FirstItem = {
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
      key: "behindTitle",
      displayer: "Behind the Title",
      value: "services",
    });
    this.addProp({
      type: "object",
      key: "firstItem",
      displayer: "First Card",
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
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
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
          key: "card",
          displayer: "Card",
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
          key: "card",
          displayer: "Card",
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
    const behindTitleTextExist = this.getPropValue("behindTitle", {
      as_string: true,
    });

    const upperTitle = this.getPropValue("upperTitle");
    const title = this.getPropValue("title");
    const behindtitleText = this.getPropValue("behindTitle");

    const itemCount = this.getPropValue("itemCount");

    const cards = this.castToObject<Card[]>("cards");
    const firstItem = this.castToObject<FirstItem>("firstItem");

    const firstCardTitleExist = this.castToString(firstItem.title);
    const buttonTextExist = this.castToString(firstItem.button);

    const firstItemBackgroundImage = firstItem.backgroundImage;
    const firstItemOverlay = firstItem.overlay;

    const renderFirstItem =
      firstCardTitleExist || buttonTextExist || firstItemBackgroundImage;
    const renderHeader = behindTitleTextExist || titleExist;

    return (
      <div className={this.decorateCSS("container")}>
        {renderHeader && (
          <header
            className={`
              ${this.decorateCSS("header")}
              ${titleExist ? this.decorateCSS("min-height-unset") : ""}
            `}
          >
            {upperTitleExist && (
              <div className={this.decorateCSS("upper-title")}>
                {upperTitle}
              </div>
            )}
            {behindTitleTextExist && (
              <div className={this.decorateCSS("shadow-header-title")}>
                {behindtitleText}
              </div>
            )}
            {titleExist && (
              <div className={this.decorateCSS("header-title")}>{title}</div>
            )}
          </header>
        )}
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {renderFirstItem && (
              <div
                className={this.decorateCSS("card-item-first")}
                style={{
                  width: `${100 / itemCount}%`,
                  backgroundImage: `${
                    firstItemOverlay
                      ? "linear-gradient(color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%), color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%)),"
                      : ""
                  } url(${firstItemBackgroundImage})`,
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

            {cards?.length > 0 &&
              cards.map((message: Card, index: number) => {
                const descExist = this.castToString(message.description);
                const titleExist = this.castToString(message.title);

                const shouldRender = descExist || titleExist;

                if (!shouldRender) return null;
                else
                  return (
                    <div
                      className={`
                        ${this.decorateCSS("card-item-count")}
                        ${this.decorateCSS(itemCount >= 4 ? "border-top" : "")}
                      `}
                      style={{
                        width: `${100 / itemCount}%`,
                        backgroundColor: `
                          color-mix(
                          in srgb,
                          var(--composer-html-background),
                          var(--composer-font-color-primary) ${5 + ((index + 1) % 4) * 5}%
                        )`,
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
