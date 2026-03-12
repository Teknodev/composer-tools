import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list8.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ListItem = {
  number: React.JSX.Element;
  icon: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  text: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};

class List8 extends BaseList {
  static getName(): string {
    return "List 8";
  }

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
      value: "How It Works?",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Aliquam sagittis consectetur ligulan aliquam turpis cursus at. In aliquet auguenec libero ultricies velit pellentesque.",
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
              type: "string",
              key: "number",
              displayer: "Box Number",
              value: "1",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              value: { type: "icon", name: "FaMapLocationDot" },
              additionalParams: { availableTypes: ["icon", "image"] },
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
              value: "List Your Space",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Box Number",
              value: "2",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              value: { type: "icon", name: "HiChartBar" },
              additionalParams: { availableTypes: ["icon", "image"] },
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
              value: "Get More Orders",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "number",
              displayer: "Box Number",
              value: "3",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              value: { type: "icon", name: "FaMoneyBillAlt" },
              additionalParams: { availableTypes: ["icon", "image"] },
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
              value: "Earn Money",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "lorem", "", null, null, "Primary")],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
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

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));

    const listItems = this.castToObject<ListItem[]>("list-items");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const alignment = Base.getContentAlignment();
    const isCenterAlignment = alignment === "center";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <Base.VerticalContent
              className={`${this.decorateCSS("header-section")} ${isCenterAlignment ? this.decorateCSS("align-center") : ""
                }`}
            >
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("header-title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.VerticalContent className={this.decorateCSS("description-wrapper")}>
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                </Base.VerticalContent>
              )}
            </Base.VerticalContent>

            {listItems.length > 0 && (
              <Base.ListGrid
                className={this.decorateCSS("items-wrapper")}
                gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}
              >
                {listItems.map((item: ListItem, index: number) => {
                  const itemSubtitleExist = this.castToString(item.subtitle);
                  const itemTitleExist = this.castToString(item.title);
                  const itemTextExist = this.castToString(item.text);
                  const iconExist = item.icon && (item.icon.name || item.icon.url);
                  const itemNumberExist = this.castToString(item.number);

                  if (!itemTitleExist && !itemTextExist && !iconExist && !itemNumberExist && !itemSubtitleExist) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("list-item")}
                      data-animation={this.getPropValue("hoverAnimation")}
                    >
                      {itemNumberExist && (
                        <div className={this.decorateCSS("number-badge")}>
                          <Base.H1 className={this.decorateCSS("index")}>{item.number}</Base.H1>
                        </div>
                      )}
                      {iconExist && (
                        <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                      )}
                      {(itemSubtitleExist || itemTitleExist || itemTextExist) && (
                        <div className={this.decorateCSS("item-content")}>
                          {itemSubtitleExist && (
                            <Base.H6 className={this.decorateCSS("item-subtitle")}>{item.subtitle}</Base.H6>
                          )}
                          {itemTitleExist && (
                            <Base.H5 className={this.decorateCSS("item-title")}>{item.title}</Base.H5>
                          )}
                          {itemTextExist && (
                            <Base.P className={this.decorateCSS("item-text")}>{item.text}</Base.P>
                          )}
                        </div>
                      )}
                      {item.buttons && item.buttons.length > 0 && (
                        <div className={this.decorateCSS("item-buttons")}>
                          {item.buttons.map((btn: INPUTS.CastedButton, bIndex: number) => {
                            const btnTextExist = this.castToString(btn.text);
                            const btnIconExist = btn.icon && btn.icon.name;
                            if (!btnTextExist && !btnIconExist) return null;
                            return (
                              <ComposerLink key={bIndex} path={btn.url}>
                                <Base.Button
                                  buttonType={btn.type}
                                  className={this.decorateCSS("item-button")}
                                >
                                  {btnTextExist && (
                                    <Base.P className={this.decorateCSS("button-text")}>
                                      {btn.text}
                                    </Base.P>
                                  )}
                                  {btnIconExist && (
                                    <Base.Media
                                      className={this.decorateCSS("button-icon")}
                                      value={btn.icon!}
                                    />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}

            {buttons.length > 0 && (
              <div className={this.decorateCSS("button-wrapper")}>
                {buttons.map((button: INPUTS.CastedButton, index: number) => {
                  const buttonTextExist = this.castToString(button.text);
                  const buttonIconExist = button.icon && button.icon.name;
                  if (!buttonTextExist && !buttonIconExist) return null;

                  return (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                        {buttonTextExist && (
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        )}
                        {buttonIconExist && (
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
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List8;