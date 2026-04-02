import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardButton = INPUTS.CastedButton;

type ListItem = {
  icon: TypeMediaInputValue;
  subtitle: JSX.Element;
  description: JSX.Element;
  title: JSX.Element;
  buttons: INPUTS.CastedButton[];
};

class List7 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Features",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Services",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Item",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
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
              value: "Contagious Energy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
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
              value: "Contagious Energy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
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
              value: "Contagious Energy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });

    this.addProp({
      type: "boolean",
      key: "cardNumber",
      displayer: "Card Number",
      value: true,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"],
      },
    });

  }

  static getName(): string {
    return "List 7";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const listItems = this.castToObject<ListItem[]>("list-items");
    const buttons = this.castToObject<CardButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text) || (btn.icon && btn.icon.name));
    const itemCount = this.getPropValue("itemCount");
    const cardNumber = !!this.getPropValue("cardNumber");
    const hoverAnimationValue = this.getPropValue("hoverAnimation");
    const hoverAnimation = Array.isArray(hoverAnimationValue) ? hoverAnimationValue : [];

    const hasHeader = subtitleExist || titleExist || descriptionExist || hasValidButtons;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {hasHeader && (
              <Base.VerticalContent className={this.decorateCSS("header-section")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {hasValidButtons && (
                  <div className={this.decorateCSS("buttons-wrapper")}>
                    {buttons.map((button: CardButton, index: number) => {
                      const buttonText = this.castToString(button.text);
                      const iconExist = button.icon && button.icon.name;
                      if (!buttonText && !iconExist) return null;
                      return (
                        <ComposerLink key={index} path={button.url}>
                          <Base.Button
                            buttonType={button.type}
                            className={this.decorateCSS("button")}
                          >
                            {buttonText && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {button.text}
                              </Base.P>
                            )}
                            {iconExist && (
                              <Base.Media
                                className={this.decorateCSS("button-icon")}
                                value={button.icon!}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {listItems.length > 0 && (
              <Base.ListGrid
                className={this.decorateCSS("items-wrapper")}
                gridCount={{ pc: itemCount, tablet: 3, phone: 1 }}
              >
                {listItems.map((item: ListItem, index: number) => {
                  const itemTitleExist = this.castToString(item.title);
                  const itemDescriptionExist = this.castToString(item.description);
                  const itemSubtitleExist = this.castToString(item.subtitle);
                  const iconExist = item.icon && (item.icon.name || item.icon.url);
                  const cardButtons = item.buttons || [];
                  const hasValidCardButtons = cardButtons.some((btn: INPUTS.CastedButton) => this.castToString(btn.text) || (btn.icon && btn.icon.name));

                  if (!itemTitleExist && !itemDescriptionExist && !cardNumber) return null;

                  return (
                    <div key={index} className={this.decorateCSS("list-item")} data-animation={hoverAnimation.join(" ")}>
                      <div className={this.decorateCSS("border-layer-1")}></div>
                      <div className={this.decorateCSS("border-layer-2")}></div>
                      <Base.VerticalContent
                        className={this.decorateCSS("item-content")}
                      >
                        {cardNumber && (
                          <Base.H1 className={this.decorateCSS("index")}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </Base.H1>
                        )}
                        {iconExist && (
                          <Base.Media
                            value={item.icon}
                            className={this.decorateCSS("item-icon")}
                          />
                        )}
                        {itemSubtitleExist && (
                          <Base.H6 className={this.decorateCSS("item-subtitle")}>
                            {item.subtitle}
                          </Base.H6>
                        )}
                        {itemTitleExist && (
                          <Base.H3 className={this.decorateCSS("item-title")}>
                            {item.title}
                          </Base.H3>
                        )}
                        {itemDescriptionExist && (
                          <Base.P className={this.decorateCSS("item-description")}>
                            {item.description}
                          </Base.P>
                        )}
                        {hasValidCardButtons && (
                          <div className={this.decorateCSS("card-button-container")}>
                            {cardButtons.map((btn: INPUTS.CastedButton, btnIndex: number) => {
                              const btnText = this.castToString(btn.text);
                              const btnIconExist = btn.icon && btn.icon.name;
                              if (!btnText && !btnIconExist) return null;
                              return (
                                <ComposerLink key={btnIndex} path={btn.url}>
                                  <Base.Button buttonType={btn.type} className={this.decorateCSS("card-button")}>
                                    {btnText && <Base.P className={this.decorateCSS("card-button-text")}>{btn.text}</Base.P>}
                                    {btnIconExist && <Base.Media className={this.decorateCSS("card-button-icon")} value={btn.icon as unknown as TypeMediaInputValue} />}
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
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

export default List7;
