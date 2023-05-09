import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp2.module.scss";

class Comp2Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: PlaceholderFiller.string(),
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value: PlaceholderFiller.shortText(),
      displayer: "Description",
    });
    this.addProp({
      type: "string",
      key: "firstButtonText",
      value: PlaceholderFiller.string(),
      displayer: "First Button Text",
    });
    this.addProp({
      type: "page",
      key: "firstButtonLink",
      displayer: "First Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "secondButtonText",
      value: PlaceholderFiller.string(),
      displayer: "Second Button Text",
    });
    this.addProp({
      type: "page",
      key: "secondButtonLink",
      displayer: "Second Link",
      value: "",
    });
  }

  getName(): string {
    return "Comp2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("comp2-page")}>
          <h1>{this.getPropValue("title")}</h1>
          <h2>{this.getPropValue("description")}</h2>
        </div>
        <div className={this.decorateCSS("comp2-page")}>
          <ComposerLink path={this.getPropValue("firstButtonLink")}>
            <span
              className={this.decorateCSS("button")}
              
            >
              {this.getPropValue("firstButtonText")}
            </span>
          </ComposerLink>
          <ComposerLink path={this.getPropValue("secondButtonLink")}>
            <span
              className={this.decorateCSS("button2")}
              
            >
              {this.getPropValue("secondButtonText")}
            </span>
          </ComposerLink>
        </div>
      </div>
    );
  }
}

export default Comp2Page;
