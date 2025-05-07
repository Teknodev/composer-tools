import * as React from "react";
import styles from "./team1.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Platform = {
  icon: string;
  url: string;
};

type Card = {
  image: string;
  name: string;
  position: string;
  description: string;
  platforms: { icon: string; url: string }[];
};

class Team1 extends Team {
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
          value: "FaTwitterSquare",
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
          value: "FaFacebookSquare",
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
          value: "FiInstagram",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let linkedin: TypeUsableComponentProps = {
      type: "object",
      key: "linkedin",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaLinkedin",
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
      value: "We're Hiring!",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We work in collaboration, harmony, and trust to achieve our goals.",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437064b68c3c2002cd30784?alt=media&timestamp=1719483639146",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Daryl Russell",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve common goals.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram, linkedin],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437064b68c3c2002cd30783?alt=media&timestamp=1719483639146",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Clover Ruth",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram, linkedin],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437064b68c3c2002cd30782?alt=media&timestamp=1719483639146",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Jaylyn Kaleigh",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram, linkedin],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Items",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6437064b68c3c2002cd30781?alt=media&timestamp=1719483639146",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Candyce Jeannine",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo/Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [facebook, twitter, instagram, linkedin],
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
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5", "animate6", "animate7"]
      }
    });
  }

  static getName(): string {
    return "Team 1";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleValue = subtitle.props.html;
    const title1Value = title.props.html;
    const descriptionValue = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleValue || title1Value || descriptionValue) && (
            <div className={this.decorateCSS("up-page")}>
              <Base.VerticalContent className={this.decorateCSS("text-group")}>
                {subtitleValue && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {title1Value && <Base.SectionTitle className={this.decorateCSS("title1")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionValue && <Base.SectionDescription className={this.decorateCSS("title2")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            </div>
          )}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("items").map((card: any, indexItems: number) => {
              return (
                <div key={indexItems} className={`${this.decorateCSS("all-card")} ${Base.getContentAlignment() === "left" && this.decorateCSS("left")}`} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                  <Base.VerticalContent className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("top")}>
                      {card.image && <img className={this.decorateCSS("image")} src={card.image} alt="" data-animation={this.getPropValue("hoverAnimation").join(" ")}  />}
                      <Base.H2 className={this.decorateCSS("card-name")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>{card.name}</Base.H2>
                      <Base.P className={this.decorateCSS("position")}>{card.value.filter((item: { key: string }) => item.key === "position").map((item: { value: string }) => item.value)}</Base.P>
                    </div>
                    <Base.P className={this.decorateCSS("card-description")}>{card.description}</Base.P>
                    <div className={this.decorateCSS("icon-group")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                      {card.platforms.map((item: Platform, indexPlatforms: number) => {
                        return (
                          <ComposerLink key={indexPlatforms} path={item.url}>
                            <ComposerIcon
                              name={item.icon}
                              propsIcon={{
                                className: this.decorateCSS("icon"),
                              }}
                            />
                          </ComposerLink>
                        );
                      })}
                    </div>
                  </Base.VerticalContent>
                </div>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default Team1;
