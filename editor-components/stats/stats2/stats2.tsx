import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Card = {
  amount: number;
  text: JSX.Element;
  icon?: string;
  secondIcon?: string;
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
      displayer: "Title",
      value:
        "Intuition and strategy integrate the research methodology that we also apply to traditional media.",
    });

    this.addProp({
      type: "string",
      key: "subHeader",
      displayer: "Description",
      value:
        "We combine human empathy and intelligent data to provide the highest level of satisfaction.",
    });

    this.addProp({
      type: "string",
      key: "contactButton",
      displayer: "Button Content",
      value: "LET'S TALK NOW",
    });

    this.addProp({
      type: "page",
      key: "contactButtonLink",
      displayer: "Button Link",
      value: "",
    });

    this.addProp({
      type: "boolean",
      key: "buttonAnimation",
      displayer: "Enable Button Animation",
      value: true,
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
      additionalParams: { maxElementCount: 10 },
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoMdArrowUp",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Icon After Amount",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoMdArrowUp",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Icon After Amount",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoMdArrowUp",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Icon After Amount",
              value: "FaPlus",
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
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoMdArrowUp",
            },
            {
              type: "icon",
              key: "secondIcon",
              displayer: "Icon After Amount",
              value: "FaPlus",
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
    const cardLength = cards.length;
    const animationDuration = this.getPropValue("animation-duration") as number;
    const header = this.getPropValue("header");
    const isHeaderExist = this.castToString(header);
    const subHeader = this.getPropValue("subHeader");
    const isSubHeader = this.castToString(subHeader);
    const contactButton = this.getPropValue("contactButton");
    const isContactButtonExist = this.castToString(contactButton);
    const contactButtonIcon = this.getPropValue("contactButtonIcon");
    const buttonAnimationEnabled = this.getPropValue("buttonAnimation");
    const contactButtonLink = this.getPropValue("contactButtonLink");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {isHeaderExist && (
            <div className={`${this.decorateCSS("header-wrapper")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""
              }`}>
              <div className={this.decorateCSS("header")}>{header}</div>
            </div>
          )}

          <div className={this.decorateCSS("bottom-content")}>
            {(isSubHeader || isContactButtonExist || contactButtonIcon) && (
              <div className={`${this.decorateCSS("subHeader")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""
                }`}>
                {isSubHeader && (
                  <div className={`${this.decorateCSS("description")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""
                    }`}>
                    {subHeader}
                  </div>
                )}

                {(isContactButtonExist || contactButtonIcon) && (
                  <ComposerLink path={contactButtonLink}>
                    <div className={this.decorateCSS("button-content")}>
                      <p className={`${this.decorateCSS("contact-button")} ${buttonAnimationEnabled ? this.decorateCSS("animated") : ""
                        } ${cardLength <= 0 ? this.decorateCSS("button-full-width") : ""
                        }`}>{isContactButtonExist}<ComposerIcon
                        name={contactButtonIcon}
                        propsIcon={{
                          className: this.decorateCSS("contact-button-icon"),
                        }} /></p>
                      
                    </div>
                  </ComposerLink>
                )}

              </div>
            )}


            {cards.length > 0 && (
              <div className={this.decorateCSS("cards-container")}>
                {cards.map((card, index) => {
                  const isTextExist = this.castToString(card.text);
                  return (
                    <AnimatedCard
                      key={index}
                      card={card}
                      animationDuration={animationDuration}
                      styles={styles}
                      isTextExist={isTextExist}
                    />
                  );
                })}
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
  isTextExist: string;
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  animationDuration,
  styles,
  isTextExist,
}) => {
  const [amount, setAmount] = React.useState<string | null>(null);
  const [showDecimals, setShowDecimals] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [card.amount]);

  const animateDigits = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const finalAmount = card.amount?.toString();
    if (finalAmount === null || finalAmount === undefined) {
      setAmount(null);
      return;
    }

    const steps = animationDuration / 30;
    let currentAmount = amount ? parseFloat(amount) : 0;
    const increment = (parseFloat(finalAmount) - currentAmount) / steps;

    intervalRef.current = setInterval(() => {
      currentAmount += increment;

      if (
        (increment > 0 && currentAmount >= parseFloat(finalAmount)) ||
        (increment < 0 && currentAmount <= parseFloat(finalAmount))
      ) {
        currentAmount = parseFloat(finalAmount);
        clearInterval(intervalRef.current);
        setShowDecimals(true);
      }

      setAmount(currentAmount.toString());
    }, 30);
  };

  const integerPart = amount ? Math.floor(parseFloat(amount)) : null;
  const decimalPart = amount ? amount.split(".")[1] || "" : "";

  return (
    (isTextExist || amount !== null || card.icon || card.secondIcon) && (
      <div ref={ref} className={styles["listed"]}>
        {isTextExist && (
          <div className={styles["card-text"]}>{card.text}</div>
        )}
        {(amount !== null || card.icon || card.secondIcon) && (
          <div className={styles["card-amount-container"]}>
            {card.icon && (
              <ComposerIcon
                propsIcon={{ className: styles["card-icon"] }}
                name={card.icon}
              />
            )}
            {(amount !== null && amount !== "NaN") && (
              <h2 className={styles["card-amount"]}>
                {integerPart}
                {showDecimals && decimalPart && <span>.{decimalPart}</span>}
              </h2>
            )}
            {card.secondIcon && (
              <ComposerIcon
                propsIcon={{ className: styles["card-icon-after"] }}
                name={card.secondIcon}
              />
            )}
          </div>
        )}
      </div>
    )
  );
};

export default Stats2Page;
