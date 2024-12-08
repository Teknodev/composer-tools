import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  image: string;
  title: JSX.Element;
  description: JSX.Element;
};

type Button = {
  icon: string;
  text: JSX.Element;
  link: string;
};

class Feature10 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Moving to the cloud, made simple"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We've helped plenty of SaaS startups and scaleups develop reliable, secure infrastructure."
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67372f90506a40002c2aba0e?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Lets Get Digital Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for Lets Get Digital without increasing costs."
            }
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6737443e506a40002c2ac5ae?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Dataswitcher Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Acme implemented ES Foundation at Dataswitcher to improve scalability around peak conversions."
            }
          ]
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67374467506a40002c2ac5c9?alt=media"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "AI Maid Help Case Study"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Here's how Acme improved the infrastructure quality for AI Maid Help without increasing costs."
            }
          ]
        }
      ]
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "View all case studies"
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: ""
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "FaArrowRight"
        }
      ]
    });
  }

  getName(): string {
    return "Feature 10";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");

    const title = this.getPropValue("title");
    const titleExist = !!this.getPropValue("title", { as_string: true });

    const description = this.getPropValue("description");
    const descriptionExist = !!this.getPropValue("description", { as_string: true });

    const button = this.castToObject<Button>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("section-title")}>
                {title}
              </Base.SectionTitle>
            )}

            {descriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("section-description")}>
                {description}
              </Base.SectionDescription>
            )}

            {cards?.length > 0 && (
              <Base.ListGrid gridCount={this.getPropValue("itemCount")} className={this.decorateCSS("cards-container")}>
                {cards.map((item: Card, index: number) => {
                  const titleExist = !!this.castToString(item.title);
                  const descExist = !!this.castToString(item.description);

                  if (!item.image && !titleExist && !descExist) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-container")}
                    >
                      {!!item.image && (
                        <img className={this.decorateCSS("image")} src={item.image} alt={this.castToString(item.title)} />
                      )}
                      {titleExist && (
                        <Base.H2 className={this.decorateCSS("title")}>
                          {item.title}
                        </Base.H2>
                      )}
                      {descExist && (
                        <Base.P className={this.decorateCSS("description")}>
                          {item.description}
                        </Base.P>
                      )}
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}

            {!!this.castToString(button.text) && (
              <div className={this.decorateCSS("button")}>
                <ComposerLink path={button.link}>
                  <ComposerIcon name={button.icon} /> {button.text}
                </ComposerLink>
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature10;

