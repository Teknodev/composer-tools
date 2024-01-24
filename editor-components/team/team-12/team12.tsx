import * as React from "react";
import styles from "./team12.module.scss";
import { Team } from "../../EditorComponent";

interface Card {
  image: string;
  name: string;
  position: string;
}

class Team12 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Who is on the team",
    });

    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Item Count in a Row",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "John Smith",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Co-Founder",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/7647920/pexels-photo-7647920.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Vaughn Edison",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Web Developer",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Shantel Kiera",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "UI/UX Developer",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team 12";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("title-card")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("all-cards")}>
              {this.castToObject<Card[]>("team-members").map(
                (item: Card, indexTeamMembers: number) => {
                  return (
                    <div
                      key={indexTeamMembers}
                      style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                      className={this.decorateCSS("basic-card")}
                    >
                      <div className={this.decorateCSS("card")}>
                        <img className={this.decorateCSS("image")} src={item.image} alt="person" />
                        <div className={this.decorateCSS("text-group")}>
                          <h1 className={this.decorateCSS("person-name")}>
                            {item.name}
                          </h1>
                          <p className={this.decorateCSS("position")}>
                            {item.position}
                          </p>
                        </div>
                      </div>
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

export default Team12;
