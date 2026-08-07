import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team3.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type socials = {
  url: string;
  icon: TypeMediaInputValue;
};

interface Card {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  position: React.JSX.Element;
  cardDescription: React.JSX.Element;
  socials: socials[];
}

class Team3 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Team",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Best Team Ever!",
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
      value: false,
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/643707b368c3c2002cd307c2?alt=media&timestamp=1719483639147",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Jacklyn Mia",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/643707b368c3c2002cd307c1?alt=media&timestamp=1719483639146",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Kirsten Gertie",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Web Developer",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/643707b368c3c2002cd307c2?alt=media&timestamp=1719483639147",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Lachlan Linnette",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "UI/UX Developer",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ac19bd2970002c627624?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "James Pearce",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Graphic Designer",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ac19bd2970002c627623?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Mary Johnson",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Creative Director",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
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
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ac19bd2970002c627624?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sarah Brown",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Marketing Manager",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
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
      value: 3,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1", "animate4"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"],
      },
    });
  }

  static getName(): string {
    return "Team 3";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));

    const showLines = this.getPropValue("showLines");

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
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => {
              const cardNameExist = this.castToString(card.name);
              const cardPositionExist = this.castToString(card.position);
              const cardDescriptionExist = this.castToString(card.cardDescription);
              const hasCard = cardNameExist || cardPositionExist || cardDescriptionExist || card.profileImage || (card.socials && card.socials.length > 0);

              return (
                hasCard && (
                  <div key={indexCards} className={this.decorateCSS("all-card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                    <div
                      className={`${this.decorateCSS("card")} ${card.profileImage && this.decorateCSS("card-image")}`}
                      data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      data-show-lines={showLines}
                    >
                      <div className={this.decorateCSS("card-items")}>
                        <div className={this.decorateCSS("card-content")}>
                          {card.profileImage && (
                            <div className={this.decorateCSS("image-container")}>
                              <Base.Media value={card.profileImage} className={`${this.decorateCSS("image")} ${card.profileImage?.type === "icon" && this.decorateCSS("has-icon")}`} data-animation={this.getPropValue("hoverAnimation").join(" ")} />
                              {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                            </div>
                          )}
                          <Base.VerticalContent className={card.profileImage ? this.decorateCSS("box-text") : this.decorateCSS("no-image-box-text")}>
                            {cardNameExist && <Base.H5 className={this.decorateCSS("card-name")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>{card.name}</Base.H5>}
                            {cardPositionExist && <Base.H6 className={this.decorateCSS("card-position")}>{card.position}</Base.H6>}
                            {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>}
                            <div className={this.decorateCSS("icon-group")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                              {card.socials?.map((item: socials, indexSocials: number) => (
                                <ComposerLink key={indexSocials} path={item.url}>
                                  <Base.Media
                                    value={item.icon}
                                    className={`${this.decorateCSS("icon")} ${item.icon?.type === "image" && this.decorateCSS("has-image")}`}
                                    style={{ "--icon-index": indexSocials } as React.CSSProperties}
                                  />
                                </ComposerLink>
                              ))}
                            </div>
                          </Base.VerticalContent>
                        </div>
                      </div>
                    </div>
                  </div>
                )
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

export default Team3;