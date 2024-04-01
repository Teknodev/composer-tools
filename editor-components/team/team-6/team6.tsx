import * as React from "react";
import styles from "./team6.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  image: string;
  name: string;
  position: string;
  description: string;
  platforms: { url: string; icon: string }[];
};

type Button = {
  link: string;
  text: string;
  isPrimary: boolean;
};

class Team6 extends Team {
  constructor(props?: any) {
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
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
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    super(props, styles);
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
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              key: "description",
              displayer: "Description",
              value:
                "We are a group of experienced professionals with diverse backgrounds and skill sets, working together to achieve common goals.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
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
                "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              key: "description",
              displayer: "Description",
              value:
                "Web developers are professionals who design, build, and maintain websites and web applications.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
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
                "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
              key: "description",
              displayer: "Description",
              value:
                "UI/UX design is a crucial aspect of creating a successful digital product or service. UI stands for user interface, while UX stands for user experience.",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
              ],
            },
          ],
        },
      ],
    });

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
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Open Positions",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is primary",
              value: true,
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Team",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Team 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("up-page")}> 
              <div className={this.decorateCSS("text-group")}>
                <h1 className={this.decorateCSS("title3")}>{this.getPropValue("title1")}</h1>
                <h1 className={this.decorateCSS("title1")}>{this.getPropValue("title1")}</h1>
                <p className={this.decorateCSS("title2")}>{this.getPropValue("title2")}</p>
              </div>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("items").map(
                (card: Card, indexItems: number) => {
                  return (
                    <div
                      key={indexItems}
                      className={this.decorateCSS("all-card")}
                      style={{
                        width: 90 / this.getPropValue("itemCount") + "%",
                      }}
                    >
                        <div className={this.decorateCSS("top")}>
                        <div className={this.decorateCSS("image-wrapper")}>
                          <img
                            className={this.decorateCSS("image")}
                            src={card.image}
                            alt={card.name}
                          />
                          </div>
                        </div>
                        <h5 className={this.decorateCSS("card-name")}>{card.name}</h5>
                        <div className={this.decorateCSS("separator")}></div>
                        <h2 className={this.decorateCSS("position")}>{card.position}</h2>
                    </div>
                  );
                }
              )}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team6;
