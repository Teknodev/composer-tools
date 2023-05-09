import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card6.module.scss";

type Horizontals = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  link: string;
};
class Card6 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps = {
      type: "object",
      key: "horizontals",
      displayer: "Horizontal",
      value: [
        {
          type: "string",
          key: "title",
          value: PlaceholderFiller.string(),
          displayer: "Title",
        },
        {
          type: "string",
          key: "description",
          value: PlaceholderFiller.shortText(),
          displayer: "Description",
        },
        {
          type: "string",
          key: "buttonText",
          value: "LEARN MORE",
          displayer: "Button Text",
        },
        {
          type: "image",
          key: "image",
          value: "https://static.thenounproject.com/png/105256-200.png",
          displayer: "Image",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    }
    this.addProp({
      type: "array",
      key: "horizontal",
      displayer: "Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 6";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}

      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<Horizontals[]>("horizontal").map(
              (horizontals: any, index: number) => (
                <div
                  className={this.decorateCSS("horizontal")}

                  key={index}
                >
                  <img
                    className={this.decorateCSS("image")}

                    src={horizontals.image}
                  ></img>
                  <div className={this.decorateCSS("block")}>
                    <h3
                      className={this.decorateCSS("title")}

                    >
                      {horizontals.title}
                    </h3>
                    <p
                      className={this.decorateCSS("title-description")}

                    >
                      {horizontals.description}
                    </p>
                    <ComposerLink path={horizontals.link}>
                      <a
                        className={this.decorateCSS("button")}

                      >
                        {horizontals.buttonText}
                      </a>
                    </ComposerLink>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card6;
