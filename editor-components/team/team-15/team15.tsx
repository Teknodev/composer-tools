import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team15.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";

type Socials = {
  icon: TypeMediaInputValue;
  url: string;
}

type Card = {
  profileImage: TypeMediaInputValue;
  title: string;
  description: string;
  firstIcon: TypeMediaInputValue;
  firstIconUrl: string;
  secondIcon: TypeMediaInputValue;
  secondIconUrl: string;
  socials: Socials[];
};

class Team15 extends Team {
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
      value: "OUR TEAM",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Aleesha Charlotte",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-CEO Founder",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b712bd2970002c6284b2?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "media",
              key: "firstIcon",
              displayer: "First Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdMail",
              },
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Second Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdShare",
              },
            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
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
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "David Michale",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-Therapist",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b7ca7acba6002c5dfa2c?alt=media&timestamp=1730656203793",
              },
            },
            {
              type: "media",
              key: "firstIcon",
              displayer: "First Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdMail",
              },
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Second Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdShare",
              },
            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
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
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jorge Schiro",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-Counselor",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b8437acba6002c5dfa38?alt=media&timestamp=1730656324011",
              },
            },
            {
              type: "media",
              key: "firstIcon",
              displayer: "First Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdMail",
              },
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Second Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdShare",
              },
            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
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
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "John Arlnoald",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-Counselor",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b8527acba6002c5dfa3e?alt=media&timestamp=1730656339472",
              },
            },
            {
              type: "media",
              key: "firstIcon",
              displayer: "First Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdMail",
              },
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Second Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoMdShare",
              },
            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
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
      value: ["animate1", "animate3"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3"]
      }
    });
  }

  static getName(): string {
    return "Team 15";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
            {subtitle && <Base.SectionDescription className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionDescription>}
            {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
          </Base.VerticalContent>
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("cards-box")}>
            {this.castToObject<Card[]>("cards").map((card: Card, index: number) => {
              const profileImage = card.profileImage;
              const titleExists = this.castToString(card.title);
              const descriptionExists = this.castToString(card.description);
              const overlay = this.getPropValue("overlay");

              const cardExists = profileImage || titleExists || descriptionExists;
              return cardExists && (
                <div key={index} className={this.decorateCSS("card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                  {profileImage && <Base.Media value={profileImage} className={this.decorateCSS("image")} />}
                  {overlay && <div className={this.decorateCSS("overlay")}></div>}
                  {overlay && <div className={this.decorateCSS("overlay2")}></div>}
                  <div className={this.decorateCSS("card-content")}>
                    {titleExists && <Base.H2 className={this.decorateCSS("card-title")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>{card.title}</Base.H2>}
                    <div className={this.decorateCSS("labels")}>
                      {card.socials && card.socials.length > 0 && (
                        <Base.VerticalContent className={this.decorateCSS("icon-list-container")}>
                          {card.socials.map((social: Socials, indexIcons: number) => {
                            return (
                              <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                                <ComposerLink path={social.url}>
                                  <Base.Media
                                    value={social.icon}
                                    className={`${this.decorateCSS("icon")} ${social.icon?.type === "image" && this.decorateCSS("has-image")}`}
                                    style={{ "--icon-index": indexIcons } as React.CSSProperties}
                                  />
                                </ComposerLink>
                              </div>
                            );
                          })}
                        </Base.VerticalContent>
                      )}
                      {descriptionExists && <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>}
                      <div className={this.decorateCSS("icons")}>
                        <ComposerLink path={card.firstIconUrl}>
                          {card.firstIcon && (
                            <Base.Media
                              value={card.firstIcon}
                              className={`${this.decorateCSS("firstIcon")} ${card.firstIcon?.type === "image" && this.decorateCSS("first-icon-has-image")}`}
                            />
                          )}
                        </ComposerLink>

                        <ComposerLink path={card.secondIconUrl}>
                          {card.secondIcon && (
                            <Base.Media
                              value={card.secondIcon}
                              className={`${this.decorateCSS("secondIcon")} ${card.secondIcon?.type === "image" && this.decorateCSS("second-icon-has-image")}`}
                            />
                          )}
                        </ComposerLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team15;
