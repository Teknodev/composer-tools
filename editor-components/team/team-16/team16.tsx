import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  position: React.JSX.Element;
  separatorIcon: TypeMediaInputValue;
  cardDescription: React.JSX.Element;
};

class Team16 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    })

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Introducing Our Talented Team",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Meet Our Exceptional Team! Our diverse talents converge to create a dynamic force, driven by shared vakues and a commitment to excellence.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Join Our Team", null, null, "", "Primary")
      ]
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f5?alt=media&timestamp=1731587983245",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Dianne Russell",
            },
            {
              type: "media",
              key: "separatorIcon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RxDividerVertical",
              },
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Sales Lead",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "The inception of this venture has not only been fulfilling but has also marked a significant milestone in my journey.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735df16506a40002c2a4f73?alt=media&timestamp=1731587983245",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Michael Cannon",
            },
            {
              type: "media",
              key: "separatorIcon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RxDividerVertical",
              },
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Founder",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "PageDone remains steadfast in its commitment to innovation and growth. With each step forward, we embrace.",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f4?alt=media&timestamp=1731587983245",
              },
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sylvia Morales",
            },
            {
              type: "media",
              key: "separatorIcon",
              displayer: "Separator Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RxDividerVertical",
              },
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Product Manager",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "The inception of this venture has been an immensely rewarding experience, representing a pivotal milestone in my personal.",
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
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "Team 16";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(hasContent) && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3, phone: 1 }} className={this.decorateCSS("down-content")}>
            {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => {
              const nameExist = this.castToString(card.name);
              const positionExist = this.castToString(card.position);
              const cardDescriptionExist = this.castToString(card.cardDescription);

              const cardExist = nameExist || positionExist || cardDescriptionExist || card.profileImage;
              return cardExist && (
                <div key={indexCards} className={this.decorateCSS("card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                  {card.profileImage && (
                    <div className={this.decorateCSS("image-wrapper")}>
                      <Base.Media value={card.profileImage} className={this.decorateCSS("image")} />
                      {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                    </div>
                  )}
                  <Base.VerticalContent className={this.decorateCSS("text-box")}>
                    <div className={this.decorateCSS("text-up")}>
                      {nameExist && <Base.H6 className={this.decorateCSS("name")}>{card.name}</Base.H6>}
                      {nameExist && positionExist && card.separatorIcon && (
                        <Base.Media value={card.separatorIcon} className={this.decorateCSS("separator")} />
                      )}
                      {positionExist && <Base.H6 className={this.decorateCSS("position")}>{card.position}</Base.H6>}
                    </div>
                    {cardDescriptionExist && <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>}
                  </Base.VerticalContent>
                </div>
              );
            })}
          </Base.ListGrid>
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team16;
