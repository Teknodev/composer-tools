import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team15.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Socials = {
  icon: TypeMediaInputValue;
  url: string;
}

type Card = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  position: React.JSX.Element;
  cardDescription: React.JSX.Element;
  contactIcon: TypeMediaInputValue;
  contactIconUrl: string;
  shareIcon: TypeMediaInputValue;
  shareIconUrl: string;
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
      type: "boolean",
      key: "showLines",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b712bd2970002c6284b2?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: '<p dir="ltr"><span style="white-space: pre-wrap;">Aleesha </span></p><p dir="ltr"><span style="white-space: pre-wrap;">Charlotte</span></p>',
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "- CEO Founder",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "contactIcon",
              displayer: "Contact Icon",
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
              key: "contactIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "shareIcon",
              displayer: "Share Icon",
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
              key: "shareIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b7ca7acba6002c5dfa2c?alt=media&timestamp=1730656203793",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: '<p dir="ltr"><span style="white-space: pre-wrap;">David </span></p><p dir="ltr"><span style="white-space: pre-wrap;">Michael</span></p>',
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "- Therapist",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "contactIcon",
              displayer: "Contact Icon",
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
              key: "contactIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "shareIcon",
              displayer: "Share Icon",
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
              key: "shareIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b8437acba6002c5dfa38?alt=media&timestamp=1730656324011",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: '<p dir="ltr"><span style="white-space: pre-wrap;">Jorge </span></p><p dir="ltr"><span style="white-space: pre-wrap;">Schiro</span></p>',
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "- Counselor",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "contactIcon",
              displayer: "Contact Icon",
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
              key: "contactIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "shareIcon",
              displayer: "Share Icon",
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
              key: "shareIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
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
              type: "media",
              key: "profileImage",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b8527acba6002c5dfa3e?alt=media&timestamp=1730656339472",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: '<p dir="ltr"><span style="white-space: pre-wrap;">John </span></p><p dir="ltr"><span style="white-space: pre-wrap;">Arlnoald</span></p>',
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "- Counselor",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
            {
              type: "media",
              key: "contactIcon",
              displayer: "Contact Icon",
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
              key: "contactIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "shareIcon",
              displayer: "Share Icon",
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
              key: "shareIconUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count In a Row",
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
    const hasContent = subtitle || title || description;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 4, phone: 1 }} className={this.decorateCSS("cards-box")}>
            {(this.castToObject<Card[]>("cards") || []).map((card: Card, index: number) => {
              const profileImage = card.profileImage;
              const nameExists = this.castToString(card.name);
              const positionExists = this.castToString(card.position);
              const cardDescriptionExist = this.castToString(card.cardDescription);
              const overlay = this.getPropValue("overlay");
              const showLines = this.getPropValue("showLines") !== false;

              const cardExists = profileImage || nameExists || positionExists || cardDescriptionExist;
              return cardExists && (
                <div key={index} className={`${this.decorateCSS("card")} ${profileImage && this.decorateCSS("has-image")}`} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")} data-show-lines={showLines}>
                  {profileImage && <Base.Media value={profileImage} className={this.decorateCSS("image")} />}
                  {overlay && <div className={this.decorateCSS("overlay")}></div>}
                  {overlay && <div className={this.decorateCSS("overlay2")}></div>}
                  <div className={this.decorateCSS("card-content")}>
                    {nameExists && <Base.H5 className={this.decorateCSS("card-name")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>{card.name}</Base.H5>}
                    <div className={this.decorateCSS("labels")}>

                      {(positionExists || cardDescriptionExist) && (
                        <Base.VerticalContent className={this.decorateCSS("card-info")}>
                          {positionExists && <Base.P className={this.decorateCSS("card-position")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>{card.position}</Base.P>}
                          {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>{card.cardDescription}</Base.P>}
                        </Base.VerticalContent>
                      )}
                      <div className={this.decorateCSS("icons")}>
                        <div className={this.decorateCSS("share-wrapper")}>
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
                          <ComposerLink path={card.shareIconUrl}>
                            {card.shareIcon && (
                              <Base.Media
                                value={card.shareIcon}
                                className={`${this.decorateCSS("shareIcon")} ${card.shareIcon?.type === "image" && this.decorateCSS("share-icon-has-image")}`}
                              />
                            )}
                          </ComposerLink>
                        </div>
                        <ComposerLink path={card.contactIconUrl}>
                          {card.contactIcon && (
                            <Base.Media
                              value={card.contactIcon}
                              className={`${this.decorateCSS("contactIcon")} ${card.contactIcon?.type === "image" && this.decorateCSS("contact-icon-has-image")}`}
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
          {visibleButtons.length > 0 && (
            <div className={this.decorateCSS("button-container")}>
              {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                return this.castToString(item.text) && (
                  <ComposerLink key={`button-${index}`} path={item.url}>
                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team15;
