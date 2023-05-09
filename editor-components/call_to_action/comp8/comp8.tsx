import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp8.module.scss";

class Comp8Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit amet consectetur",
    });
    this.addProp({
      type: "string",
      key: "leftCardTitle",
      displayer: "Left Card Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "leftCardDescription",
      displayer: "Left Card Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "centerCardTitle",
      displayer: "Center Card Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "centerCardDescription",
      displayer: "Center Card Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "rightCardTitle",
      displayer: "Right Card Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "rightCardDescription",
      displayer: "Right Card Description",
      value: PlaceholderFiller.shortText(),
    });
  }

  getName(): string {
    return "Comp8";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp8-page")}>
            <div className={this.decorateCSS("top-child")}>
              <h1>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("card")}>
                <h3>{this.getPropValue("leftCardTitle")}</h3>
                <p>{this.getPropValue("leftCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
                <h3>{this.getPropValue("centerCardTitle")}</h3>
                <p>{this.getPropValue("centerCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
                <h3>{this.getPropValue("rightCardTitle")}</h3>
                <p>{this.getPropValue("rightCardDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp8Page;
