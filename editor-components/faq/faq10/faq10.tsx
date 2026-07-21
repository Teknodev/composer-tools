import * as React from "react";
import styles from "./faq10.module.scss";
import { BaseFAQ } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

interface FAQ {
  subtitle: React.ReactNode;
  text: React.ReactNode;
}

interface ColumnHeader {
  title: string;
}

class Faq10 extends BaseFAQ {
  private gridRef = React.createRef<HTMLDivElement>();

  constructor(props?: any) {
    super(props, styles);
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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "media",
      key: "icon",
      displayer: "Active Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosRemove",
      },
    });

    this.addProp({
      type: "media",
      key: "iconPlus",
      displayer: "Inactive Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosAdd",
      },
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

    this.addProp({
      type: "array",
      key: "columnHeaders",
      displayer: "Column Headers",
      value: [
        {
          type: "object",
          key: "header",
          displayer: "Header",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "My Account",
            },
          ],
        },
        {
          type: "object",
          key: "header",
          displayer: "Header",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Exchanges & Returns",
            },
          ],
        },
        {
          type: "object",
          key: "header",
          displayer: "Header",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "General Information",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.setComponentState("activeIndices", [0, 0, 0]);
  }

  static getName(): string {
    return "FAQ 10";
  }

  onComponentDidMount() {
    if (this.isStacked()) {
      this.setComponentState("activeIndices", [0, -1, -1]);
    }
  }

  private isStacked(): boolean {
    const el = this.gridRef.current;

    if (!el) return false;

    return getComputedStyle(el).getPropertyValue("--faq-stacked").trim() === "1";
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

  private cardClicked = (columnIndex: number, cardIndexInColumn: number) => {
    const isStacked = this.isStacked();
    const activeIndices = this.getComponentState("activeIndices") as number[];

    const currentActiveInColumn = activeIndices[columnIndex];

    if (currentActiveInColumn === cardIndexInColumn) {
      return;
    }

    const updatedIndices = [...activeIndices];

    if (isStacked) {
      updatedIndices.fill(-1);
      updatedIndices[columnIndex] = cardIndexInColumn;
    } else {
      updatedIndices[columnIndex] = cardIndexInColumn;
    }

    this.setComponentState("activeIndices", updatedIndices);
  };

  render() {
    const cards = this.castToObject<FAQ[]>("card");
    const active = this.getComponentState("activeIndices") as number[];
    const counts = this.getColumnCounts();
    const columnHeaders = this.castToObject<ColumnHeader[]>("columnHeaders") || [];

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
      <Base.Container className={this.decorateCSS("container")}>
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

          <div className={this.decorateCSS("faq-grid")} ref={this.gridRef}>
            {columns.map((colCards, colIdx) => {
              const header = columnHeaders[colIdx];
              const headerTitle = header ? this.castToString(header.title) : "";
              return (
                <div className={this.decorateCSS("faq-col")} key={colIdx}>
                  {headerTitle && (
                    <Base.H4 className={this.decorateCSS("column-title")}>
                      {headerTitle}
                    </Base.H4>
                  )}
                  {colCards.map((card, idxInCol) => {
                    const globalIdx =
                      columns
                        .slice(0, colIdx)
                        .reduce((s, arr) => s + arr.length, 0) + idxInCol;
                    const isOpen = active[colIdx] === idxInCol;

                    const hasText = Boolean(card.text);

                    const cardSubtitleExist = this.castToString(card.subtitle);
                    const cardTextExist = this.castToString(card.text);
                    const iconPlus = this.getPropValue("iconPlus");
                    const icon = this.getPropValue("icon");
                    const iconExist = icon || iconPlus;
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
                            <Base.P className={this.decorateCSS("card-title")}>
                              {card.subtitle}
                            </Base.P>
                          )}
                          <span
                            className={[
                              this.decorateCSS("icon-wrapper"),
                              isOpen ? this.decorateCSS("iconOpen") : "",
                            ].join(" ")}
                          >
                            {iconExist && (
                              <Base.Media
                                value={isOpen ? icon : iconPlus}
                                className={[
                                  this.decorateCSS("icon"),
                                  isOpen ? this.decorateCSS("iconOpen") : "",
                                ].join(" ")}
                              />
                            )}
                          </span>
                        </div>
                        {hasText && (
                          <div
                            className={[
                              this.decorateCSS("card-body"),
                              isOpen ? this.decorateCSS("open") : "",
                            ].join(" ")}
                          >
                            <div className={this.decorateCSS("card-body-inner")}>
                              {cardTextExist &&
                                <Base.P className={this.decorateCSS("card-text")}>
                                  {card.text}
                                </Base.P>}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {this.castToObject<INPUTS.CastedButton[]>("buttons").some((button) => this.castToString(button.text)) && (
            <div className={this.decorateCSS("buttons-wrapper")}>
              {this.castToObject<INPUTS.CastedButton[]>("buttons").map(
                (button: INPUTS.CastedButton) =>
                  this.castToString(button.text) && (
                    <ComposerLink path={button.url}>
                      <Base.Button
                        buttonType={button.type}
                        className={this.decorateCSS("button")}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {button.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  )
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq10;
