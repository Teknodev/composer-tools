import * as React from "react";
import styles from "./faq2.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseFAQ, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

type Card = {
  cardTitle: string;
  description: string;
};

type Button = {
  link: string;
  text: string;
  isPrimary: boolean;
};

class FaqContainer extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "string",
          key: "cardTitle",
          displayer: "Question",
          value: PlaceholderFiller.shortText(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Answer",
          value:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry \
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
                     but also the leap into electronic..",
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
      key: "title",
      displayer: "Title Description",
      value: PlaceholderFiller.mediumText(),
    });

    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Container Title",
      value: PlaceholderFiller.shortText(),
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Container Description",
      value: PlaceholderFiller.mediumText(),
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "FAQ",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Row",
      value: 3,
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
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Open Positions",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is primary",
              value: true,
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "FAQ MIDDLE";
  }

  render() {
    const littleScreen = {
      width: "100%",
      display: "flex",
      flex: "wrap",
      justifyContent: "center",
    };

    const wideScreen = {
      width: 90 / this.getPropValue("itemCount") + "%",
      display: "flex",
      justifyContent: "center",
    };

    let style = function () {
      if (window.innerWidth < 800) {
        return littleScreen;
      } else {
        return wideScreen;
      }
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
              <p>{this.getPropValue("title")}</p>
            </div>
            <div className={this.decorateCSS("card-page")}>
              {this.castToObject<Card[]>("card").map((item: Card) => {
                return (
                  <div style={style()}>
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("icon")}>
                        <div>?</div>
                      </div>
                      <div className={this.decorateCSS("title")}>
                        <h2>{item.cardTitle}</h2>
                      </div>
                      <div className={this.decorateCSS("description")}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={this.decorateCSS("down-container")}>
              <div className={this.decorateCSS("child-container")}>
                <h1>{this.getPropValue("title2")}</h1>
                <p>{this.getPropValue("description")}</p>
                <div className={this.decorateCSS("button-group")}>
                  {this.castToObject<Button[]>("buttons").map(
                    (button: Button) => {
                      return (
                        <ComposerLink path={button.link}>
                          <button
                            className={
                              this.decorateCSS("button") +
                              " " +
                              (button.isPrimary
                                ? this.decorateCSS("primary")
                                : this.decorateCSS("secondary"))
                            }
                          >
                            {button.text}
                          </button>
                        </ComposerLink>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqContainer;
