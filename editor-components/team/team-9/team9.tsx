import * as React from "react";
import styles from "./team9.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Social = {
  icon: TypeMediaInputValue;
  url: string;
}

type Card = {
  profileImage: TypeMediaInputValue;
  personName: React.JSX.Element;
  personPosition: React.JSX.Element;
  personDescription: React.JSX.Element;
  socials: Social[];
}

class Team9 extends Team {
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
      value: false,
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816a?alt=media&timestamp=1719558632841",
              },
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
            {
              type: "string",
              key: "personName",
              displayer: "Person Name",
              value: "JENNY",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Description",
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816b?alt=media&timestamp=1719558632841",
              },
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
            {
              type: "string",
              key: "personName",
              displayer: "Person Name",
              value: "DAVID",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Description",
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816c?alt=media&timestamp=1719558632841",
              },
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
            {
              type: "string",
              key: "personName",
              displayer: "Person Name",
              value: "JENNIFER",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Description",
              value: "",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816d?alt=media&timestamp=1719558632841",
              },
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
            {
              type: "string",
              key: "personName",
              displayer: "Person Name",
              value: "MATHEW",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Description",
              value: "",
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
      key: "itemCountInRow",
      displayer: "Item Count In a Row",
      value: 4,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "Team 9";
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: this.getPropValue("itemCountInRow") || 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    const title = this.castToString(this.getPropValue("title"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const members = this.castToObject<Card[]>("cards");
    const hoverAnimation = this.getPropValue("hoverAnimation");

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
          {members && members.length > 0 && (
            <>
              <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCountInRow"), tablet: 4, phone: 1 }} className={this.decorateCSS("down-page")}>
                {members.map((item: Card, index: number) => {
                  const personName = this.castToString(item.personName);
                  const personPosition = this.castToString(item.personPosition);
                  const personDescription = this.castToString(item.personDescription);
                  const hasCard = personName || item.profileImage || personPosition || personDescription || (item.socials && item.socials.length > 0);

                  return hasCard && (
                    <Base.VerticalContent
                      key={index}
                      className={this.decorateCSS("card")}
                      data-animation={hoverAnimation.join(" ")}
                      onTouchStart={(e) => e.currentTarget.classList.add(this.decorateCSS("active"))}
                      onTouchEnd={(e) => e.currentTarget.classList.remove(this.decorateCSS("active"))}
                      onTouchCancel={(e) => e.currentTarget.classList.remove(this.decorateCSS("active"))}
                    >
                      {item.profileImage && (
                        <div className={this.decorateCSS("image-container")}>
                          <Base.Media value={item.profileImage} className={this.decorateCSS("person-image")} />
                          {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                        </div>
                      )}
                      <Base.VerticalContent className={this.decorateCSS("text-group")}>
                        {item.socials && item.socials.length > 0 && (
                          <div className={this.decorateCSS("icons-bar")}>
                            {item.socials.map((social: Social, iconIndex: number) => {
                              return social.icon && (
                                <ComposerLink key={iconIndex} path={social.url}>
                                  <Base.Media
                                    value={social.icon}
                                    className={`${this.decorateCSS("icon")} ${social.icon.type === "image" && this.decorateCSS("has-image")}`}
                                    style={{ "--icon-index": iconIndex } as React.CSSProperties}
                                  />
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                        {personName && <Base.H5 className={this.decorateCSS("item-name")}>{item.personName}</Base.H5>}
                        {personPosition && <Base.H6 className={this.decorateCSS("item-position")}>{item.personPosition}</Base.H6>}
                        {personDescription && <Base.P className={this.decorateCSS("item-description")}>{item.personDescription}</Base.P>}
                      </Base.VerticalContent>
                    </Base.VerticalContent>
                  );
                })}
              </Base.ListGrid>
              <ComposerSlider {...settings} className={this.decorateCSS("slider")}>
                {members.map((item: Card, indexCard: number) => {
                  const personName = this.castToString(item.personName);
                  const personPosition = this.castToString(item.personPosition);
                  const personDescription = this.castToString(item.personDescription);

                  if (item.profileImage || personName || personPosition || personDescription || (item.socials && item.socials.length > 0)) {
                    return (
                      <Base.VerticalContent
                        key={indexCard}
                        className={this.decorateCSS("card")}
                        data-animation={hoverAnimation.join(" ")}
                        onTouchStart={(e) => e.currentTarget.classList.add(this.decorateCSS("active"))}
                        onTouchEnd={(e) => e.currentTarget.classList.remove(this.decorateCSS("active"))}
                        onTouchCancel={(e) => e.currentTarget.classList.remove(this.decorateCSS("active"))}
                      >
                        {item.profileImage && (
                          <div className={this.decorateCSS("image-container")}>
                            <Base.Media value={item.profileImage} className={this.decorateCSS("person-image")} />
                            {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                          </div>
                        )}
                        <Base.VerticalContent className={this.decorateCSS("text-group")}>
                          {item.socials && item.socials.length > 0 && (
                            <div className={this.decorateCSS("icons-bar")}>
                              {item.socials.map((social: Social, iconIndex: number) => {
                                return social.icon && (
                                  <ComposerLink key={iconIndex} path={social.url}>
                                    <Base.Media
                                      value={social.icon}
                                      className={`${this.decorateCSS("icon")} ${social.icon.type === "image" && this.decorateCSS("has-image")}`}
                                      style={{ "--icon-index": iconIndex } as React.CSSProperties}
                                    />
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                          {personName && <Base.H2 className={this.decorateCSS("item-name")}>{item.personName}</Base.H2>}
                          {personPosition && <Base.P className={this.decorateCSS("item-position")}>{item.personPosition}</Base.P>}
                          {personDescription && <Base.P className={this.decorateCSS("item-description")}>{item.personDescription}</Base.P>}
                        </Base.VerticalContent>
                      </Base.VerticalContent>
                    );
                  }
                  return null;
                })}
              </ComposerSlider>
            </>
          )}
          {visibleButtons.length > 0 && (
            <Base.Row className={this.decorateCSS("button-container")}>
              {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                return this.castToString(item.text) && (
                  <ComposerLink key={`button-${index}`} path={item.url}>
                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team9;