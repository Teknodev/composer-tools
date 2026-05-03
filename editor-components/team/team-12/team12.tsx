import * as React from "react";
import styles from "./team12.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";

type Socials = {
  icon: TypeMediaInputValue;
  url: string;
};

interface TeamMember {
  profileImage: TypeMediaInputValue;
  name: string;
  profession: string;
  description: string;
  socials: Socials[];
}

class Team12 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Team",
      value: [
        {
          type: "object",
          key: "card",
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
              value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370ff268c3c2002cd3083a?alt=media&timestamp=1719558632843",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
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
          key: "card",
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
              value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e65e00181a1002c334d64?alt=media&timestamp=1719559667575",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
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
          key: "card",
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
              value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e68d60181a1002c334db9?alt=media&timestamp=1719560421360",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
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
          key: "card",
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
              value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e68d60181a1002c334dba?alt=media&timestamp=1719560421360",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
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

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }
  static getName(): string {
    return "Team 12";
  }
  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("cards")}>
            {this.castToObject<TeamMember[]>("cards").map((teamMember: TeamMember) => {
              const nameExist = this.castToString(teamMember.name);
              const professionExist = this.castToString(teamMember.profession);
              const descriptionExist = this.castToString(teamMember.description);

              const hasItem = nameExist || professionExist || descriptionExist || teamMember.profileImage || (teamMember.socials && teamMember.socials.length > 0);
              return (
                hasItem && (
                  <div className={this.decorateCSS("member")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                    {teamMember.profileImage && <Base.Media value={teamMember.profileImage} className={this.decorateCSS("image")} />}
                    <Base.VerticalContent className={this.decorateCSS("info")}>
                      {nameExist && <Base.H2 className={this.decorateCSS("name")}>{teamMember.name}</Base.H2>}
                      {professionExist && <Base.H5 className={this.decorateCSS("profession")}>{teamMember.profession}</Base.H5>}
                      {descriptionExist && <Base.P className={this.decorateCSS("description")}>{teamMember.description}</Base.P>}
                      {teamMember.socials && teamMember.socials.length > 0 && (
                        <Base.Row className={this.decorateCSS("platforms")}>
                          {teamMember.socials.map((social: Socials, index: number) => (
                            <div className={this.decorateCSS("platform")} key={index}>
                              <ComposerLink path={social.url}>
                                <Base.Media
                                  value={social.icon}
                                  className={`${this.decorateCSS("icon")} ${social.icon.type === "image" && this.decorateCSS("has-image")}`}
                                  style={{ "--icon-index": index } as React.CSSProperties}
                                ></Base.Media>
                              </ComposerLink>
                            </div>
                          ))}
                        </Base.Row>
                      )}
                    </Base.VerticalContent>
                  </div>
                )
              );
            })}
          </Base.ListGrid>
        </div>
      </Base.Container>
    );
  }
}

export default Team12;
