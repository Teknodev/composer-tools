import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type TImage = {
  imageLink: string,
  image: TypeMediaInputValue
}
class LogoComp3Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Brands Available",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Associated Brand",
    });

    this.addProp({
      type: "boolean",
      key: "toggleDividerLine",
      displayer: "Header Line",
      value: true,
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 6,
    });
    this.addProp({
      type: "boolean",
      key: "toggleLines",
      displayer: "Logo Lines",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Media Items",
      value: [
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 3";
  }

  render() {
    const items = this.castToObject<TImage[]>("items");
    const itemCount = this.getPropValue("itemCount") ?? 4;
    const totalItems = items?.length || 0;
    const toggleLines = this.getPropValue("toggleLines");

    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));

    const getItemClassName = (index: number) => {
      let className = this.decorateCSS("image-item");
      
      if (toggleLines) {
        const isLastInRow = (index + 1) % itemCount === 0;
        if (isLastInRow) {
          className += ` ${this.decorateCSS("no-right-border")}`;
        }
        
        const totalRows = Math.ceil(totalItems / itemCount);
        const currentRow = Math.floor(index / itemCount) + 1;
        if (currentRow === totalRows) {
          className += ` ${this.decorateCSS("no-bottom-border")}`;
        }
      }
      
      return className;
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {titleExist && (
                <Base.H4 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.H4>
              )}
              {titleExist && subtitleExist && this.getPropValue("toggleDividerLine") && (
                <div className={this.decorateCSS("line")}></div>
              )}
              {subtitleExist && (
                <Base.H3 className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.H3>
              )}
            </Base.VerticalContent>
          )}
          {items?.length > 0 && (
            <Base.ListGrid
              gridCount={{
                pc: itemCount,
                tablet: itemCount,
                phone: 1,
              }}
              className={`${this.decorateCSS("images-container")} ${toggleLines ? this.decorateCSS("lines-active") : ""} `}
            >
              {items.map((item: TImage, index: number) => {
                return item.image && (
                  <ComposerLink path={item.imageLink}>
                    <div className={getItemClassName(index)} key={index}>
                      <Base.Media value={item.image} className={this.decorateCSS("image")} />
                    </div>
                  </ComposerLink>
                );
              })}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp3Page;