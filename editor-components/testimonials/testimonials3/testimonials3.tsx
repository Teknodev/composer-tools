import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials3.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
};
class Testimonials3Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "icon",
      key: "star_icon",
      displayer: "Star Icon",
      value: "FaStar"
    })
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''good and responsive design''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Matt Kenton",
                      displayer: "Title",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "star",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''fast and good support team''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Tamsen Fannie",
                      displayer: "Title",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "number",
                      key: "start",
                      value: 5,
                      displayer: "Star",
                    },
                    {
                      type: "string",
                      key: "subtitle",
                      value: "''Innovative designs and easy use''",
                      displayer: "Subtitle",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Brynn Samantha",
                      displayer: "Title",
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

  getName(): string {
    return "Testimonials 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials3")}>
            {this.castToObject<ISection[]>("card-items").map(
              (section: any, index: number) => (
                <div key={index} className={this.decorateCSS("card-child")}>
                  {section.items.map((item: any, index: number) => (
                    <div
                      key={`testimonials3-${index}`}
                      className={this.decorateCSS("card")}
                    >
                      <div className={styles["stars"]}>
                        {[...Array(Number(item.value[0].value))].map(
                          (item: any, index: number) => (
                            <ComposerIcon name={this.getPropValue("star_icon")} propsIcon={{ className: this.decorateCSS("star") }} />
                          )
                        )}
                      </div>
                      <span className={this.decorateCSS("item-value1")}>{item.value[1].value}</span>
                      <h5 className={this.decorateCSS("item-value2")}>{item.value[2].value}</h5>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials3Page;
