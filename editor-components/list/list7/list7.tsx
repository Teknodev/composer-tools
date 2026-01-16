import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";


type listItem = {
  icon: TypeMediaInputValue;
  itemSubtitle: React.JSX.Element;
  text: React.JSX.Element;
  title: React.JSX.Element;
}

class List7 extends BaseList {
  static getName(): string {
    return "List 7";
  }
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Features",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Services",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"));

    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Item",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemSubtitle",
              displayer: "Item Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Contagious Energy",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemSubtitle",
              displayer: "Item Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Contagious Energy",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
            },
            {
              type: "string",
              key: "itemSubtitle",
              displayer: "Item Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value:
                "Contagious Energy",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4,
    });
    this.addProp({
      type: "boolean",
      key: "showIndex",
      displayer: "Show Index",
      value: true,
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }
  render() {
    const ListItems = this.castToObject<listItem[]>("list-items");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const button = this.castToObject<any>("button");
    const buttonText = this.castToString(button?.text);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("header-section")}>
            {this.castToString(subtitle) && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {subtitle}
              </Base.SectionSubTitle>
            )}
            {this.castToString(title) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {title}
              </Base.SectionTitle>
            )}
            {this.castToString(description) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {description}
              </Base.SectionDescription>
            )}
          </Base.VerticalContent>
          {(ListItems.length > 0) && (
            <Base.ListGrid className={this.decorateCSS("items-wrapper")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }} >
              {ListItems.map((item: any, index: number) => {
                const hasTitle = this.castToString(item.title);
                const hasText = this.castToString(item.text);
                const showIndex = !!this.getPropValue("showIndex");
                const itemSubtitleExist = this.castToString(item.itemSubtitle);
                const iconValue = item.icon;
                const iconExist = !!(
                  iconValue &&
                  ((iconValue.type === "icon" && (iconValue as any).name) || (iconValue.type === "image" && (iconValue as any).url))
                );
                if (!hasTitle && !hasText && !showIndex) return null;
                return (
                  <div
                    key={index}
                    className={this.decorateCSS("list-item")}
                  >
                    <Base.VerticalContent
                      className={this.decorateCSS("item-content")}
                      data-animation={this.getPropValue("hoverAnimation")}
                    >
                      <div className={this.decorateCSS("border-layer-1")}></div>
                      <div className={this.decorateCSS("border-layer-2")}></div>
                      {showIndex && (
                        <Base.H1 className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</Base.H1>
                      )}
                      {iconExist && (
                        <Base.Media value={item.icon} className={this.decorateCSS("item-icon")} />
                      )}
                      {itemSubtitleExist && (
                        <Base.H6 className={this.decorateCSS("item-subtitle")}>{item.itemSubtitle}</Base.H6>
                      )}
                      {hasTitle && (
                        <Base.H3 className={this.decorateCSS("item-title")}>{item.title}</Base.H3>
                      )}
                      {hasText && (
                        <Base.P className={this.decorateCSS("description")}>{item.text}</Base.P>
                      )}
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </Base.ListGrid>
          )}
          {buttonText && (
            <div className={this.decorateCSS("button-wrapper")}>
              <ComposerLink path={button?.url}>
                <Base.Button buttonType={button?.type} className={this.decorateCSS("button")}>
                  <Base.P className={this.decorateCSS("button-text")}>{button?.text}</Base.P>
                </Base.Button>
              </ComposerLink>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List7;
