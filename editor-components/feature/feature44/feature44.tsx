import * as React from "react";
import styles from "./feature44.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

interface Card {
  media: TypeMediaInputValue;
  subtitle: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
    type: TypeButton;
  };
}

class Feature44 extends BaseFeature {
  constructor(props?: any) {
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
      value: "How Does It Work?",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698c864d771c03002cc0ac1d?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Modern Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698c83af771c03002cc0a4cd?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Free Updates",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Credibly innovate granular sources whereas high standards in web-readiness.",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698c83dd771c03002cc0a508?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "High Quality",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Performing at the junction of minimalism and mathematics.",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Item Count in a Row",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Feature 44";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttonsRaw = this.castToObject<any[]>("buttons") || [];
    const buttons = buttonsRaw.filter((btn: any) =>
      this.castToString(btn?.text),
    );
    const animation = this.getPropValue("animation");
    const itemsPerRow = this.getPropValue("itemsPerRow");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const hasContent = (card: Card) => {
      return (
        this.castToString(card.subtitle) ||
        this.castToString(card.title) ||
        this.castToString(card.description) ||
        card.media
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitle || title || description) && (
            <Base.VerticalContent
              className={this.decorateCSS("header-section")}
            >
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          {cards && cards.length > 0 && (
            <Base.ListGrid
              className={this.decorateCSS("cards-container")}
              gridCount={{ pc: itemsPerRow, tablet: 3, phone: 1 }}
            >
              {cards.map((card: Card, index: number) => (
                <div
                  key={index}
                  className={`${this.decorateCSS("card")} ${!hasContent(card) ? this.decorateCSS("card-empty") : ""}`}
                >
                  <div className={`${this.decorateCSS("card-wrapper")} ${animation ? this.decorateCSS("animated") : ""}`}>
                    <Base.VerticalContent className={`${this.decorateCSS("card-content")} ${this.castToString(card.media) ? this.decorateCSS("has-media") : ""}`}>
                      {this.castToString(card.subtitle) && (
                        <Base.P className={this.decorateCSS("card-subtitle")}>
                          {card.subtitle}
                        </Base.P>
                      )}
                      {this.castToString(card.title) && (
                        <Base.H3 className={this.decorateCSS("card-title")}>
                          {card.title}
                        </Base.H3>
                      )}
                      {this.castToString(card.description) && (
                        <Base.P
                          className={this.decorateCSS("card-description")}
                        >
                          {card.description}
                        </Base.P>
                      )}
                      {card.button && this.castToString(card.button.text) && (
                        <div className={this.decorateCSS("card-button-wrap")}>
                          <ComposerLink path={card.button.url}>
                            <Base.Button
                              className={this.decorateCSS("card-button")}
                              buttonType={card.button.type}
                            >
                              <Base.P className={this.decorateCSS("card-button-text")}>
                                {card.button.text}
                              </Base.P>
                            </Base.Button>
                          </ComposerLink>
                        </div>
                      )}
                    </Base.VerticalContent>
                    <div className={this.decorateCSS("card-media-container")}>
                      {this.castToString(card.media) && (
                        <div className={this.decorateCSS("card-media-wrapper")}>
                          <Base.Media
                            value={card.media?.type === "video" ? { ...card.media, settings: { autoplay: true, loop: true, muted: true, controls: false } } : card.media}
                            className={this.decorateCSS("card-media")}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Base.ListGrid>
          )}

          {buttons.length > 0 && (
            <div className={this.decorateCSS("buttons-container")}>
              {buttons.map((btn: any, idx: number) => {
                const buttonTextExists = this.castToString(btn.text);
                return (
                  buttonTextExists && (
                    <ComposerLink key={`feature44-btn-${idx}`} path={btn.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                        buttonType={btn.type || "Primary"}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {btn.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature44;
