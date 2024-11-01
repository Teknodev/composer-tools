import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature3.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Logo = {
  image: string;
  url: string;
};

type Card = {
  title: string;
  icon: string;
};

class Feature3 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Right Digital Partner For Success"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit consectetur massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu suspendisse felis.",
    });

    this.addProp({
      type: "array",
      key: "logos",
      displayer: "Logo Images",
      value: [
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6dd?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6da?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6d9?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6dc?alt=media&timestamp=1719344851686",
            },
          ]
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Logo Link",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Logo Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6db?alt=media&timestamp=1719344851686",
            },
          ]
        },
      ]
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Search Engine Optimization",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FcSearch",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Marketing & Advertisement",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FcStatistics",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Reporting & Analysis",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Card Icon",
              value: "FcComboChart",
            },
          ]
        },
      ]
    });
  }

  getName(): string {
    return "Feature 3";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const logos = this.castToObject<Logo[]>("logos");

    const titleExist = !!this.getPropValue("title");
    const descExist = !!this.getPropValue("description");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {(titleExist || descExist) && (
              <header className={this.decorateCSS("header")}>
                {titleExist && (
                  <div className={this.decorateCSS("feature-circle")}>
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  </div>
                )}
                {descExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
              </header>
            )}

            {cards?.length > 0 && (
              <Base.ContainerGrid className={this.decorateCSS("cards-container")}>
                {cards.map((card: Card, index: number) => (
                  <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                    <ComposerIcon
                      name={card.icon}
                      propsIcon={{ className: this.decorateCSS("card-icon") }}
                    />
                    <Base.H2 className={this.decorateCSS("card-title")}>{card.title}</Base.H2>
                  </Base.VerticalContent>
                ))}
              </Base.ContainerGrid>
            )}

            {logos?.length > 0 && (
              <Base.ContainerGrid className={this.decorateCSS("logos-container")}>
                {logos.map((logo: Logo, index: number) => (
                  <Base.VerticalContent key={index} className={this.decorateCSS("logo-container")}>
                    <ComposerLink path={logo.url}>
                      <img className={this.decorateCSS("logo-image")} src={logo.image} alt={`logo ${index + 1}`} />
                    </ComposerLink>
                  </Base.VerticalContent>
                ))}
              </Base.ContainerGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature3;
