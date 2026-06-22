import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature14.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "../../../custom-hooks/input-templates";

type CardItem = {
  icon: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  iconBackground: boolean;
  buttons: Button[];
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Feature14 extends BaseFeature {
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
      value: "Here are couple reasons why We are the best",
    });
    this.addProp({
      type: "string",
      key: "firstdescription",
      displayer: "First Description",
      value: "New Concept Staining (NCS) is a woman-owned company that provides color concreate staining services to commercial and residential customers.",
    });
    this.addProp({
      type: "string",
      key: "seconddescription",
      displayer: "Second Description",
      value: "The company was formed in response to an overwhelming market demand for concreate staining services, predominantly in the commercial construction industry. NCS'work commonly includes the artisanal staining of bridges, sound walls, abutments, and buildings.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "About Us", "", "GoArrowRight", null, "Link"),
      ],
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoPricetagsOutline"
              },
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
              displayer: "Card Title",
              value: "Best price guaranteed",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "MdSupportAgent"
              },
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
              displayer: "Card Title",
              value: "Great communication",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "CiStar"
              },
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
              displayer: "Card Title",
              value: "We provide high standards",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "GrUserManager"
              },
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
              displayer: "Card Title",
              value: "We worked with many big companies",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
    });
  }

  static getName(): string {
    return "Feature 14";
  }

  render() {

    const cardItems = this.castToObject<CardItem[]>("cards");

    const alignment = Base.getContentAlignment();

    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(this.getPropValue("title")) || hasValidButtons
            || this.castToString(this.getPropValue("firstdescription")) || this.castToString(this.getPropValue("seconddescription"))) && (
              <div className={`${this.decorateCSS("title-wrapper")} ${alignment == "center" && this.decorateCSS("center")}`}>
                {(this.castToString(this.getPropValue("title")) || hasValidButtons) && <Base.VerticalContent className={this.decorateCSS("title-left")}>
                  {subtitleExist && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(this.getPropValue("title")) && (
                    <Base.SectionTitle className={this.decorateCSS("header")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  )}
                  {(alignment == "left" && hasValidButtons) && (
                    <div className={this.decorateCSS("link")}>
                      {buttons.map((item: Button, index: number) => {
                        const buttonText = this.castToString(item.text);
                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                        if (!buttonText && !iconExist) return null;
                        return (
                          <ComposerLink key={index} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                              {iconExist && <Base.Media value={item.icon!} className={this.decorateCSS("button-icon")} />}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>}
                {(this.castToString(this.getPropValue("firstdescription")) || this.castToString(this.getPropValue("seconddescription"))) && <Base.VerticalContent className={this.decorateCSS("title-right")}>
                  {this.castToString(this.getPropValue("firstdescription")) && (
                    <Base.SectionDescription className={this.decorateCSS("description-1")}>
                      {this.getPropValue("firstdescription")}
                    </Base.SectionDescription>
                  )}

                  {this.castToString(this.getPropValue("seconddescription")) && (
                    <Base.SectionDescription className={this.decorateCSS("description-2")}>
                      {this.getPropValue("seconddescription")}
                    </Base.SectionDescription>
                  )}
                  {(alignment == "center" && hasValidButtons) && (
                    <div className={this.decorateCSS("link")}>
                      {buttons.map((item: Button, index: number) => {
                        const buttonText = this.castToString(item.text);
                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                        if (!buttonText && !iconExist) return null;
                        return (
                          <ComposerLink key={index} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                              {iconExist && <Base.Media value={item.icon!} className={this.decorateCSS("button-icon")} />}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>}
              </div>
            )
          }

          <div className={this.decorateCSS("section")}>
            <Base.ListGrid className={this.decorateCSS("cards")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 4 }}>
              {cardItems.map((item: CardItem, index: number) => {
                const subtitleExist = !!this.castToString(item.subtitle);
                const cardButtons = item.buttons || [];
                const hasValidCardButtons = cardButtons.some((btn: Button) => {
                  const btnText = this.castToString(btn.text);
                  const btnIconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                  return btnText || btnIconExist;
                });
                return (
                  <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                    {item.icon && (
                      <div
                        className={`${this.decorateCSS("icon-box")} ${!item.iconBackground ? this.decorateCSS("no-background") : ""}`}
                      >
                        <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                      </div>
                    )}

                    {subtitleExist && (
                      <Base.H6 className={this.decorateCSS("card-subtitle")}>{item.subtitle}</Base.H6>
                    )}
                    {this.castToString(item.title) && (
                      <Base.H5 className={this.decorateCSS("card-title")}>{item.title}</Base.H5>
                    )}
                    {this.castToString(item.description) && (
                      <Base.P className={this.decorateCSS("card-description")}>{item.description}</Base.P>
                    )}
                    {hasValidCardButtons && (
                      <div className={this.decorateCSS("card-button-container")}>
                        {cardButtons.map((btn: Button, btnIndex: number) => {
                          const btnText = this.castToString(btn.text);
                          const btnIconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                          if (!btnText && !btnIconExist) return null;
                          return (
                            <ComposerLink key={btnIndex} path={btn.url}>
                              <Base.Button buttonType={btn.type} className={this.decorateCSS("card-button")}>
                                {btnText && <Base.P className={this.decorateCSS("card-button-text")}>{btn.text}</Base.P>}
                                {btnIconExist && <Base.Media className={this.decorateCSS("card-button-icon")} value={btn.icon!} />}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature14;