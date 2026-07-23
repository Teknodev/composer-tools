import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";

import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import styles from "./feature4.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  icon: TypeMediaInputValue;
  description: React.JSX.Element;
  media: TypeMediaInputValue;
  buttons: TypeButton[];
  overlay: boolean;
};


class Feature4 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "backgroundMedia",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6724ecef7acba6002c5dc76a?alt=media",
          },
        },
        {
          type: "boolean",
          key: "imageOverlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Empower Solutions",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Gateway to Premium Services",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
      value: [
        INPUTS.BUTTON("button", "Button", "Navigating possibilities", "", null, null, "Link"),
      ]
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });

    this.addProp({
      type: "boolean",
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaClipboardUser",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a7acba6bbe002b63bb00?alt=media",
              },
            },
            {
              type: "array",
              additionalParams: {
                maxElementCount: 2,
              },
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("link", "Link Button", "Navigating possibilities", "", null, null, "White")
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "MdAssistant",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a820ba6bbe002b63bb80?alt=media",
              },
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("link", "Link Button", "More Info", "", null, null, "White")
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiQuestionAnswerFill",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a84aba6bbe002b63bb93?alt=media",
              },
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("link", "Link Button", "More Info", "", null, null, "White")
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "GrDocumentPerformance",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a86aba6bbe002b63bbb3?alt=media",
              },
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("link", "Link Button", "More Info", "", null, null, "White")
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaNetworkWired",
              },
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a887ba6bbe002b63bbcc?alt=media",
              },
            },
            {
              type: "array",
              key: "buttons",
              additionalParams: {
                maxElementCount: 2,
              },
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("link", "Link Button", "More Info", "", null, null, "White")
              ],
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: true,
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Feature 4";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");

    const itemCount = this.getPropValue("itemCount")
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const iconBackground = !!this.getPropValue("iconBackground");

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

    const background = this.castToObject<any>("background");
    const backgroundMedia = background?.backgroundMedia;
    const hasBg = !!(backgroundMedia && (backgroundMedia.type === "icon" ? backgroundMedia.name : backgroundMedia.url));
    const imageOverlay = hasBg && !!background?.imageOverlay;

    const subtitleType = Base.getSectionSubTitleType();
    const alignment = Base.getContentAlignment();

    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {hasBg && (
          <Base.Media
            value={backgroundMedia}
            className={this.decorateCSS("background-media")}
          />
        )}
        {imageOverlay && (
          <div className={this.decorateCSS("background-overlay")} />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{ pc: itemCount, tablet: 3, phone: 1 }} className={this.decorateCSS("content")}>
            {(subtitleExist || titleExist || hasValidButtons) && (
              <Base.VerticalContent className={`${this.decorateCSS("featured-card")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={`
                    ${this.decorateCSS("section-subtitle")}
                    ${hasBg && (subtitleType !== "badge") ? this.decorateCSS("black") : ""}
                    ${hasBg && (subtitleType === "badge") ? this.decorateCSS("badge-with-bg") : ""}
                  `}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={`
                    ${this.decorateCSS("section-title")}
                    ${hasBg ? this.decorateCSS("black") : ""}
                  `}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription className={`${this.decorateCSS("description")} ${hasBg && this.decorateCSS("black")}`}>
                    {description}
                  </Base.SectionDescription>
                )}
                {hasValidButtons && (
                  <Base.Row className={this.decorateCSS("card-link-container")}>
                    {buttons.map((btn: INPUTS.CastedButton, idx: number) => {
                      const buttonTextExist = this.castToString(btn.text);
                      if (!buttonTextExist) return null;
                      return (
                        <ComposerLink key={idx} path={btn.url}>
                          <Base.Button
                            buttonType={btn.type}
                            className={`${hasBg ? this.decorateCSS("featured-card-link-with-image") : this.decorateCSS("featured-card-link")}`}
                          >
                            {btn.text}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            )}
            {cards?.length > 0 && cards.map((card: Card, index: number) => {
              const titleExist = !!this.castToString(card.title);
              const subtitleExist = !!this.castToString(card.subtitle);
              const descExist = !!this.castToString(card.description);
              const iconExist = !!card.icon?.name;
              const imageExist = !!card.media?.url;
              const buttonsExist = card.buttons?.length > 0;
              const overlayExist = !!card.overlay;

              const shouldRender = (titleExist || subtitleExist || descExist || iconExist || imageExist || buttonsExist);

              if (shouldRender) {
                return (
                  <div
                    key={index}
                    className={`${hasBg ? this.decorateCSS("card-item-count") : this.decorateCSS("card-item-count-no-bg")}`}>
                    <Base.VerticalContent className={this.decorateCSS("vertical")}>
                      {!!card.icon && (
                        <div
                          className={`
                            ${hasBg ? this.decorateCSS("icon-container") : this.decorateCSS("icon-container-no-bg")}
                            ${!iconBackground ? this.decorateCSS("no-background") : ""}
                          `}
                        >
                          <Base.Media
                            value={card.icon}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                      {
                        titleExist && (
                          <Base.H5 className={`${this.decorateCSS("title")} ${hasBg && this.decorateCSS("title-with-bg")}`}>
                            {card.title}
                          </Base.H5>
                        )
                      }
                      {
                        subtitleExist && (
                          <Base.P className={`${this.decorateCSS("subtitle")} ${hasBg && this.decorateCSS("subtitle-with-bg")}`}>
                            {card.subtitle}
                          </Base.P>
                        )
                      }
                    </Base.VerticalContent>

                    {
                      (descExist || card?.buttons?.length > 0) && (
                        <div
                          className={this.decorateCSS("overlay")}
                          style={{ backgroundImage: `url(${card.media?.url})` }}>
                          <Base.VerticalContent className={`${this.decorateCSS("overlay-content")}
                            ${overlayExist ? this.decorateCSS("apply-overlay") : ""}`}>
                            {descExist && (
                              <Base.P
                                className={`
                                ${this.decorateCSS("long-text")}
                                ${card.media?.url || overlayExist ? this.decorateCSS("image-or-overlay-exist") : ""}
                              `}
                              >
                                {card.description}
                              </Base.P>
                            )}

                            {card?.buttons?.length > 0 && (
                              <div className={this.decorateCSS("overlay-links-container")}>
                                {card?.buttons.map(
                                  (item: TypeButton, index: number) => {
                                    if (!this.castToString(item.text)) return null;
                                    {
                                      return (
                                        <Base.Button
                                          buttonType={item.type}
                                          key={index}
                                          className={`${this.decorateCSS("overlay-button")} 
                                              ${card.media?.url || overlayExist ? this.decorateCSS("image-or-overlay-exist") : ""}`}>
                                          <ComposerLink path={item.page}>
                                            {item.text}
                                          </ComposerLink>
                                        </Base.Button>
                                      );
                                    }
                                  }
                                )}
                              </div>
                            )}
                          </Base.VerticalContent>
                        </div>
                      )
                    }
                  </div>
                );
              }
            })}
          </Base.ListGrid >
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Feature4;
