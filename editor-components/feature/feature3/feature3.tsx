import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature3.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type Logo = {
  media: TypeMediaInputValue;
  url: string;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type Card = {
  title: React.JSX.Element;
  subtitle: React.JSX.Element;
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
  button: Button;
};

class Feature3 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: ""
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Right Digital\nPartner For Success"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit consectetur massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu suspendisse felis.",
    });

    this.addProp({
      type: "boolean",
      key: "circle",
      displayer: "Circle",
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
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "SEO",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Search Engine Optimization",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FcSearch",
              },
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Marketing",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Marketing & Advertisement",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FcStatistics",
              },
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "Analytics",
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Reporting & Analysis",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FcComboChart",
              },
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
      displayer: "Logo Media",
      value: [
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6dd?alt=media&timestamp=1719344851686",
              },
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
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6da?alt=media&timestamp=1719344851686",
              },
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
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6d9?alt=media&timestamp=1719344851686",
              },
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
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6dc?alt=media&timestamp=1719344851686",
              },
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
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "media",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667b1ec34fe95d002b35e6db?alt=media&timestamp=1719344851686",
              },
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

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setComponentState('screenWidth', window.innerWidth);
    });

    this.setComponentState('screenWidth', window.innerWidth);
  }

  static getName(): string {
    return "Feature 3";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const logos = this.castToObject<Logo[]>("logos");

    const cardsItemCount = this.getPropValue("cards-item-count");
    const logosItemCount = this.getPropValue("logos-item-count");

    const circleExist = !!this.getPropValue("circle");

    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = !!this.castToString(subtitle);
    const titleExist = !!this.getPropValue("title");
    const descExist = !!this.getPropValue("description");

    const renderSubtitle = subtitleExist ? (
      <Base.SectionSubTitle className={`
      ${this.decorateCSS("subtitle")}
      ${circleExist ? this.decorateCSS("circle-exist") : ""}
      `}>
        {subtitle}
      </Base.SectionSubTitle>
    ) : null;

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
          <div className={this.decorateCSS("wrapper")}>
            {(subtitleExist || titleExist || descExist || !!cards?.length) && (
              <div
                className={`
                  ${this.decorateCSS("upper")}
                  ${circleExist ? this.decorateCSS("circle-exist") : ""}
                  ${!logos?.length ? this.decorateCSS("no-logos") : ""}
                `}
              >
                {circleExist && mobileDevice
                  ?
                  <div className={`${this.decorateCSS("circle")}`}>
                    {renderSubtitle}
                    {renderTitle}
                    {renderDescription}
                  </div>
                  : circleExist && (renderSubtitle || renderTitle || renderDescription) ?
                    <>
                      <div className={`${this.decorateCSS("circle")}`}>
                        {renderSubtitle}
                        {renderTitle}
                      </div>
                      {renderDescription}
                    </>
                    : circleExist ?
                      <div className={`${this.decorateCSS("circle")} ${this.decorateCSS("absolute")}`}></div>
                      :
                      <>
                        {renderSubtitle}
                        {renderTitle}
                        {renderDescription}
                      </>
                }

                {cards?.length > 0 && (
                  <Base.ListGrid
                    gridCount={{
                      pc: cardsItemCount,
                      tablet: cardsItemCount
                    }}
                    className={`
                      ${this.decorateCSS("cards-container")}
                      ${circleExist ? this.decorateCSS("circle-exist") : ""}
                    `}
                  >
                    {cards.map((card: Card, index: number) => {
                      const titleExist = !!this.castToString(card.title);
                      const subtitleExist = !!this.castToString(card.subtitle);
                      const descExist = !!this.castToString(card.description);
                      const iconExist = !!(card.icon && (card.icon.type === "icon" ? card.icon.name : card.icon.url));
                      const btnText = card.button ? this.castToString(card.button.text) : "";
                      const btnIconExist = card.button?.icon && (card.button.icon.type === "icon" ? card.button.icon.name : card.button.icon.url);
                      const hasCardButton = !!(btnText || btnIconExist);

                      if (!titleExist && !iconExist && !subtitleExist) return null;

                      return (
                        <div key={index} className={this.decorateCSS("card")}>
                          <Base.VerticalContent className={this.decorateCSS("card-content")}>
                            {iconExist && (
                              <Base.Media
                                value={card.icon}
                                className={this.decorateCSS("card-icon")}
                              />
                            )}
                            {subtitleExist && (
                              <Base.H6 className={this.decorateCSS("card-subtitle")}>
                                {card.subtitle}
                              </Base.H6>
                            )}
                            {titleExist && (
                              <Base.H5 className={this.decorateCSS("card-title")}>
                                {card.title}
                              </Base.H5>
                            )}
                            {descExist && (
                              <Base.P className={this.decorateCSS("card-description")}>
                                {card.description}
                              </Base.P>
                            )}
                            {hasCardButton && (
                              <ComposerLink path={card.button.url}>
                                <Base.Button buttonType={card.button.type} className={this.decorateCSS("card-button")}>
                                  {btnText && (
                                    <Base.P className={this.decorateCSS("card-button-text")}>{card.button.text}</Base.P>
                                  )}
                                  {btnIconExist && (
                                    <Base.Media className={this.decorateCSS("card-button-icon")} value={card.button.icon!} />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            )}
                          </Base.VerticalContent>
                        </div>
                      );
                    })}
                  </Base.ListGrid>
                )}
              </div>
            )}

            {logos?.length > 0 && (
              <Base.ListGrid
                gridCount={{
                  pc: logosItemCount,
                  tablet: logosItemCount
                }}
                className={`
                  ${this.decorateCSS("logos-container")}
                  ${circleExist ? this.decorateCSS("circle-exist") : ""}
                  ${!cards?.length ? this.decorateCSS("no-cards") : ""}
                `}
              >
                {logos.map((logo: Logo, index: number) => {
                  const logoExist = !!(logo.media && (logo.media.type === "icon" ? logo.media.name : logo.media.url));
                  if (!logoExist) return null;

                  return (
                    <div key={index} className={this.decorateCSS("logo-container")}>
                      <ComposerLink path={logo.url}>
                        <Base.Media value={logo.media} className={this.decorateCSS("logo-image")} />
                      </ComposerLink>
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature3;
