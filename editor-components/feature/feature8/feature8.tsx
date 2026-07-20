import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  icon: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  button: Button;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
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
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      additionalParams: {
        maxElementCount: 3
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
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaHandPointer",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Non-visual\nCuration",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Manually curating your collections feels like doing your taxes.",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaArrowsAltV",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Limited\nSorting",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "It's too basic to sort your collections by 'New In' or 'Best Sellers'.",
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "RiFoldersFill",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Messy\nData",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You need 5 tabs open to take data-driven decisions from excel sheets.",
            },
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ]
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
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

    if (!this.getPropValue("animation") || this.isMobileOrTablet()) {
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
    if (this.getPropValue("animation") && !this.isMobileOrTablet()) {
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
    const animationEnabled = !!this.getPropValue("animation");
    cards.forEach((el, index) => this.applyCardState(el, index, middle, animationEnabled ? false : true));
  };

  setupObserver = () => {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (!this.getPropValue("animation") || this.isMobileOrTablet()) {
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
      return;
    }

    cardElements.forEach((card) => {
      try { observer.observe(card); } catch { }
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
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons && buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist || subtitleExist || hasValidButtons) && (
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
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: Button, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!buttonText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                          {iconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {cards?.length > 0 && (
            <Base.ListGrid ref={this.cardsRootRef} gridCount={{ pc: this.getPropValue("itemCount") || 3, tablet: 3 }} className={this.decorateCSS("cards-container")}>
              {cards.map((card: Card, index: number) => {
                const subtitleExist = this.castToString(card.subtitle);
                const titleExist = this.castToString(card.title);
                const descExist = this.castToString(card.description);
                const btnText = card.button ? this.castToString(card.button.text) : "";
                const btnIconExist = card.button?.icon && (card.button.icon.type === "icon" ? card.button.icon.name : card.button.icon.url);
                const hasCardButton = !!(btnText || btnIconExist);

                const cardExist = subtitleExist || titleExist || descExist || card.icon;

                return cardExist && (
                  <div key={index} className={this.decorateCSS("card")}>
                    <Base.VerticalContent className={this.decorateCSS("card-content")}>
                      {card.icon && (
                        <Base.Media
                          value={card.icon}
                          className={this.decorateCSS("icon")}
                        />
                      )}
                      {subtitleExist && (
                        <Base.H4 className={this.decorateCSS("card-subtitle")}>
                          {card.subtitle}
                        </Base.H4>
                      )}
                      {titleExist && (
                        <Base.H4 className={this.decorateCSS("title")}>
                          {card.title}
                        </Base.H4>
                      )}
                      {descExist && (
                        <Base.P className={this.decorateCSS("description")}>
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
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature8;
