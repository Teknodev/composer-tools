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
  title: JSX.Element;
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
      type: "boolean",
      key: "enableCircle",
      displayer: "Enable Circle",
      value: true,
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

    this.addProp({
      type: "number",
      key: "cards-item-count",
      displayer: "Cards Item Count in a Row",
      value: 3,
      max: 5
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
      type: "number",
      key: "logos-item-count",
      displayer: "Logos Item Count in a Row",
      value: 5,
      max: 5
    });

    window.addEventListener('resize', () => {
      this.setComponentState('screenWidth', window.innerWidth);
    });

    this.setComponentState('screenWidth', window.innerWidth);
  }

  getName(): string {
    return "Feature 3";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const logos = this.castToObject<Logo[]>("logos");

    const cardsItemCount = this.getPropValue("cards-item-count");
    const logosItemCount = this.getPropValue("logos-item-count");

    const circleExist = !!this.getPropValue("enableCircle");

    const titleExist = !!this.getPropValue("title");
    const descExist = !!this.getPropValue("description");

    const renderTitle = titleExist ? (
      <Base.SectionTitle className={`
      ${this.decorateCSS("title")}
      ${circleExist ? this.decorateCSS("circle-exist") : ""}
      `}>
        {this.getPropValue("title")}
      </Base.SectionTitle>
    ) : null;

    const renderDescription = descExist ? (
      <Base.SectionDescription className={`
      ${this.decorateCSS("description")}
      ${circleExist ? this.decorateCSS("circle-exist") : ""}
      `}>
        {this.getPropValue("description")}
      </Base.SectionDescription>
    ) : null;

    const mobileDevice = this.getComponentState("screenWidth") < 640;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            {(titleExist || descExist || !!cards?.length) && (
              <Base.VerticalContent
                className={`
                  ${this.decorateCSS("upper")}
                  ${circleExist ? this.decorateCSS("circle-exist") : ""}
                  ${!logos?.length ? this.decorateCSS("no-logos") : ""}
                `}
              >
                {circleExist && mobileDevice
                  ?
                  <div className={`${this.decorateCSS("circle")}`}>
                    {renderTitle}
                    {renderDescription}
                  </div>
                  : circleExist && (renderTitle || renderDescription) ?
                    <>
                      <div className={`${this.decorateCSS("circle")}`}>
                        {renderTitle}
                      </div>
                      {renderDescription}
                    </>
                    : circleExist ?
                      <div className={`${this.decorateCSS("circle")} ${this.decorateCSS("absolute")}`}></div>
                      :
                      <>
                        {renderTitle}
                        {renderDescription}
                      </>
                }

                {cards?.length > 0 && (
                  <Base.ListGrid
                    gridCount={{ pc: cardsItemCount, tablet: cardsItemCount <= 3 ? cardsItemCount : 3 }}
                    className={`
                      ${this.decorateCSS("cards-container")}
                      ${circleExist ? this.decorateCSS("circle-exist") : ""}
                    `}
                  >
                    {cards.map((card: Card, index: number) => {
                      const titleExist = !!this.castToString(card.title);
                      const iconExist = !!card.icon;

                      if (!titleExist && !iconExist) return null;

                      return (
                        <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                          <Base.VerticalContent className={this.decorateCSS("card-content")}>
                            {iconExist && (
                              <ComposerIcon
                                name={card.icon}
                                propsIcon={{ className: this.decorateCSS("card-icon") }}
                              />
                            )}
                            {titleExist && (
                              <Base.H2 className={this.decorateCSS("card-title")}>
                                {card.title}
                              </Base.H2>
                            )}
                          </Base.VerticalContent>
                        </Base.VerticalContent>
                      );
                    })}
                  </Base.ListGrid>
                )}
              </Base.VerticalContent>
            )}

            {logos?.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: logosItemCount, tablet: logosItemCount <= 3 ? logosItemCount : 3 }}
                className={`
                  ${this.decorateCSS("logos-container")}
                  ${circleExist ? this.decorateCSS("circle-exist") : ""}
                  ${!cards?.length ? this.decorateCSS("no-cards") : ""}
                `}
              >
                {logos.map((logo: Logo, index: number) => {
                  if (!logo.image) return null;

                  return (
                    <Base.VerticalContent key={index} className={this.decorateCSS("logo-container")}>
                      <ComposerLink path={logo.url}>
                        <img className={this.decorateCSS("logo-image")} src={logo.image} alt={`logo ${index + 1}`} />
                      </ComposerLink>
                    </Base.VerticalContent>
                  );
                })}
              </Base.ListGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature3;
