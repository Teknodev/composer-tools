import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list3.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type CardButton = Omit<INPUTS.CastedButton, "icon"> & {
  icon: TypeMediaInputValue | null;
};

type Item = {
  itemTitle: JSX.Element;
  texts: TextItem[];
};
type TextItem = {
  topText: JSX.Element;
  bottomText: JSX.Element;
};

class List3 extends BaseList {
  static getName(): string {
    return "List 3";
  }
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Schedule",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Event Schedule",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem ipsum dolor consectetur eiusmod tempor incididunt labore exercitation tempor.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download Schedule", "", "FaDownload", null, "Primary")
      ],
    });

    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Friday, Dec 24",
            },
            {
              type: "array",
              key: "texts",
              displayer: "Texts",
              value: [
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Psychologist - John Parker" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "10:00 AM - 12:30 PM" },
                  ]
                },
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Sociology - Herman Miller" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "02:00 PM - 04:30 PM" },
                  ]
                },
                {
                  type: "object",
                  key: "text",
                  displayer: "Text",
                  value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Geologist - Jeremy Dupont" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "05:00 PM - 07:30 PM" },
                  ]
                },
              ]
            }
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Saturday, Dec 25",
            },
            {
              type: "array",
              key: "texts",
              displayer: "Texts",
              value: [
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Economy - Michal Ruheen" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "10:00 AM - 12:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Engineer - Jessica Dover" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "02:00 PM - 04:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Psychologist - John Parker" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "05:00 PM - 07:30 PM" },
                  ]
                },
              ]
            }
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Sunday, Dec 26",
            },
            {
              type: "array",
              key: "texts",
              displayer: "Texts",
              value: [
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Biologist - Saleena Fountain" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "10:00 AM - 12:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Secretary - Paulina Morris" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "02:00 PM - 04:30 PM" },
                  ]
                },
                {
                  type: "object", key: "text", displayer: "Text", value: [
                    { type: "string", key: "topText", displayer: "Top Text", value: "Politician - Wendaya Royin" },
                    { type: "string", key: "bottomText", displayer: "Bottom Text", value: "05:00 PM - 07:30 PM" },
                  ]
                },
              ]
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "cardNumber",
      displayer: "Card Number",
      value: true,
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
  }

  render() {
    const listItems = this.castToObject<Item[]>("listItems");
    const buttons = this.castToObject<CardButton[]>("buttons") || [];
    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const hoverAnimation = (this.getPropValue("hoverAnimation") as string[]) || [];
    const itemCount = this.getPropValue("itemCount");
    const cardNumber = this.getPropValue("cardNumber");
    const line = this.getPropValue("line");
    const alignment = Base.getContentAlignment();
    const hasHeaderContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")} isFull="true">
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid className={`${this.decorateCSS("cards-grid")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""} ${line ? this.decorateCSS("has-line") : ""}`} gridCount={{ pc: itemCount, tablet: 2, phone: 1 }}>
            {hasHeaderContent && (
              <Base.VerticalContent className={this.decorateCSS("intro-card")} data-animation={hoverAnimation.join(" ")}>
                {(subtitleExist || titleExist || descriptionExist) && (
                  <Base.VerticalContent className={this.decorateCSS("intro-content")}>
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
                  </Base.VerticalContent>
                )}
                {buttons.length > 0 &&
                  buttons.map((btn: CardButton, index: number) => {
                    const buttonText = this.castToString(btn.text);
                    const iconMedia = btn.icon as TypeMediaInputValue;
                    const iconExist =
                      iconMedia && iconMedia.type === "icon" && iconMedia.name;
                    if (!buttonText && !iconExist) return null;

                    return (
                      <ComposerLink key={index} path={btn.url}>
                        <Base.Button
                          buttonType={btn.type}
                          className={this.decorateCSS("button")}
                        >
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {btn.text}
                            </Base.P>
                          )}
                          {iconExist && (
                            <Base.Media
                              value={iconMedia}
                              className={this.decorateCSS("button-icon")}
                            />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
              </Base.VerticalContent>
            )}
            {listItems.map((listItem: Item, index: number) => {
              return (
                <div
                  key={index}
                  className={this.decorateCSS("card")}
                  data-animation={hoverAnimation.join(" ")}
                >
                  <Base.VerticalContent className={this.decorateCSS("card-content")}>
                    {this.castToString(listItem.itemTitle) && (
                      <Base.H5 className={this.decorateCSS("card-title")}>
                        {listItem.itemTitle}
                      </Base.H5>
                    )}
                    {listItem.texts.map((item: TextItem, tIndex: number) => (
                      <Base.VerticalContent key={tIndex} className={this.decorateCSS("event-item")}>
                        {line && tIndex > 0 && (
                          <div className={this.decorateCSS("divider")}></div>
                        )}
                        {this.castToString(item.topText) && (
                          <Base.P className={this.decorateCSS("event-text-top")}>{item.topText}</Base.P>
                        )}
                        {this.castToString(item.bottomText) && (
                          <Base.P className={this.decorateCSS("event-text-bottom")}>{item.bottomText}</Base.P>
                        )}
                      </Base.VerticalContent>
                    ))}
                  </Base.VerticalContent>
                  {cardNumber && (
                    <Base.H1 className={this.decorateCSS("card-number")}>
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </Base.H1>
                  )}
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List3;
