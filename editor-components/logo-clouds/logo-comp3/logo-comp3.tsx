import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type TImage = {
  imageLink: string,
  image: string
}
class LogoComp3Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Associated Brand",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Brands Available",
    });
    this.addProp({
      type: "boolean",
      key: "toggleDividerLine",
      displayer: "Toggle Title Divider Line",
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
      displayer: "Toggle Lines",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
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

  getName(): string {
    return "Logo Cloud 3";
  }

  render() {
    const items = this.castToObject<TImage[]>("items");


    const emptyGridCount = !!(items.length % this.getPropValue("itemCount")) ? (this.getPropValue("itemCount") - (items.length % this.getPropValue("itemCount"))) : 0;
    const emptyGrids = new Array(emptyGridCount).fill(true);

    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) && (
            <Base.VerticalContent className={this.decorateCSS("titles")}>
              {titleExist && (
                <Base.H1 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.H1>
              )}
              {titleExist && subtitleExist && this.getPropValue("toggleDividerLine") && (
                <div className={this.decorateCSS("title-line")}></div>
              )}
              {subtitleExist && (
                <div className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {items?.length > 0 && (
            <Base.ListGrid
              gridCount={{
                pc: this.getPropValue("itemCount"),
                tablet: this.getPropValue("itemCount"),
                phone: 1,
              }}
              className={`${this.decorateCSS("images-container")} ${this.getPropValue("toggleLines") ? this.decorateCSS("lines-active") : ""} `}
            >
              {items.map((item: TImage, index: number) => {
                return (
                  <ComposerLink path={item.imageLink}>
                    <div className={this.decorateCSS("image-item")} key={index}>
                      <img
                        className={this.decorateCSS("image")}
                        src={item.image}
                        alt="logo"
                      />
                    </div>
                  </ComposerLink>
                );
              })}
              {emptyGrids.map((item: TImage, index: number) => {
                return (
                  <div className={this.decorateCSS("image-item")} key={index}>
                  </div>
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
