import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  icon: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

class Feature8 extends BaseFeature {
  observer?: IntersectionObserver;
  threshold = 0.2;
  cardsRootRef: React.RefObject<HTMLDivElement | null> = React.createRef<HTMLDivElement>();
  resizeTimeout?: NodeJS.Timeout;

  constructor(props?: any) {
    super(props, styles);

    this.setupObserver = this.setupObserver.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Collections are your most important pages, but are frustrating to manage",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaHandPointer",
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaArrowsAltV",
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "RiFoldersFill",
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaHandPointer",
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaHandPointer",
              },
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

  private getTokens = (name: string) => this.decorateCSS(name).split(" ");

  private getCardElements = (): HTMLElement[] => {
    const root = this.cardsRootRef.current;
    if (!root) return [];
    const cardBaseClass = this.decorateCSS("card").split(" ")[0];
    return Array.from(root.querySelectorAll("." + cardBaseClass)) as HTMLElement[];
  };

  private isMobileOrTablet = (): boolean => {
    const container = this.cardsRootRef.current?.parentElement?.parentElement;
    if (!container) return false;
    const containerWidth = container.offsetWidth;
    return containerWidth <= 1024; 
  };

  private applyCardState = (element: HTMLElement, index: number, middle: number, isVisible: boolean) => {
    const visibleTokens = this.getTokens("visible");
    const shiftedTokens = this.getTokens("shifted");

    if (!this.getPropValue("animationEnable") || this.isMobileOrTablet()) {
      element.classList.remove(...visibleTokens, ...shiftedTokens);
      element.dataset.position = "";
      element.style.marginTop = "";
      element.style.marginLeft = "";
      element.style.transform = "";
      return;
    }

    if (isVisible) {
      element.classList.add(...visibleTokens);
      element.classList.remove(...shiftedTokens);
      element.dataset.position = "";
      element.style.marginTop = "";
      element.style.marginLeft = "";
      element.style.transform = "";
      return;
    }

    element.classList.remove(...visibleTokens);
    element.classList.add(...shiftedTokens);
    const distanceFromMiddle = Math.abs(index - middle);
    const decrementLeft = 150;
    const calculatedMarginTop = Math.max(0, distanceFromMiddle * distanceFromMiddle * 50);
    const calculatedMarginLeft = Math.max(0, distanceFromMiddle * decrementLeft);
    
    const rotateAngle = distanceFromMiddle === 1 ? 25 : 30;

    if (index > middle) {
      element.dataset.position = "right";
      element.style.marginTop = `${calculatedMarginTop}px`;
      element.style.marginLeft = `${-1 * calculatedMarginLeft}px`;
      element.style.setProperty('--rotate-angle', `${rotateAngle}deg`);
    } else if (index < middle) {
      element.dataset.position = "left";
      element.style.marginTop = `${calculatedMarginTop}px`;
      element.style.marginLeft = `${calculatedMarginLeft}px`;
      element.style.setProperty('--rotate-angle', `${-rotateAngle}deg`);
    } else {
      element.dataset.position = "";
      element.style.marginTop = "0px";
      element.style.marginLeft = "0px";
    }
  };

  private scheduleInit = () => {
    requestAnimationFrame(() => {
      this.initializeCardsInitialState();
      requestAnimationFrame(() => this.setupObserver());
    });
  };

  private cleanupCardStates = () => {
    const cards = this.getCardElements();
    const visibleTokens = this.getTokens("visible");
    const shiftedTokens = this.getTokens("shifted");
    
    cards.forEach((element) => {
      element.classList.remove(...visibleTokens, ...shiftedTokens);
      element.dataset.position = "";
      element.style.marginTop = "";
      element.style.marginLeft = "";
      element.style.transform = "";
      element.style.zIndex = "";
    });
  };

  handleResize = () => {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    
    this.resizeTimeout = setTimeout(() => {
      this.cleanupCardStates();
      this.scheduleInit();
    }, 150);
  };

  callback: IntersectionObserverCallback = (entries) => {
    if (this.getPropValue("animationEnable") && !this.isMobileOrTablet()) {
      const cards = this.getCardElements();
      const middle = Math.floor(cards.length / 2);
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const index = cards.indexOf(element);
        if (index !== -1) element.style.zIndex = `${index + 1}`;
        this.applyCardState(element, index, middle, entry.intersectionRatio > this.threshold);
      });
    }
  };

  options: IntersectionObserverInit = {
    rootMargin: "0px 0px -20% 0px",
    threshold: this.threshold,
  };

  private initializeCardsInitialState = () => {
    const cards = this.getCardElements();
    if (!cards.length) return;
    const middle = Math.floor(cards.length / 2);
    const animationEnabled = !!this.getPropValue("animationEnable");
    cards.forEach((el, index) => this.applyCardState(el, index, middle, animationEnabled ? false : true));
  };

  setupObserver = () => {
    if (this.observer) {
      this.observer.disconnect();
    }
    
    if (!this.getPropValue("animationEnable") || this.isMobileOrTablet()) {
      this.cleanupCardStates();
      return;
    }
    
    const root = this.cardsRootRef.current;
    if (!root) return;

    const cardBaseClass = this.decorateCSS("card").split(" ")[0];
    const cardElements = root.querySelectorAll("." + cardBaseClass);

    if (!cardElements || cardElements.length === 0) return;

    const scrollRoot = (document.getElementById("playground") as Element) || null;
    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver(this.callback, { ...this.options, root: scrollRoot });
      this.observer = observer;
    } catch (err) {
      console.error("[Feature8] Failed to create IntersectionObserver", err);
      return;
    }

    cardElements.forEach((card) => {
      try { observer.observe(card); } catch {}
    });

    this.setComponentState("cardsCount", cardElements.length);
  };

  componentDidMount(): void {
    this.scheduleInit();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(): void {
    this.scheduleInit();
  }

  componentWillUnmount(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    window.removeEventListener('resize', this.handleResize);
  }

  static getName(): string {
    return "Feature 8";
  }

  render() {
    const titleExist = this.castToString(this.getPropValue("title"));
    const title = this.getPropValue("title");
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const subtitle = this.getPropValue("subtitle");
    const cards = this.castToObject<Card[]>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
            {titleExist && (
              <Base.SectionTitle className={this.decorateCSS("section-title")}>
                {title}
              </Base.SectionTitle>
            )}
          </Base.VerticalContent>
          )}
          {descriptionExist && (
            <Base.SectionDescription className={this.decorateCSS("description")}>
              {description}
            </Base.SectionDescription>
          )}
          </Base.VerticalContent>
          {cards?.length > 0 && (
            <Base.ListGrid ref={this.cardsRootRef} gridCount={{ pc: this.getPropValue("itemCount") || 5 , tablet: 3 }} className={this.decorateCSS("cards-container")}>
              {cards.map((card: Card) => {
                const titleExist = this.castToString(card.title);
                const descExist = this.castToString(card.description);

                const cardExist = titleExist || descExist || card.icon;

                return cardExist && (
                  <div className={this.decorateCSS("card")}>
                    {card.icon && (
                      <Base.Media
                        value={card.icon}
                        className={this.decorateCSS("icon")}
                      />
                    )}
                    {titleExist && (
                      <Base.H3 className={this.decorateCSS("title")}>
                        {card.title}
                      </Base.H3>
                    )}
                    {descExist && (
                      <Base.P className={this.decorateCSS("description")}>
                        {card.description}
                      </Base.P>
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
