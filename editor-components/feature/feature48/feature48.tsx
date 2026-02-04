import * as React from "react";
import styles from "./feature48.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

interface Card {
  icon: TypeMediaInputValue;
  content: string;
  description: string;
  button?: {
    text: string;
    url: string;
    type: TypeButton;
  };
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
              displayer: "Title",
              value:
                "Unlimited <br/><span class='card-content-span' style='color: var(--composer-font-color-primary)'>Everything</span>",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
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
              displayer: "Title",
              value:
                "Tailored <br/><span class='card-content-span' style='color: var(--composer-font-color-primary)'>Onboarding</span>",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
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
              displayer: "Title",
              value:
                "Full Access <br/><span class='card-content-span' style='color: var(--composer-font-color-primary)'>Control</span>",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
        },
      ],
    });
    // need to changes here to show items in one row
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
    return "Feature 48";
  }

  castToNumber(propName: string): number {
    const prop = this.getProp(propName);
    return Number(prop?.value) || 0;
  }

  /** True only when the user has entered real button text (not empty, not placeholder). */
  hasButtonText(text: any): boolean {
    const s = (this.castToString(text) ?? "").trim();
    if (s.length === 0) return false;
    const lower = s.toLowerCase();
    if (lower === "button" || lower === "text") return false;
    return true;
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttonsRaw = this.castToObject<any[]>("buttons") || [];
    const buttons = buttonsRaw.filter((btn: any) =>
      this.hasButtonText(btn?.text),
    );
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
          {(subtitle || title || description) && (
            <Base.VerticalContent className={this.decorateCSS("header-section")}>
              {subtitle &&
                (() => {
                  const alignment = Base.getContentAlignment();
                  const subtitleType = Base.getSectionSubTitleType();
                  const isCenteredBadge =
                    alignment === "center" && subtitleType === "badge";
                  return (
                    <Base.SectionSubTitle
                      styles={
                        isCenteredBadge
                          ? { width: "fit-content", margin: "0 auto" }
                          : { textAlign: "left" }
                      }
                      className={this.decorateCSS("subtitle")}
                    >
                      {this.getPropValue("subtitle")}
                    </Base.SectionSubTitle>
                  );
                })()}
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
                  className={this.decorateCSS("card")}
                  style={{
                    backgroundColor: hasContent(card)
                      ? undefined
                      : "transparent",
                  }}
                >
                  <Base.VerticalContent
                    className={this.decorateCSS("card-content")}
                  >
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
                      <Base.P className={this.decorateCSS("card-description")}>
                        {card.description}
                      </Base.P>
                    )}
                    {card.button && this.hasButtonText(card.button.text) && (
                      <div className={this.decorateCSS("card-button-wrap")}>
                        <ComposerLink path={card.button.url}>
                          <Base.Button
                            className={this.decorateCSS("card-button")}
                            buttonType={card.button.type}
                          >
                            <Base.P
                              className={this.decorateCSS("card-button-text")}
                            >
                              {card.button.text}
                            </Base.P>
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    )}
                  </Base.VerticalContent>
                </div>
              ))}
            </Base.ListGrid>
          )}

          {buttons.length > 0 && (
            <div className={this.decorateCSS("buttons-container")}>
              {buttons.map((btn: any, idx: number) => (
                <ComposerLink key={`feature48-btn-${idx}`} path={btn.url}>
                  <Base.Button
                    className={this.decorateCSS("button")}
                    buttonType={btn.type || "Primary"}
                  >
                    <Base.P className={this.decorateCSS("button-text")}>
                      {btn.text}
                    </Base.P>
                  </Base.Button>
                </ComposerLink>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature48;
