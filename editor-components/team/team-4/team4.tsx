import * as React from "react";
import styles from "./team4.module.scss";
import { Team } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
        "Learn about the talented and dedicated professionals who make up our team and drive our success.",
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
              value:
                "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                  ],
                },
              ],
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
              value:
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                  ],
                },
              ],
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
              value:
                "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                      value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Classic Team List";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <span className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </span>
          <p className={this.decorateCSS("description")}>
            {this.getPropValue("description")}
          </p>

          <div className={this.decorateCSS("team-members")}>
            {this.castToObject<TeamMember[]>("teamMembers").map(
              (teamMember: TeamMember, indexTeamMembers: number) => (
                <div
                  key={indexTeamMembers}
                  className={this.decorateCSS("team-member")}
                >
                  <img
                    className={this.decorateCSS("member-image")}
                    src={teamMember.image}
                    alt={teamMember.name}
                  />
                  <div className={this.decorateCSS("name-and-position")}>
                    <span>{teamMember.name}</span>
                    <p>{teamMember.position}</p>
                  </div>

                  <div className={this.decorateCSS("social-media-list")}>
                    {teamMember.socialMedias.map(
                      (socialMedia: SocialMedia, indexSocialMedias: number) => (
                        <ComposerLink
                          key={indexSocialMedias}
                          path={socialMedia.url}
                        >
                          <img
                            alt=""
                            className={this.decorateCSS("social-media-image")}
                            src={socialMedia.icon}
                          />
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
