import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  image: string;
  name: JSX.Element;
  job: JSX.Element;
  description: JSX.Element;
};

class Team16 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Introducing Our Talented Team",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Meet Our Exceptional Team! Our diverse talents converge to create a dynamic force, driven by shared vakues and a commitment to excellence.",
    });

    this.addProp({
      type: "string",
      key: "button-text",
      displayer: "Button",
      value: "Join Our Team",
    });
    this.addProp({
      type: "page",
      key: "button_url",
      displayer: "Button Url",
      value: "",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 5,
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
              key: "name",
              displayer: "Name",
              value: "Dianne Russell",
            },
            {
              type: "string",
              key: "job",
              displayer: "Job",
              value: "Sales Lead",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The inception of this venture has not only been fulfilling but has also marked a significant milestone in my journey.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f5?alt=media&timestamp=1731587983245",
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
              key: "name",
              displayer: "Name",
              value: "Michael Cannon",
            },
            {
              type: "string",
              key: "job",
              displayer: "Job",
              value: "Founder",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "PageDone remains steadfast in its commitment to innovation and growth. With each step forward, we embrace.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735df16506a40002c2a4f73?alt=media&timestamp=1731587983245",
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
              key: "name",
              displayer: "Name",
              value: "Sylvia Morales",
            },
            {
              type: "string",
              key: "job",
              displayer: "Job",
              value: "Product Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The inception of this venture has been an immensely rewarding experience, representing a pivotal milestone in my personal.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f4?alt=media&timestamp=1731587983245",
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
              key: "name",
              displayer: "Name",
              value: "Sylvia Morales",
            },
            {
              type: "string",
              key: "job",
              displayer: "Job",
              value: "Product Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The inception of this venture has been an immensely rewarding experience, representing a pivotal milestone in my personal.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f3?alt=media&timestamp=1731587983245",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team 16";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(titleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("up-content")}>
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("down-content")}>
              {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => {
                const nameExist = this.castToString(card.name);
                const jobExist = this.castToString(card.job);
                const descriptionExist = this.castToString(card.description);

                const cardExist = nameExist || jobExist || descriptionExist || card.image;
                return (
                  cardExist && (
                    <div key={indexCards} className={this.decorateCSS("card")}>
                      {card.image && <img className={this.decorateCSS("image")} src={card.image} alt="" />}
                      <div className={this.decorateCSS("text-box")}>
                        <div className={this.decorateCSS("text-up")}>
                          {nameExist && <Base.H3 className={this.decorateCSS("name")}>{card.name}</Base.H3>}
                          {jobExist && <Base.H3 className={this.decorateCSS("job")}>{card.job}</Base.H3>}
                        </div>
                        {descriptionExist && <Base.P className={this.decorateCSS("description")}>{card.description}</Base.P>}
                      </div>
                    </div>
                  )
                );
              })}
            </Base.ListGrid>
            <ComposerLink path={this.getPropValue("button_url")}>
              <div className={this.decorateCSS("button")}>
                <Base.H5 className={alignmentValue === "left" ? this.decorateCSS("button-element") : alignmentValue === "center" ? this.decorateCSS("button-element-center") : null}>{this.getPropValue("button-text")}</Base.H5>
              </div>
            </ComposerLink>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team16;
