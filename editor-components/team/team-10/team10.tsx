import * as React from "react";
import styles from "./team10.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface TTeam {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  value1title: string;
  value2title: string;
  value3title: string;
  value1description: string;
  value2description: string;
  value3description: string;

  icons: { icon: string; url: string }[];
}

class Team10 extends Team {
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
          value: "FaTwitter",
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
          value: "FaFacebook",
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
          value: "FaInstagram",
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
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 8,
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "NECROMANCERS",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "MANAGEMENT&STAFF",
    });
    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://necromancers.dan-fisher.dev/assets/img/page-heading-img-02.jpg"
    })

    this.addProp({
      type: "array",
      key: "team",
      displayer: "Team",
      value: [
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://necromancers.dan-fisher.dev/assets/img/samples/staff-member-img-02.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 3 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://necromancers.dan-fisher.dev/assets/img/samples/staff-member-img-02.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle ",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title ",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 2 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ],
            }
          ],
        },
        {
          type: "object",
          key: "member",
          displayer: "Team Member",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://necromancers.dan-fisher.dev/assets/img/samples/staff-member-img-02.jpg",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle ",
              value: "TEAM MANAGER",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "MARINA GONZALES",
            },
            {
              type: "string",
              key: "value1-title",
              displayer: "Value 1 Title",
              value: "AGE",
            },
            {
              type: "string",
              key: "value2-title",
              displayer: "Value 2 Title",
              value: "JOINED",
            },
            {
              type: "string",
              key: "value3-title",
              displayer: "Value 3 Title",
              value: "COUNTRY",
            },
            {
              type: "string",
              key: "value1-description",
              displayer: "Value 1 Description",
              value: "22 YEARS",
            },
            {
              type: "string",
              key: "value2-description",
              displayer: "Value 2 Description",
              value: "2016",
            },
            {
              type: "string",
              key: "value3-description",
              displayer: "Value 3 Description",
              value: "COSTA RİCA",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Icons",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ],
            }
          ],
        }
      ],
    });
  }



  getName(): string {
    return "Team 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("left")}>
            <div className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</div>
            <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
            <img
              className={this.decorateCSS("background-image")}
              src={this.getPropValue("background-image")}
            />
          </div>
          <div className={this.decorateCSS("right")}>
            {this.castToObject<TTeam[]>("team").map(
              (teamMember: any, index: number) => (
                <div className={this.decorateCSS("team-member")}>
                  <div className={this.decorateCSS("info")}>
                    <div className={this.decorateCSS("icon-group")}>
                      <div className={this.decorateCSS("icon-list-container")}>
                        {teamMember.icons.map((icon: any, indexIcons: number) => {
                          return (
                            <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                              <ComposerLink path={icon.url}>

                                <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                              </ComposerLink>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className={this.decorateCSS("subtitle")}>
                      {teamMember.getPropValue("subtitle")}
                    </div>
                    <div className={this.decorateCSS("title")}>
                      {teamMember.getPropValue("title")}
                    </div>
                    <div className={this.decorateCSS("meta-info")}>
                      <div className={this.decorateCSS("meta")}>
                        <div className={this.decorateCSS("label")}>
                          {teamMember.getPropValue("value1-title")}
                          <div className={this.decorateCSS("value")}>
                            {teamMember.getPropValue("value1-description")}
                          </div>
                        </div>

                      </div>
                      <div className={this.decorateCSS("meta")}>
                        <div className={this.decorateCSS("label")}>
                          {teamMember.getPropValue("value2-title")}
                          <div className={this.decorateCSS("value")}>
                            {teamMember.getPropValue("value2-description")}
                          </div>
                        </div>

                      </div>
                      <div className={this.decorateCSS("meta")}>
                        <div className={this.decorateCSS("label")}>
                          {teamMember.getPropValue("value3-title")}
                          <div className={this.decorateCSS("value")}>
                            {teamMember.getPropValue("value3-description")}
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {teamMember.getPropValue("description")}
                    </div>
                  </div>
                  <img
                    className={this.decorateCSS("image")}
                    src={teamMember.getPropValue("image")}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Team10;
