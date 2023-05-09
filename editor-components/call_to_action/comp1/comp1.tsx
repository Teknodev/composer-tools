import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp1.module.scss";

class Comp1Page extends BaseCallToAction {
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
      key: "description",
      displayer: "Description",
      value: "Officiis error placeat eos qui nemo",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
    });
  }

  getName(): string {
    return "Comp1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp1-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <ComposerLink path={this.getPropValue("link")}>
              <span
                className={this.decorateCSS("button")}
              >
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp1Page;
