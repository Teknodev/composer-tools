import * as React from "react";
import styles from "./team4.module.scss";
import { Team } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

type TeamMember = {
  image: string;
  name: JSX.Element;
  position: JSX.Element;
  platforms: { icon: string; url: string }[];
};
class Team4 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Team Members",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Learn about the talented and dedicated professionals who make up our team and drive our success.",
    });
    this.addProp({
      type: "array",
      key: "teamMembers",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "teamMember",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437087c68c3c2002cd307d3?alt=media&timestamp=1719502692150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Matilda Jarod",
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
          key: "teamMember",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437087c68c3c2002cd307d2?alt=media&timestamp=1719502692150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Reagan Colby",
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
          key: "teamMember",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437087c68c3c2002cd307d1?alt=media&timestamp=1719502692150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Genevieve Sara",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "UI/UX Developer",
            },
          ],
        },
        {
          type: "object",
          key: "teamMember",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437087c68c3c2002cd307d3?alt=media&timestamp=1719502692150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Matilda Jarod",
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
          key: "teamMember",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437087c68c3c2002cd307d2?alt=media&timestamp=1719502692150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Reagan Colby",
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
          key: "teamMember",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437087c68c3c2002cd307d1?alt=media&timestamp=1719502692150",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Genevieve Sara",
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
      value: 3,
      max: 4,
    });
  }

  getName(): string {
    return "Team 4";
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("up-content")}>
            <Base.H1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H1>
            <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>
          </Base.VerticalContent>

          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 1, phone: 1 }} className={this.decorateCSS("team-members")}>
            {this.castToObject<TeamMember[]>("teamMembers").map((teamMember: TeamMember, indexTeamMembers: number) => {
              const teamMemberName = this.castToString(teamMember.name);
              const teamMemberPosition = this.castToString(teamMember.position);
              return (
                (teamMemberName || teamMemberPosition || teamMember.image) && (
                  <Base.VerticalContent key={indexTeamMembers} className={this.decorateCSS("team-member")}>
                    {teamMember.image && <img className={this.decorateCSS("member-image")} src={teamMember.image} alt={teamMemberName} />}
                    <Base.VerticalContent className={this.decorateCSS("name-and-position")}>
                      {teamMemberName && <Base.H2 className={this.decorateCSS("team-member-name")}>{teamMember.name}</Base.H2>}
                      {teamMemberPosition && <Base.P className={this.decorateCSS("team-member-position")}>{teamMember.position}</Base.P>}
                    </Base.VerticalContent>
                  </Base.VerticalContent>
                )
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team4;
