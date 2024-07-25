import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats2.module.scss";

type Card = {
  amount: number;
  text: string;
};

type Stats2PageProps = {
  header: string;
  subHeader: string;
  contactButton: string;
  cards: Card[];
};

class Stats2Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header Content",
      value: "Intuition and strategy integrate the research methodology that we also apply to traditional media.",
    });

    this.addProp({
      type: "string",
      key: "subHeader",
      displayer: "Sub Header Content",
      value: "We combine human empathy and intelligent data to provide the highest level of satisfaction.",
    });

    this.addProp({
      type: "string",
      key: "contactButton",
      displayer: "Button Content",
      value: "LET'S TALK NOW",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      additionalParams: {maxElementCount: 4},
      value: [
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Title",
              value: "Users on marketplaces we've created in 2023.",
            },
            {
              type: "number",
              key: "amount",
              displayer: "Amount",
              value: 8500,
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Title",
              value: "Successfully finished projects with creativity.",
            },
            {
              type: "number",
              key: "amount",
              displayer: "Amount",
              value: 660,
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Title",
              value: "Monthly visitors on our e-Commerce platform.",
            },
            {
              type: "number",
              key: "amount",
              displayer: "Amount",
              value: 6834,
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Title",
              value: "Onboarding conversions growth increased.",
            },
            {
              type: "number",
              key: "amount",
              displayer: "Amount",
              value: 300,
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Stats 2";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header-wrapper")}>
            <div className={this.decorateCSS("header")}>{this.getPropValue("header")}</div>
            <div className={this.decorateCSS("subHeader")}>
              {this.getPropValue("subHeader")}
              <button className={this.decorateCSS("contact-button")}>{this.getPropValue("contactButton")}</button>
            </div>
          </div>

          <div className={this.decorateCSS("cards-container")}>
            {cards.map((card, index) => (
              <AnimatedCard key={index} card={card} styles={styles} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

type AnimatedCardProps = {
  card: Card;
  styles: typeof styles;
};

type AnimatedCardState = {
  digits: number[];
};

class AnimatedCard extends React.Component<AnimatedCardProps, AnimatedCardState> {
  private observer: IntersectionObserver;
  private ref: React.RefObject<HTMLDivElement>;

  constructor(props: AnimatedCardProps) {
    super(props);
    const initialDigits = Array.from(String(props.card.amount), () => 0);
    this.state = {
      digits: initialDigits,
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateDigits();
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (this.ref.current) {
      this.observer.observe(this.ref.current);
    }
  }

  animateDigits() {
    const { digits } = this.state;
    const finalDigits = Array.from(String(this.props.card.amount), (digit) => parseInt(digit, 10));

    finalDigits.forEach((finalDigit, index) => {
      if (finalDigit !== digits[index]) {
        this.animateDigit(index, finalDigit - 1);
      }
    });
  }

  animateDigit(index: number, finalValue: number) {
    let currentValue = 0;
    const increment = () => {
      if (currentValue <= finalValue) {
        this.setState((prevState) => {
          const newDigits = [...prevState.digits];
          newDigits[index] = currentValue;
          return { digits: newDigits };
        });
        currentValue += 1;
        if (currentValue <= finalValue) {
          setTimeout(increment, 60);
        }
      }
    };
    increment();
  }

  render() {
    const { digits } = this.state;

    return (
      <div ref={this.ref} className={this.props.styles["listed"]}>
        <p className={this.props.styles["card-text"]}>{this.props.card.text}</p>
        <p className={this.props.styles["card-amount"]}>
          {digits.map((digit, index) => (
            <span key={index} className={digit > 0 ? this.props.styles["digit"] : ""}>{digit}</span>
          ))}
        </p>
      </div>
    );
  }
}

export default Stats2Page;
