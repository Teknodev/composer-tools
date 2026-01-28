import * as React from "react";
import styles from "./feature48.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

interface Card {
  icon: TypeMediaInputValue;
  content: string;
  description: string;
  button: any;
}

class Feature48 extends BaseFeature {
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
      value: "How We Can Help You!",
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
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaHeart",
              },
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value:
                "Unlimited <br/><span style='color: var(--composer-font-color-primary)'>Everything</span>",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary",
            ),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaGraduationCap",
              },
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value:
                "Tailored <br/><span style='color: var(--composer-font-color-primary)'>Onboarding</span>",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Card Button",
              "",
              null,
              null,
              "Primary",
            ),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaFingerprint",
              },
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value:
                "Full Access <br/><span style='color: var(--composer-font-color-primary)'>Control</span>",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "View More Details",
              "",
              null,
              null,
              "Primary",
            ),
          ],
        },
      ],
    });
    // need to changes here to show items in one row
    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Item counts in a row",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "More About Us",
          "",
          null,
          null,
          "Primary",
        ),
      ],
    });
  }

  static getName(): string {
    return "Feature 48";
  }

  castToNumber(propName: string): number {
    const prop = this.getProp(propName);
    return Number(prop?.value) || 0;
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<any[]>("buttons") || [];
    const itemsPerRow = this.castToNumber("itemsPerRow");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const hasContent = (card: Card) => {
      return (
        this.castToString(card.content) ||
        this.castToString(card.description) ||
        card.icon
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header-section")}>
            {subtitle && (
              <Base.SectionSubTitle
                styles={{ textAlign: "left" }}
                className={this.decorateCSS("subtitle")}
              >
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
          </div>

          {cards && cards.length > 0 && (
            <div
              className={this.decorateCSS("cards-container")}
              style={{ "--items-per-row": itemsPerRow } as React.CSSProperties}
            >
              {cards.map((card: Card, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("card")}
                  style={{
                    backgroundColor: hasContent(card)
                      ? undefined
                      : "transparent",
                  }}
                >
                  <div className={this.decorateCSS("card-content")}>
                    <div className={this.decorateCSS("text-content")}>
                      {card.icon && (
                        <div className={this.decorateCSS("icon-container")}>
                          <Base.Media
                            value={card.icon}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                      {this.castToString(card.content) && (
                        <Base.H3
                          className={this.decorateCSS("card-content-text")}
                        >
                          {card.content}
                        </Base.H3>
                      )}
                      {this.castToString(card.description) && (
                        <Base.P
                          className={this.decorateCSS("card-description")}
                        >
                          {this.castToString(card.description)}
                        </Base.P>
                      )}
                      {card.button && (
                        <ComposerLink path={this.castToString(card.button.url)}>
                          <Base.Button
                            className={this.decorateCSS("card-button")}
                            buttonType={card.button.type || "Primary"}
                          >
                            <Base.P
                              className={this.decorateCSS("card-button-text")}
                            >
                              {this.castToString(card.button.text)}
                            </Base.P>
                          </Base.Button>
                        </ComposerLink>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {buttons.length > 0 && (
            <div className={this.decorateCSS("buttons-container")}>
              {buttons.map((btn: any, idx: number) => {
                const btnText = this.castToString(btn.text);
                const btnHasText = !!btnText;
                return (
                  <ComposerLink key={`feature48-btn-${idx}`} path={btn.url}>
                    <Base.Button
                      className={this.decorateCSS("button")}
                      buttonType={btn.type || "Primary"}
                    >
                      {btnHasText && (
                        <Base.P className={this.decorateCSS("button-text")}>
                          {btn.text}
                        </Base.P>
                      )}
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature48;
