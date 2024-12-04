import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

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
      key: "description",
      displayer: "Description",
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
      max: 4,
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

    const titleExist = !!this.getPropValue("title", { as_string: true });
    const descExist = !!this.getPropValue("description", { as_string: true });

    const overlay: boolean = this.getPropValue("overlay");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("header-title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {descExist && (
              <Base.SectionDescription className={this.decorateCSS("header-description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}

            {cards?.length > 0 && (
              <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("cards-container")}>
                {cards.map((card: Card, index: number) => {
                  const titleExist = !!this.castToString(card.title);

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-item-count")}
                    >
                      {(!!card.image || titleExist) && (
                        <div
                          className={`
                              ${this.decorateCSS("listed")}
                              ${!card.image ? this.decorateCSS("listed-height-modify") : ""}
                            `}
                        >
                          {!!card.image && (
                            <img
                              className={this.decorateCSS("image")}
                              src={card.image}
                              alt={"item" + index}
                            />
                          )}
                          <div
                            className={`
                                ${this.decorateCSS("image-shadow")}
                                ${overlay ? this.decorateCSS("overlay") : ""}
                                ${!card.image ? this.decorateCSS("image-shadow-full-height") : ""}
                              `}
                          >
                            {titleExist && (
                              <Base.H3 className={this.decorateCSS("title")}>
                                {card.title}
                              </Base.H3>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}

            {buttons?.length > 0 && (
              <Base.ContainerGrid className={this.decorateCSS("button-container")}>
                {buttons.map((item: Button, index: number) => {
                  if (!this.castToString(item.text)) return null;
                  return (
                    <Base.Button className={this.decorateCSS("button")} path={item.link} key={index}>
                      {item.text}
                    </Base.Button>
                  );
                })}
              </Base.ContainerGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature6;
