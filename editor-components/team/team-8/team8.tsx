import * as React from "react";
import styles from "./team8.module.scss";
import { Team } from "../../EditorComponent";

class Team8 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Team Members",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370e3c68c3c2002cd30814?alt=media&timestamp=1719558632843",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370e3c68c3c2002cd30813?alt=media&timestamp=1719558632843",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370e3c68c3c2002cd30812?alt=media&timestamp=1719558632843",
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
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Team 8";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <h1 className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </h1>

          <div className={this.decorateCSS("team-members")}>
            {this.getPropValue("team-members").map(
              (teamMember: any, index: number) => (
                <div className={this.decorateCSS("card-item-count")} style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                <div key={index} className={this.decorateCSS("team-member")}>
                  <div className={this.decorateCSS("name-and-position")}>
                    <img
                      className={this.decorateCSS("member-image")}
                      src={teamMember.value[0].value}
                      alt={teamMember.value[1].value}
                      />
                    <div className={this.decorateCSS("content")}>
                      <span className={this.decorateCSS("team-member-value")}>{teamMember.value[1].value}</span>
                      <p className={this.decorateCSS("team-member-value-p")}>{teamMember.value[2].value}</p>
                    </div>
                  </div>
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

export default Team8;
