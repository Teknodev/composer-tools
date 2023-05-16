import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { Team } from "../../EditorComponent";
import styles from "./team2.module.scss";

type TeamCardMember = {
  name: string;
  description: string;
  image: string;
  buttonText: string;
  iconLeft: string;
  iconCenter: string;
  iconRight: string;
  iconLinkLeft: string;
  iconLinkCenter: string;
  iconLinkRight: string;
};
class Team2 extends Team {
  constructor(props?: any) {
    super(props, styles);
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1682518974394",
              displayer: "Image",
            },
            {
              type: "image",
              key: "iconLeft",
              value: "https://cdn-icons-png.flaticon.com/512/1400/1400829.png",
              displayer: "Left Icon",
            },
            {
              type: "image",
              key: "iconCenter",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png",
              displayer: "Center Icon",
            },
            {
              type: "image",
              key: "iconRight",
              value: "https://cdn-icons-png.flaticon.com/512/60/60580.png",
              displayer: "Right Icon",
            },
            {
              type: "page",
              key: "iconLinkLeft",
              value: "",
              displayer: "Left Icon Link",
            },
            {
              type: "page",
              key: "iconLinkCenter",
              value: "",
              displayer: "Center Icon Link",
            },
            {
              type: "page",
              key: "iconLinkRight",
              value: "",
              displayer: "Right Icon Link",
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
              value: "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
              displayer: "Image",
            },
            {
              type: "image",
              key: "iconLeft",
              value: "https://cdn-icons-png.flaticon.com/512/1400/1400829.png",
              displayer: "Left Icon",
            },
            {
              type: "image",
              key: "iconCenter",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png",
              displayer: "Center Icon",
            },
            {
              type: "image",
              key: "iconRight",
              value: "https://cdn-icons-png.flaticon.com/512/60/60580.png",
              displayer: "Right Icon",
            },
            {
              type: "page",
              key: "iconLinkLeft",
              value: "",
              displayer: "Left Icon Link",
            },
            {
              type: "page",
              key: "iconLinkCenter",
              value: "",
              displayer: "Center Icon Link",
            },
            {
              type: "page",
              key: "iconLinkRight",
              value: "",
              displayer: "Right Icon Link",
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
              value: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
              displayer: "Image",
            },
            {
              type: "image",
              key: "iconLeft",
              value: "https://cdn-icons-png.flaticon.com/512/1400/1400829.png",
              displayer: "Left Icon",
            },
            {
              type: "image",
              key: "iconCenter",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png",
              displayer: "Center Icon",
            },
            {
              type: "image",
              key: "iconRight",
              value: "https://cdn-icons-png.flaticon.com/512/60/60580.png",
              displayer: "Right Icon",
            },
            {
              type: "page",
              key: "iconLinkLeft",
              value: "",
              displayer: "Left Icon Link",
            },
            {
              type: "page",
              key: "iconLinkCenter",
              value: "",
              displayer: "Center Icon Link",
            },
            {
              type: "page",
              key: "iconLinkRight",
              value: "",
              displayer: "Right Icon Link",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team Card";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<TeamCardMember[]>("team-card").map(
            (team: any, index: number) => (
              <div className={this.decorateCSS("team")} key={index}>
                <img className={this.decorateCSS("image")} src={team.image}></img>
                <h3 className={this.decorateCSS("title")}>{team.name}</h3>
                <p className={this.decorateCSS("long-text")}>
                  {team.description}
                </p>
                <div className={this.decorateCSS("social")}>
                  <ComposerLink path={team.iconLinkLeft}>
                    <img src={team.iconLeft}></img>
                  </ComposerLink>
                  <ComposerLink path={team.iconLinkCenter}>
                    <img src={team.iconCenter}></img>
                  </ComposerLink>
                  <ComposerLink path={team.iconLinkRight}>
                    <img src={team.iconRight}></img>
                  </ComposerLink>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Team2;
