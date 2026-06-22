import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature32.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ButtonTypeObj = {
  text: React.JSX.Element;
  url: string;
  type: TypeButton;
}

type Card = {
  icon: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: {
    text: React.JSX.Element;
    url: string;
    icon: TypeMediaInputValue;
    type: string;
  };
};

class Feature32 extends BaseFeature {
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
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
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
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
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
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
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
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
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
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
      displayer: "Item Count in a Row",
      value: 2,
      additionalParams: {
        maxElementCount: 5,
      },
    });
  }

  static getName(): string {
    return "Feature 32";
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
                  const cardSubtitleExist = this.castToString(card.subtitle);
                  const titleExist = !!this.castToString(card.title);
                  const descExist = !!this.castToString(card.description);
                  const isImage = card.icon?.type === "image";
                  const btnText = this.castToString(card.button?.text);
                  const btnIconExist = card.button?.icon && (card.button.icon.type === "icon" ? card.button.icon.name : card.button.icon.url);
                  const hasCardButton = btnText || btnIconExist;

                  if (!cardSubtitleExist && !titleExist && !descExist && !card.icon && !hasCardButton) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-container")}
                    >
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {card.icon &&
                          <div className={`${this.decorateCSS("icon-box")} ${!enableIconBackground && this.decorateCSS("no-bg")}`}>
                            <Base.Media value={card.icon} className={`${this.decorateCSS("card-icon")} ${isImage && this.decorateCSS("is-image")}`} />
                          </div>
                        }
                        {cardSubtitleExist && <Base.H6 className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.H6>}
                        {titleExist && <Base.H5 className={this.decorateCSS("card-title")}>{card.title}</Base.H5>}
                        {descExist && <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>}
                        {hasCardButton && (
                          <ComposerLink path={card.button.url}>
                            <Base.Button buttonType={card.button.type} className={this.decorateCSS("card-button")}>
                              {btnText && <Base.P className={this.decorateCSS("card-button-text")}>{card.button.text}</Base.P>}
                              {btnIconExist && <Base.Media className={this.decorateCSS("card-button-icon")} value={card.button.icon!} />}
                            </Base.Button>
                          </ComposerLink>
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

export default Feature32;