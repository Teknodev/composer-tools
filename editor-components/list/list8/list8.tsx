import { ReactNode } from "react";
import { BaseList } from "../../EditorComponent";
import React from "react";
import styles from "./list8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type listItem = {
  number: number;
  icon: JSX.Element;
  title: string;
  Text: string;
};

//CLASS
class List8 extends BaseList {
  //getName
  getName(): string {
    return "List 8";
  }

  //constructor
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
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "List your space",
    });
    this.addProp({
      type: "page",
      key: "button_url",
      displayer: "Button Url",
      value: ""
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
      max: 4
    });
  }
  //end constructor

  render(): ReactNode {
    const ListItems = this.castToObject<listItem[]>("list-items");
    const title = this.getPropValue("title");
    const titledesc = this.getPropValue("titledesc");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <section id="section_id" className={this.decorateCSS("section")}>
            {(this.castToString(title).trim() || this.castToString(titledesc).trim()) && (
              <Base.VerticalContent>
                {this.castToString(title).trim() && (
                  <Base.SectionTitle className={this.decorateCSS("h1")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {this.castToString(titledesc).trim() && (
                  <Base.SectionDescription className={this.decorateCSS("h1-lowertext")}>
                    {this.getPropValue("titledesc")}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            <Base.ListGrid
              className={this.decorateCSS("boxes")}
              gridCount={{ pc: this.getPropValue("itemCount") }}
            >
              {ListItems.map((item: any, index: number) => (
                <div key={index} className={this.decorateCSS("boxlower")}>
                  {item.getPropValue("number") && (
                    <div className={this.decorateCSS("circle")}>
                      {item.getPropValue("number")}
                    </div>
                  )}
                  <div className={this.decorateCSS("icon-box")}>
                    {item.icon && (
                      <ComposerIcon
                        name={item.icon}
                        propsIcon={{
                          className: this.decorateCSS("icon"),
                        }}
                      />
                    )}
                  </div>
                  {(this.castToString(item.title) || this.castToString(item.text)) && (
                    <Base.VerticalContent className={this.decorateCSS("titles")}>
                      {this.castToString(item.title).trim() && (
                        <Base.P className={this.decorateCSS("midwriting")}>
                          {item.title}
                        </Base.P>
                      )}
                        {this.castToString(item.text).trim() && (
                        <Base.P className={this.decorateCSS("text")}>
                          {item.text}
                        </Base.P>
                      )}
                    </Base.VerticalContent>
                  )}
                </div>
              ))}
            </Base.ListGrid>
            
            {this.castToString(this.getPropValue("button_text")).trim() && (
              <div className={this.decorateCSS("button-box")}>
                <ComposerLink path={this.getPropValue("button_url")}>
                  <button className={this.decorateCSS("button")}>
                    {this.getPropValue("button_text")}
                  </button>
                </ComposerLink>
              </div>
            )}
          </section>
        </Base.MaxContent>
      </Base.Container>
    );
  }

}
//end CLASS

export default List8;