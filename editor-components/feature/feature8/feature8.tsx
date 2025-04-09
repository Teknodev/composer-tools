import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  icon: string;
  title: React.JSX.Element;
  description: React.JSX.Element;
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
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 5,
    });
    this.addProp({
      type: "boolean",
      key: "animationEnable",
      displayer: "Animation Enable",
      value: true,
    });
  }

  callback: IntersectionObserverCallback = (entries) => {
    if (this.getPropValue("animationEnable")) {
      const middle = Math.floor(entries.length / 2);
      entries.forEach((entry, index) => {
        const element = entry.target as HTMLElement;
        element.style.zIndex = `${index + 1}`;
        const visibleClass = this.decorateCSS("visible");
        const shiftedClass = this.decorateCSS("shifted");
        if (entry.intersectionRatio > this.threshold) {
          element.classList.add(visibleClass);
          element.classList.remove(shiftedClass);
          element.dataset.position = "";
          element.style.marginTop = "0px";
          element.style.marginLeft = "0px";
        } else {
          element.classList.remove(visibleClass);
          element.classList.add(shiftedClass);
          const distanceFromMiddle = Math.abs(index - middle);
          const decrementTop = 50;
          const decrementLeft = 100;
          const calculatedMarginTop = Math.max(0, distanceFromMiddle * decrementTop);
          const calculatedMarginLeft = Math.max(0, distanceFromMiddle * decrementLeft);

          if (index > middle) {
            element.dataset.position = "right";
            element.style.marginTop = `${calculatedMarginTop}px`;
            element.style.marginLeft = `${-1 * calculatedMarginLeft}px`;
          } else if (index < middle) {
            element.dataset.position = "left";
            element.style.marginTop = `${calculatedMarginTop}px`;
            element.style.marginLeft = `${calculatedMarginLeft}px`;
          }
        }
      });
    }
  };

  options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: this.threshold,
  };

  setupObserver = () => {
    // const cardElements = document.querySelectorAll("." + this.decorateCSS("card"));

    // this.observer = new IntersectionObserver(this.callback, this.options);

    // cardElements.forEach((card) => {
    //   this.observer.observe(card);
    // });

    // this.setComponentState("cardsCount", cardElements.length);
  };

  static getName(): string {
    return "Feature 8";
  }

  render() {
    const titleExist = this.castToString(this.getPropValue("title"));
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
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("cards-container")}>
              {cards.map((card: Card, index: number) => {
                const titleExist = this.castToString(card.title);
                const descExist = this.castToString(card.description);

                return (
                  <div className={this.decorateCSS("card")}>
                    {card.icon && (
                      <ComposerIcon
                        name={card.icon}
                        propsIcon={{ className: this.decorateCSS("icon") }}
                      />
                    )}
                    {titleExist && (
                      <div className={this.decorateCSS("title")}>
                        {card.title}
                      </div>
                    )}
                    {descExist && (
                      <div className={this.decorateCSS("description")}>
                        {card.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature8;
