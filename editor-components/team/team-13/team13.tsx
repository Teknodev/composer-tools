import * as React from "react";
import styles from "./team13.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Card {
  profileImage: TypeMediaInputValue;
  name: string;
  position: string;
  cardDescription: string;
}

type Socials = {
  url: string;
  icon: TypeMediaInputValue;
}

class Team13 extends Team {
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
      value: "Meet the Creative Team",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "With our new features Cesis Studio, you can now import templates directly in the page from the Frontend or Backend page builder.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Contact Us", null, null, "", "Link")
      ]
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
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
                name: "FaFacebookSquare",
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
                name: "FaTwitterSquare",
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
                name: "FaInstagram",
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
                name: "FaLinkedin",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f4?alt=media&timestamp=1732177851198",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Michael Cannon",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Art Director",
            },
            {
              type: "string",
              key: "cardDescription",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f3?alt=media&timestamp=1732177851198",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sylvia Morales",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "UI Designer",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
      ],
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
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5", "animate6"]
      }
    });
  }

  static getName(): string {
    return "Team 13";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const socials = this.castToObject<Socials[]>("socials");
    const line = this.getPropValue("line");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const hasFeaturedCard = subtitle || title || description || (buttons && buttons.length > 0) || (socials && socials.length > 0);
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3, phone: 1 }} className={this.decorateCSS("content")}>
            {hasFeaturedCard && (
              <div className={this.decorateCSS("featured-card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                <Base.VerticalContent className={this.decorateCSS("info-container")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                </Base.VerticalContent>
                <Base.VerticalContent className={this.decorateCSS("label")}>
                  {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                  <div className={this.decorateCSS("button-and-line-container")}>
                    {buttons.length > 0 && (
                      <div className={this.decorateCSS("button-container")}>
                        {buttons.map((btn: INPUTS.CastedButton, index: number) => {
                          return this.castToString(btn.text) && (
                            <ComposerLink key={`button-${index}`} path={btn.url}>
                              <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                    {line && <div className={this.decorateCSS("line")}></div>}
                  </div>
                  {socials && socials.length > 0 && (
                    <Base.Row className={this.decorateCSS("icon-container")}>
                      {socials.map((icn: Socials, indexSocials: number) => {
                        return icn.icon && (
                          <div key={indexSocials} className={this.decorateCSS("icon-item")}>
                            <ComposerLink path={icn.url}>
                              <Base.Media
                                value={icn.icon}
                                className={`${this.decorateCSS("icon")} ${icn.icon.type === "image" && this.decorateCSS("has-image")}`}
                                style={{ "--icon-index": indexSocials } as React.CSSProperties}
                              />
                            </ComposerLink>
                          </div>
                        );
                      })}
                    </Base.Row>
                  )}
                </Base.VerticalContent>
              </div>
            )}
            {cards && cards.length > 0 && cards.map((card: Card, index: number) => {
              const nameExist = this.castToString(card.name);
              const positionExist = this.castToString(card.position);
              const cardDescriptionExist = this.castToString(card.cardDescription);
              return (nameExist || positionExist || card.profileImage || cardDescriptionExist) && (
                <Base.VerticalContent key={index} className={this.decorateCSS("team-card")}>
                  {card.profileImage && (
                    <div className={this.decorateCSS("img-wrapper")} data-animation={this.getPropValue("hoverAnimation").join(" ")} >
                      <Base.Media value={card.profileImage} className={this.decorateCSS("image")} data-animation={this.getPropValue("hoverAnimation").join(" ")} />
                      {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                    </div>
                  )}
                  {nameExist && <Base.H6 className={this.decorateCSS("name")}>{card.name}</Base.H6>}
                  {positionExist && <Base.P className={this.decorateCSS("position")}>{card.position}</Base.P>}
                  {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>}
                </Base.VerticalContent>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team13;