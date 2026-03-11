import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./list7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ListItem = {
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
              value: "Contagious Energy",
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
              value: "Contagious Energy",
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
              value: "Contagious Energy",
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

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const listItems = this.castToObject<ListItem[]>("list-items");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("header-section")}>
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
          </Base.VerticalContent>

          {listItems.length > 0 && (
            <Base.ListGrid className={this.decorateCSS("items-wrapper")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3 }}>
              {listItems.map((item: ListItem, index: number) => {
                const itemTitleExist = this.castToString(item.title);
                const itemTextExist = this.castToString(item.text);
                const itemSubtitleExist = this.castToString(item.itemSubtitle);
                const showIndexExist = !!this.getPropValue("showIndex");
                const iconExist = !!((item.icon as any)?.name || (item.icon as any)?.url);

                if (!itemTitleExist && !itemTextExist && !showIndexExist) return null;

                return (
                  <div key={index} className={this.decorateCSS("list-item")}>
                    <Base.VerticalContent
                      className={this.decorateCSS("item-content")}
                      data-animation={this.getPropValue("hoverAnimation")}
                    >
                      <div className={this.decorateCSS("border-layer-1")}></div>
                      <div className={this.decorateCSS("border-layer-2")}></div>
                      {showIndexExist && (
                        <Base.H1 className={this.decorateCSS("index")}>{index < 9 ? `0${index + 1}` : index + 1}</Base.H1>
                      )}
                      {iconExist && (
                        <Base.Media value={item.icon} className={this.decorateCSS("item-icon")} />
                      )}
                      {itemSubtitleExist && (
                        <Base.H6 className={this.decorateCSS("item-subtitle")}>{item.itemSubtitle}</Base.H6>
                      )}
                      {itemTitleExist && (
                        <Base.H3 className={this.decorateCSS("item-title")}>{item.title}</Base.H3>
                      )}
                      {itemTextExist && (
                        <Base.P className={this.decorateCSS("description")}>{item.text}</Base.P>
                      )}
                    </Base.VerticalContent>
                  </div>
                );
              })}
            </Base.ListGrid>
          )}

          {buttons?.length > 0 && (
            <div className={this.decorateCSS("buttons-wrapper")}>
              {buttons.map((button: any, index: number) => {
                const buttonTextExist = this.castToString(button.text);
                if (!buttonTextExist) return null;
                return (
                  <ComposerLink key={index} path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List7;
