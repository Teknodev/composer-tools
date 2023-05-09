import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team2.module.scss";

type TeamCardMember = {
  name: string,
  description: string,
  image: string,
  buttonText: string,
  iconLeft: string,
  iconCenter: string,
  iconRight: string,
  iconLinkLeft: string,
  iconLinkCenter: string,
  iconLinkRight: string,
}
class Team2 extends Team {
  constructor(props?: any) {
    super(props, styles);
    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "team",
      displayer: "Team",
      value: [
        {
          type: "string",
          key: "name",
          value: "Frank Mohini",
          displayer: "Name",
        },
        {
          type: "string",
          key: "description",
          value:
            PlaceholderFiller.shortText(),
          displayer: "Description",
        },
        {
          type: "image",
          key: "image",
          value: "https://static.thenounproject.com/png/105256-200.png",
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
          value: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png",
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
    };

    this.addProp({
      type: "array",
      key: "team-card",
      displayer: "Team Card",
      value: [
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });
  }

  getName(): string {
    return "Team Card";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<TeamCardMember[]>("team-card").map((team: any, index: number) => (
            <div
              className={this.decorateCSS("team")}
              
              key={index}
            >
              <img src={team.image}></img>
              <h3 className={this.decorateCSS("title")} >
                {team.name}
              </h3>
              <p
                className={this.decorateCSS("long-text")}
                
              >
                {team.description}
              </p>
              <div
                className={this.decorateCSS("social")}
                
              >
                <ComposerLink path={team.iconLinkLeft}><img src={team.iconLeft}></img></ComposerLink>
                <ComposerLink path={team.iconLinkCenter}><img src={team.iconCenter}></img></ComposerLink>
                <ComposerLink path={team.iconLinkRight}><img src={team.iconRight}></img></ComposerLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Team2;
