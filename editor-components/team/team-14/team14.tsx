import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team14.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  image: string;
  name: React.JSX.Element;
  position: React.JSX.Element;
  description: React.JSX.Element;
};

class Team14 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Meet the creative minds behind the magic! Our team is dynamic blend of visionaries, storytellers, and artisans, united by a passion for innovation and excellence",
    });
    this.addProp({
      type: "array",
      key: "team",
      displayer: "Team",
      value: [
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628416?alt=media&timestamp=1719558632841",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628418?alt=media&timestamp=1719558632841",
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
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628417?alt=media&timestamp=1719558632841",
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
              value: "John",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Project Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Empower your projects with expertise and precisions",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b68ebd2970002c628418?alt=media&timestamp=1719558632841",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 5,
    });
  }

  static getName(): string {
    return "Team 14";
  }
  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");

    const titleValue = this.castToString(title);
    const subtitleValue = this.castToString(subtitle);

    const team = this.castToObject<Card[]>("team");

    const itemCount: number = this.getPropValue("itemCount");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(title || subtitle) && (
            <Base.VerticalContent className={this.decorateCSS("up-page")}>
              {titleValue && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {subtitleValue && <Base.SectionDescription className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {team.length > 0 && (
            <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
              {team
                .filter((teamItem) => teamItem.image)
                .map((teamItem: Card, index: number) => {
                  const image = teamItem.image;
                  const name = this.castToString(teamItem.name);
                  const position = this.castToString(teamItem.position);
                  const description = this.castToString(teamItem.description);

                  return (
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("portfolio")}>
                        {image && <img className={this.decorateCSS("image")} src={image} alt={name} key={index} />}
                        {(name || position || description) && (
                          <Base.VerticalContent className={this.decorateCSS("info")}>
                            {name && <Base.H3 className={this.decorateCSS("name")}>{teamItem.name}</Base.H3>}
                            {position && <Base.H4 className={this.decorateCSS("position")}>{teamItem.position}</Base.H4>}
                            {description && <Base.P className={this.decorateCSS("description")}>{teamItem.description}</Base.P>}
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
