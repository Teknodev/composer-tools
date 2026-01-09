import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type listItem = {
  number: React.JSX.Element;
  icon: TypeMediaInputValue;
  title: React.JSX.Element;
  text: React.JSX.Element;
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
      key: "titledesc",
      displayer: "Description",
      value: "Aliquam sagittis consectetur ligulan aliquam turpis cursus at. In aliquet auguenec libero ultricies velit pellentesque.",
    });
    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Items",
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
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Items",
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
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Items",
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
    this.addProp(INPUTS.BUTTON("button", "Button", "List your space", "", null, null, "Primary"));
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  render() {
    const listItems = this.castToObject<listItem[]>("list-items");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const titledesc = this.getPropValue("titledesc");
    const description = this.getPropValue("description");
    const descriptionContent = this.castToString(description) ? description : titledesc;
    const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const alignment = Base.getContentAlignment();
    const isLeftAlignment = alignment === "left";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <Base.VerticalContent className={`${this.decorateCSS("header-section")} ${isLeftAlignment ? this.decorateCSS("align-left") : this.decorateCSS("align-center")}`}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("header-title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {this.castToString(descriptionContent) && (
                <Base.VerticalContent className={this.decorateCSS("description-wrapper")}>
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {descriptionContent}
                  </Base.SectionDescription>
                </Base.VerticalContent>
              )}
            </Base.VerticalContent>

            {(listItems.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("items-wrapper")}
                gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}
              >
                {listItems.map((item: listItem, index: number) => {
                  const hasTitle = this.castToString(item.title);
                  const hasText = this.castToString(item.text);
                  const hasIcon = !!item.icon;
                  const hasNumber = this.castToString(item.number);
                  if (!hasTitle && !hasText && !hasIcon && !hasNumber) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("list-item")}
                      data-animation={this.getPropValue("hoverAnimation")}
                    >
                      {this.castToString(item.number) && (
                        <div className={this.decorateCSS("number-badge")}>
                          <Base.H1 className={this.decorateCSS("index")}>
                            {item.number}
                          </Base.H1>
                        </div>
                      )}
                      {item.icon && (
                        <div className={this.decorateCSS("icon-wrapper")}>
                          <div className={this.decorateCSS("icon-container")}>
                            <Base.Media
                              value={item.icon}
                              className={`${this.decorateCSS("icon")} ${this.decorateCSS("media-el")}`}
                            />
                          </div>
                        </div>
                      )}
                      {(this.castToString(item.title) || this.castToString(item.text)) && (
                        <div className={this.decorateCSS("item-content")}>
                          {this.castToString(item.title) && (
                            <Base.H5 className={this.decorateCSS("item-title")}>
                              {item.title}
                            </Base.H5>
                          )}
                          {this.castToString(item.text) && (
                            <Base.P className={this.decorateCSS("item-text")}>
                              {item.text}
                            </Base.P>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </Base.ListGrid>
            )}
            {this.castToString(buttonType.text) && (
              <div className={this.decorateCSS("button-wrapper")}>
                <ComposerLink path={buttonType.url}>
                  <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")}>
                    <Base.P className={this.decorateCSS("button-text")}>
                      {buttonType.text}
                    </Base.P>
                  </Base.Button>
                </ComposerLink>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default List8;