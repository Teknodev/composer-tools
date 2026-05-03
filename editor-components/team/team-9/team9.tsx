import * as React from "react";
import styles from "./team9.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

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
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816a?alt=media&timestamp=1719558632841",
              },
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
              displayer: "Person Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Person Description",
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
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816b?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "DAVID",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Person Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Person Description",
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
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816c?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "JENNIFER",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Person Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Person Description",
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
              type: "media",
              key: "profileImage",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b493bd2970002c62816d?alt=media&timestamp=1719558632841",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "MATHEW",
            },
            {
              type: "string",
              key: "personPosition",
              displayer: "Person Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "personDescription",
              displayer: "Person Description",
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
      key: "reverse",
      displayer: "Item Count",
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
      dots: true,
      dotsClass: this.decorateCSS("dots"),
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
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
              <Base.ListGrid gridCount={{ pc: this.getPropValue("reverse"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
                {members.map((item: Card, index: number) => {
                  const personName = this.castToString(item.personName);
                  const personPosition = this.castToString(item.personPosition);
                  const personDescription = this.castToString(item.personDescription);
                  const hasCard = personName || item.profileImage || personPosition || personDescription || (item.socials && item.socials.length > 0);

                  return (
                    hasCard && (
                      <Base.VerticalContent key={index} className={this.decorateCSS("card")} data-animation={hoverAnimation.join(" ")}>
                        {item.profileImage && <Base.Media value={item.profileImage} className={this.decorateCSS("person-image")} />}
                        <div className={this.decorateCSS("person-info")}>
                          {item.socials && item.socials.length > 0 && (
                            <div className={this.decorateCSS("icons-bar")}>
                              {item.socials.map((social: Social, iconIndex: number) => {
                                if (social.icon) {
                                  return (
                                    <ComposerLink key={iconIndex} path={social.url}>
                                      <Base.Media
                                        value={social.icon}
                                        className={this.decorateCSS("icon")}
                                        style={{ "--icon-index": iconIndex } as React.CSSProperties}
                                      />
                                    </ComposerLink>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          )}
                          <Base.VerticalContent className={this.decorateCSS("text-group")}>
                            {personName && <Base.H2 className={this.decorateCSS("item-name")}>{item.personName}</Base.H2>}
                            {personPosition && <Base.P className={this.decorateCSS("item-position")}>{item.personPosition}</Base.P>}
                            {personDescription && <Base.P className={this.decorateCSS("item-description")}>{item.personDescription}</Base.P>}
                          </Base.VerticalContent>
                        </div>
                      </Base.VerticalContent>
                    )
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
                      <div key={indexCard} className={this.decorateCSS("card")}>
                        {item.profileImage && <Base.Media value={item.profileImage} className={this.decorateCSS("person-image")} />}
                        <Base.VerticalContent className={this.decorateCSS("person-info")}>
                          {item.socials && item.socials.length > 0 && (
                            <Base.Row className={this.decorateCSS("icons-bar")}>
                              {item.socials.map((social: Social, indexIcons: number) => {
                                if (social.icon) {
                                  return (
                                    <ComposerLink key={indexIcons} path={social.url}>
                                      <Base.Media
                                        value={social.icon}
                                        className={this.decorateCSS("icon")}
                                        style={{ "--icon-index": indexIcons } as React.CSSProperties}
                                      />
                                    </ComposerLink>
                                  );
                                }
                                return null;
                              })}
                            </Base.Row>
                          )}
                          <Base.VerticalContent className={this.decorateCSS("text-group")}>
                            {personName && <Base.H2 className={this.decorateCSS("item-name")}>{item.personName}</Base.H2>}
                            {personPosition && <Base.P className={this.decorateCSS("item-position")}>{item.personPosition}</Base.P>}
                            {personDescription && <Base.P className={this.decorateCSS("item-description")}>{item.personDescription}</Base.P>}
                          </Base.VerticalContent>
                        </Base.VerticalContent>
                      </div>
                    );
                  }
                  return null;
                })}
              </ComposerSlider>
            </>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team9;