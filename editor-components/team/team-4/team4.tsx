import * as React from "react";
import styles from "./team4.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type platform = {
  url: string;
  icon: string;
};
type TeamMember = {
  image: string;
  name: string;
  position: string;
  platforms: { icon: string; url: string }[];
};
class Team4 extends Team {
  constructor(props?: any) {
    super(props, styles);
    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebookSquare",
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
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
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
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
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
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook
              ],
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
    });
  }

  getName(): string {
    return "Team 4";
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
                <div className={this.decorateCSS("card-item-count")} style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
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
                      <span className={this.decorateCSS("team-member-name")}>{teamMember.name}</span>
                      <p className={this.decorateCSS("team-member-position")}>{teamMember.position}</p>
                    </div>

                    <div className={this.decorateCSS("icon-group")}>
                      {teamMember.platforms.map(
                        (socialMedia: platform, indexPlatforms: number) => (
                          <ComposerLink
                            key={indexPlatforms}
                            path={socialMedia.url}
                          >
                            <ComposerIcon name={socialMedia.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                          </ComposerLink>
                        )
                      )}
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

export default Team4;
