import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Platform={
  icon: string;
  url: string;
}

type TeamCardMember = {
  name: string;
  description: string;
  image: string;
  buttonText: string;
  platforms: { icon: string; url: string }[];
};
class Team2 extends Team {
  constructor(props?: any) {
    super(props, styles);
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaTwitterSquare",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

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

    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FiInstagram",
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
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Discover our domain expert team.",
    });

    this.addProp({
      type: "array",
      key: "team-card",
      displayer: "Team Card",
      value: [
        {
          type: "object",
          key: "team",
          displayer: "Team",
          value: [
            {
              type: "string",
              key: "name",
              value: "Clover Ruth",
              displayer: "Name",
            },
            {
              type: "string",
              key: "description",
              value:
                "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1682518974394",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
              ],
            },

          ],
        },
        {
          type: "object",
          key: "team",
          displayer: "Team",
          value: [
            {
              type: "string",
              key: "name",
              value: "Jacklyn Mia",
              displayer: "Name",
            },
            {
              type: "string",
              key: "description",
              value:
                "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve common goals.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
              ],
            },

          ],
        },
        {
          type: "object",
          key: "team",
          displayer: "Team",
          value: [
            {
              type: "string",
              key: "name",
              value: "Jaylyn Kaleigh",
              displayer: "Name",
            },
            {
              type: "string",
              key: "description",
              value:
                "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
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
    return "Team 2";
  }

  render() {
   
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <h2 className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </h2>
          <h4 className={this.decorateCSS("description")}>
            {this.getPropValue("description")}
          </h4>
          <div className={this.decorateCSS("team-members")}>
            {this.castToObject<TeamCardMember[]>("team-card").map(
              (team: any, index: number) => (
                <div
                  className={this.decorateCSS("card-item-count")}
                  style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}
                >
                  <div
                    className={`${this.decorateCSS("team")}`}
                    key={index}
                  >
                    <img
                      className={this.decorateCSS("image")}
                      src={team.image}
                      alt=""
                    ></img>
                    <h3 className={this.decorateCSS("title")}>{team.name}</h3>
                    <p className={this.decorateCSS("long-text")}>
                      {team.description}
                    </p>
                    <div className={this.decorateCSS("icon-group")}>

                    {team.platforms && team.platforms.map(
                        (item: Platform, indexPlatforms: number) => {
                          return(
                            <ComposerLink key={indexPlatforms} path={item.url}>
                          <ComposerIcon
                            name={item.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon")
                            }}/>
                          </ComposerLink>
                        );
                      })}
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

export default Team2;
