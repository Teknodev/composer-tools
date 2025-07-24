import * as React from "react";
import styles from "./faq10.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

interface FAQ {
  subtitle: React.ReactNode;
  text: React.ReactNode;
}

class Faq10 extends BaseFAQ {
  private containerRef = React.createRef<HTMLDivElement>();
  private bodyRefs: HTMLDivElement[] = [];

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Pricing FAQs",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Looking for something else? Let’s talk",
    });
    this.addProp({
      type: "icon",
      key: "iconPlus",
      displayer: "Icon Plus",
      value: "IoIosAdd",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoIosRemove",
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
              value: "Unsubscribe from Newsletter",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "Users allow to explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system.",
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
              value: "My Payment Methods",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "Users allow to explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system.",
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
              value: "Drop off Return",
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
              value: "Return with Gift Receipt",
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
              value: "Corporate Social Responsibility",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "If you use vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.",
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
              value: "Manufacturers and Suppliers Code of Conduct",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value:
                "If you use vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.",
            },
          ],
        },
      ],
    });

    this.setComponentState("activeIndices", [0, 0, 0]);
  }

  static getName(): string {
    return "FAQ 10";
  }

  componentDidMount() {
    this.handleResize();
    this.updateHeights();
  }

  componentDidUpdate() {
    this.updateHeights();
  }

  private updateHeights() {
    const cards = this.castToObject<FAQ[]>("card");
    const total = cards.length;
    const perColBase = Math.floor(total / 3);
    const rem = total % 3;
    const counts = [perColBase, perColBase, perColBase];
    for (let i = 0; i < rem; i++) counts[i]++;

    this.bodyRefs.forEach((el, globalIdx) => {
      if (!el) return;

      let colIdx = 0;
      let start = 0;
      for (; colIdx < 3; colIdx++) {
        const len = counts[colIdx];
        if (globalIdx < start + len) break;
        start += len;
      }
      const localIdx = globalIdx - start;

      const active = this.getComponentState("activeIndices") as number[];
      const isOpen = active[colIdx] === localIdx;

      el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
    });
  }

  private handleResize = () => {
    const el = this.containerRef.current;

    if (!el) return;

    const width = el.clientWidth;
    const cssPhone = getComputedStyle(document.documentElement)
      .getPropertyValue("--composer-phone-width")
      .trim()
      .replace("px", "");
    const phonePx = parseInt(cssPhone, 10) || 0;
    if (width <= phonePx) {
      this.setComponentState("activeIndices", [0, -1, -1]);
    } else {
      this.setComponentState("activeIndices", [0, 0, 0]);
    }
    this.updateHeights();
  };

  private cardClicked = (columnIndex: number, cardIndexInColumn: number) => {
    const activeIndices = this.getComponentState("activeIndices") as number[];

    const currentActiveInColumn = activeIndices[columnIndex];

    if (currentActiveInColumn === cardIndexInColumn) {
      return;
    }

    const updatedIndices = [...activeIndices];
    updatedIndices[columnIndex] = cardIndexInColumn;

    this.setComponentState("activeIndices", updatedIndices);
    this.updateHeights();
  };

  render() {
    const cards = this.castToObject<FAQ[]>("card");
    const total = cards.length;
    const active = this.getComponentState("activeIndices") as number[];

    const perColBase = Math.floor(total / 3);
    const rem = total % 3;
    const counts = [perColBase, perColBase, perColBase];
    for (let i = 0; i < rem; i++) counts[i]++;

    const columns: FAQ[][] = [];
    let offset = 0;
    for (const count of counts) {
      columns.push(cards.slice(offset, offset + count));
      offset += count;
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div ref={this.containerRef}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
              <Base.SectionDescription className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.SectionDescription>
            </Base.VerticalContent>
            <div className={this.decorateCSS("faq-grid")}>
              {columns.map((colCards, colIdx) => (
                <div className={this.decorateCSS("faq-col")} key={colIdx}>
                  {colCards.map((card, idxInCol) => {
                    const globalIdx =
                      columns
                        .slice(0, colIdx)
                        .reduce((s, arr) => s + arr.length, 0) + idxInCol;
                    const isOpen = active[colIdx] === idxInCol;

                    const hasText = Boolean(card.text);

                    return (
                      <div
                        className={this.decorateCSS("card")}
                        key={globalIdx}
                        onClick={() =>
                          hasText && this.cardClicked(colIdx, idxInCol)
                        }
                      >
                        <div className={this.decorateCSS("card-header")}>
                          <Base.P className={this.decorateCSS("card-title")}>
                            {card.subtitle}
                          </Base.P>
                          <span
                            className={[
                              this.decorateCSS("icon-wrapper"),
                              isOpen ? this.decorateCSS("iconOpen") : "",
                            ].join(" ")}
                          >
                            <Base.Icon
                              name={
                                isOpen
                                  ? this.getPropValue("icon")
                                  : this.getPropValue("iconPlus")
                              }
                              propsIcon={{
                                className: [
                                  this.decorateCSS("icon"),
                                  isOpen ? this.decorateCSS("iconOpen") : "",
                                ].join(" "),
                              }}
                            />
                          </span>
                        </div>
                        {hasText && (
                          <div
                            ref={(el) => (this.bodyRefs[globalIdx] = el!)}
                            className={[
                              this.decorateCSS("card-body"),
                              isOpen ? this.decorateCSS("open") : "",
                            ].join(" ")}
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
              ))}
            </div>
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Faq10;
