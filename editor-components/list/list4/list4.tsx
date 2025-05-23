import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list4.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type Card = {
  description: string;
  icon: React.JSX.Element;
  title: string;
};

class list4 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We are delivering beautiful digital products for you.",
    });

    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "Content Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Creative Idea",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaTooth",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [,
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "High Creative Minds",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPencilAlt",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Business Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Web design encompasses many different skills and disciplines in the production of all web.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaSuitcaseRolling",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
    this.addProp({
      type: "boolean",
      key: "showIndex",
      displayer: "Show Index",
      value: true,
    });

  }

  static getName(): string {
    return "list 4";
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")} >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent>
            <Base.SectionSubTitle>
              {this.getPropValue("subtitle")}
            </Base.SectionSubTitle>
            <Base.SectionTitle>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          </Base.VerticalContent>
          <Base.ListGrid className={this.decorateCSS("card-child")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2 }}>
            {this.castToObject<Card[]>("content-card").map(
              (card: any, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("card-item-count")}
                >
                  <div className={this.decorateCSS("line-box")}>
                    <div className={this.decorateCSS("line-1")}></div>
                    <div className={this.decorateCSS("line-2")}></div>
                    <div className={this.decorateCSS("line-3")}></div>
                    <div className={this.decorateCSS("line-4")}></div>
                  </div>
                  <div className={`${this.decorateCSS("card-title")} ${this.getPropValue("showIndex") && this.decorateCSS("index")}`}>
                    {(index + 1).toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
                  </div>
                  <div
                    key={`cnt-4-card-${index}`}
                    className={this.decorateCSS("card")}
                  >
                    <Base.VerticalContent className={this.decorateCSS("color-box")}>
                      {card.icon && (
                        <Base.Icon
                          name={card.icon}
                          propsIcon={{
                            className: this.decorateCSS("icon")
                          }}
                        />
                      )}

                      <Base.VerticalContent className={this.decorateCSS("card-title-wrapper")}>
                        {this.castToString(card.title) && (
                          <Base.H3 className={this.decorateCSS("card-subtitle")}>
                            {card.title}
                          </Base.H3>
                        )}
                        {this.castToString(card.description) && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {card.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    </Base.VerticalContent>
                  </div>
                </div>
              )
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default list4;