import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./team6.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

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
          value: PlaceholderFiller.string(),
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
          value: PlaceholderFiller.string(),
        },
      ],
    };
    super(props, styles);
    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "item",
      displayer: "Items",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.string(),
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
    };

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Card",
      value: [
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });

    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title-1",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title-3",
      value: PlaceholderFiller.string(),
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
    return "Team Meet Three";
  }

  render() {
    const littleScreen = {
      width: "100%",
      display: "flex",
      flex: "wrap",
      justifyContent: "center",
    };

    const wideScreen = {
      width: 100 / this.getPropValue("itemCount") + "%",
      display: "flex",
      justifyContent: "center",
    };

    let style = function () {
      if (window.innerWidth < 800) {
        return littleScreen;
      } else {
        return wideScreen;
      }
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div></div>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("badge")}>
                {this.getPropValue("badge")}
              </div>
              <div className={this.decorateCSS("text-group")}>
                <h1>{this.getPropValue("title1")}</h1>
                <p>{this.getPropValue("title2")}</p>
              </div>
              <div className={this.decorateCSS("button-group")}>
                {this.castToObject<Button[]>("buttons").map(
                  (button: Button) => {
                    return (
                      <ComposerLink path={button.link}>
                        <button
                          className={
                            this.decorateCSS("button") +
                            " " +
                            (button.isPrimary
                              ? this.decorateCSS("primary")
                              : this.decorateCSS("secondary"))
                          }
                        >
                          {button.text}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Card[]>("items").map((card: Card) => {
                return (
                  <div className={this.decorateCSS("all-card")} style={{width: 100 / this.getPropValue("itemCount") + "%"}}>
                    <div className={this.decorateCSS("card")}>
                      <img src={card.image} alt="" />
                      <h2>{card.name}</h2>
                      <p className={this.decorateCSS("position")}>
                        {card.position}
                      </p>
                      <p>{card.description}</p>
                      <div className={this.decorateCSS("icon-group")}>
                        {card.platforms.map((item: any) => {
                          return (
                            <ComposerLink path={item.url}>
                              <img src={item.icon} alt="" />
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
      </div>
    );
  }
}

export default Team6;
