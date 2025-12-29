import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature33.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonTypeObj = {
  text: React.JSX.Element;
  url: string;
  type: TypeButton;
}

type Card = {
  icon: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Feature33 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: ""
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "A better way to keep your skills"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: ""
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
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
                name: "FaChess"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Competitive rates"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets."
            }
          ]
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
                name: "FaCoins"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "No hidden fees"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets."
            }
          ]
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
                name: "FaTachometerAlt"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Stable performance"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets."
            }
          ]
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
                name: "FaBolt"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Instant transfers"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Completely iterate covalent strategic theme areas via accurate e-markets."
            }
          ]
        },
      ]
    });

    this.addProp({
      type: "boolean",
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
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
    const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const alignment = Base.getContentAlignment();
    const enableIconBackground = this.getPropValue("iconBackground");
    const hasContent = subtitle || title || description || visibleButtons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {hasContent && (
              <Base.VerticalContent className={this.decorateCSS("left")} data-alignment={alignment}>
                {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                {visibleButtons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {visibleButtons.map((item: ButtonTypeObj, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      return (
                        buttonTextExist && (
                          <ComposerLink key={`button-${index}`} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {cards?.length > 0 && (
              <Base.ListGrid
                className={this.decorateCSS("right")}
                gridCount={{ pc: this.getPropValue("itemCount") || 3, tablet: 2, phone: 1 }}
              >
                {cards.map((card: Card, index: number) => {
                  const titleExist = !!this.castToString(card.title);
                  const descExist = !!this.castToString(card.description);
                  const isImage = card.icon?.type === "image";

                  if (!titleExist && !descExist && !card.icon) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-container")}
                    >
                      {card.icon &&
                        <div className={`${this.decorateCSS("icon-box")} ${!enableIconBackground ? this.decorateCSS("no-bg") : ""}`}>
                          <Base.Media value={card.icon} className={`${this.decorateCSS("card-icon")} ${isImage ? this.decorateCSS("is-image") : ""}`} />
                        </div>
                      }
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {titleExist && <Base.H3 className={this.decorateCSS("card-title")}>{card.title}</Base.H3>}
                        {descExist && <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>}
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