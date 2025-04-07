import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: string;
};

type FirstItem = {
  title: React.JSX.Element;
  backgroundImage: string;
  overlay: boolean;
};

class Feature12 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "upperTitle",
      displayer: "Upper Title",
      value: "Best Features",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Services",
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
          type: "image",
          key: "backgroundImage",
          displayer: "Background Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a356692f8a5b002ce695ac?alt=media",
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Blur Overlay",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FiBook",
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
              value: "Web & Mobile Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Sed do eiusmod tempor incididunt.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoPhonePortrait",
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
              value: "Social Media Marketing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Uttt labore et dolore magna aliqua.",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "HiPresentationChartLine",
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
      max: 4,
    });
  }

  static getName(): string {
    return "Feature 12";
  }

  render() {
    const upperTitleExist = this.getPropValue("upperTitle", {
      as_string: true,
    });
    const titleExist = this.getPropValue("title", { as_string: true });

    const upperTitle = this.getPropValue("upperTitle");
    const title = this.getPropValue("title");

    const itemCount = this.getPropValue("itemCount");

    const cards = this.castToObject<Card[]>("cards");
    const firstItem = this.castToObject<FirstItem>("firstItem");

    const firstCardTitleExist = this.castToString(firstItem.title);

    const firstItemBackgroundImage = firstItem.backgroundImage;
    const firstItemOverlay = firstItem.overlay;

    const button = this.castToObject<INPUTS.CastedButton>("button");

    const buttonTextExist = this.castToString(button.text)

    const renderFirstItem =
      firstCardTitleExist || buttonTextExist || firstItemBackgroundImage;
    const renderHeader = upperTitleExist || titleExist;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {renderHeader && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {upperTitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("upper-title")}>
                  {upperTitle}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("header-title")}>{title}</Base.SectionTitle>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: itemCount }} className={this.decorateCSS("wrapper")}>
            {renderFirstItem && (
              <div
                className={this.decorateCSS("card-item-first")}
                style={{
                  backgroundImage: `${firstItemOverlay
                    ? "linear-gradient(color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%), color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%)),"
                    : ""
                    } url(${firstItemBackgroundImage})`,

                }}
              >
                {firstCardTitleExist && (
                  <Base.H3 className={this.decorateCSS("title")}>
                    {firstItem.title}
                  </Base.H3>
                )}
                {buttonTextExist && (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      {button.text}
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
                              <ComposerIcon
                                name={card.icon}
                                propsIcon={{ className: this.decorateCSS("icon") }}
                              />
                            </div>
                          )}
                          {titleExist && (
                            <div className={this.decorateCSS("title")}>
                              {card.title}
                            </div>
                          )}
                          {descExist && (
                            <div className={this.decorateCSS("long-text")}>
                              {card.description}
                            </div>
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
