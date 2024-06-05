import * as React from "react";
import styles from "./team13.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface Card {
  image: string;
  name: string;
  surname: string;
  paragraph: string;
  icons: { icon: string; url: string }[];
  badge: string;
  paragraph2: string;
}

class Team13 extends Team {
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
          value: "BsTwitterX",
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
          value: "IoLogoFacebook",
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
          value: "BsInstagram",
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
      key: "title",
      displayer: "Title",
      value: "Who is on the team",
    });

    this.addProp({
        type: "string",
        key: "badge",
        displayer: "Badge",
        value: "MEET NEW TEAM",
    })

    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
           
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "John",
            },
            {
              type: "string",
              key: "surname",
              displayer: "Person Surname",
              value: "Smith",
            },
            {
              type: "string",
              key: "paragraph",
              displayer: "Paragraph-I",
              value: "Web design is the process of creating visually appealing and user-friendly websites that effectively communicate a brand's message or sell a product or service.",
            },
            {
              type: "string",
              key: "paragraph2",
              displayer: "Paragraph-II",
              value: "In conclusion, web design is a crucial aspect of creating a successful online presence. By creating visually stunning and user-friendly websites, businesses and individuals can effectively communicate their message or sell their products and services to a wider audience.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [
                twitter,
                facebook,
                instagram,
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team 13";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
        <h2 className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </h2>
          <h4 className={this.decorateCSS("badge")}>
            {this.getPropValue("badge")}
          </h4>
          {this.castToObject<Card[]>("team-members").map(
            (item: Card, indexTeam: number) => {
              return (
                <div className={this.decorateCSS("page")} key={indexTeam}>
                  <div className={this.decorateCSS("left-container")}>
                    <div className={this.decorateCSS("card")}>
                      <img
                        src={item.image}
                        alt=""
                        className={this.decorateCSS("person-img")}
                      />
                      <div className={this.decorateCSS("icon-group")}>
                        {item.icons.map((icon: any, indexIcons: number) => {
                          return (
                            <ComposerLink path={icon.url} key={indexIcons}>

                              <ComposerIcon name={icon.icon} propsIcon={{
                                className:this.decorateCSS("icon")
                              }} />
                            </ComposerLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={this.decorateCSS("right-container")}>
                    <div className={this.decorateCSS("text-group")}>
                      <h1 className={this.decorateCSS("name")}>{item.name}</h1>
                      <h1 className={this.decorateCSS("surname")}>
                        {item.surname}
                      </h1>
                      <p className={this.decorateCSS("paragraph")}>
                        {item.paragraph}
                      </p>
                      <p className={this.decorateCSS("paragraph2")}>
                        {item.paragraph2}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default Team13;
