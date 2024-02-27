import * as React from "react";
import styles from "./team1.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Platform={
  icon: string;
  url: string;
}

type Card = {
  image: string;
  name: string;
  position: string;
  description: string;
  
  platforms: { icon: string; url: string }[];
  //icon: string;
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
      key: "title1",
      displayer: "Title-1",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title-3",
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
              value:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
              value:
                "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve common goals.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
                linkedin,
              ],
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
              value:
                "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value:
                "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
                linkedin,
              ],
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
              value:
                "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value:
                "An online learning platform can provide access to educational content from anywhere with an internet connection.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
                linkedin,
              ],
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
              value:
                "https://images.pexels.com/photos/1820934/pexels-photo-1820934.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              value:
                "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Sosial Medias",
              value: [
                facebook,
                twitter,
                instagram,
                linkedin,
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
  }

  getName(): string {
    return "Team 1";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-page")}>
            <div className={this.decorateCSS("text-group")}>
              <h1 className={this.decorateCSS("title1")}>{this.getPropValue("title1")}</h1>
              <p className={this.decorateCSS("title2")}>{this.getPropValue("title2")}</p>
            </div>
          </div>
          <div className={this.decorateCSS("down-page")}>
            {this.castToObject<Card[]>("items").map((card: Card, indexItems: number) => {
              return (
                <div
                  key={indexItems}
                  className={this.decorateCSS("all-card")}
                  style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}
                >
                  <div className={this.decorateCSS("card")}>
                    <div className={this.decorateCSS("top")}>
                      <img className={this.decorateCSS("image")} src={card.image} alt=""/>
                      <h2 className={this.decorateCSS("card-name")}>{card.name}</h2>
                      <p className={this.decorateCSS("position")}>{card.position}</p>
                    </div>
                    <p className={this.decorateCSS("card-description")}>{card.description}</p>
                    <div className={this.decorateCSS("icon-group")}>
                      {card.platforms.map((item: Platform, indexPlatforms: number) => {
                        return (
                          
                          <ComposerLink key={indexPlatforms} path={item.url}>
                            <ComposerIcon name={item.icon} propsIcon={{
                              className:this.decorateCSS("icon")
                            }}/>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Team1;
