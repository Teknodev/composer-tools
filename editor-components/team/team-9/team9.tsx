import * as React from "react";
import styles from "./team9.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

interface Button {
  buttonText: string;
  url: string;
}

interface Card {
  image: string;
  name: string;
  position: string;
}
class Team9 extends Team {
  constructor(props?: any) {
    super(props, styles);

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "We are hiring. View open roles",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The team of the company",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Subtitle",
      value: "The team of a company is a group of individuals who work together to achieve a common goal. In the business world, a team can be composed of employees from different departments, with different roles and responsibilities.",
    });

    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Reverse Count",
      value: 3,
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "team-member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jason Covereye",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo",
            },
          ],
        },
        {
          type: "object",
          key: "team-member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:"https://images.pexels.com/photos/7647920/pexels-photo-7647920.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
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
          key: "team-member",
          displayer: "Team Member",
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
              displayer: "Name",
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

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });
  }

  getName(): string {
    return "Team-9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("button-group")}>
              {this.castToObject<Button[]>("buttons").map(
                (item: Button, indexButtons: number) => {
                  return (
                    <ComposerLink key={indexButtons} path={item.url}>
                      <button className={this.decorateCSS("button")}>
                        {item.buttonText} <span>&#8594;</span>
                      </button>
                    </ComposerLink>
                  );
                }
              )}
            </div>
            <div className={this.decorateCSS("text-group")}>
              <h1>{this.getPropValue("title")}</h1>
              <p>{this.getPropValue("description")}</p>
            </div>
            <div className={this.decorateCSS("image-container")}>
              {this.castToObject<Card[]>("team-members").map(
                (item: Card, indexTeamMembers: number) => {
                  return (
                    <div
                      key={indexTeamMembers}
                      className={this.decorateCSS("card")}
                      style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                    >
                      <img src={item.image} alt="team" />
                      <div className={this.decorateCSS("person-info")}>
                        <h2>{item.name}</h2>
                        <p>{item.position}</p>
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

export default Team9;
