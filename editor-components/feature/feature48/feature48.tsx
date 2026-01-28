import * as React from "react";
import styles from "./feature48.module.scss";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

interface Card {
  icon: TypeMediaInputValue;
  title: string;
  subtitle: string;
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
              key: "title",
              displayer: "Title",
              value: "Unlimited",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Everything",
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
              key: "title",
              displayer: "Title",
              value: "Tailored",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Onboarding",
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
              key: "title",
              displayer: "Title",
              value: "Full Access",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Control",
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

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Item counts in a row",
      value: 3,
      max: 4,
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
    const itemsPerRow = this.castToNumber("itemsPerRow");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

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
                <div key={index} className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("card-content")}>
                    {card.icon && (
                      <div className={this.decorateCSS("icon-container")}>
                        <Base.Media
                          value={card.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    )}
                    <div className={this.decorateCSS("text-content")}>
                      {this.castToString(card.title) && (
                        <Base.H3 className={this.decorateCSS("card-title")}>
                          {card.title}
                        </Base.H3>
                      )}
                      {this.castToString(card.subtitle) && (
                        <Base.H3 className={this.decorateCSS("card-subtitle")}>
                          {card.subtitle}
                        </Base.H3>
                      )}
                      {this.castToString(card.description) && (
                        <Base.P
                          className={this.decorateCSS("card-description")}
                        >
                          {card.description}
                        </Base.P>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature48;
