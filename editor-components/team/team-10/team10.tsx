import * as React from "react";
import styles from "./team10.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";

type Background = {
  componentBackground: TypeMediaInputValue;
  overlay: boolean;
}

type Socials = {
  icon: TypeMediaInputValue;
  url: string;
};

type Feature = {
  subtitle: string;
  title: string;
  description: string;
};

type Card = {
  profileImage: TypeMediaInputValue;
  subtitle: string;
  title: string;
  features: Feature[];
  cardDescription: string;
  socials: Socials[];
};

class Team10 extends Team {
  constructor(props?: any) {
    super(props, styles);

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
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b520bd2970002c628226?alt=media&timestamp=1719558632841",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ]
    })

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
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b520bd2970002c628227?alt=media&timestamp=1719558632841",
              },
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
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "AGE",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "22 YEARS",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "JOINED",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "2016",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "COUNTRY",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "COSTA RİCA",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735a270506a40002c2a2e77?alt=media&timestamp=1731568292649",
              },
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
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "AGE",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "22 YEARS",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "JOINED",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "2016",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "COUNTRY",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "COSTA RİCA",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735a270506a40002c2a2e79?alt=media&timestamp=1731568292648",
              },
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
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "AGE",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "22 YEARS",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "JOINED",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "2016",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "COUNTRY",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "COSTA RİCA",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735a270506a40002c2a2e78?alt=media&timestamp=1731568292648",
              },
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
              type: "array",
              key: "features",
              displayer: "Features",
              value: [
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "AGE",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "22 YEARS",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "JOINED",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "2016",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "feature",
                  displayer: "Feature",
                  value: [
                    {
                      type: "string",
                      key: "subtitle",
                      displayer: "Subtitle",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "COUNTRY",
                    },
                    {
                      type: "string",
                      key: "description",
                      displayer: "Description",
                      value: "COSTA RİCA",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    const background = this.castToObject<Background>("background");
    const backgroundImage = background?.componentBackground;
    const overlay = background?.overlay;
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hoverAnimation = this.getPropValue("hoverAnimation") || [];
    const backgroundImageExist = backgroundImage?.url;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("left")}>
          <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${backgroundImageExist && this.decorateCSS("has-image")}`}>
            {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
            {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
          </Base.VerticalContent>
          {overlay && <div className={this.decorateCSS("overlay")}></div>}
          {backgroundImageExist && <Base.Media value={backgroundImage} className={this.decorateCSS("background-image")} />}
        </div>
        <div className={this.decorateCSS("right")}>
          {this.castToObject<Card[]>("team").map((teamMember: Card, index: number) => {
            const imageValue = teamMember.profileImage;
            const socials = teamMember.socials || [];

            return (
              <Base.VerticalContent key={index} className={this.decorateCSS("team-member")}>
                {(teamMember.title || teamMember.subtitle || teamMember.features?.length > 0 || teamMember.cardDescription || socials.length > 0) && (
                  <div className={this.decorateCSS("info")}>
                    <div className={this.decorateCSS("icon-group")}>
                      {socials.map((socialObj: Socials, indexIcons: number) => {
                        const iconData = socialObj.icon;
                        const urlData = socialObj.url;
                        return iconData && (
                          <div key={indexIcons} className={this.decorateCSS("icon-item")} data-animation={hoverAnimation.join(" ")}>
                            <ComposerLink path={urlData}>
                              <Base.Media value={iconData} className={this.decorateCSS("icon")} />
                            </ComposerLink>
                          </div>
                        );
                      })}
                    </div>
                    {(teamMember.subtitle || teamMember.title) && (
                      <Base.VerticalContent className={this.decorateCSS("title-group")}>
                        {teamMember.subtitle && <Base.H5 className={this.decorateCSS("member-subtitle")}>{teamMember.subtitle}</Base.H5>}
                        {teamMember.title && <Base.H4 className={this.decorateCSS("member-title")} data-animation={hoverAnimation.join(" ")}>{teamMember.title}</Base.H4>}
                      </Base.VerticalContent>
                    )}
                    {teamMember.features?.length > 0 && (
                      <div className={this.decorateCSS("features-wrapper")}>
                        {teamMember.features?.map((feature: Feature, indexFeatures: number) => (
                          <Base.VerticalContent key={indexFeatures} className={this.decorateCSS("features")}>
                            {feature.subtitle && (
                              <Base.H5 className={this.decorateCSS("feature-subtitle")}>{feature.subtitle}</Base.H5>
                            )}
                            {feature.title && (
                              <Base.H5 className={this.decorateCSS("feature-title")}>{feature.title}</Base.H5>
                            )}
                            {feature.description && (
                              <Base.H5 className={this.decorateCSS("feature-description")}>{feature.description}</Base.H5>
                            )}
                          </Base.VerticalContent>
                        ))}
                      </div>
                    )}
                    {teamMember.cardDescription && (<Base.SectionDescription className={this.decorateCSS("member-description")}>{teamMember.cardDescription}</Base.SectionDescription>
                    )}
                  </div>
                )}
                {imageValue && (
                  <div className={this.decorateCSS("image-container")}>
                    <Base.Media value={imageValue} className={this.decorateCSS("image")} />
                    <div className={this.decorateCSS("image-overlay")} data-animation={hoverAnimation.join(" ")}></div>
                  </div>
                )}
              </Base.VerticalContent>
            );
          })}
        </div>
      </Base.Container>
    );
  }
}

export default Team10;