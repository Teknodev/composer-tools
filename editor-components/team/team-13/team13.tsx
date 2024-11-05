import * as React from "react";
import styles from "./team13.module.scss";
import { Team } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

interface Card {
  image: string;
  name: JSX.Element;
  job: JSX.Element;
  icons: { icon: string; url: string }[];
}
interface Icon {
  url: string;
  name: string;
}

class Team13 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Meet the Creative Team",
    });

    this.addProp({
      type: "string",
      displayer: "Button Text",
      key: "buttonText",
      value: "Contact Us",
    });

    this.addProp({
      type: "page",
      displayer: "Button Link",
      key: "buttonUrl",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "With our new features Cesis Studio, you can now import templates directly in the page from the Frontend or Backend page builder.",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b8437acba6002c5dfa38?alt=media&timestamp=1730797550937",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Michael Cannon",
            },
            {
              type: "string",
              key: "job",
              displayer: "Person Job",
              value: "Art Director",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6727b8527acba6002c5dfa3e?alt=media&timestamp=1730797550937",
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Sylvia Morales",
            },
            {
              type: "string",
              key: "job",
              displayer: "Person Job",
              value: "UI Designer",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Social Medias",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "name",
              displayer: "Icon",
              value: "FaCcJcb",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "navigate",
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "name",
              displayer: "Icon",
              value: "FaClosedCaptioning",
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Item",
          value: [
            {
              type: "page",
              key: "navigate",
              displayer: "Link",
              value: "",
            },
            {
              type: "icon",
              key: "name",
              displayer: "Icon",
              value: "FaAudioDescription",
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
    const cards = this.castToObject<Card[]>("cards");
    const icons = this.castToObject<Icon[]>("icons");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid gridCount={{ pc: 3, tablet: 2, phone: 1 }} className={this.decorateCSS("content")}>
            <Base.VerticalContent className={this.decorateCSS("featured-card")}>
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              <Base.VerticalContent>
                <Base.VerticalContent className={this.decorateCSS("label")}>
                  <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>
                  <ComposerLink path={this.getPropValue("buttonUrl")}>
                    <Base.H4 className={this.decorateCSS("button")}>{this.getPropValue("buttonText")}</Base.H4>
                  </ComposerLink>
                </Base.VerticalContent>
                <div className={this.decorateCSS("icon-container")}>
                  {icons.map((icon: any, indexIcons: number) => {
                    return (
                      <div key={indexIcons} className={this.decorateCSS("icon-item")}>
                        <ComposerLink path={icon.url}>
                          <ComposerIcon
                            name={icon.name}
                            propsIcon={{
                              className: this.decorateCSS("icon"),
                            }}
                          />
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              </Base.VerticalContent>
            </Base.VerticalContent>

            {cards.map((card: Card, index: number) => {
              const nameExist = this.castToString(card.name);
              const jobExist = this.castToString(card.job);
              return (
                <Base.VerticalContent className={this.decorateCSS("team-card")}>
                  {card.image && <img className={this.decorateCSS("image")} src={card.image} />}
                  {nameExist && <Base.H4 className={this.decorateCSS("name")}>{card.name}</Base.H4>}
                  {jobExist && <Base.H5 className={this.decorateCSS("job")}>{card.job}</Base.H5>}
                </Base.VerticalContent>
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team13;
