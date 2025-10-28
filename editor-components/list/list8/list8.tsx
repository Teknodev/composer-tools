import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type listItem = {
  number: number;
  icon: React.JSX.Element;
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
      value: "How it works",
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
          displayer: "List Item",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Box Number",
              value: 1,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaMapLocationDot",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
          displayer: "List Item",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Box Number",
              value: 2,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "HiChartBar",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
          displayer: "List Item",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Box Number",
              value: 3,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaMoneyBillAlt",
              },
              additionalParams: {
                availableTypes: ["icon"],
              },
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
    const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <Base.VerticalContent className={this.decorateCSS("card-titles")}>
              {this.castToString(subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
            </Base.VerticalContent>
            {this.castToString(titledesc) && (
              <Base.VerticalContent className={this.decorateCSS("section-wrapper")} >
                {this.castToString(titledesc) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {titledesc}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            {(listItems.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("boxes")}
                gridCount={{ pc: this.getPropValue("itemCount") }}
              >
                {listItems.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("boxlower")}
                    data-animation={this.getPropValue("hoverAnimation")}
                  >
                    {item.getPropValue("number") && (
                      <div className={this.decorateCSS("circle")}>
                        <Base.H1 className={this.decorateCSS("index")}>
                          {item.getPropValue("number")}
                        </Base.H1>
                      </div>
                    )}
                    {item.icon && (
                      <div className={this.decorateCSS("icon-box")}>
                        <Base.Media
                          value={item.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                          }}
                        />
                      </div>
                    )}
                    {(this.castToString(item.title) || this.castToString(item.text)) && (
                      <div className={this.decorateCSS("titles")}>
                        {this.castToString(item.title) && (
                          <Base.H4 className={this.decorateCSS("midwriting")}>
                            {item.title}
                          </Base.H4>
                        )}
                        {this.castToString(item.text) && (
                          <Base.P className={this.decorateCSS("text")}>
                            {item.text}
                          </Base.P>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </Base.ListGrid>
            )}
            {this.castToString(buttonType.text) && (
              <div className={this.decorateCSS("button-box")}>
                <ComposerLink path={buttonType.url}>
                  <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")}>
                    {buttonType.text}
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