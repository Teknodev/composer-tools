import * as React from "react";
import styles from "./team5.module.scss";
import { Team } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

type Meet = {
  image: string;
  name: string;
  position: string;
};

type Button = {
  link: string;
  text: string;
  isPrimary: boolean;
};
class Team5 extends Team {
  constructor(props?: any) {
    super(props, styles);

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
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Team",
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
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Team Meet";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("all-page")}>
            <div className={this.decorateCSS("up-page")}>
              <div className={this.decorateCSS("title")}>
                <div className={this.decorateCSS("left")}>
                  <h1>{this.getPropValue("title")}</h1>
                </div>
                <div className={this.decorateCSS("right")}>
                  {this.castToObject<Button[]>("buttons").map(
                    (b, indexButtons: number) => (
                      <ComposerLink key={indexButtons} path={b.link}>
                        <button
                          className={
                            this.decorateCSS("button") +
                            " " +
                            (b.isPrimary
                              ? this.decorateCSS("primary")
                              : this.decorateCSS("secondary"))
                          }
                        >
                          {b.text}
                        </button>
                      </ComposerLink>
                    )
                  )}
                </div>
              </div>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Meet[]>("items").map(
                (item: Meet, indexItems: number) => {
                  return (
                    <div
                      key={indexItems}
                      className={this.decorateCSS("all-card")}
                      style={{
                        width: 90 / this.getPropValue("itemCount") + "%",
                      }}
                    >
                      <div className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("image-wrapper")}>
                          <img
                            className={this.decorateCSS("image")}
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <h2 className={this.decorateCSS("name")}>{item.name}</h2>
                        <p className={this.decorateCSS("position")}>{item.position}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team5;
