import * as React from "react";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./team16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  image: TypeMediaInputValue;
  name: React.JSX.Element;
  job: React.JSX.Element;
  description: React.JSX.Element;
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
    this.addProp(INPUTS.BUTTON("button", "Button", "Join Our Team", "", null, null, "Primary"));
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f5?alt=media&timestamp=1731587983245",
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735df16506a40002c2a4f73?alt=media&timestamp=1731587983245",
              },
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
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f4?alt=media&timestamp=1731587983245",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  static getName(): string {
    return "Team 16";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {(titleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("up-content")}>
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
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
                    <div key={indexCards} className={this.decorateCSS("card")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                      {card.image && (
                        <div className={this.decorateCSS("image-wrapper")}>
                          <Base.Media value={card.image} className={this.decorateCSS("image")} />
                        </div>
                      )}
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
            {this.castToString(button.text) && (
              <div className={this.decorateCSS("button-wrapper")}>
                <ComposerLink path={button.url}>
                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                    {button.text}
                  </Base.Button>
                </ComposerLink>
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team16;
