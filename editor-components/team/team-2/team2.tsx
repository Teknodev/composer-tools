import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team2.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type Platform = {
  icon: string;
  url: string;
};

type TeamCardMember = {
  name: string;
  description: string;
  image: string;
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
      value: "The amazing team behind all results",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
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
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437073668c3c2002cd307a8?alt=media&timestamp=1719483639146",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram],
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
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              value: "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437073668c3c2002cd307a4?alt=media&timestamp=1719483639146",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram],
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
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437073668c3c2002cd307a0?alt=media&timestamp=1719483639146",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram],
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
              value: "Clover Ruth",
              displayer: "Name",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437073668c3c2002cd307a8?alt=media&timestamp=1719483639146",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram],
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
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              value: "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437073668c3c2002cd307a4?alt=media&timestamp=1719483639146",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram],
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
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437073668c3c2002cd307a0?alt=media&timestamp=1719483639146",
              displayer: "Image",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram],
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

  static getName(): string {
    return "Team 2";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleValue = this.castToString(title);
    const descriptionValue = this.castToString(description);
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleValue || descriptionValue) && (
            <Base.VerticalContent className={this.decorateCSS("up-content")}>
              {titleValue && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionValue && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("team-members")}>
            {this.castToObject<TeamCardMember[]>("team-card").map((team: any, index: number) => {
              const name = this.castToString(team.name);
              const position = this.castToString(team.position);
              const description = this.castToString(team.description);

              return (
                <Base.VerticalContent className={`${this.decorateCSS("team")}`} key={index}>
                  {team.image && <img className={this.decorateCSS("image")} src={team.image} alt="" />}
                  {name && <Base.H3 className={this.decorateCSS("title")}>{team.name}</Base.H3>}
                  {position && <Base.H4 className={this.decorateCSS("position")}>{team.position}</Base.H4>}
                  {description && <Base.P className={this.decorateCSS("long-text")}>{team.description}</Base.P>}
                  <div className={this.decorateCSS("icon-group")}>
                    {team.platforms &&
                      team.platforms.map((item: Platform, indexPlatforms: number) => (
                        <ComposerLink key={indexPlatforms} path={item.url}>
                          <Base.Icon
                            name={item.icon}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                            }}
                          />
                        </ComposerLink>
                      ))}
                  </div>
                </Base.VerticalContent>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team2;
