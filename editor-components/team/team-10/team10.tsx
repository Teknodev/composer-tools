import * as React from "react";
import styles from "./team10.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

interface TTeam {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  value1title: string;
  value2title: string;
  value3title: string;
  value1description: string;
  value2description: string;
  value3description: string;

  icons: { icon: string; url: string }[];
}

class Team10 extends Team {
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
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebook",
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
          value: "FaInstagram",
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "NECROMANCERS",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "MANAGEMENT&STAFF",
    });
    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b520bd2970002c628226?alt=media&timestamp=1719558632841",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "team",
      displayer: "Team",
      value: [
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b520bd2970002c628227?alt=media&timestamp=1719558632841",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Position",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 3 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735a270506a40002c2a2e77?alt=media&timestamp=1731568292649",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Position",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 3 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735a270506a40002c2a2e79?alt=media&timestamp=1731568292648",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Position",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 3 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735a270506a40002c2a2e78?alt=media&timestamp=1731568292648",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Position",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 3 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
  }

  static getName(): string {
    return "Team 10";
  }

  render() {
    const backgroundImageExist = this.getPropValue("background-image");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const overlayExist = this.getPropValue("overlay");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("wrapper")}>
          <div className={this.decorateCSS("left")}>
            <Base.VerticalContent className={this.decorateCSS("title-wrapper")}>
              {subtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${backgroundImageExist && this.decorateCSS("image")}`}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImageExist && this.decorateCSS("image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
            </Base.VerticalContent>

            {overlayExist && <div className={this.decorateCSS("overlay")}></div>}
            {backgroundImageExist && <img className={this.decorateCSS("background-image")} src={this.getPropValue("background-image")} />}
          </div>
          <div className={this.decorateCSS("right")}>
            {this.castToObject<TTeam[]>("team").map((teamMember: any) => {
              const imageExist = teamMember.getPropValue("image");
              return (
                <Base.VerticalContent className={this.decorateCSS("team-member")}>
                  <div className={this.decorateCSS("info")}>
                    <div className={this.decorateCSS("icon-group")}>
                      {teamMember.icons.map((icon: any, indexIcons: number) => {
                        const iconExist = icon.icon;
                        return (
                          iconExist && (
                            <div key={indexIcons} className={this.decorateCSS("icon-item")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                              <ComposerLink path={icon.url}>
                                <Base.Icon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                              </ComposerLink>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <Base.H3 className={this.decorateCSS("subtitle")}>{teamMember.getPropValue("subtitle")}</Base.H3>
                    <Base.H1 className={this.decorateCSS("title")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>{teamMember.getPropValue("title")}</Base.H1>
                    <div className={this.decorateCSS("meta-info")}>
                      <div className={this.decorateCSS("meta")}>
                        <div className={this.decorateCSS("label")}>
                          <Base.H5 className={this.decorateCSS("value-title")}>{teamMember.getPropValue("value1-title")}</Base.H5>
                          <Base.H5 className={this.decorateCSS("value-description")}>{teamMember.getPropValue("value1-description")}</Base.H5>
                        </div>
                      </div>
                      <div className={this.decorateCSS("meta")}>
                        <div className={this.decorateCSS("label")}>
                          <Base.H5 className={this.decorateCSS("value-title")}>{teamMember.getPropValue("value2-title")}</Base.H5>
                          <Base.H5 className={this.decorateCSS("value-description")}>{teamMember.getPropValue("value2-description")}</Base.H5>
                        </div>
                      </div>
                      <div className={this.decorateCSS("meta")}>
                        <div className={this.decorateCSS("label")}>
                          <Base.H5 className={this.decorateCSS("value-title")}>{teamMember.getPropValue("value3-title")}</Base.H5>
                          <Base.H5 className={this.decorateCSS("value-description")}>{teamMember.getPropValue("value3-description")}</Base.H5>
                        </div>
                      </div>
                    </div>
                    <Base.SectionDescription className={this.decorateCSS("description")}>{teamMember.getPropValue("description")}</Base.SectionDescription>
                  </div>
                  {imageExist &&
                    <div className={this.decorateCSS("image-container")}>{
                      <img className={this.decorateCSS("image")}
                        src={teamMember.getPropValue("image")} />}
                      <div className={this.decorateCSS("image-overlay")} data-animation={this.getPropValue("hoverAnimation").join(" ")}></div>
                    </div>
                  }
                </Base.VerticalContent>
              );
            })}
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default Team10;