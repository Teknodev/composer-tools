import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature51.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type ServiceItemType = {
  itemTitle: React.JSX.Element;
  itemDescription: React.JSX.Element;
};

class Feature51 extends BaseFeature {
  constructor(props?: TypeUsableComponentProps) {
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
      value: "How We Work",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
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
              type: "string",
              key: "itemTitle",
              displayer: "Title",
              value: "Strategy Planning",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Description",
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
              type: "string",
              key: "itemTitle",
              displayer: "Title",
              value: "Technology Consluting",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Description",
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
              type: "string",
              key: "itemTitle",
              displayer: "Title",
              value: "Design & Development",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Description",
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
              type: "string",
              key: "itemTitle",
              displayer: "Title",
              value: "Performance Audit",
            },
            {
              type: "string",
              key: "itemDescription",
              displayer: "Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "expandIcon",
      displayer: "Expand Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "IoAddSharp",
      },
    });

    this.addProp({
      type: "media",
      key: "collapseIcon",
      displayer: "Collapse Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "IoRemoveSharp",
      },
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in A Row",
      value: 1,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    const rawItemCount = this.getPropValue("itemCount");
    const itemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;

    const initialActiveItems = Array.from({ length: itemCount }, (_, i) => i);
    this.setComponentState("activeItems", initialActiveItems);
  }

  static getName(): string {
    return "Feature 51";
  }

  private onItemClick(index: number): void {
    const rawItemCount = this.getPropValue("itemCount");
    const itemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
    const colIndex = index % itemCount;

    const activeItems: number[] = this.getComponentState("activeItems") || [];
    const isCurrentlyActive = activeItems.includes(index);

    const otherColActiveItems = activeItems.filter((i) => i % itemCount !== colIndex);

    if (isCurrentlyActive) {
      this.setComponentState("activeItems", otherColActiveItems);
    } else {
      this.setComponentState("activeItems", [...otherColActiveItems, index]);
    }
  }

  private onItemKeyDown(event: React.KeyboardEvent<HTMLDivElement>, index: number): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.onItemClick(index);
    }
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const hasContent = subtitle || title || description;

    const rawItemCount = this.getPropValue("itemCount");
    const itemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
    const line = this.getPropValue("line") as boolean;

    const items = this.castToObject<ServiceItemType[]>("items") || [];

    const collapseIcon = this.getPropValue("collapseIcon") as TypeMediaInputValue;
    const expandIcon = this.getPropValue("expandIcon") as TypeMediaInputValue;
    const hasListContent = items.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {description && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          {hasListContent && (
            <div className={this.decorateCSS("list-container")}>
              {line && <div className={this.decorateCSS("line")}></div>}
              <Base.ListGrid
                className={`${this.decorateCSS("list-grid")} ${line && this.decorateCSS("has-line")}`}
                gridCount={{ pc: itemCount, tablet: 1, phone: 1 }}
              >
                {items.map((item: ServiceItemType, index: number) => {
                  const itemTitleExist = this.castToString(item.itemTitle);
                  const itemDescriptionExist = this.castToString(item.itemDescription);
                  const activeItems: number[] = this.getComponentState("activeItems") || [];
                  const isActive = activeItems.includes(index);
                  const currentToggleIcon = isActive ? collapseIcon : expandIcon;
                  const itemHeaderExist = !!itemTitleExist || !!currentToggleIcon;

                  return (
                    <div
                      key={`feature51-item-${index}`}
                      className={`${this.decorateCSS("item-container")} ${isActive && this.decorateCSS("active-item")}`}
                    >
                      {itemHeaderExist && (
                        <div
                          className={this.decorateCSS("item-header")}
                          onClick={() => this.onItemClick(index)}
                          onKeyDown={(event) => this.onItemKeyDown(event, index)}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isActive}
                        >
                          <div className={this.decorateCSS("item-left")}>
                            {itemTitleExist && (
                              <Base.H4 className={`${this.decorateCSS("item-title")} ${isActive && this.decorateCSS("item-title-active")}`}>
                                {item.itemTitle}
                              </Base.H4>
                            )}
                          </div>
                          {currentToggleIcon && (
                            <div className={this.decorateCSS("toggle-button-container")}>
                              <Base.Media
                                className={`${this.decorateCSS("toggle-icon")} ${this.decorateCSS("button-icon")} ${isActive && this.decorateCSS("toggle-icon-active")}`}
                                value={currentToggleIcon}
                              />
                            </div>
                          )}
                        </div>
                      )}
                      {itemDescriptionExist && (
                        <div
                          className={`${this.decorateCSS("item-description-container")} ${isActive && this.decorateCSS("item-description-active")}`}
                        >
                          <Base.P className={this.decorateCSS("item-description")}>
                            {item.itemDescription}
                          </Base.P>
                        </div>
                      )}
                      {line && <div className={this.decorateCSS("line")}></div>}
                    </div>
                  );
                })}
              </Base.ListGrid>
            </div>
          )}
          {visibleButtons.length > 0 && (
            <Base.Row className={this.decorateCSS("button-container")}>
              {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                return this.castToString(item.text) && (
                  <ComposerLink key={`button-${index}`} path={item.url}>
                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Feature51;