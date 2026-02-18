import * as React from "react";
import {
  BaseFeature,
  TypeMediaInputValue,
} from "composer-tools/editor-components/EditorComponent";
import styles from "./feature51.module.scss";
import {
  Base,
  TypeButton,
} from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Item = {
  itemTitle: Element;
  itemDescription: Element;
  itemIcon: TypeMediaInputValue;
};

type PrimaryButton = {
  type: TypeButton;
  text: Element;
  url: string;
  icon?: TypeMediaInputValue;
};

class Feature51 extends BaseFeature {
  private containerRef = React.createRef<HTMLDivElement>();

  constructor(props?: any) {
    super(props, styles);

    this.setComponentState("activeIndices", [0]);
    this.setComponentState("isMobile", true);

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
      value: "How We Work",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Strategy Planning",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. \n\nDistinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Technology Consluting",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Design & Development",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaPlus",
              },
            },
            {
              type: "string",
              key: "itemTitle",
              displayer: "Item Title",
              value: "Performance Audit",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Item Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "withLines",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 1,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Feature 51";
  }

  onComponentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  onComponentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  private handleResize = () => {
    const width = window.innerWidth;
    const desktopPx = 1140;
    const isMobile = width <= desktopPx;

    const wasMobile = this.getComponentState("isMobile");
    this.setComponentState("isMobile", isMobile);

    if (isMobile && !wasMobile) {
      this.setComponentState("activeIndices", [0]);
    } else if (!isMobile && wasMobile) {
      this.setComponentState("activeIndices", this.initializeActiveIndices());
    }
  };

  private getColumnCounts(isMobileOverride?: boolean) {
    const items = this.castToObject<Item[]>("items");
    const isMobile =
      isMobileOverride !== undefined
        ? isMobileOverride
        : this.getComponentState("isMobile");

    if (isMobile) {
      return [items.length];
    }

    const itemCount = this.getPropValue("itemCount") as number;
    const columnCount = Math.min(itemCount, items.length);
    const total = items.length;
    const perColBase = Math.floor(total / columnCount);
    const rem = total % columnCount;
    const counts = new Array(columnCount).fill(perColBase);
    for (let i = 0; i < rem; i++) counts[i]++;
    return counts;
  }

  private initializeActiveIndices(isMobileOverride?: boolean) {
    const columnCounts = this.getColumnCounts(isMobileOverride);
    return columnCounts.map(() => 0);
  }

  private handleItemClick = (
    columnIndex: number,
    itemIndexInColumn: number,
  ) => {
    const activeIndices = this.getComponentState("activeIndices") as number[];

    if (activeIndices[columnIndex] === itemIndexInColumn) {
      return;
    }

    const updatedIndices = [...activeIndices];
    updatedIndices[columnIndex] = itemIndexInColumn;
    this.setComponentState("activeIndices", updatedIndices);
  };

  render() {
    const sectionSubtitle = this.castToString(this.getPropValue("subtitle"));
    const sectionTitle = this.castToString(this.getPropValue("title"));
    const sectionDescription = this.castToString(
      this.getPropValue("description"),
    );
    const isSectionHeadingExist =
      sectionSubtitle || sectionTitle || sectionDescription;

    const items = this.castToObject<Item[]>("items");
    const itemCountPerRow = this.getPropValue("itemCount");

    const isMobile = this.getComponentState("isMobile");

    const pcGridCount = isMobile ? 1 : Math.min(4, itemCountPerRow);

    const buttons = this.castToObject<PrimaryButton[]>("buttons");
    const buttonsExist = buttons.some(
      (button) => !!this.castToString(button.text),
    );

    let activeIndices = this.getComponentState("activeIndices") as number[];
    const counts = this.getColumnCounts(isMobile);

    if (!activeIndices || activeIndices.length !== counts.length) {
      activeIndices = this.initializeActiveIndices(isMobile);
      this.setComponentState("activeIndices", activeIndices);
    }

    const columns: Item[][] = [];
    if (isMobile) {
      columns.push(items);
    } else {
      let offset = 0;
      for (const count of counts) {
        columns.push(items.slice(offset, offset + count));
        offset += count;
      }
    }

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        ref={this.containerRef}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isSectionHeadingExist && (
            <Base.VerticalContent
              className={this.decorateCSS("header-container")}
            >
              {sectionSubtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}

              {sectionTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}

              {sectionDescription && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          {items?.length > 0 && (
            <Base.ListGrid
              className={this.decorateCSS("items-container")}
              gridCount={{ pc: pcGridCount, tablet: 1, phone: 1 }}
            >
              {columns.map((columnItems, colIdx) => (
                <div key={colIdx} className={this.decorateCSS("column")}>
                  {columnItems.map((item, idxInCol) => {
                    const globalIndex =
                      columns
                        .slice(0, colIdx)
                        .reduce((sum, col) => sum + col.length, 0) + idxInCol;
                    const isActive = activeIndices[colIdx] === idxInCol;
                    const itemTitle = this.castToString(item.itemTitle);
                    const itemDescription = this.castToString(
                      item.itemDescription,
                    );
                    const itemIcon = item.itemIcon;

                    return (
                      <Base.VerticalContent
                        className={`${this.decorateCSS("item")} 
                        ${isActive ? this.decorateCSS("active") : ""} 
                        ${this.getPropValue("withLines") ? this.decorateCSS("with-lines") : ""}
                        ${pcGridCount === 1 ? this.decorateCSS("one-column") : ""}
                        `}
                        key={globalIndex}
                      >
                        <Base.Row
                          onClick={() => this.handleItemClick(colIdx, idxInCol)}
                          className={`${this.decorateCSS("item-header")}`}
                        >
                          {itemTitle && (
                            <Base.H4 className={this.decorateCSS("item-title")}>
                              {itemTitle}
                            </Base.H4>
                          )}
                          {itemIcon && (
                            <Base.Media
                              value={itemIcon}
                              className={this.decorateCSS("item-icon")}
                            />
                          )}
                        </Base.Row>

                        {itemDescription && (
                          <div
                            className={this.decorateCSS(
                              "item-description-wrapper",
                            )}
                          >
                            <Base.P
                              className={this.decorateCSS("item-description")}
                            >
                              {itemDescription}
                            </Base.P>
                          </div>
                        )}
                      </Base.VerticalContent>
                    );
                  })}
                </div>
              ))}
            </Base.ListGrid>
          )}

          {buttonsExist && (
            <Base.Row className={this.decorateCSS("buttons-wrapper")}>
              {buttons.map((button, index) => {
                const buttonText = this.castToString(button.text);
                const buttonExist = buttonText || button.icon;
                return (
                  buttonExist && (
                    <ComposerLink path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                        key={index}
                        buttonType={button.type}
                      >
                        {button.icon && (
                          <Base.Media
                            value={button.icon}
                            className={this.decorateCSS("button-icon")}
                          />
                        )}
                        {buttonText && (
                          <Base.P className={this.decorateCSS("button-text")}>
                            {button.text}
                          </Base.P>
                        )}
                      </Base.Button>
                    </ComposerLink>
                  )
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature51;
