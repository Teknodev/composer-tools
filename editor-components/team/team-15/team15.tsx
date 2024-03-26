import * as React from "react";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team15.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type Card = {
  image: string;
  title: string;
  description: string;
  firstIcon: string;
  secondIcon: string;
  secondIconUrl: string;
  icons: { icon: string, url: string }[],
};

let twitter: TypeUsableComponentProps = {
  type: "object",
  key: "twitter",
  displayer: "Twitter",
  value: [
    {
      type: "icon",
      key: "icon",
      displayer: "Platform Icon",
      value: "FaTwitter"
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: ""
    }
  ]
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
      value: "FaFacebook"
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: ""
    }
  ]
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
      value: "FaInstagram"
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: ""
    }
  ]
};

class Team15 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "OUR TEAM",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Aleesha Charlotte",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-CEO Founder",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://delogiswp.pixydrops.com/wp-content/uploads/2023/05/team-1-1.jpg",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdShare",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdMail",
            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ]
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Mia Isabella",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-Counselor",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://delogiswp.pixydrops.com/wp-content/uploads/2023/05/team-1-3.jpg",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdShare",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdMail",
            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ]
            }
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Kevin Martins",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "-Therapist",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://delogiswp.pixydrops.com/wp-content/uploads/2023/05/team-1-5.jpg",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdShare",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdMail",

            },
            {
              type: "page",
              key: "secondIconUrl",
              displayer: "Second Icon URL",
              value: "",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ]
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 3,


    });
  }

  getName(): string {
    return "Team 15";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-page")}>
            <h1 className={this.decorateCSS("badge")}>{this.getPropValue("badge")}</h1>
            <div className={this.decorateCSS("cards-box")} style={{
              gridTemplateColumns: `repeat(${this.getPropValue("itemCount")}, 1fr)`
            }}>
              {this.castToObject<Card[]>("cards").map((card: any, index: number) => (

                <div className={this.decorateCSS("card")}>
                  <img src={card.getPropValue("image")} alt={card.getPropValue("title")} />
                  <div className={this.decorateCSS("overlay")}></div>
                  <div className={this.decorateCSS("overlay2")}></div>
                  <div className={this.decorateCSS("card-content")}>
                    <div className={this.decorateCSS("icon-list-container")}>
                      {card.icons.map((icon: any, indexIcons: number) => {
                        return (
                          <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                            <ComposerLink path={icon.url}>
                              <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                            </ComposerLink>
                          </div>
                        );
                      })}
                    </div>
                    <div className={this.decorateCSS("title")}>{card.getPropValue("title")}</div>
                    <div className={this.decorateCSS("labels")}>
                      <span className={this.decorateCSS("description")}>{card.getPropValue("description")}</span>
                      <div className={this.decorateCSS("icons")}>
                        <ComposerIcon
                          name={card.getPropValue("firstIcon")}
                          propsIcon={{ className: this.decorateCSS("firstIcon") }}
                        />
                        <ComposerLink path={card.getPropValue("secondIconUrl")}>
                          <ComposerIcon
                            name={card.getPropValue("secondIcon")}
                            propsIcon={{ className: this.decorateCSS("secondIcon") }}
                          />
                        </ComposerLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    )

  }
}

export default Team15;