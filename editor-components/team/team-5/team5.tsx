import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./team5.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
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
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: PlaceholderFiller.mediumText(),
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
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
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
              <div>
                <div className={this.decorateCSS("badge")}>
                  {this.getPropValue("badge")}
                </div>
              </div>
              <div className={this.decorateCSS("title")}>
                <div className={this.decorateCSS("left")}>
                  <h1>{this.getPropValue("title")}</h1>
                </div>
                <div className={this.decorateCSS("right")}>
                  {this.castToObject<Button[]>("buttons").map((b) => (
                    <ComposerLink path={b.link}>
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
                  ))}
                </div>
              </div>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
            </div>
            <div className={this.decorateCSS("down-page")}>
              {this.castToObject<Meet[]>("items").map((item: Meet, index) => {
                return (
                  <div className={this.decorateCSS("all-card")} style={{width: 100 / this.getPropValue("itemCount") + "%"}}>
                    <div className={this.decorateCSS("card")} key={index}>
                      <div
                        style={{
                          height: "220px",
                          overflow: "hidden",
                          width: "100%",
                        }}
                      >
                        <img src={item.image} alt={item.name} />
                      </div>
                      <h2 className={this.decorateCSS("name")}>{item.name}</h2>
                      <p className={this.decorateCSS("position")}>
                        {item.position}
                      </p>
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

export default Team5;
