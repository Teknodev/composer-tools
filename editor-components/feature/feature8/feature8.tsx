import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  icon: string;
  title: JSX.Element;
  description: JSX.Element;
};

class Feature8 extends BaseFeature {
  observer: IntersectionObserver;
  threshold = 0.6;

  constructor(props?: any) {
    super(props, styles);

    this.setupObserver = this.setupObserver.bind(this);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Collections are your most important pages, but are frustrating to manage",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      additionalParams: {
        maxElementCount: 5
      },
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaHandPointer",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Non-visual Curation",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Manually curating your collections feels like doing your taxes.",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowsAltV",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Limited Sorting",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "It's too basic to sort your collections by 'New In' or 'Best Sellers'.",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiFoldersFill",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Messy Data",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You need 5 tabs open to take data-driven decisions from excel sheets.",
            },
          ]
        },
      ],
    });
  }

  callback: IntersectionObserverCallback = (entries) => {
    const middle = Math.floor(entries.length / 2);
    const offset = "calc(-1* var(--composer-gap-xl))";

    entries.forEach((entry, index) => {
      const style = (entry.target as HTMLElement).style;

      style.zIndex = `${index + 1}`;

      if (entry.intersectionRatio > this.threshold) {
        style.transform = "";
        style.margin = "0";

      } else {
        style.marginTop = "100px";

        if (index > middle) {
          style.marginLeft = offset;
          style.transform = `rotate(${Math.abs(index - middle)*5}deg)`;
        } else if (index < middle) {
          style.marginRight = offset;
          style.transform = `rotate(-${Math.abs(index - middle)*5}deg)`;
        }
      }
    });
  };

  options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: this.threshold,
  };

  setupObserver = () => {
    const cardElements = document.querySelectorAll("." + this.decorateCSS("card"));

    this.observer = new IntersectionObserver(this.callback, this.options);

    cardElements.forEach((card) => {
      this.observer.observe(card);
    });

    this.setComponentState("cardsCount", cardElements.length);
  };

  getName(): string {
    return "Feature 8";
  }

  render() {
    const titleExist = !!this.getPropValue("title", { as_string: true });
    const title = this.getPropValue("title");

    const cards = this.castToObject<Card[]>("cards");

    const cardsCountChanged = this.getComponentState("cardsCount") as number !== cards.length;

    if (cardsCountChanged) {
      this.setupObserver();
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {titleExist && (
            <Base.SectionTitle className={this.decorateCSS("section-title")}>
              {title}
            </Base.SectionTitle>
          )}
          {cards?.length > 0 && (
            <Base.ContainerGrid className={this.decorateCSS("cards-container")}>
              {cards.map((card, i) => {
                const titleExist = !!this.castToString(card.title);
                const descExist = !!this.castToString(card.description);

                return (
                  <Base.VerticalContent
                    key={i}
                    className={this.decorateCSS("card")}
                    style={{
                      backgroundColor: `color-mix(in srgb,
                        var(--composer-html-background),
                        var(--composer-font-color-primary) ${(i+1)*5}%)`,
                      width: 90 / cards.length + "%"
                    }}
                  >
                    {!!card.icon && (
                      <ComposerIcon
                        name={card.icon}
                        propsIcon={{ className: this.decorateCSS("icon") }}
                      />
                    )}
                    {titleExist && (
                      <Base.H2 className={this.decorateCSS("title")}>
                        {card.title}
                      </Base.H2>
                    )}
                    {descExist && (
                      <Base.P className={this.decorateCSS("description")}>
                        {card.description}
                      </Base.P>
                    )}
                  </Base.VerticalContent>
                );
              })}
            </Base.ContainerGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature8;
