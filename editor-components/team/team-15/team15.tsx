import * as React from "react";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./team15.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  image: string;
  title: string;
  description: string;
  firstIcon: string;
  secondIcon: string;
  secondIconUrl: string;
  icons: { icon: string; url: string }[];
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

class Team15 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "OUR TEAM",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b712bd2970002c6284b2?alt=media&timestamp=1734075187275",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdMail",
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdShare",
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
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
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
              value: "David Michale",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c0c120655f8002ca6b928?alt=media&timestamp=1734085667235",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdMail",
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdShare",
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
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
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
              value: "Jorge Schiro",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c0c380655f8002ca6b958?alt=media&timestamp=1734085705101",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdMail",
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdShare",
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
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
            },
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
              value: "John Arlnoald",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c0c600655f8002ca6b970?alt=media&timestamp=1734085745890",
            },
            {
              type: "icon",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdMail",
            },
            {
              type: "page",
              key: "firstIconUrl",
              displayer: "First Icon URL",
              value: "",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdShare",
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
              value: [JSON.parse(JSON.stringify(twitter)), JSON.parse(JSON.stringify(facebook)), JSON.parse(JSON.stringify(instagram))],
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
      max: 6,
    });
  }

  getName(): string {
    return "Team 15";
  }

  render() {
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const overlay = this.getPropValue("overlay");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("up-page")}>
            {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("cards-box")}>
              {this.castToObject<Card[]>("cards").map((card: any, index: number) => {
                const imageExists = card.getPropValue("image");
                const titleExists = this.castToString(card.title);
                const descriptionExists = this.castToString(card.description);

                const firstIcon = card.getPropValue("firstIcon");

                const cardExists = imageExists || titleExists || descriptionExists;
                return (
                  cardExists && (
                    <div key={index} className={this.decorateCSS("card")}>
                      {imageExists && <img src={card.getPropValue("image")} className={this.decorateCSS("image")} alt="" />}
                      {overlay && <div className={this.decorateCSS("overlay")}></div>}
                      {overlay && <div className={this.decorateCSS("overlay2")}></div>}
                      <div className={this.decorateCSS("card-content")}>
                        {titleExists && <Base.H2 className={overlay ? this.decorateCSS("title-overlay") : this.decorateCSS("title")}>{card.getPropValue("title")}</Base.H2>}
                        <div className={this.decorateCSS("labels")}>
                          {card.icons.length > 0 && firstIcon && (
                            <Base.VerticalContent className={this.decorateCSS("icon-list-container")}>
                              {card.icons.map((icon: any, indexIcons: number) => {
                                return (
                                  <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                                    <ComposerLink path={icon.url}>
                                      <ComposerIcon name={icon.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                    </ComposerLink>
                                  </div>
                                );
                              })}
                            </Base.VerticalContent>
                          )}
                          {descriptionExists && <Base.P className={overlay ? this.decorateCSS("description-overlay") : this.decorateCSS("description")}>{card.getPropValue("description")}</Base.P>}
                          <div className={this.decorateCSS("icons")}>
                            <ComposerLink path={card.getPropValue("firstIconUrl")}>
                              <ComposerIcon name={card.getPropValue("firstIcon")} propsIcon={{ className: overlay ? this.decorateCSS("firstIcon-overlay") : this.decorateCSS("firstIcon") }} />
                            </ComposerLink>

                            <ComposerLink path={card.getPropValue("secondIconUrl")}>
                              <ComposerIcon name={card.getPropValue("secondIcon")} propsIcon={{ className: overlay ? this.decorateCSS("secondIcon-overlay") : this.decorateCSS("secondIcon") }} />
                            </ComposerLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team15;
