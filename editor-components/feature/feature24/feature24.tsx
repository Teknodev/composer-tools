import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  media: TypeMediaInputValue;
  title: React.JSX.Element;
};

class Feature24 extends BaseFeature {
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
      value: "A better way to improve skills",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Features",
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
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Expertly crafted components"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Built-in interactive examples"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Beautifully designed templates"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "SEO & accessibility best practices"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Mobile notifications included"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Highly customizable layouts"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Expertly crafted components"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Built-in interactive examples"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Beautifully designed templates"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "SEO & accessibility best practices"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Mobile notifications included"
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
              key: "media",
              displayer: "Media",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "TiTick" },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Highly customizable layouts"
            }
          ]
        },
      ]
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

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
  }

  static getName(): string {
    return "Feature 24";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const textButtons = buttons.filter(btn => this.castToString(btn.text));
    const enableIconBackground = this.getPropValue("iconBackground");
    const hasContent = subtitle || title || description || (buttons && buttons.length > 0);
    const cards = this.castToObject<Card[]>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("text-content")}>
              {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
              {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
              {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
            </Base.VerticalContent>
          )}
          {cards?.length > 0 && (
            <Base.ListGrid
              className={this.decorateCSS("features-content")}
              gridCount={{ pc: this.getPropValue("itemCount") || 3, tablet: 2, phone: 1 }}
            >
              {cards.map((card: Card, index: number) => {
                const titleExist = this.castToString(card.title);
                const isImage = card.media?.type === "image";
                if (!titleExist && !card.media) return null;

                return (
                  <div key={index} className={this.decorateCSS("card-container")}>
                    {card.media && (
                      <div className={`${this.decorateCSS("icon-box")} ${!enableIconBackground && this.decorateCSS("no-bg")}`}>
                        <Base.Media value={card.media} className={`${this.decorateCSS("card-icon")} ${isImage && this.decorateCSS("is-image")}`} />
                      </div>
                    )}
                    <Base.VerticalContent className={this.decorateCSS("card-content")}>
                      {titleExist && (<Base.H4 className={this.decorateCSS("card-title")}>{card.title}</Base.H4>)}
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </Base.ListGrid>
          )}
          {textButtons.length > 0 && (
            <Base.Row className={this.decorateCSS("button-container")}>
              {buttons.map(
                (buttonObj, index: number) => {
                  const buttonText = this.castToString(buttonObj.text);
                  return buttonText && (
                    <ComposerLink key={index} path={buttonObj.url}>
                      <Base.Button buttonType={buttonObj.type} className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{buttonObj.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  );
                }
              )}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature24;