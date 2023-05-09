import * as React from "react";
import styles from "./faq4.module.scss";
import { BaseFAQ, TypeUsableComponentProps } from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

type Card = {
  title: string;
  description: string;
};

class FaqButton extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: PlaceholderFiller.mediumText(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.longText(),
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Page Title",
      value: "FAQ",
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Page Title Description",
      value: PlaceholderFiller.shortText(),
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQ",
    });

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });
  }

  getName(): string {
    return "FAQ-2";
  }

  activeIndex: number = -1;

  render() {
    const handleButton = (index: number) => {
      this.activeIndex = this.activeIndex == index ? -1 : index;
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <h1>{this.getPropValue("subtitle")}</h1>
              <p>{this.getPropValue("text")}</p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("card").map(
                (card: Card, index: any) => {
                  return (
                    <div className={this.decorateCSS("card")} key={"card"}>
                      <div className={this.decorateCSS("child-container")}>
                        <div className={this.decorateCSS("card-title")}>
                          <h3>{card.title}</h3>
                        </div>
                        <div className={this.decorateCSS("icon")}>
                          <img
                            src={
                              this.activeIndex == index
                                ? "https://cdn-icons-png.flaticon.com/512/130/130906.png"
                                : "https://cdn-icons-png.flaticon.com/512/656/656979.png"
                            }
                            onClick={() => handleButton(index)}
                          />
                        </div>
                      </div>
                      <p
                        className={`${
                          this.activeIndex == index
                            ? this.decorateCSS("text")
                            : this.decorateCSS("hide")
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqButton;
