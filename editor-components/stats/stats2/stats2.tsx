import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  amount: number;
  text: string;
};

class Stats2Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "number",
      key: "animation-duration",
      displayer: "Number Animation Duration (ms)",
      value: 2000,
    });

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
      type: "icon",
      key: "contactButtonIcon",
      displayer: "Button Icon",
      value: "MdMailOutline",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      additionalParams: { maxElementCount: 4 },
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
    const animationDuration = this.getPropValue("animation-duration") as number;
   const subHeader = this.castToString(this.getPropValue("subHeader"));
   
    const header = this.castToString(this.getPropValue("header"));
    const contactButton = this.castToString(this.getPropValue("contactButton"));
    const contactButtonIcon = this.getPropValue("contactButtonIcon");
    const hasHeader = Boolean(header);
  
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header-wrapper")}>
            {header && (
              <div className={this.decorateCSS("header")}>{header}</div>
            )}
          </div>

          <div className={this.decorateCSS("bottom-content")}>
            {subHeader && (
              <div className={this.decorateCSS("subHeader")}>
                {subHeader}
                {(contactButton || contactButtonIcon) && (
                  <button className={this.decorateCSS("contact-button")}>
                    {contactButton}
                    {contactButtonIcon && (
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("contact-button-icon") }}
                        name={contactButtonIcon}
                      />
                    )}
                  </button>
                )}
              </div>
            )}

            {cards.length > 0 && (
              <div className={this.decorateCSS("cards-container")} style={{ top: hasHeader ? '245px' : '0' }}>
                {cards.map((card, index) => (
                  <AnimatedCard key={index} card={card} animationDuration={animationDuration} styles={styles} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }  
}

type AnimatedCardProps = {
  card: Card;
  animationDuration: number;
  styles: typeof styles;
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ card, animationDuration, styles }) => {
  const [amount, setAmount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateDigits();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [card.amount]);

  const animateDigits = () => {
    const finalAmount = card.amount;
    const steps = animationDuration / 30;
    let currentAmount = 0;
    const increment = finalAmount / steps;

    const interval = setInterval(() => {
      currentAmount += increment;
      if (currentAmount >= finalAmount) {
        currentAmount = finalAmount;
        clearInterval(interval);
      }
      setAmount(Math.ceil(currentAmount));
    }, 30);
  };

  return (
    <div ref={ref} className={styles["listed"]}>
      <p className={styles["card-text"]}>{card.text}</p>
      <p className={styles["card-amount"]}>{amount}</p>
    </div>
  );
};

export default Stats2Page;
