import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats2.module.scss";

import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  number: string;
  description: React.JSX.Element;
  icon?: TypeMediaInputValue | string;
  secondIcon?: TypeMediaInputValue | string;
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Title",
      value: "Intuition and strategy integrate the research methodology that we also apply to traditional media.",
    });

    this.addProp({
      type: "string",
      key: "subHeader",
      displayer: "Description",
      value: "We combine human empathy and intelligent data to provide the highest level of satisfaction.",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "LET'S TALK NOW", "", null, null, "Primary"));

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Users on marketplaces we've created in 2023.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "8500",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Successfully finished projects with creativity.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "660",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Monthly visitors on our e-Commerce platform.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "6834",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Onboarding conversions growth increased.",
            },
            {
              type: "string",
              key: "number",
              displayer: "Value",
              value: "300",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "IoMdArrowUp" },
            },
            {
              type: "media",
              key: "secondIcon",
              displayer: "Icon After Amount",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "FaPlus" },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
      max: 4,
    });
  }

  static getName(): string {
    return "Stats 2";
  }

  render() {
    const cards = this.castToObject<Card[]>("stats");
    const cardLength = cards.length;
    const animationDuration = this.getPropValue("animation-duration") as number;

    const itemCount = this.getPropValue("itemCount");

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);

    const totalRows = Math.ceil(cards.length / itemCount);

    const AnimatedCard = ({ card, animationDuration, isTextExist, isFirstRow, isLastRow }: { card: Card; animationDuration: number; isTextExist: string; isFirstRow: boolean; isLastRow: boolean }) => {
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
      }, [card.number]);

      const animateDigits = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        const finalAmount = card.number?.toString();
        if (finalAmount === null || finalAmount === undefined) {
          setAmount(null);
          return;
        }

        const steps = animationDuration / 30;
        let currentAmount = amount ? parseFloat(amount) : 0;
        const increment = (parseFloat(finalAmount) - currentAmount) / steps;

        intervalRef.current = setInterval(() => {
          currentAmount += increment;

          if ((increment > 0 && currentAmount >= parseFloat(finalAmount)) || (increment < 0 && currentAmount <= parseFloat(finalAmount))) {
            currentAmount = parseFloat(finalAmount);
            clearInterval(intervalRef.current);
            setShowDecimals(true);
          }

          setAmount(currentAmount.toString());
        }, 30);
      };

      const integerPart = amount ? Math.floor(parseFloat(amount)) : null;
      const decimalPart = amount ? amount.split(".")[1] || "" : "";

      const conditionalClasses = [isFirstRow ? this.decorateCSS("border-top-none") : "", isLastRow ? this.decorateCSS("border-bottom-none") : ""].filter(Boolean).join(" ");

      const classes = `${this.decorateCSS("listed")} ${conditionalClasses}`.trim();

      return (
        (isTextExist || amount !== null || (typeof card.icon === "object" ? (card.icon?.name || card.icon?.url) : card.icon) || (typeof card.secondIcon === "object" ? (card.secondIcon?.name || card.secondIcon?.url) : card.secondIcon)) && (
          <div ref={ref} className={classes}>
            {isTextExist && <Base.P className={this.decorateCSS("card-text")}>{card.description}</Base.P>}
            {(amount !== null || (typeof card.icon === "object" ? (card.icon?.name || card.icon?.url) : card.icon) || (typeof card.secondIcon === "object" ? (card.secondIcon?.name || card.secondIcon?.url) : card.secondIcon)) && (
              <div className={this.decorateCSS("card-amount-container")}>
                {(typeof card.icon === "object" ? (card.icon?.name || card.icon?.url) : card.icon) && (
                  <Base.Media value={typeof card.icon === "object" ? card.icon : { type: "icon", name: card.icon }} className={this.decorateCSS("card-icon")} />
                )}
                {amount !== null && amount !== "NaN" && (
                  <div className={this.decorateCSS("card-amount")}>
                    {integerPart}
                    {showDecimals && decimalPart && <span>.{decimalPart}</span>}
                  </div>
                )}
                {(typeof card.secondIcon === "object" ? (card.secondIcon?.name || card.secondIcon?.url) : card.secondIcon) && (
                  <Base.Media value={typeof card.secondIcon === "object" ? card.secondIcon : { type: "icon", name: card.secondIcon }} className={this.decorateCSS("card-icon-after")} />
                )}
              </div>
            )}
          </div>
        )
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isSubtitleExist || this.castToString(this.getPropValue("header"))) && (
            <Base.VerticalContent className={`${this.decorateCSS("header-wrapper")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""}`}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {this.castToString(this.getPropValue("header")) && (
                <Base.SectionTitle className={this.decorateCSS("header")}>{this.getPropValue("header")}</Base.SectionTitle>
              )}
            </Base.VerticalContent>
          )}

          <Base.ContainerGrid className={this.decorateCSS("bottom-content")}>
            {this.castToString(this.getPropValue("subHeader")) && (
              <div className={`${this.decorateCSS("subHeader")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""}  ${!this.castToString(this.getPropValue("header")) && this.decorateCSS("no-title")}`}>
                {this.castToString(this.getPropValue("subHeader")) && <Base.SectionDescription className={`${this.decorateCSS("description")} ${cardLength <= 0 ? this.decorateCSS("full-width") : ""}`}>{this.getPropValue("subHeader")}</Base.SectionDescription>}

                {this.castToString(button.text) && (
                  <div className={this.decorateCSS("button-content")}>
                    <ComposerLink path={button.url}>
                      <Base.Button buttonType={button.type} className={`${this.decorateCSS("contact-button")} ${cardLength <= 0 ? this.decorateCSS("button-full-width") : ""}`}>
                        {button.text}
                      </Base.Button>
                    </ComposerLink>
                  </div>
                )}
              </div>
            )}

            {cards.length > 0 && (
              <Base.ListGrid gridCount={{ pc: itemCount, tablet: 2, phone: 1 }} className={this.decorateCSS("cards-container")}>
                {cards.map((card, index) => {
                  const currentRow = Math.floor(index / itemCount) + 1;
                  const isFirstRow = currentRow === 1;
                  const isLastRow = currentRow === totalRows;

                  const isTextExist = this.castToString(card.description);
                  return <AnimatedCard key={index} card={card} animationDuration={animationDuration} isTextExist={isTextExist} isFirstRow={isFirstRow} isLastRow={isLastRow} />;
                })}
              </Base.ListGrid>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats2Page;
