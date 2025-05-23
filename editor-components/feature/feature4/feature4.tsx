import * as React from "react";
import { BaseFeature } from "../../EditorComponent";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./feature4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  icon: string;
  description: React.JSX.Element;
  image: string;
  buttons: INPUTS.CastedButton[];
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
    this.addProp(INPUTS.BUTTON("link", "Link Button", "Navigating possibilities", "", null, null, "Link"));
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
                INPUTS.BUTTON("button", "Button", "More Info", "", null, null, "White")
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
                INPUTS.BUTTON("button", "Button", "More Info", "", null, null, "White")
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
                INPUTS.BUTTON("button", "Button", "More Info", "", null, null, "White")
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
                INPUTS.BUTTON("button", "Button", "More Info", "", null, null, "White")
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
                INPUTS.BUTTON("button", "Button", "More Info", "", null, null, "White")
              ],
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
    const linkButton: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("link");

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const linkTextExist = this.castToString(linkButton.text);

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
                  <Base.SectionTitle className={this.decorateCSS("section-title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {linkTextExist && (
                  <Base.Row className={this.decorateCSS("card-link-container")} >
                    <ComposerLink path={linkButton.url}>
                      <Base.Button buttonType={linkButton.type} className={this.decorateCSS("featured-card-link")}>
                        {linkButton.text}
                      </Base.Button>
                    </ComposerLink>
                  </Base.Row>
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
                          <Base.Icon
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
                                (item: INPUTS.CastedButton, index: number) => {
                                  if (!this.castToString(item.text)) return null;

                                  return (
                                    <Base.Button
                                      buttonType={item.type}
                                      key={index}
                                      className={`
                                        ${this.decorateCSS("overlay-link")}
                                        ${card.image || imageOverlay ? this.decorateCSS("image-or-overlay-exist") : ""}
                                      `}
                                    >
                                      <ComposerLink path={item.url}>
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
