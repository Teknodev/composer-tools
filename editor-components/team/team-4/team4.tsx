import * as React from "react";
import styles from "./team4.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

type SocialMedia = {
  url: string;
  icon: string;
};
type TeamMember = {
  image: string;
  name: string;
  position: string;
  socialMedias: SocialMedia[];
};
class Team4 extends Team {
  constructor(props?: any) {
    super(props, styles);

    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "teamMember",
      displayer: "Team Member",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "",
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
        {
          type: "array",
          key: "socialMedias",
          displayer: "Social Medias",
          value: [
            {
              type: "object",
              key: "media",
              displayer: "Media",
              value: [
                {
                  type: "image",
                  key: "icon",
                  displayer: "Icon",
                  value: "",
                },
                {
                  type: "string",
                  key: "url",
                  displayer: "URL",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    };

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
      value:
        "Mauris eleifend, justo at blandit finibus, ante risus bibendum dolor, quis pellentesque odio dui id nisi. ",
    });
    this.addProp({
      type: "array",
      key: "teamMembers",
      displayer: "Team Members",
      value: [
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });
  }

  getName(): string {
    return "Classic Team List";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <span className={this.decorateCSS("title")} >
            {this.getPropValue("title")}
          </span>
          <p
            className={this.decorateCSS("description")}
            
          >
            {this.getPropValue("description")}
          </p>

          <div
            className={this.decorateCSS("team-members")}
            
          >
            {this.castToObject<TeamMember[]>("teamMembers").map(
              (teamMember: TeamMember, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("team-member")}
                  
                >
                  <img
                    
                    className={this.decorateCSS("member-image")}
                    src={teamMember.image}
                    alt={teamMember.name}
                  />
                  <div
                    
                    className={this.decorateCSS("name-and-position")}
                  >
                    <span>{teamMember.name}</span>
                    <p>{teamMember.position}</p>
                  </div>

                  <div
                    
                    className={this.decorateCSS("social-media-list")}
                  >
                    {teamMember.socialMedias.map(
                      (socialMedia: SocialMedia, index: number) => (
                        <ComposerLink path={socialMedia.url}>
                          <a>
                            <img
                              
                              className={this.decorateCSS("social-media-image")}
                              src={socialMedia.icon}
                              key={index}
                            />
                          </a>
                        </ComposerLink>
                      )
                    )}
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

export default Team4;