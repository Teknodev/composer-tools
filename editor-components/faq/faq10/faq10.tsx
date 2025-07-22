import * as React from "react";
import styles from "./faq10.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

// FAQ type for card data
interface FAQ {
  subtitle: React.ReactNode;
  text: React.ReactNode;
}

class Faq10 extends BaseFAQ {
  containerRef: React.RefObject<HTMLDivElement>;
  state: any;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Looking for something else? Let’s talk",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Pricing FAQs",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoIosRemove",
    });
    this.addProp({
      type: "icon",
      key: "iconPlus",
      displayer: "Icon Plus",
      value: "IoIosAdd",
    });
    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Do you offer a free trial?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "Users allow to explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account.",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Return Process",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "Established fact that a reader will, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with the theory of ethics.",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Purchase Conditions",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "If you use vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Unsubscribe from Newsletter",
            },
            { type: "string", key: "text", displayer: "Answer", value: "" },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "My Payment Methods",
            },
            { type: "string", key: "text", displayer: "Answer", value: "" },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Drop off Return",
            },
            { type: "string", key: "text", displayer: "Answer", value: "" },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Return with Gift Receipt",
            },
            { type: "string", key: "text", displayer: "Answer", value: "" },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Corporate Social Responsibility",
            },
            { type: "string", key: "text", displayer: "Answer", value: "" },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Manufacturers and Suppliers Code of Conduct",
            },
            { type: "string", key: "text", displayer: "Answer", value: "" },
          ],
        },
      ],
    });
    this.setComponentState("selectCardIndex", [0, 1, 2]); // Open first 3 by default
    this.containerRef = React.createRef();
  }

  static getName(): string {
    return "FAQ 10";
  }

  cardClicked(index: number) {
    let selected = this.getComponentState("selectCardIndex") || [];
    if (selected.includes(index)) {
      selected = selected.filter((i: number) => i !== index);
    } else {
      selected = [...selected, index];
    }
    this.setComponentState("selectCardIndex", selected);
  }

  render() {
    const selected = this.getComponentState("selectCardIndex") || [];
    const cards = this.castToObject<FAQ[]>("card");
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        ref={this.containerRef}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.SectionTitle className={this.decorateCSS("title")}>
            {this.getPropValue("title")}
          </Base.SectionTitle>
          <Base.SectionDescription className={this.decorateCSS("subtitle")}>
            {this.getPropValue("subtitle")}
          </Base.SectionDescription>
          <div className={this.decorateCSS("faq-grid")}>
            {cards.map((card, idx) => {
              const isOpen = selected.includes(idx);
              const hasText =
                typeof card.text === "string" ? !!card.text : !!card.text;
              const cardClass = `${this.decorateCSS("card")}`;
              return (
                <div
                  className={cardClass}
                  key={idx}
                  onClick={() => hasText && this.cardClicked(idx)}
                >
                  <div className={this.decorateCSS("card-header")}>
                    <Base.H3 className={this.decorateCSS("card-title")}>
                      {card.subtitle}
                    </Base.H3>
                    <Base.Icon
                      name={
                        isOpen
                          ? this.getPropValue("icon")
                          : this.getPropValue("iconPlus")
                      }
                      propsIcon={{
                        className: `${this.decorateCSS("icon")} ${
                          isOpen ? this.decorateCSS("iconOpen") : ""
                        }`,
                      }}
                    />
                  </div>
                  {hasText && (
                    <div
                      className={`${this.decorateCSS("card-body")} ${
                        isOpen ? this.decorateCSS("open") : ""
                      }`}
                    >
                      <Base.P className={this.decorateCSS("card-text")}>
                        {card.text}
                      </Base.P>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq10;