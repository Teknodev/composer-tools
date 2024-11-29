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
      displayer: "TITLE",
      value: "Collections are your most important pages, but are frustrating to manage",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "CARDS",
      additionalParams: {
        maxElementCount: 5
      },
      value: [
        {
          type: "object",
          key: "card",
          displayer: "CARD",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "ICON",
              value: "FaHandPointer",
            },
            {
              type: "string",
              key: "title",
              displayer: "TITLE",
              value: "Non-visual Curation",
            },
            {
              type: "string",
              key: "description",
              displayer: "DESCRIPTION",
              value: "Manually curating your collections feels like doing your taxes.",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "CARD",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "ICON",
              value: "FaArrowsAltV",
            },
            {
              type: "string",
              key: "title",
              displayer: "TITLE",
              value: "Limited Sorting",
            },
            {
              type: "string",
              key: "description",
              displayer: "DESCRIPTION",
              value: "It's too basic to sort your collections by 'New In' or 'Best Sellers'.",
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "CARD",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "ICON",
              value: "RiFoldersFill",
            },
            {
              type: "string",
              key: "title",
              displayer: "TITLE",
              value: "Messy Data",
            },
            {
              type: "string",
              key: "description",
              displayer: "DESCRIPTION",
              value: "You need 5 tabs open to take data-driven decisions from excel sheets.",
            },
          ]
        },
      ],
    });
  }

  callback: IntersectionObserverCallback = (entries) => {
    console.log("callback trigger!");
    const middle = Math.floor(entries.length / 2);
    const offset = 300;

    entries.forEach((entry, index) => {
      const target = entry.target as HTMLElement;

      if (entry.intersectionRatio > this.threshold) {
        target.style.top = "50%";

        if (index === middle) {
          target.style.zIndex = "1";
        } else {
          target.style.left = index > middle
            ? `calc(50% + ${index + 1 * offset}px)`
            : `calc(50% - ${index + 1 * offset}px)`;

          target.style.transform += index > middle
            ? ` rotate(10deg)`
            : ` rotate(-10deg)`;
        }
      } else {
        target.style.left = "50%";
        target.style.top = "60%";
        target.style.transform = "translate(-50%, -50%)";
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
