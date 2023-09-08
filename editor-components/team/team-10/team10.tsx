import * as React from "react";
import styles from "./team10.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Button {
  buttonText: string;
  url: string;
}

interface Card {
  image: string;
  name: string;
  position: string;
}

class Team10 extends Team {
  constructor(props?: any) {
    super(props, styles);

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Learn more",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Who Are We",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "At our company, we are dedicated to helping businesses and individuals improve their online presence through expert web design.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "team-member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jason Covereye",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Co-Founder, CEO",
            },
          ],
        },
        {
          type: "object",
          key: "team-member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Shantel Kiera",
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
  }

  getName(): string {
    return "Team-10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("basic-card")}>
              <h1>{this.getPropValue("title")}</h1>
              <p>{this.getPropValue("description")}</p>
              <div className={this.decorateCSS("button-group")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, indexButtons: number) => {
                    return (
                      <ComposerLink key={indexButtons} path={item.url}>
                        <button className={this.decorateCSS("button")}>
                          {item.buttonText}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
            {this.castToObject<Card[]>("team-members").map(
              (item: Card, indexTeamMembers: number) => {
                return (
                  <div key={indexTeamMembers} className={this.decorateCSS("other-card")}>
                    <div className={this.decorateCSS("opacity")} />
                    <img className={this.decorateCSS("image")} src={item.image} alt="" />
                    <div className={this.decorateCSS("person-info")}>
                      <h2>{item.name}</h2>
                      <p>{item.position}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Team10;
