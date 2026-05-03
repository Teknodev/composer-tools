import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team14.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  position: React.JSX.Element;
  description: React.JSX.Element;
};

class Team14 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({

      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Meet the creative minds behind the magic! Our team is dynamic blend of visionaries, storytellers, and artisans, united by a passion for innovation and excellence",
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
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Mark",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Senior Product Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Crafting innovative design for the future, with a blend of experience and creativity.",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628416?alt=media&timestamp=1719558632841",
              },
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jullie",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Content Creator",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Cragfting captivating content to inform, inspire and engage. Let's tell your story together.",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628418?alt=media&timestamp=1719558632841",
              },
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jade",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Creative Director",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Bringing visions to life through innovative ideas and strategic executions. Transforming concenpts into captivating visual stories.",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628417?alt=media&timestamp=1719558632841",
              },
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

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "Team 14";
  }
  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const cards = this.castToObject<Card[]>("cards");
    const itemCount: number = this.getPropValue("itemCount");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitle || title || description) && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionDescription className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionDescription>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          {cards.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
              {cards
                .filter((cardItem) => cardItem.profileImage)
                .map((cardItem: Card, index: number) => {
                  const image = cardItem.profileImage;
                  const name = this.castToString(cardItem.name);
                  const position = this.castToString(cardItem.position);
                  const description = this.castToString(cardItem.description);

                  return (
                    <div key={index} className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("portfolio")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                        {image && <Base.Media value={image} className={this.decorateCSS("image")} data-animation={this.getPropValue("hoverAnimation").join(" ")} />}
                        {(name || position || description) && (
                          <Base.VerticalContent className={this.decorateCSS("info")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                            {name && <Base.H3 className={this.decorateCSS("name")}>{cardItem.name}</Base.H3>}
                            {position && <Base.H4 className={this.decorateCSS("position")}>{cardItem.position}</Base.H4>}
                            {description && <Base.P className={this.decorateCSS("description")}>{cardItem.description}</Base.P>}
                          </Base.VerticalContent>
                        )}
                      </div>
                    </div>
                  );
                })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Team14;