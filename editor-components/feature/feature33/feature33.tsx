import * as React from "react";
import {
  BaseFeature,
  TypeMediaInputValue,
  TypeUsableComponentProps,
} from "../../EditorComponent";
import styles from "./feature33.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  icon?: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Feature33 extends BaseFeature {
  constructor(props?: TypeUsableComponentProps) {
    super(props, styles);

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
      value: "A better way to keep your skills",
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
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
    });

    const cardDescription =
      "Completely iterate covalent strategic theme areas via accurate e-markets.";

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card_0",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaChess",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Competitive rates",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: cardDescription,
            },
          ],
        },
        {
          type: "object",
          key: "card_1",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaCoins",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "No hidden fees",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: cardDescription,
            },
          ],
        },
        {
          type: "object",
          key: "card_2",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaTachometerAlt",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Stable performance",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: cardDescription,
            },
          ],
        },
        {
          type: "object",
          key: "card_3",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaBolt",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Instant transfers",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: cardDescription,
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 2,
      additionalParams: {
        maxElementCount: 5,
      },
    });
  }

  static getName(): string {
    return "Feature 33";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const iconBackground = this.getPropValue("iconBackground");
    const itemCount = this.getPropValue("itemCount");
    const alignment = Base.getContentAlignment();

    const hasSubtitle = !!this.castToString(subtitle);
    const hasTitle = !!this.castToString(title);
    const hasDescription = !!this.castToString(description);

    const hasButtons =
      Array.isArray(buttons) &&
      buttons.some((btn) => this.castToString(btn.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(hasSubtitle || hasTitle || hasDescription || hasButtons) && (
              <Base.VerticalContent
                className={this.decorateCSS("left")}
                data-alignment={alignment}
              >
                {hasSubtitle && (
                  <Base.SectionSubTitle
                    className={this.decorateCSS("section-subtitle")}
                  >
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {hasTitle && (
                  <Base.SectionTitle
                    className={this.decorateCSS("section-title")}
                  >
                    {title}
                  </Base.SectionTitle>
                )}

                {hasDescription && (
                  <Base.SectionDescription
                    className={this.decorateCSS("section-description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}

                {hasButtons && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((buttonItem, index) => {
                      const text = buttonItem.text;
                      const url = buttonItem.url;
                      const type = buttonItem.type;

                      if (!this.castToString(text)) {
                        return null;
                      }

                      return (
                        <ComposerLink key={index} path={url || ""}>
                          <Base.Button
                            buttonType={type}
                            className={this.decorateCSS("button")}
                          >
                            <Base.P
                              className={this.decorateCSS("button-text")}
                            >
                              {text}
                            </Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {cards?.length > 0 && (
              <Base.ListGrid
                className={this.decorateCSS("right")}
                gridCount={{
                  pc: itemCount,
                  tablet: itemCount,
                  phone: 2,
                }}
              >
                {cards.map((card, index) => {
                  const titleExist = !!this.castToString(card.title);
                  const descExist = !!this.castToString(card.description);

                  if (!titleExist && !descExist && !card.icon) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-container")}
                    >
                      {card.icon && (
                        <div
                          className={`${this.decorateCSS(
                            "card-icon-wrapper"
                          )} ${
                            iconBackground
                              ? this.decorateCSS("with-bg")
                              : this.decorateCSS("no-bg")
                          }`}
                        >
                          <Base.Media
                            value={card.icon}
                            className={this.decorateCSS("card-icon")}
                          />
                        </div>
                      )}
                      <Base.VerticalContent
                        className={this.decorateCSS("card-content")}
                      >
                        {titleExist && (
                          <Base.H6 className={this.decorateCSS("card-title")}>
                            {card.title}
                          </Base.H6>
                        )}
                        {descExist && (
                          <Base.P
                            className={this.decorateCSS("card-description")}
                          >
                            {card.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature33;
