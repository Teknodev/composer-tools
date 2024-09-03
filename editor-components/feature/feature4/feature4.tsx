import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./feature4.module.scss";

type Card = {
  title: JSX.Element;
  subtitle: JSX.Element;
  icon: string;
  description: JSX.Element;
  image: string;
  buttons: Button[];
};

type Button = {
  text: JSX.Element;
  link: string;
};

class Feature4 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 3,
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "backgroundImage",
      value:
        "https://www.nicdarkthemes.com/themes/cake-bakery/wp/demo/bakery-wordpress-theme/wp-content/uploads/sites/5/2023/10/clear-02-1.jpg",
    });
    this.addProp({
      type: "boolean",
      key: "imageOverlay",
      displayer: "image Overlay",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Gateway to Premium Services",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Empower Solutions",
    });
    this.addProp({
      type: "string",
      key: "linkText",
      displayer: "Link Text",
      value: "Navigating possibilities",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
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
              value: "Customer Center",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaClipboardUser",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Sustainable Practices",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "From exotic beaches to bustling cities, our website offers.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a7acba6bbe002b63bb00?alt=media",
            },
            {
              type: "array",
              additionalParams: {
                maxElementCount: 2,
              },
              key: "buttons",
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonItem",
                  displayer: "Button Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "More Info",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
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
              value: "Assistance",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "MdAssistant",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Cross-functional Team",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "From exotic beaches to bustling cities, our website offers.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a820ba6bbe002b63bb80?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonItem",
                  displayer: "Button Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "More Info",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
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
              value: "Solutions Hub",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiQuestionAnswerFill",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Customer Engagement",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "From exotic beaches to bustling cities, our website offers.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a84aba6bbe002b63bb93?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonItem",
                  displayer: "Button Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "More Info",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
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
              value: "Performance",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "GrDocumentPerformance",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Efficient Full Solutions",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "From exotic beaches to bustling cities, our website offers.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a86aba6bbe002b63bbb3?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonItem",
                  displayer: "Button Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "More Info",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
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
              value: "Operational",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaNetworkWired",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Efficient User Experience",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "From exotic beaches to bustling cities, our website offers.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a887ba6bbe002b63bbcc?alt=media",
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                {
                  type: "object",
                  key: "buttonItem",
                  displayer: "Button Item",
                  value: [
                    {
                      type: "string",
                      key: "text",
                      displayer: "Button Text",
                      value: "More Info",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Button Link",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Feature 4";
  }

  render() {
    const featuredSubtitle = this.getPropValue("subtitle", { as_string: true });
    const featuredTitle = this.getPropValue("title", { as_string: true });
    const cards = this.castToObject<Card[]>("cards");
    const backgroundImage = this.getPropValue("backgroundImage");
    const imageOverlay: boolean = this.getPropValue("imageOverlay");
    const itemCount = this.getPropValue("itemCount");

    console.log("cards:", cards);

    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(featuredSubtitle || featuredTitle) && (
              <div
                className={this.decorateCSS("featured-card")}
                style={{ width: `${90 / itemCount}%` }}
              >
                {imageOverlay && (
                  <div
                    className={this.decorateCSS("overlay")}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0.5,
                      zIndex: 1,
                    }}
                  ></div>
                )}

                <div className={this.decorateCSS("backgroundImage")}></div>

                <div
                  className={this.decorateCSS("card-item-count")}
                  style={{
                    width: `${90 / itemCount}%`,
                  }}
                ></div>
                {featuredSubtitle && (
                  <h5 className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </h5>
                )}
                {featuredTitle && (
                  <h2 className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </h2>
                )}
                {this.getPropValue("linkText", { as_string: true }) && (
                  <span className={this.decorateCSS("featured-card-link")}>
                    <ComposerLink path={this.getPropValue("link")}>
                      {this.getPropValue("linkText")}
                    </ComposerLink>
                  </span>
                )}
              </div>
            )}

            {cards.map((card: Card, index: number) => {
              const titleExist = this.castToString(card.title);
              const subtitleExist = this.castToString(card.subtitle);
              const descExist = this.castToString(card.description);

              return (
                <div
                  key={index}
                  className={this.decorateCSS("card-item-count")}
                  style={{
                    width: `${90 / itemCount}%`,
                  }}
                >
                  <div className={this.decorateCSS("vertical")}>
                    <div className={this.decorateCSS("vertical-content")}>
                      {card.icon && (
                        <div className={this.decorateCSS("icon")}>
                          <ComposerIcon
                            propsIcon={{
                              className: this.decorateCSS("Icon"),
                            }}
                            name={card.icon}
                          />
                        </div>
                      )}
                      {titleExist && (
                        <h3 className={this.decorateCSS("title")}>
                          {card.title}
                        </h3>
                      )}
                      {subtitleExist && (
                        <h5 className={this.decorateCSS("subtitle")}>
                          {card.subtitle}
                        </h5>
                      )}
                    </div>
                  </div>
                  <div
                    className={this.decorateCSS("overlay")}
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div
                      className={`
                        ${this.decorateCSS("overlay-content")}
                        ${imageOverlay ? this.decorateCSS("apply-overlay") : ""}
                        `}
                    >
                      {descExist && (
                        <p className={this.decorateCSS("long-text")}>
                          {card.description}
                        </p>
                      )}

                      {card.buttons.length > 0 &&
                        card.buttons.map(
                          (item: Button, idx: number) =>
                            this.castToString(item.text) && (
                              <span
                                className={this.decorateCSS("overlay-link")}
                                key={idx}
                              >
                                <ComposerLink
                                  children={item.text}
                                  path={item.link}
                                />
                              </span>
                            )
                        )}
                    </div>
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

export default Feature4;
