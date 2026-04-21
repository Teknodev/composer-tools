import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";


class Form1 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Contact Us",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get connected",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus.",
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
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "MdMail"
              },
            },
            {
              type: "boolean",
              key: "isIconFilled",
              displayer: "Icon Background",
              value: true,
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
              value: "Send Email",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
              type: "array",
              key: "rows",
              displayer: "Rows",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "info@mail.com",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "support@mail.com",
                    },
                  ],
                },
              ],
            },
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
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPhone"
              },
            },
            {
              type: "boolean",
              key: "isIconFilled",
              displayer: "Icon Background",
              value: false,
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
              value: "Call Us",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
              type: "array",
              key: "rows",
              displayer: "Rows",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "+1 2222 333 44 55",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "+2 3333 444 55 66",
                    },
                  ],
                },
              ],
            },
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
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaLocationDot"
              },
            },
            {
              type: "boolean",
              key: "isIconFilled",
              displayer: "Icon Background",
              value: false,
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
              value: "Address",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
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
              type: "array",
              key: "rows",
              displayer: "Rows",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "380 st. Kilda Road, Acme Corp, 11111",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "item",
                      displayer: "Item",
                      value: "Australia",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Form 1";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const titleExist = this.castToString(title);
    const subtitleExist = this.castToString(subtitle);

    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => {
      const buttonText = this.castToString(btn.text);
      return buttonText || !!btn.icon;
    });

    const cards = this.castToObject<any>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist || hasValidButtons) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("section-title")}>{title}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("section-description")}>{description}</Base.SectionDescription>}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const iconExist = !!item.icon;
                    if (!buttonText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button
                          buttonType={item.type}
                          className={this.decorateCSS("button")}
                        >
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text}
                            </Base.P>
                          )}
                          {iconExist && (
                            <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}

          {cards?.length > 0 && (
            <Base.ListGrid gridCount={{ pc: 3, tablet: 3, phone: 1 }} className={this.decorateCSS("cards-container")}>
              {cards.map((item: any, index: number) => {
                const iconExist = !!item.icon;
                const cardTitleExist = !!this.castToString(item.title);
                const cardSubtitleExist = this.castToString(item.subtitle);
                const cardDescriptionExist = this.castToString(item.description);
                const cardButtons = item.buttons || [];
                const hasValidCardButtons = cardButtons.some((btn: any) => {
                  const btnText = this.castToString(btn.text);
                  return btnText || !!btn.icon;
                });

                if (!iconExist && !cardTitleExist && !item.rows.length && !cardSubtitleExist && !cardDescriptionExist && !hasValidCardButtons) return null;

                return (
                  <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                    {iconExist && (
                      <div
                        className={`${this.decorateCSS("icon-container")} ${item.isIconFilled ? this.decorateCSS("filled") : ""}`}
                      >
                        <Base.Media
                          value={item.icon}
                          className={this.decorateCSS("icon")}
                        />
                      </div>
                    )}
                    {cardSubtitleExist && <Base.H6 className={this.decorateCSS("card-subtitle")}>{item.subtitle}</Base.H6>}
                    {cardTitleExist && <Base.H5 className={this.decorateCSS("title")}>{item.title}</Base.H5>}
                    {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{item.description}</Base.P>}
                    <Base.VerticalContent className={this.decorateCSS("rows")}>
                      {item.rows.map((row: any, rowIndex: number) => {
                        const itemExist = this.castToString(row.item);
                        return itemExist && <Base.P key={rowIndex} className={this.decorateCSS("row-item")}>{row.item}</Base.P>;
                      })}
                    </Base.VerticalContent>
                    {hasValidCardButtons && (
                      <div className={this.decorateCSS("card-button-container")}>
                        {cardButtons.map((btn: any, btnIndex: number) => {
                          const btnText = this.castToString(btn.text);
                          const btnIcon = !!btn.icon;
                          if (!btnText && !btnIcon) return null;
                          return (
                            <ComposerLink key={btnIndex} path={btn.url}>
                              <Base.Button
                                buttonType={btn.type}
                                className={this.decorateCSS("card-button")}
                              >
                                {btnText && (
                                  <Base.P className={this.decorateCSS("card-button-text")}>
                                    {btn.text}
                                  </Base.P>
                                )}
                                {btnIcon && (
                                  <Base.Icon name={btn.icon} propsIcon={{ className: this.decorateCSS("card-button-icon") }} />
                                )}
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
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form1;

