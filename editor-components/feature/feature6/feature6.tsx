import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  title: React.JSX.Element;
  image: { type: "image"; url: string };
  overlay: boolean;
  link: string;
};

class Feature6 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Case Studies",
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
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668561f10181a1002c33af0e?alt=media",
              },
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
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668562190181a1002c33af16?alt=media",
              },
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
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668562330181a1002c33af23?alt=media",
              },
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
              displayer: "Navigate To",
              value: "",
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
      max: 4,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "VIEW ALL CASE STUDIES", "", null, null, "Primary"),
      ],
      additionalParams: {
        maxElementCount: 2,
      },
    });
  }

  static getName(): string {
    return "Feature 6";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const titleExist = this.castToString(this.getPropValue("title"));
    const descExist = this.castToString(this.getPropValue("description"));

    const overlay: boolean = this.getPropValue("overlay");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            {(titleExist || descExist) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
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
              </Base.VerticalContent>
            )}

            {cards?.length > 0 && (
              <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("cards-container")}>
                {cards.map((card: Card, index: number) => {
                  const titleExist = !!this.castToString(card.title);
                  const imageExist = !!card.image?.url;

                  const shouldRender = (titleExist || imageExist);

                  if (!shouldRender) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-item-count")}
                    >
                      <div className={this.decorateCSS("listed")}>
                        {!!card.image && (
                          <Base.Media
                            value={card.image}
                            className={this.decorateCSS("image")}
                          />
                        )}
                        <div
                          className={`
                            ${this.decorateCSS("image-shadow")}
                            ${overlay ? this.decorateCSS("overlay") : ""}
                          `}
                        >
                          {titleExist && (
                            <Base.H3 className={this.decorateCSS("title")}>
                              {card.title}
                            </Base.H3>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}

            {buttons?.length > 0 && (
              <Base.ContainerGrid className={this.decorateCSS("button-container")}>
                {buttons.map((item: INPUTS.CastedButton) => {
                  if (!this.castToString(item.text)) return null;
                  return (
                    <ComposerLink path={item.url}>
                      <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        {item.text}
                      </Base.Button>
                    </ComposerLink>
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
