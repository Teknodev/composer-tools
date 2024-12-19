import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./feature4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

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
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6724ecef7acba6002c5dc76a?alt=media",
    });
    this.addProp({
      type: "boolean",
      key: "imageOverlay",
      displayer: "Image Overlay",
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
    const cards = this.castToObject<Card[]>("cards");

    const itemCount = this.getPropValue("itemCount");

    const subtitleExist = !!this.getPropValue("subtitle", { as_string: true });
    const titleExist = !!this.getPropValue("title", { as_string: true });
    const linkTextExist = !!this.getPropValue("linkText", { as_string: true });

    const imageOverlay = !!this.getPropValue("imageOverlay");

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{ backgroundImage: `url(${this.getPropValue("backgroundImage")})` }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{ pc: itemCount }} className={this.decorateCSS("content")}>
            {(subtitleExist || titleExist || linkTextExist) && (
              <div className={this.decorateCSS("featured-card")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={`
                    ${this.decorateCSS("section-subtitle")}
                    ${!!this.getPropValue("backgroundImage") ? this.decorateCSS("black") : ""}
                  `}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={`
                    ${this.decorateCSS("section-title")}
                    ${!!this.getPropValue("backgroundImage") ? this.decorateCSS("black") : ""}
                  `}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {linkTextExist && (
                  <span className={`
                    ${this.decorateCSS("featured-card-link")}
                    ${!!this.getPropValue("backgroundImage") ? this.decorateCSS("black") : ""}
                  `}>
                    <ComposerLink path={this.getPropValue("link")}>
                      {this.getPropValue("linkText")}
                    </ComposerLink>
                  </span>
                )}
              </div>
            )}

            {cards?.length > 0 && cards.map((card: Card, index: number) => {
              const titleExist = !!this.castToString(card.title);
              const subtitleExist = !!this.castToString(card.subtitle);
              const descExist = !!this.castToString(card.description);
              const iconExist = !!card.icon;
              const imageExist = !!card.image;
              const buttonsExist = card.buttons?.length > 0;

              const shouldRender = (titleExist || subtitleExist || descExist || iconExist || imageExist || buttonsExist);

              if (shouldRender) {
                return (
                  <div
                    key={index}
                    className={this.decorateCSS("card-item-count")}
                  >
                    <div className={this.decorateCSS("vertical")}>
                      {!!card.icon && (
                        <div className={this.decorateCSS("icon-container")}>
                          <ComposerIcon
                            propsIcon={{ className: this.decorateCSS("icon") }}
                            name={card.icon}
                          />
                        </div>
                      )}
                      {titleExist && (
                        <Base.H3 className={this.decorateCSS("title")}>
                          {card.title}
                        </Base.H3>
                      )}
                      {subtitleExist && (
                        <Base.P className={this.decorateCSS("subtitle")}>
                          {card.subtitle}
                        </Base.P>
                      )}
                    </div>

                    {(descExist || card?.buttons?.length > 0) && (
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
                            <Base.P
                              className={`
                                ${this.decorateCSS("long-text")}
                                ${card.image || imageOverlay ? this.decorateCSS("image-or-overlay-exist") : ""}
                              `}
                            >
                              {card.description}
                            </Base.P>
                          )}

                          {card?.buttons?.length > 0 && (
                            <div className={this.decorateCSS("overlay-links-container")}>
                              {card?.buttons.map(
                                (item: Button, index: number) => {
                                  if (!this.castToString(item.text)) return null;

                                  return (
                                    <Base.Button
                                      key={index}
                                      className={`
                                        ${this.decorateCSS("overlay-link")}
                                        ${card.image || imageOverlay ? this.decorateCSS("image-or-overlay-exist") : ""}
                                      `}
                                    >
                                      <ComposerLink path={item.link}>
                                        {item.text}
                                      </ComposerLink>
                                    </Base.Button>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature4;
