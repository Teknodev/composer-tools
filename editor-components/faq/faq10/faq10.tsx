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
      key: "subtitle",
      displayer: "Subtitle",
      value: "FAQ",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Pricing FAQs",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Looking for something else? Let’s talk",
    });
    this.addProp({
      type: "icon",
      key: "iconPlus",
      displayer: "Collapsed Icon",
      value: "IoIosAdd",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Expanded Icon",
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
    this.setComponentState("isMobile", false);
  }

  static getName(): string {
    return "FAQ 10";
  }

  onComponentDidMount() {
    this.handleResize();
    this.updateHeights();
    window.addEventListener('resize', this.handleResize);
  }

  onComponentDidUpdate() {
    this.updateHeights();
  }

  onComponentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  private getColumnCounts() {
    const cards = this.castToObject<FAQ[]>("card");
    const total = cards.length;
    const perColBase = Math.floor(total / 3);
    const rem = total % 3;
    const counts = [perColBase, perColBase, perColBase];
    for (let i = 0; i < rem; i++) counts[i]++;
    return counts;
  }

  private updateHeights() {
    const counts = this.getColumnCounts();

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

    const phonePx = "640";
    const phonePxInt = parseInt(phonePx, 10) || 0;

    const isMobile = width <= phonePxInt;
     
    const wasMobile = this.getComponentState("isMobile");
    this.setComponentState("isMobile", isMobile);
     
    if (isMobile && !wasMobile) {
      this.setComponentState("activeIndices", [0, -1, -1]);
    } else if (!isMobile && wasMobile) {
      this.setComponentState("activeIndices", [0, 0, 0]);
    }
    this.updateHeights();
  };

  private cardClicked = (columnIndex: number, cardIndexInColumn: number) => {
    const isMobile = this.getComponentState("isMobile");
    const activeIndices = this.getComponentState("activeIndices") as number[];

    const currentActiveInColumn = activeIndices[columnIndex];

    if (currentActiveInColumn === cardIndexInColumn) {
      return;
    }

    const updatedIndices = [...activeIndices];
    
    if (isMobile) {
      updatedIndices.fill(-1);
      updatedIndices[columnIndex] = cardIndexInColumn;
    } else {
      updatedIndices[columnIndex] = cardIndexInColumn;
    }

    this.setComponentState("activeIndices", updatedIndices);
    this.updateHeights();
  };

  render() {
    const cards = this.castToObject<FAQ[]>("card");
    const active = this.getComponentState("activeIndices") as number[];
    const counts = this.getColumnCounts();

    const columns: FAQ[][] = [];
    let offset = 0;
    for (const count of counts) {
      columns.push(cards.slice(offset, offset + count));
      offset += count;
    }

    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const headerExist = titleExist || descriptionExist || subtitleExist;

    return (
      <Base.Container className={this.decorateCSS("container")} ref={this.containerRef}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
            {headerExist && 
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>}

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

                    const cardSubtitleExist = this.castToString(card.subtitle);
                    const cardTextExist = this.castToString(card.text);
                    const iconExist = this.getPropValue("icon") || this.getPropValue("iconPlus");
                    return (
                      <div
                        className={this.decorateCSS("card")}
                        key={globalIdx}
                        onClick={() =>
                          hasText && this.cardClicked(colIdx, idxInCol)
                        }
                      >
                        <div className={this.decorateCSS("card-header")}>
                          {cardSubtitleExist && (
                            <Base.H3 className={this.decorateCSS("card-title")}>
                              {card.subtitle}
                            </Base.H3>
                          )}
                          <span
                            className={[
                              this.decorateCSS("icon-wrapper"),
                              isOpen ? this.decorateCSS("iconOpen") : "",
                            ].join(" ")}
                          >
                            {iconExist && 
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
                              />}
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
                            {cardTextExist &&
                            <Base.P className={this.decorateCSS("card-text")}>
                              {card.text}
                            </Base.P>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq10;
