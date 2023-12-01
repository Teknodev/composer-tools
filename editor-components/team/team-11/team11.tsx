import * as React from "react";
import styles from "./team11.module.scss";
import { Team } from "../../EditorComponent";

class Team11 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "MEET THE TEAM",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "WHO IS ON THE TEAM",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "In any team, there are several key players who work together to achieve common goals. These individuals bring their unique skills, experiences, and perspectives to the table, and work collaboratively to ensure the success of the team.",
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://images.pexels.com/photos/7034632/pexels-photo-7034632.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ],
    });
  }

  getName(): string {
    return "Team-11";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("basic-card")}>
              <p className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</p>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
            </div>
            <div className={this.decorateCSS("team-members")}>
              {this.getPropValue("team-members").map(
                (item: any, indexTeamMembers: number) => (
                  <img key={indexTeamMembers} src={item.value} alt=""/>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team11;
