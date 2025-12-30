import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { TypeMediaInputValue } from "../../../types/declarative";

type Card = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
};

type FirstItem = {
  title: React.JSX.Element;
  backgroundImage: TypeMediaInputValue;
  overlay: boolean;
};

class Feature12 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Best Features",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Services",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "object",
      key: "firstItem",
      displayer: "First Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Best Of Our Features",
        },
        {
          type: "media",
          key: "backgroundImage",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a356692f8a5b002ce695ac?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "SEE ALL SERVICES", "", null, null, "Primary"));
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FiBook",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphic Clean Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Consectetur adipiscing elit",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "IoPhonePortrait",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Web & Mobile Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Sed do eiusmod tempor incididunt.",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "HiPresentationChartLine",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Social Media Marketing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Uttt labore et dolore magna aliqua.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });
  }

  static getName(): string {
    return "Feature 12";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");

    const itemCount = this.getPropValue("itemCount");

    const cards = this.castToObject<Card[]>("cards");
    const firstItem = this.castToObject<FirstItem>("firstItem");

    const firstCardTitleExist = this.castToString(firstItem.title);

    const firstItemBackground = firstItem.backgroundImage;
    const firstItemBackgroundUrl = firstItemBackground?.url ?? firstItemBackground;
    const firstItemBackgroundIsVideo = firstItemBackground?.type === "video";
    const firstItemOverlay = firstItem.overlay;

    const button = this.castToObject<INPUTS.CastedButton>("button");

    const buttonTextExist = this.castToString(button.text)

    const renderFirstItem =
      firstCardTitleExist || buttonTextExist || !!firstItemBackgroundUrl;
    const renderHeader = subtitleExist || titleExist;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {renderHeader && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2 }} className={this.decorateCSS("wrapper")}>
            {renderFirstItem && (
              <div
                className={this.decorateCSS("card-item-first")}
                {...(!firstItemBackgroundIsVideo && firstItemBackgroundUrl && {
                  style: {
                    backgroundImage: `${firstItemOverlay
                      ? "linear-gradient(color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%), color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%)),"
                      : ""
                      } url(${firstItemBackgroundUrl})`,
                  },
                })}
              >
                {firstItemBackgroundIsVideo && firstItemBackground && (
                  <div className={this.decorateCSS("background-media")}>
                    <Base.Media value={firstItemBackground} className={this.decorateCSS("background-media-element")} />
                    {firstItemOverlay && <div className={this.decorateCSS("background-overlay")} />}
                  </div>
                )}
                {firstCardTitleExist && (
                  <Base.H3 className={this.decorateCSS("first-card-title")}>
                    {firstItem.title}
                  </Base.H3>
                )}
                {buttonTextExist && (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )}
              </div>
            )}

            {cards?.length > 0 &&
              cards.map((card: Card, index: number) => {
                const descExist = !!this.castToString(card.description);
                const titleExist = !!this.castToString(card.title);

                const shouldRender = descExist || titleExist;

                if (!shouldRender) return null;
                else
                  return (
                    <div
                      className={this.decorateCSS("card-item-count")}
                      style={{
                        backgroundColor: `
                        color-mix(
                        in srgb,
                        var(--composer-html-background),
                        var(--composer-font-color-primary) ${5 + ((index + 1) % 4) * 5}%
                      )`,
                        animationDelay: `${index * 0.3}s`,
                      }}
                      key={index}
                    >
                      {(card.icon || titleExist || descExist) && (
                        <div className={this.decorateCSS("message")}>
                          {card.icon && (
                            <div className={this.decorateCSS("icon-container")}>
                              <Base.Media
                                value={card.icon}
                                className={this.decorateCSS("icon")}
                              />
                            </div>
                          )}
                          {titleExist && (
                            <Base.H3 className={this.decorateCSS("card-title")}>
                              {card.title}
                            </Base.H3>
                          )}
                          {descExist && (
                            <Base.P className={this.decorateCSS("card-description")}>
                              {card.description}
                            </Base.P>
                          )}
                        </div>
                      )}
                    </div>
                  );
              })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature12;
