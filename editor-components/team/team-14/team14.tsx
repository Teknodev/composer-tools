import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team14.module.scss";

type Card = {
  image: string;
  name: string;
  position: string;
  description: string;
}

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
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value:
                "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value:
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value:
                "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

  componentDidMount() {
    const downPageElement = document.querySelector(`.${styles["down-page"]}`);
    if (downPageElement) {
      const images = downPageElement.querySelectorAll("img");
      if (images.length == 0) {
        downPageElement.remove();
      }
    }
  }

  getName(): string {
    return "Team 14";
  }
  render() {
    const title = this.getPropValue("title", { as_string: true });
    const subtitle = this.getPropValue("subtitle", { as_string: true });
    const team = this.castToObject<Card[]>("team");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {(title || subtitle) && (
            <div className={this.decorateCSS("up-page")}>
              {title && (<h1 className={this.decorateCSS("title")}>{title}</h1>)}
              {subtitle && (<p className={this.decorateCSS("subtitle")}>{subtitle}</p>)}
            </div>
          )}

          <div className={this.decorateCSS("down-page")}
            style={{
              gridTemplateColumns: `repeat(${this.getPropValue(
                "itemCount"
              )}, 1fr)`,
            }}
          >
            {team.map((teamItem: Card, index: number) => {
              const image = teamItem.image;
              const name = this.getPropValue(teamItem.name, { as_string: true });
              const position = this.getPropValue(teamItem.position, { as_string: true });
              const description = this.getPropValue(teamItem.description, { as_string: true });

              return (
                <div className={this.decorateCSS("card")}>
                  <div className={this.decorateCSS("portfolio")}>
                    {image && (
                      <img className={this.decorateCSS("image")}
                        src={image}
                        alt={`${name}'s image`}
                        key={`team14-${index}`}
                      />
                    )}
                    { (
                      <div className={this.decorateCSS("info")}>
                        {(
                          <div className={this.decorateCSS("name")}>{name}</div>
                        )}
                        {(
                          <div className={this.decorateCSS("position")}>{position}</div>
                        )}
                        {(
                          <div className={this.decorateCSS("description")}>{description}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Team14;
