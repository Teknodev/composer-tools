import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type Card = {
  icon: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: Button;
};

class Feature11 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Everything You Need"
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The universal UI kit and design system"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Powerful tool for creating landing pages, websites and dashboards in Figma. Contains UI Kit (web), Data Visualization, Icon Set."
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Start Creating", "", null, null, "Primary"),
      ]
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
                name: "GrDrag"
              }
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Easy drag & drop"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "To add an element just drag component from the Assets panel and drop it to the work area."
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
                name: "CgDisplayFlex"
              }
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Flexible modification"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You can easily change an instance setting depending on your goals."
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
                name: "IoColorFilterSharp"
              }
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Quick color and font changes"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You can use the default color scheme and font or change them to create your own design."
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
                name: "FaBox"
              }
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Pre-made blocks"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "A large variety of ready-made blocks for your project."
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
                name: "FaFileArchive"
              }
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "All-in-one file"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You will find everything to create your design in one Figma file."
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
                name: "LuReplaceAll"
              }
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Essential elements in one place"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Use them for any websites, dashboards, and even in your TED Talks."
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ]
        },
      ]
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
    return "Feature 11";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const alignment = Base.getContentAlignment();

    const hasValidButtons = buttons && buttons.some((btn: INPUTS.CastedButton) => this.castToString(btn.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(this.castToString(subtitle) || this.castToString(title) ||
              this.castToString(description) || hasValidButtons) && (
                <Base.VerticalContent 
                  className={this.decorateCSS("left")}
                  data-alignment={alignment}
                >
                  {this.castToString(subtitle) && (
                    <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}

                  {this.castToString(title) && (
                    <Base.SectionTitle className={this.decorateCSS("section-title")}>
                      {title}
                    </Base.SectionTitle>
                  )}

                  {this.castToString(description) && (
                    <Base.SectionDescription className={this.decorateCSS("section-description")}>
                      {description}
                    </Base.SectionDescription>
                  )}

                  {hasValidButtons && (
                    <div className={this.decorateCSS("buttons-container")}>
                      {buttons.map((btn: INPUTS.CastedButton, index: number) => {
                        if (this.castToString(btn.text)) {
                          return (
                            <ComposerLink key={index} path={btn.url}>
                              <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              )}

            {cards?.length > 0 && (
              <Base.ListGrid
                className={this.decorateCSS("right")}
                gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2 }}
              >
                {cards.map((card: Card, index: number) => {
                  const subtitleExist = !!this.castToString(card.subtitle);
                  const titleExist = !!this.castToString(card.title);
                  const descExist = !!this.castToString(card.description);
                  const iconExist = !!(card.icon && (card.icon.type === "icon" ? card.icon.name : card.icon.url));
                  const btnText = card.button ? this.castToString(card.button.text) : "";
                  const btnIconExist = card.button?.icon && (card.button.icon.type === "icon" ? card.button.icon.name : card.button.icon.url);
                  const hasCardButton = !!(btnText || btnIconExist);

                  if (!subtitleExist && !titleExist && !descExist && !iconExist) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-container")}
                    >
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {iconExist && <Base.Media value={card.icon} className={this.decorateCSS("card-icon")} />}
                        {subtitleExist && (
                          <Base.H6 className={this.decorateCSS("card-subtitle")}>
                            {card.subtitle}
                          </Base.H6>
                        )}
                        {titleExist && (
                          <Base.H5 className={this.decorateCSS("card-title")}>
                            {card.title}
                          </Base.H5>
                        )}
                        {descExist && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {card.description}
                          </Base.P>
                        )}
                        {hasCardButton && (
                          <ComposerLink path={card.button.url}>
                            <Base.Button buttonType={card.button.type} className={this.decorateCSS("card-button")}>
                              {btnText && (
                                <Base.P className={this.decorateCSS("card-button-text")}>{card.button.text}</Base.P>
                              )}
                              {btnIconExist && (
                                <Base.Media className={this.decorateCSS("card-button-icon")} value={card.button.icon!} />
                              )}
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

export default Feature11;
