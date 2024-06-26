import * as React from "react";
import styles from "./team12.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Platform = { url: string; icon: string };
interface TeamMember {
  image: string;
  name: string;
  profession: string;
  description: string;
  platforms: Platform[];
}

class Team12 extends Team {
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
          value: "FaTwitter",
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
      displayer: "Facebook",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebookF",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let google: TypeUsableComponentProps = {
      type: "object",
      key: "google",
      displayer: "Google",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaGooglePlus",
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
      type: "array",
      key: "team",
      displayer: "Team",
      value: [
        {
          type: "object",
          key: "member",
          displayer: "Team Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Alex John",
            },
            {
              type: "string",
              key: "profession",
              displayer: "Profession",
              value: "FRENCH CUISINE ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370ff268c3c2002cd3083a?alt=media&timestamp=1719558632843",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(google)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Danial Frankie",
            },
            {
              type: "string",
              key: "profession",
              displayer: "Profession",
              value: "CHINESE CUISINE ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e65e00181a1002c334d64?alt=media&timestamp=1719559667575",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(google)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Michal Smart ",
            },
            {
              type: "string",
              key: "profession",
              displayer: "Profession",
              value: "Cook ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e68d60181a1002c334db9?alt=media&timestamp=1719560421360",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(google)),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Alex John",
            },
            {
              type: "string",
              key: "profession",
              displayer: "Profession",
              value: "Cook ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e68d60181a1002c334dba?alt=media&timestamp=1719560421360",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(google)),
              ],
            },
          ],
        },
      ],
    });

  }
  getName(): string {
    return "Team 12";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<TeamMember[]>("team").map(
            (teamMember: any, index: number) => (
              <div className={this.decorateCSS("member")}>
                <img className={this.decorateCSS("image")} src={teamMember.getPropValue("image")} />
                <div className={this.decorateCSS("info")}>
                  <div className={this.decorateCSS("name")}>
                    {teamMember.getPropValue("name")}
                  </div>
                  <div className={this.decorateCSS("profession")}>
                    {teamMember.getPropValue("profession")}
                  </div>
                  <div className={this.decorateCSS("description")}>
                    {teamMember.getPropValue("description")}
                  </div>
                  <div className={this.decorateCSS("platforms")}>
                    {teamMember.platforms.map(
                      (platform: any, index: number) => (
                        <div className={this.decorateCSS("platform")}>
                          <ComposerLink path={platform.getPropValue("url")}>
                            <ComposerIcon
                              name={platform.getPropValue("icon")}
                              propsIcon={{
                                className: this.decorateCSS("icon"),
                              }}
                            ></ComposerIcon>
                          </ComposerLink>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Team12;
