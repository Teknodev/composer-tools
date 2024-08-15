import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  title: JSX.Element;
  image: string;
  overlay: boolean;
  link: string;
};

type Button = {
  text: JSX.Element;
  link: string;
};

class Feature6 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "CASE STUDIES",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "from vision to reality",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668561f10181a1002c33af0e?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Lakeside Redesign: a Rustic House for Modern Living",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668562190181a1002c33af16?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Minimalist Magic: A Contemporary Studio Apartment",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668562330181a1002c33af23?alt=media",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Heritage Home: Restoring Charm in a Victorian House",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
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
      max: 3,
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
              displayer: "Button Text",
              value: "VIEW ALL CASE STUDIES",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });
  }

  getName(): string {
    return "Feature 6";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<Button[]>("buttons");

    const titleExist = this.getPropValue("title", { as_string: true });
    const subtitleExist = this.getPropValue("subtitle", { as_string: true });

    const overlay = this.getPropValue("overlay");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {titleExist && (
              <div className={this.decorateCSS("header-title")}>
                {this.getPropValue("title")}
              </div>
            )}
            {subtitleExist && (
              <div className={this.decorateCSS("header-subtitle")}>
                {this.getPropValue("subtitle")}
              </div>
            )}

            {cards?.length > 0 && (
              <div className={this.decorateCSS("cards-container")}>
                {cards.map((card: Card, idx: number) => {
                  const titleExist = this.castToString(card.title);

                  return (
                    <div
                      className={this.decorateCSS("card-item-count")}
                      style={{
                        width: 90 / this.getPropValue("itemCount") + "%",
                      }}
                      key={idx}
                    >
                      <ComposerLink isFullWidth={true} path={card.link || ""}>
                        {(card.image || titleExist) && (
                          <div
                            style={!card.image ? { height: "300px" } : {}}
                            className={this.decorateCSS("listed")}
                          >
                            {card.image && (
                              <img
                                className={this.decorateCSS("image")}
                                src={card.image}
                                alt="feature"
                              />
                            )}
                            <div
                              style={!card.image ? { height: "100%" } : {}}
                              className={`
                                ${this.decorateCSS("image-shadow")}
                                ${overlay ? this.decorateCSS("overlay") : ""}
                              `}
                            >
                              {titleExist && (
                                <h4 className={this.decorateCSS("title")}>
                                  {card.title}
                                </h4>
                              )}
                            </div>
                          </div>
                        )}
                      </ComposerLink>
                    </div>
                  );
                })}
              </div>
            )}

            {buttons?.length > 0 && (
              <div className={this.decorateCSS("button-position")}>
                {buttons.map((item: Button, idx: number) => {
                  if (this.castToString(item.text))
                    return (
                      <ComposerLink path={item.link} key={idx}>
                        <div className={this.decorateCSS("button")}>
                          {item.text}
                        </div>
                      </ComposerLink>
                    );
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature6;
