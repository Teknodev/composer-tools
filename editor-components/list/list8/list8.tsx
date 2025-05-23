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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaMapLocationDot",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "HiChartBar",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaMoneyBillAlt",
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
  }

  render() {
    const listItems = this.castToObject<listItem[]>("list-items");
    const title = this.getPropValue("title");
    const titledesc = this.getPropValue("titledesc");
    const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            {(this.castToString(title) || this.castToString(titledesc)) && (
              <Base.VerticalContent className={this.decorateCSS("section-wrapper")} >
                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {this.castToString(titledesc) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("titledesc")}
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
                  <div key={index} className={this.decorateCSS("boxlower")}>
                    {item.getPropValue("number") && (
                      <div className={this.decorateCSS("circle")}>
                        <div className={this.decorateCSS("index")}>
                          {item.getPropValue("number")}
                        </div>
                      </div>
                    )}
                    {item.icon && (
                      <div className={this.decorateCSS("icon-box")}>
                        <Base.Icon
                          name={item.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon"),
                          }}
                        />
                      </div>
                    )}
                    {(this.castToString(item.title) || this.castToString(item.text)) && (
                      <div className={this.decorateCSS("titles")}>
                        {this.castToString(item.title) && (
                          <div className={this.decorateCSS("midwriting")}>
                            {item.title}
                          </div>
                        )}
                        {this.castToString(item.text) && (
                          <div className={this.decorateCSS("text")}>
                            {item.text}
                          </div>
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